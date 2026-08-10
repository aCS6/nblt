'use strict';
/* global SPEAKING_DATA */

const D = window.SPEAKING_DATA;
const view = document.getElementById('view');

/* ================= tiny utils ================= */
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
const esc = (s) =>
  String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const md = (s) =>
  String(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
const parasHtml = (arr) => (arr || []).map((p) => `<p>${md(esc(p))}</p>`).join('');
const rand = (n) => Math.floor(Math.random() * n);

/* ================= state ================= */
const store = {
  get(k, d) {
    try { const v = localStorage.getItem('ss-' + k); return v === null ? d : JSON.parse(v); } catch { return d; }
  },
  set(k, v) {
    try { localStorage.setItem('ss-' + k, JSON.stringify(v)); } catch { /* ignore */ }
  },
};

const state = {
  theme: store.get('theme', 'auto'),
  practice: store.get('practice', true),
  progress: store.get('progress', { common: {}, topics: {}, cards: {}, bonus: {} }),
  last: store.get('last', null),
};

const saveProgress = () => store.set('progress', state.progress);

function progressCounts() {
  const topics = D.part1.topics;
  const cards = D.cards;
  const topicsDone = topics.filter((t) => state.progress.topics[t.slug]).length;
  const commonDone = Object.keys(state.progress.common).length;
  const cardsDone = cards.filter((c) => state.progress.cards[c.number]).length;
  const bonusDone = Object.keys(state.progress.bonus).length;
  const p1 = { done: topicsDone, total: topics.length };
  const pc = { done: commonDone, total: D.part1.common.length };
  const p2 = { done: cardsDone, total: cards.length };
  const pb = { done: bonusDone, total: D.bonus.reduce((n, t) => n + t.items.length, 0) };
  const weights = [p1.total, pc.total, p2.total, pb.total].reduce((a, b) => a + b, 0) || 1;
  const overall = Math.round(((p1.done + pc.done + p2.done + pb.done) / weights) * 100);
  return { p1, pc, p2, pb, overall };
}

/* ================= theme ================= */
function applyTheme() {
  const t =
    state.theme === 'auto'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : state.theme;
  document.documentElement.setAttribute('data-theme', t);
}
function toggleTheme() {
  state.theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  store.set('theme', state.theme);
  applyTheme();
}

/* ================= routing ================= */
function route() {
  const h = location.hash.replace(/^#\/?/, '');
  const parts = h.split('/').filter(Boolean);
  return { name: parts[0] || 'home', parts };
}

const TITLES = {
  home: 'IELTS Speaking Studio — Part 1, 2 & 3 Topics with Model Answers',
  part1: 'Part 1 Topics — IELTS Speaking Studio',
  common: 'Common Questions — IELTS Speaking Studio',
  topic: 'Part 1 Topic — IELTS Speaking Studio',
  part2: 'Part 2 Cue Cards — IELTS Speaking Studio',
  card: 'Cue Card — IELTS Speaking Studio',
  bonus: 'Part 1 Workbook — IELTS Speaking Studio',
  tips: '10 Expert Exam Tips — IELTS Speaking Studio',
};

/* ================= nav ================= */
const ICON = {
  home: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  chat: '<path d="M21 12a8 8 0 0 1-8 8H4l2.2-3.1A8 8 0 1 1 21 12z"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r=".8" fill="currentColor"/><circle cx="4.5" cy="12" r=".8" fill="currentColor"/><circle cx="4.5" cy="18" r=".8" fill="currentColor"/>',
  grid: '<rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/>',
  spark: '<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/>',
};
const icon = (name, cls = 'nav-icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[name]}</svg>`;

function buildNav(active, sub) {
  const cardsCount = D.cards.length;
  const s = D.stats;
  const nav = $('#nav');
  nav.innerHTML = `
    <div class="nav-label">Study</div>
    <a class="nav-link ${active === 'home' ? 'active' : ''}" href="#/">
      ${icon('home')}<span>Home</span>
    </a>

    <div class="nav-label">Part 1 · Introduction</div>
    <a class="nav-link ${active === 'part1' && sub !== 'topic' && sub !== 'common' ? 'active' : ''}" href="#/part1">
      ${icon('list')}<span>Practice Topics</span><span class="nav-count">${s.topics}</span>
    </a>
    <a class="nav-link ${sub === 'common' ? 'active' : ''}" href="#/part1/common">
      ${icon('chat')}<span>Common Questions</span><span class="nav-count">${s.commonQ}</span>
    </a>

    <div class="nav-label">Part 2 &amp; 3 · Cue Cards</div>
    <a class="nav-link ${active === 'part2' ? 'active' : ''}" href="#/part2">
      ${icon('grid')}<span>All Cue Cards</span><span class="nav-count">${cardsCount}</span>
    </a>
    <a class="nav-link" href="#/part2/rand">
      ${icon('dice')}<span>Random Card</span>
    </a>

    <div class="nav-label">Extras</div>
    <a class="nav-link ${active === 'bonus' ? 'active' : ''}" href="#/bonus">
      ${icon('spark')}<span>Part 1 Workbook</span>
    </a>
    <a class="nav-link ${active === 'tips' ? 'active' : ''}" href="#/tips">
      ${icon('chat')}<span>Exam Tips</span>
    </a>

    <div class="nav-label">NBLT</div>
    <a class="nav-link" href="../index.html" title="Back to the NBLT app hub">
      ${icon('home')}<span>All apps hub</span>
    </a>
  `;
}

/* progress card in sidebar */
function renderProgressCard() {
  const p = progressCounts();
  $('#progressCard').innerHTML = `
    <div class="progress-card">
      <h4>Your progress</h4>
      <div class="pc-sub">Studied ${p.overall}% overall</div>
      <div class="pc-row"><span>Part 1 topics</span><b>${p.p1.done}/${p.p1.total}</b></div>
      <div class="bar"><i style="width:${(p.p1.done / p.p1.total) * 100}%"></i></div>
      <div class="pc-row"><span>Common questions</span><b>${p.pc.done}/${p.pc.total}</b></div>
      <div class="bar"><i style="width:${(p.pc.done / p.pc.total) * 100}%"></i></div>
      <div class="pc-row"><span>Cue cards</span><b>${p.p2.done}/${p.p2.total}</b></div>
      <div class="bar"><i style="width:${(p.p2.done / p.p2.total) * 100}%"></i></div>
      <div style="margin-top:10px">
        <a class="btn btn-ghost btn-sm btn-block" href="#/part1">Keep studying</a>
      </div>
    </div>`;
}

/* ================= search index ================= */
let searchIndex = null;
function buildSearchIndex() {
  const idx = [];
  for (const t of D.part1.topics) {
    idx.push({ type: 'Topic', group: 'Part 1 · Practice topics', title: t.title, text: t.questions.join(' '), url: '#/part1/topic/' + t.slug });
    for (const a of t.answers) idx.push({ type: 'Model answer', group: 'Part 1 · Model answers', title: a.q, text: a.a.join(' '), url: '#/part1/topic/' + t.slug });
  }
  D.part1.common.forEach((c) =>
    idx.push({ type: 'Common question', group: 'Part 1 · Common questions', title: c.q, text: c.a.join(' '), url: '#/part1/common' })
  );
  for (const c of D.cards) {
    idx.push({ type: 'Cue card', group: 'Part 2 · Cue cards', title: `Cue card #${c.number} — ${c.prompt}`, text: [...c.bullets, ...c.modelAnswer].join(' '), url: `#/part2/${c.number}` });
    for (const p of c.part3 || [])
      idx.push({ type: 'Part 3', group: `Part 3 · Follow-up (cue card #${c.number})`, title: p.q, text: p.a.join(' '), url: `#/part2/${c.number}` });
  }
  for (const t of D.bonus)
    for (const it of t.items)
      idx.push({ type: 'Workbook', group: 'Part 1 workbook · ' + t.title, title: it.q, text: it.a.join(' '), url: '#/bonus' });
  searchIndex = idx;
}

function search(q) {
  if (!searchIndex) buildSearchIndex();
  const tokens = norm(q).split(' ').filter(Boolean);
  if (!tokens.length) return [];
  const scored = [];
  for (const e of searchIndex) {
    const title = norm(e.title);
    const text = norm(e.text);
    let score = 0, matched = 0;
    for (const tk of tokens) {
      if (title.includes(tk)) { score += 4; matched++; }
      else if (text.includes(tk)) { score += 1; matched++; }
    }
    if (matched === tokens.length && score > 0) scored.push({ ...e, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 60);
}

function snippet(text, q) {
  const t = String(text || '');
  const i = t.toLowerCase().indexOf(norm(q).split(' ')[0]);
  const start = Math.max(0, i - 60);
  const seg = (start > 0 ? '…' : '') + t.slice(start, start + 180) + (start + 180 < t.length ? '…' : '');
  return hl(seg, q);
}
function hl(text, q) {
  const safe = esc(text);
  const term = esc(q).trim();
  if (!term) return safe;
  return safe.replace(new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
}

/* ================= render ================= */
function render() {
  const r = route();
  let sub = '';
  if (r.name === 'part1' && r.parts[1]) sub = r.parts[1] === 'common' ? 'common' : 'topic';
  buildNav(r.name, sub);
  renderProgressCard();

  let html = '';
  switch (r.name) {
    case 'part1':
      html = r.parts[1] === 'common' ? viewCommon() : r.parts[1] ? viewTopic(r.parts[2]) : viewPart1();
      break;
    case 'part2':
      html = r.parts[1] ? viewCard(r.parts[1]) : viewPart2();
      break;
    case 'bonus':
      html = viewBonus();
      break;
    case 'tips':
      html = viewTips();
      break;
    default:
      html = viewHome();
  }

  view.innerHTML = `<div class="wrap view-enter${state.practice ? '' : ' reading-mode'}">${html}</div>`;
  document.title = TITLES[r.name] || TITLES.home;
  // keep accordion aria state in sync with initial visibility
  $$('#view .qa-head').forEach((h) => {
    const parent = h.closest('.qa');
    h.setAttribute('aria-expanded', parent && parent.classList.contains('open') ? 'true' : 'false');
  });
  window.scrollTo(0, 0);
  state.last = location.hash;
  store.set('last', location.hash);
  $('#menuBtn').setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
}

/* ---------- home ---------- */
function viewHome() {
  const s = D.stats;
  const p = progressCounts();
  const totalQ = s.commonQ + s.topicQ;
  const ringR = 46, ringC = 2 * Math.PI * ringR;
  const resume = state.last && state.last !== '#/' ? `<a class="btn btn-ghost" href="${esc(state.last)}">Resume where you left off →</a>` : '';
  return `
    <section class="hero">
      <span class="eyebrow">Free IELTS speaking practice · offline ready</span>
      <h1>Master every part of the <span class="grad">IELTS Speaking test</span></h1>
      <p class="lede">A complete study companion — Part 1 topics with band-7 model answers, 79 Part 2 cue cards with model answers, and every Part 3 follow-up discussion, organised for focused practice.</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="#/part1">Start with Part 1</a>
        <a class="btn btn-ghost" href="#/part2/rand">🎲 Practice a random cue card</a>
        ${resume}
      </div>
    </section>

    <section class="stats">
      <div class="stat s-p1"><b>${s.topics}</b><span>Part 1 topics</span></div>
      <div class="stat s-p1"><b>${totalQ}</b><span>questions + answers</span></div>
      <div class="stat s-p2"><b>${s.cards}</b><span>cue cards (Part 2)</span></div>
      <div class="stat s-p3"><b>${s.part3}</b><span>Part 3 follow-ups</span></div>
    </section>

    ${viewRoadmap()}

    <div class="section-title"><h2>How the test works</h2></div>
    <div class="feature-grid">
      <a class="feature" href="#/part1" style="color:inherit">
        <div class="f-icon f-p1">01</div>
        <h3>Part 1 — Introduction</h3>
        <p>4–5 minutes of familiar questions about you, your home, work, hobbies and daily life. Practise by topic with model answers.</p>
      </a>
      <a class="feature" href="#/part2" style="color:inherit">
        <div class="f-icon f-p2">02</div>
        <h3>Part 2 — Cue card</h3>
        <p>1 minute to prepare, 1–2 minutes to speak. Each card has the prompt points plus a full model answer to study.</p>
      </a>
      <a class="feature" href="#/part2" style="color:inherit">
        <div class="f-icon f-p3">03</div>
        <h3>Part 3 — Discussion</h3>
        <p>4–5 minutes of abstract follow-up questions tied to your cue card. Every card includes its own Part 3 Q&amp;A below the answer.</p>
      </a>
    </div>

    <div class="section-title"><h2>Your progress</h2><span class="hint">saved on this device</span></div>
    <div class="card ring-wrap">
      <div class="ring">
        <svg width="108" height="108" viewBox="0 0 108 108">
          <circle cx="54" cy="54" r="${ringR}" fill="none" stroke="var(--line)" stroke-width="10"/>
          <circle cx="54" cy="54" r="${ringR}" fill="none" stroke="url(#g)" stroke-width="10" stroke-linecap="round"
            stroke-dasharray="${ringC}" stroke-dashoffset="${ringC * (1 - p.overall / 100)}"/>
          <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="var(--p1)"/><stop offset="1" stop-color="var(--p2)"/>
          </linearGradient></defs>
        </svg>
        <div class="ring-val">${p.overall}<small>%</small></div>
      </div>
      <div class="ring-lines">
        <div><div class="pc-row"><span>Part 1 topics practised</span><b>${p.p1.done}/${p.p1.total}</b></div><div class="bar"><i style="width:${(p.p1.done / p.p1.total) * 100}%"></i></div></div>
        <div><div class="pc-row"><span>Common questions studied</span><b>${p.pc.done}/${p.pc.total}</b></div><div class="bar"><i style="width:${(p.pc.done / p.pc.total) * 100}%"></i></div></div>
        <div><div class="pc-row"><span>Cue cards studied</span><b>${p.p2.done}/${p.p2.total}</b></div><div class="bar"><i style="width:${(p.p2.done / p.p2.total) * 100}%"></i></div></div>
      </div>
    </div>

    <div class="section-title"><h2>Study tips</h2></div>
    <div class="tip-list">
      <div class="tip"><h4>🎯 Answer aloud</h4><p>Turn practice mode on and speak your answer before revealing the model answer.</p></div>
      <div class="tip"><h4>🧠 Use the structure</h4><p>Model answers are blueprints — keep the linking phrases and vocabulary, adapt the details to your own life.</p></div>
      <div class="tip"><h4>🔄 Review Part 3 with Part 2</h4><p>Follow-up questions build on your cue card topic. Study them together — they often repeat across cards.</p></div>
      <div class="tip"><h4>⚡ Use the keyboard</h4><p>Press <kbd>/</kbd> to search anything, <kbd>←</kbd> <kbd>→</kbd> to move between cue cards.</p></div>
    </div>

    <div class="section-title"><h2>Expert exam tips</h2><span class="hint"><a href="#/tips">All 10 →</a></span></div>
    <div class="card" style="display:flex;align-items:center;gap:16px;padding:18px 20px">
      <div class="f-icon f-p3" style="margin:0">💡</div>
      <div style="flex:1">
        <h3 style="margin:0 0 3px">Test-day advice from IDP experts</h3>
        <p style="margin:0;font-size:13.5px;color:var(--muted)">Pronunciation, grammar, fluency and confidence — 10 practical tips, each linked to practice on this site.</p>
      </div>
      <a class="btn btn-primary btn-sm" href="#/tips">Read tips →</a>
    </div>
  `;
}

/* ================= roadmap (game-style study path) ================= */
function milestoneStates() {
  const p = progressCounts();
  const total = p.p1.done + p.pc.done + p.p2.done + p.pb.done;
  const defs = [
    { title: 'Kick-off', desc: 'Learn how the three parts of the Speaking test work, then read the 10 expert tips.', to: '#/tips', done: total > 0 },
    { title: 'Common Ground', desc: 'Study the 209 common Part 1 questions that almost every candidate is asked.', to: '#/part1/common', done: p.pc.done >= 100 },
    { title: 'First Topics', desc: 'Practise 15 Part 1 topic groups — question first, then compare with the model answer.', to: '#/part1', done: p.p1.done >= 15 },
    { title: 'Topic Explorer', desc: 'Work through 40 topics and build topic vocabulary as you go.', to: '#/part1', done: p.p1.done >= 40 },
    { title: 'Part 1 Master', desc: 'Clear 75+ topics — you can now handle almost any Part 1 question smoothly.', to: '#/part1', done: p.p1.done >= 75 },
    { title: 'Cue Card Rookie', desc: 'Study your first 10 cue cards: prompt points, model answer, and Part 3 follow-ups.', to: '#/part2', done: p.p2.done >= 10 },
    { title: 'Cue Card Veteran', desc: 'Reach 30 cards. Time yourself: 1 minute prep, 2 minutes speaking.', to: '#/part2', done: p.p2.done >= 30 },
    { title: 'Cue Card Legend', desc: 'Clear 55 cue cards with their Part 3 discussions — the discussion always builds on the card.', to: '#/part2', done: p.p2.done >= 55 },
    { title: 'Workbook & Review', desc: 'Revise with the Part 1 workbook and re-test your weakest topics.', to: '#/bonus', done: p.pb.done >= 20 },
    { title: 'Exam Ready!', desc: 'Reach 85% overall progress, then do a full mock run with a random cue card and go get your band score.', to: '#/part2/rand', done: p.overall >= 85 },
  ];
  const states = defs.map((m) => (m.done ? 'done' : 'todo'));
  const first = states.indexOf('todo');
  return defs.map((m, i) => ({
    ...m,
    state: states[i] === 'todo' ? (i === first ? 'current' : 'locked') : 'done',
  }));
}

function viewRoadmap() {
  const ms = milestoneStates();
  const cur = ms.findIndex((m) => m.state === 'current');
  const level = cur === -1 ? ms.length : cur + 1;
  const pct = ((level - 1) / ms.length) * 100;
  const rows = ms
    .map((m, i) => {
      const right = i % 2 === 1;
      const label = m.state === 'done' ? 'Cleared' : m.state === 'current' ? 'Up next' : 'Locked';
      const btn = m.state === 'done' ? 'Review' : 'Start';
      return `
        <div class="rm-row">
          <div class="rm-card${right ? ' right' : ''}">
            <h3>${esc(m.title)}</h3>
            <p>${esc(m.desc)}</p>
            <a class="btn ${m.state === 'locked' ? 'btn-ghost' : 'btn-primary'} btn-sm" href="${m.to}">${m.state === 'locked' ? '🔒 ' : ''}${btn} →</a>
          </div>
          <div class="rm-badge ${m.state}" aria-label="Level ${i + 1}: ${label}">
            <span class="rm-num">${i + 1}</span>
            <span class="rm-status">${m.state === 'done' ? '✓' : m.state === 'current' ? '▶' : '🔒'}</span>
          </div>
        </div>`;
    })
    .join('');
  return `
    <div class="section-title"><h2>Your study roadmap</h2><span class="hint">${ms.length} levels · from day 0 to exam day</span></div>
    <div class="card roadmap">
      <div class="rm-head">
        <div><b>${cur === -1 ? 'Roadmap cleared — congratulations! 🎉' : 'Level ' + level + ' of ' + ms.length}</b><span>${cur === -1 ? 'You have mastered the full syllabus.' : 'Follow the path, clear each level, and watch your progress grow.'}</span></div>
        <div class="rm-xp"><div class="bar"><i style="width:${Math.max(5, pct)}%"></i></div><small>${Math.round(pct)}% of roadmap</small></div>
      </div>
      ${rows}
    </div>`;
}

/* ================= tips (from IDP IELTS) ================= */
const TIPS = [
  { n: 1, title: "Don't memorise answers", body: 'Examiners can spot scripts instantly, and memorised language cannot show your real level — it may even pull your band down. Practise ideas, structure and linking phrases instead, and adapt the details to your own life.', link: '#/part1', linkLabel: 'Practise with model answers' },
  { n: 2, title: 'Use words you actually own', body: "Avoid \u2018impressive\u2019 words you are not sure about — a mispronounced or misplaced word costs more than a simple, correct one. Build topic word lists and stick to vocabulary you are confident using.", link: '#/part1', linkLabel: 'Explore topics' },
  { n: 3, title: 'Mix up your grammar', body: 'Examiners grade grammatical range and accuracy. Use a blend of simple and complex sentences, switch between past, present and future tenses, and record yourself to catch and correct your own errors.', link: '#/part1/common', linkLabel: 'Practise common questions' },
  { n: 4, title: "Don't stress about your accent", body: 'IELTS examiners are trained to understand a wide range of accents. Focus on clear sounds, word stress and intonation instead — English is a stress-timed language.', link: '#/part2/1', linkLabel: 'Listen to cue card structure' },
  { n: 5, title: 'Pause to think', body: 'A short pause to gather your thoughts is perfectly natural. Buy yourself time with thinking phrases instead of silence or fillers.', chips: ["That's an interesting question…", "I've never thought about that, but…", 'Let me see…', "That's a good point", 'Let me think about that for a minute'], link: '#/part2/rand', linkLabel: 'Try a random cue card' },
  { n: 6, title: 'Skip the fillers', body: "'Umm', 'ahh', 'like' and 'you know' signal that you cannot find the language — and cost you fluency marks. Swap them for the thinking phrases from Tip 5.", chips: ['Like', 'You know', 'Umm…', 'Ahh…', 'Yeah…'], link: '#/tips' },
  { n: 7, title: 'Extend your answers', body: "Answer in full — give a reason, an example, maybe a contrast. If the examiner asks 'Why?', they are inviting you to say more. Short answers read as limited fluency.", link: '#/part2', linkLabel: 'Practise full answers' },
  { n: 8, title: 'Smile — it helps pronunciation', body: 'Smiling calms your nerves, opens your mouth wider and warms your tone, so sounds come out clearer. Enunciate clearly and your pronunciation marks will thank you.' },
  { n: 9, title: "Don't speak in a monotone", body: 'A flat, even voice hides your message and your range. Vary stress and intonation, emphasise key words, pause for effect, and use your hands to keep a natural rhythm.' },
  { n: 10, title: 'Practise common topics', body: 'Part 2 asks you to talk for two minutes on a familiar theme. Practise the classic topic areas — this site has 102 Part 1 topics and 79 cue cards to work through.', chips: ['Tourism & travel', 'Education', 'Transport', 'Environment', 'Family life', 'Sport & recreation', 'Technology', 'The internet', 'Advertising'], link: '#/part1', linkLabel: 'Browse all topics' },
];

function viewTips() {
  const cards = TIPS.map(
    (t) => `
      <div class="tip-card card">
        <div class="tip-num">${String(t.n).padStart(2, '0')}</div>
        <div class="tip-body">
          <h3>${esc(t.title)}</h3>
          <p>${esc(t.body)}</p>
          ${t.chips ? `<div class="tip-chips">${t.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>` : ''}
          ${t.link ? `<a class="btn btn-ghost btn-sm" href="${t.link}">${esc(t.linkLabel || 'Practise now')} →</a>` : ''}
        </div>
      </div>`
  ).join('');
  return `
    <div class="page-head">
      <div class="crumbs"><a href="#/">Home</a></div>
      <h1>10 expert exam tips</h1>
      <p class="sub">Part 1 · 4–5 min conversation · Part 2 · 1 min prep + 2 min talk · Part 3 · 4–5 min discussion — then test-day advice from IDP IELTS's own experts, distilled for quick reading with shortcuts to practise each idea right here.</p>
    </div>
    <div class="tips-grid">${cards}</div>
    <div class="note" style="margin-top:18px">Source: <a href="https://ielts.idp.com/prepare/article-10-tips-ielts-speaking" target="_blank" rel="noopener">IDP IELTS — IELTS Speaking test: 10 tips from Experts ↗</a>. Tips summarised and adapted.</div>
  `;
}

/* ---------- part 1 overview ---------- */
function viewPart1() {
  const s = D.stats;
  const topics = D.part1.topics;
  const catOf = (t) => t.cat || 'other';
  const cats = (D.part1.cats || []).filter((c) => topics.some((t) => catOf(t) === c.key));
  const chips = D.part1.topicIndex.map((t) => `<span class="chip">${esc(t)}</span>`).join('');
  const rowHtml = (t) => {
    const done = state.progress.topics[t.slug];
    return `<a class="topic-row" href="#/part1/topic/${esc(t.slug)}">
      <span class="t-name">${esc(t.title)}</span>
      <span class="t-meta">${t.questions.length} q · ${t.answers.length} answers</span>
      ${done ? '<span class="t-done" title="Practised">✓</span>' : ''}
      <svg class="t-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>
    </a>`;
  };
  const rows = cats
    .map((c) => {
      const items = topics.filter((t) => catOf(t) === c.key).map(rowHtml).join('');
      return `<div class="cat-group" data-cat="${esc(c.key)}">
        <div class="cat-label"><span class="cat-ico" aria-hidden="true">${c.icon}</span>${esc(c.label)}<span class="cat-count">${topics.filter((t) => catOf(t) === c.key).length}</span></div>
        ${items}
      </div>`;
    })
    .join('');

  return `
    <div class="page-head">
      <h1>Part 1 — Familiar topics</h1>
      <p class="sub">Examiners ask 10–15 short questions across 3–4 everyday topics. Study each topic group below: practise the questions first, then compare with the band-7 model answers.</p>
    </div>

    <section class="stats">
      <div class="stat s-p1"><b>${s.topics}</b><span>topic groups</span></div>
      <div class="stat s-p1"><b>${s.topicQ}</b><span>practice questions</span></div>
      <div class="stat s-p1"><b>${s.topicA}</b><span>model answers</span></div>
      <div class="stat s-p1"><b>${s.commonQ}</b><span>common Q&amp;A</span></div>
    </section>

    <a class="card" style="display:flex;align-items:center;gap:16px;padding:18px 20px;color:inherit" href="#/part1/common">
      <div class="f-icon f-p1" style="margin:0">💬</div>
      <div style="flex:1">
        <h3 style="margin:0 0 3px">Common questions asked to everyone</h3>
        <p style="margin:0;font-size:13.5px;color:var(--muted)">Name, ID, work, studies, home, hometown — the questions almost every candidate gets.</p>
      </div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>
    </a>

    <div class="section-title"><h2>Browse ${s.topics} practice topics</h2><span class="hint">grouped by subject · ${D.part1.topics.filter((t) => state.progress.topics[t.slug]).length} practised</span></div>
    <div class="filter-row">
      <input class="filter-input" id="topicFilter" type="search" placeholder="Filter topics…" />
    </div>
    <div id="topicBrowser">${rows}</div>

    <details class="cloud card" style="padding:6px 18px 16px">
      <summary>Full topic index — ${D.part1.topicIndex.length} topics covered</summary>
      <div class="chips">${chips}</div>
    </details>
  `;
}

/* ---------- common questions ---------- */
function viewCommon() {
  const common = D.part1.common;
  const done = (i) => !!state.progress.common[i];
  const groups = {};
  common.forEach((c, i) => {
    const letter = (c.q.replace(/^[^a-z]+/i, '')[0] || '#').toUpperCase();
    (groups[letter] = groups[letter] || []).push({ ...c, i });
  });
  const letters = Object.keys(groups).sort();
  const doneCount = Object.keys(state.progress.common).length;
  const rows = letters
    .map((L) => {
      const items = groups[L]
        .map(
          (c) => `
          <div class="qa ${done(c.i) ? 'done' : ''}" data-i="${c.i}">
            <button class="qa-head">
              <span class="qa-check" data-action="toggle-common" data-i="${c.i}" aria-label="Mark as studied">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
              </span>
              <span class="qa-q">${esc(c.q)}</span>
              <svg class="qa-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="qa-body"><div class="qa-inner"><div class="qa-a">${parasHtml(c.a)}</div></div></div>
          </div>`
        )
        .join('');
      return `<div class="alpha-group"><div class="alpha-label">${L}</div>${items}</div>`;
    })
    .join('');

  return `
    <div class="page-head">
      <div class="crumbs"><a href="#/">Home</a> · <a href="#/part1">Part 1</a></div>
      <h1>Common questions</h1>
      <p class="sub">Questions that appear for almost every candidate — learn the answers here, then adapt them to yourself.</p>
      <div class="page-head-actions">
        <span class="pill badge-p1" id="commonCount">${doneCount} / ${common.length} studied</span>
        <button class="btn btn-ghost btn-sm" data-action="mark-all-common">Mark all studied</button>
        <button class="btn btn-ghost btn-sm" data-action="reset-common">Reset</button>
      </div>
    </div>
    <div class="filter-row">
      <input class="filter-input" id="commonFilter" type="search" placeholder="Filter questions…" />
    </div>
    <div id="commonList">${rows}</div>
  `;
}

/* ---------- topic detail ---------- */
function viewTopic(slug) {
  const t = D.part1.topics.find((x) => x.slug === slug);
  if (!t) return `<div class="empty-hint">Topic not found. <a href="#/part1">Browse all topics →</a></div>`;

  const ansByQ = new Map(t.answers.map((a) => [norm(a.q), a]));
  const practiced = state.progress.topics[t.slug];
  const items = t.questions
    .map((q) => {
      const a = ansByQ.get(norm(q));
      return `
        <div class="qa ${state.practice ? '' : 'open'}">
          <button class="qa-head">
            <span class="qa-q">${esc(q)}</span>
            <svg class="qa-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="qa-body"><div class="qa-inner">
            <div class="qa-a">${a ? parasHtml(a.a) : '<p style="color:var(--muted);font-style:italic">No model answer in the source — try answering aloud in 15 seconds.</p>'}</div>
          </div></div>
        </div>`;
    })
    .join('');

  const answeredN = t.answers.length;
  const extra = t.answers.filter((a) => !t.questions.some((q) => norm(q) === norm(a.q)));
  const extraHtml = extra.length
    ? `<div class="section-title"><h2>Extra model answers</h2><span class="hint">not in the practice list</span></div>
       ${extra
         .map(
           (a) => `<div class="qa ${state.practice ? '' : 'open'}">
             <button class="qa-head"><span class="qa-q">${esc(a.q)}</span><svg class="qa-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
             <div class="qa-body"><div class="qa-inner"><div class="qa-a">${parasHtml(a.a)}</div></div></div>
           </div>`
         )
         .join('')}`
    : '';

  const next = D.part1.topics[(D.part1.topics.indexOf(t) + 1) % D.part1.topics.length];

  return `
    <div class="page-head">
      <div class="crumbs"><a href="#/">Home</a> · <a href="#/part1">Part 1</a></div>
      <h1>${esc(t.title)}</h1>
      <p class="sub">${t.questions.length} practice questions · ${answeredN} model answers (band 7.0)</p>
      <div class="page-head-actions">
        <button class="btn ${practiced ? 'btn-outline' : 'btn-primary'} btn-sm" data-action="toggle-topic" data-slug="${esc(t.slug)}">
          ${practiced ? '✓ Practised' : 'Mark as practised'}
        </button>
        <button class="btn btn-ghost btn-sm" data-action="toggle-practice">
          ${state.practice ? 'Practice mode: on — answers hidden' : 'Reading mode: answers shown'}
        </button>
        <a class="btn btn-ghost btn-sm" href="#/part1/topic/${esc(next.slug)}">Next topic →</a>
      </div>
    </div>
    ${items}
    ${extraHtml}
    <div class="note" style="margin-top:20px"><b>Tip:</b> say your answer out loud before revealing the model answer. Compare ideas and linking phrases, not word-for-word memorisation.</div>
  `;
}

/* ---------- part 2 grid ---------- */
function viewPart2() {
  const cards = D.cards;
  const done = (n) => state.progress.cards[n];
  const chips = cards
    .map(
      (c) => `<a class="card-chip ${done(c.number) ? 'done' : ''}" href="#/part2/${c.number}">
        <div class="cc-top"><span class="cc-num">${c.number}</span><span class="cc-status" title="${done(c.number) ? 'studied' : 'not studied yet'}"></span></div>
        <div class="cc-title">${esc(c.prompt)}</div>
        <div class="cc-meta">${c.bullets.length} points · ${(c.part3 || []).length} follow-ups</div>
      </a>`
    )
    .join('');

  return `
    <div class="page-head">
      <h1>Part 2 — Cue cards</h1>
      <p class="sub">You get 1 minute to prepare and 1–2 minutes to speak. Open any card to see the prompt, a model answer, and its Part 3 follow-up questions.</p>
      <div class="page-head-actions">
        <span class="pill badge-p2">${D.cards.filter((c) => state.progress.cards[c.number]).length} / ${cards.length} studied</span>
        <a class="btn btn-ghost btn-sm" href="#/part2/rand">🎲 Random card</a>
      </div>
    </div>
    <div class="filter-row">
      <input class="filter-input" id="cardFilter" type="search" placeholder="Filter cue cards…" />
    </div>
    <div class="cards-grid" id="cardGrid">${chips}</div>
  `;
}

/* ---------- card detail ---------- */
function viewCard(n) {
  if (n === 'rand') {
    location.hash = '#/part2/' + D.cards[rand(D.cards.length)].number;
    return '';
  }
  const i = D.cards.findIndex((c) => c.number === Number(n));
  if (i < 0) return `<div class="empty-hint">Cue card not found. <a href="#/part2">Browse all cards →</a></div>`;
  const c = D.cards[i];
  const prev = D.cards[(i - 1 + D.cards.length) % D.cards.length];
  const next = D.cards[(i + 1) % D.cards.length];
  const studied = state.progress.cards[c.number];

  const points = (c.bullets || [])
    .map(
      (b) => `<li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
        ${esc(b)}
      </li>`
    )
    .join('');

  const answerHtml = c.modelAnswer.length
    ? `<div class="section-title"><h2>Model answer</h2><span class="hint">band 7.0 · study the structure</span></div>
       <div class="card answer-block">
         <button class="answer-toggle" data-action="toggle-answer" aria-expanded="${state.practice ? 'false' : 'true'}">
           <span class="answer-label">${state.practice ? '▶&nbsp; Reveal model answer' : '▼&nbsp; <strong>Model answer</strong>'}</span>
         </button>
         <div class="qa-body ${state.practice ? '' : 'open'}"><div class="qa-inner"><div class="qa-a" style="padding:6px 20px 18px">
           ${c.modelAnswer.map((p) => `<p>${md(esc(p))}</p>`).join('')}
         </div></div></div>
       </div>`
    : `<div class="note" style="margin-top:24px">This cue card has no model answer in the source — use the prompt points and deliver your own answer aloud.</div>`;

  const p3 = (c.part3 || []).length
    ? `<div class="p3-section">
        <div class="p3-head"><b>PART 3 · FOLLOW-UP DISCUSSION</b><span class="pill">${c.part3.length} questions</span></div>
        <div class="p3-body">
          ${c.part3
            .map(
              (p) => `<div class="qa ${state.practice ? '' : 'open'}">
                <button class="qa-head"><span class="qa-q">${esc(p.q)}</span><svg class="qa-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
                <div class="qa-body"><div class="qa-inner"><div class="qa-a">${parasHtml(p.a)}</div></div></div>
              </div>`
            )
            .join('')}
        </div>
      </div>`
    : '';

  const dots = D.cards
    .map(
      (x) =>
        `<a class="dot ${x.number === c.number ? 'cur' : ''} ${state.progress.cards[x.number] ? 'done' : ''}" href="#/part2/${x.number}" title="${esc(x.prompt)}">${x.number}</a>`
    )
    .join('');

  return `      <div class="page-head">
      <div class="crumbs"><a href="#/">Home</a> · <a href="#/part2">Part 2 · Cue cards</a></div>
      <h1>Cue card #${c.number}</h1>
      <div class="page-head-actions">
        <button class="btn ${studied ? 'btn-outline' : 'btn-primary'} btn-sm" data-action="toggle-card" data-n="${c.number}">
          ${studied ? '✓ Studied' : 'Mark as studied'}
        </button>
        <button class="btn btn-ghost btn-sm" data-action="toggle-practice">${state.practice ? 'Practice mode: on' : 'Reading mode'}</button>
      </div>
    </div>

    <div class="cue-card">
      <div class="cue-strip"><b>CUE CARD</b><span class="pill">⏱ 1 minute preparation</span></div>
      <div class="cue-body">
        <p class="cue-prompt">${esc(c.prompt)}</p>
        <ul class="cue-points">${points}</ul>
      </div>
    </div>

    ${answerHtml}
    ${p3}

    <div class="pager">
      <a class="btn btn-ghost" href="#/part2/${prev.number}"><span><span class="dir">← Previous</span>Cue card #${prev.number}</span></a>
      <a class="btn btn-ghost" href="#/part2/${next.number}"><span><span class="dir">Next →</span>Cue card #${next.number}</span></a>
    </div>

    <div class="dots">${dots}</div>
  `;
}

/* ---------- bonus workbook ---------- */
function viewBonus() {
  const topics = D.bonus;
  const blocks = topics
    .map((t, ti) => {
      const items = t.items
        .map((it, ii) => {
          const k = `${ti}-${ii}`;
          const done = !!state.progress.bonus[k];
          return `<div class="qa ${done ? 'done' : ''} ${state.practice ? '' : 'open'}" data-k="${k}">
            <button class="qa-head">
              <span class="qa-check" data-action="toggle-bonus" data-k="${k}" aria-label="Mark as studied">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
              </span>
              <span class="qa-q">${esc(it.q)}</span>
              <svg class="qa-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="qa-body"><div class="qa-inner"><div class="qa-a">${parasHtml(it.a)}</div></div></div>
          </div>`;
        })
        .join('');
      return `<div class="card" style="padding:18px 20px;margin-bottom:16px">
        <div class="section-title" style="margin:0 0 12px"><h2 style="font-size:1.05rem">${esc(t.title)}</h2>
          <span class="pill badge-plain" style="margin-left:auto">${t.items.length}</span></div>
        ${items}
      </div>`;
    })
    .join('');

  return `
    <div class="page-head">
      <div class="crumbs"><a href="#/">Home</a></div>
      <h1>Part 1 workbook</h1>
      <p class="sub">A second set of Part 1 questions &amp; answers bundled with the cue-card guide — handy for quick revision of the classic topics.</p>
    </div>
    ${blocks}
  `;
}

/* ================= actions ================= */
function updateCommonCount() {
  const c = $('#commonCount');
  if (c) c.textContent = `${Object.keys(state.progress.common).length} / ${D.part1.common.length} studied`;
}

function handleAction(action, el) {
  switch (action) {
    case 'toggle-common': {
      const i = el.dataset.i;
      state.progress.common[i] = !state.progress.common[i];
      saveProgress();
      el.closest('.qa').classList.toggle('done', state.progress.common[i]);
      updateCommonCount();
      renderProgressCard();
      break;
    }
    case 'mark-all-common': {
      D.part1.common.forEach((_, i) => (state.progress.common[i] = true));
      saveProgress();
      $$('#commonList .qa').forEach((qa) => qa.classList.add('done'));
      updateCommonCount();
      renderProgressCard();
      toast('All common questions marked as studied');
      break;
    }
    case 'reset-common': {
      state.progress.common = {};
      saveProgress();
      $$('#commonList .qa').forEach((qa) => qa.classList.remove('done'));
      updateCommonCount();
      renderProgressCard();
      toast('Common question progress reset');
      break;
    }
    case 'toggle-topic': {
      const slug = el.dataset.slug;
      state.progress.topics[slug] = !state.progress.topics[slug];
      saveProgress();
      const on = !!state.progress.topics[slug];
      el.className = 'btn ' + (on ? 'btn-outline' : 'btn-primary') + ' btn-sm';
      el.textContent = on ? '✓ Practised' : 'Mark as practised';
      renderProgressCard();
      toast(on ? 'Topic marked as practised ✓' : 'Topic unmarked');
      break;
    }
    case 'toggle-card': {
      const n = el.dataset.n;
      state.progress.cards[n] = !state.progress.cards[n];
      saveProgress();
      const on = !!state.progress.cards[n];
      el.className = 'btn ' + (on ? 'btn-outline' : 'btn-primary') + ' btn-sm';
      el.textContent = on ? '✓ Studied' : 'Mark as studied';
      renderProgressCard();
      toast(on ? `Cue card #${n} marked as studied ✓` : `Cue card #${n} unmarked`);
      break;
    }
    case 'toggle-bonus': {
      const k = el.dataset.k;
      state.progress.bonus[k] = !state.progress.bonus[k];
      saveProgress();
      el.closest('.qa').classList.toggle('done', state.progress.bonus[k]);
      renderProgressCard();
      toast(state.progress.bonus[k] ? 'Marked as studied ✓' : 'Unmarked');
      break;
    }
    case 'toggle-practice': {
      state.practice = !state.practice;
      store.set('practice', state.practice);
      render();
      toast(state.practice ? 'Practice mode on — answers hidden' : 'Reading mode — all answers shown');
      break;
    }
    case 'toggle-answer': {
      const block = el.closest('.answer-block');
      const body = block.querySelector('.qa-body');
      const open = body.classList.toggle('open');
      el.setAttribute('aria-expanded', open);
      el.querySelector('.answer-label').innerHTML = open
        ? '▼&nbsp; <strong>Model answer</strong>'
        : '▶&nbsp; Reveal model answer';
      break;
    }
  }
}

/* ================= events ================= */
function wireEvents() {
  // topbar
  $('#themeBtn').addEventListener('click', toggleTheme);
  $('#searchTrigger').addEventListener('click', openSearch);
  $('#searchClose').addEventListener('click', closeSearch);
  $('#menuBtn').addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    $('#menuBtn').setAttribute('aria-expanded', open);
  });
  $('#scrim').addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    $('#menuBtn').setAttribute('aria-expanded', 'false');
  });

  // view: delegation
  view.addEventListener('click', (e) => {
    const act = e.target.closest('[data-action]');
    if (act) { handleAction(act.dataset.action, act); return; }
    const head = e.target.closest('.qa-head');
    if (head && !e.target.closest('.qa-check')) {
      const qa = head.closest('.qa');
      qa.classList.toggle('open');
      head.setAttribute('aria-expanded', qa.classList.contains('open') ? 'true' : 'false');
    }
  });

  // filters
  document.addEventListener('input', (e) => {
    const q = norm(e.target.value);
    if (e.target.id === 'topicFilter') {
      const rows = $$('#topicBrowser .topic-row');
      const groups = $$('#topicBrowser .cat-group');
      rows.forEach((r) => {
        const hit = norm(r.querySelector('.t-name').textContent).includes(q);
        r.style.display = hit ? '' : 'none';
      });
      groups.forEach((g) => { g.style.display = $$('.topic-row', g).some((r) => r.style.display !== 'none') ? '' : 'none'; });
    }
    if (e.target.id === 'commonFilter') {
      $$('#commonList .qa').forEach((qa) => {
        qa.style.display = norm(qa.querySelector('.qa-q').textContent).includes(q) ? '' : 'none';
      });
    }
    if (e.target.id === 'cardFilter') {
      $$('#cardGrid .card-chip').forEach((chip) => {
        chip.style.display = norm(chip.querySelector('.cc-title').textContent).includes(q) ? '' : 'none';
      });
    }
  });

  // search overlay
  $('#searchInput').addEventListener('input', (e) => renderSearchResults(e.target.value));
  $('#searchOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'searchOverlay') closeSearch();
  });

  // keyboard
  document.addEventListener('keydown', (e) => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if (e.key === '/' && !typing) { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') {
      if (!$('#searchOverlay').hidden) closeSearch();
      else { document.body.classList.remove('nav-open'); $('#menuBtn').setAttribute('aria-expanded', 'false'); }
    }
    const r = route();
    if (r.name === 'part2' && r.parts[1] && /^\d+$/.test(r.parts[1]) && !typing) {
      const i = D.cards.findIndex((c) => c.number === Number(r.parts[1]));
      if (i >= 0 && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
        location.hash = '#/part2/' + D.cards[(i + (e.key === 'ArrowRight' ? 1 : -1) + D.cards.length) % D.cards.length].number;
      }
    }
  });

  // reading progress bar
  document.addEventListener('scroll', () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    $('#readingBar').style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  }, { passive: true });
}

function openSearch() {
  const ov = $('#searchOverlay');
  ov.hidden = false;
  const inp = $('#searchInput');
  inp.value = '';
  renderSearchResults('');
  setTimeout(() => inp.focus(), 30);
}
function closeSearch() {
  $('#searchOverlay').hidden = true;
}

function renderSearchResults(q) {
  const box = $('#searchResults');
  const tq = q.trim();
  if (!tq) {
    box.innerHTML = `<div class="sr-hint">Type to search ${D.stats.topicQ + D.stats.commonQ} questions, ${D.stats.cards} cue cards and ${D.stats.part3} Part 3 answers.</div>`;
    return;
  }
  const results = search(q);
  if (!results.length) {
    box.innerHTML = `<div class="sr-empty">No results for “${esc(q)}”. Try a shorter phrase.</div>`;
    return;
  }
  const groups = {};
  for (const r of results) (groups[r.group] = groups[r.group] || []).push(r);
  box.innerHTML =
    Object.entries(groups)
      .map(
        ([g, items]) => `<div class="sr-group">
          <div class="sr-label">${esc(g)} · ${items.length}</div>
          ${items
            .slice(0, 6)
            .map(
              (r) => `<a class="sr-item" href="${r.url}" data-search-nav>
                <div class="sr-title">${hl(r.title, q)}</div>
                <div class="sr-snip">${snippet(r.text, q)}</div>
              </a>`
            )
            .join('')}
        </div>`
      )
      .join('');
}

// close search when navigating to a result
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-search-nav]')) closeSearch();
});

/* ================= toast ================= */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ================= init ================= */
applyTheme();
wireEvents();
window.addEventListener('hashchange', render);
render();
