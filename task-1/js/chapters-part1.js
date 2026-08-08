/* ============================================================
   IELTS Task 1 Study Hub — chapter content (part 1 of 2)
   Structured as interactive component blocks.
   ============================================================ */

/* CHAPTERS is defined here and extended by chapters-part2.js */
const CHAPTERS = [];

function addChapters(list) {
  for (const c of list) CHAPTERS.push(c);
}

addChapters([

  /* ============ 1. Introduction ============ */
  {
    id: "intro",
    title: "Introduction",
    icon: "🚀",
    group: "Start here",
    hero: {
      icon: "🚀",
      title: "Welcome! You can do this.",
      sub: "This is not a boring textbook. It is a visual, interactive training gym for IELTS Academic Writing Task 1 — built for students who want to SEE the patterns, not just read about them."
    },
    blocks: [
      { type: "stats", items: [
        { num: "60", label: "minutes for the whole Writing test", tag: "Task 1 = 20 min", tone: "blue" },
        { num: "150", label: "words minimum for Task 1", tag: "aim for ~200", tone: "green" },
        { num: "1/3", label: "of your Writing score comes from Task 1", tag: "Task 2 = 2/3", tone: "amber" },
        { num: "8.0+", label: "is achievable with the right formulas", tag: "simple = safe", tone: "purple" }
      ]},
      { type: "para", text: "IELTS Task 1 is a <b>report</b>, not an essay. You are never asked for your opinion — only to <span class=\"hl\">describe what a diagram shows</span>. That makes it the most predictable part of the whole IELTS test. Once you learn the formulas, you can score high even with simple English." },
      { type: "remember", title: "The golden rule", desc: "The examiner does not care WHAT you say. They care HOW WELL you use English. You do not need creativity — you need the right formulas, repeated with accuracy." },
      { type: "cards", items: [
        { icon: "🧩", title: "1. Learn the diagram types", body: "Line chart, bar chart, pie chart, table, map, process. Each has its own formula." },
        { icon: "📈", title: "2. Master trend language", body: "Increase, decrease, fluctuate, level off — with the right adverbs and adjectives." },
        { icon: "🏗️", title: "3. Use one structure", body: "Introduction → Overview → Body 1 → Body 2. Always the same skeleton." },
        { icon: "🎯", title: "4. Practise in 20 minutes", body: "Speed comes from repetition. Rewrite the same report until it feels automatic." }
      ]},
      { type: "quiz", title: "Quick check — what is Task 1?", questions: [
        { q: "What kind of writing is IELTS Task 1?", opts: ["An opinion essay", "A report describing a diagram", "A letter to a friend", "A story about your life"], correct: 1, right: "Exactly! Task 1 is a REPORT — you describe the main points of a diagram. No opinions, no explanations.", wrong: "Not quite — Task 1 is a REPORT. You describe the main points of a diagram, never your opinion." },
        { q: "How many words must you write for Task 1?", opts: ["At least 250", "At least 100", "At least 150", "At least 200"], correct: 2, right: "Correct! 150 words minimum. Writing fewer means a penalty.", wrong: "Almost! Task 1 needs at least 150 words. Writing fewer means a penalty." },
        { q: "How much time should you spend on Task 1?", opts: ["40 minutes", "20 minutes", "10 minutes", "60 minutes"], correct: 1, right: "Right! About 20 minutes — Task 2 gets the other 40.", wrong: "Not quite — spend about 20 minutes on Task 1 and 40 minutes on Task 2." }
      ]}
    ]
  },

  /* ============ 2. IELTS Writing Introduction ============ */
  {
    id: "writing-intro",
    title: "IELTS Writing Introduction",
    icon: "⏱️",
    group: "Start here",
    hero: {
      icon: "⏱️",
      title: "Know the game before you play it",
      sub: "The Writing test is a system for gaining and losing points. Understand the rules first, then practise."
    },
    blocks: [
      { type: "stats", items: [
        { num: "60 min", label: "total Writing test time", tag: "2 tasks", tone: "blue" },
        { num: "20 min", label: "for Task 1 (report)", tag: "150–220 words", tone: "green" },
        { num: "40 min", label: "for Task 2 (essay)", tag: "250–300 words", tone: "amber" },
        { num: "1/3", label: "of the Writing score = Task 1", tag: "Task 2 is worth 2x", tone: "purple" }
      ]},
      { type: "cards", items: [
        { icon: "📝", title: "Task 1 — the report", body: "150 words minimum, up to 220 words maximum. 10 to 15 sentences. 1/3 of your Writing score." },
        { icon: "📄", title: "Task 2 — the essay", body: "250 words minimum, up to 300 words. 20 to 25 sentences. Worth twice as much as Task 1." },
        { icon: "🎓", title: "Academic style only", body: "No informal language. This is not an email to your friend. Use formal, academic vocabulary." }
      ]},
      { type: "remember", title: "Word count = penalty zone", desc: "Below 150 words in Task 1 → automatic penalty. But writing only 150 words is rarely enough for a high score — aim for 200–210 words." },
      { type: "para", text: "A common strategy is to write <b>Task 2 first</b> (it is worth twice as much), then come back to Task 1 with the remaining time. Either way, keep 20 minutes for Task 1." },
      { type: "tip", title: "Practise regularly", desc: "A 7.0–8.0 for Task 1 is very achievable because the language is narrow and limited. You do not need a huge vocabulary — you need the right 100 words, used fluently." }
    ]
  },

  /* ============ 3. IELTS Writing Task 1 ============ */
  {
    id: "task1-basics",
    title: "IELTS Writing Task 1",
    icon: "📊",
    group: "Start here",
    hero: {
      icon: "📊",
      title: "What are they actually asking?",
      sub: "Describe the main points of a diagram. That's it. You do NOT explain why something happened."
    },
    blocks: [
      { type: "para", text: "They give you a diagram — a picture that carries information, usually numbers. Your job is to <b>describe the main points</b>. If a graph shows fast food consumption rising, you write <span class=\"hl\">\"fast food consumption increased\"</span>. You do NOT write \"...because fast food is delicious\". That explanation belongs in Task 2 essays." },
      { type: "section", label: "Meet the diagram family" },
      { type: "diagrams", items: [
        { img: "extracted_images/page-11.png", title: "Flow chart / process", desc: "Shows how to do or make something — a method, step by step." },
        { img: "extracted_images/page-12_1.png", title: "Line chart / line graph", desc: "Shows changes over a period of time. Trend language lives here." },
        { img: "extracted_images/page-12_2.png", title: "Table", desc: "Rows and columns of numbers. Great for comparison language." },
        { img: "extracted_images/page-13_1.png", title: "Pie chart", desc: "Shows percentages out of 100. Talk about proportions and shares." },
        { img: "extracted_images/page-13_2.png", title: "Bar / column graph", desc: "Percentages or amounts, sometimes over time. Bars compare categories." },
        { img: "extracted_images/page-14.png", title: "Map", desc: "Shows changes to a place over time. Location and direction language." }
      ]},
      { type: "para", text: "The data type decides your language:<br>• <b>One point in time</b> → comparison only (highest, lowest, more than, less than).<br>• <b>Two or more time points</b> → comparison <b>plus</b> trend language (increase, decrease, fluctuate)." },
      { type: "remember", title: "Never explain the 'why'", desc: "Describe, don't explain. Task 1 is about WHAT the diagram shows, not WHY it happened." },
      { type: "quiz", title: "Which language fits?", questions: [
        { q: "The diagram shows only ONE year of data. Which language can you use?", opts: ["Trend language only", "Comparison language only", "Both comparison and trend", "Neither"], correct: 1, right: "Correct! With one point in time you can only COMPARE. No movement language!", wrong: "Not quite — with one point in time you can only COMPARE. Trend language needs two or more time points." },
        { q: "The graph shows 1990 and 2000. What do you need?", opts: ["Comparison only", "Trend only", "Comparison + trend", "Opinions"], correct: 2, right: "Right! Two time points = comparison AND trend language.", wrong: "Almost! Two time points need BOTH comparison AND trend language." }
      ]}
    ]
  },

  /* ============ 4. Effective Sentence Structures ============ */
  {
    id: "structures",
    title: "Effective Sentence Structures",
    icon: "🧱",
    group: "Core skills",
    hero: {
      icon: "🧱",
      title: "Six building blocks for an 8.0+",
      sub: "These structures never change. Only the subject (gas, sugar, cars...) changes. That is why Task 1 is a formula."
    },
    blocks: [
      { type: "tabs", tabs: [

        /* ── Tab 1 · Position ── */
        { label: "1 · Position", blocks: [
          { type: "para", text: "<b>Position = tell the examiner where a value sat at a specific moment.</b> You are not describing movement — you are pinning a number to a time." },
          /* Visual: annotated graph with a dot showing a single value */
          { type: "para", text: `<div class="struct-visual">
  <div class="sv-label">What a position looks like on a graph</div>
  <svg viewBox="0 0 480 160" role="img" aria-label="Graph showing a single data point: gas price stood at $2.75 in 2005" style="width:100%;max-width:480px;display:block;margin:0 auto 14px">
    <!-- axes -->
    <line x1="50" y1="20" x2="50" y2="130" stroke="#d1d9f0" stroke-width="1.5"/>
    <line x1="50" y1="130" x2="440" y2="130" stroke="#d1d9f0" stroke-width="1.5"/>
    <!-- y-axis labels -->
    <text x="44" y="36" font-size="11" fill="#9aa3bd" text-anchor="end">$3.00</text>
    <text x="44" y="75" font-size="11" fill="#9aa3bd" text-anchor="end">$2.75</text>
    <text x="44" y="113" font-size="11" fill="#9aa3bd" text-anchor="end">$2.50</text>
    <!-- x-axis year label -->
    <text x="200" y="146" font-size="11" fill="#9aa3bd" text-anchor="middle">2005</text>
    <!-- dashed crosshair lines -->
    <line x1="50" y1="75" x2="200" y2="75" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/>
    <line x1="200" y1="75" x2="200" y2="130" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/>
    <!-- the dot -->
    <circle cx="200" cy="75" r="8" fill="#2563eb" stroke="#fff" stroke-width="2.5"/>
    <!-- callout arrow + label -->
    <line x1="210" y1="65" x2="260" y2="38" stroke="#2563eb" stroke-width="1.5"/>
    <rect x="261" y="18" width="168" height="26" rx="6" fill="#2563eb"/>
    <text x="345" y="35" font-size="12" fill="#fff" font-weight="700" text-anchor="middle">stood at $2.75 in 2005</text>
  </svg>
  <div class="sv-sentence">
    <span class="sv-part sv-subj">The price of gas</span>
    <span class="sv-verb">stood at</span>
    <span class="sv-part sv-data">$2.75 per gallon</span>
    <span class="sv-part sv-time">in 2005.</span>
  </div>
  <div class="sv-key">
    <span class="sv-pill sv-subj">Subject (what)</span>
    <span class="sv-pill sv-verb-pill">Verb = stood at / accounted for / was</span>
    <span class="sv-pill sv-data">Data (the number)</span>
    <span class="sv-pill sv-time">Time anchor</span>
  </div>
</div>` },
          { type: "cards", items: [
            { icon: "📍", title: "stood at — for measurements", body: "<b>The price of gas stood at $2.75 per gallon in 2005.</b><br><span style='font-size:0.82rem;color:var(--ink-soft)'>Use for any value: percentage, price, number of units.</span>" },
            { icon: "📊", title: "accounted for — for percentages", body: "<b>In 2005, the sugar export accounted for about 10% of total exports.</b><br><span style='font-size:0.82rem;color:var(--ink-soft)'>Use specifically when talking about a share or proportion.</span>" },
            { icon: "🔢", title: "was / were — the simplest form", body: "<b>The figure for car sales was 4.2 million in 2000.</b><br><span style='font-size:0.82rem;color:var(--ink-soft)'>Always safe. Pair with 'the figure for X' when the subject is awkward.</span>" }
          ]},
          { type: "remember", title: "Position ≠ movement", desc: "'Stood at' describes a fixed snapshot — like pausing a video. It does NOT mean the value was changing. Use it at the start of a sentence to anchor the data before describing what happened next." }
        ]},

        /* ── Tab 2 · Movement ── */
        { label: "2 · Movement", blocks: [
          { type: "para", text: "<b>Movement = a value changed.</b> Four grammar patterns all say the same thing — rotate them to show Grammar Range." },
          /* Visual: four labelled sentence slots around a single rise */
          { type: "para", text: `<div class="struct-visual">
  <div class="sv-label">One change — four ways to write it</div>
  <svg viewBox="0 0 480 120" role="img" aria-label="Bar showing gas prices rose from $2.50 to $3.00" style="width:100%;max-width:480px;display:block;margin:0 auto 14px">
    <!-- background bars -->
    <rect x="80" y="40" width="60" height="60" rx="6" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.5"/>
    <rect x="160" y="10" width="60" height="90" rx="6" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
    <!-- bar labels -->
    <text x="110" y="115" font-size="11" fill="#9aa3bd" text-anchor="middle">2000</text>
    <text x="190" y="115" font-size="11" fill="#9aa3bd" text-anchor="middle">2005</text>
    <text x="110" y="87" font-size="11" fill="#1e40af" text-anchor="middle" font-weight="700">$2.50</text>
    <text x="190" y="27" font-size="12" fill="#fff" text-anchor="middle" font-weight="700">$3.00</text>
    <!-- up arrow -->
    <line x1="260" y1="95" x2="260" y2="18" stroke="#10b981" stroke-width="2"/>
    <polygon points="254,22 260,8 266,22" fill="#10b981"/>
    <text x="272" y="60" font-size="12" fill="#10b981" font-weight="700">rose</text>
  </svg>
  <table class="struct-table" aria-label="Four movement patterns for the same data">
    <thead><tr><th>#</th><th>Pattern</th><th>Example sentence</th></tr></thead>
    <tbody>
      <tr><td>1</td><td><span class="st-tag st-blue">There was...</span></td><td><b>There was an increase</b> in gas prices from $2.50 to $3.00.</td></tr>
      <tr><td>2</td><td><span class="st-tag st-green">Subject + verb</span></td><td>Gas prices <b>increased</b> from $2.50 to $3.00.</td></tr>
      <tr><td>3</td><td><span class="st-tag st-amber">Experienced...</span></td><td>Gas prices <b>experienced an increase</b> from $2.50 to $3.00.</td></tr>
      <tr><td>4</td><td><span class="st-tag st-purple">Witnessed...</span></td><td>Gas prices <b>witnessed an increase</b> from $2.50 to $3.00.</td></tr>
    </tbody>
  </table>
</div>` },
          { type: "remember", title: "Pattern 1 uses 'there was' — not 'there were'", desc: "'There was a rise in gas prices' — singular noun (a rise) → 'was'. This is one of the most commonly marked grammar errors in Task 1." }
        ]},

        /* ── Tab 3 · Time phrases ── */
        { label: "3 · Time phrases", blocks: [
          { type: "para", text: "<b>Time phrases anchor every data point to a when.</b> Without them, your report could describe any chart. Use the right preposition and structure every time." },
          /* Visual: a horizontal timeline showing where each phrase type sits */
          { type: "para", text: `<div class="struct-visual">
  <div class="sv-label">Where each time phrase type sits on the timeline</div>
  <svg viewBox="0 0 480 110" role="img" aria-label="Timeline from 1990 to 2000 showing time phrase positions" style="width:100%;max-width:480px;display:block;margin:0 auto 10px">
    <!-- timeline -->
    <line x1="40" y1="60" x2="440" y2="60" stroke="#d1d9f0" stroke-width="2.5"/>
    <!-- ticks + years -->
    <line x1="40" y1="52" x2="40" y2="68" stroke="#9aa3bd" stroke-width="2"/>
    <text x="40" y="82" font-size="11" fill="#9aa3bd" text-anchor="middle">1990</text>
    <line x1="240" y1="52" x2="240" y2="68" stroke="#9aa3bd" stroke-width="2"/>
    <text x="240" y="82" font-size="11" fill="#9aa3bd" text-anchor="middle">1995</text>
    <line x1="440" y1="52" x2="440" y2="68" stroke="#9aa3bd" stroke-width="2"/>
    <text x="440" y="82" font-size="11" fill="#9aa3bd" text-anchor="middle">2000</text>
    <!-- SPAN bracket (from...to) -->
    <line x1="40" y1="35" x2="440" y2="35" stroke="#2563eb" stroke-width="2" stroke-dasharray="none"/>
    <line x1="40" y1="28" x2="40" y2="42" stroke="#2563eb" stroke-width="2"/>
    <line x1="440" y1="28" x2="440" y2="42" stroke="#2563eb" stroke-width="2"/>
    <text x="240" y="22" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">from 1990 to 2000 / between 1990 and 2000</text>
    <!-- POINT dot (In 1995) -->
    <circle cx="240" cy="60" r="7" fill="#f59e0b" stroke="#fff" stroke-width="2"/>
    <text x="240" y="105" font-size="11" fill="#b45309" font-weight="700" text-anchor="middle">In 1995 / By 1995</text>
  </svg>
</div>` },
          { type: "compare", head: ["Phrase type", "Preposition", "Example", "Use when…"], rows: [
            ["Span — start to end", "from … to", "from 1990 to 2000", "describing the whole period or a sub-period"],
            ["Span — range", "between … and", "between 1990 and 2000", "interchangeable with from/to"],
            ["Span — named period", "over / during", "over a ten-year period", "describing a named duration without exact years"],
            ["Point — at a year", "in", "in 1995", "describing what happened at one specific year"],
            ["Point — by a deadline", "by", "by 1995", "describing what had happened up to a year"],
            ["Sequence", "after / before", "after 1995 / before 2000", "connecting two events in order"]
          ]},
          { type: "remember", title: "'In' vs 'by' — the one students mix up", desc: "'In 1995, sales rose' = sales rose during that year. 'By 1995, sales had risen' = sales rose at some point before or during 1995. 'By' implies a completed state." }
        ]},

        /* ── Tab 4 · Linking ── */
        { label: "4 · Linking", blocks: [
          { type: "para", text: "<b>Linking = connecting two events in the same sentence.</b> Overusing <b>then</b> flattens your Coherence & Cohesion score. Three patterns replace it." },
          /* Visual: sentence flow diagram */
          { type: "para", text: `<div class="struct-visual">
  <div class="sv-label">Three ways to link the same two events</div>
  <div class="link-diagram">
    <div class="ld-row">
      <span class="ld-badge ld-bad">Basic</span>
      <div class="ld-sentence">
        <span class="ld-part ld-a">CD sales increased until 2010,</span>
        <span class="ld-connector ld-then">then</span>
        <span class="ld-part ld-b">fell slightly.</span>
      </div>
      <span class="ld-score ld-ok">Band 6</span>
    </div>
    <div class="ld-row">
      <span class="ld-badge ld-mid">Better</span>
      <div class="ld-sentence">
        <span class="ld-part ld-a">CD sales increased until 2010,</span>
        <span class="ld-connector ld-before">before falling</span>
        <span class="ld-part ld-b">slightly the following year.</span>
      </div>
      <span class="ld-score ld-good">Band 7</span>
    </div>
    <div class="ld-row">
      <span class="ld-badge ld-best">Best</span>
      <div class="ld-sentence">
        <span class="ld-connector ld-after">After increasing steadily</span>
        <span class="ld-part ld-b">until 2010, CD sales fell slightly.</span>
      </div>
      <span class="ld-score ld-best-score">Band 8</span>
    </div>
  </div>
</div>` },
          { type: "cards", items: [
            { icon: "❌→✅", title: "Replace 'then'", body: "Instead of: <i>Sales rose, <b>then</b> fell.</i><br>Write: <b>Sales rose before falling.</b> — one clean participial phrase." },
            { icon: "⬅️", title: "Start with 'After'", body: "<b>After increasing steadily until 2010,</b> CD sales fell slightly. — Moves the time reference to the front, creating a more sophisticated sentence." },
            { icon: "🔄", title: "Start with 'Having'", body: "<b>Having peaked at 85% in 2000,</b> the figure declined steadily. — Perfect participle = Band 8 grammar signal." }
          ]},
          { type: "remember", title: "One linking upgrade per paragraph", desc: "You don't need to use all three patterns in every paragraph. Replace just ONE 'then' per paragraph and your Coherence & Cohesion score rises noticeably." }
        ]},

        /* ── Tab 5 · Vocabulary variety ── */
        { label: "5 · Vocab variety", blocks: [
          { type: "para", text: "<b>Vocabulary variety = saying the same data point with a different grammatical slot.</b> You never need to invent new words — just rotate the structure." },
          /* Visual: three grammar slots pointing to the same meaning */
          { type: "para", text: `<div class="struct-visual">
  <div class="sv-label">One fall in CD sales — three grammatical structures</div>
  <div class="vocab-slots">
    <div class="vs-row">
      <span class="vs-slot vs-slot-1">Structure 1</span>
      <div class="vs-parts">
        <span class="vs-tag vs-noun">noun phrase</span>
        <span class="vs-arrow">→</span>
        <span class="vs-example"><b>There was</b> a slight fall <b>in CD sales</b> in 2010.</span>
      </div>
    </div>
    <div class="vs-row">
      <span class="vs-slot vs-slot-2">Structure 2</span>
      <div class="vs-parts">
        <span class="vs-tag vs-time">time subject</span>
        <span class="vs-arrow">→</span>
        <span class="vs-example"><b>2010 saw</b> a slight fall in CD sales.</span>
      </div>
    </div>
    <div class="vs-row">
      <span class="vs-slot vs-slot-3">Structure 3</span>
      <div class="vs-parts">
        <span class="vs-tag vs-verb">verb phrase</span>
        <span class="vs-arrow">→</span>
        <span class="vs-example">CD sales <b>experienced</b> a slight fall in 2010.</span>
      </div>
    </div>
  </div>
  <div class="vs-rule">Rotate all three in one paragraph → instant Grammar Range lift.</div>
</div>` },
          { type: "remember", title: "Same idea, three grammars", desc: "There was a fall / 2010 saw a fall / sales experienced a fall. Rotating these three gives instant variety without learning new vocabulary." }
        ]},

        /* ── Tab 6 · Giving evidence ── */
        { label: "6 · Evidence", blocks: [
          { type: "para", text: "<b>Evidence = specific numbers attached to your trend statements.</b> Without data, a sentence is an opinion. With data, it is a description — and that is what Task 1 rewards." },
          /* Visual: annotated sentence showing from/to and by slots */
          { type: "para", text: `<div class="struct-visual">
  <div class="sv-label">Where the data slots live in a movement sentence</div>
  <div class="ev-diagram">
    <div class="ev-sentence">
      <span class="ev-part ev-subj">CD sales</span>
      <span class="ev-part ev-verb">increased</span>
      <span class="ev-part ev-from">from 52 million</span>
      <span class="ev-part ev-to">to 70 million units</span>
      <span class="ev-part ev-time">between 2009 and 2010.</span>
    </div>
    <div class="ev-labels">
      <span class="ev-lbl" style="--ev-left:0%">Subject</span>
      <span class="ev-lbl" style="--ev-left:18%">Verb</span>
      <span class="ev-lbl ev-lbl-hi" style="--ev-left:33%">from (start)</span>
      <span class="ev-lbl ev-lbl-hi" style="--ev-left:53%">to (end)</span>
      <span class="ev-lbl" style="--ev-left:73%">Time phrase</span>
    </div>
  </div>
  <div class="ev-alt">
    <div class="ev-alt-row"><span class="ev-alt-tag">by (amount)</span> CD sales increased <b>by 18 million units</b> from 2009 to 2010.</div>
    <div class="ev-alt-row"><span class="ev-alt-tag">from→to + time</span> During 2009–2010, there was a rise in CD sales <b>from 52 to 70 million units</b>.</div>
  </div>
</div>` },
          { type: "cards", items: [
            { icon: "📌", title: "from X to Y — the safest pattern", body: "Always works. Always scores. <b>Sales rose from 52 to 70 million</b>. Nothing complicated, but the data is there." },
            { icon: "📐", title: "by [amount] — shows the change size", body: "<b>Sales increased by 18 million units.</b> Use when the difference is more important than the start/end values." },
            { icon: "🎯", title: "'The figure for X' — universal subject", body: "When the noun is awkward: <b>The figure for novel sales rose from 52 to 70 million.</b> Works for any diagram type." }
          ]},
          { type: "remember", title: "No data, no marks", desc: "A statement without numbers is just an opinion. 'Sales rose significantly' without a figure earns no Lexical Resource credit for Task Achievement. Pin every key statement to at least one number." }
        ]}

      ]}
    ]
  },

  /* ============ 5. Language of Trends ============ */
  {
    id: "trends",
    title: "Language of Trends",
    icon: "📈",
    group: "Core skills",
    hero: {
      icon: "📈",
      title: "Build your trend sentence — live",
      sub: "Pick a direction and a speed, watch the line move, and read the sentence it creates. This is the heart of Task 1."
    },
    blocks: [
      { type: "trend" },
      { type: "section", label: "The trend toolbox" },
      { type: "vocab", groups: [
        { kind: "⬆️ Up", items: ["rose", "increased", "grew", "climbed", "rocketed", "soared"] },
        { kind: "⬇️ Down", items: ["fell", "decreased", "declined", "dropped", "plunged", "plummeted"] },
        { kind: "〰️ Flat / mixed", items: ["remained stable", "levelled off", "fluctuated", "stabilized"] },
        { kind: "⚡ Speed words (adverbs)", items: ["slightly", "gradually", "steadily", "sharply", "dramatically", "significantly", "wildly"] }
      ]},
      { type: "remember", title: "plunge, plummet & rocket = no adverbs!", desc: "These verbs already mean a BIG change. Say \"plunged\" or \"rocketed\" alone — never \"plunged sharply\" or \"rocketed dramatically\"." },
      { type: "para", text: "The same meaning can be expressed as a <b>verb + adverb</b> or an <b>adjective + noun</b>. Rotating between them adds variety to your grammar score:<br>• <b>Increased significantly</b> = <b>there was a significant increase</b><br>• <b>Fell gradually</b> = <b>there was a gradual fall</b><br>• <b>Rose sharply</b> = <b>there was a sharp rise</b>" },
      { type: "cards", items: [
        { icon: "🧠", title: "steadily = gradually", body: "Both mean change over a period of time — like a child growing taller over the years." },
        { icon: "⚖️", title: "slightly ≠ steadily", body: "Slightly is about AMOUNT (how much). Steadily/gradually is about TIME (over a period)." },
        { icon: "🛬", title: "levelled off comes AFTER a trend", body: "Sales <b>fluctuated before they levelled off</b>. Never start a description with \"levelled off\"." },
        { icon: "⛰️", title: "peak & low", body: "You can <b>reach a low</b> or <b>reach a peak</b>. But say <b>started at a high</b>, not \"reached a high\"." },
        { icon: "🧭", title: "stood at = anywhere", body: "\"Stood at\" works at the beginning, middle or end: <b>The figure stood at 4 million in 2010.</b>" }
      ]},
      { type: "quiz", title: "Trend language check", questions: [
        { q: "Which is correct?", opts: ["There was a slightly increase", "There was a slight increase", "It slightly increased by a slight", "A slight increased"], correct: 1, right: "Correct! Adjective + noun: a SLIGHT increase.", wrong: "Not quite — it's adjective + noun: a SLIGHT increase. (A SLIGHTLY increase is wrong!)" },
        { q: "Which sentence is WRONG?", opts: ["Sales plummeted in May", "Sales rocketed in May", "Sales plummeted sharply", "Sales soared in May"], correct: 2, right: "Right! Plummet and rocket never take adverbs.", wrong: "Not quite — plummet and rocket never take adverbs, so 'Sales plummeted sharply' is the mistake." },
        { q: "Where can you use 'levelled off'?", opts: ["At the very start", "After another trend", "Only in the overview", "Never"], correct: 1, right: "Correct! Levelled off / stabilized always happen AFTER another trend.", wrong: "Not quite — levelled off / stabilized always come AFTER another trend." },
        { q: "Fluctuated wildly means...", opts: ["Small changes", "No changes", "Big changes", "Steady growth"], correct: 2, right: "Right! Fluctuated WILDLY = big changes.", wrong: "Almost — fluctuated WILDLY or SIGNIFICANTLY means big changes. Fluctuated SLIGHTLY means small changes." }
      ]}
    ]
  },

  /* ============ 6. Task 1 Writing Process ============ */
  {
    id: "process",
    title: "Task 1 Writing Process",
    icon: "🗺️",
    group: "Core skills",
    hero: {
      icon: "🗺️",
      title: "Your 4-step exam plan",
      sub: "Never be nervous again. Follow the same steps every single time — this is how confident students write."
    },
    blocks: [
      { type: "stepper", steps: [
        { title: "Read the summary", body: "The summary tells you exactly what you are looking at. Ask yourself three questions: <b>What is the verb tense?</b> (usually past) · <b>What is measured?</b> (e.g. the number of tourists) · <b>What is the unit?</b> (e.g. thousand). Example: \"The table below shows how many tourists from five countries visited Australia from 1991 to 1999.\"" },
        { title: "Analyse the trends", body: "Look from the <b>beginning to the end</b> — did it increase, decrease, or stay the same? Ignore the messy middle at first. Then look for <b>peaks, dips and fluctuations</b>. Finally find the <b>superlatives</b>: which country had the MOST, which had the FEWEST?" },
        { title: "Find the main points", body: "The main points are the most important features — general trends + general comparisons + superlatives. They go in your overview. Example: \"Overall, the number of visitors from all five countries increased, while the US and the UK accounted for the most tourists throughout the period.\" No overview = no more than 5.0 in Task Achievement." },
        { title: "Organise the paragraphs", body: "Write <b>4 paragraphs</b>: Introduction (paraphrased summary) → Overview (main points with trends + comparisons) → Body 1 → Body 2. Group the data logically — for example, the three highest figures in one paragraph and the lowest in the other." }
      ]},
      { type: "remember", title: "The magic formula", desc: "Paraphrase Summary → Main Point → Describe. 15 minutes to write, and the structure never changes." },
      { type: "chips", label: "Overview openers — rotate these", items: [
        { t: "As the graph shows...", tone: "blue" },
        { t: "It is clear from the graph that...", tone: "green" },
        { t: "As is shown by the graph...", tone: "amber" },
        { t: "It can be seen from the graph that...", tone: "purple" },
        { t: "As is illustrated by the graph...", tone: "teal" },
        { t: "From the graph, it is clear that...", tone: "pink" }
      ]},
      { type: "tip", title: "Your body paragraphs need logic", desc: "Group by size or by trend. Don't describe every single small change — select the important figures and compare them." }
    ]
  },

  /* ============ 7. Marking & Assessment ============ */
  {
    id: "marking",
    title: "Task 1 Marking & Assessment",
    icon: "🧮",
    group: "Core skills",
    hero: {
      icon: "🧮",
      title: "Four boxes, each worth 25%",
      sub: "IELTS keeps scoring secret, but we know the four categories. Target all four and you control your score."
    },
    blocks: [
      { type: "stats", items: [
        { num: "25%", label: "Task Achievement", tag: "Did you describe the main points?", tone: "blue" },
        { num: "25%", label: "Coherence & Cohesion", tag: "Are paragraphs logical and linked?", tone: "green" },
        { num: "25%", label: "Lexical Resource", tag: "Is your vocabulary varied & accurate?", tone: "amber" },
        { num: "25%", label: "Grammar Range & Accuracy", tag: "Varied structures, few mistakes?", tone: "purple" }
      ]},
      { type: "cards", items: [
        { icon: "🎯", title: "Task Achievement", body: "How well you fulfil the job: describe the most important points, select the right information, include trends and comparisons, write at least 150 words. <b>No overview → max 5.0 here.</b>" },
        { icon: "🧩", title: "Coherence & Cohesion", body: "How well you choose and organise paragraphs and make the writing flow from beginning to end. Use clear paragraphing and linking words." },
        { icon: "💬", title: "Lexical Resource", body: "How much vocabulary you use and how varied, accurate and appropriate it is. Spelling errors and wrong word forms hurt you. \"Sales increasing\" → wrong. \"Sales increased\" → right." },
        { icon: "🧠", title: "Grammatical Range & Accuracy", body: "Are you making grammar mistakes? Are you using complex structures? \"Sales increased... fluctuated... plummeted\" — all accurate, but all past simple. Rotate structures for a higher score." }
      ]},
      { type: "remember", title: "Accuracy alone is not enough", desc: "A report full of accurate past-tense sentences gets a low grammar score. You need RANGE: different structures, past + future tense, and some future perfect." },
      { type: "para", text: "The examiner also checks that you <b>organise, present and compare data</b>, use appropriate academic style, and write in a way the reader can easily follow." }
    ]
  },

  /* ============ 8. Advice ============ */
  {
    id: "advice",
    title: "Advice",
    icon: "💡",
    group: "Core skills",
    hero: {
      icon: "💡",
      title: "Small habits, big band scores",
      sub: "None of this is hard. It just needs to be done — regularly."
    },
    blocks: [
      { type: "cards", items: [
        { icon: "🔄", title: "Vary your structures", body: "Grammar helps, but don't repeat the same sentence pattern. Rotate your structures on purpose." },
        { icon: "📚", title: "Read good writing", body: "You learn to write effectively by observing other writers. Read sample reports and notice their patterns." },
        { icon: "✍️", title: "Write as much as you can", body: "Practice is the only way the formulas become automatic — especially under time pressure." },
        { icon: "🔍", title: "Choose data carefully", body: "Do not mention every tiny change. Select the important figures and compare them." },
        { icon: "🔁", title: "Switch word forms", body: "Practice going from verb→noun→adjective: <b>fell gradually</b> → <b>there was a gradual fall</b>. \"The production of films\" → \"film production\"." },
        { icon: "⚖️", title: "Use comparison words", body: "Be flexible: more than, less than, compared to, the highest, the most... comparison language is essential." }
      ]},
      { type: "para", text: "A common temptation is to switch word forms wrongly. Practise these transformations until they feel natural:<br>• the production of films → <b>film production</b><br>• coffee from Viet Nam → <b>Vietnamese coffee</b><br>• the level of unemployment → <b>the unemployment level</b><br>• the quality of food in the supermarket → <b>supermarket food quality</b>" },
      { type: "tip", title: "Don't talk about many trends", desc: "Two or three trends for three points is plenty. More is not better — clearer is better." }
    ]
  },

  /* ============ 9. Useful Time Expressions ============ */
  {
    id: "time",
    title: "Useful Time Expressions",
    icon: "🕰️",
    group: "Vocabulary",
    hero: {
      icon: "🕰️",
      title: "Anchoring your report in time",
      sub: "Time expressions tell the examiner exactly WHEN things happened. Keep sentences short and clear with them."
    },
    blocks: [
      { type: "chips", label: "Periods — from... to...", items: [
        { t: "(In) the period from... to...", tone: "blue" },
        { t: "Between... and...", tone: "blue" },
        { t: "Over the period from... to...", tone: "green" },
        { t: "During the first two years...", tone: "green" },
        { t: "In the first / last three months of the year", tone: "amber" },
        { t: "Over a ten-year period", tone: "amber" }
      ]},
      { type: "chips", label: "Sequencing", items: [
        { t: "After that / then", tone: "purple" },
        { t: "Subsequently", tone: "purple" },
        { t: "Until", tone: "teal" },
        { t: "For the rest of the year", tone: "teal" },
        { t: "For the following five years", tone: "pink" },
        { t: "Over the next five years", tone: "pink" }
      ]},
      { type: "chips", label: "Within the year", items: [
        { t: "In January / at the beginning of the year", tone: "blue" },
        { t: "In December / at the end of the year", tone: "green" },
        { t: "Throughout the year / period", tone: "amber" },
        { t: "Each month of the year", tone: "purple" }
      ]},
      { type: "remember", title: "Short and clear beats long and clever", desc: "Long sentences attract grammar mistakes. A three-line sentence is easier to read AND easier for the examiner to reward." }
    ]
  }
]);
