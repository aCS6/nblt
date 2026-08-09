#!/usr/bin/env node
/* Coverage + consistency checker for the explanation layer.  Dev-only.
 *
 *   node scripts/check_explanations.js          # all units
 *   node scripts/check_explanations.js 1 2 3    # specific units
 *
 * Extracts each chapter's real answer key by running its own
 * window.__grammarInit block with the init* helpers stubbed out, then
 * compares that key against explanations/unitN.js:
 *   MISSING  - answer key has an item with no explanation
 *   EXTRA    - explanation for an id that is not in the answer key
 *   MISMATCH - entry.a is not an accepted answer for that id
 *   THIN     - no wrong[] entries, or an empty why
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const norm = s => String(s).trim().toLowerCase()
  .replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ');

function answerKey(unit) {
  const html = fs.readFileSync(path.join(ROOT, 'chapters', `unit${unit}.html`), 'utf8');
  const m = html.match(/window\.__grammarInit\s*=\s*function\s*\([^)]*\)\s*\{([\s\S]*?)\n\};/);
  if (!m) throw new Error(`unit${unit}: could not locate __grammarInit`);

  const key = {};
  const add = (id, accepted) => { key[id] = (key[id] || []).concat(accepted); };

  const sandbox = {
    loadAudio() {}, initNav() {},
    document: {
      querySelectorAll: () => [], getElementById: () => null, addEventListener() {},
      createElement: () => ({ style: {}, classList: { add() {} } }),
    },
    window: {},
    initGapFill: ({ answers = {} }) => Object.entries(answers)
      .forEach(([id, v]) => add(id, Array.isArray(v) ? v : [v])),
    initEndings: ({ answers = {} }) => Object.entries(answers)
      .forEach(([id, v]) => add(id, [v])),
    initGFT: ({ answers = {} }) => Object.entries(answers)
      .forEach(([id, v]) => add(id, [v])),
    initMCGroups: ({ answers = {} }) => Object.entries(answers)
      .forEach(([id, v]) => add(id, [v])),
    initTrueFalse: ({ answers = {} }) => Object.entries(answers)
      .forEach(([id, v]) => add(id, [v && v.correct != null ? v.correct : v])),
  };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  new vm.Script(`(function(){${m[1]}\n})()`).runInContext(sandbox);

  /* Units 21-25 don't use the shared init* helpers; they declare local
     `var X_ANSWERS = { … }` objects and wire their own handlers. Pull those
     out by brace-matching and evaluate each one. */
  const domIds = new Set([...html.matchAll(/data-id="([^"]+)"/g)].map(x => x[1]));
  const body = m[1];
  const re = /\b(?:var|const|let)\s+([A-Za-z0-9_]+)\s*=\s*\{/g;
  let d;
  while ((d = re.exec(body)) !== null) {
    const start = body.indexOf('{', d.index);
    let depth = 0, end = -1, inStr = null;
    for (let i = start; i < body.length; i++) {
      const c = body[i];
      if (inStr) {
        if (c === '\\') i++;
        else if (c === inStr) inStr = null;
      } else if (c === '"' || c === "'" || c === '`') inStr = c;
      else if (c === '{') depth++;
      else if (c === '}' && --depth === 0) { end = i + 1; break; }
    }
    if (end === -1) continue;
    let obj;
    try {
      obj = new vm.Script(`(${body.slice(start, end)})`).runInContext(vm.createContext({}));
    } catch { continue; }
    /* Only treat it as an answer key if its keys are real data-ids. */
    const keys = Object.keys(obj);
    if (!keys.length || !keys.every(k => domIds.has(k))) continue;
    for (const [id, v] of Object.entries(obj)) {
      if (v == null) continue;
      if (Array.isArray(v)) add(id, v);
      else if (typeof v === 'object') add(id, [v.correct != null ? v.correct : String(v)]);
      else add(id, [v]);
    }
  }
  return key;
}

/* An explanation's `a` matches the key if it equals an accepted answer, or —
   for letter-keyed items (MC "A", sentence endings "a") — if it is that letter
   followed by a separator, e.g. "A - 15 metres". Spelling out the option is
   more useful in the modal than showing a bare letter. */
function answerMatches(explA, accepted) {
  if (explA == null) return false;
  const v = norm(explA);
  return accepted.some(a => {
    const k = norm(a);
    if (k === v) return true;
    return /^[a-z]$/.test(k) && new RegExp(`^${k}\\s*[-–—:.)]`).test(v);
  });
}

function explanations(unit) {
  const file = path.join(ROOT, 'explanations', `unit${unit}.js`);
  if (!fs.existsSync(file)) return null;
  const sandbox = { window: {} };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  new vm.Script(fs.readFileSync(file, 'utf8')).runInContext(sandbox);
  return sandbox.window.__EXPL || {};
}

const units = process.argv.slice(2).length
  ? process.argv.slice(2).map(Number)
  : Array.from({ length: 25 }, (_, i) => i + 1);

const totals = { items: 0, explained: 0, missing: 0, extra: 0, mismatch: 0, thin: 0, markup: 0, contradict: 0, absent: 0 };

for (const u of units) {
  const key = answerKey(u);
  const expl = explanations(u);
  const ids = Object.keys(key);
  totals.items += ids.length;

  if (expl === null) {
    console.log(`unit${String(u).padEnd(2)}  - explanations/unit${u}.js NOT WRITTEN (${ids.length} items)`);
    totals.absent++;
    continue;
  }

  const problems = [];
  for (const id of ids) {
    const e = expl[id];
    if (!e) { problems.push(`MISSING  ${id}`); totals.missing++; continue; }
    totals.explained++;
    if (!answerMatches(e.a, key[id])) {
      problems.push(`MISMATCH ${id}  expl.a=${JSON.stringify(e.a)}  key=${JSON.stringify(key[id])}`);
      totals.mismatch++;
    }
    if (!e.why || !String(e.why).trim()) {
      problems.push(`THIN     ${id}  empty why`); totals.thin++;
    } else if (!Array.isArray(e.wrong) || !e.wrong.length) {
      problems.push(`THIN     ${id}  no wrong[] entries`); totals.thin++;
    } else if (e.wrong.some(w => !w || !w.opt || !w.why || !String(w.why).trim())) {
      problems.push(`THIN     ${id}  a wrong[] entry is incomplete`); totals.thin++;
    }
    /* q, a and wrong[].opt are HTML-escaped by explCard(), so markup in them
       renders as literal <em> text. Only why/rule may carry tags. */
    const plain = [['a', e.a],
                   ...(Array.isArray(e.wrong) ? e.wrong : []).map((w, i) => [`wrong[${i}].opt`, w && w.opt])];
    for (const [field, val] of plain) {
      if (val && /<\/?[a-z][^>]*>|&[a-z]+;|&#\d+;/i.test(String(val))) {
        problems.push(`MARKUP   ${id}  ${field} contains markup/entities (escaped at render)`);
        totals.markup++;
      }
    }
    /* The worst possible defect: a wrong[] entry that the grader actually marks
       correct. The modal would tell the learner their accepted answer is wrong.
       Letter-keyed items are exempt - "A" as a distractor is the option letter,
       not a rival spelling of the answer. */
    const letterKeyed = key[id].some(k => /^[a-z]$/i.test(String(k).trim()));
    if (!letterKeyed) {
      for (const w of (Array.isArray(e.wrong) ? e.wrong : [])) {
        if (w && w.opt && key[id].some(k => norm(k) === norm(w.opt))) {
          problems.push(`CONTRADICT ${id}  wrong[] lists ${JSON.stringify(w.opt)}, which the key accepts`);
          totals.contradict++;
        }
      }
    }
    /* q goes through explInline(), which restores a small inline whitelist.
       Anything outside it would show up as literal tag text. */
    if (e.q && /<\/?(?!(?:em|strong|code|s|u|sub|sup|br)\b)[a-z][^>]*>|&(?!lt;|gt;|amp;|quot;|#39;)[a-z]+;/i.test(String(e.q))) {
      problems.push(`MARKUP   ${id}  q contains non-whitelisted markup/entities`);
      totals.markup++;
    }
  }
  for (const id of Object.keys(expl)) {
    if (!key[id]) { problems.push(`EXTRA    ${id}  not in answer key`); totals.extra++; }
  }

  console.log(`unit${String(u).padEnd(2)}  ${String(ids.length).padStart(3)} items  ${problems.length ? problems.length + ' problem(s)' : 'OK'}`);
  problems.forEach(p => console.log(`          ${p}`));
}

console.log('\n--- totals ---');
console.log(`answer-key items : ${totals.items}`);
console.log(`explained        : ${totals.explained}`);
console.log(`missing          : ${totals.missing}`);
console.log(`extra            : ${totals.extra}`);
console.log(`answer mismatch  : ${totals.mismatch}`);
console.log(`thin             : ${totals.thin}`);
console.log(`markup in q/a/opt: ${totals.markup}`);
console.log(`contradicts key  : ${totals.contradict}`);
console.log(`units not written: ${totals.absent}`);

process.exit(totals.missing + totals.extra + totals.mismatch + totals.thin + totals.markup + totals.contradict + totals.absent ? 1 : 0);
