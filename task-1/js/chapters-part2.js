/* ============================================================
   IELTS Task 1 Study Hub — chapter content (part 2 of 2)
   Enhancements (2026-08):
     • Chapter 'time-plan'       — 20-minute exam time strategy
     • Chapter 'band-scores'     — Band 6/7/8 side-by-side descriptors
     • Chapter 'annotated-sample' — Fully annotated sample with examiner
                                    colour-coded commentary and score breakdown
   These three chapters are injected before the vocabulary/exam-tactics
   chapters so the learning arc flows:
     Start here → Core skills (+ time-plan, marking, band-scores,
     annotated-sample) → Vocabulary → Exam tactics → Practice → Finish
   ============================================================ */

addChapters([

  /* ══════════════════════════════════════════════════════════
     NEW CH · Time Management — Your 20-Minute Exam Plan
     (sits in "Core skills", directly visible after writing-intro)
     ══════════════════════════════════════════════════════════ */
  {
    id: "time-plan",
    title: "20-Minute Exam Strategy",
    icon: "⏱️",
    group: "Core skills",
    hero: {
      icon: "⏱️",
      title: "20 minutes — the exact breakdown",
      sub: "Most students waste 5–7 minutes deciding where to start. This chapter gives you an automatic routine that works every time."
    },
    blocks: [
      { type: "stats", items: [
        { num: "3 min", label: "Read & analyse the diagram", tag: "understand before writing", tone: "blue" },
        { num: "2 min", label: "Plan paragraphs & find main points", tag: "never skip this", tone: "amber" },
        { num: "13 min", label: "Write: Intro + Overview + Body 1 + Body 2", tag: "~200 words", tone: "green" },
        { num: "2 min", label: "Proofread & fix errors", tag: "articles, tense, capitals", tone: "purple" }
      ]},
      { type: "stepper", steps: [
        {
          title: "Minutes 0–3 · Read and analyse",
          body: "Read the summary. Ask yourself: <b>What is the diagram type?</b> · <b>What is measured?</b> · <b>What is the time period?</b> · <b>What are the units?</b>  Then look at the data: identify the highest value, the lowest value, and the most visible trend. Circle or underline them."
        },
        {
          title: "Minutes 3–5 · Plan before writing",
          body: "Jot down two sentences in shorthand — your intro paraphrase and your overview. Decide how to split the data for Body 1 and Body 2 (by trend, by group, or by size). A 2-minute plan saves you 5 minutes of confused rewriting later."
        },
        {
          title: "Minutes 5–9 · Write Introduction + Overview",
          body: "Introduction = paraphrase the task (1–2 sentences, swap the verb and noun). Overview = general trend + general comparison, NO specific figures. This is where band 8 is won or lost — invest the most care here."
        },
        {
          title: "Minutes 9–16 · Write Body 1 + Body 2",
          body: "Use your trend vocabulary, give specific data points (start, peak, end), and compare across groups. Aim for 3–4 sentences per body paragraph. If you are running low on time, keep sentences short — accuracy beats length."
        },
        {
          title: "Minutes 16–18 · Write or expand Body 2",
          body: "Finish the second body paragraph. Aim to reach 180–200 words total. Do NOT write a conclusion — Task 1 has no conclusion. Stop after Body 2."
        },
        {
          title: "Minutes 18–20 · Proofread",
          body: "Check in this order: (1) articles (a/an/the), (2) verb tense (past for past data), (3) subject–verb agreement, (4) capital letters, (5) spelling of key words like 'percentage', 'approximately'. Fix 2–3 errors and you protect your Grammar score."
        }
      ]},
      { type: "remember", title: "Never skip the planning phase", desc: "Two minutes of planning save five minutes of confused rewriting. Students who skip planning run out of time or lose paragraph focus — both hurt Coherence & Cohesion." },
      { type: "section", label: "What to do when time runs out" },
      { type: "cards", items: [
        { icon: "⚠️", title: "Under 150 words", body: "Stop writing the body and quickly add 1–2 sentences to the overview to push past 150. An incomplete overview costs more than an incomplete body." },
        { icon: "✂️", title: "Can't finish Body 2", body: "Write one key comparison sentence and stop. A partial Body 2 is better than a rushed Body 2 full of errors." },
        { icon: "🔧", title: "No time to proofread", body: "At least scan for one type of error — article errors (missing 'the') are the most common and easiest to fix in 30 seconds." }
      ]},
      { type: "tip", title: "Practise the clock, not just the writing", desc: "Set a timer every time you practise. Speed is a skill, not a talent — it comes from doing the 20-minute routine repeatedly until it becomes automatic." },
      { type: "quiz", title: "Time strategy quick check", questions: [
        {
          q: "How much time should you spend planning before writing?",
          opts: ["0 minutes — just start writing", "About 2 minutes", "Half the time (10 minutes)", "5–7 minutes"],
          correct: 1,
          right: "Correct! 2 minutes of planning prevents 5 minutes of confused rewriting.",
          wrong: "Not quite — aim for 2 minutes of planning. That's enough to note your overview and paragraph split."
        },
        {
          q: "You have 30 seconds left and are 10 words short of 150. What do you do?",
          opts: ["Write a conclusion", "Add 1–2 words to existing sentences", "Leave it as is", "Start a new paragraph"],
          correct: 1,
          right: "Right! Adding words to existing sentences is faster and safer than starting a new paragraph.",
          wrong: "Not quite — add a word or phrase to an existing sentence. A conclusion is not needed and a new paragraph wastes precious seconds."
        },
        {
          q: "Which paragraph should you write MOST carefully?",
          opts: ["Introduction", "Overview", "Body 1", "Body 2"],
          correct: 1,
          right: "Correct! The overview is where Task Achievement marks are won. A vague overview caps your score around 6.",
          wrong: "Not quite — the OVERVIEW is the most important paragraph for your Task Achievement score."
        }
      ]}
    ]
  },

  /* ══════════════════════════════════════════════════════════
     NEW CH · Band Score Descriptors — 6 vs 7 vs 8
     (sits in "Core skills", after the marking chapter)
     ══════════════════════════════════════════════════════════ */
  {
    id: "band-scores",
    title: "Band Score Descriptors",
    icon: "🎯",
    group: "Core skills",
    hero: {
      icon: "🎯",
      title: "What do 6, 7 and 8 actually look like?",
      sub: "The gap between band 6 and band 8 is not about knowing more — it is about precision, selection, and almost error-free writing. See exactly what separates each band."
    },
    blocks: [
      { type: "para", text: "IELTS examiners mark Task 1 on four criteria, each worth 25% of the Task 1 score. Understanding exactly what descriptors describe each band lets you know <b>which habit to fix first</b> to move up." },
      { type: "section", label: "Side-by-side band descriptors" },
      {
        type: "bandtable",
        bands: ["Band 6", "Band 7", "Band 8+"],
        tip: "Most Band 6 writers are one habit away from Band 7: writing a clear overview with trends AND comparisons. Most Band 7 writers reach Band 8 by grouping data instead of listing it, and eliminating the last few grammar errors.",
        rows: [
          {
            icon: "🎯",
            criterion: "Task Achievement",
            cells: [
              "Addresses the requirements. Overview present but may lack clarity. Some key features reported but others may be missing or over-detailed.",
              "Covers the requirements fully. A clear overview is present. Key features are highlighted with supporting detail. Minor omissions possible.",
              '<span class="bt-up">Fully satisfies</span> all requirements. Overview is precise — trends <em>and</em> comparisons. Data is <strong>selected and grouped</strong>, not listed chronologically.'
            ]
          },
          {
            icon: "🧩",
            criterion: "Coherence & Cohesion",
            cells: [
              "Generally arranged coherently. Cohesive devices used but may be faulty or mechanical (over-use of 'Moreover', 'Furthermore').",
              "Information is logically organised. Progression is clear. Uses a range of cohesive devices, though some may be imprecise.",
              '<span class="bt-up">Seamlessly</span> organised. Paragraphing is logical. Uses cohesive devices skillfully — <strong>reference words</strong> (this figure, the former) instead of mechanical connectors.'
            ]
          },
          {
            icon: "💬",
            criterion: "Lexical Resource",
            cells: [
              "Adequate vocabulary for the task. Attempts to use less common items but with some inaccuracies. Spelling is generally adequate.",
              "Uses a sufficient range of vocabulary to allow some flexibility. Uses less common lexical items with some awareness of style. Minor errors in word choice.",
              '<span class="bt-up">Wide, precise</span> vocabulary. Strong collocations: <em>witnessed a dramatic surge, plateaued, dipped slightly</em>. <strong>Rare errors</strong> in word choice or spelling.'
            ]
          },
          {
            icon: "🧠",
            criterion: "Grammar Range & Accuracy",
            cells: [
              "Mix of simple and complex structures. Some errors but they do not impede communication. Punctuation is generally adequate.",
              "Uses a variety of complex structures. Most sentences are error-free. A few grammatical errors remain.",
              '<span class="bt-up">Wide range</span> of structures — relative clauses, participle clauses, passive, comparatives. <strong>Majority of sentences error-free.</strong>'
            ]
          }
        ]
      },
      { type: "section", label: "The one move that unlocks each band jump" },
      { type: "cards", items: [
        {
          icon: "5️⃣→6️⃣",
          title: "From Band 5 to Band 6",
          body: "Write an overview paragraph. Even a vague 'Overall, there were many changes' lifts Task Achievement from 5 to 6 immediately."
        },
        {
          icon: "6️⃣→7️⃣",
          title: "From Band 6 to Band 7",
          body: "Make the overview precise: include the general trend AND the biggest comparison. Example: 'Overall, all five countries saw growth, with the US and UK contributing the largest shares.'"
        },
        {
          icon: "7️⃣→8️⃣",
          title: "From Band 7 to Band 8",
          body: "Group data by trend or size instead of listing chronologically. Add one relative or participle clause per paragraph. Eliminate article and tense errors during the final 2-minute proofread."
        }
      ]},
      { type: "remember", title: "Task Achievement is 25% — but it unlocks everything", desc: "A missing or vague overview caps Task Achievement at Band 5–6 regardless of how good your grammar and vocabulary are. Fix the overview first; the other criteria follow." },
      { type: "section", label: "Common reasons students plateau at each band" },
      { type: "compare", head: ["Band plateau", "Most likely cause", "Fix it by…"], rows: [
        ["Stuck at 5.5", "No overview paragraph", "Always write 'Overall, ...' as a standalone paragraph with no numbers"],
        ["Stuck at 6.0–6.5", "Overview has numbers in it / vague overview", "Move numbers to body paragraphs; overview = trends + comparisons only"],
        ["Stuck at 7.0", "Listing data in chronological order instead of grouping it", "Group the three rising countries together; contrast with exceptions"],
        ["Stuck at 7.5", "Grammar accurate but repetitive (all simple past sentences)", "Deliberately add one relative clause and one participle clause per paragraph"],
        ["Stuck at 7.5–8.0", "1–2 article or tense errors per paragraph", "Final 2-minute proofread targeting articles (a/the) and past vs present"]
      ]},
      { type: "quiz", title: "Band descriptor check", questions: [
        {
          q: "A student always writes four paragraphs, has an overview, but lists data year by year. What band are they likely scoring in Task Achievement?",
          opts: ["Band 5", "Band 6–7", "Band 7–8", "Band 9"],
          correct: 1,
          right: "Correct — chronological listing with an overview typically lands in the 6–7 range. Grouping and selection push it to 8.",
          wrong: "Not quite — an overview gets you out of band 5, but chronological listing (not grouping) keeps you at 6–7."
        },
        {
          q: "Which vocabulary habit is most characteristic of Band 8+ writing?",
          opts: ["Uses as many rare words as possible", "Precise collocations and rare errors in word choice", "Avoids all complex vocabulary to be safe", "Uses the same trend verb throughout"],
          correct: 1,
          right: "Right! Precise collocations (witnessed a surge, plateaued) + rare errors in word choice = Band 8 Lexical Resource.",
          wrong: "Not quite — Band 8 Lexical Resource is about precise collocations used accurately, not just rare words."
        },
        {
          q: "What distinguishes Band 7 grammar from Band 8 grammar?",
          opts: ["Band 7 uses no complex structures", "Band 8 has a wider range AND a majority of sentences error-free", "Band 7 and 8 grammar are identical", "Band 8 only uses simple sentences"],
          correct: 1,
          right: "Exactly — Band 8 needs both wider range (clauses, passive, comparatives) AND majority error-free.",
          wrong: "Not quite — Band 8 grammar needs a WIDER RANGE of structures plus the majority of sentences being error-free."
        }
      ]}
    ]
  },

  /* ══════════════════════════════════════════════════════════
     NEW CH · Annotated Sample Response
     (sits in "Core skills", after band-scores)
     ══════════════════════════════════════════════════════════ */
  {
    id: "annotated-sample",
    title: "Annotated Sample Response",
    icon: "🔬",
    group: "Core skills",
    hero: {
      icon: "🔬",
      title: "See every band-score decision in one response",
      sub: "Each sentence is colour-coded to show which marking criterion it contributes to. Read the examiner commentary to understand exactly why this response scores Band 8."
    },
    blocks: [
      { type: "para", text: "The response below is annotated with <b>four colour-coded criteria</b>: Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammar Range & Accuracy. The examiner commentary explains what each highlighted phrase does for the score." },
      {
        type: "annotated",
        icon: "📉",
        title: "Line Chart — Wheat Exports (Annotated Band 8 Response)",
        band: "8.0",
        words: "~200 words",
        task: "The graph below shows the differences in wheat exports over three different areas between 1985 and 1990. Write a report describing the information shown.",
        paragraphs: [
          {
            label: "Introduction",
            tone: "intro",
            text: '<span class="ann-hl lr">The line graph compares</span> <span class="ann-hl ta">three regions — Canada, Australia, and the European Community —</span> in terms of <span class="ann-hl lr">wheat export volumes</span> <span class="ann-hl ta">between 1985 and 1990.</span>',
            comments: [
              { criterion: "lr", label: "LR", text: "'compares' paraphrases 'shows the differences' — synonym choice improves Lexical Resource." },
              { criterion: "ta", label: "TA", text: "All three regions and the time period are named clearly, satisfying the full task requirement." }
            ]
          },
          {
            label: "Overview",
            tone: "overview",
            text: 'Overall, <span class="ann-hl ta">the three regions experienced contrasting trends</span> throughout the period. <span class="ann-hl cc">While</span> <span class="ann-hl ta">Canada and the European Community saw a general rise</span> — despite some fluctuation — <span class="ann-hl ta">Australian exports declined steadily.</span>',
            comments: [
              { criterion: "ta", label: "TA", text: "The overview captures the key contrast (rise vs fall) across all three regions without using any specific figures — exactly what Band 8 Task Achievement requires." },
              { criterion: "cc", label: "CC", text: "'While' introduces a contrast in a single sentence, creating cohesion without mechanical connectors like 'However'." }
            ]
          },
          {
            label: "Body 1",
            tone: "body",
            text: 'In 1985, Australia exported approximately 15 million tonnes of wheat, <span class="ann-hl gr">which rose marginally to around 16 million</span> the following year <span class="ann-hl gr">before declining steadily</span> to just over 10 million by 1990. <span class="ann-hl cc">By contrast,</span> Canada began at roughly 19 million tonnes. <span class="ann-hl lr">This figure plunged</span> to 17 million in 1986, <span class="ann-hl lr">then surged</span> to a peak of 25 million in 1988, <span class="ann-hl gr">before falling sharply to below 15 million</span> and <span class="ann-hl gr">subsequently recovering</span> to just under 20 million in 1990.',
            comments: [
              { criterion: "gr", label: "GR", text: "'which rose marginally... before declining steadily' is a relative clause + participle clause in a single sentence — demonstrating Grammar Range." },
              { criterion: "lr", label: "LR", text: "'plunged' and 'surged' are precise collocations replacing basic 'fell' and 'rose' — this is the Band 8 vocabulary move." },
              { criterion: "cc", label: "CC", text: "'By contrast' signals the switch from Australia to Canada cleanly. The paragraph groups the two 'non-European' regions together — logical organisation." }
            ]
          },
          {
            label: "Body 2",
            tone: "body",
            text: '<span class="ann-hl ta">The European Community, meanwhile, followed a broadly upward trajectory.</span> <span class="ann-hl gr">Having started</span> at nearly 16 million tonnes in 1985, exports dipped to 14 million the following year <span class="ann-hl lr">before witnessing steady growth</span> to 15 million in 1987–1988, and <span class="ann-hl gr">rising consistently</span> to reach 21 million — the highest figure for any region in 1990 — by the end of the period.',
            comments: [
              { criterion: "ta", label: "TA", text: "'Followed a broadly upward trajectory' is a precise trend summary for the EC paragraph — this is selected grouping, not chronological listing." },
              { criterion: "gr", label: "GR", text: "'Having started at...' is a perfect participle clause. It signals time order elegantly without 'First, ... Then, ...' patterns." },
              { criterion: "lr", label: "LR", text: "'Witnessing steady growth' and 'rising consistently' rotate the structure: noun phrase vs present participle — variety without difficult vocabulary." }
            ]
          }
        ],
        scores: {
          ta: 8,
          cc: 8,
          lr: 8,
          gr: 8
        }
      },
      { type: "section", label: "What made this Band 8 — a checklist" },
      { type: "rules", items: [
        { title: "Overview names contrasting trends — no numbers", desc: "The overview says 'contrasting trends — rise vs fall' without mentioning any figures. Band 8 Task Achievement.", tag: "✓ Band 8", tone: "must" },
        { title: "Data is grouped, not listed year by year", desc: "Australia + Canada in Body 1 (both outside Europe); EC alone in Body 2. Logical grouping beats chronological listing.", tag: "✓ Band 8", tone: "must" },
        { title: "Relative clause used deliberately", desc: "'which rose marginally... before declining steadily' — one relative clause per paragraph is the Band 8 grammar minimum.", tag: "✓ Band 8", tone: "must" },
        { title: "Participle clause used deliberately", desc: "'Having started at nearly 16 million' — the perfect participle shows sequence and adds grammar range.", tag: "✓ Band 8", tone: "must" },
        { title: "Precise collocations — not just 'rose' / 'fell'", desc: "'plunged', 'surged', 'witnessing steady growth', 'rising consistently' — four different structures for the same meaning.", tag: "✓ Band 8", tone: "must" },
        { title: "No mechanical connectors", desc: "'While', 'By contrast', 'meanwhile' — cohesion devices, not formulaic 'Moreover / Furthermore' at every sentence start.", tag: "✓ Band 8", tone: "must" }
      ]},
      { type: "tip", title: "How to practise with this annotated sample", desc: "Step 1: Cover the text and write your own response from the chart. Step 2: Compare your paragraph-by-paragraph against the annotated version. Step 3: Identify which annotation colours are missing from your response — those are your gap areas. Step 4: Rewrite, targeting those gaps. Repeat." }
    ]
  },

  /* ═══════════════════════════════════════════════════════════
     END OF NEW CHAPTERS — existing chapters (10–23) follow
     ═══════════════════════════════════════════════════════════ */

  /* ============ 10. Language of Estimation ============ */
  {
    id: "estimation",
    title: "Language of Estimation",
    icon: "🎚️",
    group: "Vocabulary",
    hero: {
      icon: "🎚️",
      title: "When you're not 100% sure of the number",
      sub: "Real charts have messy numbers. Estimation words let you describe them safely and accurately."
    },
    blocks: [
      { type: "chips", label: "Approximation words", items: [
        { t: "Just over", tone: "blue" },
        { t: "Nearly", tone: "blue" },
        { t: "About", tone: "green" },
        { t: "Around", tone: "green" },
        { t: "Almost", tone: "amber" },
        { t: "Approximately", tone: "amber" },
        { t: "Just about", tone: "purple" },
        { t: "Very nearly", tone: "purple" },
        { t: "More than", tone: "teal" },
        { t: "Less than", tone: "teal" }
      ]},
      { type: "para", text: "Use them in real sentences:<br>• <b>As the graph shows, in January the figure stood at more than 1500.</b><br>• <b>Regarding novel sales, the figure stood at just over 1500 before declining steadily to a low of nearly 90,000.</b>" },
      { type: "remember", title: "Approximate = safe", desc: "If you're not certain, say 'approximately' or 'just over'. Never invent exact numbers that aren't on the diagram." },
      { type: "quiz", title: "Estimation check", questions: [
        { q: "The number on the chart is 49.7%. You can safely say...", opts: ["exactly 49.7%", "nearly half / just under half", "a vast majority", "around 40%"], correct: 1, right: "Correct! 49.7% is just under half — estimation language is perfect here.", wrong: "Not quite — 49.7% is just under half. 'Nearly half' is the safe estimation." }
      ]}
    ]
  },

  /* ============ 11. Useful Language ============ */
  {
    id: "useful-language",
    title: "Useful Language",
    icon: "🧰",
    group: "Vocabulary",
    hero: {
      icon: "🧰",
      title: "Ready-made phrases that always work",
      sub: "Steal these sentence patterns. They are the same ones used by high-scoring candidates."
    },
    blocks: [
      { type: "para", text: "Key phrases that plug into ANY diagram:" },
      { type: "cards", items: [
        { icon: "1", title: "The figure for X", body: "Whatever X is — novel sales, action films, whatever is on the diagram. \"<b>The figure for novel sales rose...</b>\" Works all the time, even with 10 minutes left." },
        { icon: "2", title: "X's figure", body: "Possessive form: \"<b>Romance film's figure</b> stood at more than 50%.\"" },
        { icon: "3", title: "The contribution of X", body: "Use for percentages — it means the share of the whole: \"<b>The contribution of romance films stood at more than 50% in 1990.</b>\"" },
        { icon: "4", title: "X contributed", body: "Verb form: \"<b>Romance films contributed more than 50% in 1990.</b>\"" }
      ]},
      { type: "para", text: "Paraphrase the main things in a process:<br>• ice cream → <b>frozen yogurt</b><br>• fruit is picked by hand → <b>fruit is manually collected</b><br>• fruit quality checking → <b>the fruit is checked to ensure it is free of bruises</b>" },
      { type: "remember", title: "The examiner's real test", desc: "They don't care WHAT you say — they care HOW WELL you use English. Correct, simple, varied beats clever and risky." }
    ]
  },

  /* ============ 12. Useful Words for Paraphrasing ============ */
  {
    id: "paraphrasing",
    title: "Paraphrasing",
    icon: "🔁",
    group: "Vocabulary",
    hero: {
      icon: "🔁",
      title: "Say the same thing, differently",
      sub: "Your introduction is the summary — but rewritten in your own words. That's paraphrasing, and it's the first thing the examiner sees."
    },
    blocks: [
      { type: "para", text: "Original: <b>\"The chart below shows...\"</b><br>Paraphrased: <b>\"The line graph indicates / depicts / reveals / illustrates...\"</b>" },
      { type: "flash", cards: [
        { k: "sales", v: "income / revenue / turnover", d: "\"how much money was made\"" },
        { k: "proportion", v: "percentage / rate", d: "\"The proportion of = the percentage of = the figure for\"" },
        { k: "spending", v: "expenditure", d: "Students' spending → students' expenditure" },
        { k: "information", v: "data", d: "The chart provides information → provides data" },
        { k: "elderly", v: "elderly people / senior citizens", d: "All three are fine in academic writing" },
        { k: "production", v: "manufacture", d: "be produced = be made = be manufactured" },
        { k: "levels of unemployment", v: "unemployment rate", d: "Also: poverty rate = level of poverty" },
        { k: "from 2000 to 2005", v: "between 2000 and 2005", d: "= over a period of 5 years" }
      ]},
      { type: "para", text: "Two more survival phrases:<br>• <b>The figure for X</b> — \"the figure for novel sales\" — works for anything.<br>• <b>The contribution of X</b> — \"the contribution of romance films stood at more than 50%\" — perfect for percentages." },
      { type: "remember", title: "Never copy the summary", desc: "Copying the summary without paraphrasing is one of the biggest marks-wasters. Rewrite it: change the verb, change the noun, change the word order." }
    ]
  },

  /* ============ 13. Task 1 Writing Rules ============ */
  {
    id: "rules",
    title: "Task 1 Writing Rules",
    icon: "📜",
    group: "Exam tactics",
    hero: {
      icon: "📜",
      title: "The rules that protect your score",
      sub: "Tick them off as you understand each one. These are the difference between 5.5 and 7.0."
    },
    blocks: [
      { type: "rules", items: [
        { title: "150–220 words", desc: "Fewer than 150 = penalty. More than 220 = you waste time you need for Task 2.", tag: "MUST", tone: "must" },
        { title: "Skip lines between paragraphs", desc: "Neatness makes the examiner happy — and a happy examiner finds reasons to give you 7.0, not 5.5.", tag: "MUST", tone: "must" },
        { title: "Keep it simple — no creativity", desc: "Use exactly the vocabulary and structures you've learned. Creativity is a gamble you will probably lose.", tag: "MUST", tone: "must" },
        { title: "No question marks (!)", desc: "A 'question mark' means a confusing sentence the examiner can't understand. If you write one, rewrite that sentence from scratch.", tag: "NEVER", tone: "no" },
        { title: "No numbers in the overview", desc: "Your overview gives general trends — keep specific figures for the body paragraphs.", tag: "NEVER", tone: "no" },
        { title: "No repetition", desc: "Use 'it', 'this', 'this figure' instead of repeating the same word or phrase over and over.", tag: "AVOID", tone: "tip" },
        { title: "Check capital letters", desc: "Sentence starts and proper nouns need capitals. Small errors like this quietly cost you Lexical Resource marks.", tag: "CHECK", tone: "tip" },
        { title: "Rewrite your corrected reports", desc: "After your teacher fixes a report, rewrite it in 15–20 minutes with NEW structures each time. This builds range.", tag: "TRAIN", tone: "tip" }
      ]},
      { type: "remember", title: "Make the examiner want to help you", desc: "They read a huge pile of writings. A neat, organised, easy-to-follow report gives them every reason to score you higher. Neatness is strategy." }
    ]
  },

  /* ============ 14. Most Common Mistakes ============ */
  {
    id: "mistakes",
    title: "Most Common Mistakes",
    icon: "⚠️",
    group: "Exam tactics",
    hero: {
      icon: "⚠️",
      title: "Spot the mistake before the examiner does",
      sub: "Click each card to reveal the fix. These are the errors students make again and again."
    },
    blocks: [
      { type: "mistakes", items: [
        { q: "There was a <b>slightly</b> increase in sales.", wrong: "slightly increase", right: "slight increase", fix: "Use the ADJECTIVE with a noun: a slight increase. Adverbs go with verbs: sales increased slightly." },
        { q: "Copying the summary word-for-word.", wrong: "no paraphrase", right: "paraphrase everything", fix: "Rewrite the summary using synonyms and new structures. Never copy it directly." },
        { q: "Sales <b>levelled off</b> and then decreased.", wrong: "levelled off + then", right: "levelled off AFTER a trend", fix: "Levelled off / stabilized always come after another trend, not before it." },
        { q: "\"Sales <b>reduced</b>\"", wrong: "sales reduced", right: "sales decreased / declined", fix: "We don't use 'reduced' this way. Say sales decreased or sales declined." },
        { q: "A whole paragraph the examiner cannot understand.", wrong: "confusing grammar", right: "rewrite the sentence", fix: "Don't try to fix the messy sentence. Throw it away and rewrite it using the task 1 language you know." },
        { q: "Using the wrong verb tense.", wrong: "past for future", right: "match the time", fix: "Pay attention to tense. Past data → past tense. Predictions → future tense." },
        { q: "Putting figures in the introduction and overview.", wrong: "numbers in overview", right: "general trends only", fix: "Overview = general trends and comparisons. Save the specific numbers for the body." },
        { q: "Repeating the same word or phrase again and again.", wrong: "repetition", right: "use it / this / this figure", fix: "Replace repeated words with pronouns to create flow without extra words." },
        { q: "Collocation errors — words that don't go together.", wrong: "bad word partners", right: "learn word pairs", fix: "Learn fixed partnerships: 'a dramatic increase', 'experience growth'. Don't invent combinations." },
        { q: "No comparison or trend language in the main points.", wrong: "no trends", right: "trends + comparisons", fix: "Without comparison/trend language in the main points, you cannot get 7.0+ in Task Achievement." }
      ]},
      { type: "tip", title: "The rewrite drill", desc: "Take a report your teacher already fixed and rewrite it in 15–20 minutes, changing every sentence structure. This single habit builds range and accuracy." }
    ]
  },

  /* ============ 15. Future Tense & Estimation ============ */
  {
    id: "future",
    title: "Future Tense & Estimation",
    icon: "🔮",
    group: "Exam tactics",
    hero: {
      icon: "🔮",
      title: "Describing predictions like a pro",
      sub: "When the data continues into the future, switch to prediction language — and learn future perfect for a grammar boost."
    },
    blocks: [
      { type: "tabs", tabs: [
        { label: "Structure 1", blocks: [
          { type: "para", text: "<b>The prediction / expectation / projection / forecast / likelihood + shows / reveals / indicates / is that...</b>" },
          { type: "cards", items: [
            { icon: "1", title: "Prediction noun + verb", body: "<b>The forecast shows that the price of food will increase from $20 in 2005 to $25 in 2025.</b>" },
            { icon: "2", title: "With undergo/witness", body: "The forecast shows that the price of food <b>will undergo an increase</b> from $20 to $25." }
          ]}
        ]},
        { label: "Structure 2", blocks: [
          { type: "para", text: "<b>It is predicted / expected / projected / estimated / anticipated / forecast / likely that...</b>" },
          { type: "cards", items: [
            { icon: "1", title: "It is predicted that", body: "<b>It is predicted that the number of car users will increase dramatically.</b>" },
            { icon: "2", title: "With from... to...", body: "It is expected that the price of food <b>will increase from $20 in 2005 to $25 in 2025</b>." }
          ]}
        ]},
        { label: "Structure 3", blocks: [
          { type: "para", text: "<b>Subject + is/are predicted / expected / projected / estimated / anticipated / forecast + to...</b>" },
          { type: "cards", items: [
            { icon: "1", title: "Subject + predicted to", body: "<b>The number of car users is predicted to increase dramatically.</b>" },
            { icon: "2", title: "Decline version", body: "The price of food <b>is expected to decline from $20 in 2000 to $10 in 2025</b>." }
          ]}
        ]},
        { label: "Future perfect", blocks: [
          { type: "para", text: "<b>WILL + HAVE + PAST PARTICIPLE</b> — a completed action at some time in the future. You ALWAYS need a time marker." },
          { type: "cards", items: [
            { icon: "✅", title: "Expected to have declined", body: "The price of food <b>is expected to have declined to $20 by 2020</b>." },
            { icon: "✅", title: "Will have declined", body: "It is expected that the price of food <b>will have declined to $20 by 2020</b>." },
            { icon: "⏰", title: "The time rule", body: "\"Tonight I will eat dinner\" (vague) vs <b>\"By 9 o'clock I will have eaten dinner\"</b> (completed, with a time)." }
          ]}
        ]},
        { label: "Respectively", blocks: [
          { type: "para", text: "<b>Respectively / in turn</b> match two things to two positions in order. A tiny word that adds precision and impresses the examiner." },
          { type: "cards", items: [
            { icon: "👫", title: "Jack and Jill", body: "Jack and Jill are tall and fat <b>respectively</b>. → Jack is tall, Jill is fat." },
            { icon: "👟", title: "Shoes", body: "My first and second pair of shoes are red and white <b>respectively</b>. → first = red, second = white." }
          ]}
        ]}
      ]},
      { type: "section", label: "Majority & minority — a quick guide" },
      { type: "compare", head: ["Figure", "Say...", "Example"], rows: [
        ["51–74%", "<b>a small majority of</b>", "A small majority of voters chose X."],
        ["75%+", "<b>a vast majority of</b>", "A vast majority of residents supported the plan."],
        ["~49%", "<b>a minority / just under half</b>", "Just under half of cars were imported."],
        ["~11%", "<b>a small / tiny minority of</b>", "A tiny minority of students chose science."],
        ["32%", "<b>nearly a third of</b>", "Nearly a third of all tourists came from Asia."],
        ["47%", "<b>just under half of</b>", "Just under half of all cars were new."],
        ["63%", "<b>nearly two-thirds of</b>", "Nearly two-thirds of funding came from abroad."]
      ]},
      { type: "remember", title: "Use 'the' with ONE majority", desc: "The majority (one only). A minority (there can be many). Also remember: 'as' and 'while' show two things happening at the same time — great for comparing trends." }
    ]
  },

  /* ============ 16. Band 8+ Playbook ============ */
  {
    id: "band8",
    title: "Band 8+ Playbook",
    icon: "👑",
    group: "Exam tactics",
    hero: {
      icon: "👑",
      title: "The difference between 7 and 8 is precision, not harder English",
      sub: "Band 8 is not about more words. It is about the RIGHT words, the RIGHT data, in a structure the examiner can follow without effort — and almost no mistakes."
    },
    blocks: [
      { type: "stats", items: [
        { num: "8.0", label: "is achievable for anyone who controls the basics", tag: "precision > creativity", tone: "purple" }
        ,{ num: "4", label: "paragraphs, every single time", tag: "Intro → Overview → Body → Body", tone: "blue" }
        ,{ num: "0", label: "numbers in the overview", tag: "trends and comparisons only", tone: "green" }
        ,{ num: "2–3", label: "minutes of proofreading, always", tag: "majority of sentences error-free", tone: "amber" }
      ]},
      { type: "section", label: "The exact structure band 8 answers use" },
      { type: "stepper", steps: [
        { title: "1 · Introduction — paraphrase, don't copy", body: "One or two sentences that rewrite the task in your own words: change the verb (shows → illustrates), the noun (chart → graph), and the word order. Say what, where, and over what time: <b>\"The line graph illustrates the number of tourists from five countries who visited Australia between 1991 and 1999.\"</b>" }
        ,{ title: "2 · Overview — the paragraph that earns you 8.0", body: "Two sentences of <b>general trends and comparisons — with NO specific numbers</b>. This is what Task Achievement rewards most. <b>\"Overall, visitor numbers from all five countries rose over the period, with the US and the UK contributing the largest shares throughout.\"</b> No overview = capped around 5.0–6.0." }
        ,{ title: "3 · Body 1 — group the data, don't list it", body: "Put the <b>similar trends together</b>: the three rising countries in one paragraph, or the biggest figures in one and the smallest in the other. Select the <b>key data points</b> (start, peak, low, end) and compare them. Band 8 selects; band 7 lists." }
        ,{ title: "4 · Body 2 — the second logical group", body: "Cover the remaining features the same way. End the report here. <b>No conclusion, no opinion</b> — Task 1 is a report, not an essay. (Prediction language is fine only when the chart itself shows future data — see the Future Tense chapter.)" }
      ]},
      { type: "remember", title: "The overview is where band 8 happens", desc: "Examiners read the overview first. A sharp, accurate overview with trends AND comparisons tells them you understood the chart. A vague one ('the charts show many changes') caps you at 7. Spend 3 minutes getting it right." },
      { type: "section", label: "What actually changes between 7 and 8" },
      { type: "compare", head: ["Skill", "Band 7", "Band 8+"], rows: [
        ["Data handling", "Reports figures one by one, year by year", "<b>Selects and groups</b> key features, compares them, supports the overview"],
        ["Overview", "Present but vague (\"there are many changes\")", "<b>Sharp trends + comparisons</b>, zero numbers, 2–3 sentences"],
        ["Cohesion", "Moreover / Furthermore / In addition at the start of every sentence", "<b>Reference words</b> (this figure, such a trend, the former) and parallel structure"],
        ["Vocabulary", "Correct but repetitive (rose, rose, rose)", "<b>Precise collocations</b>: witnessed a dramatic surge, dipped slightly, levelled off"],
        ["Grammar", "Simple sentences, a few errors", "<b>Mixed structures</b> — participle clauses, relative clauses, passive — majority of sentences error-free"]
      ]},
      { type: "section", label: "Grammar that quietly lifts you to 8+" },
      { type: "cards", items: [
        { icon: "🧱", title: "Relative clauses", body: "<b>The figure for books, which stood at $40m in 1995, rose steadily to $90m by 2005.</b> Adds precision without a new sentence." }
        ,{ icon: "🌊", title: "Participle clauses", body: "<b>Having peaked at 85% in 2000, the figure fell back to 40%.</b> Perfect participle shows order of events in one elegant clause." }
        ,{ icon: "⚖️", title: "While / whereas", body: "<b>While car sales rose sharply, bicycle use fell by half.</b> One sentence, two contrasting trends — instant comparison." }
        ,{ icon: "🔄", title: "Passive for maps & processes", body: "<b>The farmland was converted into a golf course.</b> Passive is the native tense of processes and maps." }
        ,{ icon: "🎯", title: "Respectively", body: "<b>Visitors from the US and the UK reached 60% and 55%, respectively.</b> A tiny word that shows you match data correctly." }
        ,{ icon: "🔢", title: "Data grammar", body: "<b>The number of tourists was rising</b> (singular). <b>Tourists were rising</b> (plural). Get these micro-choices right — they are your error-free majority." }
      ]},
      { type: "section", label: "Lexical precision — words that separate 7 from 8" },
      { type: "vocab", groups: [
        { kind: "⬆️ Rise", items: ["rose", "increased", "climbed", "grew", "surged", "soared", "rocketed"] }
        ,{ kind: "⬇️ Fall", items: ["fell", "declined", "dropped", "plummeted", "plunged", "dipped"] }
        ,{ kind: "〰️ Flat", items: ["levelled off", "stabilised", "plateaued", "remained stable", "fluctuated"] }
        ,{ kind: "⚡ Adverbs of degree", items: ["slightly", "gradually", "steadily", "sharply", "dramatically", "significantly", "wildly"] }
        ,{ kind: "🎨 Adjective + noun pairs", items: ["a slight increase", "a gradual fall", "a sharp rise", "a dramatic surge", "a steady decline", "a significant jump"] }
        ,{ kind: "🧠 Reference & precision", items: ["this figure", "such a trend", "the former / the latter", "respectively", "in contrast", "by far", "approximately"] }
      ]},
      { type: "remember", title: "One trend, five ways — rotate, don't invent", desc: "There was a sharp rise. · 2005 saw a sharp rise. · Sales experienced a sharp rise. · Sales rose sharply. · A sharp rise was witnessed in sales. Same meaning, five grammars. Rotating these scores range without risky vocabulary." },
      { type: "section", label: "The 8+ checklist — run it on every practice" },
      { type: "rules", items: [
        { title: "Introduction fully paraphrased", desc: "No copying. Change the verb, noun, and word order from the task.", tag: "DONE?", tone: "tip" }
        ,{ title: "Overview has trends + comparisons", desc: "Two or three sentences, zero numbers. The examiner reads this first.", tag: "DONE?", tone: "tip" }
        ,{ title: "Data selected, not listed", desc: "Key points only: starts, peaks, lows, big changes. Compare, don't count.", tag: "DONE?", tone: "tip" }
        ,{ title: "One participle or relative clause used", desc: "Deliberately. If you never write them in practice, you won't in the exam.", tag: "DONE?", tone: "tip" }
        ,{ title: "No repetition of rose / fell / increased", desc: "Rotate structures and vocabulary on purpose.", tag: "DONE?", tone: "tip" }
        ,{ title: "150–220 words", desc: "Penalty below 150. Over 220 steals time from Task 2.", tag: "DONE?", tone: "tip" }
        ,{ title: "Proofread for 2–3 minutes", desc: "Fix articles, tense, agreement, capitals. Majority error-free = band 8.", tag: "DONE?", tone: "tip" }
        ,{ title: "No opinion, no conclusion", desc: "Report only. No \"I think\", no \"in conclusion\", no why.", tag: "DONE?", tone: "tip" }
      ]},
      { type: "section", label: "Mistakes that silently cap you at 7" },
      { type: "mistakes", items: [
        { q: "You wrote the overview with numbers in it.", wrong: "numbers in overview", right: "trends only", fix: "Move the numbers to the body. The overview answers: what happened overall, and what stood out?" }
        ,{ q: "You described every single year in order.", wrong: "chronological list", right: "group + compare", fix: "Band 8 groups by similarity or size, not by time. Three rising countries together, then the exceptions." }
        ,{ q: "Every sentence starts with Moreover / Furthermore / In addition.", wrong: "mechanical linking", right: "reference words", fix: "Use this figure, such a trend, the former. Cohesion should feel natural, not robotic." }
        ,{ q: "You invented vocabulary: \"sales skyrocketed downward\".", wrong: "forced words", right: "safe collocations", fix: "Never gamble on vocabulary. If unsure, use the simple word you know is right. Simple + accurate beats fancy + wrong." }
        ,{ q: "Your grammar is correct but every sentence is simple.", wrong: "only simple sentences", right: "one complex sentence", fix: "Add ONE relative or participle clause per paragraph. You don't need many — you need a few, correct ones." }
        ,{ q: "You wrote 140 words and ran out of time.", wrong: "under 150 words", right: "finish with overview", fix: "If time is short, finish the overview before the body. An incomplete overview costs more than an incomplete body." }
      ]},
      { type: "tip", title: "How to actually train to 8+", desc: "1) Write the report in 15 minutes. 2) Spend 5 minutes checking it against the checklist above. 3) Rewrite the whole report from scratch using the structures you missed. Repeat on the 14 model answers until the checklist becomes automatic." },
      { type: "quiz", title: "Are you thinking like an 8.0 writer?", questions: [
        { q: "What is the single most important paragraph for Task Achievement?", opts: ["Introduction", "Overview", "Body 1", "A conclusion"], correct: 1, right: "Exactly — the overview proves you understood the chart. No overview = no more than ~6.0.", wrong: "Not quite — the OVERVIEW is the highest-value paragraph. No overview caps you around 5.0–6.0." }
        ,{ q: "Which belongs in the overview?", opts: ["\"The figure for the US stood at 60% in 1995.\"", "\"Overall, all five countries saw growth, with the US leading throughout.\"", "\"I think the trend will continue.\"", "\"In conclusion, the chart is interesting.\""], correct: 1, right: "Correct! Trends + comparisons, no numbers, no opinion.", wrong: "Not quite — the overview is general trends and comparisons with NO specific numbers or opinions." }
        ,{ q: "What is the band-8 approach to data?", opts: ["Report every figure in order", "Select key points and group them", "Ignore the numbers entirely", "Guess the numbers"], correct: 1, right: "Right! Select the important figures and group them logically — that is what separates 7 from 8.", wrong: "Almost — band 8 SELECTS the key features and GROUPS them, instead of listing everything." }
        ,{ q: "Which sentence shows band-8 grammar?", opts: ["Sales went up and then went down.", "There was an increase and a decrease.", "Having reached a peak in 2005, sales declined steadily over the next decade.", "Sales up then down."], correct: 2, right: "Perfect — a participle clause, precise verbs, and clear time reference in one sentence.", wrong: "Not quite — a participle clause like \"Having reached a peak in 2005, sales declined steadily...\" is the band-8 move." }
        ,{ q: "What should you do for the last 2–3 minutes?", opts: ["Count your words exactly", "Proofread for articles, tense and agreement", "Rewrite the overview", "Add more numbers"], correct: 1, right: "Correct! Band 8 requires the majority of sentences error-free — proofreading is where you secure it.", wrong: "Almost — use the last minutes to PROOFREAD. Small errors quietly pull your Grammar and Lexical scores down." }
      ]}
    ]
  },

  /* ============ 17. Template Vault ============ */
  {
    id: "templates",
    title: "Template Vault",
    icon: "🏗️",
    group: "Exam tactics",
    hero: {
      icon: "🏗️",
      title: "Memorize the frame. Fill in the data. Write faster than you think.",
      sub: "Band 8 writers do not improvise — they slot the data into a frame they know cold. Here are the exact sentence skeletons for all six diagram types. Memorize them, and exam day becomes fill-in-the-blank."
    },
    blocks: [
      { type: "stats", items: [
        { num: "6", label: "diagram types, one memorized frame each", tag: "line · bar · pie · table · map · process", tone: "blue" },
        { num: "4", label: "paragraphs — the only shape that works", tag: "Intro → Overview → Body → Body", tone: "green" }        ,{ num: "24", label: "memorized sentence skeletons — 4 per diagram type", tag: "six frames × four sentences", tone: "purple" },
        { num: "17", label: "minutes to write — frames buy you the rest", tag: "3 to read · 17 to write", tone: "amber" }
      ]},
      { type: "cards", items: [
        { icon: "🖨️", title: "Print the cheat sheet — all 24 skeletons at a glance", body: "<a href=\"cheat-sheet.html\">Open the one-page quick reference</a> — every frame for all six diagram types on a single screen, print-ready or saveable as PDF." }
      ]},
      { type: "section", label: "The universal skeleton — memorize this first" },
      { type: "stepper", steps: [
        { title: "1 · Introduction — paraphrase the task", body: "One or two sentences that rewrite the task using the frame: change the verb (shows → illustrates), the noun (chart → graph) and the word order. Say what, where and over what time: <b>'The line graph illustrates the number of tourists who visited Australia between 1991 and 1999.'</b>" },
        { title: "2 · Overview — two sentences, zero numbers", body: "The frame: <b>'Overall, [A] saw the most significant [rise/fall] and ended as the [highest/lowest], while [B] remained relatively stable.'</b> Swap the brackets for the chart's big picture. No data points — the overview is where band 8 is won or lost." },
        { title: "3 · Body 1 — the first logical group", body: "Use the frame for one group of data: the biggest figures, the rising categories, the first half of a process. <b>'In [year], [A] stood at approximately [X]. This figure then [rose steadily], reaching [Y] by [year].'</b>" },
        { title: "4 · Body 2 — the second group, then stop", body: "Finish the remaining features with the same frame. <b>'By contrast, [B] fell consistently to [Y] by the end of the period.'</b> No conclusion, no opinion — the report simply ends." }
      ]},
      { type: "remember", title: "Frames are scaffolding, not walls", desc: "A memorized frame guarantees structure and speed — but the examiner marks the DATA: what you selected, how you compared it, and how accurately you reported it. Fill the blanks with the chart's real numbers, never with invented ones. A perfect frame with wrong data still fails; a solid frame with the right data is an 8." },
      { type: "section", label: "The six frames — one per diagram type" },
      { type: "tabs", tabs: [
        { label: "📈 Line graph", blocks: [
          { type: "framesteps", items: [
            { para: "Introduction", tone: "intro", icon: "✍️",
              template: "The line graph <b>[illustrates / compares]</b> the [what] in [where] from [year] to [year].",
              filled:   "The line graph illustrates the number of overseas visitors to Australia between 1991 and 1999." },
            { para: "Overview", tone: "overview", icon: "👁️",
              template: "Overall, [A] saw the most significant <b>[rise / fall]</b> and ended as the [highest / lowest], while [B] remained [stable / steady] throughout.",
              filled:   "Overall, visitor numbers saw the most significant rise and ended as the highest, while figures from Japan remained relatively stable throughout." },
            { para: "Body 1", tone: "body1", icon: "📦",
              template: "In [year], [A] stood at approximately [X]. This figure <b>[rose steadily / declined gradually]</b>, reaching [Y] by [year], before [peaking at Z / falling to Z] in [year].",
              filled:   "In 1991, visitors from the US stood at approximately 20,000. This figure rose steadily, reaching 40,000 by 1995, before peaking at 55,000 in 1999." },
            { para: "Body 2", tone: "body2", icon: "🧩",
              template: "By contrast, [B] began at [X] and [fell / grew] to [Y] by [end year]. [C], meanwhile, fluctuated only slightly between [X] and [Y].",
              filled:   "By contrast, visitors from Canada began at 15,000 and fell to 8,000 by 1999. Figures for South Korea, meanwhile, fluctuated only slightly." }
          ]}
        ]},
        { label: "📊 Bar chart", blocks: [
          { type: "framesteps", items: [
            { para: "Introduction", tone: "intro", icon: "✍️",
              template: "The bar chart <b>[gives information about / compares]</b> the [what] in [categories / locations].",
              filled:   "The bar chart compares the amount of leisure time enjoyed by men and women in five countries." },
            { para: "Overview", tone: "overview", icon: "👁️",
              template: "Overall, [A] recorded the highest figure — roughly <b>[X times]</b> the value for [B] — while [C] and [D] were the lowest.",
              filled:   "Overall, men in the UK recorded the highest figure, while women in Italy recorded the lowest." },
            { para: "Body 1", tone: "body1", icon: "📦",
              template: "At the top end, [A] reached [X], closely followed by [B] at [Y]. Together, these two accounted for over <b>[half / two-thirds]</b> of the total.",
              filled:   "At the top end, men in the UK reached 85 hours a year, closely followed by women in the same country at 78 hours." },
            { para: "Body 2", tone: "body2", icon: "🧩",
              template: "In contrast, [C] and [D] stood at just [X] and [Y] respectively — less than a <b>[third / quarter]</b> of [A]'s figure.",
              filled:   "In contrast, women in Italy stood at just 38 hours, less than half the figure for UK men." }
          ]}
        ]},
        { label: "🥧 Pie chart", blocks: [
          { type: "framesteps", items: [
            { para: "Introduction", tone: "intro", icon: "✍️",
              template: "The pie charts <b>[show / compare]</b> the proportion of [what] in [where] in [year / years].",
              filled:   "The pie charts compare the proportion of household spending in Japan and Malaysia." },
            { para: "Overview", tone: "overview", icon: "👁️",
              template: "Overall, [A] accounted for the <b>largest share</b>, [B] the smallest, and the remaining categories took similar proportions.",
              filled:   "Overall, food accounted for the largest share of spending in both countries, while transport took the smallest." },
            { para: "Body 1", tone: "body1", icon: "📦",
              template: "[A] dominated at [X]% — around a <b>[third / half]</b> of the total. [B] followed at [Y]%, so the two together made up over [Z]%.",
              filled:   "Food dominated at 40%, around a third of total spending in Japan, followed by other items at 30%." },
            { para: "Body 2", tone: "body2", icon: "🧩",
              template: "[C] and [D] accounted for roughly [X]% and [Y]% respectively, while the smallest slice, [E], received just <b>[Z]%</b>.",
              filled:   "Transport accounted for roughly 15% in Japan, while in Malaysia it received just 10% — the smallest slice." }
          ]}
        ]},
        { label: "🔢 Table", blocks: [
          { type: "framesteps", items: [
            { para: "Introduction", tone: "intro", icon: "✍️",
              template: "The table <b>[shows / compares]</b> the [what] for [A, B and C] across [metrics / the period].",
              filled:   "The table shows the average weekly spending of students in three countries across five categories." },
            { para: "Overview", tone: "overview", icon: "👁️",
              template: "Overall, [A] consistently recorded the <b>highest values</b>, [B] the lowest, and most categories saw a [general rise] over the period.",
              filled:   "Overall, Country A recorded the highest spending in every category, while Country C had the lowest." },
            { para: "Body 1", tone: "body1", icon: "📦",
              template: "Looking first at [A], it reached [X] for [metric] — well above every other entry — a lead it held across [metric 2], peaking at <b>[Y]</b>.",
              filled:   "Looking first at Country A, it reached $70 for accommodation, well above every other entry, and peaked at $45 for food." },
            { para: "Body 2", tone: "body2", icon: "🧩",
              template: "Conversely, [B] produced the lowest figures, dropping from [X] to [Y] by [end]. [C] remained in the middle, hovering around <b>[Z]</b>.",
              filled:   "Conversely, Country C recorded the lowest figures, spending just $20 on food. Country B sat between the two, hovering around $30." }
          ]}
        ]},
        { label: "🗺️ Map", blocks: [
          { type: "framesteps", items: [
            { para: "Introduction", tone: "intro", icon: "✍️",
              template: "The two maps <b>[show / compare]</b> the development of [place] between [year 1] and [year 2].",
              filled:   "The two maps show the development of the town of Youngsville between 1980 and 2005." },
            { para: "Overview", tone: "overview", icon: "👁️",
              template: "Overall, [place] underwent significant redevelopment: <b>[natural / industrial] features were replaced by [residential / recreational] ones</b>, and the transport network was expanded.",
              filled:   "Overall, the town underwent significant redevelopment: farmland was replaced by housing and leisure facilities, and the transport network was expanded." },
            { para: "Body 1", tone: "body1", icon: "📦",
              template: "In [year 1], the [northern / western] part was dominated by [feature]. By [year 2], it had been <b>[demolished / replaced]</b> and a new [feature] was built [adjacent to / opposite] it.",
              filled:   "In 1980, the north of the town was dominated by farmland. By 2005, it had been replaced by a golf course, with housing built adjacent to it." },
            { para: "Body 2", tone: "body2", icon: "🧩",
              template: "On the [southern / eastern] side, [feature] was retained but expanded, and the [road] was <b>widened into a [dual carriageway / main road]</b>.",
              filled:   "On the eastern side, the railway was retained, a marina was added on the river, and the old shop was converted into a café." }
          ]}
        ]},
        { label: "🏭 Process", blocks: [
          { type: "framesteps", items: [
            { para: "Introduction", tone: "intro", icon: "✍️",
              template: "The diagram <b>[illustrates / shows]</b> how [product] is [manufactured / produced] from [raw material].",
              filled:   "The diagram illustrates how bricks are manufactured from clay." },
            { para: "Overview", tone: "overview", icon: "👁️",
              template: "Overall, the process is <b>[linear / cyclical]</b> and consists of [X] main stages, beginning with [stage 1] and ending with [final stage].",
              filled:   "Overall, the process is linear and consists of eight main stages, beginning with digging the clay and ending with delivery." },
            { para: "Body 1", tone: "body1", icon: "📦",
              template: "At the first stage, [material] is <b>[collected / delivered]</b>. It is then [washed / sorted], after which it is [verb] before being [moulded].",
              filled:   "At the first stage, clay is dug up and passed through a grid. It is then mixed with sand and water before being moulded or wire-cut into bricks." },
            { para: "Body 2", tone: "body2", icon: "🧩",
              template: "Following [stage], the [product] is <b>[heated / dried]</b> at around [X]°C before being [packed]. Finally, they are [distributed], completing the process.",
              filled:   "Following drying, the bricks are fired in a kiln at up to 1,300°C before cooling. Finally, they are packed and delivered, completing the process." }
          ]}
        ]}
      ]},
      { type: "section", label: "Drill cards — say it before you read it" },
      { type: "flash", single: true, cards: [
        { k: "📈 Line graph overview", v: "Overall, [A] saw the most significant [rise / fall] and ended as the [highest / lowest], while [B] remained stable.", d: "Filled example", x: "Overall, car sales saw the most significant rise and ended as the highest, while bicycle use remained stable throughout." },
        { k: "📊 Bar chart overview", v: "Overall, [A] recorded the highest figure — roughly [X] times the value for [B] — while [C] and [D] were the lowest.", d: "Filled example", x: "Overall, UK men recorded the highest figure, roughly double that of Italian women, who recorded the lowest." },
        { k: "🥧 Pie chart overview", v: "[A] dominated at [X]%, around a [third / half] of the total, while [B] received the smallest share at [Z]%.", d: "Filled example", x: "Food dominated at 40%, around a third of total spending in Japan, while transport received the smallest share at just 10%." },
        { k: "🔢 Table overview", v: "Overall, [A] consistently recorded the highest figures across all categories, whereas [B] had the lowest.", d: "Filled example", x: "Overall, Country A consistently recorded the highest figures across all categories, whereas Country C had the lowest." },
        { k: "🗺️ Map overview", v: "Overall, [place] underwent significant redevelopment: [natural features] were replaced by [new features], and the transport network was expanded.", d: "Filled example", x: "Overall, the town underwent significant redevelopment: farmland was replaced by leisure facilities and housing, and the road network was expanded." },
        { k: "🏭 Process overview", v: "Overall, the process is [linear / cyclical] and consists of [X] main stages, beginning with [stage 1] and ending with [final stage].", d: "Filled example", x: "Overall, the process is linear and consists of eight main stages, beginning with digging the clay and ending with delivery to customers." }
      ]},
      { type: "section", label: "The 5-minute daily drill" },
      { type: "rules", items: [
        { title: "Recite the skeleton cold", desc: "Intro → Overview → Body 1 → Body 2 in under 10 seconds, no looking. Do it once a day, out loud.", tag: "DONE?", tone: "tip" },
        { title: "Blind-write intro + overview", desc: "Open any chart in this app and write its intro + overview using only frames. 3 minutes, one shot, no corrections.", tag: "DONE?", tone: "tip" },
        { title: "Slot real numbers into a blank frame", desc: "Take one model answer and rewrite its body paragraphs through the frame — the data must match exactly.", tag: "DONE?", tone: "tip" },
        { title: "Zero numbers in the overview", desc: "Re-check every time. A number in the overview means the frame was used wrong.", tag: "DONE?", tone: "tip" },
        { title: "Rotate your verbs", desc: "Never use the same trend verb twice in one report. The frames give you five ways to say 'rose'.", tag: "DONE?", tone: "tip" },
        { title: "Time-box it — 20 minutes", desc: "Frames exist to give you thinking time back. If you hesitate, the frame is not memorized yet.", tag: "DONE?", tone: "tip" }
      ]},
      { type: "tip", title: "Memorize by recall, not rereading", desc: "Reading a template feels like knowing it — it is not. Cover the line, write it from memory, check, repeat. Five minutes a day for a week and all six frames are automatic. On exam day: 3 minutes to read the chart, 17 minutes to write, zero hesitation." },
      { type: "quiz", title: "Do you know which frame fits?", questions: [
        { q: "Which frame describes change over time and needs trend verbs (rose, peaked, levelled off)?", opts: ["Bar chart", "Line graph", "Pie chart", "Table"], correct: 1, right: "Correct! Time runs along the x-axis — trends are the line graph's native language.", wrong: "Not quite — the LINE GRAPH is built for change over time: rises, falls, peaks and plateaus." },
        { q: "For a process diagram, which introduction formula fits?", opts: ["'The two maps show...'", "'The bar chart compares...'", "'The diagram illustrates how X is manufactured...'", "'Overall, A dominated at X%.'"], correct: 2, right: "Exactly — processes open with 'how X is made' and run on the present passive voice.", wrong: "Almost — processes open with 'The diagram illustrates how X is manufactured from...' using the present passive." },
        { q: "Whatever the frame, what must never appear in the overview?", opts: ["Comparisons", "Specific numbers", "Trend words", "Reference words"], correct: 1, right: "Correct! The overview is general trends and comparisons — zero data points.", wrong: "Not quite — the overview must be free of SPECIFIC NUMBERS. Comparisons and trends belong there." },
        { q: "Which grammar does the map frame force you to use?", opts: ["Present continuous", "Past passive ('was replaced by')", "Future perfect", "Active past ('the town built')"], correct: 1, right: "Right — 'the farmland was converted into a golf course' is the map frame's engine.", wrong: "Almost — maps run on the PAST PASSIVE: 'was replaced by', 'was converted into'." },
        { q: "You have memorized all six frames perfectly. Do you now guarantee an 8?", opts: ["Yes — the frames do the work", "No — data selection and accuracy still decide", "Only for line graphs", "Only if I write 250 words"], correct: 1, right: "Correct! Frames give structure and speed; selecting the RIGHT data and reporting it accurately is what actually earns the 8.", wrong: "Not quite — frames are scaffolding, not a guarantee. Selecting the right data and reporting it accurately earns the marks." }
      ]}
    ]
  },

  /* ============ 18. Task 1 Writing Samples ============ */
  {
    id: "samples",
    title: "Task 1 Writing Samples",
    icon: "📝",
    group: "Practice",
    hero: {
      icon: "📝",
      title: "Real questions, real answers",
      sub: "Study the structure, not just the words. Click to reveal each paragraph and see exactly where trends, comparisons and data live."
    },
    blocks: [
      { type: "samples", items: [
        {
          icon: "📉", title: "Line Chart — Wheat Exports", words: "209 words",
          task: "The graph below shows the differences in wheat exports over three different areas. Write a report describing the information shown. Write at least 150 words.",
          img: "extracted_images/page-59.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The line graph compares three regions in terms of exports of wheat between 1985 and 1990." },
            { tag: "Overview", tone: "overview", text: "Overall, the three regions experienced different trends in the time period. While wheat exports in Canada and European countries rose with some fluctuations, exports in Australia fell over time." },
            { tag: "Body 1", tone: "body", text: "As the graph shows, Australia's wheat export figure started at 15 million tons in 1985, followed by a small increase to around 16 million tons in 1986. Then it declined steadily until it fell to just over 10 million tons in 1990. Regarding Canada's exports, in 1985 they shipped approximately 19 million tons. This figure fell to about 17 million in 1986, but then experienced considerable growth to 25 million tons in 1988. Afterward, the figure plunged to below 15 million in 1989, but subsequently rose to just under 20 million in 1990." },
            { tag: "Body 2", tone: "body", text: "By contrast, the wheat exports from the European Community experienced an increase over the six-year period. In 1985, nearly 16 million tons were exported, but this number fell to about 14 million in 1986. Then exports increased to exactly 15 million tons in 1987 and 1988 before witnessing steady growth to 19 million and 21 million tons in 1989 and 1990, respectively." }
          ]
        },
        {
          icon: "📊", title: "Bar Chart — Leisure Time", words: "169 words",
          task: "The chart below shows the amount of leisure time enjoyed by men and women of different employment status. Write a report for a university lecturer describing the information shown.",
          img: "extracted_images/page-62.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The bar chart compares the amount of free time per week that males and females of five categories of employment status had between 1998 and 1999." },
            { tag: "Overview", tone: "overview", text: "It is clear that men enjoyed more hours of leisure time per week than women in three out of five categories. However, only figures for women are shown in two categories, namely employed part-time and housewives." },
            { tag: "Body 1", tone: "body", text: "Regarding the full-time employed, men had slightly more leisure time than women, with approximately 45 hours of free time per week, compared to around 38 hours for women. Unemployed and retired people of both genders enjoyed the most hours of leisure time. Moreover, the figures for retired males and females were exactly the same as those for the unemployed, at around 85 and 78 hours respectively." },
            { tag: "Body 2", tone: "body", text: "Housewives enjoyed 50 hours of spare time, a little more than part-time working women, who had just over 40 leisure hours each week. No data is given for men in either of these categories." }
          ]
        },
        {
          icon: "🚗", title: "Bar Chart — Transport Modes", words: "189 words",
          task: "The bar chart shows the different modes of transport used to travel to and from work in one European city in 1960, 1980 and 2000. Summarize the information by selecting and reporting the main features.",
          img: "extracted_images/page-64.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The bar chart illustrates the proportion of travelers who used different types of vehicles to commute to work in a European city during the period from 1960 to 2000." },
            { tag: "Overview", tone: "overview", text: "Overall, the percentage of commuters who used cars rose steadily over the period, while the proportion of people who travelled by other means of transport fell." },
            { tag: "Body 1", tone: "body", text: "In 1960, approximately 35% of people commuted to work on foot, compared to only about 5% who travelled by car. The percentages of those who used bikes and buses were around 25% and 18% respectively. However, in 1980 travelling by bus was by far the most popular mode, accounting for over 25% of travelers, whereas only 17% of people travelled on foot. The figures for bike and car were around 20% and 22% respectively." },
            { tag: "Body 2", tone: "body", text: "At the end of the period, more than 35% of commuters used cars in 2000, which was much higher than the figure for bus users, at around 16%. The percentage of those who travelled on foot and by bike fell to 9% and 6% respectively." }
          ]
        },
        {
          icon: "🍽️", title: "Table — Student Spending", words: "196 words",
          task: "The table below gives information about the average annual spending of university students in three different countries.",
          img: "extracted_images/page-67.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The given table compares the percentage of expenditure which college students from three countries spend on different living expenses each year." },
            { tag: "Overview", tone: "overview", text: "Overall, the total spending of students in country A was higher than the expenditure of students in countries B and C. In all the countries, students spent the highest proportion of their budget on accommodation and food." },
            { tag: "Body 1", tone: "body", text: "In country A, total spending is highest, at $5,000 per year, compared with $4,500 and $1,500 for students in countries B and C respectively. Accommodation accounts for 45% of the total expenditure of students in country A, while the proportions were lower for country B at 35% and country C at only 30%. However, in terms of food, students in country C spend the largest percentage, accounting for 36%, while the figures for countries A and B are only 22% and 28% respectively." },
            { tag: "Body 2", tone: "body", text: "Students in country C also spent a high percentage of their budget on books, at 21%, compared with 9% for country B and just 3% for country A. By contrast, students in countries A and B spent 22% and 23% respectively of their budget on leisure, while students in country C spent only 12% of their total money on this category." }
          ]
        },
        {
          icon: "🥧", title: "Pie Chart — Household Spending", words: "189 words",
          task: "The pie charts below show the average household expenditures in Japan and Malaysia in 2010. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "extracted_images/page-69.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The pie charts compare the average household spending in Japan and Malaysia in terms of five important categories in 2010." },
            { tag: "Overview", tone: "overview", text: "Overall, it is clear that Japanese and Malaysian people spent the largest proportion of their budget on just three categories, namely housing, food and other goods and services. Moreover, the expenditures on healthcare and transport in Japan were double those in Malaysia." },
            { tag: "Body 1", tone: "body", text: "In Japan, housing accounted for the largest share at around 30%, while food and other goods and services each took up roughly 25%. Healthcare and transport were much smaller, at about 5% and 10% respectively." },
            { tag: "Body 2", tone: "body", text: "In Malaysia, food was the largest category at about 40%, followed by housing at around 25%. Other goods and services made up about 15%, while healthcare and transport together accounted for the remainder. Overall, Malaysian households spent a far greater share on food than Japanese households." }
          ]
        }
      ]},
      { type: "remember", title: "Steal the skeleton", desc: "Every sample follows the same skeleton: Introduction (paraphrase) → Overview (trends + comparisons) → Body 1 → Body 2. Learn the skeleton and you can write ANY question." }
    ]
  },

  /* ============ 19. Practice Model Answers ============ */
  {
    id: "model-answers",
    title: "Practice Model Answers",
    icon: "🏆",
    group: "Practice",
    hero: {
      icon: "🏆",
      title: "14 real questions — model answers included",
      sub: "Every diagram type you will meet, with a full band-7 answer. Study the skeleton, then rewrite each one yourself."
    },
    blocks: [
      { type: "samples", items: [
        {
          icon: "🗺️", title: "Map — Meadowside Village & Fonton", words: "227 words",
          task: "The map above shows Meadowside Village and Fonton, two neighbouring regions over different time periods. Summarize and report the main features of the map.",
          img: "pdf-figure/page-1.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The map above displays how, over a period of time (1962, 1985 and the present), Meadowside Village has developed and grown." },
            { tag: "Overview", tone: "overview", text: "Clearly, we can see from the three maps that the village has very much changed and developed over the three time periods." },
            { tag: "Body 1", tone: "body", text: "In the year 1962, Meadowside Village was just a small village located to the west of Fonton. It had a small road running through it with nothing, whatsoever, connecting it to Fonton. Fonton, on the other hand was a small town with just a railway track running through it. By the year 1985, a few changes were observed in terms of geographical expansion of both Meadowside Village and Fonton. The old road in Meadowside Village was reconstructed and a new one was built connecting it to Fonton. In addition to this, a leisure complex, housing estate and super-store were also built in Meadowside Village. The only development noted in Fonton was geographical expansion towards its south." },
            { tag: "Body 2", tone: "body", text: "Presently, with immense infrastructural growth and change in geographies, Meadowside Village has grown into a suburb, on the west and integrated with Fonton, on the east creating one big geographical region. Towards the central part of this region is a hotel. To the south of this hotel is a railway station. Connected to the road running from Meadowside Suburbs to Fonton, towards the south, is a business park." }
            ]
        },
        {
          icon: "🥧", title: "Pie Charts — Cycling vs Driving", words: "302 words",
          task: "The chart above shows the reasons why people travel to work by bicycle or by car. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-3.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The pie charts illustrate the rationales behind why people choose to go to work on a bicycle or by a car." },
            { tag: "Overview", tone: "overview", text: "Overall, the maximum percentage of people who use bicycle to go to work do it because they are concerned about their health and about protecting the environment from pollution. In contrast, the highest percentages of people who drive to work are the ones who find it more comforting and have to cover longer distances." },
            { tag: "Body 1", tone: "body", text: "The first chart displays the different reasons for people who go to work on a bicycle. A majority of people (30%) prefer cycling to work because they want to maintain their health and remain fit. An equal percentage of people (30%) cycle to work because it helps in reducing pollution. There are 15% people who commute to and from work on bicycles because they find it easier to park bicycles as compared to any other motor vehicle because bicycle takes up lesser space. 13% people experience a reduction in their overall travelling costs which is why they choose bicycle as their mode of transport to go to work. The remaining 12% find bicycle to be faster than driving as they do not have to stop due to traffic jams which is why they commute to work on bicycles." },
            { tag: "Body 2", tone: "body", text: "On the other hand, 40% people prefer car over bicycle because travelling in a car is more comfortable than on a bicycle. While 21% of the total people who drive to work do it because their workplace is located at a distance from their homes, 14% people do it because driving is faster than cycling. There are another 14% people who drive to work because they need to carry things with them and cannot do that on a bicycle. The last 11% find driving to be safer than cycling." }
            ]
        },
        {
          icon: "📈", title: "Line Graph — London Pollution", words: "197 words",
          task: "The graph below shows the pollution levels in London between 1600 and 2000. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-5.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The line graph illustrates the changing levels of pollution due to smoke and sulphur dioxide in London between the years 1600 to 2000." },
            { tag: "Overview", tone: "overview", text: "From the data provided in the graph, we can see that the trends experienced over time by both smoke and sulphur dioxide are very similar. Overall, both pollutants rise and fall in the same years." },
            { tag: "Body 1", tone: "body", text: "Beginning in the year 1600, the pollution caused by smoke and sulphur dioxide was negligible after which it began to rise. Up to around the year 1720, sulphur dioxide found in the atmosphere had risen drastically, from 50 micrograms before 1600 to over 750 micrograms in 1720. Similarly, smoke also increased somewhat, from just under 50 micrograms to around 240 micrograms in 1720." },
            { tag: "Body 2", tone: "body", text: "After this, the magnitude of pollution continued to increase for the most part, up until 1880. The pollution caused due to sulphur dioxide reached the maximum in the year 1850 (approximately 900 micrograms per cubic metre) while the highest amount of pollution caused by smoke was around the year 1900 (approximately 500 micrograms per cubic metre). It was only after 1900 that the levels of pollution started decreasing and reached nearly 0 by the year 2000." }
            ]
        },
        {
          icon: "📊", title: "Bar Chart — Female Unemployment (UK)", words: "170 words",
          task: "The graph below shows female unemployment rates in each country of the United Kingdom in 2013 and 2014. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-6.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The bar graph demonstrates the varying rates of unemployment amongst the females. The data was collected from England, Wales, Scotland and Northern Ireland in 2013 and 2014." },
            { tag: "Overview", tone: "overview", text: "Overall, the figures of unemployment can be considered reasonably low, from between 4.6% to 6.8% unemployed in both years and all four countries." },
            { tag: "Body 1", tone: "body", text: "In 2013, England has the highest rate of female unemployment at 6.8%. In Wales, this figure fell to 5.4% unemployed. In the same year, Scotland had the highest rate of females out of employment at 6.1%, whereas is Northern Ireland the figure stood at 5.6%." },
            { tag: "Body 2", tone: "body", text: "In 2014, three of the four countries saw an increase in employment for females that year. Only Scotland saw poorer rates of unemployment compared to 2013, increasing from 6.1% to 6.7%. England fell by 0.3% to 6.5% total unemployed in 2014. In wales, the figure fell by a similar amount and in North Ireland the total amount of women employed in 2014 was recorded at 4.6% - the lowest total amount in all data shown." }
            ]
        },
        {
          icon: "🏥", title: "Maps — Queen Mary Hospital", words: "219 words",
          task: "The diagrams below show the changes that have taken place at Queen Mary Hospital since its construction in 1960. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-7.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The blueprints of Queen Mary Hospital illustrate the changes in its infrastructure that have happened from 1960 till the year 2000." },
            { tag: "Overview", tone: "overview", text: "In general, we can say that the hospital has clearly developed and changed over the 40 year time period. Buildings have been repurposed and adapted to suit the needs of the hospital at that time." },
            { tag: "Body 1", tone: "body", text: "In 1960, the hospital was one of the four sections situated alongside the main road. It was next to the shopping centre. Towards the south of the hospital was a car parking and towards its south-west was a farmland. By the year 1980, the hospital had expanded to incorporate a pharmacy in it and the shopping centre had been converted into a cancer centre. The farmland had also been transformed into a nursing home thereby turning a majority of the portion by the road into a part of the Queen Mary Hospital." },
            { tag: "Body 2", tone: "body", text: "The year 2000 saw a major change in the infrastructure of the Queen Mary Hospital. While the hospital and the pharmacy remained the same in size, the cancer centre had almost tripled in size occupying the area that used to be the nursing home. The nursing home had shifted to take up the left half of the car park while the car park had been reduced to half its original size." }
            ]
        },
        {
          icon: "📚", title: "Line Graph — Book Spending", words: "191 words",
          task: "The graph below shows the amount of money spent on books in Germany, France, Italy and Austria between 1995 and 2005. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-9.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The graph represents the different amount of money (in $ US dollar) that the people of Germany, France, Italy and Austria spent on buying books over a period of 10 years from 1995 to 2005." },
            { tag: "Overview", tone: "overview", text: "Overall, the amount spent on books over the 10 year period increased in all four countries." },
            { tag: "Body 1", tone: "body", text: "Germany and France were the first and second highest spender on books respectively in 1995. Up until the year 1999, both countries saw and increase in spending - $10 million dollar in Germany and $5 million dollars in France. Between 1999 and 2001, France increase their overall outlay on book purchases, whereas Germany's total expenditure dropped slightly. By 2005, Germany and France saw their highest total spent on book purchases and remained the first and second high spenders." },
            { tag: "Body 2", tone: "body", text: "In 1995, Italy was the third highest spender whereas Austria was the fourth highest spender at 30 million dollars, 20 million dollars behind Italy. By the year 2003, both Italy and Austria saw increases in the total amount of money spent on books. By the year 2005, Austria had overtaken Italy to become the third highest book purchaser across the four countries." }
            ]
        },
        {
          icon: "📋", title: "Table — Scottish Adults' Activities", words: "189 words",
          task: "The Table below shows the results of a survey that asked 6800 Scottish adults (aged 16 years and over) what activities they participated in. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-10.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The table illustrates the percentage of Scottish people aged 16 and above that undertook certain activities." },
            { tag: "Overview", tone: "overview", text: "On the whole, the table show sus that all age groups are quite active. Over 60% of all age groups were taking part in at least one activity." },
            { tag: "Body 1", tone: "body", text: "The most active age group were the 16-24 year olds, with 79% of people surveyed completing at least one activity. The most popular interest for this age range was visual arts, which stood at 30% of young adults participating in this activity. The lowest recorded participation was “computer based” which stood at 10% - the highest across the three age groups. Crafts and sightseeing stood at 11% each whereas writing was slightly higher at 17%." },
            { tag: "Body 2", tone: "body", text: "In the two age groups, 25-44 and 45-74, crafts and sightseeing were the most popular choices for activities, scoring between 17% to 22%, a much higher rate of participation than the 16-24 year olds. For 25-44 year olds, writing was the lowest at 6%. Comparatively, in the 45-74 year olds, writing and computer based activities were the lowest in participation with 5% of people undertaking these activities for each hobby." }
            ]
        },
        {
          icon: "😊", title: "Pie Charts — What Makes People Happy", words: "236 words",
          task: "The charts below show the results of a survey about what people of different age groups say makes them most happy. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-11.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The pie chart represents how people under the age of 30 and those who are older than 30 years have different reasons that make them most happy." },
            { tag: "Overview", tone: "overview", text: "Overall, people over 30 have more mature and responsible reasons for being happy, such as financial security and being with their family. People under the age of 30 prefer to travel and improve their appearance." },
            { tag: "Body 1", tone: "body", text: "A majority of people (31%) under the age of 30 find themselves to be happy when they achieve something at work whereas they find least happiness when doing something other than pursuing their hobby, looking good, travelling or working. 22% people in this age bracket are happy if they are doing something they consider as their hobby whereas 18% of them find happiness in having a good appearance. Travelling only gives happiness to 15% of people below the age of 30." },
            { tag: "Body 2", tone: "body", text: "In a similar way to under 30s, people aged over 30 are given most satisfaction from achievements at work, 1% higher than their juniors at 32%. Just behind this, is participating in hobbies at 24%. In contrast to people below 30 years of age who also find happiness in having a good appearance, 20% people over 30 are happy if they have financial security. Unlike people under 30, being with family is another reason that makes 14% people above 30 most happy. Apart from this 10% people are most happy doing other things." }
            ]
        },
        {
          icon: "📻", title: "Line Graph — Radio & TV Audiences", words: "201 words",
          task: "The line graph below shows radio and television audiences throughout the day in 1992. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-13.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The line graph depicts the patterns of how the audience in UK used to watch television or listen to the radio at different times of the day, during the year 1992." },
            { tag: "Overview", tone: "overview", text: "Overall, television seems to have been a more popular medium of entertainment for the audience during the evening and the night as opposed to radio that was more popular during the day, especially in the morning." },
            { tag: "Body 1", tone: "body", text: "Between the hours of 1am to 6am, less than around 5% of people were watching the TV or listening to the radio. At 6am however, the amount of people listening to the radio begin to rise drastically. The figure peaked at just over 25% at around 8am. During this time period TV viewers saw no real large increase in viewers. By 1pm, people watching TV rose to 15%, which was the same amount for people listening to the radio." },
            { tag: "Body 2", tone: "body", text: "After lunch time, radio continued to lose audience, whilst TV watchers continue to rise into the evening. From around 3pm top 6pm, TV quickly increased in audience, peaking at 45% of viewers at around 8-9pm. Radio however, had fallen all the way to 5% of listening and plateaued at this amount between 9 and 11pm." }
            ]
        },
        {
          icon: "⏱️", title: "Bar Chart — Leisure Time", words: "173 words",
          task: "The chart below shows the percentages of leisure time enjoyed by men and women of different employment status. Write a report for a university lecturer describing the information below.",
          img: "pdf-figure/page-14.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The bar graph displays the different amounts of time that employed and unemployed males and females spend at leisure." },
            { tag: "Overview", tone: "overview", text: "Overall, unemployed males followed shortly by retired males spend the most amount of leisure time which is 85% and 84% respectively." },
            { tag: "Body 1", tone: "body", text: "Both males and females in full time work have some opportunities for leisure and hobbies. Around 38% of employed women enjoyed some aspect of free time. The figure was slightly higher for men at just under 45%. 40% of females in part time work enjoyed leisure time whereas males figure stands at either 0% or was not recorded. The amount of females who enjoy free time increased from part time employment to housewives, where the figure stood at 50%. Again males where not recorded for this section." },
            { tag: "Body 2", tone: "body", text: "Those who were unemployed or retired enjoyed the most free time for leisure and hobbies. From over 75% to around 83% of both females and males had leisure time for people of this employment status, although males had more leisure time in all statuses than females." }
            ]
        },
        {
          icon: "🏠", title: "Graph — Unpaid Work Hours", words: "186 words",
          task: "The diagram below shows the average hours of unpaid work per week done by people in different categories. (Unpaid work refers to such activities as childcare in the home, housework and gardening). Describe the information presented below, comparing results for men and women in the categories shown.",
          img: "pdf-figure/page-15.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The graph represents the number of hours that married men and women (without children, with children who are 1-2 years old and with children above the age of 3) work without getting paid." },
            { tag: "Overview", tone: "overview", text: "Overall, we can see that married women have higher rates of unpaid work than married men with or without children." },
            { tag: "Body 1", tone: "body", text: "For married women without children, the unpaid amount of working hours stood at 30 hours per week. This was almost double the amount of unpaid hours for men, who worked under 20 hours of unpaid work per week. This amount of unpaid work didn't change for men with 1 to 2 children, who again undertook around 19 hours of unpaid work per week. For women however the figure increased massively to just over 50 hours of unpaid work per week." },
            { tag: "Body 2", tone: "body", text: "Similarly, the figure rose again for married women with 3 or more children. The figure increased by around 19 hours to 60 hours of unpaid work per week total. On the other hand, men's total amount of unpaid work decreased slightly when they had 3 or more children to around 18 hours total." }
            ]
        },
        {
          icon: "🐞", title: "Diagrams — Ladybug Life Cycle", words: "195 words",
          task: "The diagram below shows the life cycle of a lady bird and its anatomy. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-17.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The first diagram represents the life cycle of a ladybug whereas the second diagram illustrates the anatomy of the ladybug, highlighting different parts of its body." },
            { tag: "Overview", tone: "overview", text: "Overall, there are a total of 4 stages in the life cycle of a ladybug depicted in this diagram." },
            { tag: "Body 1", tone: "body", text: "First, we begin with the eggs being laid on the lower side of the leaf. This egg stage lasts for 2-5 days and is followed by the larval stage in which the eggs grow into larvae. This stage lasts for 21 days. After this, we have the pupa stage in which the larva converts into a pupa on the underside of the leaf. This stage takes 7 days to complete which is when the pupa metamorphoses into an adult ladybug." },
            { tag: "Body 2", tone: "body", text: "In the second diagram, the 8 important parts of a ladybug's body are shown. It has a head with eyes in it and antenna protruding out of it. The lady bug has bright red elytra and underneath it is the wing. The wing covers the ladybug's abdomen. Underneath the abdomen are the legs. The ladybug also has a pronotum that connects its head to the abdominal region of the body." }
            ]
        },
        {
          icon: "🦷", title: "Line Graph — Tooth Decay & pH", words: "151 words",
          task: "Eating sweet foods produces acid in the mouth, which can cause tooth decay (high acid levels are measured by low pH values). Describe the information shown in the graph.",
          img: "pdf-figure/page-18.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The line graph illustrates the amounts of acid produced by sweet foods (fruit sugar, cane sugar and honey) in the mouth upon consumption." },
            { tag: "Overview", tone: "overview", text: "Overall, the highest level of acid is produced by cane sugar which is indicated by a low pH of 3.5." },
            { tag: "Body 1", tone: "body", text: "This starts happening within 5 minutes of eating cane sugar and as more time passes, the acidic level goes on decreasing. The lowest amounts of acid levels are produced on consuming honey, 10 minutes after being eaten. The acid level is indicated by a pH of approximately 5. Fruit sugar starts producing acid of pH of 4 right after 5 minutes of eating a fruit. The acidic levels go on decreasing as more time passes after consumption." },
            { tag: "Body 2", tone: "body", text: "The graph also indicates that cane sugar has the strongest ability to cause tooth decay while honey is the least likely to cause one, out of the three forms of sugar." }
            ]
        },
        {
          icon: "🏙️", title: "Pie Charts — Someland Spending", words: "176 words",
          task: "The three pie charts below show the changes in annual spending by local authorities in Someland in 1980, 1990 and 2000. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
          img: "pdf-figure/page-19.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The pie charts illustrate the different sectors in which the locals of Someland have spent their money during 3 years, 1980, 1990 and 2000." },
            { tag: "Overview", tone: "overview", text: "Overall in the year 1980, the highest expenditure (35%) by people of Someland was in higher education which increased to 45% in 1990 and reduced to 40% in 2000." },
            { tag: "Body 1", tone: "body", text: "Across three years, 1980, 1990 and 2000, there was a reduction in other expenses from 6% to 4% to finally 1%. Expenditure on transport was 16% in 1980 which decreased considerably to 6% in 1990 but again increased by almost 4 times to 22% in 2000." },
            { tag: "Body 2", tone: "body", text: "One notable change was the drop in expenditure in K-12 education from 25% in 1980 to 20% in 1990 and finally 18% in 2000. The expenditure on health and human resources also decreased to 10% in 2000 from 14% in 1980. The people of Someland started spending more money on environmental services as years passed. While they used to spend only 4% on these services in 1980, it increased to 5% in 1990 and to nearly double." }
            ]
        }
            ]},
      { type: "remember", title: "One skeleton, every question", desc: "Each answer follows the same formula: Introduction (paraphrase) → Overview (general trends, no numbers) → Body 1 → Body 2. Learn it once and you can write any of these 14 questions under time pressure." }
    ]
  },

  /* ============ 20. Map ============ */
  {
    id: "map",
    title: "Map",
    icon: "🗺️",
    group: "Practice",
    hero: {
      icon: "🗺️",
      title: "Describing places that change over time",
      sub: "Maps use location and direction language plus passive tense — 'was built', 'were demolished', 'made way for'."
    },
    blocks: [
      { type: "section", label: "Direction & location language" },
      { type: "vocab", groups: [
        { kind: "🧭 Direction", items: ["in the north", "to the north", "in the southwest", "to the southwest", "on the west side of the river", "along the river"] },
        { kind: "📍 Location", items: ["was located / situated in", "in the center of the city", "next to", "opposite", "at the mouth of the river"] },
        { kind: "🔨 Changes", items: ["was built / erected", "was demolished", "was removed to make way for", "was replaced by", "sprang up", "was extended", "was constructed"] }
      ]},
      { type: "para", text: "Grammar notes:<br>• Maps use the <b>passive voice</b>: \"the residential area <b>was replaced by</b> a warehouse\". We care about the action, not who did it.<br>• <b>\"A\" for new, \"the\" for old</b>: \"the residential area was replaced by <b>a</b> warehouse\" (it's new).<br>• Don't say \"the left side of town\" — say \"<b>the west side</b>\". It is OK to say \"on the left side of the map\"." },
      { type: "remember", title: "The map method", desc: "1) Pick a side — divide the town into north/south or east/west. 2) Describe changes side by side. 3) Always mention what REPLACED what." },
      { type: "samples", items: [
        {
          icon: "🏙️", title: "Map Sample — Youngsville", words: "194 words",
          task: "The maps show changes that took place in Youngsville in New Zealand over a 25-year period from 1980 to 2005.",
          img: "extracted_images/page-80.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The maps illustrate the developments which took place in the coastal town of Youngsville between 1980 and 2005." },
            { tag: "Overview", tone: "overview", text: "Overall, a comparison of the two maps reveals a complete transformation from a largely rural to a mainly urban area." },
            { tag: "Body 1", tone: "body", text: "In 1980, the town was a much greener residential area with a large number of trees and individual houses, but during the next 25 years the town saw significant changes. The most noticeable is that all of the trees in the south of the River Alanah were chopped down, with all the houses along the railway line being demolished to make way for skyscrapers. Moreover, a new industrial zone with warehouses and factories sprang up around the school and airport." },
            { tag: "Body 2", tone: "body", text: "In contrast, only a few trees in the north of the river remained. The woodland was cleared and converted into a golf course, a park, and car parking facilities. Further developments were the construction of a stadium next to the north-east corner of the lake and the extension of the railway line running directly to the north. A marina was also constructed at the mouth of the river." }
          ]
        }
      ]}
    ]
  },

  /* ============ 21. Process (Man-Made) ============ */
  {
    id: "process-diagram",
    title: "Process (Man-Made)",
    icon: "🏭",
    group: "Practice",
    hero: {
      icon: "🏭",
      title: "How things are made — in passive present tense",
      sub: "Man-made processes use is/are + V3, sequencers, and purpose clauses. The grammar is simple; the challenge is vocabulary."
    },
    blocks: [
      { type: "cards", items: [
        { icon: "⚙️", title: "1 · Passive present", body: "Use <b>is/are + past participle</b>: \"The clay <b>is dug up</b> by a digger.\" Not 'was dug up' — the process happens generally." },
        { icon: "🔢", title: "2 · Sequencers", body: "First, then, next, finally (when) · until, before (how long) · repeatedly, twice, several times (how often)." },
        { icon: "🎯", title: "3 · Purpose clauses", body: "Explain WHY a step happens: \"...which kills the bacteria\", \"<b>in order to</b> kill the bacteria\", \"<b>so as to</b> ensure the bacteria is killed\"." },
        { icon: "📍", title: "4 · Relative clauses", body: "Add extra info: \"the milk is sent to the factory, <b>where</b> it is turned into cheese.\"" }
      ]},
      { type: "remember", title: "Grammar is easy — the verbs are the trap", desc: "The diagram gives you the verbs. Look carefully at each step, take the verb they give you, and rephrase it in your own words. Think with logic: why do we heat things? To melt, to cook, to warm." },
      { type: "samples", items: [
        {
          icon: "🧱", title: "Process Sample — Brick Manufacture", words: "188 words",
          task: "The diagram illustrates the process that is used to manufacture bricks for the building industry. Summarize the information by selecting and reporting the main features.",
          img: "extracted_images/page-87.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The flow chart shows the way in which bricks are made for the building industry." },
            { tag: "Overview", tone: "overview", text: "Overall, there are 7 stages in the whole brick-producing process, beginning with the digging up of clay and ending with the delivery of the bricks to the customers." },
            { tag: "Body 1", tone: "body", text: "To begin, the clay used to make the bricks is dug up from the ground by a large digger. This clay is then placed onto a metal grid, which is used to break it up into smaller pieces, with a roller assisting in the process. Following this, sand and water are added to the clay, and the mixture is turned into bricks by either placing it into a mould or using a wire cut. Next, these bricks are placed in a drying oven to dry for 24–48 hours." },
            { tag: "Body 2", tone: "body", text: "In the subsequent stage, the bricks go through a heating and cooling process. They are heated in a kiln at a moderate and then a high temperature, ranging from 200°C to 1300°C, followed by a cooling process in a cooling chamber for 48–72 hours. Finally, the bricks are packed and delivered to their destinations." }
          ]
        }
      ]},
      { type: "para", text: "Paraphrasing ideas for processes:<br>• ice cream → <b>frozen yogurt</b><br>• fruit is picked by hand → <b>fruit is manually collected</b><br>• fruit quality checking → <b>the fruit is checked to ensure it is free of bruises and not rotten</b>" }
    ]
  },

  /* ============ 22. Natural Process ============ */
  {
    id: "natural",
    title: "Natural Process",
    icon: "🐸",
    group: "Practice",
    hero: {
      icon: "🐸",
      title: "Life cycles — active voice, cycle language",
      sub: "Natural processes (life cycles, the water cycle) are cycles, not sequences. Use active voice and cycle-specific language."
    },
    blocks: [
      { type: "para", text: "Natural processes are the trickiest because they need a little science knowledge. Key differences from man-made processes:<br>• It is a <b>cycle</b>, not a step-by-step line — so no \"1st step... 2nd step...\". Instead choose where to start.<br>• Mostly <b>active voice</b>: \"the tadpole grows\" (not \"is grown\"). People are not involved.<br>• Use <b>non-defining relative clauses</b> and cycle sequencers." },
      { type: "vocab", groups: [
        { kind: "🔁 Sequencers", items: ["gradually", "overtime", "eventually", "at this point in the cycle", "the first stage is when", "the step after this"] },
        { kind: "⏭️ Middle stages", items: ["the next step is when", "after this stage is complete", "by this stage", "once A has finished, B is able to start", "at the same time", "while / as"] },
        { kind: "🏁 Last stage", items: ["the final stage of the cycle is when", "once the final stage has been completed"] },
        { kind: "🎯 Purpose & result", items: ["in order to", "so as to", "as a result of this", "this results in", "which leads to", "which causes"] }
      ]},
      { type: "remember", title: "Start anywhere, but pick one point", desc: "Because it's a cycle, you choose the entry point — commonly the beginning of the life cycle (e.g. eggs). Then follow the stages around until you return to the start." },
      { type: "samples", items: [
        {
          icon: "🐸", title: "Natural Process Sample — Frog Life Cycle", words: "215 words",
          task: "The diagram shows the life cycle of a frog. Summarize the information by selecting and reporting the main features.",
          img: "extracted_images/page-96.png",
          paras: [
            { tag: "Introduction", tone: "intro", text: "The flow chart illustrates the development of a frog from egg during its life cycle." },
            { tag: "Overview", tone: "overview", text: "Overall, it is clear that there are six distinct stages illustrated in the process, commencing with producing eggs in the water and ending with the development of a mature frog." },
            { tag: "Body 1", tone: "body", text: "The first stage is when the eggs, shown as frogspawn, float on the surface of the lake. The next step after this is the emergence of the small tadpole after the frogspawn hatches. At this point in the cycle, the small tadpole has a small body with a long tail. Over time, the tadpole grows and its body becomes bigger while the tail becomes longer. At the same time, the legs begin to form so as to prepare the tadpole's future life on land." },
            { tag: "Body 2", tone: "body", text: "Eventually, the tadpole starts to grow into a young frog with a wider mouth, a shorter tail and larger legs, although it continues to live in the water. Gradually, the frog becomes mature, ready to leave the water and move onto land. When on land, it starts to breathe air and loses its tail. The final stage of the cycle is when the adult frog finds a mate in order to lay eggs. Having completed all these steps, the life cycle will then begin again." }
          ]
        }
      ]}
    ]
  },

  /* ============ 23. Conclusion ============ */
  {
    id: "conclusion",
    title: "Conclusion",
    icon: "🏁",
    group: "Finish",
    hero: {
      icon: "🏁",
      title: "You've reached the end — now prove it",
      sub: "Take 20 minutes, pick any sample question, and write. Then rewrite it with new structures. That's the whole secret."
    },
    blocks: [
      { type: "stats", items: [
        { num: "4", label: "paragraphs, every time", tag: "Intro → Overview → Body → Body", tone: "blue" },
        { num: "3", label: "language skills: trends, comparison, data", tag: "all three, every report", tone: "green" },
        { num: "20", label: "minutes per practice report", tag: "rewrite after feedback", tone: "amber" },
        { num: "150+", label: "words minimum, aim for ~200", tag: "no penalty zone", tone: "purple" }
      ]},
      { type: "rules", items: [
        { title: "I can name all 6 diagram types", desc: "Line chart, bar chart, pie chart, table, map, process — and the language each needs.", tag: "DONE?", tone: "tip" },
        { title: "I can build a trend sentence", desc: "Direction + speed + data: \"Sales increased sharply from 10% to 25% between 1995 and 2000.\"", tag: "DONE?", tone: "tip" },
        { title: "I can write the overview formula", desc: "Overall + general trend + superlative/comparison. No numbers in the overview.", tag: "DONE?", tone: "tip" },
        { title: "I can rotate structures", desc: "There was a fall / 2010 saw a fall / sales experienced a fall — variety without new words.", tag: "DONE?", tone: "tip" },
        { title: "I can describe predictions", desc: "It is predicted that... / is expected to... / will have + V3 by (time).", tag: "DONE?", tone: "tip" }
      ]},
      { type: "remember", title: "The boring truth", desc: "Task 1 is 'boring technical writing' — and that's great news. No creativity required. Learn the formulas, practise them, and the band score follows. Good luck — you've got this!" }
    ]
  }
]);
