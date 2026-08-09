/* Dev-only smoke test: loads a chapter in jsdom, runs the exercise wiring and
   the explanation layer, then asserts the chips, buttons and modal render.
   Usage: node scripts/test_explanations.js [unit]   (default 1) */
'use strict';
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const unit = process.argv[2] || '1';
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'chapters', `unit${unit}.html`), 'utf8')
  /* strip CDN tags: jsdom must not fetch, and Alpine is stubbed below */
  .replace(/<script[^>]*src="[^"]*alpine[^"]*"[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*src="[^"]*nblt-[^"]*"[^>]*><\/script>/gi, '');

const dom = new JSDOM(html, {
  /* 'dangerously' runs the chapter's own inline __grammarInit block. External
     <script src> tags are skipped (no `resources: usable`), so utils.js and the
     explanation data are injected below as real script elements — eval() would
     trap their declarations in a strict-mode scope. */
  runScripts: 'dangerously',
  url: 'file://' + path.join(ROOT, 'chapters') + '/',
});
const { window } = dom;
window.requestAnimationFrame = cb => cb();

const run = f => {
  const s = window.document.createElement('script');
  s.textContent = fs.readFileSync(f, 'utf8');
  window.document.body.appendChild(s);
};
run(path.join(ROOT, 'scripts', 'utils.js'));
run(path.join(ROOT, 'explanations', `unit${unit}.js`));

/* Alpine never runs here, so drive the same entry points it would. */
const drive = window.document.createElement('script');
drive.textContent = 'if (window.__grammarInit) window.__grammarInit(); initExplanations();';
window.document.body.appendChild(drive);

const $ = s => window.document.querySelectorAll(s);
const fail = [];
const ok = (cond, msg) => { console.log(`${cond ? 'PASS' : 'FAIL'}  ${msg}`); if (!cond) fail.push(msg); };

const explCount = Object.keys(window.__EXPL).length;
const chips = $('.expl-chip');
const btns = $('.btn-explain');

ok(chips.length === explCount, `chip per explained item (${chips.length}/${explCount})`);
ok(btns.length > 0, `per-exercise buttons rendered (${btns.length})`);
ok($('#expl-overlay').length === 1, 'single shared modal exists');
ok($('#expl-styles').length === 1, 'CSS injected at runtime');
ok(window.document.getElementById('expl-overlay').hidden, 'modal starts hidden');

/* every exercise containing an explained item got a button */
const exWithItems = [...$('.exercise')].filter(ex =>
  [...ex.querySelectorAll('[data-id]')].some(el => window.__EXPL[el.dataset.id]));
ok(exWithItems.every(ex => ex.querySelector('.btn-explain')),
   `all ${exWithItems.length} exercises with items have a button`);

/* open via a chip */
chips[0].dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
const overlay = window.document.getElementById('expl-overlay');
ok(!overlay.hidden, 'chip click opens the modal');
ok($('.expl-card').length === 1, 'chip modal shows exactly one card');
ok($('.expl-ok').length === 1 && $('.expl-bad').length >= 1,
   'card shows the correct answer and at least one wrong option');

/* Esc closes */
window.document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
ok(!overlay.classList.contains('open'), 'Escape closes the modal');

/* Open via an exercise button. Pick an exercise that actually has more than one
   explained item: in some chapters the first exercise holds a single gap, and a
   one-card modal there is correct behaviour, not a failure. */
const explainedIn = ex => new Set([...ex.querySelectorAll('[data-id]')]
  .map(el => el.dataset.id).filter(id => window.__EXPL[id])).size;

const multi = [...$('.exercise')]
  .map(ex => ({ ex, n: explainedIn(ex) }))
  .filter(o => o.n > 1)
  .sort((a, b) => b.n - a.n)[0];

ok(!!multi, 'at least one exercise has multiple explained items');
if (multi) {
  multi.ex.querySelector('.btn-explain')
    .dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  const cards = $('.expl-card').length;
  ok(cards === multi.n, `exercise button shows all its items (${cards}/${multi.n} cards)`);
}

/* Every button must render exactly one card per explained item in its exercise. */
const mismatched = [...$('.exercise')].filter(ex => {
  const btn = ex.querySelector('.btn-explain');
  if (!btn) return false;
  btn.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  return $('.expl-card').length !== explainedIn(ex);
});
ok(mismatched.length === 0, 'every exercise button renders one card per item');

/* no chip is ever injected for an item with no explanation */
const orphans = [...$('[data-id]')].filter(
  el => !window.__EXPL[el.dataset.id] && el.dataset.explChip === '1');
ok(orphans.length === 0, 'no chips on unexplained items');

console.log(fail.length ? `\n${fail.length} FAILURE(S)` : '\nall checks passed');
process.exit(fail.length ? 1 : 0);
