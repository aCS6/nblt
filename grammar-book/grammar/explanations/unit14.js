/* Unit 14 — Modals 2 (obligation, necessity, advice): explanations
   window.__EXPL[<data-id>] = { q, a, why, wrong:[{opt,why}], rule? }
   Rendered by initExplanations() in scripts/utils.js. */
window.__EXPL = {

  /* ── A1 Pre-listening prediction ── */
  u14a1_1: {
    q: 'Which of these topics do the man and his colleague talk about? (accommodation · transport · clothes · food · weather · work permits · language lessons · social life)',
    a: 'transport, language lessons, work permits and accommodation',
    why: 'The colleague\'s advice covers getting around the city (the underground, the light buses, the ferries), learning some Cantonese, sorting out a work permit before leaving, and finding somewhere to live quickly. The order you list them in does not matter — the key accepts several arrangements.',
    wrong: [
      { opt: 'food', why: 'Restaurants, cooking and eating never come up. Hong Kong is famous for its food, which makes this a tempting guess, but a prediction only counts if you actually hear it.' },
      { opt: 'weather', why: 'A natural guess for a move to a hot, humid city, but the conversation stays on practical arrangements and says nothing about the climate.' },
      { opt: 'social life', why: 'Friends, going out and meeting people are not discussed. The advice is all about the mechanics of arriving and starting work.' }
    ],
    rule: 'Predicting topics narrows what you listen for — but only tick a topic you really hear.'
  },

  /* ── A4 Classify the modal verbs from the recording ── */
  u14a4_1: {
    q: 'Table: which verbs from the recording express strong obligation or necessity?',
    a: 'mustn\'t, have to, need',
    why: 'These are the verbs the colleague uses when something is compulsory: <em>You mustn\'t dress too casually</em>, <em>You have to get a work permit</em>, <em>You\'ll need to allow a few days</em>. The future forms <em>\'ll have to</em> and <em>\'ll need</em> are accepted too, and <em>must</em> may be listed instead of <em>mustn\'t</em>.',
    wrong: [
      { opt: 'should, ought to', why: 'These two only say that something is a good idea. They belong in the "advice or suggestions" row of the table.' },
      { opt: 'needn\'t', why: '<em>Needn\'t</em> says the opposite — that there is <strong>no</strong> obligation — so it belongs in the third row.' },
      { opt: 'can, may', why: 'These express possibility and permission, not obligation, and the colleague does not use them to give her advice.' }
    ],
    rule: '<em>must, have to, have got to, need to</em> = obligation and necessity.'
  },
  u14a4_2: {
    q: 'Table: which verbs from the recording express advice or suggestions?',
    a: 'should, ought to',
    why: '<em>You should try to use the underground</em> and <em>You ought to take lots of passport photos</em> are recommendations: the colleague thinks they are a good idea, but nothing forces the man to follow them.',
    wrong: [
      { opt: 'have to, need to', why: 'These express real obligation coming from a rule or from the situation, which is much stronger than a suggestion.' },
      { opt: 'mustn\'t', why: '<em>Mustn\'t</em> is a prohibition — "it is not allowed" — which is the strongest thing on the list, not advice.' },
      { opt: 'could, might', why: 'These are about possibility rather than recommendation, and the colleague does not use them.' }
    ],
    rule: 'Advice and suggestions = <em>should</em> / <em>ought to</em>.'
  },
  u14a4_3: {
    q: 'Table: which verbs from the recording express no obligation or necessity?',
    a: 'needn\'t, don\'t need to',
    why: '<em>You needn\'t buy guide books in England</em> means it is simply not necessary — nothing is stopping him, it would just be a waste of money. <em>Don\'t have to</em> is accepted as well, as it carries the same meaning.',
    wrong: [
      { opt: 'mustn\'t', why: '<em>Mustn\'t</em> means "it is not allowed", not "it is not necessary". The two negatives look alike but mean completely different things.' },
      { opt: 'shouldn\'t', why: '<em>Shouldn\'t</em> advises against doing something, whereas <em>needn\'t</em> leaves the choice entirely open.' },
      { opt: 'have to', why: 'That is positive obligation; this row asks for the opposite.' }
    ],
    rule: '<em>needn\'t / don\'t need to / don\'t have to</em> = no necessity; <em>mustn\'t</em> = prohibition.'
  },

  /* ── A3 Fill the gaps in the colleague's advice ── */
  u14a3_1: {
    q: 'You ______ a few days to recover from jet lag.',
    a: '\'ll need to allow',
    why: 'This is advice about what will be necessary after the flight, and <em>must</em> has no future form, so English uses <em>will need to</em>. <em>will need to allow</em> and plain <em>need to allow</em> are also accepted.',
    wrong: [
      { opt: 'must allow', why: '<em>Must</em> cannot be marked for future time (<s>will must</s> is impossible), and it would make the advice sound like an order from the speaker rather than a practical necessity.' },
      { opt: '\'ll need allow', why: 'The ordinary verb <em>need</em> is followed by a <strong>to</strong>-infinitive: <em>need to allow</em>.' },
      { opt: 'needn\'t allow', why: 'The negative reverses the advice — jet lag is exactly why a few days\' recovery is necessary.' }
    ],
    rule: 'There is no past or future <em>must</em> — use <em>have to</em> or <em>need to</em>.'
  },
  u14a3_2: {
    q: 'You ______ the underground system as much as possible.',
    a: 'should try to use',
    why: 'This is a recommendation, not a rule — nobody forces him onto the underground — so <em>should</em> is right, and a modal is followed by the bare infinitive <em>try</em>.',
    wrong: [
      { opt: 'have to try to use', why: 'That states an obligation, but there is no rule requiring the underground; the colleague simply thinks it is the best way to get around.' },
      { opt: 'should to try to use', why: '<em>Should</em> is a modal and never takes <em>to</em>: <s>should to try</s>.' },
      { opt: 'should trying to use', why: 'After a modal the verb has no <em>-ing</em> ending: <em>should try</em>.' }
    ],
    rule: '<em>should</em> + bare infinitive.'
  },
  u14a3_3: {
    q: 'You ______ some Cantonese to travel on the public light buses.',
    a: '\'ll have to learn',
    why: 'The light-bus drivers do not use English, so learning some Cantonese is a practical necessity, and it lies in the future — hence <em>\'ll have to</em>. <em>will have to learn</em> and <em>have to learn</em> are also accepted.',
    wrong: [
      { opt: '\'ll must learn', why: 'Two modal verbs cannot follow each other: <s>will must</s>. The future of obligation is <em>will have to</em>.' },
      { opt: 'should learn', why: 'That downgrades it to a suggestion, but without the language he simply cannot use those buses.' },
      { opt: '\'ll have to learning', why: '<em>have to</em> is followed by the base form of the verb: <em>have to learn</em>.' }
    ],
    rule: 'Future obligation = <em>will have to</em> / <em>will need to</em>.'
  },
  u14a3_4: {
    q: 'You ______ loose change on the ferries and the buses.',
    a: 'should always carry',
    why: 'This is friendly advice, so <em>should</em> is right, and the adverb <em>always</em> goes <strong>after</strong> the modal: <em>should always carry</em>.',
    wrong: [
      { opt: 'always should carry', why: 'Adverbs such as <em>always, also, never, just</em> and <em>only</em> come after the modal verb, not in front of it.' },
      { opt: 'should carry always', why: 'End position is unnatural for <em>always</em> with a modal; the normal slot is between the modal and the main verb.' },
      { opt: 'must always carry', why: 'That turns advice into an order. Nobody obliges him to carry change — it is just sensible, so the recording uses <em>should</em>.' }
    ],
    rule: 'modal + adverb + main verb: <em>should always carry</em>, <em>must never do</em>.'
  },
  u14a3_5: {
    q: 'You ______ to speak Cantonese in some market stalls.',
    a: '\'ll need',
    why: 'The words after the gap are <em>to speak</em>, so the gap needs a verb that is completed by a <strong>to</strong>-infinitive — <em>need</em>. As the advice looks ahead to his life in Hong Kong, the future <em>\'ll need</em> (or <em>will need</em>) is used.',
    wrong: [
      { opt: 'should', why: 'This gives <s>You should to speak</s>. <em>Should</em> takes a bare infinitive, so it cannot sit in front of the printed <em>to</em>.' },
      { opt: '\'ll must', why: '<s>Will must</s> is impossible — only one modal per verb phrase — and <em>must</em> is never followed by <em>to</em>.' },
      { opt: '\'ll have', why: '<em>You\'ll have to speak Cantonese</em> is perfectly good English, but it presents the point as a firm obligation; the recording uses <em>\'ll need to</em>, which is what the key accepts here.' }
    ],
    rule: 'Look at the words printed after the gap — they tell you whether <em>to</em> is already there.'
  },
  u14a3_6: {
    q: 'You ______ a work permit before you go.',
    a: 'have to get',
    why: 'A work permit is an official requirement of the immigration system, and <em>have to</em> is the usual choice when the obligation comes from a law or an institution rather than from the speaker. <em>\'ll have to get</em> and <em>will have to get</em> are also accepted.',
    wrong: [
      { opt: 'must get', why: 'Not ungrammatical, but <em>must</em> suggests the obligation comes from the speaker. For laws and institutional rules spoken English prefers <em>have to</em> — <em>must</em> belongs on the printed notice itself.' },
      { opt: 'don\'t have to get', why: 'This reverses the meaning: without a permit he cannot legally work there.' },
      { opt: 'should get', why: 'That downgrades a legal requirement to friendly advice.' }
    ],
    rule: 'Rules and laws → <em>have to</em> / <em>need to</em>; the speaker\'s own wish → <em>must</em>.'
  },
  u14a3_7: {
    q: 'You ______ too casually for work.',
    a: 'mustn\'t dress',
    why: 'This is a prohibition — casual dress is not acceptable in a Hong Kong office — and <em>mustn\'t</em> is the modal for "it is not allowed".',
    wrong: [
      { opt: 'don\'t have to dress', why: 'That means it is not <strong>necessary</strong> to dress casually, leaving him free to do it. The point is that he is not permitted to.' },
      { opt: 'needn\'t dress', why: 'Same problem: <em>needn\'t</em> removes a necessity, it does not forbid anything.' },
      { opt: 'mustn\'t to dress', why: '<em>Must</em> is a modal and takes the bare infinitive: <em>mustn\'t dress</em>.' }
    ],
    rule: '<em>mustn\'t</em> = not allowed; <em>don\'t have to</em> = not necessary.'
  },
  u14a3_8: {
    q: 'You ______ guide books in England.',
    a: 'needn\'t buy',
    why: 'Buying guide books before he leaves is simply unnecessary — he can get better ones out there — so this is lack of necessity. <em>don\'t need to buy</em> and <em>do not need to buy</em> are also accepted.',
    wrong: [
      { opt: 'mustn\'t buy', why: 'That would forbid it. Nobody is banning guide books; they are just a waste of money at this stage.' },
      { opt: 'needn\'t to buy', why: '<em>Needn\'t</em> is the modal use of <em>need</em>, so it takes a bare infinitive. Only the ordinary verb keeps <em>to</em>: <em>don\'t need to buy</em>.' },
      { opt: 'shouldn\'t buy', why: 'This advises against buying them; <em>needn\'t</em> leaves the choice completely open.' }
    ],
    rule: '<em>needn\'t</em> + bare infinitive, but <em>need to</em> + <em>to</em>-infinitive.'
  },
  u14a3_9: {
    q: 'You ______ lots of passport photos with you.',
    a: 'ought to take',
    why: 'This is a suggestion — passport photos are handy for the many forms he will fill in — so <em>ought to</em> fits, and <em>ought</em> is always followed by <em>to</em> + base form.',
    wrong: [
      { opt: 'ought take', why: '<em>Ought</em> is the one modal-like verb that keeps <em>to</em>: <em>ought to take</em>.' },
      { opt: 'should to take', why: 'The mirror-image error: <em>should</em> never takes <em>to</em>.' },
      { opt: 'have to take', why: 'No rule requires passport photos; it is just a sensible precaution, so an advice verb is needed.' }
    ],
    rule: '<em>ought <strong>to</strong> do</em> but <em>should do</em>.'
  },

  /* ── C1 Underline the correct word ── */
  u14c1_1: {
    q: 'In my office you ______ wear a suit but lots of people do. (have to / don\'t have to)',
    a: 'don\'t have to',
    why: 'The contrast <em>but lots of people do</em> shows that a suit is a choice: people wear one even though nothing requires it. <em>Don\'t have to</em> = no obligation.',
    wrong: [
      { opt: 'have to', why: 'That would make suits compulsory, and the contrast would collapse — if everyone had to, there would be no point saying <em>but lots of people do</em>.' },
      { opt: 'mustn\'t', why: 'Not one of the printed options, but a common instinct. It would forbid suits altogether, which contradicts the second half of the sentence.' }
    ],
    rule: 'Read on past the gap — a contrast word like <em>but</em> usually decides the answer.'
  },
  u14c1_2: {
    q: 'These pills ______ be taken if you are under twelve years old. (must not / don\'t have to)',
    a: 'must not',
    why: 'This is a safety warning: children under twelve are forbidden to take the pills. <em>Must not</em> expresses prohibition, and it is the standard wording on printed medical instructions.',
    wrong: [
      { opt: 'don\'t have to', why: 'That would mean under-twelves are not obliged to take the pills but may do so if they wish — dangerously different from a ban.' },
      { opt: 'needn\'t', why: 'Same problem: it removes a necessity instead of forbidding the action.' }
    ],
    rule: 'Warnings and prohibitions on labels and notices use <em>must not</em>.'
  },
  u14c1_3: {
    q: 'I ______ leave now because I have a meeting. (must / have to)',
    a: 'have to',
    why: 'The reason given is external — a meeting already in the diary — and when the obligation comes from outside the speaker, English prefers <em>have to</em>. It is also the more natural choice in everyday speech.',
    wrong: [
      { opt: 'must', why: 'Not ungrammatical, but <em>must</em> suggests the speaker has decided this for themselves; the sentence makes the meeting responsible, so this exercise takes <em>have to</em>.' },
      { opt: 'had to', why: '<em>Now</em> places the obligation in the present, so a past form does not fit.' }
    ],
    rule: 'External obligation (rules, timetables, other people) → <em>have to</em>.'
  },
  u14c1_4: {
    q: 'I ______ to the station to pick her up because she decided to get the bus, so I finished my essay instead. (didn\'t need to go / needn\'t have gone)',
    a: 'didn\'t need to go',
    why: 'She caught the bus, so the trip was unnecessary <strong>and it never happened</strong> — the speaker stayed at home and finished an essay. That is exactly what <em>didn\'t need to</em> + infinitive expresses.',
    wrong: [
      { opt: 'needn\'t have gone', why: '<em>Needn\'t have</em> + past participle means the action <strong>was</strong> carried out even though it was unnecessary. Here <em>so I finished my essay instead</em> tells us the speaker never went.' },
      { opt: 'mustn\'t go', why: 'Two errors: the whole sentence is past (<em>decided</em>, <em>finished</em>) and <em>must</em> has no past form; and the meaning needed is "it wasn\'t necessary", not "it wasn\'t allowed".' }
    ],
    rule: '<em>didn\'t need to</em> = not necessary, so not done; <em>needn\'t have</em> = not necessary, but done anyway.'
  },
  u14c1_5: {
    q: 'Please note that you ______ register before entering the conference hall. (must / have got to)',
    a: 'must',
    why: '<em>Please note that…</em> marks this as formal printed information, and <em>must</em> is the standard modal on signs, notices and official instructions.',
    wrong: [
      { opt: 'have got to', why: '<em>Have got to</em> is informal and belongs to spoken English; it would sound out of place in a written announcement.' },
      { opt: 'don\'t have to', why: 'This reverses the meaning — registration is being required, not made optional.' }
    ],
    rule: 'Signs, notices and formal written English prefer <em>must</em>.'
  },
  u14c1_6: {
    q: 'You ______ smoke inside, but you can smoke outside. (mustn\'t / don\'t have to)',
    a: 'mustn\'t',
    why: 'The contrast with <em>but you can smoke outside</em> shows the sentence is about permission: smoking indoors is banned. <em>Mustn\'t</em> = it is not allowed.',
    wrong: [
      { opt: 'don\'t have to', why: '"You are not obliged to smoke inside" makes no sense next to <em>but you can smoke outside</em> — nobody is ever obliged to smoke.' },
      { opt: 'needn\'t', why: 'Same problem: it expresses lack of necessity, where the sentence needs a ban.' }
    ],
    rule: 'If the sentence contrasts with <em>can</em>, it is about permission, so use <em>mustn\'t</em>.'
  },
  u14c1_7: {
    q: 'When I was at university I ______ write my assignments by hand because there weren\'t any computers then. (must / had to)',
    a: 'had to',
    why: '<em>When I was at university</em> and <em>there weren\'t</em> place the sentence firmly in past time, and <em>must</em> has no past form. The past of obligation is <em>had to</em>.',
    wrong: [
      { opt: 'must', why: '<em>Must</em> cannot express obligation in the past. It would be read as a present rule, which clashes with <em>weren\'t any computers then</em>.' },
      { opt: 'have to', why: 'The present form contradicts the past context of the whole sentence.' }
    ],
    rule: 'Past obligation = <em>had to</em>. <em>Must</em> has no past form.'
  },
  u14c1_8: {
    q: 'British dog-owners ______ have passports for their dogs when they travel abroad. (have to / must)',
    a: 'have to',
    why: 'This is a legal requirement, and <strong>both</strong> printed options are accepted here: <em>have to</em> is the usual choice for a law imposed from outside, and <em>must</em> also works because the sentence reads like a written regulation.',
    wrong: [
      { opt: 'don\'t have to', why: 'This reverses a legal requirement — the pet passport is compulsory for travel.' },
      { opt: 'had to', why: 'The law applies now, so the present is needed; <em>had to</em> would say it used to be the case.' },
      { opt: 'must have to', why: 'Two obligation verbs cannot be stacked in one verb phrase.' }
    ],
    rule: 'Sometimes both <em>must</em> and <em>have to</em> are possible — check whether the exercise allows it.'
  },
  u14c1_9: {
    q: 'Next year I ______ get a job to pay back all the money I\'ve borrowed from the bank. (\'ll have to / \'ll must)',
    a: '\'ll have to',
    why: '<em>Next year</em> makes this future, and <em>must</em> has no future form, so future obligation is expressed with <em>will have to</em>. The bank loan also makes the obligation clearly external.',
    wrong: [
      { opt: '\'ll must', why: '<s>Will must</s> is impossible: <em>will</em> and <em>must</em> are both modals, and English allows only one modal in a verb phrase.' },
      { opt: '\'ll have got to', why: '<em>Have got to</em> is not used in future forms (<s>will have got to</s>), and it is informal spoken English in any case.' },
      { opt: 'had to', why: 'Past time, but the job hunt is still ahead: <em>next year</em>.' }
    ],
    rule: 'One modal per verb phrase — for the future use <em>will have to</em>.'
  },
  u14c1_10: {
    q: 'The interview went really well so I ______ about it so much beforehand. (didn\'t need to worry / needn\'t have worried)',
    a: 'needn\'t have worried',
    why: 'The speaker <strong>did</strong> worry — that is the whole point of <em>so much beforehand</em> — but the interview went well, so the worrying turned out to be unnecessary. <em>Needn\'t have</em> + past participle is the form for something done unnecessarily.',
    wrong: [
      { opt: 'didn\'t need to worry', why: 'That would mean the worrying never happened, which contradicts <em>so much beforehand</em>.' },
      { opt: 'needn\'t worry', why: 'Without <em>have</em> + past participle this points to the present or future — "there is no need to worry" — but the interview is already over.' },
      { opt: 'mustn\'t have worried', why: '<em>Mustn\'t have</em> is not used to talk about past necessity in British English.' }
    ],
    rule: '<em>needn\'t have</em> + past participle = you did it, but it was unnecessary.'
  },

  /* ── C2 Dialogues: (not) have to / must / (not) need / should ── */
  u14c2_1: {
    q: 'B: Ah, well, you\'re in luck. You ______ buy a book because I\'ve got a small guide to Florence I can lend you.',
    a: 'won\'t have to',
    why: 'B is offering to lend a guide, so buying one will not be necessary — and <em>you\'re in luck</em> confirms it is good news. <em>needn\'t</em>, <em>don\'t need to</em> and <em>don\'t have to</em> are all accepted too.',
    wrong: [
      { opt: 'mustn\'t', why: 'That would forbid buying a guidebook. Nobody is banning the purchase; it has simply become unnecessary.' },
      { opt: 'have to', why: 'Positive obligation contradicts both <em>you\'re in luck</em> and the offer of a loan.' },
      { opt: 'shouldn\'t', why: 'This advises against buying one, which is stronger and less friendly than "there is no need".' }
    ],
    rule: '<em>don\'t have to / needn\'t / won\'t have to</em> = no necessity.'
  },
  u14c2_2: {
    q: 'B: He\'s studying really hard. He ______ pass his exams in order to get the promotion his company have promised him.',
    a: 'has to',
    why: '<em>In order to get the promotion</em> shows the condition is set by the company, so the obligation is external: <em>has to</em>. Note the third-person <em>-s</em> to agree with <em>he</em>. <em>must</em> is also accepted.',
    wrong: [
      { opt: 'have to', why: 'The subject <em>he</em> is third person singular, so the verb must be <em>has to</em>.' },
      { opt: 'doesn\'t have to', why: 'The negative removes the condition, but passing the exams is exactly what the promotion depends on.' },
      { opt: 'should', why: 'That is only advice. The company has made the promotion conditional, so this is a requirement.' }
    ],
    rule: '<em>have to</em> changes for the subject: <em>I have to</em>, <em>he has to</em>.'
  },
  u14c2_3: {
    q: 'A: ______ (you) wear a uniform at work?',
    a: 'do you have to',
    why: 'We do not normally make questions with <em>must</em> or <em>ought to</em>, so English asks about obligation with <em>do you have to…?</em> The auxiliary <em>do</em> forms the question and comes before the subject.',
    wrong: [
      { opt: 'Must you', why: 'Grammatically possible but rare, and it usually sounds irritated ("Must you make that noise?"). For a neutral question about workplace rules it is the wrong register.' },
      { opt: 'Have you to', why: 'Very old-fashioned. Modern English needs the auxiliary: <em>Do you have to…?</em>' },
      { opt: 'Do you must', why: '<em>Must</em> is a modal, so it never combines with the auxiliary <em>do</em>.' }
    ],
    rule: 'Questions about obligation: <em>Do you have to…?</em> / <em>Do you need to…?</em>'
  },
  u14c2_4: {
    q: 'B: When I was at school we ______ wear a uniform although the girls had to wear skirts and not trousers.',
    a: 'didn\'t have to',
    why: 'The contrast with <em>although the girls had to…</em> shows uniform was not compulsory for everyone, and the whole sentence is past (<em>when I was at school</em>), so the past negative of obligation is needed. <em>didn\'t need to</em> is equally acceptable.',
    wrong: [
      { opt: 'mustn\'t', why: 'Wrong meaning and wrong time: it forbids uniform, and <em>must</em> has no past form.' },
      { opt: 'don\'t have to', why: 'Present tense, but the speaker is describing school days that are long over.' },
      { opt: 'needn\'t have worn', why: 'That would say they did wear a uniform unnecessarily; the point is that uniform was never required of them.' }
    ],
    rule: 'Past lack of obligation = <em>didn\'t have to</em> / <em>didn\'t need to</em>.'
  },
  u14c2_5: {
    q: 'B: … although the girls ______ wear skirts and not trousers.',
    a: 'had to',
    why: 'The girls did have a rule imposed on them, and <em>although</em> sets it against the freedom the speaker has just described. Past obligation is <em>had to</em>, because <em>must</em> has no past form.',
    wrong: [
      { opt: 'must', why: 'No past form exists: this would be read as a rule that applies today.' },
      { opt: 'have to', why: 'The present tense clashes with the past narrative <em>when I was at school</em>.' },
      { opt: 'didn\'t have to', why: 'The negative destroys the contrast — the first half of the sentence has already said uniform was optional.' }
    ],
    rule: '<em>although</em> signals a contrast: expect the opposite value in the second half.'
  },
  u14c2_6: {
    q: 'A: The rules for university fees have just changed. I was really lucky because I ______ pay for my education …',
    a: 'didn\'t have to',
    why: '<em>I was really lucky</em> tells you the speaker escaped the cost, so the fees were not required of them — past lack of obligation. <em>didn\'t need to</em> is also accepted.',
    wrong: [
      { opt: 'mustn\'t', why: 'That forbids paying, and <em>must</em> has no past form anyway.' },
      { opt: 'needn\'t have paid', why: 'That means the speaker paid although it was unnecessary — the opposite of being lucky here.' },
      { opt: 'don\'t have to', why: 'The old fee rules are past (<em>have just changed</em>), and <em>I was</em> fixes the time as past.' }
    ],
    rule: 'Let the surrounding tenses tell you whether the obligation is past, present or future.'
  },
  u14c2_7: {
    q: 'A: … but unfortunately my brother ______ pay when he goes to university next year.',
    a: 'will have to',
    why: '<em>Next year</em> makes this future, and <em>must</em> has no future form, so the future of obligation is <em>will have to</em>. <em>\'ll have to</em> is the same answer contracted.',
    wrong: [
      { opt: 'will must', why: 'Two modals cannot be stacked: <s>will must</s>.' },
      { opt: 'has to', why: 'The present tense loses the future reference; the new fees only hit him <em>next year</em>.' },
      { opt: 'had to', why: 'Past — but his university years are still ahead of him.' }
    ],
    rule: 'Future obligation = <em>will have to</em> / <em>will need to</em>.'
  },
  u14c2_8: {
    q: 'A: Can you remind me to get it out in 20 minutes? I ______ forget like last time when I burnt the loaf.',
    a: 'mustn\'t',
    why: 'The speaker is forbidding themselves — "whatever happens, I am not to forget". The obligation comes from the speaker, which is exactly where <em>must(n\'t)</em> belongs, and the burnt loaf shows how serious it is.',
    wrong: [
      { opt: 'don\'t have to', why: '"I am not obliged to forget" is nonsense — nobody is ever obliged to forget something.' },
      { opt: 'needn\'t', why: 'Same problem: it removes a necessity that never existed.' },
      { opt: 'shouldn\'t', why: 'Far too weak. The reference to the last burnt loaf shows this really matters, so the exercise takes <em>mustn\'t</em>.' }
    ],
    rule: 'Obligation the speaker imposes (even on themselves) → <em>must</em> / <em>mustn\'t</em>.'
  },
  u14c2_9: {
    q: 'B: I\'m sorry. I\'m afraid I ______ go now, so I won\'t be able to remind you.',
    a: 'have to',
    why: 'Something outside the speaker makes leaving unavoidable, and <em>I\'m afraid</em> plus the apology show they have no choice. <em>Have to</em> is the everyday way to say this.',
    wrong: [
      { opt: 'must', why: 'Possible in isolation, but <em>must</em> implies the speaker\'s own decision; here they are apologising for an obligation imposed on them, so the exercise takes <em>have to</em>.' },
      { opt: 'should', why: 'That makes leaving merely a good idea, which does not fit <em>I\'m afraid</em> or <em>I won\'t be able to remind you</em>.' },
      { opt: 'had to', why: 'The departure is happening <em>now</em>, not in the past.' }
    ],
    rule: 'Apologising for something unavoidable → <em>I have to</em> / <em>I\'ve got to</em>.'
  },
  u14c2_10: {
    q: 'A: Oh, ______ (you/really) go? I\'d hoped you\'d stay to lunch!',
    a: 'do you really have to',
    why: 'A question about obligation takes <em>do … have to</em>, not <em>must</em>; and the emphasiser <em>really</em> goes immediately before the verb phrase it strengthens, exactly as in <em>You really have to see it to believe it</em>.',
    wrong: [
      { opt: 'must you really', why: 'Questions are not normally formed with <em>must</em>, and this wording sounds like a complaint rather than disappointment.' },
      { opt: 'do you have to really', why: '<em>Really</em> belongs before the verb it emphasises: <em>do you really have to go?</em>' },
      { opt: 'have you really to', why: 'Old-fashioned. Modern English uses the <em>do</em> auxiliary.' }
    ],
    rule: 'For extra emphasis, <em>really</em> goes before <em>have to</em>: <em>you really have to…</em>'
  },
  u14c2_11: {
    q: 'A: Well, you ______ wear white clothes on the courts, of course.',
    a: 'have to',
    why: 'This is a club rule imposed on members, so <em>have to</em> is the natural choice for an institutional obligation. <em>Of course</em> shows the speaker accepts it as normal.',
    wrong: [
      { opt: 'must', why: 'Not impossible, but <em>must</em> would suggest the speaker is imposing the rule; A is only reporting the club\'s rules, so the exercise takes <em>have to</em>.' },
      { opt: 'don\'t have to', why: 'A is listing rules — the negative would remove the rule altogether.' },
      { opt: 'should', why: 'Advice is too weak: <em>They\'ve got all sorts of rules</em> introduces requirements, not suggestions.' }
    ],
    rule: 'Institutional rules reported by a member → <em>have to</em>.'
  },
  u14c2_12: {
    q: 'A: … the really silly rule is that you ______ turn your mobile off as soon as you arrive at the club.',
    a: 'have to',
    why: 'It is introduced as <em>the really silly rule</em>, so the club requires it: an external obligation → <em>have to</em>. The speaker\'s <em>I don\'t want to do that</em> confirms it is imposed rather than chosen.',
    wrong: [
      { opt: 'mustn\'t', why: 'That would mean switching the phone off is forbidden — the reverse of the rule being described.' },
      { opt: 'don\'t have to', why: 'If it were optional the speaker would have nothing to complain about.' },
      { opt: 'must', why: 'The rule belongs to the club, not the speaker, and the speaker openly disagrees with it, so <em>have to</em> is the form the exercise wants.' }
    ],
    rule: 'The word <em>rule</em> in the sentence is your clue: obligation, not advice.'
  },
  u14c2_13: {
    q: 'B: Perhaps they don\'t know you\'re a doctor. You ______ tell them.',
    a: 'should',
    why: 'B is making a helpful suggestion, and <em>should</em> is the standard modal for advice. The key also accepts <em>must</em>, which gives the same advice more forcefully.',
    wrong: [
      { opt: 'have to', why: 'Nothing obliges A to explain their job; the idea is B\'s, so a suggestion is what the situation calls for.' },
      { opt: 'shouldn\'t', why: 'The negative reverses B\'s advice — the whole point is that telling them might get the rule relaxed.' },
      { opt: 'ought tell', why: '<em>Ought</em> always keeps its <em>to</em>: <em>ought to tell</em>. (The exercise, in any case, asks only for <em>have to, must, need</em> or <em>should</em>.)' }
    ],
    rule: 'Making a suggestion → <em>should</em>; <em>must</em> makes the same advice stronger.'
  },

  /* ── C3 Correct the underlined phrases in the essay ── */
  u14c3_1: {
    q: '1 Governments (need to act) quickly to stop this problem before it is too late.',
    a: '✓',
    why: 'This is already correct, so write a tick. The ordinary verb <em>need</em> takes a <strong>to</strong>-infinitive, and the plural subject <em>governments</em> takes the base form <em>need</em>. It is also good academic style for saying what has to be done.',
    wrong: [
      { opt: 'need act', why: 'The ordinary verb <em>need</em> requires <em>to</em>: <em>need to act</em>. Only the modal <em>needn\'t</em> takes a bare infinitive.' },
      { opt: 'needs to act', why: '<em>Governments</em> is plural, so there is no <em>-s</em> on the verb.' },
      { opt: 'must to act', why: 'A tempting "correction", but <em>must</em> never takes <em>to</em> — and there was nothing to correct here in the first place.' }
    ],
    rule: 'In a correction task some items are already right — check before you change anything.'
  },
  u14c3_2: {
    q: '2 The first thing I believe we (absolutely should do) is reduce the amount of fuel we use in our cars.',
    a: 'absolutely must do',
    why: '<em>Absolutely</em> is an extreme adverb and it pairs with the strongest obligation verb, <em>must</em>, not with the much weaker <em>should</em>. The writer is naming the single most urgent action, so strong obligation is what the meaning needs. <em>must do</em> on its own is also accepted.',
    wrong: [
      { opt: '✓ (leave it unchanged)', why: '<em>Absolutely should</em> is not a natural pairing: the adverb promises maximum force while the modal delivers only a suggestion.' },
      { opt: 'should absolutely do', why: 'Moving the adverb fixes nothing — the clash is between <em>absolutely</em> and <em>should</em>, not the word order.' },
      { opt: 'absolutely must to do', why: '<em>Must</em> is a modal and is followed by the bare infinitive.' }
    ],
    rule: 'Match the strength of the adverb to the strength of the modal: <em>absolutely must</em>, <em>probably should</em>.'
  },
  u14c3_3: {
    q: '3 Our governments (must to encourage) us to use public transport.',
    a: 'must encourage',
    why: '<em>Must</em> is a modal verb, so it is followed by the bare infinitive with no <em>to</em>. The <em>to</em> has been carried over by mistake from <em>have to</em> / <em>need to</em>.',
    wrong: [
      { opt: '✓', why: '<s>must to encourage</s> is never possible in English, so this phrase does have to be changed.' },
      { opt: 'must encouraging', why: 'Modals are followed by the base form, never by an <em>-ing</em> form.' },
      { opt: 'musts encourage', why: '<em>Must</em> is a modal: it has no <em>-s</em>, no <em>-ed</em> and no <em>-ing</em>.' }
    ],
    rule: 'Modals (<em>must, should, will, can</em>) + bare infinitive. Only <em>ought</em> keeps <em>to</em>.'
  },
  u14c3_4: {
    q: '4 … the first thing that governments (have to do) is to ensure that buses and trains are a viable alternative.',
    a: '✓',
    why: 'Correct as it stands. <em>Have</em> agrees with the plural <em>governments</em>, <em>have to</em> is followed by the bare infinitive <em>do</em>, and the obligation comes from the situation, which is where <em>have to</em> belongs.',
    wrong: [
      { opt: 'has to do', why: '<em>Governments</em> is plural, so <em>have</em>, not <em>has</em>.' },
      { opt: 'have to doing', why: '<em>have to</em> is always followed by the base form.' },
      { opt: 'must to do', why: 'An unnecessary change and a grammatical error at the same time — <em>must</em> never takes <em>to</em>.' }
    ],
    rule: 'Check subject–verb agreement before you decide a phrase is wrong.'
  },
  u14c3_5: {
    q: '5 They (also should reduce) the costs to the public of travelling on public transport.',
    a: 'should also reduce',
    why: 'Adverbs such as <em>also, always, never, just</em> and <em>only</em> go <strong>after</strong> the modal verb and before the main verb: <em>should also reduce</em>.',
    wrong: [
      { opt: '✓', why: '<em>Also should</em> puts the adverb in the wrong slot; with a modal, the adverb sits between the modal and the main verb.' },
      { opt: 'should reduce also', why: 'End position is unnatural for <em>also</em> here and shifts the emphasis oddly.' },
      { opt: 'also must reduce', why: 'It corrects nothing — the adverb is still in front of the modal — and it changes advice into obligation.' }
    ],
    rule: 'modal + adverb + main verb.'
  },
  u14c3_6: {
    q: '6 However, it is not only the government that (needs to make) an effort.',
    a: '✓',
    why: 'Correct. The subject of this clause is the singular <em>the government</em>, so <em>needs</em> carries the <em>-s</em>, and the ordinary verb <em>need</em> is followed by a <strong>to</strong>-infinitive.',
    wrong: [
      { opt: 'need to make', why: 'The verb agrees with the singular <em>the government</em>, not with the plural nouns elsewhere in the essay.' },
      { opt: 'needs make', why: 'The ordinary verb <em>need</em> keeps <em>to</em>: <em>needs to make</em>.' },
      { opt: 'must to make', why: 'No change was needed, and <em>must</em> never takes <em>to</em>.' }
    ],
    rule: 'A collective noun like <em>government</em> takes a singular verb when it is treated as one body.'
  },
  u14c3_7: {
    q: '7 All of us (should make) some effort to reduce pollution.',
    a: '✓',
    why: 'Correct. <em>Should</em> is a modal followed by the bare infinitive <em>make</em>, and modals never change form for the subject.',
    wrong: [
      { opt: 'should makes', why: 'Modals are never followed by an <em>-s</em> form.' },
      { opt: 'should to make', why: '<em>Should</em> takes a bare infinitive; only <em>ought</em> keeps <em>to</em>.' },
      { opt: 'must make', why: 'A change of meaning rather than a correction — the phrase was already grammatical, and <em>should</em> suits the writer\'s persuasive tone.' }
    ],
    rule: 'Modals have one form only: no <em>-s</em>, no <em>-ed</em>, no <em>-ing</em>.'
  },
  u14c3_8: {
    q: '8 First of all, we (ought try to walk) or cycle if we can, rather than using our cars.',
    a: 'ought to try to walk',
    why: '<em>Ought</em> is the one modal-like verb that keeps <em>to</em> in front of the next verb: <em>ought to try</em>. <em>ought to try</em> alone is also accepted by the key.',
    wrong: [
      { opt: '✓', why: '<s>ought try</s> is never correct — the <em>to</em> is a fixed part of the structure.' },
      { opt: 'ought to trying to walk', why: 'After <em>ought to</em> comes the base form: <em>try</em>.' },
      { opt: 'should to try to walk', why: 'The opposite error: <em>should</em> is a bare-infinitive modal.' }
    ],
    rule: '<em>ought <strong>to</strong> do</em> but <em>should do</em>.'
  },
  u14c3_9: {
    q: '9 In the past people (must walk) or cycle because they did not have cars.',
    a: 'had to walk',
    why: '<em>In the past</em> and <em>did not have</em> place this firmly in past time, and <em>must</em> has no past form. Past obligation is expressed with <em>had to</em>.',
    wrong: [
      { opt: '✓', why: '<em>Must</em> cannot express past obligation, so the phrase does have to be changed.' },
      { opt: 'musted walk', why: '<em>Must</em> is a modal and takes no endings at all.' },
      { opt: 'must have walked', why: 'This form exists, but it is a <strong>deduction</strong> about the past ("I\'m sure they walked"), not a statement that walking was compulsory.' }
    ],
    rule: 'The past of <em>must</em> (obligation) is <em>had to</em>.'
  },
  u14c3_10: {
    q: '10 Secondly, we (should trying) to share car use with our friends and colleagues.',
    a: 'should try',
    why: 'A modal is always followed by the bare infinitive, so <em>should try</em>, never <s>should trying</s>. The <em>to</em> that follows belongs to <em>try to share</em>.',
    wrong: [
      { opt: '✓', why: '<s>should trying</s> is not a possible verb form in English.' },
      { opt: 'should to try', why: '<em>Should</em> never takes <em>to</em>.' },
      { opt: 'are trying', why: 'This removes the recommendation altogether and turns it into a description of what people are already doing.' }
    ],
    rule: 'Modal + base form. Never <em>-ing</em>, never <em>to</em> (except after <em>ought</em>).'
  },
  u14c3_11: {
    q: '11 All of us (will must make) some changes to our lives if we want to reduce pollution.',
    a: 'will have to make',
    why: 'Two modal verbs cannot stand together, so <s>will must</s> is impossible; and because <em>must</em> has no future form, future obligation is <em>will have to</em>. The key also accepts plain <em>must make</em>.',
    wrong: [
      { opt: '✓', why: '<s>will must</s> is one of the commonest modal errors in IELTS writing — only one modal is allowed per verb phrase.' },
      { opt: 'will must to make', why: 'Adding <em>to</em> does not rescue a double modal.' },
      { opt: 'will should make', why: 'Exactly the same double-modal error, just with a different second modal.' }
    ],
    rule: 'One modal per verb phrase; for future obligation use <em>will have to</em>.'
  },
  u14c3_12: {
    q: '12 Fortunately, we (mustn\'t make) big changes to make big improvements in the situation.',
    a: 'don\'t have to make',
    why: '<em>Fortunately</em> signals good news: big changes are <strong>not necessary</strong>. <em>Mustn\'t</em> would mean they are forbidden, which makes no sense in an essay arguing for change. <em>needn\'t make</em> and <em>don\'t need to make</em> are also accepted.',
    wrong: [
      { opt: '✓', why: '<em>Mustn\'t</em> would ban us from making big changes, contradicting the whole argument of the essay.' },
      { opt: 'don\'t must make', why: '<em>Must</em> is a modal and never combines with <em>do / don\'t</em>.' },
      { opt: 'shouldn\'t make', why: 'This advises against big changes; the writer is saying they are simply unnecessary, not a bad idea.' }
    ],
    rule: '<em>mustn\'t</em> = prohibition; <em>don\'t have to / needn\'t</em> = no necessity.'
  },

  /* ── C4 Interview: (not) have to / ought to / must(n't) + verb ── */
  u14c4_2: {
    q: 'Student: Well, you ______ (consider) lots of things first.',
    a: 'have to consider',
    why: 'Anyone planning a long trip is forced by the situation to think about money, company and culture, so this is genuine necessity. Because the student is really giving advice, <em>ought to consider</em> and <em>should consider</em> are accepted as well.',
    wrong: [
      { opt: 'don\'t have to consider', why: 'The rest of the answer lists all the things that do have to be thought about, so the negative contradicts it.' },
      { opt: 'have to considering', why: '<em>have to</em> is followed by the base form of the verb.' },
      { opt: 'ought consider', why: '<em>Ought</em> always keeps its <em>to</em>: <em>ought to consider</em>.' }
    ],
    rule: 'Necessity created by the situation → <em>have to</em> / <em>need to</em>.'
  },
  u14c4_3: {
    q: 'Student: For example, you ______ (have) enough money in the first place …',
    a: 'have to have',
    why: 'Money is a precondition for the trip, so this is a real necessity. The doubled <em>have to have</em> looks odd but is correct: the first <em>have</em> carries the obligation, the second is the main verb meaning "possess". <em>must have</em> and <em>need to have</em> are also accepted.',
    wrong: [
      { opt: 'have to', why: 'The main verb is missing. <em>Have to</em> must be followed by a verb — and here that verb is also <em>have</em>.' },
      { opt: 'don\'t have to have', why: 'You cannot go travelling with no money at all, so the necessity is real.' },
      { opt: 'ought to have', why: 'Not accepted here: enough money is a precondition, not merely a good idea. The exercise reserves <em>ought to</em> for the pieces of advice.' }
    ],
    rule: '<em>have to have</em> is correct English — obligation verb + main verb.'
  },
  u14c4_4: {
    q: 'Student: … so you ______ (work) at first to save some money.',
    a: 'ought to work',
    why: 'Working first is one sensible way of getting the money together — a recommendation rather than a requirement, since you might already have savings. <em>should work</em> is equally acceptable.',
    wrong: [
      { opt: 'have to work', why: 'Too strong: saving up by working is only one route to having enough money, so the exercise treats it as advice.' },
      { opt: 'ought work', why: '<em>Ought</em> is followed by <em>to</em> + base form.' },
      { opt: 'mustn\'t work', why: 'The negative reverses the advice, and <em>mustn\'t</em> would forbid working altogether.' }
    ],
    rule: 'One possible way of doing something → advice (<em>should</em> / <em>ought to</em>).'
  },
  u14c4_5: {
    q: 'Student: You ______ (travel) with a friend, but it is probably safer and less lonely if you do.',
    a: 'don\'t have to travel',
    why: 'The contrast word <em>but</em> is the clue: travelling alone is allowed, it is just less pleasant. That is lack of obligation, not prohibition. <em>needn\'t travel</em> and <em>don\'t need to travel</em> are also accepted.',
    wrong: [
      { opt: 'mustn\'t travel', why: 'That would forbid taking a friend, which is the opposite of what the second half of the sentence recommends.' },
      { opt: 'have to travel', why: 'If it were compulsory, <em>but … if you do</em> would make no sense — there would be no choice left to weigh up.' },
      { opt: 'shouldn\'t travel', why: 'Advice against a companion, again the reverse of the meaning.' }
    ],
    rule: '<em>X, but it is better if you do</em> → the first verb must be "no obligation".'
  },
  u14c4_6: {
    q: 'Student: Also, you ______ (learn) a bit about the countries before you go.',
    a: 'ought to learn',
    why: 'This is a recommendation — background reading makes the trip better but nothing enforces it — so <em>ought to</em> (or <em>should</em>) is right.',
    wrong: [
      { opt: 'have to learn', why: 'No rule requires background reading; the very next sentence calls this sort of thing <em>a good idea</em>.' },
      { opt: 'ought learning', why: 'After <em>ought to</em> comes the base form: <em>ought to learn</em>.' },
      { opt: 'don\'t have to learn', why: 'Literally true, but it throws away the advice the student is trying to give.' }
    ],
    rule: '<em>It\'s a good idea to…</em> in the surrounding text signals an advice modal.'
  },
  u14c4_7: {
    q: 'Student: If you go to Nepal, for example, you ______ (shout) or raise your voice in public …',
    a: 'mustn\'t shout',
    why: 'The paragraph is about not offending people: raising your voice in public is simply not acceptable there. <em>Mustn\'t</em> is the modal for something that is not allowed. <em>must not shout</em> is the same answer in full.',
    wrong: [
      { opt: 'don\'t have to shout', why: '"You are not obliged to shout" is meaningless advice — the warning is that shouting is unacceptable.' },
      { opt: 'needn\'t shout', why: 'Same problem: it removes a necessity nobody claimed, instead of warning you off.' },
      { opt: 'mustn\'t to shout', why: '<em>Must</em> takes the bare infinitive.' }
    ],
    rule: 'Cultural taboos and things "not done" → <em>mustn\'t</em>.'
  },
  u14c4_8: {
    q: 'Student: … and you ______ (always/walk) around a Buddhist temple in a clockwise direction.',
    a: 'must always walk',
    why: 'This is a firm cultural rule with no exceptions, so <em>must</em> is right; and the adverb <em>always</em> goes <strong>after</strong> the modal — <em>must always walk</em>.',
    wrong: [
      { opt: 'always must walk', why: 'Adverbs such as <em>always, also, never</em> follow the modal verb rather than preceding it.' },
      { opt: 'must walk always', why: 'End position sounds unnatural here; the slot between modal and main verb is the normal one.' },
      { opt: 'have to always walk', why: 'Splitting <em>have to</em> with the adverb is awkward, and the sentence is deliberately balanced against <em>mustn\'t shout</em> just before it.' }
    ],
    rule: 'modal + <em>always</em> + verb: <em>must always walk</em>.'
  },
  u14c4_9: {
    q: 'Student: You ______ (find out) these things before you go.',
    a: 'ought to find out',
    why: 'Researching local customs is strongly recommended but not compulsory, so <em>ought to</em> (or <em>should</em>) fits. It also matches <em>It\'s a good idea to research cultural issues</em> at the start of the paragraph.',
    wrong: [
      { opt: 'have to find out', why: 'Nothing forces a traveller to do this research, however sensible it is.' },
      { opt: 'ought to found out', why: 'After <em>ought to</em> comes the base form <em>find out</em>, not a past tense.' },
      { opt: 'mustn\'t find out', why: 'This reverses the advice completely.' }
    ],
    rule: 'Advice about preparation → <em>should</em> / <em>ought to</em>.'
  },
  u14c4_10: {
    q: 'Teacher: What things ______ (you/arrange) before you travel?',
    a: 'do you have to arrange',
    why: 'Questions about obligation are not normally formed with <em>must</em> or <em>ought to</em>, so English uses <em>do you have to…?</em> The auxiliary <em>do</em> makes the question and comes before the subject. <em>do you need to arrange</em> is also accepted.',
    wrong: [
      { opt: 'must you arrange', why: 'We do not usually make questions with <em>must</em>; it sounds impatient rather than neutral.' },
      { opt: 'you have to arrange', why: 'A question needs the auxiliary and inversion: <em>do you have to…?</em>' },
      { opt: 'do you have to arranging', why: 'After <em>have to</em> comes the base form.' }
    ],
    rule: 'Question form: <em>do</em> + subject + <em>have to</em> + base verb.'
  },
  u14c4_11: {
    q: 'Student: Well, to visit some countries you ______ (have) a visa …',
    a: 'have to have',
    why: 'A visa is a legal requirement imposed by the country you are visiting, so this is obligation. Again the structure doubles: <em>have to</em> (obligation) + <em>have</em> (possess). <em>must have</em> is also accepted.',
    wrong: [
      { opt: 'ought to have', why: 'A visa requirement is a law, not a suggestion, so advice modals are not accepted here.' },
      { opt: 'don\'t have to have', why: 'The sentence goes on to explain why arrangements are needed before travelling, so the requirement is real.' },
      { opt: 'have to having', why: '<em>have to</em> + base form: <em>have to have</em>.' }
    ],
    rule: 'Visas, permits and licences are legal requirements → <em>have to</em> / <em>must</em>.'
  },
  u14c4_12: {
    q: 'Student: … so you ______ (organise) that before you go.',
    a: 'ought to organise',
    why: 'The visa itself is compulsory, but doing it <strong>before you go</strong> is the sensible arrangement the student is recommending, so <em>ought to</em> fits. The key also accepts <em>have to organise</em> and <em>should organise</em>.',
    wrong: [
      { opt: 'ought organise', why: '<em>Ought</em> keeps its <em>to</em>: <em>ought to organise</em>.' },
      { opt: 'ought to organising', why: 'The base form follows <em>ought to</em>.' },
      { opt: 'mustn\'t organise', why: 'This reverses the advice — arranging the visa early is exactly what is being recommended.' }
    ],
    rule: 'British spelling: <em>organise</em>, <em>realise</em>, <em>recognise</em>.'
  },

  /* ── D Q1–6 Multiple matching (school rules) ── */
  u14d1_1: {
    q: 'Q1: information about what to do if your child cannot attend school',
    a: 'D',
    why: 'Rule D is the only paragraph that tells parents what <strong>action</strong> to take when a child is away: <em>please telephone on the first day</em>, with an answering-machine message or an email as alternatives.',
    wrong: [
      { opt: 'E', why: 'E is about attendance in general — being present for the whole year and not booking appointments in school time — but it never says what to do on the day itself.' },
      { opt: 'A', why: 'A deals with arriving late and with leaving the grounds during the day, not with being absent altogether.' },
      { opt: 'G', why: 'G is the procedure for excusing homework, not for missing school.' }
    ],
    rule: 'Matching questions test the <strong>function</strong> of a paragraph — "what to do" means look for instructions.'
  },
  u14d1_2: {
    q: 'Q2: the person to contact about how much homework your child should be doing',
    a: 'F',
    why: 'F ends with <em>If a pupil appears to be doing too little work, parents should contact the form teacher at once</em>. It matches both halves of the question: the amount of work, and the person to contact.',
    wrong: [
      { opt: 'G', why: 'G involves a teacher and homework too, but it is about getting homework <em>excused</em>, and the letter goes to <em>the teacher concerned</em>.' },
      { opt: 'I', why: 'I names the form teacher as well, but only for permission to come to school by bicycle.' },
      { opt: 'E', why: 'E is about absence and appointments, with no mention of homework or of whom to contact.' }
    ],
    rule: 'When two paragraphs share a keyword, the right one matches <strong>every</strong> part of the question.'
  },
  u14d1_3: {
    q: 'Q3: advice about how students can keep their bicycles secure',
    a: 'J',
    why: 'J is entirely about bike security: label the bike with the owner\'s name and leave it <em>locked in the bicycle sheds provided</em> rather than chained to the railings.',
    wrong: [
      { opt: 'I', why: 'The strongest trap: I is full of bicycles, but it covers permission, helmets, lights and walking bikes onto the grounds — safety and permission, not theft.' },
      { opt: 'K', why: 'K is about looking after belongings and about loss or theft in general, but it never mentions bicycles.' },
      { opt: 'H', why: 'H is about being on school property outside term time.' }
    ],
    rule: 'Two paragraphs on the same topic are separated by the <em>purpose</em> — here security, not safety.'
  },
  u14d1_4: {
    q: 'Q4: the school\'s opinion about schoolchildren working to earn money',
    a: 'C',
    why: 'C says the school <em>strongly disapproves of pupils taking paid employment</em>. <em>Disapproves</em> supplies the opinion, and <em>paid employment</em> paraphrases <em>working to earn money</em>.',
    wrong: [
      { opt: 'F', why: 'F uses <em>work</em> in the sense of homework, not a paid job — a classic same-word, different-meaning trap.' },
      { opt: 'E', why: 'E is about attendance and appointments, not about jobs.' },
      { opt: 'G', why: 'G rules out social engagements as an excuse, but says nothing about employment.' }
    ],
    rule: 'Watch words with two meanings — <em>work</em> can be homework or a paid job.'
  },
  u14d1_5: {
    q: 'Q5: details of what parents should do if their child cannot complete their homework',
    a: 'G',
    why: 'G sets out the procedure: homework is excused only when the teacher receives and approves <em>a letter from a parent setting out the reasons</em>. That is precisely what the parent has to do.',
    wrong: [
      { opt: 'F', why: 'F asks parents to provide a suitable time and place and to contact the form teacher if too little work is being done — that is about the amount of work over time, not about one piece of homework that cannot be finished.' },
      { opt: 'D', why: 'D is the procedure for absence from school, not for unfinished homework.' },
      { opt: 'K', why: 'K is about belongings and name tags.' }
    ],
    rule: 'F and G both cover homework — pick the one that answers "what should the parent do".'
  },
  u14d1_6: {
    q: 'Q6: rules about visiting the school property outside school time',
    a: 'H',
    why: 'H states that <em>during the holidays the school and its grounds are out-of-bounds for all pupils, unless accompanied by a teacher</em> — a rule about being on the property when school is not running.',
    wrong: [
      { opt: 'A', why: 'A restricts leaving the grounds <strong>during</strong> the normal working day, which is inside school time, not outside it.' },
      { opt: 'I', why: 'I governs how you arrive on the grounds — car, motorbike, bicycle, skateboard — not when you may be there.' },
      { opt: 'E', why: 'E is about being present for the whole school year, i.e. attendance, not out-of-hours visits.' }
    ],
    rule: '<em>outside school time</em> = <em>during the holidays</em> — expect a paraphrase, not the same words.'
  },

  /* ── D Q7–13 True / False / Not Given ── */
  u14d2_7: {
    q: 'Q7: The course content offered through the School of Independent Study is different to the other courses the university offers.',
    a: 'FALSE',
    why: 'The passage says the opposite: the materials were written by university faculty, so <em>the material you cover is the same as in the courses offered on campus</em>, and <em>the only difference is that you can study and take tests when it\'s convenient</em>.',
    wrong: [
      { opt: 'TRUE', why: 'The word <em>difference</em> does appear, which is tempting — but it refers to <strong>when</strong> you study, not to what you study.' },
      { opt: 'NOT GIVEN', why: 'The information is given explicitly, so the statement can be judged: because the content is stated to be the same, the statement is false.' }
    ],
    rule: 'FALSE = the passage says the opposite; NOT GIVEN = the passage says nothing about it.'
  },
  u14d2_8: {
    q: 'Q8: Students will receive all course materials by post.',
    a: 'NOT GIVEN',
    why: 'The passage mentions a <em>shipping and handling fee</em> and describes <em>online and correspondence courses</em>, but it never says how the materials arrive, still less that <strong>all</strong> of them come by post. With nothing to confirm or contradict it, the answer is Not Given.',
    wrong: [
      { opt: 'TRUE', why: 'A shipping fee makes post likely, but "likely" is not "stated". IELTS wants what the passage actually says, not a reasonable inference.' },
      { opt: 'FALSE', why: 'For False the passage would have to say materials come another way — for example that everything is downloaded. It does not.' }
    ],
    rule: 'If you have to add an assumption of your own, the answer is usually NOT GIVEN.'
  },
  u14d2_9: {
    q: 'Q9: The Study Guide is optional for Independent Study students.',
    a: 'FALSE',
    why: '<em>All Independent Study students must purchase a Study Guide at a cost of $30.</em> <em>Must</em> plus <em>all</em> makes it compulsory, which directly contradicts <em>optional</em>.',
    wrong: [
      { opt: 'TRUE', why: 'The Guide is charged for separately, which can make it feel like an optional extra, but the passage says every student must buy it.' },
      { opt: 'NOT GIVEN', why: 'The passage addresses it head-on with <em>must purchase</em>, so there is more than enough information to mark the statement false.' }
    ],
    rule: 'Look at the modal: <em>must</em> plus <em>all</em> rules out "optional".'
  },
  u14d2_10: {
    q: 'Q10: Students will need to pay for extra copies if they lose their final certificate.',
    a: 'FALSE',
    why: 'The $15 Academic Records fee <em>entitles a student to free replacement copies of end-of-course documentation for life</em>. Replacements are free, so no further payment is required.',
    wrong: [
      { opt: 'TRUE', why: 'The paragraph is full of fees, so the eye is drawn to the $15 charge — but that single fee is precisely what makes the replacements free.' },
      { opt: 'NOT GIVEN', why: 'Replacement copies are mentioned explicitly, so the statement can be checked against the text.' }
    ],
    rule: 'Read to the end of the sentence — a fee can be the thing that removes a later cost.'
  },
  u14d2_11: {
    q: 'Q11: Students are able to complete each module in less than two weeks.',
    a: 'FALSE',
    why: 'The passage sets a floor: <em>a course can be finished in a minimum of two weeks per module</em>. A minimum of two weeks means fewer than two weeks is not possible, so the statement is contradicted.',
    wrong: [
      { opt: 'TRUE', why: 'This confuses <em>minimum</em> with <em>maximum</em>. Two weeks is the shortest time allowed, not the longest.' },
      { opt: 'NOT GIVEN', why: 'The minimum period is stated in figures, so the statement can be tested against it.' }
    ],
    rule: 'minimum = the least you may take; maximum = the most you may take.'
  },
  u14d2_12: {
    q: 'Q12: Students may take four weeks to complete a module if necessary.',
    a: 'TRUE',
    why: 'The text says a course <em>must be finished in a maximum of four weeks</em> per module. A maximum of four weeks means four weeks is permitted, which is exactly what <em>may take four weeks</em> claims.',
    wrong: [
      { opt: 'FALSE', why: '<em>Must be finished</em> looks like a restriction and is easily misread as "must not take four weeks"; in fact it sets four weeks as the limit that is still allowed.' },
      { opt: 'NOT GIVEN', why: 'The four-week maximum is stated directly in the passage.' }
    ],
    rule: '"A maximum of X" means X itself is still allowed.'
  },
  u14d2_13: {
    q: 'Q13: Some modules take longer than two weeks to complete.',
    a: 'TRUE',
    why: '<em>Modules cannot always be completed in the minimum amount of time</em> — and the minimum has already been given as two weeks, so some modules must take longer. The statement is a paraphrase of that sentence.',
    wrong: [
      { opt: 'FALSE', why: 'Nothing says every module fits into two weeks; the sentence with <em>cannot always</em> says the reverse.' },
      { opt: 'NOT GIVEN', why: 'It is stated, though indirectly: you have to link <em>the minimum amount of time</em> back to the two weeks mentioned earlier in the paragraph.' }
    ],
    rule: '<em>cannot always</em> = sometimes not — a very common IELTS paraphrase.'
  },

  /* ── Grammar Focus Task: modal + its function ── */
  u14gft_1: {
    q: '1 A course can be finished in a minimum of two weeks per module and ______ be finished in a maximum of four weeks.',
    a: 'must',
    why: 'The four-week limit is a rule imposed by the university, and this is formal printed information, where <em>must</em> is the usual modal. It also balances <em>can</em> in the first half of the sentence: what is possible against what is required.',
    wrong: [
      { opt: 'has to', why: 'Grammatically fine, but in formal institutional writing <em>must</em> is the standard choice, and it is what the original text uses.' },
      { opt: 'should', why: 'Advice is far too weak for a regulation with a fixed deadline attached to it.' },
      { opt: 'must to', why: '<em>Must</em> is a modal and takes the bare infinitive: <em>must be finished</em>.' }
    ],
    rule: 'Regulations in formal written English take <em>must</em>.'
  },
  u14gftc_1: {
    q: '1 Is "must be finished in a maximum of four weeks" obligation, necessity or advice?',
    a: 'obligation',
    why: 'The rule is imposed on the student by the university: finish within four weeks or lose your place. An obligation comes from an outside authority, and the student has no say in it.',
    wrong: [
      { opt: 'necessity', why: 'Necessity comes from the situation itself — you need something in order to achieve your own goal. Here the four-week limit exists only because the institution says so.' },
      { opt: 'advice', why: 'Advice can be ignored without consequence. This deadline cannot.' }
    ],
    rule: 'Obligation = imposed by a rule or authority.'
  },
  u14gft_2: {
    q: '2 For example, if your course has three modules you ______ remain in it for a minimum of six weeks and a maximum of twelve weeks.',
    a: 'must',
    why: 'This sentence simply applies the same institutional rule to a three-module course, so it repeats the same modal: <em>must remain</em>.',
    wrong: [
      { opt: 'should', why: 'The six-to-twelve-week window is fixed by the university, not recommended by it.' },
      { opt: 'need to', why: 'The student is not staying enrolled in order to achieve a personal goal; the period is imposed. The text uses <em>must</em>.' },
      { opt: 'will must', why: 'Two modals cannot be combined in one verb phrase.' }
    ],
    rule: 'Worked examples repeat the modal of the rule they illustrate.'
  },
  u14gftc_2: {
    q: '2 Is "must remain in it for a minimum of six weeks…" obligation, necessity or advice?',
    a: 'obligation',
    why: 'It is the same university regulation as in sentence 1, restated for a longer course, so it is again an obligation imposed from outside.',
    wrong: [
      { opt: 'advice', why: 'The text is stating a regulation, not suggesting a good idea.' },
      { opt: 'necessity', why: 'The minimum and maximum periods are set by the institution rather than arising from the student\'s own circumstances.' }
    ],
    rule: 'Ask "who imposed this?" — an institution means obligation.'
  },
  u14gft_3: {
    q: '3 If you ______ meet a deadline, you should take these minimum and maximum periods into account.',
    a: 'need to',
    why: 'The deadline belongs to the reader — a job, a visa, an application date — so this is a personal necessity, not a university rule. <em>Need to</em> is the natural verb, and the ordinary verb <em>need</em> takes a <strong>to</strong>-infinitive: <em>need to meet</em>.',
    wrong: [
      { opt: 'must', why: 'The university is not imposing this deadline; it belongs to the reader\'s own situation, which is where <em>need to</em> fits.' },
      { opt: 'need', why: 'Without <em>to</em> the sentence is ungrammatical: the ordinary verb <em>need</em> requires a <em>to</em>-infinitive.' },
      { opt: 'should', why: '<em>Should</em> is already doing the advice work in the main clause; the <em>if</em>-clause states a real condition, not a suggestion.' }
    ],
    rule: '<em>need to</em> + <em>to</em>-infinitive; <em>needn\'t</em> + bare infinitive.'
  },
  u14gftc_3: {
    q: '3 Is "if you need to meet a deadline" obligation, necessity or advice?',
    a: 'necessity',
    why: 'The pressure comes from the reader\'s own circumstances rather than from a rule: something in your life makes the deadline unavoidable, and the university is simply acknowledging it.',
    wrong: [
      { opt: 'obligation', why: 'No authority is imposing this deadline — it is the reader\'s, not the university\'s.' },
      { opt: 'advice', why: 'The <em>if</em>-clause describes a situation you may be in. The advice comes in the second half of the sentence.' }
    ],
    rule: 'Necessity = the situation makes it unavoidable.'
  },
  u14gft_4: {
    q: '3 … you ______ take these minimum and maximum periods into account.',
    a: 'should',
    why: 'This is the university\'s recommendation about how to plan, not a rule it will enforce, so the advice modal <em>should</em> is used, followed by the bare infinitive <em>take</em>.',
    wrong: [
      { opt: 'must', why: 'Nothing is enforced here — nobody checks whether you took the periods into account — so it is advice, not a regulation.' },
      { opt: 'ought', why: '<em>Ought</em> must keep its <em>to</em>, but the gap is followed directly by <em>take</em>: <s>ought take</s>.' },
      { opt: 'need to', why: 'Possible in loose speech, but that states a necessity; the writer is recommending a sensible way of planning, and the text uses <em>should</em>.' }
    ],
    rule: 'Guidance the writer cannot enforce → <em>should</em>.'
  },
  u14gftc_4: {
    q: '3 Is "you should take these … periods into account" obligation, necessity or advice?',
    a: 'advice',
    why: 'The university is telling you the sensible way to plan. It is not checking up on you, and nothing goes wrong administratively if you ignore it — that makes it a recommendation.',
    wrong: [
      { opt: 'obligation', why: 'Nothing is imposed and nothing is enforced; it is guidance.' },
      { opt: 'necessity', why: 'Nothing makes it unavoidable — you could plan badly and still complete the course.' }
    ],
    rule: '<em>should</em> and <em>ought to</em> almost always signal advice.'
  },
  u14gft_5: {
    q: '5 You ______ make sure that you know whether your instructors are on vacation at any stage during your enrolment …',
    a: 'need to',
    why: 'The reason clause — <em>as this could affect the return of assignments, exams and final grades</em> — shows the necessity comes from the consequences, not from a rule. The structure is <em>need to</em> + base form: <em>need to make sure</em>.',
    wrong: [
      { opt: 'must', why: 'That would present it as a university regulation, but nobody requires you to check the vacation dates; the effect on your grades is what makes it necessary.' },
      { opt: 'should', why: 'A little too weak: the sentence spells out a real consequence for assignments and grades, so a necessity verb is chosen.' },
      { opt: 'need', why: 'The ordinary verb <em>need</em> takes a <em>to</em>-infinitive: <em>need to make sure</em>.' }
    ],
    rule: 'A stated consequence (<em>as this could affect…</em>) points to necessity.'
  },
  u14gftc_5: {
    q: '5 Is "you need to make sure…" obligation, necessity or advice?',
    a: 'necessity',
    why: 'The situation, not a rule, forces your hand: if an instructor is away, your work and grades come back late. That practical consequence is what makes checking necessary.',
    wrong: [
      { opt: 'obligation', why: 'No rule or authority forces you to check; the possible effect on your grades does.' },
      { opt: 'advice', why: 'The text states it as something you need to do rather than as an option — contrast <em>you should take these periods into account</em> in the previous sentence, which really is advice.' }
    ],
    rule: 'Necessity comes from circumstances; obligation comes from rules; advice comes from opinion.'
  }
};
