/* ==========================================================================
   NBLT — hub.js
   Alpine component for the home page.

   Scope, deliberately: this page is a router. It knows the six apps, their
   names, entry points and deep links — nothing else. It does not read, write
   or aggregate any app's progress; each app owns its own storage entirely.

   The single value the hub persists is its own colour theme.
   ========================================================================== */
(function () {
  'use strict';

  var THEME_KEY = 'nblt.theme';

  /* ── Icons (24×24, currentColor strokes) ──────────────────────────────── */
  var I = {
    tracker: '<path d="M3 9.5h18"/><rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M8 2.5v4M16 2.5v4"/><path d="m8.6 14.4 2.1 2.1 4.2-4.3"/>',
    vocab:   '<path d="M4 5.6A2.6 2.6 0 0 1 6.6 3H19v14.6H6.6A2.6 2.6 0 0 0 4 20.2z"/><path d="M4 20.2a2.6 2.6 0 0 1 2.6-2.6H19V21H6.6A2.6 2.6 0 0 1 4 20.2z"/><path d="M8.4 7.6h6.2M8.4 11h4.2"/>',
    task1:   '<path d="M3.5 20.5h17"/><rect x="5" y="11.5" width="3.4" height="6" rx="1.1"/><rect x="10.3" y="6.5" width="3.4" height="11" rx="1.1"/><rect x="15.6" y="14" width="3.4" height="3.5" rx="1.1"/><path d="m5.6 8.4 4.4-3.6 3.6 2 5-3.4"/>',
    essays:  '<path d="M14.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7.5"/><path d="M8.6 8.2h4M8.6 12h6.4M8.6 15.8h4.4"/><path d="m17.2 3.1 3.7 3.7"/><path d="M15.4 8.6 20.6 3.4"/>',
    grammar: '<path d="M12 6.6C10.5 5.1 8.3 4.4 4.5 4.4v13.4c3.8 0 6 .7 7.5 2.2 1.5-1.5 3.7-2.2 7.5-2.2V4.4c-3.8 0-6 .7-7.5 2.2z"/><path d="M12 6.6v13.4"/>',
    sheet:   '<rect x="4" y="3" width="16" height="18" rx="2.2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    bolt:    '<path d="M13.2 2.5 4.8 13.3h5.6L10 21.5l8.6-10.9h-5.7z"/>',
    play:    '<path d="M6.5 4.8 18.6 12 6.5 19.2z"/>',
    sun:     '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"/>',
    moon:    '<path d="M20.5 14.3A8.5 8.5 0 1 1 9.7 3.5a6.8 6.8 0 0 0 10.8 10.8z"/>',
    arrow:   '<path d="M4.5 12h15"/><path d="m13.2 5.8 6.3 6.2-6.3 6.2"/>',
    speak:   '<rect x="9" y="2.8" width="6" height="10.5" rx="3"/><path d="M5.2 11.3a6.8 6.8 0 0 0 13.6 0"/><path d="M12 18.2V21.4"/>',
    dice:    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="8.4" cy="8.4" r="1.15" fill="currentColor" stroke="none"/><circle cx="15.6" cy="15.6" r="1.15" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/>'
  };

  /* ── The six apps ────────────────────────────────────────────────────
     `scale` is a fact about each app's content (how many days, words,
     chapters it contains) — not a measure of what anyone has done. */
  var APPS = [
    {
      id: 'tracker', hotkey: '1', featured: true,
      name: 'Band 7+ Tracker',
      kind: 'Daily plan',
      tagline: '31-day sprint to Band 7+',
      desc: 'The spine of the course. Every day is broken into hour-by-hour blocks — reading, listening, writing, speaking — with weekly milestones and links out to essay practice.',
      href: 'ielts-band7-tracker.html',
      accent: ['#6366f1', '#8b5cf6'],
      icon: I.tracker,
      scale: { n: '31', unit: 'days planned' },
      tags: ['Hour-by-hour blocks', 'Streaks', 'Essay links'],
      links: []
    },
    {
      id: 'vocab', hotkey: '2',
      name: 'Vocab Builder',
      kind: 'Vocabulary',
      tagline: '60-day challenge with বাংলা meanings',
      desc: 'Curated IELTS words split across 60 days, each with a Bangla meaning, synonyms and example sentences you can play back aloud.',
      href: 'vocab-builder/index.html',
      accent: ['#059669', '#34d399'],
      icon: I.vocab,
      scale: { n: '2,435', unit: 'words' },
      tags: ['60 days', 'বাংলা', 'Audio'],
      links: []
    },
    {
      id: 'task1', hotkey: '3',
      name: 'Task 1 Study Hub',
      kind: 'Academic Writing',
      tagline: 'Charts, maps and processes',
      desc: 'Visual chapters on Academic Task 1 — band descriptors, trend language, annotated samples and a template vault you can print.',
      href: 'task-1/index.html',
      accent: ['#0284c7', '#38bdf8'],
      icon: I.task1,
      scale: { n: '26', unit: 'chapters' },
      tags: ['Templates', 'Annotated samples', 'Quizzes'],
      links: [
        { label: 'Cheat sheet', href: 'task-1/cheat-sheet.html', icon: I.sheet },
        { label: 'Flash test', href: 'task-1/flash-test.html', icon: I.bolt }
      ]
    },
    {
      id: 'essays', hotkey: '4',
      name: 'Task 2 Lab',
      kind: 'Essay writing',
      tagline: 'Guideline + Essays Vault',
      desc: 'Essay structures and memorisable language on one side, model essays across every common exam topic on the other.',
      href: 'essays/webapp/index.html',
      accent: ['#d97706', '#fbbf24'],
      icon: I.essays,
      scale: { n: '20', unit: 'topics' },
      tags: ['Model essays', 'Structures', 'Grammar panel'],
      links: []
    },
    {
      id: 'grammar', hotkey: '5',
      name: 'Grammar Book',
      kind: 'Grammar',
      tagline: 'Cambridge Grammar for IELTS',
      desc: 'Interactive units covering every grammar point the exam tests, each with exercises, listening practice and reading tasks.',
      href: 'grammar-book/grammar/index.html',
      accent: ['#9333ea', '#c084fc'],
      icon: I.grammar,
      scale: { n: '25', unit: 'units' },
      tags: ['Exercises', 'Audio', 'Test practice'],
      links: [
        { label: 'Unit 1 · Present tenses', href: 'grammar-book/grammar/chapters/unit1.html', icon: I.play }
      ]
    },
    {
      id: 'speaking', hotkey: '6',
      name: 'Speaking Studio',
      kind: 'Speaking practice',
      tagline: 'Part 1, 2 & 3 with band-7 answers',
      desc: 'Every Part 1 topic grouped by subject, all 79 Part 2 cue cards with model answers, and each card’s Part 3 follow-up discussion — with search, a game-style study roadmap and progress tracking.',
      href: 'speaking/index.html',
      accent: ['#db2777', '#f472b6'],
      icon: I.speak,
      scale: { n: '79', unit: 'cue cards' },
      tags: ['Band-7 answers', 'Part 3 follow-ups', 'Subject groups'],
      links: [
        { label: 'Part 1 topics', href: 'speaking/index.html#/part1', icon: I.sheet },
        { label: 'Random cue card', href: 'speaking/index.html#/part2/rand', icon: I.dice }
      ]
    }
  ];

  /* A suggested loop through the apps. Static advice, not a checklist. */
  var ROUTE = [
    { app: 'tracker', mins: 5,  title: 'Open today on the Tracker', note: 'See the hour blocks for the day and commit to them.' },
    { app: 'vocab',   mins: 20, title: "Learn today's word set",    note: 'One day of the 60-day challenge — read, listen, repeat.' },
    { app: 'grammar', mins: 25, title: 'One grammar unit',          note: 'Work the exercises rather than only reading the rules.' },
    { app: 'essays',  mins: 40, title: 'Study or write one essay',  note: 'Read a model answer, then rewrite it in your own words.' },
    { app: 'speaking', mins: 20, title: 'Speak on one cue card', note: 'Pick a card, prepare for a minute, answer aloud, then compare with the model answer.' }
  ];

  window.nbltHub = function () {
    return {
      icons: I,
      apps: APPS,
      route: ROUTE,
      theme: 'dark',

      _wired: false,
      init: function () {
        var self = this;
        try { this.theme = localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'; }
        catch (e) { this.theme = 'dark'; }
        this.applyTheme();

        // Alpine 3 calls init() itself; guard in case it is ever also wired
        // to x-init, which would otherwise bind this listener twice.
        if (this._wired) return;
        this._wired = true;

        // Capture phase, on window, so the number keys work wherever focus is.
        window.addEventListener('keydown', function (e) { self.hotkey(e); }, true);
      },

      get featured() { return APPS.filter(function (a) { return a.featured; })[0]; },
      get rest() { return APPS.filter(function (a) { return !a.featured; }); },

      get greeting() {
        var h = new Date().getHours();
        if (h < 5)  return 'Still up';
        if (h < 12) return 'Good morning';
        if (h < 17) return 'Good afternoon';
        if (h < 22) return 'Good evening';
        return 'Late session';
      },

      appById: function (id) {
        return APPS.filter(function (a) { return a.id === id; })[0];
      },

      go: function (href) { window.location.href = href; },

      /* ── theme (the only thing this page stores) ── */
      applyTheme: function () {
        document.documentElement.classList.toggle('dark', this.theme === 'dark');
        document.documentElement.style.colorScheme = this.theme;
        try { localStorage.setItem(THEME_KEY, this.theme); } catch (e) {}
      },
      toggleTheme: function () {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
      },

      /* Number keys launch an app. No search shortcuts — this page has
         five destinations, which a keypress reaches faster than a query. */
      hotkey: function (e) {
        if (!e.key || e.metaKey || e.ctrlKey || e.altKey) return;
        if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || '')) return;

        var app = APPS.filter(function (a) { return a.hotkey === e.key; })[0];
        if (app) { e.preventDefault(); this.go(app.href); }
      }
    };
  };
})();
