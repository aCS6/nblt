'use strict';
/* global SPEAKING_DATA, Alpine */

/* ==========================================================================
   Speaking Studio — app.js
   Alpine-driven app built on the shared NBLT assets (assets/alpine.min.js,
   assets/tailwind.css) with the original Speaking Studio design system
   (css/styles.css + css/fonts.css). All state lives in the "app" Alpine
   store; views are rendered into #view and Alpine wires up the directives
   inside them automatically.
   ========================================================================== */

const D = window.SPEAKING_DATA;
const THEME_KEY = 'nblt.theme';

/* ----------------------------- tiny utils ----------------------------- */
const esc = (s) =>
  String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const md = (s) =>
  String(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
const parasHtml = (arr) => (arr || []).map((p) => `<p>${md(esc(p))}</p>`).join('');
/* Quote a value as a JS string literal for use inside a double-quoted
   HTML attribute (single quotes, since Alpine parses the attribute body). */
const jsStr = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const storeGet = (k, d) => {
  try { const v = localStorage.getItem('ss-' + k); return v === null ? d : JSON.parse(v); } catch { return d; }
};
const storeSet = (k, v) => {
  try { localStorage.setItem('ss-' + k, JSON.stringify(v)); } catch { /* ignore */ }
};

/* ----------------------------- icons ----------------------------- */
const ICON = {
  home: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  chat: '<path d="M21 12a8 8 0 0 1-8 8H4l2.2-3.1A8 8 0 1 1 21 12z"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r=".8" fill="currentColor"/><circle cx="4.5" cy="12" r=".8" fill="currentColor"/><circle cx="4.5" cy="18" r=".8" fill="currentColor"/>',
  grid: '<rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/>',
  spark: '<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/>',
};

/* ----------------------------- search index ----------------------------- */
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

function hlSafe(text, term) {
  const safe = esc(text);
  const t = esc(term || '').trim();
  if (!t) return safe;
  return safe.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
}

/* ----------------------------- milestones ----------------------------- */
function milestoneStates(p) {
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
  return defs.map((m, i) => ({ ...m, state: states[i] === 'todo' ? (i === first ? 'current' : 'locked') : 'done' }));
}

/* ----------------------------- app store ----------------------------- */
function createAppStore() {
  return {
    theme: 'dark',
    practice: storeGet('practice', true),
    progress: storeGet('progress', { common: {}, topics: {}, cards: {}, bonus: {} }),
    last: storeGet('last', null),

    menuOpen: false,
    searchOpen: false,
    showAnswer: false,
    q: '',
    results: [],
    qOpen: {},
    topicFilter: '',
    commonFilter: '',
    cardFilter: '',

    route: { name: 'home', parts: [] },
    _wired: false,
    _toastTimer: null,

    /* ---- progress getters ---- */
    get pct() {
      const topics = D.part1.topics;
      const p1 = { done: topics.filter((t) => this.progress.topics[t.slug]).length, total: topics.length };
      const pc = { done: Object.keys(this.progress.common).length, total: D.part1.common.length };
      const p2 = { done: D.cards.filter((c) => this.progress.cards[c.number]).length, total: D.cards.length };
      const pb = { done: Object.keys(this.progress.bonus).length, total: D.bonus.reduce((n, t) => n + t.items.length, 0) };
      const w = [p1.total, pc.total, p2.total, pb.total].reduce((a, b) => a + b, 0) || 1;
      return {
        p1, pc, p2, pb,
        overall: Math.round(((p1.done + pc.done + p2.done + pb.done) / w) * 100),
      };
    },
    get progressRows() {
      const p = this.pct;
      return [
        { label: 'Part 1 topics', ...p.p1, pct: (p.p1.done / p.p1.total) * 100 },
        { label: 'Common questions', ...p.pc, pct: (p.pc.done / p.pc.total) * 100 },
        { label: 'Cue cards', ...p.p2, pct: (p.p2.done / p.p2.total) * 100 },
      ];
    },

    /* ---- nav ---- */
    get navGroups() {
      const s = D.stats;
      return [
        { label: 'Study', links: [{ label: 'Home', href: '#/', key: 'home', icon: ICON.home, count: '' }] },
        {
          label: 'Part 1 · Introduction',
          links: [
            { label: 'Practice Topics', href: '#/part1', key: 'part1', icon: ICON.list, count: s.topics },
            { label: 'Common Questions', href: '#/part1/common', key: 'common', icon: ICON.chat, count: s.commonQ },
          ],
        },
        {
          label: 'Part 2 & 3 · Cue Cards',
          links: [
            { label: 'All Cue Cards', href: '#/part2', key: 'part2', icon: ICON.grid, count: s.cards },
            { label: 'Random Card', href: '#/part2/rand', key: 'rand', icon: ICON.dice, count: '' },
          ],
        },
        {
          label: 'Extras',
          links: [
            { label: 'Part 1 Workbook', href: '#/bonus', key: 'bonus', icon: ICON.spark, count: '' },
            { label: 'Exam Tips', href: '#/tips', key: 'tips', icon: ICON.chat, count: '' },
          ],
        },
        { label: 'NBLT', links: [{ label: 'All apps hub', href: '../index.html', key: 'hub', icon: ICON.home, count: '' }] },
      ];
    },
    isActive(l) {
      const r = this.route;
      if (l.key === 'home') return r.name === 'home';
      if (l.key === 'part1') return r.name === 'part1' && !r.parts[1];
      if (l.key === 'common') return r.name === 'part1' && r.parts[1] === 'common';
      if (l.key === 'part2') return r.name === 'part2' && r.parts[1] !== 'rand';
      if (l.key === 'rand') return r.name === 'part2' && r.parts[1] === 'rand';
      if (l.key === 'bonus') return r.name === 'bonus';
      if (l.key === 'tips') return r.name === 'tips';
      return false;
    },

    /* ---- theme ---- */
    init() {
      try { this.theme = localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'; } catch (e) { this.theme = 'dark'; }
      this.applyTheme();
      if (this._wired) return;
      this._wired = true;
      window.addEventListener('hashchange', () => this.render());
      window.addEventListener('keydown', (e) => this.onKey(e));
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.render();
    },
    applyTheme() {
      document.documentElement.classList.toggle('dark', this.theme === 'dark');
      document.documentElement.style.colorScheme = this.theme;
      try { localStorage.setItem(THEME_KEY, this.theme); } catch (e) {}
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      this.applyTheme();
    },

    /* ---- keyboard ---- */
    onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target && e.target.tagName) || '';
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
      if (e.key === '/') { e.preventDefault(); this.openSearch(); }
      if (e.key === 'Escape') { this.searchOpen = false; this.menuOpen = false; }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if (this.route.name === 'part2' && this.route.parts[1] && this.route.parts[1] !== 'rand') {
          const n = parseInt(this.route.parts[1], 10);
          if (n >= 1 && n <= D.cards.length) {
            const next = e.key === 'ArrowRight' ? (n % D.cards.length) + 1 : n === 1 ? D.cards.length : n - 1;
            location.hash = '#/part2/' + next;
          }
        }
      }
    },
    onScroll() {
      const bar = document.getElementById('readingBar');
      if (!bar) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    },

    /* ---- search ---- */
    openSearch() {
      this.searchOpen = true;
      this.q = '';
      this.results = [];
      const self = this;
      setTimeout(() => {
        const i = document.getElementById('searchInput');
        if (i) i.focus();
      }, 30);
    },
    doSearch() {
      if (!searchIndex) buildSearchIndex();
      const tokens = norm(this.q).split(' ').filter(Boolean);
      if (!tokens.length) { this.results = []; return; }
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
      const q = this.q.trim();
      this.results = scored.slice(0, 60).map((r) => {
        const t = String(r.text || '');
        const i = t.toLowerCase().indexOf(norm(q).split(' ')[0]);
        const start = Math.max(0, i - 60);
        const seg = (start > 0 ? '…' : '') + t.slice(start, start + 180) + (start + 180 < t.length ? '…' : '');
        return { ...r, titleHtml: hlSafe(r.title, q), snippetHtml: hlSafe(seg, q) };
      });
    },

    /* Group search results by section (Part 1 / Part 2 / Part 3 / workbook),
       preserving the original sr-group design. */
    get searchGroups() {
      const groups = {};
      for (const r of this.results) {
        const key = r.group;
        (groups[key] = groups[key] || []).push(r);
      }
      return Object.keys(groups).map((g) => ({ group: g, items: groups[g] }));
    },

    /* ---- progress actions ---- */
    toggleQ(id) { this.qOpen[id] = !this.qOpen[id]; },
    saveProgress() { storeSet('progress', this.progress); },
    toggleCommon(i) {
      this.progress.common[i] = !this.progress.common[i];
      if (!this.progress.common[i]) delete this.progress.common[i];
      this.saveProgress();
    },
    markAllCommon() {
      D.part1.common.forEach((_, i) => { this.progress.common[i] = true; });
      this.saveProgress();
      this.toast('All ' + D.part1.common.length + ' common questions marked as studied');
    },
    resetCommon() {
      this.progress.common = {};
      this.saveProgress();
      this.toast('Common-question progress reset');
    },
    toggleTopic(slug) {
      this.progress.topics[slug] = !this.progress.topics[slug];
      if (!this.progress.topics[slug]) delete this.progress.topics[slug];
      this.saveProgress();
    },
    toggleCard(n) {
      this.progress.cards[n] = !this.progress.cards[n];
      if (!this.progress.cards[n]) delete this.progress.cards[n];
      this.saveProgress();
    },
    toggleBonus(k) {
      this.progress.bonus[k] = !this.progress.bonus[k];
      if (!this.progress.bonus[k]) delete this.progress.bonus[k];
      this.saveProgress();
    },
    togglePractice() {
      this.practice = !this.practice;
      storeSet('practice', this.practice);
      // Reset accordion state so the re-render re-opens/closes answers
      // per the new mode — practice hides answers, reading mode shows all.
      this.qOpen = {};
      this.render();
      this.toast(this.practice ? 'Practice mode on — answers hidden' : 'Reading mode — all answers shown');
    },

    /* ---- toast ---- */
    toast(msg) {
      const t = document.getElementById('toast');
      if (!t) return;
      t.textContent = msg;
      t.classList.add('show');
      clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
    },

    /* ================= render ================= */
    render() {
      const h = location.hash.replace(/^#\/?/, '');
      const parts = h.split('/').filter(Boolean);
      this.route = { name: parts[0] || 'home', parts };

      let html;
      switch (this.route.name) {
        case 'part1': html = this.route.parts[1] === 'common' ? this.viewCommon() : this.route.parts[1] ? this.viewTopic(this.route.parts[2]) : this.viewPart1(); break;
        case 'part2': html = this.route.parts[1] ? this.viewCard(this.route.parts[1]) : this.viewPart2(); break;
        case 'bonus': html = this.viewBonus(); break;
        case 'tips': html = this.viewTips(); break;
        default: html = this.viewHome();
      }

      const view = document.getElementById('view');
      view.innerHTML = `<div class="wrap view-enter">${html}</div>`;
      const r = this.route;
      const t =
        r.name === 'home' ? 'IELTS Speaking Studio — Part 1, 2 & 3 Topics with Model Answers' :
        r.name === 'part1' ? (r.parts[1] === 'common' ? 'Common Questions — IELTS Speaking Studio' : r.parts[1] ? 'Part 1 Topic — IELTS Speaking Studio' : 'Part 1 Topics — IELTS Speaking Studio') :
        r.name === 'part2' ? (r.parts[1] ? 'Cue Card — IELTS Speaking Studio' : 'Part 2 Cue Cards — IELTS Speaking Studio') :
        r.name === 'bonus' ? 'Part 1 Workbook — IELTS Speaking Studio' :
        r.name === 'tips' ? '10 Expert Exam Tips — IELTS Speaking Studio' : 'IELTS Speaking Studio';
      document.title = t;

      window.scrollTo(0, 0);
      this.last = location.hash;
      storeSet('last', location.hash);
      this.menuOpen = false;
      this.onScroll();
    },

    /* ---------- shared bits ---------- */
    prefillQ(ids) {
      for (const id of ids) if (!(id in this.qOpen)) this.qOpen[id] = !this.practice;
    },
    qaItem(id, q, ansHtml, opts) {
      opts = opts || {};
      this.prefillQ([id]);
      const k = jsStr(id);
      const doneExpr = opts.doneExpr ? ` + (${opts.doneExpr} ? ' done' : '')` : '';
      const checkHtml = opts.check
        ? `<span class="qa-check" @click.stop="${opts.check}" aria-label="Mark as studied">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
          </span>`
        : '';
      return `<div class="qa" :class="(qOpen[${k}] ? 'open' : '')${doneExpr}">
        <button type="button" class="qa-head" @click="toggleQ(${k})" :aria-expanded="qOpen[${k}]">
          ${checkHtml}
          <span class="qa-q">${q}</span>
          <svg class="qa-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="qa-body"><div class="qa-inner"><div class="qa-a">${ansHtml}</div></div></div>
      </div>`;
    },

    /* ---------- home ---------- */
    viewHome() {
      const s = D.stats;
      const p = this.pct;
      const totalQ = s.commonQ + s.topicQ;
      const ringR = 46, ringC = 2 * Math.PI * ringR;
      const resume = this.last && this.last !== '#/' ? `<a class="btn btn-ghost" href="${esc(this.last)}">Resume where you left off →</a>` : '';
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

        ${this.viewRoadmap()}

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
    },

    /* ================= roadmap (game-style study path) ================= */
    viewRoadmap() {
      const ms = milestoneStates(this.pct);
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
    },

    /* ---------- part 1 overview ---------- */
    viewPart1() {
      const s = D.stats;
      const chips = D.part1.topicIndex.map((t) => `<span class="chip">${esc(t)}</span>`).join('');
      const practised = D.part1.topics.filter((t) => this.progress.topics[t.slug]).length;
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

        <div class="section-title"><h2>Browse ${s.topics} practice topics</h2><span class="hint">grouped by subject · ${practised} practised</span></div>
        <div class="filter-row">
          <input class="filter-input" type="search" x-model="topicFilter" placeholder="Filter topics…" />
        </div>
        <div id="topicBrowser">
          <template x-for="c in filteredCats" :key="c.key">
            <div class="cat-group">
              <div class="cat-label"><span class="cat-ico" aria-hidden="true" x-text="c.icon"></span><span x-text="c.label"></span><span class="cat-count" x-text="c.topics.length"></span></div>
              <template x-for="t in c.topics" :key="t.slug">
                <a class="topic-row" :href="'#/part1/topic/' + t.slug">
                  <span class="t-name" x-text="t.title"></span>
                  <span class="t-meta" x-text="t.meta"></span>
                  <span class="t-done" x-show="t.done" title="Practised">✓</span>
                  <svg class="t-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>
                </a>
              </template>
            </div>
          </template>
        </div>

        <details class="cloud card" style="padding:6px 18px 16px">
          <summary>Full topic index — ${D.part1.topicIndex.length} topics covered</summary>
          <div class="chips">${chips}</div>
        </details>
      `;
    },

    get filteredCats() {
      const topics = D.part1.topics;
      const q = norm(this.topicFilter);
      const catOf = (t) => t.cat || 'other';
      const cats = (D.part1.cats || []).filter((c) => topics.some((t) => catOf(t) === c.key));
      return cats
        .map((c) => {
          const list = topics
            .filter((t) => catOf(t) === c.key)
            .filter((t) => !q || norm(t.title).includes(q))
            .map((t) => ({ ...t, meta: `${t.questions.length} q · ${t.answers.length} answers`, done: !!this.progress.topics[t.slug] }));
          return { ...c, topics: list };
        })
        .filter((c) => c.topics.length);
    },

    /* ---------- topic detail ---------- */
    viewTopic(slug) {
      const t = D.part1.topics.find((x) => x.slug === slug);
      if (!t) return `<div class="empty-hint">Topic not found. <a href="#/part1">Browse all topics →</a></div>`;
      const ansByQ = new Map(t.answers.map((a) => [norm(a.q), a]));
      const practiced = !!this.progress.topics[t.slug];
      const items = t.questions
        .map((q, i) => {
          const a = ansByQ.get(norm(q));
          const ans = a ? parasHtml(a.a) : '<p style="color:var(--muted);font-style:italic">No model answer in the source — try answering aloud in 15 seconds.</p>';
          return this.qaItem(`t:${t.slug}:${i}`, esc(q), ans);
        })
        .join('');
      const extra = t.answers.filter((a) => !t.questions.some((q) => norm(q) === norm(a.q)));
      const extraHtml = extra.length
        ? `<div class="section-title"><h2>Extra model answers</h2><span class="hint">not in the practice list</span></div>
           ${extra.map((a, i) => this.qaItem(`x:${t.slug}:${i}`, esc(a.q), parasHtml(a.a))).join('')}`
        : '';
      const next = D.part1.topics[(D.part1.topics.indexOf(t) + 1) % D.part1.topics.length];

      return `
        <div class="page-head">
          <div class="crumbs"><a href="#/">Home</a> · <a href="#/part1">Part 1</a></div>
          <h1>${esc(t.title)}</h1>
          <p class="sub">${t.questions.length} practice questions · ${t.answers.length} model answers (band 7.0)</p>
          <div class="page-head-actions">
            <button type="button" class="btn ${practiced ? 'btn-outline' : 'btn-primary'} btn-sm" @click="toggleTopic(${jsStr(t.slug)}); $el.classList.toggle('btn-outline'); $el.classList.toggle('btn-primary'); $el.textContent = progress.topics[${jsStr(t.slug)}] ? '✓ Practised' : 'Mark as practised'">
              ${practiced ? '✓ Practised' : 'Mark as practised'}
            </button>
            <button type="button" class="btn btn-ghost btn-sm" @click="togglePractice()">
              ${this.practice ? 'Practice mode: on — answers hidden' : 'Reading mode: answers shown'}
            </button>
            <a class="btn btn-ghost btn-sm" href="#/part1/topic/${esc(next.slug)}">Next topic →</a>
          </div>
        </div>
        ${items}
        ${extraHtml}
        <div class="note" style="margin-top:20px"><b>Tip:</b> say your answer out loud before revealing the model answer. Compare ideas and linking phrases, not word-for-word memorisation.</div>
      `;
    },

    /* ---------- common questions ---------- */
    viewCommon() {
      const common = D.part1.common;
      const doneCount = Object.keys(this.progress.common).length;
      this.prefillQ(common.map((_, i) => `c:${i}`));
      return `
        <div class="page-head">
          <div class="crumbs"><a href="#/">Home</a> · <a href="#/part1">Part 1</a></div>
          <h1>Common questions</h1>
          <p class="sub">Questions that appear for almost every candidate — learn the answers here, then adapt them to yourself.</p>
          <div class="page-head-actions">
            <span class="pill badge-p1">${doneCount} / ${common.length} studied</span>
            <button type="button" class="btn btn-ghost btn-sm" @click="markAllCommon()">Mark all studied</button>
            <button type="button" class="btn btn-ghost btn-sm" @click="resetCommon()">Reset</button>
          </div>
        </div>
        <div class="filter-row">
          <input class="filter-input" type="search" x-model="commonFilter" placeholder="Filter questions…" />
        </div>
        <div id="commonList">
          <template x-for="g in commonGroups" :key="g.letter">
            <div class="alpha-group">
              <div class="alpha-label" x-text="g.letter"></div>
              <template x-for="c in g.items" :key="c.i">
                <div class="qa" :class="(qOpen['c:' + c.i] ? 'open' : '') + (progress.common[c.i] ? ' done' : '')">
                  <button type="button" class="qa-head" @click="toggleQ('c:' + c.i)" :aria-expanded="qOpen['c:' + c.i]">
                    <span class="qa-check" @click.stop="toggleCommon(c.i)" :aria-label="progress.common[c.i] ? 'Unmark as studied' : 'Mark as studied'">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span class="qa-q" x-text="c.q"></span>
                    <svg class="qa-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                  <div class="qa-body"><div class="qa-inner"><div class="qa-a" x-html="c.aHtml"></div></div></div>
                </div>
              </template>
            </div>
          </template>
        </div>
      `;
    },

    get commonGroups() {
      const q = norm(this.commonFilter);
      const groups = {};
      D.part1.common.forEach((c, i) => {
        if (q && !norm(c.q).includes(q)) return;
        const letter = (c.q.replace(/^[^a-z]+/i, '')[0] || '#').toUpperCase();
        (groups[letter] = groups[letter] || []).push({ i, q: c.q, aHtml: parasHtml(c.a) });
      });
      return Object.keys(groups).sort().map((letter) => ({ letter, items: groups[letter] }));
    },

    /* ---------- part 2 grid ---------- */
    viewPart2() {
      return `
        <div class="page-head">
          <h1>Part 2 — Cue cards</h1>
          <p class="sub">You get 1 minute to prepare and 1–2 minutes to speak. Open any card to see the prompt, a model answer, and its Part 3 follow-up questions.</p>
          <div class="page-head-actions">
            <span class="pill badge-p2">${D.cards.filter((c) => this.progress.cards[c.number]).length} / ${D.cards.length} studied</span>
            <a class="btn btn-ghost btn-sm" href="#/part2/rand">🎲 Random card</a>
          </div>
        </div>
        <div class="filter-row">
          <input class="filter-input" type="search" x-model="cardFilter" placeholder="Filter cue cards…" />
        </div>
        <div class="cards-grid" id="cardGrid">
          <template x-for="c in visibleCards" :key="c.number">
            <a class="card-chip" :class="c.done ? 'done' : ''" :href="'#/part2/' + c.number">
              <div class="cc-top"><span class="cc-num" x-text="c.number"></span><span class="cc-status" :title="c.done ? 'studied' : 'not studied yet'"></span></div>
              <div class="cc-title" x-text="c.prompt"></div>
              <div class="cc-meta" x-text="c.meta"></div>
            </a>
          </template>
        </div>
      `;
    },

    get visibleCards() {
      const q = norm(this.cardFilter);
      return D.cards
        .filter((c) => !q || norm(c.prompt).includes(q) || norm((c.bullets || []).join(' ')).includes(q))
        .map((c) => ({ ...c, meta: `${c.bullets.length} points · ${(c.part3 || []).length} follow-ups`, done: !!this.progress.cards[c.number] }));
    },

    /* ---------- card detail ---------- */
    viewCard(n) {
      // Reading mode reveals the model answer by default; practice mode hides it.
      this.showAnswer = !this.practice;
      const idx = n === 'rand' ? randIdx() : parseInt(n, 10);
      const c = D.cards.find((x) => x.number === idx);
      if (!c) return `<div class="empty-hint">Cue card not found. <a href="#/part2">Browse all cards →</a></div>`;
      if (n === 'rand') location.hash = '#/part2/' + idx;
      const done = !!this.progress.cards[c.number];
      const i = D.cards.findIndex((x) => x.number === c.number);
      const prev = D.cards[(i - 1 + D.cards.length) % D.cards.length];
      const next = D.cards[(i + 1) % D.cards.length];

      const points = (c.bullets || [])
        .map((b) => `<li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
          ${esc(b)}
        </li>`)
        .join('');

      const answerHtml = c.modelAnswer.length
        ? `<div class="section-title"><h2>Model answer</h2><span class="hint">band 7.0 · study the structure</span></div>
           <div class="card answer-block">
             <button type="button" class="answer-toggle" @click="showAnswer = !showAnswer" :aria-expanded="showAnswer">
               <span class="answer-label" x-html="showAnswer ? '▼&nbsp; <strong>Model answer</strong>' : '▶&nbsp; Reveal model answer'"></span>
             </button>
             <div class="qa-body" :class="showAnswer ? 'open' : ''"><div class="qa-inner"><div class="qa-a" style="padding:6px 20px 18px">
               ${c.modelAnswer.map((p) => `<p>${md(esc(p))}</p>`).join('')}
             </div></div></div>
           </div>`
        : `<div class="note" style="margin-top:24px">This cue card has no model answer in the source — use the prompt points and deliver your own answer aloud.</div>`;

      const p3 = (c.part3 || []).length
        ? `<div class="p3-section">
            <div class="p3-head"><b>PART 3 · FOLLOW-UP DISCUSSION</b><span class="pill">${c.part3.length} questions</span></div>
            <div class="p3-body">
              ${c.part3.map((p, i) => this.qaItem(`p3:${c.number}:${i}`, esc(p.q), parasHtml(p.a))).join('')}
            </div>
          </div>`
        : '';

      const dots = D.cards
        .map((x) =>
          `<a class="dot ${x.number === c.number ? 'cur' : ''} ${this.progress.cards[x.number] ? 'done' : ''}" href="#/part2/${x.number}" title="${esc(x.prompt)}">${x.number}</a>`
        )
        .join('');

      return `
        <div class="page-head">
          <div class="crumbs"><a href="#/">Home</a> · <a href="#/part2">Part 2 · Cue cards</a></div>
          <h1>Cue card #${c.number}</h1>
          <div class="page-head-actions">
            <button type="button" class="btn ${done ? 'btn-outline' : 'btn-primary'} btn-sm" @click="toggleCard(${c.number}); $el.classList.toggle('btn-outline'); $el.classList.toggle('btn-primary'); $el.textContent = progress.cards[${c.number}] ? '✓ Studied' : 'Mark as studied'">
              ${done ? '✓ Studied' : 'Mark as studied'}
            </button>
            <button type="button" class="btn btn-ghost btn-sm" @click="togglePractice()">${this.practice ? 'Practice mode: on' : 'Reading mode'}</button>
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
    },

    /* ---------- bonus workbook ---------- */
    viewBonus() {
      const s = D.stats;
      const topics = D.bonus.map((t, ti) => {
        const items = t.items
          .map((it, ii) => {
            const k = `b:${ti}:${ii}`;
            return this.qaItem(k, esc(it.q), parasHtml(it.a), {
              check: `toggleBonus(${jsStr(k)})`,
              doneExpr: `progress.bonus[${jsStr(k)}]`,
            });
          })
          .join('');
        return `<div class="card" style="padding:18px 20px;margin-bottom:16px">
          <div class="section-title" style="margin:0 0 12px"><h2 style="font-size:1.05rem">${esc(t.title)}</h2>
            <span class="pill badge-plain" style="margin-left:auto">${t.items.length}</span></div>
          ${items}
        </div>`;
      }).join('');
      return `
        <div class="page-head">
          <div class="crumbs"><a href="#/">Home</a></div>
          <h1>Part 1 workbook</h1>
          <p class="sub">A second set of Part 1 questions &amp; answers bundled with the cue-card guide — handy for quick revision of the classic topics.</p>
        </div>
        ${topics}
      `;
    },

    /* ---------- tips ---------- */
    viewTips() {
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
    },
  };
}

function randIdx() { return Math.floor(Math.random() * D.cards.length) + 1; }

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

/* Boot: register the store, then expose the component used by <body x-data>. */
document.addEventListener('alpine:init', () => {
  Alpine.store('app', createAppStore());
});
window.speakingApp = () => Alpine.store('app');
