/* Unit 18 — Likelihood & Conditions 2: explanations
   Third conditional; mixed conditionals; wishes and regrets; should(n't) have
   window.__EXPL[<data-id>] = { q, a, why, wrong:[{opt,why}], rule? }
   Rendered by initExplanations() in scripts/utils.js. */
window.__EXPL = {

  /* ── A1 Pre-listening prediction ── */
  u18a1_1: {
    q: 'Why do you think Simon regrets buying the car?',
    a: 'it cost him a lot of money',
    why: 'This is a prediction task, so any sensible idea is allowed — but the recording confirms that money is the problem: the car was expensive, Simon had to take out a big bank loan, and petrol has almost doubled in price. Wordings such as <em>it was expensive</em>, <em>it cost too much</em> or <em>he spent all his money on it</em> are also accepted.',
    wrong: [
      { opt: 'his father disagreed', why: 'His father did advise against the purchase, and Simon regrets ignoring him — but the disagreement is not itself the problem. The regret he expresses is financial.' },
      { opt: 'the car keeps breaking down', why: 'A very natural guess about a regretted car, but nothing in the recording mentions mechanical trouble. Predict freely, then check your guess against what you actually hear.' }
    ],
    rule: 'Prediction tasks prepare your ears — you are not marked on guessing right first time.'
  },

  /* ── A2 True/False (Track 25) ── */
  u18a2_1: {
    q: 'Simon bought a second-hand car.',
    a: 'FALSE',
    why: "He says <em>If I'd bought a second-hand car, I wouldn't have needed to take out this big bank loan.</em> A third conditional describes the opposite of what really happened, so he did <strong>not</strong> buy second-hand — he bought a new car.",
    wrong: [{ opt: 'TRUE', why: 'The words <em>second-hand car</em> really are in the recording, which makes TRUE tempting, but they sit inside an unreal <em>if</em> clause. <em>If I\'d bought…</em> always means "I didn\'t".' }],
    rule: "Third conditional reverses the facts: <em>If I'd bought…</em> → I didn't buy."
  },
  u18a2_2: {
    q: 'The price of petrol nearly doubled last month.',
    a: 'TRUE',
    why: "Simon says <em>It wouldn't be so bad if the price of petrol hadn't almost doubled last month.</em> A negative past perfect in the <em>if</em> clause means the positive is factually true: the price <strong>did</strong> almost double. <em>Nearly</em> simply paraphrases <em>almost</em>.",
    wrong: [{ opt: 'FALSE', why: 'The statement says <em>nearly</em> where the recording says <em>almost</em>, but the two words mean the same thing, and a negative in an unreal <em>if</em> clause flips to a positive fact.' }],
    rule: "<em>If it hadn't happened</em> → it did happen."
  },
  u18a2_3: {
    q: 'Simon has saved very little money from his job.',
    a: 'TRUE',
    why: "He says <em>If I'd waited a bit before buying the car, I'd have managed to save quite a bit by now.</em> Because the result clause is unreal, the truth is the opposite: he has not managed to save much.",
    wrong: [{ opt: 'FALSE', why: 'The phrase <em>save quite a bit</em> sounds positive, but it sits inside <em>I\'d have managed to…</em>, which marks it as something that did not happen.' }],
    rule: 'Read the whole conditional before deciding — the result clause is unreal too.'
  },
  u18a2_4: {
    q: "Simon took his father's advice about the car.",
    a: 'FALSE',
    why: "He says <em>If only I'd listened to him…</em> and <em>If I'd taken his advice, I'd own a small fortune now.</em> <em>If only</em> + past perfect expresses regret about something that did not happen, so he did not take the advice.",
    wrong: [{ opt: 'TRUE', why: 'The words <em>taken his advice</em> are there, but only inside a regret. <em>If only I\'d…</em> always means "unfortunately I didn\'t".' }],
    rule: '<em>If only</em> + past perfect = a regret: it did not happen.'
  },
  u18a2_5: {
    q: 'Simon has a lot of money.',
    a: 'FALSE',
    why: "He says <em>I'd own a small fortune now</em> — a mixed conditional whose result clause imagines the present. Because it is imaginary, the real situation is the opposite: he has a big bank loan and debts, not a fortune.",
    wrong: [{ opt: 'TRUE', why: '<em>A small fortune</em> is mentioned, but <em>I\'d own</em> (= I would own) marks it as unreal. Everything else he says is about debt.' }],
    rule: 'A result clause with <em>would</em> + verb describes an unreal present.'
  },

  /* ── A3 Complete the sentences ── */
  u18a3_1: {
    q: "If I ______ (buy) a second-hand car, I wouldn't have needed to take out this big bank loan.",
    a: "'d bought",
    why: 'The sentence imagines a different past, so the <em>if</em> clause takes the past perfect: <em>had bought</em>, normally contracted to <em>’d bought</em>. Both forms are accepted.',
    wrong: [
      { opt: 'bought', why: 'The past simple belongs to the second conditional (<em>If I bought a car, I’d need a loan</em>), which imagines the present or future rather than a finished past decision.' },
      { opt: "'d have bought", why: '<em>Would have</em> belongs in the result clause. Keep <em>would</em> out of the <em>if</em> half of a conditional.' }
    ],
    rule: 'Third conditional <em>if</em> clause: <em>if</em> + past perfect.'
  },
  u18a3_2: {
    q: "If I'd bought a second-hand car, I ______ (not/need) to take out this big bank loan.",
    a: "wouldn't have needed",
    why: "The loan was taken out in the past, so the imagined result is also in past time: <em>would(n't) have</em> + past participle. <em>Wouldn't have had to</em> is accepted as well, since <em>have to</em> and <em>need to</em> are interchangeable here.",
    wrong: [
      { opt: "didn't need", why: 'A plain past simple states a fact, but this result never happened. It has to be marked as unreal with <em>would</em>.' },
      { opt: "wouldn't need", why: 'That is the mixed form for a present result (<em>I wouldn’t need a loan now</em>). The borrowing is already done, so the perfect form is required.' }
    ],
    rule: "Third conditional result clause: <em>would(n't) have</em> + past participle."
  },
  u18a3_3: {
    q: "It ______ (not/be) so bad if the price of petrol hadn't almost doubled last month.",
    a: "wouldn't be",
    why: 'The result describes how things are <strong>now</strong> — his situation today is bad — while the condition is about last month. That mix takes <em>would(n’t)</em> + infinitive without <em>to</em>.',
    wrong: [
      { opt: "wouldn't have been", why: 'That puts the result in past time, but Simon is complaining about his present financial situation, not about one moment last month.' },
      { opt: "isn't", why: 'A real present tense states a fact. This clause is hypothetical: it depends on an <em>if</em> clause that did not come true.' }
    ],
    rule: 'Past cause + present result → <em>if</em> + past perfect, <em>would</em> + infinitive.'
  },
  u18a3_4: {
    q: "It wouldn't be so bad if the price of petrol ______ (not/almost double) last month.",
    a: "hadn't almost doubled",
    why: 'The condition refers to a finished past event (<em>last month</em>), so it takes the past perfect. The adverb <em>almost</em> goes between the auxiliary and the past participle: <em>hadn’t almost doubled</em>.',
    wrong: [
      { opt: "didn't almost double", why: 'The past simple makes it a real statement about the past. An unreal past condition needs <em>had</em> + past participle.' },
      { opt: "hasn't almost doubled", why: 'The present perfect cannot be used with a finished time expression such as <em>last month</em>, and it is not a conditional form.' }
    ],
    rule: 'A definite past time (<em>last month</em>, <em>in 1932</em>) rules out the present perfect.'
  },
  u18a3_5: {
    q: "If I ______ (wait) a bit before buying the car, I'd have managed to save quite a bit by now.",
    a: "'d waited",
    why: 'Simon did not wait, so the unreal past condition takes the past perfect: <em>had waited</em> / <em>’d waited</em>. Note that <em>’d</em> here is <em>had</em>, while <em>’d</em> in the result clause is <em>would</em>.',
    wrong: [
      { opt: 'waited', why: 'The past simple gives a second conditional, which imagines a present or future situation rather than a decision already made.' },
      { opt: 'would wait', why: '<em>Would</em> does not go in the <em>if</em> clause of a conditional sentence.' }
    ],
    rule: "<em>'d</em> + past participle = <em>had</em>; <em>'d</em> + infinitive = <em>would</em>."
  },
  u18a3_6: {
    q: "If I'd waited a bit before buying the car, I ______ (manage) to save quite a bit by now.",
    a: "'d have managed",
    why: 'The saving would have built up over the months since the purchase, so the result takes <em>would have</em> + past participle. <em>Would have managed</em> is the full form of <em>’d have managed</em>.',
    wrong: [
      { opt: "'d manage", why: 'That describes an unreal present or future ability. Here the money would have accumulated over past time, which needs the perfect form.' },
      { opt: "'d have managed to saving", why: 'After <em>manage</em> the verb takes the full infinitive: <em>manage to save</em>, never <em>-ing</em>.' }
    ],
    rule: '<em>by now</em> can still take <em>would have</em> + past participle when the result builds up over past time.'
  },
  u18a3_7: {
    q: 'If only I ______ (listen) to him, none of this would have happened.',
    a: "'d listened",
    why: '<em>If only</em> works exactly like <em>if</em> in a conditional but adds regret. Regret about a past action takes the past perfect: <em>if only I’d listened</em>.',
    wrong: [
      { opt: 'listened', why: '<em>If only I listened</em> would be a wish about the present ("I never listen to anyone"), not a regret about one past occasion.' },
      { opt: "'d have listened", why: '<em>Would have</em> belongs to the result clause; the <em>if only</em> clause takes the past perfect on its own.' }
    ],
    rule: '<em>If only</em> = <em>wish</em>, and it follows the same tense rules.'
  },
  u18a3_8: {
    q: "If only I'd listened to him, none of this ______ (happen).",
    a: 'would have happened',
    why: 'The debts and the loan are already facts, so the imagined alternative belongs to past time: <em>would have</em> + past participle. <em>Would</em> never changes its form, whatever the subject.',
    wrong: [
      { opt: 'would happen', why: 'That refers to something still to come, but all of this has already happened to him.' },
      { opt: 'happened', why: 'Without <em>would</em> the clause states a fact — and the fact is that it <strong>did</strong> happen.' }
    ],
    rule: '<em>would</em> has one form for every subject: no <s>woulds</s>, no <s>to</s>.'
  },
  u18a3_9: {
    q: "If I ______ (take) his advice, I'd own a small fortune now.",
    a: "'d taken",
    why: 'The condition is a past action he did not perform, so it takes the past perfect: <em>had taken</em> / <em>’d taken</em>.',
    wrong: [
      { opt: 'took', why: 'The past simple would make this a second conditional about a general habit of taking advice, losing the reference to the one decision about the car.' },
      { opt: 'had took', why: 'The past participle of <em>take</em> is <em>taken</em>: take – took – taken.' }
    ],
    rule: 'After <em>had</em>, always use the third form of the verb.'
  },
  u18a3_10: {
    q: "If I'd taken his advice, I ______ (own) a small fortune now.",
    a: "'d own",
    why: '<em>Now</em> puts the result in present time, so this is a mixed conditional: <em>would</em> + infinitive without <em>to</em>. <em>Would own</em> is the full form.',
    wrong: [
      { opt: "'d have owned", why: 'That would place the fortune in past time, but <em>now</em> points at this present moment.' },
      { opt: "'d be owning", why: '<em>Own</em> is a state verb of possession and is not used in the continuous.' }
    ],
    rule: 'Past condition + <em>now</em> in the result → <em>would</em> + infinitive.'
  },

  /* ── A4 Analysing the structures ── */
  u18a4_1: {
    q: 'Which tense is used in the if clause in sentences 1, 2, 4 and 5?',
    a: 'past perfect',
    why: "Every one of these <em>if</em> clauses uses <em>had</em> (+ <em>n't</em>) + past participle: <em>'d bought</em>, <em>hadn't almost doubled</em>, <em>'d listened</em>, <em>'d taken</em>. <em>The past perfect</em> and <em>past perfect tense</em> are accepted too.",
    wrong: [
      { opt: 'past simple', why: 'The past simple appears in the <em>if</em> clause of second conditionals and of present-to-past mixed conditionals (<em>If you were more considerate…</em>), but not in these five sentences.' },
      { opt: 'present perfect', why: '<em>Have/has</em> + past participle describes real time up to now. An unreal past condition needs <em>had</em> + past participle.' }
    ],
    rule: 'Unreal past condition = past perfect, whatever the result clause looks like.'
  },
  u18a4_2: {
    q: 'Does that if clause refer to present or past time?',
    a: 'past time',
    why: 'These conditions are all things that did or did not happen before now — buying the car, the rise in petrol prices, listening to his father. <em>The past</em> and <em>past</em> are also accepted.',
    wrong: [
      { opt: 'present time', why: 'Some of the result clauses are about the present, but the conditions themselves are all finished past events.' },
      { opt: 'future time', why: 'Nothing in these clauses looks forward; they all look back at decisions Simon has already taken.' }
    ],
    rule: 'Judge the two halves separately — they can sit in different times.'
  },
  u18a4_3: {
    q: 'Which sentences refer to a past situation in the result clause?',
    a: '1, 3 and 4',
    why: "Sentence 1 (<em>wouldn't have needed</em>), sentence 3 (<em>'d have managed</em>) and sentence 4 (<em>would have happened</em>) all place the imagined result in past time. Wordings such as <em>sentences 1, 3 and 4</em> are accepted.",
    wrong: [
      { opt: '2 and 5', why: 'These have present results — <em>it wouldn’t be so bad</em> and <em>I’d own a fortune now</em> — so they are the mixed conditionals.' },
      { opt: '1, 2, 4 and 5', why: 'That is the answer to the previous question, which was about the <em>if</em> clause. Here you look only at the result half.' }
    ],
    rule: 'Find the verb form in the result clause before you name the conditional.'
  },
  u18a4_4: {
    q: 'Which structure is used in those past result clauses?',
    a: 'would have + past participle',
    why: "This is the standard third conditional result: <em>would</em> (or <em>wouldn't</em>) + <em>have</em> + past participle, as in <em>would have happened</em>. <em>Would have</em> and <em>would + have + past participle</em> are also accepted.",
    wrong: [
      { opt: 'would + infinitive', why: 'That gives a present result, which is what sentences 2 and 5 use.' },
      { opt: 'had + past participle', why: 'That is the <em>if</em> clause structure, not the result clause.' }
    ],
    rule: 'Result in past time → <em>would have</em> + past participle.'
  },
  u18a4_5: {
    q: 'Which sentences refer to a present situation in the result clause?',
    a: '2 and 5',
    why: "Sentence 2 (<em>It wouldn't be so bad</em>) and sentence 5 (<em>I'd own a small fortune now</em>) both describe how things would be today. A present result with a past condition is what makes a mixed conditional.",
    wrong: [
      { opt: '1, 3 and 4', why: 'These use <em>would have</em> + past participle, so their results belong to past time.' },
      { opt: 'all of them', why: 'Only two of the five have a present result; the other three are pure third conditionals.' }
    ],
    rule: 'Look for a present time marker (<em>now</em>, <em>today</em>) in the result clause.'
  },
  u18a4_6: {
    q: 'Which structure is used in those present result clauses?',
    a: 'would + infinitive without to',
    why: 'A present result takes <em>would</em> + the bare infinitive: <em>would be</em>, <em>would own</em>. <em>Would + infinitive</em> and <em>would</em> are accepted as shorter versions of the same answer.',
    wrong: [
      { opt: 'would + to + infinitive', why: 'After a modal such as <em>would</em>, English never uses <em>to</em>: <s>would to own</s>.' },
      { opt: 'would have + past participle', why: 'That structure gives a past result, used in sentences 1, 3 and 4.' }
    ],
    rule: 'Modals (would, could, might) are always followed by the bare infinitive.'
  },

  /* ── C1 Tutor and student: research evaluation ── */
  u18c1_2: {
    q: "If I'd had a larger number of questionnaires returned, I ______ (get) more useful data.",
    a: 'would have got',
    why: "The research is finished, so this is a pure third conditional: a past perfect condition matched by <em>would have</em> + past participle. <em>'d have got</em> and the less certain <em>might have got</em> are also accepted.",
    wrong: [
      { opt: 'would get', why: 'That suggests the data could still change, but the questionnaires have already been returned and analysed.' },
      { opt: 'got', why: 'A bare past simple states what really happened — and she did not get more useful data.' }
    ],
    rule: 'Third conditional: <em>if</em> + past perfect → <em>would have</em> + past participle.'
  },
  u18c1_3: {
    q: "I suppose I ______ (receive) more completed questionnaires if I'd made the questions easier to answer.",
    a: 'would have received',
    why: "The result clause comes first here, but the grammar is unchanged: an unreal past result takes <em>would have</em> + past participle. <em>'d have received</em> and <em>might have received</em> are accepted.",
    wrong: [
      { opt: 'would receive', why: 'The questionnaires were sent out and returned in the past, so the result belongs to past time.' },
      { opt: 'had received', why: 'The past perfect belongs in the <em>if</em> clause; used here it leaves the main clause without its conditional form.' }
    ],
    rule: 'The clause order can change; the pairing of the two verb forms cannot.'
  },
  u18c1_4: {
    q: 'I would have received more completed questionnaires if I ______ (make) the questions easier to answer.',
    a: "'d made",
    why: 'The condition is something she did not do when she designed the questionnaire, so the <em>if</em> clause takes the past perfect: <em>had made</em> / <em>’d made</em>.',
    wrong: [
      { opt: 'made', why: 'The past simple would give a second conditional about a general or present situation, not about this finished piece of design work.' },
      { opt: 'would have made', why: '<em>Would</em> is not used in the <em>if</em> clause — the result clause already has it.' }
    ],
    rule: 'One <em>would</em> per conditional, and it goes in the result clause.'
  },
  u18c1_5: {
    q: "I think I ______ (be) more successful with my interviews as well if I'd planned the questions more thoroughly.",
    a: 'would have been',
    why: "The interviews are over, so the imagined result sits in past time: <em>would have been</em>. Because she adds <em>although I'm not sure about that</em>, the less certain <em>might have been</em> is also accepted.",
    wrong: [
      { opt: 'would be', why: 'A present result would imply the interviews are still going on, but they are finished.' },
      { opt: 'was', why: 'The past simple states a fact, and she was not more successful — this is a hypothesis.' }
    ],
    rule: 'Use <em>might have</em> instead of <em>would have</em> when you are not certain.'
  },
  u18c1_6: {
    q: 'I would have been more successful with my interviews if I ______ (plan) the questions more thoroughly beforehand.',
    a: "'d planned",
    why: '<em>Beforehand</em> points back to a moment that has already passed, so the <em>if</em> clause takes the past perfect: <em>had planned</em> / <em>’d planned</em>.',
    wrong: [
      { opt: 'planned', why: 'The past simple gives an unreal present, but the planning would have had to happen before interviews that are already finished.' },
      { opt: 'have planned', why: 'The present perfect describes real time up to now; an unreal past condition needs <em>had</em> + past participle.' }
    ],
    rule: 'Time words such as <em>beforehand</em>, <em>sooner</em> and <em>earlier</em> confirm a past-perfect condition.'
  },
  u18c1_7: {
    q: 'If I ______ (prepare) the questions in more detail, it would have restricted the interviewees too much.',
    a: "'d prepared",
    why: 'Another unreal past condition, so the past perfect again: <em>had prepared</em> / <em>’d prepared</em>. Notice that this conditional argues the other way — more preparation would have been a <strong>bad</strong> thing.',
    wrong: [
      { opt: 'prepared', why: 'The past simple would refer to an imagined present habit, not to what she could have done before these particular interviews.' },
      { opt: "'d have prepared", why: 'The <em>if</em> clause takes the past perfect only; <em>would have</em> stays in the result clause.' }
    ],
    rule: 'Each half of a third conditional keeps its own fixed form.'
  },
  u18c1_8: {
    q: "If I'd prepared the questions in more detail, it ______ (restrict) the interviewees too much.",
    a: 'would have restricted',
    why: 'The imagined effect on the interviews belongs to past time, so the result clause takes <em>would have</em> + past participle. <em>Might have restricted</em> is accepted because she is unsure.',
    wrong: [
      { opt: 'would restrict', why: 'The interviews have already taken place, so a present or future result is impossible.' },
      { opt: 'restricted', why: 'Without <em>would</em> the clause claims the interviewees really were restricted, which is not what she means.' }
    ],
    rule: 'Once the <em>if</em> clause is past perfect, keep the result in unreal past time as well.'
  },
  u18c1_9: {
    q: "If I ______ (start) collecting data sooner, it wouldn't have been such a rush in the end.",
    a: "'d started",
    why: '<em>Sooner</em> compares with what actually happened, so the condition takes the past perfect: <em>had started</em> / <em>’d started</em>.',
    wrong: [
      { opt: 'started', why: 'The past simple would give a second conditional about now, but the data collection is finished.' },
      { opt: 'had start', why: 'After <em>had</em> the verb must be a past participle: <em>started</em>.' }
    ],
    rule: '<em>had</em> + past participle — never <em>had</em> + bare infinitive.'
  },
  u18c1_10: {
    q: "If I'd started collecting data sooner, it ______ (not/be) such a rush in the end.",
    a: "wouldn't have been",
    why: "<em>In the end</em> refers to the closing stage of a project that is already over, so the negative result is in unreal past time: <em>wouldn't have been</em> (full form <em>would not have been</em>).",
    wrong: [
      { opt: "wouldn't be", why: 'That would describe how things are now, but the rush happened at the end of the project.' },
      { opt: "wasn't", why: 'The past simple denies a fact — and it really was a rush. Only <em>would</em> makes the clause hypothetical.' }
    ],
    rule: "The negative attaches to <em>would</em>: <em>wouldn't have been</em>."
  },
  u18c1_11: {
    q: "If you ______ (not/leave) it all so late, I would have been able to support you more.",
    a: "hadn't left",
    why: "The tutor is imagining the opposite of what the student did during the project, so the negative condition takes the past perfect: <em>hadn't left</em> / <em>had not left</em>.",
    wrong: [
      { opt: "didn't leave", why: 'The past simple would state a real fact about the past, but the student really did leave it late.' },
      { opt: "wouldn't have left", why: '<em>Would</em> belongs in the result clause — and it was the student, not the tutor, who left things late.' }
    ],
    rule: "Negative unreal past condition: <em>hadn't</em> + past participle."
  },
  u18c1_12: {
    q: "If you hadn't left it all so late, I ______ (be able to) support you more.",
    a: 'would have been able',
    why: '<em>Can</em> has no perfect form, so unreal past ability is expressed with <em>be able to</em>: the full phrase reads <em>I would have been able to support you more</em>. <em>’d have been able</em> and <em>might have been able</em> are also accepted.',
    wrong: [
      { opt: 'would be able', why: 'That refers to a present or future possibility, but the chance to help has already gone.' },
      { opt: 'would have could', why: 'Two modals cannot follow one another, and <em>could</em> has no past participle. Use <em>be able to</em> instead.' }
    ],
    rule: '<em>can</em> has no perfect: use <em>would have been able to</em>.'
  },
  u18c1_13: {
    q: 'If you ______ (come) to see me before you sent out your questionnaires, I would have helped you.',
    a: "'d come",
    why: 'A visit that never took place, before an event that is itself in the past, so the <em>if</em> clause takes the past perfect: <em>had come</em> / <em>’d come</em>.',
    wrong: [
      { opt: 'came', why: 'The past simple would give a second conditional about a general habit of visiting, not about one missed opportunity.' },
      { opt: 'had came', why: 'The past participle of <em>come</em> is <em>come</em>: come – came – come.' }
    ],
    rule: 'come – came – come: the participle looks the same as the infinitive.'
  },
  u18c1_14: {
    q: "If you'd come to see me before you sent out your questionnaires, I ______ (help) you.",
    a: 'would have helped',
    why: "The moment for that help has gone, so the result clause takes <em>would have</em> + past participle. <em>'d have helped</em> and <em>could have helped</em> are accepted too.",
    wrong: [
      { opt: 'would help', why: 'That sounds like an offer for the future, but the tutor is regretting a chance that has already passed.' },
      { opt: 'helped', why: 'Without <em>would</em> the sentence claims the tutor really did help, which contradicts the rest of the conversation.' }
    ],
    rule: 'Missed opportunities in the past → <em>would/could have</em> + past participle.'
  },

  /* ── C2 Scientific discoveries: Fleming and Ridley ── */
  u18c2_2: {
    q: "Fleming wouldn't have grown more of the mould if there ______ growing around it.",
    a: 'had been any germs',
    why: "The passage says there <strong>weren't</strong> any germs around the mould, and that is why Fleming grew more of it. The unreal condition therefore flips to a positive past perfect: <em>if there had been any germs growing around it</em>. <em>had been any</em> is also accepted.",
    wrong: [
      { opt: 'were any germs', why: 'The past simple gives a second conditional about the present. This observation happened once, in the past, so the past perfect is needed.' },
      { opt: "hadn't been any germs", why: 'The real fact is already negative. Keeping it negative would mean Fleming did not grow the mould, which is the opposite of what happened.' }
    ],
    rule: 'To build a third conditional from a fact, flip it: a negative fact becomes a positive condition.'
  },
  u18c2_3: {
    q: "If his initial publication hadn't been received so poorly by the medical community, he ______ in 1932.",
    a: "wouldn't have abandoned his research",
    why: "His paper was largely ignored and he <strong>did</strong> abandon the research in 1932, so the unreal result reverses that: <em>he wouldn't have abandoned his research</em>. The date <em>in 1932</em> confirms that the result is in past time.",
    wrong: [
      { opt: "wouldn't abandon his research", why: 'A present-result form cannot work with the finished date <em>in 1932</em>.' },
      { opt: 'would have abandoned his research', why: 'This keeps the polarity of the real event. Since the condition has been reversed, the result must be reversed too.' }
    ],
    rule: 'Reverse both halves: negative condition → positive result, and the other way round.'
  },
  u18c2_4: {
    q: 'Penicillin might not have been developed if Florey and Chain ______.',
    a: "hadn't seen Fleming's research papers",
    why: 'They did see the papers in 1935, and that is why penicillin was developed. To imagine the alternative, the condition turns negative and past perfect: <em>if they hadn’t seen Fleming’s research papers</em>.',
    wrong: [
      { opt: "didn't see Fleming's research papers", why: 'The past simple states a real fact about the past; an unreal past condition needs <em>hadn’t</em> + past participle.' },
      { opt: "had seen Fleming's research papers", why: 'They really did see the papers, so a positive condition just restates history. The main clause (<em>might not have been developed</em>) needs a negative condition.' }
    ],
    rule: 'Read the printed main clause first — it tells you whether the condition must be positive or negative.'
  },
  u18c2_5: {
    q: "If Harold Ridley ______ pilots during World War II, he wouldn't have noticed the effects of Perspex splinters on their eyes.",
    a: "hadn't worked with RAF",
    why: "Ridley did work with RAF pilots, which is how he made his observation, so the unreal condition is negative and past perfect. The word <em>pilots</em> is already printed after the gap, so <em>hadn't worked with RAF</em> completes the phrase; <em>hadn't worked with RAF pilots</em> is accepted too.",
    wrong: [
      { opt: "didn't work with RAF", why: 'The past simple describes real past time, or sets up a second conditional about now. The war is a finished period, so the past perfect is required.' },
      { opt: 'had worked with RAF', why: 'He really did work with them. A positive condition would restate the facts, but the main clause says he <em>wouldn’t</em> have noticed anything.' }
    ],
    rule: 'Look at the words printed after the gap so your answer joins on grammatically.'
  },
  u18c2_6: {
    q: "If the pilots' eye injuries had become infected from bits of Perspex, he ______ to implant plastic lenses in cataract patients' eyes.",
    a: "wouldn't have decided",
    why: "Their eyes did <strong>not</strong> become infected, and that is precisely why Ridley chose plastic. Turning the condition positive therefore turns the result negative: <em>he wouldn't have decided</em>.",
    wrong: [
      { opt: "wouldn't decide", why: 'His decision was taken decades ago, so the result belongs to past time and needs <em>have</em> + past participle.' },
      { opt: "didn't decide", why: 'The plain past simple denies a real fact — but he did decide. Only <em>would</em> makes the clause hypothetical.' }
    ],
    rule: 'A positive <em>if</em> clause built from a negative fact produces a negative result.'
  },
  u18c2_7: {
    q: 'If earlier surgeons had used plastic lenses, the operations ______.',
    a: "wouldn't have failed",
    why: "The passage says the glass-lens operations <em>always failed</em> because the body rejected the glass. Change the material and the outcome reverses: <em>the operations wouldn't have failed</em>.",
    wrong: [
      { opt: 'would have failed', why: 'That repeats what really happened. The point of the sentence is to imagine a different, better outcome.' },
      { opt: "wouldn't fail", why: 'Those operations took place before Ridley’s work, so the result must be in past time: <em>would have</em> + past participle.' }
    ],
    rule: 'Check the meaning of the whole sentence before choosing positive or negative.'
  },
  u18c2_8: {
    q: "It wouldn't have taken so many years for the technique to become widely available if ______ Ridley's discoveries.",
    a: "the medical community hadn't opposed",
    why: "The gap comes straight after <em>if</em>, so it needs a subject as well as a verb. The medical community really did oppose the discoveries, so the unreal condition is negative: <em>if the medical community hadn't opposed Ridley's discoveries</em>.",
    wrong: [
      { opt: "hadn't opposed", why: 'The verb on its own leaves the <em>if</em> clause with no subject. Check what is printed on both sides of the gap before writing.' },
      { opt: "the medical community didn't oppose", why: 'The past simple cannot express an unreal past condition; it needs the past perfect <em>hadn’t opposed</em>.' }
    ],
    rule: 'A gap immediately after <em>if</em> usually needs subject + verb.'
  },

  /* ── C3 Find and correct the mistakes ── */
  u18c3_2: {
    q: "What would you ______ if you'd failed the exam?",
    a: 'have done',
    why: "The <em>if</em> clause is past perfect (<em>you'd failed</em>), so the question must be a third conditional: <em>would</em> + <em>have</em> + past participle. Only <em>have done</em> goes in the gap, giving <em>What would you have done…?</em>",
    wrong: [
      { opt: 'do', why: 'The typical error here. <em>What would you do…?</em> needs a second conditional condition: <em>if you failed the exam</em>.' },
      { opt: 'have did', why: 'The past participle of <em>do</em> is <em>done</em>: do – did – done.' }
    ],
    rule: 'Match the halves — past perfect condition → <em>would have</em> + past participle, even in questions.'
  },
  u18c3_3: {
    q: "______ university next autumn if I hadn't had such bad exam results.",
    a: 'I would be starting',
    why: "<em>Next autumn</em> puts the result in future time while the condition is past — a mixed conditional. A hypothetical future arrangement takes <em>would be</em> + <em>-ing</em>: <em>I'd be starting university next autumn</em>.",
    wrong: [
      { opt: 'I would have started', why: 'A past result cannot go with <em>next autumn</em>. The starting date is still ahead; it simply is not going to happen.' },
      { opt: 'I will be starting', why: '<em>Will</em> states a real future. This future is hypothetical — it depends on exam results that were in fact bad.' }
    ],
    rule: 'Past condition + future result → <em>would be</em> + <em>-ing</em>.'
  },
  u18c3_4: {
    q: "If the government ______ their promise, taxes wouldn't have gone up last year.",
    a: 'had kept',
    why: "<em>Last year</em> and <em>wouldn't have gone up</em> place the whole sentence in unreal past time, so the <em>if</em> clause must be past perfect: <em>had kept</em>. <em>had kept their promise</em> is accepted as the fuller answer.",
    wrong: [
      { opt: 'kept', why: 'The past simple would set up a second conditional about a general present situation, which clashes with the past result <em>wouldn’t have gone up last year</em>.' },
      { opt: 'would keep', why: '<em>Would</em> does not belong in the <em>if</em> clause; the result clause already has it.' }
    ],
    rule: 'A <em>would have</em> result almost always needs a <em>had</em> + past participle condition.'
  },
  u18c3_5: {
    q: 'I would have finished my essay on time if I ______ the accident.',
    a: "hadn't had",
    why: "There really was an accident and the essay really was late, so the unreal condition is a negative past perfect: <em>if I hadn't had the accident</em>. Both words are needed — <em>hadn't</em> is the auxiliary and <em>had</em> is the past participle of <em>have</em>.",
    wrong: [
      { opt: "didn't have", why: 'The past simple gives a second conditional about now, but the accident and the deadline are both finished past events.' },
      { opt: "hadn't", why: 'That leaves out the main verb. <em>Have an accident</em> still needs its own <em>had</em> after the auxiliary.' }
    ],
    rule: "<em>hadn't had</em> looks odd but is correct: auxiliary + past participle."
  },
  u18c3_6: {
    q: 'If I was getting married next weekend, I ______ by now.',
    a: "'d be very excited",
    why: 'The condition is an imagined future arrangement (<em>next weekend</em>) and the result is how the speaker would feel at this point in time, so a present result form is needed: <em>would be</em> + adjective. <em>would be very excited</em> and <em>would be excited</em> are also accepted.',
    wrong: [
      { opt: "'d have been very excited", why: 'A past result form needs a past moment to belong to, but the wedding would be <em>next weekend</em> — still ahead — so there is no such moment.' },
      { opt: "'m very excited", why: 'A real present tense would claim the wedding is actually happening. The <em>if</em> clause tells you it is not.' }
    ],
    rule: 'Future condition + present result → <em>would</em> + infinitive.'
  },
  u18c3_7: {
    q: 'If the economic conditions had been better when I bought this house, I ______ a fortune by now.',
    a: 'might have made',
    why: 'The profit would have built up over the years since the purchase, so the result takes a perfect form; and because a fortune is only a possibility, <em>might</em> is more accurate than <em>would</em>. <em>may have made</em> is accepted too.',
    wrong: [
      { opt: 'might make', why: 'Without <em>have</em> the sentence looks forward, but the imagined profit relates to the whole period since the house was bought.' },
      { opt: 'have made', why: 'A real present perfect claims a fortune truly was made. A modal is needed to keep the clause hypothetical.' }
    ],
    rule: 'Use <em>might/could have</em> + past participle when the unreal past result is possible rather than certain.'
  },
  u18c3_8: {
    q: "Life today ______ very different if Thomas Edison hadn't invented the electric light.",
    a: 'would be',
    why: '<em>Today</em> makes the result present while the condition is firmly past — a mixed conditional. So the result clause takes <em>would</em> + infinitive: <em>Life today would be very different</em>.',
    wrong: [
      { opt: 'would have been', why: 'That would describe a different past, but the sentence is about life as we live it now.' },
      { opt: 'is', why: 'A real present tense states a fact. Edison did invent the electric light, so the difference is purely imaginary.' }
    ],
    rule: '<em>today</em>, <em>now</em>, <em>these days</em> in the result clause → <em>would</em> + infinitive.'
  },
  u18c3_9: {
    q: 'If you were more considerate, you ______ so much noise last night.',
    a: "wouldn't have made",
    why: 'The condition uses the past simple <em>were</em> for a permanent present characteristic, but <em>last night</em> puts the result in past time — a mixed conditional running the other way. The result therefore takes <em>wouldn’t have</em> + past participle.',
    wrong: [
      { opt: "wouldn't make", why: 'That form fits a present or general result, but <em>last night</em> names one finished occasion.' },
      { opt: "didn't make", why: 'The past simple denies a real fact — the noise really was made, which is the whole complaint.' }
    ],
    rule: 'Present condition + past result → <em>if</em> + past simple, <em>would have</em> + past participle.'
  },
  u18c3_10: {
    q: "If I ______ to university, I wouldn't be doing this job now.",
    a: "hadn't gone",
    why: "The speaker did go to university, and the result is about the present (<em>now</em>), so the condition must reverse a finished past event: <em>if I hadn't gone</em> — past perfect.",
    wrong: [
      { opt: "didn't go", why: 'The past simple would give a second conditional about a general present situation, but going to university was a one-off past event.' },
      { opt: "hadn't went", why: 'The past participle of <em>go</em> is <em>gone</em>: go – went – gone.' }
    ],
    rule: 'After <em>had</em> always use the third form: gone, done, taken, seen.'
  },

  /* ── C4 wish / should have ── */
  u18c4_2: {
    q: 'I really ______ (you/ask) me before borrowing the car yesterday. I needed to use it.',
    a: "wish you'd asked",
    why: "<em>Yesterday</em> makes this a regret about a finished past action, so <em>wish</em> is followed by the past perfect: <em>wish you had asked</em> / <em>wish you'd asked</em>. The key also accepts <em>wish you asked</em>.",
    wrong: [
      { opt: 'wish you would ask', why: '<em>Wish</em> + <em>would</em> asks someone to change their future behaviour. The borrowing has already happened, so it is too late for that.' },
      { opt: 'wish you ask', why: 'After <em>wish</em> the verb always steps back a tense; the present simple is never used.' }
    ],
    rule: '<em>wish</em> + past perfect = regret about the past.'
  },
  u18c4_3: {
    q: "I'm not enjoying my degree course at all. I ______ (I/not/choose) physics.",
    a: "wish I hadn't chosen",
    why: "Choosing the subject is a finished past decision the speaker now regrets, so <em>wish</em> takes the past perfect: <em>wish I hadn't chosen</em>. The key also accepts the <em>should</em> version, <em>shouldn't have chosen</em>.",
    wrong: [
      { opt: "wish I didn't choose", why: 'The past simple after <em>wish</em> refers to a present situation. The choice itself is over and cannot be unmade.' },
      { opt: "wish I hadn't choose", why: 'After <em>hadn’t</em> the verb must be a past participle: choose – chose – chosen.' }
    ],
    rule: 'choose – chose – chosen.'
  },
  u18c4_4: {
    q: 'I ______ (choose) maths instead because I used to love it at school.',
    a: 'should have chosen',
    why: 'The brackets give only <em>choose</em>, with no subject pronoun, and the sentence already starts with <em>I</em> — so this gap needs the <em>should</em> pattern. <em>Should have</em> + past participle says the other option would have been the better one.',
    wrong: [
      { opt: 'wish I had chosen', why: 'Fine in meaning, but the sentence already has its subject <em>I</em> before the gap, so a new <em>wish</em> clause will not fit.' },
      { opt: 'should choose', why: 'That gives advice about the future. The course has already been started, so the past form is needed.' }
    ],
    rule: '<em>should have</em> + past participle = it was a mistake not to do it.'
  },
  u18c4_5: {
    q: '______ (I/study) languages at school because now I travel regularly for work to Berlin and Paris.',
    a: "I wish I'd studied",
    why: "The gap opens the sentence and the brackets supply the pronoun <em>I</em>, so the full <em>I wish I…</em> pattern is needed. School is finished, so the regret takes the past perfect: <em>I wish I'd studied languages at school</em>.",
    wrong: [
      { opt: 'I wish I studied', why: 'The past simple after <em>wish</em> would mean "I wish I were studying languages now", but the regret is about a missed opportunity <em>at school</em>.' },
      { opt: 'I should have studied', why: 'A sensible sentence, but the brackets provide the subject pronoun, which points to the <em>I wish I…</em> pattern here.' }
    ],
    rule: 'Read the brackets: a subject pronoun signals <em>wish</em>, no pronoun signals <em>should</em>.'
  },
  u18c4_6: {
    q: 'That man is really annoying me. I ______ (he/stop) whistling.',
    a: "wish he'd stop",
    why: "The whistling is going on right now and the speaker wants somebody else to change what they are doing — exactly what <em>wish</em> + <em>would</em> is for: <em>I wish he'd stop</em> (= <em>would stop</em>).",
    wrong: [
      { opt: 'wish he stopped', why: '<em>Wish</em> + past simple describes a situation you would like to be different, but it does not carry the sense of asking someone to change their behaviour.' },
      { opt: "wish he'd stopped", why: 'The past perfect would be a regret about whistling that has already finished, but the noise is still going on.' }
    ],
    rule: '<em>wish</em> + <em>would</em> = I want somebody to change their behaviour (irritation).'
  },
  u18c4_7: {
    q: 'We always get lost when you have the map. You ______ (let) me have the map from the start!',
    a: 'should have let',
    why: 'The brackets give no subject and the speaker is criticising a past decision, so it takes <em>should have</em> + past participle. The past participle of <em>let</em> is <em>let</em>, unchanged.',
    wrong: [
      { opt: 'should let', why: 'That advises about now or the future, but the complaint is about what should have happened <em>from the start</em>.' },
      { opt: 'should have letted', why: '<em>Let</em> is irregular and has no <em>-ed</em> forms: let – let – let.' }
    ],
    rule: '<em>should have</em> + past participle criticises what somebody actually did.'
  },
  u18c4_8: {
    q: "______ (I/have) more time to work on this assignment. I'm worried I won't finish it by the deadline.",
    a: 'I wish I had',
    why: "The problem is happening now — there is not enough time — so <em>wish</em> takes the past simple: <em>I wish I had more time</em>. <em>I wish I'd had</em> is also accepted by the key.",
    wrong: [
      { opt: 'I wish I have', why: 'The present simple is never used after <em>wish</em>; the verb always steps one tense back.' },
      { opt: 'I wish I would have', why: '<em>Wish</em> + <em>would</em> is for other people’s behaviour or for things outside your control, not for your own state.' }
    ],
    rule: '<em>wish</em> + past simple = a present situation you would like to be different.'
  },
  u18c4_9: {
    q: '______ (it/stop) raining. I want to go for a walk.',
    a: 'I wish it would stop',
    why: 'The rain is outside the speaker’s control and they want it to change, so <em>wish</em> + <em>would</em> is used: <em>I wish it would stop raining</em>. <em>wish it would stop</em> is also accepted.',
    wrong: [
      { opt: 'I wish it stopped', why: '<em>Wish</em> + past simple describes a present state you would like to be different; it does not express impatience for a change.' },
      { opt: 'I wish it had stopped', why: 'The past perfect would be a regret about rain that has already ended, but it is still raining.' }
    ],
    rule: '<em>wish</em> + <em>would</em> also covers annoying things we cannot control: weather, traffic, noise.'
  },
  u18c4_10: {
    q: 'I have terrible problems with my knees. I ______ (I/not/do) so much running when I was younger.',
    a: "wish I hadn't done",
    why: "<em>When I was younger</em> marks a finished past period, so the regret takes <em>wish</em> + past perfect: <em>wish I hadn't done</em>. The key also accepts <em>shouldn't have done</em>.",
    wrong: [
      { opt: "wish I didn't do", why: 'The past simple after <em>wish</em> refers to now, but the running took place years ago.' },
      { opt: "wish I hadn't did", why: 'After <em>hadn’t</em> the verb must be the past participle <em>done</em>: do – did – done.' }
    ],
    rule: 'A past time phrase (<em>when I was younger</em>, <em>yesterday</em>) forces <em>wish</em> + past perfect.'
  },
  u18c4_11: {
    q: 'You ______ (not/tell) Paula about the party — it was meant to be a surprise.',
    a: "shouldn't have told",
    why: "The brackets give no subject and the speaker is criticising something the listener actually did, so it takes <em>shouldn't have</em> + past participle: <em>You shouldn't have told Paula</em>.",
    wrong: [
      { opt: "shouldn't tell", why: 'That is advice about the future, but the secret is already out — <em>it was meant to be a surprise</em>.' },
      { opt: "wish you hadn't told", why: 'A possible regret, but the sentence begins with <em>You</em>, so the gap must continue that clause rather than start a new <em>wish</em> clause.' }
    ],
    rule: "<em>shouldn't have</em> + past participle = you did it, and it was wrong."
  },

  /* ── D Q1–8 Classification: giant panda / spectacled bear ── */
  u18d1_1: {
    q: 'Classify: an extra thumb on each paw',
    a: 'A — the giant panda',
    why: "The passage says the giant panda <em>has evolved a sixth digit, a prehensile elongated wrist bone called the radial sesamoid</em>, used as a 'false thumb' to roll up bamboo leaves. Nothing similar is said about the spectacled bear.",
    wrong: [
      { opt: 'B — the spectacled bear', why: 'The spectacled bear is described as a climber that reaches fruit and builds nests, but no extra digit is ever mentioned for it.' },
      { opt: 'C — both the giant panda and the spectacled bear', why: 'The sixth digit appears only in the paragraph about the panda’s specialised bamboo diet. Do not assume a feature is shared just because both animals are bears.' }
    ],
    rule: 'Answer C only when the passage explicitly links the feature to both animals.'
  },
  u18d1_2: {
    q: 'Classify: a tendency to sleep in trees',
    a: 'B — the spectacled bear',
    why: 'The passage says spectacled bears <em>construct tree nests to act as a bed as well as a platform to feed from</em>. A bed is where you sleep, so this is a paraphrase of sleeping in trees.',
    wrong: [
      { opt: 'A — the giant panda', why: 'Pandas <em>feed mainly on the ground</em> and only climb sometimes; nothing is said about them sleeping in trees.' },
      { opt: 'C — both the giant panda and the spectacled bear', why: 'Both can climb, but only the spectacled bear is described as building something to sleep in.' }
    ],
    rule: 'Watch for paraphrase: <em>a bed</em> in the passage = <em>sleep</em> in the question.'
  },
  u18d1_3: {
    q: 'Classify: their species originated 18 million years ago',
    a: 'C — both the giant panda and the spectacled bear',
    why: 'The passage says <em>the panda is our oldest living bear, followed by the spectacled bear. Both are survivors of an ancient lineage dating back 18 million years.</em> The word <em>both</em> makes it explicit.',
    wrong: [
      { opt: 'A — the giant panda', why: 'The panda is the older of the two, but the very next sentence puts the spectacled bear in the same 18-million-year lineage.' },
      { opt: 'B — the spectacled bear', why: 'The date belongs to both animals, not to the spectacled bear alone.' }
    ],
    rule: 'Other figures nearby (57, 34, four to five million) belong to different groups — match each number to the right animal.'
  },
  u18d1_4: {
    q: 'Classify: the ability to adjust to different environments',
    a: 'B — the spectacled bear',
    why: 'The passage says <em>Spectacled bears are highly adaptable and are found in a wide range of habitats</em>. The panda is set against this: it lives only in mountain forests between 1,200 and 3,500 metres.',
    wrong: [
      { opt: 'A — the giant panda', why: 'The words <em>In contrast</em> introduce the panda sentence and signal the opposite: a narrow, specialised habitat.' },
      { opt: 'C — both the giant panda and the spectacled bear', why: 'The paragraph is built as a contrast between the two animals, so the feature cannot belong to both.' }
    ],
    rule: 'Contrast markers (<em>in contrast</em>, <em>however</em>, <em>whereas</em>) usually rule out answer C.'
  },
  u18d1_5: {
    q: 'Classify: the use of noises to socialise with each other',
    a: 'A — the giant panda',
    why: 'The sentence <em>They also both have a distinctive cry which they use to communicate with others in their group</em> comes in the paragraph comparing the giant panda with the <strong>red</strong> panda. Of the two animals in this task, only the giant panda is covered.',
    wrong: [
      { opt: 'C — both the giant panda and the spectacled bear', why: 'This is the trap. <em>Both</em> in the passage refers to the giant panda and the red panda — a raccoon relative — not to the spectacled bear.' },
      { opt: 'B — the spectacled bear', why: 'No cry, call or other noise is mentioned anywhere in the passage for the spectacled bear.' }
    ],
    rule: 'Always check which two things a word like <em>both</em> or <em>they</em> actually refers back to.'
  },
  u18d1_6: {
    q: 'Classify: the ability to climb trees',
    a: 'C — both the giant panda and the spectacled bear',
    why: 'The passage says pandas <em>are capable of climbing trees as well</em> and that <em>the spectacled bear is a more frequent climber</em>. Both can climb, even though one does it more often.',
    wrong: [
      { opt: 'B — the spectacled bear', why: 'It climbs more often, but <em>a more frequent climber</em> is a comparison, which implies the panda climbs too. The question asks about ability, not frequency.' },
      { opt: 'A — the giant panda', why: 'The spectacled bear is described climbing cacti and fruit trees, so the panda cannot be the only climber.' }
    ],
    rule: 'A comparative (<em>a more frequent climber</em>) implies both sides do the thing.'
  },
  u18d1_7: {
    q: 'Classify: the eating of meat',
    a: 'C — both the giant panda and the spectacled bear',
    why: 'The passage says the giant panda <em>supplements its diet with meat which it scavenges</em> and, in the next sentence, that <em>Spectacled bears eat carrion, too</em>. The word <em>too</em> confirms both.',
    wrong: [
      { opt: 'B — the spectacled bear', why: 'Spectacled bears even kill small calves, which makes them the more obvious meat-eater, but the panda scavenges meat as well.' },
      { opt: 'A — the giant panda', why: 'The panda does eat a little meat, but it is not alone: the sentence immediately after adds the spectacled bear.' }
    ],
    rule: 'Small linking words — <em>too</em>, <em>also</em>, <em>as well</em> — are the usual signal for answer C.'
  },
  u18d1_8: {
    q: 'Classify: a similarity to a type of raccoon',
    a: 'A — the giant panda',
    why: 'The red panda is <em>a member of the raccoon family</em>, and the passage says the giant panda <em>shares many physical characteristics with the red panda</em> — similar teeth, skulls and forepaws. The spectacled bear is never linked to raccoons.',
    wrong: [
      { opt: 'C — both the giant panda and the spectacled bear', why: 'The spectacled bear resembles the giant panda in some ways, but the passage never compares it with the red panda or with raccoons.' },
      { opt: 'B — the spectacled bear', why: 'The spectacled bear is the panda’s closest living <strong>bear</strong> relative; raccoons belong to a different family altogether.' }
    ],
    rule: 'Answer from what the passage states, not from a chain of your own reasoning.'
  },

  /* ── D Q9–13 Sentence completion (NO MORE THAN TWO WORDS) ── */
  u18d2_9: {
    q: "The panda's digestive system is that of a ______.",
    a: 'carnivore',
    why: 'The passage says <em>its physiology is typical of a carnivore and it has no special adaptation for digesting cellulose</em>. <em>Carnivore</em> is one word, well inside the limit; <em>a carnivore</em> is also accepted.',
    wrong: [
      { opt: 'meat-eating predator', why: 'That phrase describes the whole order Carnivora in a different paragraph, not the panda’s digestive system — and the article <em>a</em> is already printed before the gap.' },
      { opt: 'bamboo eater', why: 'True of what the panda eats, but the sentence is about the kind of digestive system it has, which is the surprising opposite.' }
    ],
    rule: 'Copy the word from the passage and check it fits the grammar around the gap.'
  },
  u18d2_10: {
    q: 'The giant panda must eat constantly because it can only ______ a small amount of bamboo.',
    a: 'digest',
    why: 'The passage says <em>A panda manages to digest only about 17% of the bamboo it eats</em>. After <em>can only</em> the verb must be a bare infinitive, so <em>digest</em> is the right form.',
    wrong: [
      { opt: 'digests', why: 'After the modal <em>can</em> the verb takes no <em>-s</em>: <em>can only digest</em>.' },
      { opt: 'eat', why: 'The panda eats 20 kg or more a day — a huge amount. The limit is on how much it can digest, not on how much it can eat.' }
    ],
    rule: 'Adjust the word form to fit the sentence, but never swap the word for one of your own.'
  },
  u18d2_11: {
    q: 'In winter, giant pandas cannot ______ because of their feeding habits.',
    a: 'hibernate',
    why: 'The passage says the panda <em>continues eating in the bitterly cold winter, at a time when many other bears hibernate</em>. Because it must keep eating, it cannot do what other bears do. The word appears in the passage and is a single word.',
    wrong: [
      { opt: 'store fat', why: 'Tempting, since the passage says <em>Unable to store fat effectively</em> — but that is the reason the panda keeps eating, not the thing its feeding habits prevent.' },
      { opt: 'sleep', why: 'A reasonable synonym, but the instruction says <strong>words taken from the passage</strong>, and <em>sleep</em> does not appear here.' }
    ],
    rule: 'Use the passage’s own words — your own synonyms are marked wrong.'
  },
  u18d2_12: {
    q: 'Spectacled bears build ______ to help reach their food.',
    a: 'tree nests',
    why: 'The passage says <em>They also construct tree nests to act as a bed as well as a platform to feed from fruit-laden branches.</em> <em>Tree nests</em> is exactly two words; <em>nests</em>, <em>platforms</em>, <em>a tree nest</em> and <em>a nest</em> are also accepted.',
    wrong: [
      { opt: 'tree nests to act as a bed', why: 'This breaks the <strong>NO MORE THAN TWO WORDS</strong> limit, so it scores zero however accurate the information is.' },
      { opt: 'cacti', why: 'Spectacled bears climb spiky cacti to reach fruit, but they do not build them. <em>Build</em> is the key word in the question.' }
    ],
    rule: 'An over-length answer is marked wrong even when the content is right.'
  },
  u18d2_13: {
    q: 'Giant pandas may use their ______ to threaten other pandas.',
    a: 'eye patches',
    why: "Schaller explains that <em>in pandas, a stare is a threat</em> and that <em>the eye patches enlarge the panda's small, dark eyes tenfold, making the stare more powerful</em>. <em>eye patch</em> is accepted as well.",
    wrong: [
      { opt: 'distinctive coat', why: 'The coat is the general topic of the paragraph, but the part that makes the stare threatening is specifically the eye patches.' },
      { opt: 'small, dark eyes', why: 'Three words, so it breaks the limit — and it is the patches that magnify the eyes, not the eyes that do the work.' }
    ],
    rule: 'Zoom in on the exact detail the sentence asks for, not the general topic.'
  },

  /* ── Grammar Focus Task ── */
  u18gft_1: {
    q: 'If scientists ______ (have) DNA testing 100 years ago, they would have been able to discover what a panda was.',
    a: 'had had',
    why: '<em>100 years ago</em> is a finished past time, and they did not have DNA testing then, so the <em>if</em> clause takes the past perfect. The auxiliary <em>had</em> plus the past participle <em>had</em> gives the double form <em>had had</em> (contracted: <em>’d had</em>).',
    wrong: [
      { opt: 'had', why: 'One <em>had</em> is a past simple, which would set up a second conditional about the present. Two are needed here: one auxiliary, one main verb.' },
      { opt: 'have had', why: 'The present perfect describes real time up to now; an unreal past condition needs <em>had</em> + past participle.' }
    ],
    rule: '<em>had had</em> is correct English: <em>had</em> (auxiliary) + <em>had</em> (past participle of <em>have</em>).'
  },
  u18gft_2: {
    q: 'If scientists had had DNA testing 100 years ago, they ______ (be able to) discover what a panda was.',
    a: 'would have been able',
    why: 'The result is in unreal past time, and <em>can</em> has no perfect form, so past ability is expressed with <em>be able to</em>: <em>they would have been able to discover what a panda was</em>. <em>’d have been able</em>, <em>might have been able</em> and <em>could have been able</em> are also accepted.',
    wrong: [
      { opt: 'would be able', why: 'That refers to now or the future, but the condition is set 100 years ago, so the result belongs to past time as well.' },
      { opt: 'would have could', why: 'Two modals cannot follow each other, and <em>could</em> has no past participle. Use <em>be able to</em> instead.' }
    ],
    rule: 'Never stack modals: <s>would can</s> → <em>would be able to</em>.'
  },
  u18gft_3: {
    q: "If Alphonse Edwards ______ (not/dissect) a giant panda, scientists wouldn't have thought the giant panda was a raccoon.",
    a: "hadn't dissected",
    why: "The dissection really happened, the year after Pere David's description, so the unreal condition reverses it into a negative past perfect: <em>hadn't dissected</em> / <em>had not dissected</em>.",
    wrong: [
      { opt: "didn't dissect", why: 'The past simple states a real fact, or sets up a second conditional about now. This is a one-off historical event, so the past perfect is required.' },
      { opt: "wouldn't have dissected", why: '<em>Would</em> belongs in the result clause; the <em>if</em> clause takes the past perfect on its own.' }
    ],
    rule: "Historical 'what if' sentences are third conditionals."
  },
  u18gft_4: {
    q: "If Alphonse Edwards hadn't dissected a giant panda, scientists ______ (not/think) the giant panda was a raccoon.",
    a: "wouldn't have thought",
    why: "The mistaken belief belongs to the past — it lasted more than a century but has now been settled by DNA testing — so the result clause takes <em>wouldn't have</em> + past participle. <em>Might not have thought</em> is also accepted.",
    wrong: [
      { opt: "wouldn't think", why: 'A present result would suggest scientists are still undecided, but the passage says the question has finally been answered.' },
      { opt: "wouldn't have thinked", why: 'The past participle of <em>think</em> is <em>thought</em>: think – thought – thought.' }
    ],
    rule: 'think – thought – thought.'
  },
  u18gft_5: {
    q: "If the giant panda ______ (not/resemble) a red panda, there wouldn't have been so many arguments among scientists.",
    a: "didn't resemble",
    why: 'The resemblance is a permanent present fact — the passage uses the present simple, <em>The giant panda <strong>shares</strong> many physical characteristics with the red panda</em> — so the condition takes the past simple. With a past result clause, that makes a mixed conditional.',
    wrong: [
      { opt: "hadn't resembled", why: 'The past perfect would suggest the resemblance existed only in the past and has since disappeared, but it is still true today.' },
      { opt: "doesn't resemble", why: 'The present simple states a real fact. In an unreal condition the verb must step back one tense, to the past simple.' }
    ],
    rule: 'Present condition + past result → <em>if</em> + past simple, <em>would have</em> + past participle.'
  },
  u18gft_6: {
    q: "If the giant panda didn't resemble a red panda, there ______ (not/be) so many arguments among scientists.",
    a: "wouldn't have been",
    why: "The arguments ran for more than a century and are now over, so the result belongs to past time: <em>wouldn't have been</em>. Paired with the present condition in the <em>if</em> clause, this is a mixed conditional. <em>Might not have been</em> is also accepted.",
    wrong: [
      { opt: "wouldn't be", why: 'A present result would mean the arguments are still going on, but the passage says the panda has <em>finally</em> been admitted to the bear family.' },
      { opt: "weren't", why: 'The past simple states a fact — and the arguments really did take place. <em>Would</em> is what makes the clause hypothetical.' }
    ],
    rule: 'Decide the time of each clause separately: in a mixed conditional they differ.'
  },
  u18gft_7: {
    q: 'If the 1991 DNA tests ______ (not/contradict) the earlier findings, then the argument would have been resolved earlier.',
    a: "hadn't contradicted",
    why: 'The 1991 tests did contradict the earlier findings, so the unreal condition is a negative past perfect. The date makes the past reference unmistakable.',
    wrong: [
      { opt: "didn't contradict", why: 'The past simple would describe real past time, or an unreal present. A dated historical event needs the past perfect.' },
      { opt: "hadn't contradict", why: 'After <em>hadn’t</em> the verb must be a past participle: <em>contradicted</em>.' }
    ],
    rule: 'A year in the <em>if</em> clause (<em>1991</em>, <em>1932</em>) points to the past perfect.'
  },
  u18gft_8: {
    q: "If the 1991 DNA tests hadn't contradicted the earlier findings, then the argument ______ (be) resolved earlier.",
    a: 'would have been',
    why: '<em>Earlier</em> means earlier than it actually was, so the result stays in past time. The clause is also passive — the argument does not resolve itself — so the form is <em>would have been</em> + the past participle <em>resolved</em>. <em>Might have been</em> and <em>could have been</em> are accepted.',
    wrong: [
      { opt: 'would be', why: 'A present result would mean the argument is only being settled now, but <em>earlier</em> points to a moment in the past.' },
      { opt: 'would have', why: 'The sentence is passive, so <em>been</em> is needed before <em>resolved</em>: <em>would have been resolved</em>.' }
    ],
    rule: 'Passive third conditional: <em>would have been</em> + past participle.'
  }
};
