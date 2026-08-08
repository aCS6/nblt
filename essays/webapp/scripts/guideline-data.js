/**
 * IELTS Task 2 Guideline — interactive content built from
 * "IELTS Writing Task 2: The Ultimate Guide (Rachel Mitchell)".
 *
 * Lesson blocks (interactive):
 *   keyfacts  → stat cards           timeline  → 10/30/5 time plan
 *   structure → clickable essay map  flashcards → flip & self-score deck
 *   quiz      → instant-feedback MCQ mistakes → wrong/right swap cards
 *   synonyms  → matching game        sample   → model essay + examiner notes
 *   mnemonic  → memory hook          heading/text/bullets → reading
 */
const GUIDELINE = [
  /* ══════════════════════════════════════════════════════════════
     MODULE 1 — FOUNDATIONS
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'foundations',
    title: 'Foundations',
    icon: '🚀',
    color: 'indigo',
    tagline: 'Understand the exam before you write a word.',
    lessons: [
      {
        id: 'task2-basics',
        title: 'Task 2 Basics',
        emoji: '📋',
        duration: '4 min',
        blocks: [
          { type: 'heading', text: 'What is Task 2?' },
          { type: 'keyfacts', items: [
            { label: 'Minimum words', value: '250', note: 'Fewer words = ideas not explained well' },
            { label: 'Time allowed', value: '40 min', note: 'Task 2 is worth 2/3 of your writing score' },
            { label: 'Sweet spot', value: '260–290', note: 'Longer essays add grammar mistakes' },
            { label: 'Typical length', value: '4–5', note: 'Intro + 2 bodies + conclusion' },
          ]},
          { type: 'text', text: 'Task 2 is different from Task 1. In Task 1 everything comes from a graph or diagram — you need almost no ideas. Task 2 needs ideas, complex language, and strong organization. The language and grammar you need are more complicated, and every sentence must have its own purpose.' },
          { type: 'heading', text: 'The big idea' },
          { type: 'mnemonic', title: 'Think like an engineer', text: 'Every sentence has its own purpose. You are the engineer of your essay — plan each piece, make sure everything fits together, and keep it clear, organized and concise. You can still score high with a few grammar slips.' },
          { type: 'text', text: 'There are four common essay types in Task 2. The language and organization you choose depend on which type appears in the question.' },
          { type: 'bullets', items: [
            'Argument-led (evidence-led) — discuss two sides',
            'Thesis-led — give your own clear opinion',
            'Advantages & disadvantages — weigh both sides',
            'Problem & solution / Two-part question',
          ]},
          { type: 'quiz', id: 'quiz-basics', title: 'Quick check', questions: [
            { q: 'How many words must you write as a minimum?', options: ['150', '200', '250', '300'], answer: 2, explanation: 'Task 1 = 150 words, Task 2 = 250 words minimum. Write fewer and you lose marks because your ideas stay undeveloped.' },
            { q: 'Writing a very long essay (340+ words) is…', options: ['Always better', 'Risky — more grammar mistakes & less Task 1 time', 'Required by IELTS', 'Ignored by examiners'], answer: 1, explanation: 'Longer essays mean more mistakes, less time for Task 1, and harder reading for the examiner. Aim for 260–290 words.' },
            { q: 'Task 2 is worth what fraction of your writing score?', options: ['1/4', '1/2', '2/3', '3/4'], answer: 2, explanation: 'Task 2 counts for two-thirds of your overall writing band. Spend your 40 minutes wisely.' },
            { q: 'Which is NOT one of the four common Task 2 types?', options: ['Argument-led', 'Thesis-led', 'Descriptive diary entry', 'Problem & solution'], answer: 2, explanation: 'IELTS never asks for a personal diary. Stick to argument-led, thesis-led, advantages/disadvantages, and problem-solution / two-part essays.' },
          ]},
        ],
      },
      {
        id: 'time-management',
        title: 'Time Management',
        emoji: '⏱️',
        duration: '3 min',
        blocks: [
          { type: 'text', text: 'Time management is the easiest skill to ignore and the fastest way to fail both tasks. Divide your 40 minutes strictly — this formula keeps you from over-spending on one part.' },
          { type: 'timeline', id: 'tl-time', steps: [
            { time: '10 min', title: 'Planning', icon: '🧠', desc: 'Read the question. Decide your overall opinion. Note down ideas — both arguments and evidence.' },
            { time: '30 min', title: 'Writing', icon: '✍️', desc: 'Intro (5 min) → Body 1 (10 min) → Body 2 (10 min) → Conclusion (5 min).' },
            { time: '5 min', title: 'Checking', icon: '🔍', desc: 'Read through your writing. Look for mistakes and correct them.' },
          ]},
          { type: 'keyfacts', items: [
            { label: 'Writing pace', value: '10 wpm', note: 'Just 10 words per minute hits the 250-word minimum' },
            { label: 'Most important stage', value: 'Planning', note: 'The time before writing decides your band score' },
            { label: 'Biggest risk', value: 'Start early', note: 'Writing too soon → misunderstood question & bad structure' },
          ]},
          { type: 'text', text: 'It feels strange to spend so long preparing. But if you generate plenty of good ideas during planning, you will write a good essay quickly. Start writing too early and you risk misunderstanding the question, organizing badly, or running out of ideas — any of these means a low band score.' },
          { type: 'quiz', id: 'quiz-time', title: 'Time check', questions: [
            { q: 'What is the most important stage of the whole 40 minutes?', options: ['Planning', 'Writing body paragraphs', 'Checking', 'Choosing a title'], answer: 0, explanation: 'Rachel: "the most important stage is actually the amount of time you spend on planning before writing your essay."' },
            { q: 'Which is the correct minute split for writing?', options: ['Intro 5 · Body1 10 · Body2 10 · Conclusion 5', 'Intro 10 · Body1 10 · Body2 5 · Conclusion 5', 'Intro 15 · Body1 10 · Body2 5', 'Intro 5 · Body1 15 · Body2 5 · Conclusion 5'], answer: 0, explanation: '5 + 10 + 10 + 5 = 30 minutes of writing, after 10 minutes of planning and 5 of checking.' },
            { q: 'At what speed do you need to write to reach 250 words?', options: ['5 words per minute', '10 words per minute', '25 words per minute', '50 words per minute'], answer: 1, explanation: '250 words in 25 minutes of actual writing ≈ 10 words per minute. That is very achievable.' },
          ]},
        ],
      },
      {
        id: 'essay-types-map',
        title: 'The 4 Essay Types Map',
        emoji: '🗺️',
        duration: '5 min',
        blocks: [
          { type: 'text', text: 'IELTS will never announce the essay type. You read the question and decide the best structure yourself. That is where your flexibility and judgment come in.' },
          { type: 'structure', id: 'map-types', note: 'Tap each type to see its DNA.', parts: [
            { label: 'Argument-led', icon: '⚖️', color: 'violet', desc: 'Judge in a courtroom. Introduce the topic + two impersonal sides, then give one body paragraph per side, then conclude by summarizing both.' },
            { label: 'Thesis-led', icon: '🎯', color: 'indigo', desc: 'Lawyer arguing one side. Context + personal opinion up front. Body paragraphs support YOUR decision. Conclusion restates it.' },
            { label: 'Advantages & Disadv.', icon: '📊', color: 'green', desc: 'Intro says what the debate is about. Body 1 lists 2–3 advantages, Body 2 lists 2–3 disadvantages. Conclusion weighs them.' },
            { label: 'Problem & Solution', icon: '🛠️', color: 'amber', desc: 'Intro presents the problem. Body paragraphs pair problems with solutions (either all problems, then all solutions — or problem+solution per paragraph).' },
          ]},
          { type: 'quiz', id: 'quiz-types', title: 'Type detective', questions: [
            { q: '"Some people believe studying at university is best, while others believe getting a job straight after school is better. Discuss both views." → type?', options: ['Argument-led', 'Thesis-led', 'Problem & solution', 'Advantages'], answer: 0, explanation: '"Discuss both views" with no personal opinion demanded → argument-led: present both sides neutrally.' },
            { q: '"To what extent do you agree or disagree?" → type?', options: ['Argument-led', 'Thesis-led', 'Two-part question', 'Advantages'], answer: 1, explanation: 'Agree/disagree questions force a personal opinion → thesis-led (lawyer, not judge).' },
            { q: '"Do the advantages outweigh the disadvantages?" → type?', options: ['Advantages & disadvantages', 'Argument-led', 'Problem & solution', 'Thesis-led'], answer: 0, explanation: 'The question literally names advantages and disadvantages — weigh them, then reach a verdict.' },
            { q: '"Why do people buy imported food? What could be done to encourage buying local?" → type?', options: ['Two-part question', 'Argument-led', 'Thesis-led', 'Advantages'], answer: 0, explanation: 'Two separate questions, each answered in its own body paragraph → two-part essay.' },
          ]},
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     MODULE 2 — KILLER MISTAKES
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'mistakes',
    title: 'Killer Mistakes',
    icon: '⛔',
    color: 'rose',
    tagline: 'Erase the habits that quietly destroy your band.',
    lessons: [
      {
        id: 'writing-rules',
        title: 'Writing Rules That Save You',
        emoji: '🚫',
        duration: '6 min',
        blocks: [
          { type: 'text', text: 'These are the rules Rachel hammers into every student. They are tiny, but each one protects your score. Flip through the mistake cards and self-score each one.' },
          { type: 'flashcards', id: 'fc-rules', intro: 'Say the corrected rule out loud before you flip each card.', cards: [
            { front: 'Using "(...)" / "etc." in a list', back: 'Forbidden. Use the pattern A and B, A, B and C, or A, B, C and D. ✔ "unemployment, crime and pollution"' },
            { front: 'Asking questions in the essay', back: 'Never. "How do you think we can solve overcrowding?" is an essay-killer. No question marks anywhere.' },
            { front: 'Using exclamation points', back: 'Never yell at the reader. "In my opinion, it\'s the best solution!" → rewrite as a calm statement.' },
            { front: '"More and more people…"', back: 'Too informal. Use trend language: "increasing numbers of people…", "a growing number of…", "the number of X has increased tremendously…"' },
            { front: 'Starting sentences with And / But / Or', back: 'Use academic linkers instead: In addition / Furthermore / However / Since / As a result.' },
            { front: 'Using contractions', back: 'None allowed. shouldn\'t → should not, can\'t → cannot, wouldn\'t → would not.' },
            { front: 'Saying "when you go abroad…"', back: 'No pronouns (you, we, I, us) in body paragraphs. Use "when a student goes abroad, they…" or switch to passive voice.' },
            { front: 'Using absolute words', back: 'Avoid all, every, none, only, always, never, completely, totally. No 100% / 0% claims in academic writing.' },
            { front: 'Using "thing" vaguely', back: '"…experience many different things" → name them: "…experience new cultures and make new friends." Always give specifics.' },
          ]},
          { type: 'heading', text: 'Two words people mix up' },
          { type: 'text', text: 'MOST is an adjective (greatest quantity) → followed by a noun or phrase: "Most people", "most of my friends", "the most popular". ALMOST is an adverb (very nearly — close but NOT total): "almost finished", "almost every house", "almost all of the students".' },
          { type: 'mnemonic', title: 'Mnemonic', text: 'MOST = Many (countable quantity). ALMOST = ALMOST there (nearly, not quite).' },
        ],
      },
      {
        id: 'grammar-essentials',
        title: 'Grammar Essentials',
        emoji: '🔤',
        duration: '6 min',
        blocks: [
          { type: 'text', text: 'These are the elementary mistakes Rachel says students "cannot still be making". They are the fastest way to lose marks — and the easiest to fix.' },
          { type: 'mistakes', items: [
            { bad: 'She play football every week.', good: 'She plays football every week.', reason: 'Subject–verb agreement: He/she/it → plays, does, receives, negotiates.' },
            { bad: 'People use a computer in their office every day.', good: 'People use computers in their offices every day.', reason: 'Speaking in general → use the plural form.' },
            { bad: 'I need informations about this course.', good: 'I need information about this course.', reason: 'No such word as "informations". Same for equipments, knowledges, advices.' },
            { bad: 'When you go abroad, you will experience new cultures.', good: 'When a student goes abroad, they experience new cultures.', reason: 'Keep personal pronouns out of body paragraphs.' },
            { bad: 'The amount of pollution affect public health.', good: 'The amount of pollution affects public health.', reason: 'Check every verb against its subject — "amount" is singular.' },
            { bad: 'I will discuss the pros and cons in this essay.', good: 'This essay will show both the positive and negative sides…', reason: 'Never announce your plan — write a concise thesis statement instead.' },
          ]},
          { type: 'heading', text: 'Which tense wins?' },
          { type: 'text', text: 'The vast majority of the time you use the PRESENT tense — present simple, present perfect, present continuous. Rarely past, occasionally future, and modal verbs for possibility. Think present first, always.' },
          { type: 'text', text: 'Articles (a, an, the, no article) are the third big elementary mistake. The best way to master them is not theory — it is reading lots of accurate, native writing and noticing how articles are used.' },
          { type: 'quiz', id: 'quiz-grammar', title: 'Spot the fix', questions: [
            { q: 'Which is the correct general statement?', options: ['People use computers in their offices every day.', 'People use a computer in their office every day.', 'The people uses computers in the office every day.', 'People use computers in their office every days.'], answer: 0, explanation: 'General statements take plurals: "People use computers in their offices…"' },
            { q: 'Which sentence is NOT acceptable in Task 2?', options: ['It is undeniable that TV has both positive and negative effects.', 'How can we solve the problem of overcrowding?', 'In my opinion, shopping online is very convenient.', 'This may lead to crime, congestion and pollution.'], answer: 1, explanation: 'No questions in your essay — the examiner is not your audience for rhetorical questions.' },
            { q: 'What is the smartest rule about articles?', options: ['Memorize every grammar rule first', 'Read lots of accurate native writing and notice usage', 'Never use articles', 'Use "a" before every noun'], answer: 1, explanation: 'Articles are a foreign concept for many learners — the best teacher is exposure to accurate writing.' },
            { q: 'Your essay should mostly use…', options: ['Past simple', 'Present tenses', 'Future perfect', 'Conditional only'], answer: 1, explanation: 'The overwhelming majority of Task 2 writing uses the present tense family.' },
          ]},
        ],
      },
      {
        id: 'organization-voice',
        title: 'Organization & Voice',
        emoji: '🧭',
        duration: '5 min',
        blocks: [
          { type: 'text', text: 'Organization is HUGE in Task 2. The examiner grades how well your paragraphs signal and develop ideas — not how clever your vocabulary is.' },
          { type: 'flashcards', id: 'fc-org', intro: 'Guess the rule, then flip.', cards: [
            { front: 'The first sentence of each body paragraph should be…', back: 'A TOPIC SENTENCE — its number one job is to signal what the reader is about to read in that paragraph.' },
            { front: 'Personal opinions (I think, I believe, in my opinion) belong…', back: 'Only in the introduction (thesis-led) or the conclusion. Body paragraphs use impersonal opinions: "some people think…", "many people claim that…".' },
            { front: 'You are writing from…', back: 'A global perspective, not your country. "traffic in your city" → "traffic in urban areas around the world".' },
            { front: 'Linking words should appear…', back: 'At the start of all body paragraphs and the conclusion. Keep sentences short and well-linked. E.g. Firstly, on the one hand, in summary.' },
            { front: 'In the introduction you should NOT…', back: 'Tell the reader what you are going to do. "In this essay I will discuss…" is banned. Use a concise thesis statement instead.' },
          ]},
          { type: 'mnemonic', title: 'Judge vs Lawyer', text: 'Argument-led = JUDGE (hear both sides fairly). Thesis-led = LAWYER (defend your one side with conviction). Pick your role from the question first.' },
          { type: 'text', text: 'The first sentence of the introduction is a general, true statement that tells the reader the topic — no opinion yet. "In recent times, increasing numbers of students go abroad for university study." True? Yes. That is your context statement.' },
          { type: 'quiz', id: 'quiz-org', title: 'Voice check', questions: [
            { q: 'Where do impersonal opinions like "some people argue that…" belong?', options: ['Body paragraphs', 'Nowhere', 'Only in the title', 'The last sentence of the essay'], answer: 0, explanation: 'Body paragraphs carry other people\'s opinions; your own opinion lives in the intro (thesis-led) and conclusion.' },
            { q: 'Which introduction is better?', options: ['"In this essay I will discuss the advantages and disadvantages of studying abroad."', '"This essay will show both the positive and negative benefits of studying abroad."', '"Hello examiner, let me tell you about studying abroad."', '"Studying abroad has many pros and cons, as I will now explain to you."'], answer: 1, explanation: 'Never announce the plan. A concise thesis statement shows organization without the filler.' },
            { q: 'Your topic sentence mainly needs to…', options: ['Sound beautiful', 'Signal what the paragraph is about', 'Contain a difficult word', 'Summarize the whole essay'], answer: 1, explanation: 'Its number one job is to send the signal to the reader about the paragraph\'s content.' },
          ]},
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     MODULE 3 — ESSAY TYPES
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'essay-types',
    title: 'Essay Types Deep-Dive',
    icon: '🧱',
    color: 'violet',
    tagline: 'Master each structure with a model essay.',
    lessons: [
      {
        id: 'argument-led',
        title: 'Argument-Led (Evidence-Led)',
        emoji: '⚖️',
        duration: '8 min',
        blocks: [
          { type: 'text', text: 'Think of yourself as a JUDGE in a courtroom. You will hear an argument between two sides and stay neutral. No personal opinion — ever.' },
          { type: 'structure', id: 'map-argument', note: 'The argument-led blueprint — 4 parts.', parts: [
            { label: 'Introduction', icon: '1️⃣', color: 'indigo', desc: 'Context (general true statement) + signal two sides: "Some people think this brings disadvantages. However, other people claim it brings many benefits."' },
            { label: 'Body 1', icon: '2️⃣', color: 'violet', desc: 'Reasons supporting ONE side. Topic sentence + argument + evidence (examples, explanations).' },
            { label: 'Body 2', icon: '3️⃣', color: 'violet', desc: 'Reasons supporting the OTHER side. Topic sentence + argument + evidence.' },
            { label: 'Conclusion', icon: '4️⃣', color: 'green', desc: 'Paraphrase the topic sentence of the introduction and summarize BOTH opinions. No new ideas.' },
          ]},
          { type: 'text', text: 'When you give two impersonal opinions in the introduction, you are signaling "I have not chosen a side — I will look at both." The examiner immediately knows the essay will cover both perspectives fairly.' },
          { type: 'sample', question: 'Some people believe that studying at university or college is the best route to a successful career, while others believe that it is better to get a job straight after school. Discuss both views.', essayType: 'Argument-led', words: '270 words', paragraphs: [
            'Right after finishing high school, teenagers often wonder whether they ought to continue their education or get a job. While many people believe that keeping on studying at a college or university will be the best way to guarantee a successful career, others claim that working straight after school is a better option.',
            'Start working straight after graduation is beneficial for several reasons. Firstly, by working, young people will be able to start earning money as soon as possible. As a result, they will be mature enough, and be able to live independently on their own income. Secondly, a person who decides to look for a job rather than pursuing higher education is likely to have a chance to obtain a lot of real experience and practical skills. This may lead them to progress more quickly in their chosen profession.',
            'On the other hand, some people argue that it is more beneficial for young people to continue their studies after high school. Firstly, a college education prepares students to meet academic qualifications, which most employers require nowadays. Consequently, university graduates usually have opportunities to earn higher salaries than those without qualifications. In addition, the job market is becoming increasingly competitive since hundreds of applicants often chase one position in an organization. Having a degree is an obvious advantage that university graduates have. In many countries, students who graduate with an engineering degree are highly paid and have an easy time getting a good job.',
            'In conclusion, it is true to say that both working straight after high school and continuing higher-level studies each has their own unique advantages.',
          ], comments: [
            { band: 'Task Response', score: '✓', text: '270 words — long enough! Aim 260–290 to be safe. The first paragraph paraphrases the whole question. All points are relevant and well supported with examples and explanations.' },
            { band: 'Coherence & Cohesion', score: '✓', text: 'Clear overall progression, well-organized ideas, well-constructed paragraphs and sentences, good topic sentences, and a range of linkers.' },
            { band: 'Lexical Resource', score: '✓', text: 'Very good vocabulary range: guarantee a successful career, to live independently, pursuing higher education, to obtain real experience, progress rapidly, to meet academic qualifications.' },
            { band: 'Grammar', score: '✓', text: 'A good range of structures used accurately. No errors detected.' },
          ]},
          { type: 'quiz', id: 'quiz-argument', title: 'Judge check', questions: [
            { q: 'What role do you play in an argument-led essay?', options: ['A lawyer defending one side', 'A judge hearing two sides', 'A witness giving facts', 'A jury voting'], answer: 1, explanation: 'Judge = neutral, hear both sides, decide nothing personal. That is the argument-led mindset.' },
            { q: 'Where does your personal opinion appear?', options: ['Nowhere', 'In every body paragraph', 'In the title', 'In the conclusion only'], answer: 0, explanation: 'In a pure argument-led essay you present both sides and never take sides — not even in the conclusion.' },
          ]},
        ],
      },
      {
        id: 'thesis-led',
        title: 'Thesis-Led Essay',
        emoji: '🎯',
        duration: '8 min',
        blocks: [
          { type: 'text', text: 'Now you are a LAWYER, not a judge. You have already made your decision — the essay defends one side with conviction.' },
          { type: 'structure', id: 'map-thesis', note: 'Same intro as argument-led… but then you take a side.', parts: [
            { label: 'Introduction', icon: '1️⃣', color: 'indigo', desc: 'Context + (optional impersonal side) + PERSONAL OPINION. "Some people think X brings advantages. However, I believe that it causes a lot of problems."' },
            { label: 'Body 1', icon: '2️⃣', color: 'violet', desc: '2–3 points supporting YOUR opinion. Each point = smaller supportive paragraph.' },
            { label: 'Body 2', icon: '3️⃣', color: 'violet', desc: '2–3 more points supporting YOUR opinion. No personal opinion words in the bodies — use impersonal framing.' },
            { label: 'Conclusion', icon: '4️⃣', color: 'green', desc: 'Rephrase + summarize your points. Restate the personal opinion.' },
          ]},
          { type: 'flashcards', id: 'fc-thesis', intro: 'Core thesis-led moves to memorize.', cards: [
            { front: 'Thesis-led writers use which metaphor?', back: 'A LAWYER — defend your chosen side. You made a decision; now prove it.' },
            { front: 'Concession & contrast structure', back: '"It is true that people make more money. However, there are still a lot of poor people in the world." True + However = concession & contrast.' },
            { front: 'Do you need examples?', back: 'Only if you are a strong writer scoring over 300 words in 40 minutes. Otherwise focus on accurate, clear points.' },
            { front: 'Use might / may / could / can to…', back: 'Show possibility, not certainty. Avoid statements that sound 100% or 0%. "A wealthy system could be very beneficial…"' },
            { front: 'The first sentence of every paragraph should…', back: 'Tell the reader the topic AND what you think about the topic.' },
          ]},
          { type: 'sample', question: 'Some people say that what children watch influences their behavior. Others believe the amount of time they spend on television influences their behavior most. Discuss both views and give your opinion.', essayType: 'Thesis-led', words: '360 words', paragraphs: [
            'While it is true that watching TV affects children, it is difficult to determine whether it is the content of the programs or the length of time spent watching them that has a more significant impact on children. It seems to me that although the amount of time does affect youngsters, it is the content of the programs that has a more marked influence on them.',
            'On the one hand, the consequences of watching TV for long periods of time can be deleterious. Firstly, the longer children are exposed to TV programs, the more likely it is for them to become addicted to watching television. When children become over-reliant on television for entertainment, they might neglect engagement in outdoor activities. This may result in a sedentary lifestyle that is highly detrimental to their physical health. More importantly, excessive TV watching impairs children’s communication abilities, so they find it hard to play or live in harmony with others. As a result, children would feel discouraged from having real interactions with people around them if they spent a huge amount of time in front of the screen, which may hinder their development of social skills.',
            'On the other hand, it is the broadcasted images that have the most direct effects on young viewers. Firstly, in most countries the majority of TV shows present glamorized depictions of inappropriate materials such as violence, drug abuse or casual sex, thus youngsters may adopt unhealthy habits and improper behavior. For example, they might fall under the impression that the use of alcoholic drinks is fashionable without being aware of the health risks they carry and later end up consuming these substances. Besides, in our modern consumer society, commercials also affect how children behave. Unwary young viewers could be easily swayed by captivating advertisements for junk food or video games, products whose target audience includes children, and so may pester their parents to buy these goods impulsively.',
            'In conclusion, although both factors have their own implications, I believe the element with more considerable impacts on children is the content. Hence, parental involvement is essential in controlling children’s TV viewing habits and in shaping a child’s values to help them enter adult life with a healthy mind.',
          ], comments: [
            { band: 'Task Response', score: '8.5', text: 'Question answered fully. Position stated clearly in the introduction and consistently throughout. Ideal places to restate opinion at the start of paragraph 3 and in the conclusion.' },
            { band: 'Coherence & Cohesion', score: '9', text: 'Clear, logical paragraph structure. Topic sentences expertly indicate the central idea of each paragraph.' },
            { band: 'Lexical Resource', score: '✓', text: 'Natural and appropriate. Good topic vocabulary: become addicted to watching television, over-reliant on television for entertainment, engagement in outdoor activities, live in harmony with others, etc.' },
            { band: 'Grammar', score: '✓', text: 'Good range including adverb clauses, relative clauses, conditional forms, comparatives and other constructions. Maximum score.' },
          ]},
          { type: 'sample', question: 'Some people believe that people have the right to university education, and government should make it free no matter what their financial background. To what extent do you agree or disagree?', essayType: 'Thesis-led', words: '297 words', paragraphs: [
            'It is true that some people argue for the universal right to free university education. While I accept that this may suit many people, I believe that it is impractical for governments to implement such a policy.',
            'On the one hand, it is not a practical dream to expect government authorities to fund higher education for those poorer sections of society, with low incomes and no savings. Without such funding, people from poor backgrounds would be unable to attend university. As a result, they would be excluded from many well-paid careers as engineers, doctors or lawyers. Social inequalities would be perpetuated and society as a whole would suffer, since those from low-income backgrounds would have no opportunity to develop their talents. The example of the US, during the struggle for civil rights for blacks and other minorities, shows the folly of denying equal educational opportunities for the poor.',
            'On the other hand, there would be an enormous strain on government budgets if free access to university were a right for everyone. At its simplest, people from rich families can afford to pay tuition fees and for their own maintenance during their studies. Attendance at university is a privilege, not a right, and if students can afford to pay for their studies, they should do so. In practical terms, governments cannot pay for the rich as well as the poor. Governments are faced with practical decisions on how to allocate their finite budgets, and funding free higher education for everyone would mean less money to spend on pressing issues such as health care or the environment.',
            'In conclusion, I disagree with the view that free higher education should be a right for everyone in society, and funding should be limited to those who otherwise could not afford to attend university.',
          ]},
          { type: 'sample', question: 'Schools should not force children to learn a foreign language. To what extent do you agree with this statement?', essayType: 'Thesis-led', words: '292 words', paragraphs: [
            'It is true that some people argue that a foreign language should not be one of the compulsory subjects studied in schools. While I believe that it is useful for schoolchildren to learn a foreign language, I completely agree that they should not be forced to do so.',
            'On the one hand, it will benefit the education of most children if they are encouraged to learn a foreign language during their school years. Firstly, through studying the language they will learn about the culture of that country, and some schools even arrange exchange visits, to enable students to briefly immerse themselves in the culture of the foreign country whose language they are learning. Secondly, children can access information in another language. For example, if they are studying English, they can enjoy websites which are only available in English on any topic in which they are interested. Finally, children can be encouraged to learn a foreign language through the range of enjoyable and fun materials available nowadays, especially interactive online learning.',
            'On the other hand, it would be counterproductive to forcibly oblige schoolchildren to learn a foreign language. One reason is that children will not learn effectively through compulsion alone. They must be motivated to do so and this is only achieved through enthusiastic teachers who select stimulating language-learning activities. Another reason is that schoolchildren will be reluctant to learn a foreign language if they cannot see why it might be relevant to their present or future lives. For example, individual Vietnamese pupils should not be forced to learn English if they are certain that they will never need or want to use it in the future.',
            'In conclusion, I would argue that schools should encourage, but not compel, children to learn a foreign language.',
          ]},
          { type: 'quiz', id: 'quiz-thesis', title: 'Lawyer check', questions: [
            { q: 'The thesis-led conclusion should…', options: ['Introduce a new counter-argument', 'Restate the topic and summarize YOUR points', 'Ask the reader a question', 'List every example again'], answer: 1, explanation: 'Rephrase yourself, summarize your points, restate the opinion. Nothing new.' },
            { q: 'When is it safe to include examples?', options: ['Always — examples never hurt', 'Only if you can write 300+ words accurately', 'Never in Task 2', 'Only in the conclusion'], answer: 1, explanation: 'Rachel: avoid many specific examples unless you are a strong writer who can stay accurate and hit 300 words.' },
          ]},
        ],
      },
      {
        id: 'advantages',
        title: 'Advantages & Disadvantages',
        emoji: '📊',
        duration: '6 min',
        blocks: [
          { type: 'text', text: 'The question literally asks you to weigh advantages against disadvantages — for example "Do the advantages outweigh the disadvantages?" You give a verdict after weighing both.' },
          { type: 'structure', id: 'map-advantages', note: 'A balance sheet in four paragraphs.', parts: [
            { label: 'Introduction', icon: '1️⃣', color: 'indigo', desc: 'Introduce the topic + say what the discussion is about (the two sides: advantages & disadvantages).' },
            { label: 'Body 1 — Advantages', icon: '2️⃣', color: 'green', desc: 'Topic sentence + Argument 1 + Evidence 1 + Argument 2 + Evidence 2 (2–3 advantages).' },
            { label: 'Body 2 — Disadvantages', icon: '3️⃣', color: 'rose', desc: 'Topic sentence + Argument 1 + Evidence 1 + Argument 2 + Evidence 2 (2–3 disadvantages).' },
            { label: 'Conclusion', icon: '4️⃣', color: 'green', desc: 'Summarize the key arguments by paraphrasing. No new information. Give your verdict on which side wins.' },
          ]},
          { type: 'text', text: 'Evidence can be examples, explanations, facts or consequences. A pro tip: when giving evidence, start general, then go more specific.' },
          { type: 'sample', question: 'International travel has many advantages to both travelers and the country that they visited. Do Advantages outweigh the disadvantages?', essayType: 'Advantages & Disadvantages', words: '277 words', paragraphs: [
            'It is true that the growth of the international travel industry has brought many benefits to both travelers and the host nations which receive them. While there are serious negative consequences of this development, I would argue that these are outweighed by the advantages.',
            'On the one hand, there are some aspects of international travel. Principally the tourist trade, which raises cause for concern. In terms of the tourists themselves, they often arrive at an overseas destination only to find that the prices of everything are grossly inflated. They may be overcharged for everything from a taxi, a meal in a restaurant or buying a souvenir. In terms of the host country, the problems of waste disposal, pollution and unregulated construction of hotels and tourist attractions often result in permanent damage to the environment. Many beach resorts in Thailand and Malaysia, for example, have become "concrete jungles" of high-rise hotels and apartments to accommodate mass tourism from Europe.',
            'On the other hand, despite such grave issues, these are not insurmountable and must be considered against the advantages of the growing international travel industry. Firstly, there is ever-greater competition among tour operators to provide value for money holidays, so that holiday-makers can enjoy their experience of a foreign country and culture to the full. Secondly, the influx of foreign tourists brings money to the host country through the provision of jobs and services for the developing hotel and construction industries. Employees in these sectors generally benefit from higher wages and improved living standards.',
            'In conclusion, I believe that the advantages of international travel for both travelers and host countries are greater than the drawbacks, serious though these are.',
          ]},
          { type: 'quiz', id: 'quiz-advantages', title: 'Balance check', questions: [
            { q: 'Body paragraph 1 in an advantages/disadvantages essay covers…', options: ['Disadvantages', 'Advantages', 'Your opinion', 'Solutions'], answer: 1, explanation: 'Structure: Body 1 = 2–3 advantages, Body 2 = 2–3 disadvantages, then a verdict in the conclusion.' },
            { q: 'The conclusion should…', options: ['Introduce a brand-new idea', 'Summarize key arguments, paraphrased, with no new info', 'Reuse your introduction word-for-word', 'Skip straight to examples'], answer: 1, explanation: 'Paraphrase the key arguments and state which side wins. No new information, ever.' },
            { q: 'Arguments are introduced using…', options: ['Personal opinions only', 'Impersonal opinions', 'Exclamation points', 'Questions'], answer: 1, explanation: 'Use impersonal opinions like "it is often claimed that…" to introduce each side.' },
          ]},
        ],
      },
      {
        id: 'two-part',
        title: 'Two-Part Question',
        emoji: '🔢',
        duration: '6 min',
        blocks: [
          { type: 'text', text: 'The question asks two separate questions about one topic. Your introduction must contain at least three pieces of information, and each body paragraph answers exactly one question.' },
          { type: 'structure', id: 'map-twopart', note: 'Two questions → two bodies.', parts: [
            { label: 'Introduction', icon: '1️⃣', color: 'indigo', desc: 'Tell the reader what you are writing about + answer Question 1 (personal opinion) + answer Question 2 (personal opinion). At least 3 pieces of info.' },
            { label: 'Body 1', icon: '2️⃣', color: 'violet', desc: 'Answer question 1 in detail — reasons + evidence.' },
            { label: 'Body 2', icon: '3️⃣', color: 'violet', desc: 'Answer question 2 in detail — reasons + evidence.' },
            { label: 'Conclusion', icon: '4️⃣', color: 'green', desc: 'Repeat the opinions given in the introduction.' },
          ]},
          { type: 'sample', question: 'In many countries, more and more people choose to buy imported food rather than food produced locally. Why do people buy imported food? What could be done to encourage people to buy local food?', essayType: 'Two-part question', words: '294 words', paragraphs: [
            'It is true that the consumption of imported food has increased in recent years. There are some factors which help to account for this trend, but measures can be implemented to encourage more people to eat food which is grown locally.',
            'In many countries, people are buying more imported food and there are a number of reasons to explain why this is happening. Firstly, the attractive marketing and presentation of imported food products give them an appealing and appetizing appearance. Consumers then come to expect certain high standards of packaging, so that food looks tasty, safe, hygienic and, in the case of some products, easy to prepare.',
            'Secondly, the availability of a wide range of imported food enables people to vary their diet and experiment with new recipes. This may provide a welcome change from eating the same meals every day, which inevitably becomes tedious and no longer stimulates the taste buds.',
            'It is possible, however, to take steps to encourage the consumption of locally produced food. Local growers should ensure that their products always look clean and fresh. In Vietnam, for example, all the fruit and vegetables, meat and fish on display at local markets must be presented in scrupulously hygienic conditions, protected by plastic wrapping to keep away dust or flies. The government should enforce strict food safety regulations. Another measure could be to increase the variety of food produced by local farmers, which would then eliminate the need to import those foods from other countries. This would stimulate the local economy and reduce the environmental costs of transportation known as food miles.',
            'In conclusion, while are some obvious reasons to explain the rise in popularity of imported food, some simple measures should be adopted by local food growers to meet this challenge.',
          ]},
          { type: 'sample', question: 'Today, more people are traveling than ever before. Why is this the case? What are the benefits of traveling for the traveler?', essayType: 'Two-part question', words: '299 words', paragraphs: [
            'It is true that in many countries the number of people traveling has increased over recent years. There are reasons which can be identified to account for this trend and travelers undoubtedly benefit from the chance to travel more frequently and to visit even the most far-flung destinations.',
            'At least two important factors help to explain why an increasing number of people are now able to enjoy domestic and international travel. Firstly, growing prosperity and a rise in living standards in many countries have enabled people to enjoy things which they could never have before. With greater disposable income, family luxuries such as holidays have now become affordable. Secondly, competition among tour operators has reduced the cost of traveling. Only a few decades ago, for example, budget airlines did not exist, but now they are used by millions of passengers each year.',
            'In my view, in the case of both domestic and international travel, there are clear advantages for travelers. People now have a wide choice of places to go and things to see and do. They are now able to experience other parts of their own countries or to enjoy the richness of unfamiliar and, sometimes, exotic destinations. Thailand, for instance, is immensely popular with tourists from all over the world, including Vietnam. Visitors enjoy not only the unique cuisine but also the rich historical heritage of Thai temples and traditions. Another advantage for many people, now that travel is less costly, is the chance to be reunited with family members who have moved abroad because of work, study or simply in search of a better life. Family ties can be maintained and strengthened thanks to the greater opportunities to travel.',
            'In conclusion, there are clear reasons why more people are traveling and there are obvious advantages for travelers.',
          ], comments: [
            { band: 'Task Response', score: '9', text: 'Excellent, interesting essay. Paragraph 2 gives two relevant reasons, fully explained, second supported with an example. Paragraph 3 focuses exclusively on positive impacts with real-life examples. Score 9.' },
            { band: 'Coherence & Cohesion', score: '9', text: 'Ideal topic sentences that identify arguments perfectly; sentences linked very smoothly.' },
            { band: 'Lexical Resource', score: '✓', text: 'Strong collocations: far-flung destinations, have a wide choice of places to go, to be immensely popular with…' },
            { band: 'Grammar', score: '✓', text: 'A range of structures, both simple and complex. As with lexis, strong.' },
          ]},
        ],
      },
      {
        id: 'problem-solution',
        title: 'Problem & Solution',
        emoji: '🛠️',
        duration: '7 min',
        blocks: [
          { type: 'text', text: 'Introduce the problem with context, then give solutions. Two clean structures exist — pick one and stay consistent.' },
          { type: 'structure', id: 'map-problem', note: 'Two valid structures — choose one.', parts: [
            { label: 'Structure A', icon: 'A', color: 'indigo', desc: 'Body 1 = Problem 1 + Problem 2. Body 2 = Solution 1 + Solution 2.' },
            { label: 'Structure B', icon: 'B', color: 'violet', desc: 'Body 1 = Problem 1 + Solution 1. Body 2 = Problem 2 + Solution 2.' },
            { label: 'Introduction', icon: '1️⃣', color: 'amber', desc: 'Context that presents the problem. Example: "Nowadays, the number of vehicles in cities has increased tremendously. As a result, pollution is causing serious health problems."' },
            { label: 'Conclusion', icon: '2️⃣', color: 'green', desc: 'Context + summarize the problem + summarize the solutions. Optional: end with a prediction.' },
          ]},
          { type: 'heading', text: 'Conditional grammar for solutions' },
          { type: 'flashcards', id: 'fc-conditionals', intro: 'Memorize all four patterns — they are interchangeable.', cards: [
            { front: 'Type 1 — If A, then B', back: '"If the government invests in public transportation, then pollution levels will decline."' },
            { front: 'Type 2 — B, if A', back: '"Pollution levels will decline if the government invests in public transportation."' },
            { front: 'Type 3 — Unless A, not B', back: '"Unless governments invest in public transportation, there won\'t be a reduction in pollution."' },
            { front: 'Type 4 — Not A, unless B', back: '"There won\'t be a reduction in pollution unless governments invest in public transportation."' },
          ]},
          { type: 'sample', question: 'The gap between the rich and the poor is increasingly wide, as rich people become richer and poor people grow poorer. What problems could this situation cause? What are the solutions to address those problems?', essayType: 'Problem & Solution', words: '293 words', paragraphs: [
            'It is true that the gap between the rich and the poor is growing wider in many regions of the world. While the problems that result are complex, fundamental solutions based on expanding education should be adopted to tackle this problem.',
            'Increasing levels of poverty and rising wealth inequalities impact on the economic growth of a country and the security of its citizens. In economic terms, the existence of a large mass of unemployed or low-paid workers directly affects domestic businesses, such as local shops and factories. As nobody has money to buy their products, they are themselves forced to close, creating further unemployment. In terms of public security, without the means of obtaining money through work, the poor may turn to crimes such as drug trafficking, prostitution, robbery and violent attacks on others. Youth unemployment has, in particular, been linked with rising crime rates.',
            'Governments must, therefore, expand educational opportunities to benefit all their citizens, in order to reduce the gap between the rich and the poor. The provision of a better standard of schooling in slum areas of cities and in poor rural regions would enable children to reach a higher level of educational attainment. Grants and scholarships could be used to help students to remain in education for longer and gain qualifications. In particular, technical education could be expanded, helping poorer children to learn trades. In construction, engineering, and agriculture, a highly-educated workforce will be needed in the future, and skilled workers will be able to command high salaries and enjoy a decent standard of living. As work opportunities improve, crime rates will fall.',
            'Thus, dealing with the problem at its roots, by expanding educational opportunities, the authorities would be able to reduce the gap between the wealthy and poor sectors of society.',
          ], comments: [
            { band: 'Task Response', score: '✓', text: 'Well-developed, with relevant, extended and supported ideas. Correctly focused on only two important reasons in paragraph 2.' },
            { band: 'Coherence & Cohesion', score: '✓', text: 'Well-organized; logical paragraph structure supported by precise topic sentences and clearly identified arguments. Sentences well-linked.' },
            { band: 'Lexical Resource', score: '✓', text: 'Excellent vocabulary: rising wealth inequalities impact on the economic growth…, the poor may turn to crimes such as drug trafficking, prostitution, robbery…' },
            { band: 'Grammar', score: '✓', text: 'Strong range including a second conditional, relative clauses, and consistently correct modal auxiliary verbs.' },
          ]},
          { type: 'quiz', id: 'quiz-problem', title: 'Solution check', questions: [
            { q: 'Which of these is a correct conditional pattern?', options: ['If A…, then B…', 'B… if A', 'Unless A…, not B', 'All of the above'], answer: 3, explanation: 'All four forms are valid and interchangeable — memorize the family.' },
            { q: 'The conclusion of a problem-solution essay should…', options: ['Introduce a new problem', 'Summarize the problem + solutions, optionally with a prediction', 'Only restate the introduction verbatim', 'End with a rhetorical question'], answer: 1, explanation: 'Context + summarize problem + summarize solutions. Add a prediction only if you have time.' },
            { q: 'Which conclusion pattern does Rachel recommend for a 4-sentence ending?', options: ['Context + problem + solution + prediction', 'Problem + problem + problem', 'Opinion + opinion + opinion', 'Example + example + summary'], answer: 0, explanation: '"In conclusion, the large number of vehicles is reducing people\'s health. Governments should spend more on public transport, and people must use it. Unless we act, it\'s likely we won\'t see any reduction."' },
          ]},
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     MODULE 4 — LANGUAGE BANK
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'language',
    title: 'Language Bank',
    icon: '💬',
    color: 'cyan',
    tagline: 'Memorize the exact phrases — recycled on exam day.',
    lessons: [
      {
        id: 'opinion-phrases',
        title: 'Opinion Phrases',
        emoji: '🗣️',
        duration: '5 min',
        blocks: [
          { type: 'text', text: 'Split your opinions into two drawers: IMPERSONAL (for body paragraphs) and PERSONAL (for intro/conclusion). Mixing them is a classic band-killer.' },
          { type: 'flashcards', id: 'fc-impersonal', intro: 'Impersonal opinions — safe in ANY body paragraph. Front → phrase, back → example.', cards: [
            { front: 'It cannot be denied that…', back: 'It cannot be denied that money plays an important role in people’s lives.' },
            { front: 'It is often claimed that…', back: 'It is often claimed that money cannot buy happiness.' },
            { front: 'People often claim that…', back: 'People often claim that children cannot grow up perfectly without a parental presence.' },
            { front: 'Some people argue that…', back: 'Some people argue that it is more important to have an enjoyable job than to earn a lot of money.' },
            { front: 'Many argue that…', back: 'Many argue that older workers should be permitted to work even after reaching retirement age.' },
            { front: 'It is true to say that…', back: 'It is true to say that global warming is caused by pollution and other environmental damage.' },
            { front: 'It is undeniable that…', back: 'It is undeniable that watching TV programs has both positive and negative effects on people.' },
          ]},
          { type: 'flashcards', id: 'fc-personal', intro: 'Personal opinions — reserved for the introduction (thesis-led) and the conclusion.', cards: [
            { front: 'In my opinion / In my view…', back: 'In my opinion, men and women should have the same educational opportunities.' },
            { front: 'To my mind…', back: 'To my mind, everyone should be encouraged to stay in school until 18.' },
            { front: 'To my way of thinking…', back: 'To my way of thinking, there are various reasons why people decide to live in big cities.' },
            { front: 'As far as I am concerned…', back: 'As far as I am concerned, shopping online is very convenient.' },
            { front: 'It seems to me that…', back: 'It seems to me that the death penalty is essential to prevent humans from committing serious crimes.' },
            { front: 'I believe that…', back: 'I believe that it is more beneficial for children to have homework.' },
          ]},
          { type: 'quiz', id: 'quiz-opinion', title: 'Which drawer?', questions: [
            { q: '"_________, the death penalty is essential." — choose the IMPERSONAL opener for a body paragraph.', options: ['It seems to me that', 'Some people argue that', 'As far as I am concerned', 'I believe that'], answer: 1, explanation: 'Only impersonal opinion phrases belong in body paragraphs. Save "I believe", "It seems to me" and "As far as I am concerned" for intro/conclusion.' },
            { q: 'Where do personal opinions legally live?', options: ['Every body paragraph', 'Introduction (thesis-led) and conclusion', 'Nowhere — banned entirely', 'Only in examples'], answer: 1, explanation: 'Body paragraphs = impersonal. Intro (for thesis-led) and conclusion = personal is fine.' },
          ]},
        ],
      },
      {
        id: 'example-linking',
        title: 'Examples & Adding Points',
        emoji: '🔗',
        duration: '5 min',
        blocks: [
          { type: 'text', text: 'These phrases add evidence and keep your points flowing. Memorize at least three from each group so you never repeat yourself.' },
          { type: 'flashcards', id: 'fc-examples', intro: 'Introducing examples.', cards: [
            { front: 'For example…', back: 'For example, I’m going to buy a new suit for the party tonight.' },
            { front: 'For instance…', back: 'For instance, a father who has good skill in sports would have children with good skills in sports as well.' },
            { front: '…such as…', back: 'Some countries in Europe, such as the UK, Italy, and France…' },
            { front: '…namely…', back: 'Minor crimes, namely pickpocketing and traffic offences, should not have the same penalty as serious crimes, such as manslaughter and murder.' },
            { front: '…particularly…', back: 'This course is particularly suitable for science students, particularly those in engineering.' },
          ]},
          { type: 'flashcards', id: 'fc-adding', intro: 'Adding more points to the same topic.', cards: [
            { front: 'What is more…', back: 'What is more, the most important benefit of visiting a new place is that you develop your understanding of the world.' },
            { front: 'Furthermore…', back: 'Furthermore, children expect to be taken on holiday when they are off school during the summer.' },
            { front: 'Moreover…', back: 'Moreover, the shortage of state budget may cause a lack of investment in upgrading schools’ equipment and infrastructure.' },
            { front: 'In addition…', back: 'In addition, TED helps to keep people informed about the latest technology.' },
            { front: '…as well', back: 'International tourism has disadvantages as well.' },
            { front: 'Not only… but also…', back: 'The nicotine in cigarettes not only causes cancer but also leads to several other serious diseases.' },
          ]},
        ],
      },
      {
        id: 'contrast-language',
        title: 'Contrast & Balance',
        emoji: '⚖️',
        duration: '5 min',
        blocks: [
          { type: 'text', text: 'Contrast is the engine of Task 2 — every high-scoring essay balances two sides. Build your arsenal of contrast linkers.' },
          { type: 'flashcards', id: 'fc-contrast', intro: 'Making contrasting points.', cards: [
            { front: 'However…', back: 'We live in a technological age. However, technology cannot solve all the world’s problems.' },
            { front: 'While / Whereas…', back: 'Males spend 30 minutes a day cooking, while/whereas females spend 65 minutes a day on this activity.' },
            { front: 'Nonetheless / Nevertheless…', back: 'While they don’t trust each other, nonetheless they have worked together for many years.' },
            { front: 'Though / Although…', back: 'Although Tom has a lot of money, he lives in a small, old house.' },
            { front: 'In contrast / By contrast…', back: 'In contrast, the percentage of people who walked to work decreased.' },
            { front: 'Despite the fact that…', back: 'Despite the fact that he studied hard, he couldn’t pass the test.' },
          ]},
          { type: 'flashcards', id: 'fc-balance', intro: 'The golden balance formula.', cards: [
            { front: 'While it is true to say that…, in fact/actually…', back: 'While it is true to say that the city is noisy, dirty and overcrowded, in fact it is a very interesting place to visit.' },
          ]},
          { type: 'quiz', id: 'quiz-contrast', title: 'Contrast check', questions: [
            { q: 'Fill the gap: "Males spend 30 minutes a day cooking, ______ females spend 65 minutes."', options: ['however,', 'whereas', 'what is more', 'therefore'], answer: 1, explanation: 'Whereas/while directly contrasts two clauses in one sentence. "However" starts a new sentence.' },
            { q: 'The concession & contrast pattern "It is true that X. However, Y." is used for…', options: ['Showing something is true, then adding a balancing truth', 'Asking the reader a question', 'Listing examples', 'Ending the essay'], answer: 0, explanation: '"It is true that people make more money. However, there are still a lot of poor people in the world." Use it everywhere — intro, body, conclusion.' },
          ]},
        ],
      },
      {
        id: 'reality-emphasis',
        title: 'Reality & Emphasis',
        emoji: '📌',
        duration: '4 min',
        blocks: [
          { type: 'flashcards', id: 'fc-reality', intro: 'Talking about "reality".', cards: [
            { front: 'Indeed…', back: 'Indeed, traditional culture is slowly being wiped out by the strong current of technology.' },
            { front: 'Actually…', back: 'Actually, it’s quite an old, historic town.' },
            { front: 'In fact…', back: 'In fact, my brother and I don’t have much in common at all.' },
            { front: 'As a matter of fact…', back: 'As a matter of fact, exchanging gifts is not our traditional practice.' },
            { front: 'The fact of the matter is that…', back: 'The fact of the matter is that the number of older workers has increased these days.' },
          ]},
          { type: 'flashcards', id: 'fc-emphasis', intro: 'Emphasizing a point.', cards: [
            { front: 'Of course…', back: 'Of course, the most effective way to improve your writing skill is through practice.' },
            { front: 'Obviously…', back: 'Obviously, this method can help people reduce stress and negative feelings.' },
            { front: 'Needless to say…', back: 'Needless to say, the number of criminals is increasing in many countries nowadays.' },
            { front: 'Essentially…', back: 'Essentially, unemployed people need to find a way to make a living.' },
          ]},
        ],
      },
      {
        id: 'cause-result',
        title: 'Cause & Result',
        emoji: '🌀',
        duration: '5 min',
        blocks: [
          { type: 'text', text: 'Cause-and-effect is the logical backbone of Task 2. These phrases convert raw facts into reasoned argument.' },
          { type: 'flashcards', id: 'fc-cause', intro: 'Providing a cause or reason.', cards: [
            { front: 'This is because…', back: 'A vast majority of people prefer cycling. This is because riding a bicycle to work is healthier than driving.' },
            { front: 'This may be caused by…', back: 'This may be caused by the effects of global warming.' },
            { front: 'This can be explained by…', back: 'This can be explained by the fact that movies have been considered fashionable and entertaining.' },
            { front: 'The reason for this is that…', back: 'The reason for this is that happiness means different things to different people.' },
          ]},
          { type: 'flashcards', id: 'fc-result', intro: 'Talking about the result / effect.', cards: [
            { front: 'May cause…', back: 'The unlimited use of cars may cause many problems.' },
            { front: 'May / Might lead to / result in…', back: 'Urbanization might lead to crime, traffic congestion, and pollution in cities.' },
            { front: 'As a result…', back: 'As a result of tourism and the increasing number of travelers, there is a growing demand for flights.' },
            { front: 'Consequently…', back: 'He forgot to pay his phone bill. Consequently, they turned off his service.' },
            { front: 'One result of this is that…', back: 'One result of this is that these individuals prefer driving cars rather than walking for exercise.' },
          ]},
          { type: 'quiz', id: 'quiz-cause', title: 'Cause & effect check', questions: [
            { q: 'Choose the strongest cause→result chain.', options: ['Cars are popular. Many people drive.', 'The unlimited use of cars may cause many problems. As a result, urban air quality suffers.', 'Cars and pollution are both things.', 'Driving is fun.'], answer: 1, explanation: 'Cause phrase + result phrase ("may cause…", "As a result…") shows the examiner you can reason, not just list.' },
            { q: '"Urbanization might lead to crime, congestion and pollution." — this uses…', options: ['Cause → effect', 'An example', 'An exclamation', 'A question'], answer: 0, explanation: '"might lead to" is a classic cause→result verb with a built-in cautious modal.' },
          ]},
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     MODULE 5 — CAUTIOUS LANGUAGE & SYNONYMS
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'hedging',
    title: 'Cautious Language',
    icon: '🛡️',
    color: 'green',
    tagline: 'Never say 100% — make claims impossible to attack.',
    lessons: [
      {
        id: 'hedging-basics',
        title: 'Hedging & Probability',
        emoji: '🛡️',
        duration: '5 min',
        blocks: [
          { type: 'text', text: 'A 100% statement is easy to prove wrong: "Globalization is an effective means to stimulate economic growth." Say "usually" and the claim becomes much harder to attack — but just as strong in your essay.' },
          { type: 'flashcards', id: 'fc-frequency', intro: 'Adverbs of frequency — turn absolute claims into safe ones.', cards: [
            { front: 'Globalization is ______ an effective means of growth.', back: 'usually / frequently / often / sometimes — each weakens the 100% claim safely.' },
            { front: 'Which is safer: "always" or "usually"?', back: 'Usually. Avoid always, never, every, none — no 0% or 100% statements.' },
          ]},
          { type: 'flashcards', id: 'fc-probability', intro: 'Adverbs of probability — "promises" become "likelihoods".', cards: [
            { front: '"Reading my book leads to an 8.0" sounds like…', back: 'A promise/guarantee — dangerous. Say "is likely to lead to an 8.0".' },
            { front: 'Order the weakeners: likely / possibly / perhaps / probably', back: 'All valid: "is likely to…", "possibly leads to…", "perhaps leads to…", "probably leads to…".' },
          ]},
          { type: 'flashcards', id: 'fc-impersonal-verb', intro: 'Impersonal verb forms — admit uncertainty like a pro.', cards: [
            { front: 'It seems… / It appears…', back: '"It appears that all Vietnamese adults ride motorbikes" (not "all Vietnamese adults ride motorbikes"). Signals you don\'t have every fact.' },
            { front: 'Modal verbs: can / could / may / might', back: '"Email can/could/may/might lead to extra work and stress" — shows possibility or an unclear future.' },
          ]},
          { type: 'text', text: 'Why does this matter? If you want to make a claim that is hard to prove wrong, make a weaker statement. It sounds cautious, academic, and mature — exactly what examiners reward under Lexical Resource and Grammatical Range.' },
          { type: 'quiz', id: 'quiz-hedging', title: 'Hedge check', questions: [
            { q: 'Which sentence is most academically cautious?', options: ['Every student always benefits from technology.', 'Technology is likely to benefit most students in many cases.', 'Technology never fails.', 'All students, without exception, love technology.'], answer: 1, explanation: 'Likely + most + many cases = cautious, defensible claims. The others are absolute and easy to attack.' },
            { q: 'The adverbs of frequency you can safely use include…', options: ['always, never', 'usually, frequently, often, sometimes', 'completely, totally', 'only, none'], answer: 1, explanation: 'The middle-ground frequency adverbs weaken 100% claims safely. Absolutes are banned.' },
            { q: '"It appears that…" is used to…', options: ['Show you are an expert with all the facts', 'Signal that your knowledge is limited but your evidence points somewhere', 'Ask a question', 'Introduce a list'], answer: 1, explanation: 'It tells the reader you don\'t have all the facts, but the facts you have lead you to think this.' },
          ]},
        ],
      },
      {
        id: 'synonyms',
        title: 'Synonyms for Paraphrasing',
        emoji: '🔁',
        duration: '6 min',
        blocks: [
          { type: 'text', text: 'Paraphrasing is the #1 lexical skill in Task 2. Train your brain to swap plain words for academic ones with this matching game. Match each word to its best synonym.' },
          { type: 'synonyms', id: 'match-synonyms', intro: 'Tap a word, then tap its synonym. Beat the clock mentally!', pairs: [
            ['Enough', 'sufficient'], ['Not enough', 'insufficient'], ['Many', 'numerous'],
            ['Things', 'matters'], ['Big', 'significant'], ['Important', 'crucial'],
            ['Get', 'obtain'], ['Have', 'possess'], ['Give', 'provide'],
            ['Do', 'undertake'], ['More', 'further'], ['Too much', 'excessive'],
            ['Famous', 'prominent'], ['Problem', 'issue'],
          ]},
          { type: 'keyfacts', items: [
            { label: 'Enough', value: 'sufficient', note: 'adequate' },
            { label: 'Not enough', value: 'insufficient', note: 'inadequate, a shortage of, a lack of' },
            { label: 'Many', value: 'numerous', note: 'various, a variety of, a range of, countless' },
            { label: 'Big', value: 'significant', note: 'considerable, substantial, immense, vast, profound' },
            { label: 'Important', value: 'crucial', note: 'essential, critical, vital, principal, major' },
            { label: 'Get', value: 'obtain', note: 'receive, acquire, gain' },
            { label: 'Have', value: 'possess', note: 'experience, undergo, encounter' },
            { label: 'Give', value: 'provide', note: 'supply, contribute, offer, present' },
            { label: 'Do', value: 'undertake', note: 'participate, conduct, perform, implement' },
            { label: 'More', value: 'further', note: 'additional, added' },
            { label: 'Too much', value: 'excessive', note: 'an excess of' },
          ]},
          { type: 'mnemonic', title: 'SPACE to upgrade', text: 'Swap plain words using the POWER set: Big→Significant, Many→Numerous, Get→Obtain, Give→Provide, Do→Undertake, Have→Possess, Important→Crucial.' },
          { type: 'quiz', id: 'quiz-synonyms', title: 'Paraphrase check', questions: [
            { q: 'Which paraphrase is best for "Big"?', options: ['Huge big', 'Significant', 'Large big', 'Very big'], answer: 1, explanation: 'Significant (or considerable, substantial, immense, vast, profound) — "big" is too informal for essays.' },
            { q: '"More and more people are driving cars these days" → best rewrite?', options: ['More people drive cars.', 'Increasing numbers of people are using cars these days.', 'People drive more.', 'Cars are driven by more.'], answer: 1, explanation: 'Trend language: "increasing numbers of…" / "a growing number of…" replaces the informal "more and more".' },
            { q: 'The best synonym for "Do" in academic writing is…', options: ['Make', 'Undertake', 'Play', 'Handle it'], answer: 1, explanation: 'Undertake, conduct, perform, participate, implement — all better than the vague "do".' },
          ]},
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     MODULE 6 — MEMORY MASTERY
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'memory',
    title: 'Memory Mastery',
    icon: '🧠',
    color: 'amber',
    tagline: 'Modern learning science — memorise faster, forget less.',
    lessons: [
      {
        id: 'memory-science',
        title: 'The Science of Remembering',
        emoji: '🧠',
        duration: '6 min',
        blocks: [
          { type: 'text', text: 'This app is built on modern educational philosophy. Here is why the interactive bits (flip-cards, quizzes, matching) are not gimmicks — they are the fastest known ways to memorize.' },
          { type: 'flashcards', id: 'fc-memory', intro: 'The four pillars of fast learning.', cards: [
            { front: 'Active Recall', back: 'Testing yourself (flipping cards, answering quizzes) beats re-reading. Each attempt to recall strengthens the memory trace.' },
            { front: 'Spaced Repetition', back: 'Review at growing intervals: today → tomorrow → in 3 days → in a week. Reviewing right before you forget is the sweet spot.' },
            { front: 'Chunking', back: 'The brain holds 4±1 chunks. Break Task 2 into: intro / body1 / body2 / conclusion — four chunks you can rebuild anywhere.' },
            { front: 'Interleaving', back: 'Mix essay types while practicing instead of drilling one. Contrasting structures side-by-side makes each one sharper.' },
          ]},
          { type: 'bullets', items: [
            'Retrieval practice: every flip-card and quiz here is a retrieval exercise — that is what builds long-term memory.',
            'Elaboration: explain the rule in your own words (say it out loud) before checking the answer.',
            'Dual coding: pair each essay type with a mental image (judge ⚖️, lawyer 🎯, scale 📊, toolbox 🛠️). Images anchor words.',
            'Feedback: instant right/wrong feedback is proven to accelerate learning — every quiz here gives it instantly.',
          ]},
          { type: 'mnemonic', title: 'Your 10-minute daily loop', text: '1) Quiz a type (2 min) → 2) Flip 7 phrase cards (3 min) → 3) Match synonyms (3 min) → 4) Read one model essay conclusion (2 min). Ten focused minutes beats two unbroken hours of passive reading.' },
          { type: 'quiz', id: 'quiz-memory', title: 'Science check', questions: [
            { q: 'Which study method builds the strongest memory?', options: ['Re-reading highlights', 'Active recall — testing yourself', 'Watching more videos', 'Highlighting in many colors'], answer: 1, explanation: 'Retrieval practice (testing yourself) is one of the most robust findings in learning science.' },
            { q: 'Spaced repetition means…', options: ['Cramming the night before', 'Reviewing at growing intervals', 'Studying only on weekends', 'Never reviewing'], answer: 1, explanation: 'Review today → tomorrow → 3 days → 1 week. The spacing effect dramatically cuts forgetting.' },
            { q: 'Chunking helps because the working memory holds about…', options: ['4±1 chunks', '50 chunks', '1 chunk', 'Unlimited chunks'], answer: 0, explanation: 'Break the essay into intro/body/body/conclusion — four rebuildable chunks.' },
          ]},
        ],
      },
      {
        id: 'exam-day',
        title: 'Exam-Day Protocol',
        emoji: '🎯',
        duration: '4 min',
        blocks: [
          { type: 'text', text: 'A calm, repeatable ritual for the exam room. Memorize this sequence so the test day feels like a rehearsal.' },
          { type: 'timeline', id: 'tl-exam', steps: [
            { time: 'Min 0', title: 'Read & annotate', icon: '🔍', desc: 'Underline key words in the question. Decide the essay TYPE immediately (judge or lawyer?).' },
            { time: 'Min 0–10', title: 'Plan', icon: '🧠', desc: 'Decide your opinion (thesis-led only). Jot 4+ ideas: argument + evidence for each body.' },
            { time: 'Min 10–40', title: 'Write', icon: '✍️', desc: 'Intro (5) → Body 1 (10) → Body 2 (10) → Conclusion (5). Topic sentence first in every body.' },
            { time: 'Min 40–45', title: 'Check', icon: '🔍', desc: 'Scan for: contractions, pronouns, questions, "etc", absolute words, subject-verb slips, word count ≥ 250.' },
          ]},
          { type: 'keyfacts', items: [
            { label: 'Type first', value: '5 sec', note: 'Identify judge/lawyer/scale/toolbox before anything' },
            { label: 'Word target', value: '260–290', note: 'Never below 250' },
            { label: 'Checklist', value: '6 items', note: 'No ?! etc, no contractions/pronouns/absolutes, verbs agree' },
          ]},
          { type: 'mnemonic', title: 'P-R-A-C-T-I-C-E ritual', text: 'Plan → Read again → Answer the question → Check type → Take sides (only if opinion asked) → Introduce with context → Clear topic sentences → End with a paraphrase. P-R-A-C-T-I-C-E.' },
        ],
      },
    ],
  },
];
