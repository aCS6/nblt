/**
 * IELTS Task 2 Guideline — interactive learning store (Alpine.js)
 * Powers flashcards (spaced repetition), quizzes, matching games,
 * structure maps, timelines and lesson progress.
 */

document.addEventListener('alpine:init', () => {
  Alpine.store('guide', {

    /* ── State ── */
    section: 'guideline',          // 'guideline' | 'vault'
    activeModuleId: null,
    activeLessonId: null,
    expandedGuideModule: null,
    guideReady: false,

    /* Interactive component state */
    fc: {},          // flashcard decks: id -> { queue, idx, flipped, results, done }
    quiz: {},        // quizzes:        id -> { answers, done }
    match: {},       // match games:    id -> { selected, matched, wrong }
    structOpen: {},  // structure maps: id -> open part index

    /* Mastery (persisted, spaced repetition) */
    mastery: {},
    guideSearch: '',

    /* ── Init ── */
    init() {
      if (typeof GUIDELINE === 'undefined') {
        console.error('GUIDELINE data not loaded.');
        return;
      }
      this.guideReady = true;
      try {
        this.mastery = JSON.parse(localStorage.getItem('ielts-guide-mastery') || '{}');
      } catch (e) {
        this.mastery = {};
      }
      this._restoreFromHash();
      window.addEventListener('hashchange', () => this._restoreFromHash());
    },

    /* ── Computed ── */
    get modules() {
      return GUIDELINE;
    },

    get activeModule() {
      return GUIDELINE.find(m => m.id === this.activeModuleId) || null;
    },

    get activeLesson() {
      const m = this.activeModule;
      if (!m) return null;
      return m.lessons.find(l => l.id === this.activeLessonId) || null;
    },

    get hasActiveLesson() {
      return this.activeLesson !== null;
    },

    get totalLessons() {
      return GUIDELINE.reduce((n, m) => n + m.lessons.length, 0);
    },

    get completedLessons() {
      return GUIDELINE.reduce((n, m) => {
        return n + m.lessons.filter(l => this.lessonComplete(m.id, l.id)).length;
      }, 0);
    },

    get overallProgress() {
      if (!this.totalLessons) return 0;
      return Math.round((this.completedLessons / this.totalLessons) * 100);
    },

    get moduleProgress() {
      const out = {};
      GUIDELINE.forEach(m => {
        const done = m.lessons.filter(l => this.lessonComplete(m.id, l.id)).length;
        out[m.id] = { done, total: m.lessons.length, pct: m.lessons.length ? Math.round(done / m.lessons.length * 100) : 0 };
      });
      return out;
    },

    get filteredModules() {
      const q = this.guideSearch.toLowerCase().trim();
      if (!q) return GUIDELINE;
      return GUIDELINE.map(m => ({
        ...m,
        lessons: m.lessons.filter(l =>
          l.title.toLowerCase().includes(q) || (l.emoji || '').includes(q)
        ),
      })).filter(m => m.lessons.length > 0);
    },

    /* ── Section / navigation ── */
    setSection(section) {
      this.section = section;
      this.mobileMenuOpen = false;
      window.location.hash = '';
    },

    openLesson(moduleId, lessonId) {
      this.activeModuleId = moduleId;
      this.activeLessonId = lessonId;
      this.expandedGuideModule = moduleId;
      this.guideSearch = '';
      this.mobileMenuOpen = false;
      window.location.hash = `guide/${moduleId}/${lessonId}`;
      Alpine.nextTick(() => {
        const scroller = document.querySelector('.guide-scroller');
        if (scroller) scroller.scrollTop = 0;
      });
    },

    toggleModule(moduleId) {
      this.expandedGuideModule = this.expandedGuideModule === moduleId ? null : moduleId;
    },

    openModuleHome(moduleId) {
      this.activeModuleId = moduleId;
      this.activeLessonId = null;
      this.expandedGuideModule = moduleId;
      this.mobileMenuOpen = false;
      window.location.hash = `guide/${moduleId}`;
    },

    backToGuidelineHome() {
      this.activeModuleId = null;
      this.activeLessonId = null;
      this.mobileMenuOpen = false;
      window.location.hash = '';
    },

    get mobileMenuOpen() {
      return Alpine.store('app').mobileMenuOpen;
    },
    set mobileMenuOpen(v) {
      Alpine.store('app').mobileMenuOpen = v;
    },

    /* ── Flashcards (spaced repetition) ── */
    deckState(deckId) {
      if (!this.fc[deckId]) {
        const cards = this._cardsOf(deckId);
        this.fc[deckId] = {
          queue: this._orderedQueue(deckId, cards),
          idx: 0,
          flipped: false,
          results: {},   // cardKey -> true (good) / false (again)
          done: false,
        };
      }
      return this.fc[deckId];
    },

    _cardsOf(deckId) {
      for (const m of GUIDELINE) {
        for (const l of m.lessons) {
          for (const b of l.blocks) {
            if (b.type === 'flashcards' && b.id === deckId) return b.cards;
          }
        }
      }
      return [];
    },

    /* Order due cards first (mastery.next in the past), then not-yet-scheduled,
       then scheduled-for-later (so it feels spaced). */
    _orderedQueue(deckId, cards) {
      const now = Date.now();
      const due = [], future = [], newCards = [];
      cards.forEach((c, i) => {
        const rec = this.mastery[deckId + '::' + i];
        if (!rec) newCards.push(i);
        else if (rec.next <= now) due.push(i);
        else future.push(i);
      });
      const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      };
      return [...shuffle(due), ...shuffle(newCards), ...shuffle(future)];
    },

    currentCard(deckId) {
      const s = this.deckState(deckId);
      if (s.done || s.idx >= s.queue.length) return null;
      const cards = this._cardsOf(deckId);
      const cardIdx = s.queue[s.idx];
      return { index: cardIdx, front: cards[cardIdx].front, back: cards[cardIdx].back };
    },

    /* Free navigation: Prev/Next flip through ALL cards in the deck queue,
       regardless of rating. Again/Good record spaced-repetition and also
       advance to the next card. */
    prevCard(deckId) {
      const s = this.deckState(deckId);
      if (s.done) return;
      if (s.idx > 0) {
        s.idx--;
        s.flipped = false;
      }
    },

    nextCard(deckId) {
      const s = this.deckState(deckId);
      if (s.done) return;
      if (s.idx < s.queue.length - 1) {
        s.idx++;
        s.flipped = false;
      }
    },

    canDeckPrev(deckId) {
      const s = this.deckState(deckId);
      return !s.done && s.idx > 0;
    },

    canDeckNext(deckId) {
      const s = this.deckState(deckId);
      return !s.done && s.idx < s.queue.length - 1;
    },

    deckProgress(deckId) {
      const s = this.deckState(deckId);
      if (!s.queue.length) return 100;
      return Math.min(100, Math.round(((s.idx + 1) / s.queue.length) * 100));
    },

    deckCounter(deckId) {
      const s = this.deckState(deckId);
      const total = this._cardsOf(deckId).length;
      if (!total) return '';
      const pos = s.done ? total : Math.min(s.idx + 1, total);
      return 'Card ' + pos + ' of ' + total;
    },

    flipCard(deckId) {
      const s = this.deckState(deckId);
      s.flipped = !s.flipped;
    },

    resetDeck(deckId) {
      delete this.fc[deckId];
    },

    /* ── Quizzes ── */
    quizState(quizId) {
      if (!this.quiz[quizId]) {
        const q = this._blockOf('quiz', quizId);
        this.quiz[quizId] = {
          answers: new Array(q.questions.length).fill(null),
          done: false,
        };
      }
      return this.quiz[quizId];
    },

    _blockOf(type, id) {
      for (const m of GUIDELINE) {
        for (const l of m.lessons) {
          for (const b of l.blocks) {
            if (b.type === type && b.id === id) return b;
          }
        }
      }
      return null;
    },

    quizScore(quizId) {
      const s = this.quizState(quizId);
      const q = this._blockOf('quiz', quizId);
      if (!q) return 0;
      let correct = 0;
      q.questions.forEach((qq, i) => { if (s.answers[i] === qq.answer) correct++; });
      return correct;
    },

    answerQuiz(quizId, qIdx, optIdx) {
      const s = this.quizState(quizId);
      if (s.answers[qIdx] !== null) return; // locked after answer
      s.answers[qIdx] = optIdx;
      const q = this._blockOf('quiz', quizId);
      const allAnswered = s.answers.every(a => a !== null);
      if (allAnswered) {
        s.done = true;
        this.lessonDirty = true;
      }
      if (allAnswered && this.quizScore(quizId) === q.questions.length) {
        this.lessonDirty = true;
      }
    },

    resetQuiz(quizId) {
      delete this.quiz[quizId];
    },

    /* ── Matching game ── */
    matchState(matchId) {
      if (!this.match[matchId]) {
        const m = this._blockOf('synonyms', matchId);
        this.match[matchId] = {
          matched: new Array(m.pairs.length).fill(false),
          selected: null,       // pair index currently selected on the left
          wrong: null,          // pair index that flashed red
          done: false,
        };
      }
      return this.match[matchId];
    },

    matchPick(matchId, side, pairIdx) {
      const s = this.matchState(matchId);
      if (s.matched[pairIdx]) return;

      if (side === 'left') {
        s.selected = (s.selected === pairIdx) ? null : pairIdx;
        return;
      }

      /* side === 'right' */
      if (s.selected === null) return;
      if (s.selected === pairIdx) {
        s.matched[pairIdx] = true;
        s.selected = null;
        if (s.matched.every(Boolean)) {
          s.done = true;
          this.lessonDirty = true;
        }
      } else {
        s.wrong = pairIdx;
        setTimeout(() => { s.wrong = null; }, 500);
      }
    },

    /* ── Structure maps ── */
    toggleStruct(mapId, idx) {
      this.structOpen[mapId] = this.structOpen[mapId] === idx ? null : idx;
    },
    isStructOpen(mapId, idx) {
      return this.structOpen[mapId] === idx;
    },

    /* ── Lesson completion (active-recall proof) ── */
    lessonComplete(moduleId, lessonId) {
      const m = GUIDELINE.find(x => x.id === moduleId);
      if (!m) return false;
      const l = m.lessons.find(x => x.id === lessonId);
      if (!l) return false;

      for (const b of l.blocks) {
        if (b.type === 'quiz') {
          const s = this.quiz[b.id];
          if (!s || !s.done) return false;
          if (this.quizScore(b.id) !== b.questions.length) return false;
        } else if (b.type === 'synonyms') {
          const s = this.match[b.id];
          if (!s || !s.done) return false;
        }
      }
      return true;
    },

    isLessonDone(moduleId, lessonId) {
      const stored = localStorage.getItem('ielts-guide-done') || '[]';
      try { return JSON.parse(stored).includes(moduleId + '/' + lessonId); } catch (e) { return false; }
    },

    /* ── URL hash ── */
    _restoreFromHash() {
      const hash = window.location.hash.replace('#', '');
      /* Non-guideline hash (e.g. an essay like "art/0") → the Essays Vault section */
      if (hash && !hash.startsWith('guide/')) {
        this.section = 'vault';
        return;
      }
      if (!hash.startsWith('guide/')) return;
      const parts = hash.split('/');
      if (parts.length >= 2) {
        const mod = GUIDELINE.find(m => m.id === parts[1]);
        if (!mod) return;
        this.section = 'guideline';
        this.activeModuleId = mod.id;
        this.expandedGuideModule = mod.id;
        if (parts.length >= 3 && mod.lessons.find(l => l.id === parts[2])) {
          this.activeLessonId = parts[2];
        } else {
          this.activeLessonId = null;
        }
      }
    },

    /* helpers used in templates */
    blockTag(b) {
      return b.type;
    },

    /* Short summary of the interactive block types in a lesson */
    lessonBlockTypes(lesson) {
      const typeLabel = { flashcards: '🃏 Flashcards', quiz: '🧩 Quiz', synonyms: '🔁 Match', structure: '🗺️ Structure', timeline: '⏱️ Timeline', sample: '📄 Model essay', keyfacts: '📊 Facts', mistakes: '🔄 Fix-it', mnemonic: '🧠 Mnemonic', text: '📖 Read', bullets: '• List', heading: '' };
      const seen = [];
      (lesson.blocks || []).forEach(b => {
        const label = typeLabel[b.type];
        if (label && !seen.includes(label)) seen.push(label);
      });
      return seen.join(' · ');
    },

    /* Move to the next lesson in the current module (or next module) */
    nextLesson() {
      if (!this.activeModule) return;
      const lessons = this.activeModule.lessons;
      const idx = lessons.findIndex(l => l.id === this.activeLessonId);
      if (idx >= 0 && idx < lessons.length - 1) {
        this.openLesson(this.activeModule.id, lessons[idx + 1].id);
        return;
      }
      const modIdx = GUIDELINE.findIndex(m => m.id === this.activeModule.id);
      if (modIdx >= 0 && modIdx < GUIDELINE.length - 1) {
        const nextMod = GUIDELINE[modIdx + 1];
        if (nextMod.lessons.length) {
          this.openLesson(nextMod.id, nextMod.lessons[0].id);
        }
      }
    },
  });
});
