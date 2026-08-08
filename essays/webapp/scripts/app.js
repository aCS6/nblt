/**
 * IELTS Easy Vault — Alpine.js Application
 * Main application store and component logic.
 */

/* ── Topic icon mapping ── */
const TOPIC_ICONS = {
  'art': '🎨', 'business-and-money': '💼', 'communication-and-personality': '💬',
  'crime-and-punishment': '⚖️', 'education': '🎓', 'environment': '🌍',
  'family': '👨‍👩‍👧‍👦', 'food': '🍽️', 'government-and-politics': '🏛️',
  'health': '🏥', 'housing': '🏠', 'language': '🗣️',
  'leisure-and-free-time': '🎯', 'media': '📺', 'reading': '📚',
  'society': '🏘️', 'space-exploration': '🚀', 'sports-and-excercise': '⚽',
  'technology': '💻', 'work': '💼',
};

/* ── Badge class mapping ── */
function getBadgeClass(essayType) {
  const t = essayType.toLowerCase();
  if (t.includes('opinion')) return 'badge-opinion';
  if (t.includes('discussion')) return 'badge-discussion';
  if (t.includes('problem')) return 'badge-problem';
  if (t.includes('two-part') || t.includes('two part')) return 'badge-twopart';
  if (t.includes('advantage')) return 'badge-advantages';
  return 'badge-opinion';
}

/* ── Vocabulary highlighting ── */
function highlightVocabulary(text) {
  const app = window.Alpine ? Alpine.store('app') : null;
  const essay = app?.selectedEssay;
  const customVocab = essay?.vocabulary || {};
  const combinedVocab = { ...VOCABULARY, ...customVocab };

  const escaped = escapeHtml(text);
  const words = Object.keys(combinedVocab).sort((a, b) => b.length - a.length);
  let result = escaped;

  for (const word of words) {
    // Match whole words, case-insensitive
    const regex = new RegExp(`\\b(${escapeRegex(word)})\\b`, 'gi');
    result = result.replace(regex, (match) => {
      return `<span class="vocab-word">${match}</span>`;
    });
  }
  return result;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ── Levenshtein distance (edit distance) for fuzzy dictionary search ── */
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  let prev = new Array(n + 1);
  let curr = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}

/* ── Truncate text ── */
function truncate(text, maxLen = 75) {
  if (text.length <= maxLen) return text;
  return text.substring(0, maxLen).trim() + '…';
}

/* ── Alpine.js App Store ── */
document.addEventListener('alpine:init', () => {
  Alpine.store('app', {
    /* ── State ── */
    topics: [],
    totalEssays: 0,
    searchQuery: '',
    expandedTopic: null,
    selectedTopicSlug: null,
    selectedEssayIndex: null,
    grammarPanelOpen: false,
    grammarData: null,
    activeParagraphIndex: null,
    mobileMenuOpen: false,
    vocabCollapsed: true,
    sidebarCollapsed: false,
    essayFontScale: 1,
    lastRead: null,
    dictOpen: false,
    dictQuery: '',
    _dictCache: null,
    isLightTheme: false,

    /* ── Initialization ── */
    init() {
      // Restore theme preference (default: dark, match OS when no preference stored)
      const saved = localStorage.getItem('ielts-theme');
      if (saved === 'light') this.isLightTheme = true;
      else if (saved === 'dark') this.isLightTheme = false;
      else this.isLightTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      this.applyTheme();

      // Word dictionary keyboard shortcuts: "/" to open, Esc to close.
      // Registered first (with capture) so they work even if topic data fails to load.
      window.addEventListener('keydown', (e) => {
        // Ignore keys during IME composition (e.g. typing Bengali) so Escape cancels composition instead of closing the modal
        if (e.isComposing) return;
        const target = e.target;
        const typing = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
        if (e.key === '/' && !typing) {
          e.preventDefault();
          this.openDict();
        } else if ((e.key === 'Escape' || e.key === 'Esc') && this.dictOpen) {
          this.closeDict();
        }
      }, { capture: true });

      if (typeof TOPICS_DATA === 'undefined') {
        console.error('TOPICS_DATA not loaded. Run generate.py first.');
        return;
      }
      const topicsList = Object.values(TOPICS_DATA).map(t => ({
        ...t,
        icon: TOPIC_ICONS[t.slug] || '📄',
      }));
      this.topics = topicsList;
      this.totalEssays = topicsList.reduce((sum, t) => sum + t.essays.length, 0);

      // Global essay order (across all topics) for prev/next navigation
      this.essayList = [];
      topicsList.forEach(t => {
        t.essays.forEach((e, i) => this.essayList.push({ slug: t.slug, index: i }));
      });

      // Restore the essay answer font scale
      this.essayFontScale = Math.max(0.7, Math.min(1.6, parseFloat(localStorage.getItem('ielts-font-scale')) || 1));

      // Restore the last-read essay mark
      this.lastRead = localStorage.getItem('ielts-last-read') || null;

      // Restore state from URL hash
      this._restoreFromHash();
      window.addEventListener('hashchange', () => {
        this._restoreFromHash();
        // layout is CSS-driven; nothing to do here
      });

      // Sidebar resizing logic
      Alpine.nextTick(() => {
        const resizer = document.querySelector('.sidebar-resizer');
        const appContainer = document.getElementById('app');
        if (resizer && appContainer) {
          let isDragging = false;
          resizer.addEventListener('mousedown', (e) => {
            if (this.sidebarCollapsed) {
              this.toggleSidebar();
              return;
            }
            isDragging = true;
            resizer.classList.add('dragging');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
          });
          document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const newWidth = Math.max(220, Math.min(600, e.clientX));
            appContainer.style.setProperty('--sidebar-width', `${newWidth}px`);
          });
          document.addEventListener('mouseup', () => {
            if (isDragging) {
              isDragging = false;
              resizer.classList.remove('dragging');
              document.body.style.cursor = '';
              document.body.style.userSelect = '';
            }
          });
        }
      });

      // Restore the grammar panel's persisted width
      const storedWidth = localStorage.getItem('grammar-panel-width');
      if (storedWidth && appContainer) {
        appContainer.style.setProperty('--grammar-panel-width', `${storedWidth}px`);
      }

    },

    /* ── Computed ── */
    get filteredTopics() {
      const q = this.searchQuery.toLowerCase().trim();
      if (!q) return this.topics;
      return this.topics.filter(t => {
        if (t.title.toLowerCase().includes(q)) return true;
        return t.essays.some(e =>
          e.question.toLowerCase().includes(q) ||
          e.essayType.toLowerCase().includes(q)
        );
      });
    },

    get selectedTopic() {
      return this.topics.find(t => t.slug === this.selectedTopicSlug) || null;
    },

    get selectedEssay() {
      if (!this.selectedTopic || this.selectedEssayIndex === null) return null;
      return this.selectedTopic.essays[this.selectedEssayIndex] || null;
    },

    get hasSelection() {
      return this.selectedEssay !== null;
    },

    get _currentEssayPos() {
      if (!this.selectedTopic) return -1;
      return this.essayList.findIndex(e => e.slug === this.selectedTopicSlug && e.index === this.selectedEssayIndex);
    },

    get hasPrevEssay() {
      return this._currentEssayPos > 0;
    },

    get hasNextEssay() {
      const pos = this._currentEssayPos;
      return pos >= 0 && pos < this.essayList.length - 1;
    },

    get isLastRead() {
      return this.lastRead === `${this.selectedTopicSlug}/${this.selectedEssayIndex}`;
    },

    get essayVocabulary() {
      if (!this.selectedEssay) return [];
      const essay = this.selectedEssay;
      const customVocab = essay.vocabulary || {};
      const combinedVocab = { ...VOCABULARY, ...customVocab };

      const found = [];
      const essayText = (essay.question + ' ' + essay.paragraphs.join(' ')).toLowerCase();
      const words = Object.keys(combinedVocab).sort();

      for (const word of words) {
        const regex = new RegExp(`\\b${escapeRegex(word)}\\b`, 'i');
        if (regex.test(essayText)) {
          found.push({
            english: word,
            bangla: combinedVocab[word].bangla,
            type: combinedVocab[word].type
          });
        }
      }
      return found;
    },

    /* ── Word Dictionary ── */
    get dictionarySize() {
      return Object.keys(VOCABULARY || {}).length;
    },

    _dictEntries() {
      if (!this._dictCache) {
        const combined = { ...VOCABULARY, ...(this.selectedEssay?.vocabulary || {}) };
        this._dictCache = Object.entries(combined).map(([word, v]) => ({ word, bangla: v.bangla, type: v.type }));
      }
      return this._dictCache;
    },

    /* Try to resolve a query to a dictionary word, e.g. "overlooked" → "overlook" */
    _resolveRoot(query) {
      const entries = this._dictEntries();
      const has = (w) => entries.some(e => e.word === w);
      const lower = query.toLowerCase().trim();
      if (has(lower)) return lower;
      const transforms = [
        ['ies', 'y'], ['es', ''], ['s', ''], ['ed', ''], ['d', ''],
        ['ing', ''], ['ing', 'e'], ['er', ''], ['est', ''],
      ];
      for (const [suffix, replacement] of transforms) {
        if (lower.endsWith(suffix) && lower.length > suffix.length + 2) {
          const candidate = lower.slice(0, lower.length - suffix.length) + replacement;
          if (has(candidate)) return candidate;
        }
      }
      return null;
    },

    /* Score every dictionary entry against the query (fuzzy) and return the top N.
       Signals, in priority order:
         perfect match 1000  ·  root form of the query 900
         prefix match ~600+  ·  substring match ~400+  ·  edit-distance similarity ~200–600
    */
    _fuzzyTop(query, n = 3) {
      const q = query.toLowerCase().trim();
      if (!q) return [];
      const entries = this._dictEntries();
      const has = (w) => entries.some(e => e.word === w);
      const root = has(q) ? null : this._resolveRoot(q);

      const scored = [];
      for (const entry of entries) {
        const word = entry.word.toLowerCase();
        let score = 0;
        let matchedRoot = false;

        if (word === q) {
          score = 1000;
        } else if (root && word === root) {
          score = 900;
          matchedRoot = true;
        } else {
          if (word.startsWith(q)) score = 600 + Math.min(150, (q.length / word.length) * 100);
          else if (word.includes(q)) score = 400 + Math.min(100, (q.length / word.length) * 100);

          // Typo tolerance via edit distance (only for meaningful query lengths)
          if (q.length >= 3) {
            const maxLen = Math.max(q.length, word.length);
            if (Math.abs(q.length - word.length) / maxLen <= 0.6) {
              const sim = 1 - levenshtein(q, word) / maxLen;
              if (sim >= 0.6) score = Math.max(score, Math.round(200 + sim * 400));
            }
          }
        }
        if (score > 0) scored.push({ entry, score, matchedRoot });
      }

      scored.sort((a, b) => b.score - a.score || a.entry.word.localeCompare(b.entry.word));
      return scored.slice(0, n);
    },

    get dictBestMatch() {
      const q = this.dictQuery.trim();
      if (!q) return null;
      const top = this._fuzzyTop(q)[0];
      if (!top) return null;
      const e = top.entry;
      return { word: e.word, bangla: e.bangla, type: e.type, query: q, matchedRoot: top.matchedRoot };
    },

    get dictResults() {
      const q = this.dictQuery.trim();
      if (!q) return [];
      // Top 3 matches: #1 is the featured card, the remaining 2 go in the list
      return this._fuzzyTop(q, 3).slice(1).map(m => m.entry);
    },

    dictInEssay(word) {
      const essay = this.selectedEssay;
      if (!essay) return false;
      const text = (essay.question + ' ' + essay.paragraphs.join(' ')).toLowerCase();
      return new RegExp(`\\b${escapeRegex(word)}\\b`, 'i').test(text);
    },

    openDict() {
      this.dictOpen = true;
      Alpine.nextTick(() => {
        const input = document.getElementById('dict-input');
        if (input) input.focus();
      });
    },

    closeDict() {
      this.dictOpen = false;
      this.dictQuery = '';
    },

    /* ── Actions ── */
    toggleTopic(slug) {
      this.expandedTopic = this.expandedTopic === slug ? null : slug;
    },

    selectEssay(topicSlug, essayIndex) {
      this.selectedTopicSlug = topicSlug;
      this.selectedEssayIndex = essayIndex;
      this.expandedTopic = topicSlug;
      this.closeGrammarPanel();
      this.vocabCollapsed = true;
      this.mobileMenuOpen = false;
      this._dictCache = null;
      window.location.hash = `${topicSlug}/${essayIndex}`;


    },

    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;

    },

    toggleVocab() {
      this.vocabCollapsed = !this.vocabCollapsed;

    },

    /* ── Essay Toolbar ── */
    prevEssay() {
      const pos = this._currentEssayPos;
      if (pos > 0) {
        const target = this.essayList[pos - 1];
        this.selectEssay(target.slug, target.index);
        this.markCurrentAsLastRead();
      }
    },

    nextEssay() {
      const pos = this._currentEssayPos;
      if (pos >= 0 && pos < this.essayList.length - 1) {
        const target = this.essayList[pos + 1];
        this.selectEssay(target.slug, target.index);
        this.markCurrentAsLastRead();
      }
    },

    setFontScale(value) {
      this.essayFontScale = Math.max(0.7, Math.min(1.6, parseFloat(value) || 1));
      localStorage.setItem('ielts-font-scale', String(this.essayFontScale));
    },

    /* ── Last Read ── */
    isLastReadEssay(slug, index) {
      return this.lastRead === `${slug}/${index}`;
    },

    get hasLastRead() {
      return !!this.lastRead;
    },

    markCurrentAsLastRead() {
      const key = `${this.selectedTopicSlug}/${this.selectedEssayIndex}`;
      this.lastRead = key;
      localStorage.setItem('ielts-last-read', key);
    },

    toggleLastRead() {
      const key = `${this.selectedTopicSlug}/${this.selectedEssayIndex}`;
      this.lastRead = (this.lastRead === key) ? null : key;
      if (this.lastRead) {
        localStorage.setItem('ielts-last-read', this.lastRead);
      } else {
        localStorage.removeItem('ielts-last-read');
      }
    },

    goToLastRead() {
      if (!this.lastRead) return;
      const parts = this.lastRead.split('/');
      if (parts.length !== 2) return;
      const [slug, idx] = parts;
      const topic = this.topics.find(t => t.slug === slug);
      if (topic && topic.essays[parseInt(idx)]) {
        this.selectEssay(slug, parseInt(idx));
      } else {
        // Last-read essay no longer exists — clear the mark
        this.lastRead = null;
        localStorage.removeItem('ielts-last-read');
      }
    },

    goHome() {
      this.selectedTopicSlug = null;
      this.selectedEssayIndex = null;
      this.expandedTopic = null;
      this.closeGrammarPanel();
      this.vocabCollapsed = true;
      this._dictCache = null;
      window.location.hash = '';
    },

    /* ── Grammar Panel ── */
    openGrammarPanel(paragraphText, paragraphIndex) {
      if (this.activeParagraphIndex === paragraphIndex && this.grammarPanelOpen) {
        this.closeGrammarPanel();
        return;
      }
      this.activeParagraphIndex = paragraphIndex;
      const patterns = analyseGrammar(paragraphText);
      this.grammarData = patterns;
      this.grammarPanelOpen = true;

    },

    closeGrammarPanel() {
      this.grammarPanelOpen = false;
      this.activeParagraphIndex = null;
      this.grammarData = null;

    },

    /* ── Resizable Grammar Panel ── */
    startGrammarResize(e) {
      e.preventDefault();
      e.stopPropagation();
      const appContainer = document.getElementById('app');
      const onMove = (ev) => {
        const width = Math.max(260, Math.min(640, window.innerWidth - ev.clientX));
        appContainer.style.setProperty('--grammar-panel-width', `${width}px`);
      };
      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        localStorage.setItem('grammar-panel-width', appContainer.style.getPropertyValue('--grammar-panel-width'));

      };
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    },

    /* ── URL Hash ── */
    _restoreFromHash() {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      const parts = hash.split('/');
      if (parts.length === 2) {
        const [slug, idx] = parts;
        const topic = this.topics.find(t => t.slug === slug);
        if (topic && topic.essays[parseInt(idx)]) {
          this.selectedTopicSlug = slug;
          this.selectedEssayIndex = parseInt(idx);
          this.expandedTopic = slug;
        }
      }
    },

    /* ── Helpers exposed to templates ── */
    getBadgeClass,
    truncate,
    highlightVocabulary,
    getTopicIcon(slug) {
      return TOPIC_ICONS[slug] || '📄';
    },

    filteredEssaysForTopic(topic) {
      const q = this.searchQuery.toLowerCase().trim();
      if (!q) return topic.essays.map((e, i) => ({ ...e, originalIndex: i }));
      return topic.essays
        .map((e, i) => ({ ...e, originalIndex: i }))
        .filter(e =>
          e.question.toLowerCase().includes(q) ||
          e.essayType.toLowerCase().includes(q)
        );
    },

    /* ── Theme ── */
    applyTheme() {
      document.documentElement.setAttribute('data-theme', this.isLightTheme ? 'light' : 'dark');
    },

    toggleTheme() {
      this.isLightTheme = !this.isLightTheme;
      localStorage.setItem('ielts-theme', this.isLightTheme ? 'light' : 'dark');
      this.applyTheme();
    },
  });
});
