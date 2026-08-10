#!/usr/bin/env node
/**
 * build.js — parses the two IELTS Speaking markdown files into a structured
 * dataset (js/data.js) used by the static site.
 *
 * Usage:  node build.js
 *
 * It reads:
 *   - ielts-speaking-part1-topics-and-answers.md   (Part 1)
 *   - ielts-speaking-part2-3-topics-and-answers.md (Part 2 & 3)
 * and writes:
 *   - js/data.js
 */
const fs = require('fs');
const path = require('path');

const FILE1 = 'ielts-speaking-part1-topics-and-answers.md';
const FILE2 = 'ielts-speaking-part2-3-topics-and-answers.md';
const OUT = path.join('js', 'data.js');
fs.mkdirSync(path.dirname(OUT), { recursive: true });

/* ----------------------------- helpers ----------------------------- */

const linesOf = (s) => s.split(/\r?\n/);

/** Collapse internal whitespace. */
const squash = (s) => s.replace(/\s+/g, ' ').trim();

/** Remove markdown emphasis/links; plain text. */
const plain = (s) =>
  squash(s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\*\*/g, '').replace(/`/g, ''));

/** Normalise a title for matching between sections. */
const norm = (s) => plain(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();

/** Split raw answer text into paragraphs (blank-line separated). */
function paragraphs(text) {
  return text
    .split(/\n\s*\n/)
    .map((p) => squash(p))
    .filter(Boolean);
}

/* ---------------------------- file 1: Part 1 ---------------------------- */

function parsePart1(src) {
  const L = linesOf(src);
  const data = { topicIndex: [], common: [], topics: [] };

  // ---- helpers to slice by marker lines ----
  const findLine = (from, re) => {
    for (let i = from; i < L.length; i++) if (re.test(L[i])) return i;
    return -1;
  };

  // 1) Topic index list
  const idxStart = findLine(0, /^## Important IELTS Speaking Part 1 Topics List/);
  const idxEnd = findLine(idxStart + 1, /^## Questions with Answers/);
  if (idxStart >= 0 && idxEnd > idxStart) {
    for (let i = idxStart + 1; i < idxEnd; i++) {
      const m = L[i].match(/^[-*]\s+(.+)/);
      if (m) data.topicIndex.push(plain(m[1]));
    }
  }

  // 2) Common questions ("### Question" + answer paragraphs)
  const commonStart = findLine(0, /^## Questions with Answers for IELTS Speaking Part 1/);
  const commonEnd = findLine(commonStart + 1, /^## Questions for Speaking Part 1 Practice/);
  if (commonStart >= 0 && commonEnd > commonStart) {
    let q = null, acc = [];
    const flush = () => {
      if (q) data.common.push({ q: plain(q), a: paragraphs(acc.join('\n')) });
      acc = [];
    };
    for (let i = commonStart + 1; i < commonEnd; i++) {
      const line = L[i];
      const hm = line.match(/^###\s+(.+)/);
      if (hm) {
        flush();
        q = hm[1];
      } else if (q && line.trim() && !/^#{1,6}\s/.test(line) && !/^\s*---\s*$/.test(line)) {
        // skip stray examiner notes
        if (/are likely to be asked questions related to their job experience/i.test(line)) continue;
        acc.push(line);
      }
    }
    flush();
  }

  // 3) Practice topics ("### Topic" + bullet questions)
  const pracStart = commonEnd; // right after common section header
  const pracEnd = findLine(pracStart + 1, /^## Download IELTS Speaking Part 1 PDF/);
  let topics = [];
  if (pracEnd > pracStart) {
    let t = null;
    for (let i = pracStart + 1; i < pracEnd; i++) {
      const line = L[i];
      const hm = line.match(/^###\s+(.+)/);
      if (hm) {
        t = { title: squash(hm[1]), questions: [], answers: [], slug: '' };
        topics.push(t);
      } else if (t) {
        const bm = line.match(/^[-*]\s+(.+)/);
        if (bm) t.questions.push(plain(bm[1]));
      }
    }
  }

  // 4) Pets model answers (dedicated section)
  const petsStart = findLine(0, /^# Model Answers: Pets and Farm Animals/);
  const petsEnd = findLine(petsStart + 1, /^# Model Answers for All/);
  let petsAnswers = [];
  if (petsStart >= 0 && petsEnd > petsStart) {
    let q = null, acc = [];
    const flush = () => {
      if (q) petsAnswers.push({ q: plain(q), a: paragraphs(acc.join('\n')) });
      acc = [];
    };
    for (let i = petsStart + 1; i < petsEnd; i++) {
      const line = L[i];
      const hm = line.match(/^###\s+(.+)/);
      if (hm) { flush(); q = hm[1]; }
      else if (q && line.trim() && !/^#{1,6}\s/.test(line) && !/^\s*---\s*$/.test(line) && !/^>\s?/.test(line)) {
        acc.push(line);
      }
    }
    flush();
  }

  // 5) Model answers for all practice topics ("## Topic" + bold questions)
  let model = {}; // norm title -> [{q, a}]
  const allStart = findLine(0, /^# Model Answers for All Speaking Part 1 Practice/);
  if (allStart >= 0) {
    let t = null, q = null, acc = [];
    const flushQ = () => {
      if (q) t.items.push({ q: plain(q), a: paragraphs(acc.join('\n')) });
      acc = [];
    };
    const flushT = () => {
      flushQ();
      q = null;
    };
    for (let i = allStart + 1; i < L.length; i++) {
      const line = L[i];
      const th = line.match(/^##\s+(.+)/);
      const bh = line.match(/^\*\*(.+)\*\*\s*$/);
      if (th) {
        flushT();
        t = { title: squash(th[1]), items: [] };
        model[norm(th[1])] = t.items;
      } else if (bh && t) {
        flushQ();
        q = bh[1];
      } else if (t && line.trim() && !/^\s*---\s*$/.test(line) && !/^>\s?/.test(line) && !/^#{1,6}\s/.test(line)) {
        if (q) acc.push(line);
      }
    }
    flushT();
  }

  // 6) Merge practice topics with model answers
  const merged = new Map(); // norm -> topic
  for (const t of topics) {
    t.slug = slugify(t.title);
    merged.set(norm(t.title), t);
  }
  // Pets answers attach to the "Pets and Farm Animals" topic
  if (petsAnswers.length) {
    const key = norm('Pets and Farm Animals');
    if (merged.has(key)) merged.get(key).answers = petsAnswers;
    else {
      const t = { title: 'Pets and Farm Animals', questions: [], answers: petsAnswers, slug: 'pets-and-farm-animals' };
      merged.set(key, t);
    }
  }
  // Model sections that have no practice counterpart -> questions-only topics
  for (const [key, items] of Object.entries(model)) {
    if (!merged.has(key)) {
      merged.set(key, {
        title: titleOf(items, key),
        questions: items.map((x) => x.q),
        answers: items,
        slug: slugify(key),
      });
    } else {
      merged.get(key).answers = items;
    }
  }
  for (const t of merged.values()) {
    t.cat = TOPIC_CATS[norm(t.title)] || 'other';
  }
  data.topics = [...merged.values()].sort((a, b) => a.title.localeCompare(b.title));
  data.cats = CATEGORIES;

  return data;
}

function titleOf(items, key) {
  // best-effort readable title from slug-like key
  return key
    .split(' ')
    .map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

/* Curated subject categories for the Part 1 practice topics (keyed by norm() title). */
const TOPIC_CATS = {
  'dream job and travel space travel': 'work',
  'mathematics and history': 'work',
  'primary school and wallet': 'work',
  'school and wild animals': 'work',
  'teachers and coins': 'work',
  'area you live in': 'home',
  'home country and taking rest': 'home',
  'housework cooking and morning time': 'home',
  'sharing and staying at home': 'home',
  'stages of life and furniture': 'home',
  'tidiness and discussion': 'home',
  'asking for help and challenges': 'people',
  'beautiful view and making friends': 'people',
  'evening time and friends': 'people',
  'evening time and meeting places': 'people',
  'friends and dream': 'people',
  'google maps and helping others': 'people',
  'meeting new people and list': 'people',
  'patience and sharing': 'people',
  'teamwork and laughing': 'people',
  'apps and public gardens parks': 'tech',
  'computers and sitting down': 'tech',
  'e books paper books and news': 'tech',
  'gifts and robots': 'tech',
  'internet and childhood memory': 'tech',
  'mobile phone and street market': 'tech',
  'snacks and social media': 'tech',
  'social media and sunglasses': 'tech',
  'technology and music': 'tech',
  'text messaging and clothes fashion': 'tech',
  'video games and breakfast': 'tech',
  'websites and cars': 'tech',
  'barbecue': 'food',
  'chocolate and language': 'food',
  'foreign food and maps': 'food',
  'tea coffee and noise': 'food',
  'art and morning routine': 'hobby',
  'bags and day off': 'hobby',
  'books and reading habits': 'hobby',
  'collecting things and computers': 'hobby',
  'collecting things and old buildings': 'hobby',
  'exciting activities and plants': 'hobby',
  'films and geography': 'hobby',
  'films cinema and movies': 'hobby',
  'hobby and colors': 'hobby',
  'library and weather': 'hobby',
  'music and feeling bored': 'hobby',
  'musical instruments and clothing': 'hobby',
  'pen or pencil and happy things': 'hobby',
  'perfume and fishing': 'hobby',
  'picnic and recycle': 'hobby',
  'puzzles and singing': 'hobby',
  'reading and window view': 'hobby',
  'sport programs and books': 'hobby',
  'sports and talent': 'hobby',
  'taking photos and watch': 'hobby',
  'talents and art drawing': 'hobby',
  'weekends and t shirts': 'hobby',
  'writing and stages of life': 'hobby',
  'car trip': 'travel',
  'getting lost and colors': 'travel',
  'island and festival': 'travel',
  'names and public transportation': 'travel',
  'old buildings and sitting down': 'travel',
  'roads and streets': 'travel',
  'scenery and water sport': 'travel',
  'sky and driving': 'travel',
  'staying up and holidays': 'travel',
  'transport and bikes': 'travel',
  'advertisements and boring things': 'shopping',
  'jeans and smile': 'shopping',
  'jewelry and small business': 'shopping',
  'losing things cake and money': 'shopping',
  'market and age': 'shopping',
  'shoes and headphones': 'shopping',
  'shopping and jokes comedies': 'shopping',
  'watch and mirrors': 'shopping',
  'chatting and running': 'health',
  'drinking water and sunglasses': 'health',
  'health and fixing things': 'health',
  'physical exercise and saving money': 'health',
  'swimming and advertisement': 'health',
  'farming and decoration': 'nature',
  'flowers and concentration': 'nature',
  'insects and newspaper magazine': 'nature',
  'outer space stars and science': 'nature',
  'pets animals and spending time with others': 'nature',
  'pets and farm animals': 'nature',
  'rain and favorite day': 'nature',
  'trees and feeling happy': 'nature',
  'advertisement and celebrity': 'culture',
  'birthday and geography': 'culture',
  'new year and environmental protection': 'culture',
  'special costumes': 'culture',
  'concentrate and ice cream': 'habits',
  'haircut and break': 'habits',
  'lost and found': 'habits',
  'memory and colors': 'habits',
  'new activities and getting up early': 'habits',
  'numbers and keys': 'habits',
  'plan and walking': 'habits',
  'sports programs and time management': 'habits',
};

/* Ordered category list shown on the Part 1 overview page. */
const CATEGORIES = [
  { key: 'work', label: 'Work & Studies', icon: '💼' },
  { key: 'home', label: 'Home & Living', icon: '🏠' },
  { key: 'people', label: 'People & Social Life', icon: '👥' },
  { key: 'hobby', label: 'Hobbies & Free Time', icon: '🎨' },
  { key: 'tech', label: 'Technology & Internet', icon: '💻' },
  { key: 'travel', label: 'Travel & Transport', icon: '🚗' },
  { key: 'shopping', label: 'Shopping & Money', icon: '🛍️' },
  { key: 'food', label: 'Food & Drink', icon: '🍽️' },
  { key: 'health', label: 'Health & Fitness', icon: '🏃' },
  { key: 'nature', label: 'Nature & Environment', icon: '🌱' },
  { key: 'culture', label: 'Culture & Celebrations', icon: '🎉' },
  { key: 'habits', label: 'Daily Habits & Personal Skills', icon: '⏰' },
  { key: 'other', label: 'Other Topics', icon: '📦' },
];

function slugify(s) {
  return plain(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* --------------------------- file 2: Part 2 & 3 --------------------------- */

const CARD_RE = /^(\d+)\.{1,2}\s+\*{0,2}Describe/i;
const MODEL_RE = /^\s*\*{0,2}Model Answer\s*:\s*\*{0,2}\s*$/i;
const PART3_RE = /^#{0,2}\s*\*{0,2}IELTS Speaking (Test )?Part 3 Follow[- ]?Up Questions?\s*:?\*{0,2}\s*$/i;
const ITEM_RE = /^(\d+)\.{1,2}\s+(.+)$/;

function parsePart23(src) {
  const L = linesOf(src);
  const cards = [];
  let i = 0;

  // find first cue card
  while (i < L.length && !CARD_RE.test(L[i])) i++;

  const endOfPart2 = L.findIndex((l) => /^## \*\*IELTS Speaking Part 1 Questions and Answers\*\*/.test(l));
  const limit = endOfPart2 > 0 ? endOfPart2 : L.length;

  while (i < limit) {
    const m = L[i].match(CARD_RE);
    if (!m) { i++; continue; }
    const number = parseInt(m[1], 10);
    const cardLine = L[i];
    i++;

    // --- prompt (may continue over lines until "You should say:" or bullets) ---
    let prompt = squash(cardLine.replace(/^\d+\.{1,2}\s+/, '').replace(/\*{2}/g, ''));
    let youShould = '';
    const ys = prompt.match(/^(.+?)\s*[-–]?\s*You should say\s*:\s*(.*)$/i);
    if (ys) { prompt = squash(ys[1]); youShould = squash(ys[2]); }

    // --- bullets ---
    const bullets = [];
    while (i < limit && !CARD_RE.test(L[i]) && !MODEL_RE.test(L[i]) && !PART3_RE.test(L[i])) {
      const line = L[i].trim();
      if (/^[-*]\s+/.test(line)) {
        bullets.push(squash(line.replace(/^[-*]\s+/, '')));
      } else if (/You should say\s*:/i.test(line)) {
        const ys2 = line.replace(/^.*?You should say\s*:\s*/i, '');
        if (ys2 && !/^[-*]/.test(ys2)) youShould = squash(ys2);
      } else if (line && !/^\s*---\s*$/.test(line) && bullets.length === 0 && !/^#{1,6}\s/.test(line)) {
        // continuation of prompt (e.g. card 58 wraps across lines)
        prompt = squash(prompt + ' ' + line.replace(/\*{2}/g, ''));
      }
      i++;
    }

    // --- model answer (bullet or paragraph lines; no blank-line gaps in source) ---
    let modelAnswer = [];
    if (i < limit && MODEL_RE.test(L[i])) {
      i++;
      while (i < limit && L[i].trim() === '') i++;
      const raw = [];
      while (i < limit && !CARD_RE.test(L[i]) && !PART3_RE.test(L[i]) && !/^\s*---\s*$/.test(L[i])) {
        const line = L[i].trim();
        if (line && !/^#{1,6}\s/.test(line) && !/^[>*]\s?/.test(line)) raw.push(line);
        i++;
      }
      // merge continuation lines into the previous bullet/paragraph
      modelAnswer = raw.reduce((acc, line) => {
        const bm = line.match(/^[-*]\s+(.+)/);
        if (bm) acc.push(bm[1]);
        else if (acc.length) acc[acc.length - 1] += ' ' + line;
        else acc.push(line);
        return acc;
      }, []);
    }

    // --- part 3 follow-up Q&A ---
    const part3 = [];
    if (i < limit && PART3_RE.test(L[i])) {
      i++;
      // skip blank lines
      while (i < limit && L[i].trim() === '') i++;
      let cur = null;
      const flush = () => {
        if (cur) {
          cur.a = paragraphs(cur.raw.join('\n'));
          part3.push({ q: cur.q, a: cur.a });
        }
        cur = null;
      };
      while (i < limit && !CARD_RE.test(L[i]) && !/^\s*---\s*$/.test(L[i]) && !/^##\s/.test(L[i])) {
        const line = L[i];
        const im = line.match(ITEM_RE);
        if (im) {
          flush();
          // question may wrap across continuation lines; keep extending until a '?' appears
          let text = squash(im[2]);
          let qi = text.indexOf('?');
          let j = i + 1;
          while (
            qi < 0 &&
            text.length < 240 &&
            j < limit &&
            !ITEM_RE.test(L[j]) &&
            !CARD_RE.test(L[j]) &&
            !/^\s*---\s*$/.test(L[j]) &&
            !/^##\s/.test(L[j]) &&
            L[j].trim() &&
            /^[a-z(‘“]/.test(L[j].trim())
          ) {
            text = squash(text + ' ' + L[j].trim());
            qi = text.indexOf('?');
            j++;
          }
          if (qi >= 0) {
            cur = { q: squash(text.slice(0, qi + 1)), raw: [squash(text.slice(qi + 1))] };
          } else {
            cur = { q: text, raw: [] };
          }
          i = j - 1;
        } else if (cur && line.trim()) {
          cur.raw.push(line);
        }
        i++;
      }
      flush();
    }

    cards.push({
      number,
      prompt,
      youShould,
      bullets,
      modelAnswer,
      part3,
    });
  }

  // --- bonus Part 1 workbook at the end of file 2 ---
  const bonus = parseBonusPart1(L.slice(limit));

  return { cards, bonus };
}

/** Parse the trailing "IELTS Speaking Part 1 Questions and Answers" workbook. */
function parseBonusPart1(L) {
  const topics = [];
  let t = null, acc = [], curQ = null, pending = false;
  const flushQ = () => {
    if (curQ) t.items.push({ q: curQ, a: paragraphs(acc.join('\n')) });
    acc = [];
    curQ = null;
  };
  const newTopic = (title) => {
    flushQ();
    t = { title, items: [] };
    topics.push(t);
  };
  const BOLD_Q = /^\d+\.{1,2}\s*\*{0,2}(.+?)\*{0,2}\s*$/;
  const BOLD_Q_NONUM = /^\*{0,2}(.+?)\*{0,2}\s*$/;

  for (const raw of L) {
    const line = raw.trim();
    if (!line || /^\s*---\s*$/.test(line) || /^>\s?/.test(line)) continue;

    const sub = line.match(/^##\s*\*{0,2}(.+?)\*{0,2}\s*:?\s*$/);
    if (sub && !sub[1].includes('?') && sub[1].length < 40) {
      if (t) flushQ();
      newTopic(squash(sub[1]));
      continue;
    }

    const QW = /^(Do|Does|Did|What|How|When|Where|Why|Are|Is|Can|Could|Would|Should|Will|Which|Who|Whose|May|Please|Have|Has|Had|If|In what)\b/i;
    const bq = line.match(BOLD_Q);
    if (bq && line.endsWith('**') && !bq[1].includes('?') && bq[1].length < 90 && !QW.test(bq[1])) {
      // numbered bold line without a question mark & not a question → topic header
      if (t) flushQ();
      newTopic(plain(bq[1]));
      continue;
    }

    const bqn = line.match(/^\d+\.{1,2}\s+\*{0,2}(.+)$/); // numbered bold item (question or topic)
    const isQ = (s) => s.includes('?');
    // numbered bold item whose bold span wraps across lines (e.g. "9. **(If you answer…")
    if (/^\d+\.{1,2}\s+\*{0,2}[^*\n]/.test(line) && !line.endsWith('**') && !line.includes('?')) {
      flushQ();
      curQ = plain(line.replace(/^\d+\.{1,2}\s+/, ''));
      pending = true;
      continue;
    }
    // numbered bold non-question items (e.g. "2. **Please describe it a little.**")
    if (bq && !bq[1].includes('?') && QW.test(bq[1])) {
      flushQ();
      curQ = plain(bq[1]);
      acc.push('');
      continue;
    }
    if (bq && isQ(bq[1])) {
      flushQ();
      const text = bq[1];
      const qi = text.indexOf('?');
      curQ = squash(text.slice(0, qi + 1));
      acc.push(squash(text.slice(qi + 1)));
      continue;
    }
    if (bqn && isQ(bqn[1])) {
      flushQ();
      const text = bqn[1].replace(/\*{2}/g, '');
      const qi = text.indexOf('?');
      curQ = squash(text.slice(0, qi + 1));
      acc.push(squash(text.slice(qi + 1)));
      continue;
    }
    // bold question without number (Running section)
    if (/^\*\*[^*\n]*\?.*\*{0,2}\s*$/.test(line)) {
      flushQ();
      const text = line.replace(/\*{2}/g, '');
      const qi = text.indexOf('?');
      curQ = squash(text.slice(0, qi + 1));
      acc.push(squash(text.slice(qi + 1)));
      continue;
    }
    if (pending) {
      curQ = squash(curQ + ' ' + plain(line));
      const qi = curQ.indexOf('?');
      if (qi >= 0) {
        const rest = squash(curQ.slice(qi + 1));
        curQ = squash(curQ.slice(0, qi + 1));
        if (rest) acc.push(rest);
        pending = false;
      }
      continue;
    }
    if (t) acc.push(line);
  }
  flushQ();
  return topics.filter((x) => x.items.length || x.title);
}

/* ------------------------------ assemble ------------------------------ */

const part1 = parsePart1(fs.readFileSync(FILE1, 'utf8'));
const { cards, bonus } = parsePart23(fs.readFileSync(FILE2, 'utf8'));

const totalCommonQ = part1.common.length;
const totalTopicQ = part1.topics.reduce((n, t) => n + t.questions.length, 0);
const totalTopicA = part1.topics.reduce((n, t) => n + t.answers.length, 0);
const cardsWithAnswer = cards.filter((c) => c.modelAnswer.length).length;
const cardsWithP3 = cards.filter((c) => c.part3 && c.part3.length).length;
const totalP3 = cards.reduce((n, c) => n + (c.part3 ? c.part3.length : 0), 0);
const bonusItems = bonus.reduce((n, t) => n + t.items.length, 0);

const stats = {
  topics: part1.topics.length,
  topicIndex: part1.topicIndex.length,
  commonQ: totalCommonQ,
  topicQ: totalTopicQ,
  topicA: totalTopicA,
  cards: cards.length,
  cardsWithAnswer,
  cardsWithP3,
  part3: totalP3,
  bonusTopics: bonus.length,
  bonusItems,
};

const out = `/* Generated by build.js — do not edit by hand. Regenerate with: node build.js */
window.SPEAKING_DATA = ${JSON.stringify({ part1, cards, bonus, stats })};
`;
fs.writeFileSync(OUT, out);
console.log('Wrote', OUT, `(${(fs.statSync(OUT).size / 1024).toFixed(0)} KB)`);
console.log(JSON.stringify(stats, null, 2));
