/* Unit 13 — Modals 1 (ability, possibility, certainty/impossibility): explanations
   window.__EXPL[<data-id>] = { q, a, why, wrong:[{opt,why}], rule? }
   Rendered by initExplanations() in scripts/utils.js. */
window.__EXPL = {

  /* ── A1 Classify the modal words (pre-listening) ── */
  u13a4_1: {
    q: 'Which of the words (could, couldn\'t, might, must, can\'t, will, be able to) refer to ability?',
    a: "could, couldn't, be able to",
    why: 'Ability is expressed by the <em>can</em> family. <em>Could/couldn\'t</em> cover general ability in the past (<em>He could speak French and Italian</em>), and <em>be able to</em> is the stand-in used wherever <em>can</em> has no form of its own — after a perfect or a future (<em>he\'s been able to find his parents</em>).',
    wrong: [
      { opt: "could, couldn't, can't", why: '<em>Can\'t</em> can mean inability elsewhere, but in this recording it is used for deduction — <em>He can\'t have been married</em> means "there is strong evidence he wasn\'t", not "he was unable to".' },
      { opt: 'could, might', why: 'That is the possibility group. <em>Might</em> never expresses ability; it only says something is possible.' },
      { opt: 'be able to, will', why: '<em>Will</em> belongs to the certainty group here. It predicts, it does not describe a skill.' }
    ],
    rule: 'Ability: <em>can/could</em> for general ability; <em>be able to</em> wherever <em>can</em> has no form (perfect, future, after another modal).'
  },
  u13a4_2: {
    q: 'Which of the words refer to certainty or impossibility?',
    a: "will, must, can't",
    why: 'These sit at the two ends of the evidence scale. <em>Must</em> = there is strong evidence something <strong>is</strong> true; <em>can\'t</em> = there is strong evidence it is <strong>not</strong> true; <em>will</em> makes a confident prediction about the future.',
    wrong: [
      { opt: "must, might, can't", why: '<em>Might</em> is only middle-strength. It says something is possible, which is precisely <strong>not</strong> certainty.' },
      { opt: "can't, couldn't", why: '<em>Couldn\'t</em> does express near-impossibility in some contexts, but in this recording <em>couldn\'t</em> is used for inability: <em>he couldn\'t remember his name</em>.' },
      { opt: 'must, will', why: 'True as far as it goes, but it leaves out <em>can\'t</em>, which is the impossibility half of the question.' }
    ],
    rule: 'Evidence scale: very likely → <em>must</em>; possible → <em>may/might/could</em>; very unlikely → <em>can\'t/couldn\'t</em>.'
  },
  u13a4_3: {
    q: 'Which of the words refer to possibility?',
    a: 'could, might',
    why: '<em>Could</em> and <em>might</em> (like <em>may</em>) all express the same, middle degree of possibility: <em>He might have been trying to run away from his past</em>; <em>He could make a total recovery</em>.',
    wrong: [
      { opt: "must, can't", why: 'These are the strong ends of the scale — near-certainty and near-impossibility — not open possibility.' },
      { opt: 'be able to', why: 'This is an ability phrase, a substitute for <em>can</em>. It says nothing about how likely something is.' },
      { opt: 'will', why: '<em>Will</em> commits the speaker to the outcome. Possibility modals deliberately leave the outcome open.' }
    ],
    rule: '<em>could</em>, <em>may</em> and <em>might</em> express exactly the same degree of possibility.'
  },

  /* ── A3 True/False + corrections (Track 17) ── */
  u13a3_1: {
    q: 'The patient could remember all his personal details.',
    a: 'F — false',
    why: 'The opposite is true: he <strong>couldn\'t</strong> remember anything personal, not even his own name. That is why the doctors are trying to work out who he is.',
    wrong: [
      { opt: 'T — true', why: 'He could do some things — speak French and Italian, for example — but personal information was exactly what he had lost.' }
    ],
    rule: '<em>couldn\'t</em> = general inability in the past.'
  },
  u13a3c_1: {
    q: 'Correction for sentence 1 (The patient could remember all his personal details.)',
    a: "he couldn't remember his personal details",
    why: 'The fix is simply to make the ability negative. <em>Couldn\'t</em> is the right form for a general inability in the past, and it takes the bare infinitive <em>remember</em>.',
    wrong: [
      { opt: "he didn't could remember his personal details", why: 'Modals never combine with <em>do/did</em>. The negative is built into the modal itself: <em>couldn\'t remember</em>.' },
      { opt: "he couldn't remembered his personal details", why: 'After a modal you always use the bare infinitive, never a past form: <em>couldn\'t remember</em>.' },
      { opt: 'he might not remember his personal details', why: 'This downgrades a fact to a possibility. The recording is clear that he definitely could not remember.' }
    ],
    rule: 'Modal + bare infinitive, and no <em>do/did</em> in modal negatives or questions.'
  },
  u13a3_2: {
    q: 'The patient definitely came from Yorkshire.',
    a: 'F — false',
    why: 'Nothing is definite here. All the doctors have is his accent, which is weak evidence, so they use the possibility modal <em>could</em> rather than stating it as a fact.',
    wrong: [
      { opt: 'T — true', why: 'Yorkshire is mentioned, which makes the statement sound right, but the word <em>definitely</em> is what makes it false — the recording only offers Yorkshire as a possibility.' }
    ],
    rule: 'Watch adverbs like <em>definitely</em>: they can turn a true detail into a false statement.'
  },
  u13a3c_2: {
    q: 'Correction for sentence 2 (The patient definitely came from Yorkshire.)',
    a: 'he could have come from Yorkshire',
    why: 'A possible situation in the past takes <em>could/may/might</em> + <em>have</em> + past participle. <em>He might have come from Yorkshire</em> is equally accepted, since <em>could</em> and <em>might</em> express the same degree of possibility.',
    wrong: [
      { opt: 'he must have come from Yorkshire', why: '<em>Must have</em> claims strong evidence. An accent alone is not strong evidence, and the doctors are still guessing.' },
      { opt: 'he could came from Yorkshire', why: 'After a modal you cannot use a past simple form. Past reference is carried by <em>have</em> + past participle: <em>could have come</em>.' },
      { opt: "he can't have come from Yorkshire", why: 'This reverses the meaning to near-impossibility, which contradicts the accent evidence.' }
    ],
    rule: 'Possibility in the past = <em>may/might/could</em> + <em>have</em> + past participle.'
  },
  u13a3_3: {
    q: 'The patient could speak French and Italian.',
    a: 'T — true',
    why: 'The police were able to find out that he could speak French and Italian. <em>Could</em> is correct here because it is a general ability he had, not a one-off achievement.',
    wrong: [
      { opt: 'F — false', why: 'It seems odd that a man who has forgotten his own name still speaks two languages, but that is exactly what the recording says. Language ability and personal memory are stored differently.' }
    ],
    rule: 'General ability in the past → <em>could</em> (not <s>was able to</s> for a one-off success).'
  },
  u13a3c_3: {
    q: 'Correction for sentence 3 (The patient could speak French and Italian.) — is one needed?',
    a: '',
    why: 'Leave this box empty. Sentence 3 is true, and the task only asks you to rewrite the sentences that are false.',
    wrong: [
      { opt: "he couldn't speak French and Italian", why: 'This "corrects" a sentence that was already right, and it reverses a fact the recording states plainly.' },
      { opt: 'he was able to speak French and Italian', why: 'A reasonable paraphrase in itself, but nothing needs changing — and for a general past ability <em>could</em> is the more natural choice anyway.' }
    ],
    rule: 'In a true/false-and-correct task, only false sentences get a correction.'
  },
  u13a3_4: {
    q: 'Joe thinks that the patient might have been running away from something.',
    a: 'T — true',
    why: 'Joe says <em>He might have been trying to run away from his past.</em> The form <em>might have been</em> + <em>-ing</em> describes something possibly in progress at a time in the past, which is exactly what the statement reports.',
    wrong: [
      { opt: 'F — false', why: 'Joe does not claim it as a fact, and the statement does not claim it as a fact either — <em>might have been running</em> keeps it as a possibility, so the two match.' }
    ],
    rule: '<em>might/may/could + have been + -ing</em> = possibly in progress in the past.'
  },
  u13a3c_4: {
    q: 'Correction for sentence 4 (Joe thinks that the patient might have been running away from something.) — is one needed?',
    a: '',
    why: 'Nothing to write. Sentence 4 accurately reports both what Joe says and how sure he is, so there is no false element to correct.',
    wrong: [
      { opt: 'Joe thinks that the patient must have been running away from something', why: 'This strengthens the modal. Joe is speculating, so <em>might</em> is the level of certainty he actually expresses.' },
      { opt: 'Joe thinks that the patient might be running away from something', why: 'Without <em>have</em> this refers to now. Joe is talking about the period before the patient was found.' }
    ],
    rule: 'Do not "improve" a sentence that is already true — you would lose the mark.'
  },
  u13a3_5: {
    q: 'Joe thinks that the patient was definitely unmarried.',
    a: 'F — false',
    why: 'Joe raises marriage as a <strong>possibility</strong>, not a certainty — he says the man could have had a wife and children. <em>Definitely unmarried</em> misreports both the modal and the direction of his opinion.',
    wrong: [
      { opt: 'T — true', why: 'The idea that he can\'t have been married comes up in the discussion, but it is not Joe\'s view — Joe raises a wife and children as a possibility. Match the opinion to the right speaker.' }
    ],
    rule: 'In multi-speaker listening, note <strong>who</strong> says what as well as <strong>how sure</strong> they are.'
  },
  u13a3c_5: {
    q: 'Correction for sentence 5 (Joe thinks that the patient was definitely unmarried.)',
    a: 'Joe thinks he could have been married',
    why: 'Two things change: the certainty softens to <em>could</em>, and the meaning flips to the positive. <em>Could have been married</em> describes a possible past situation.',
    wrong: [
      { opt: "Joe thinks he can't have been married", why: 'That is the other doctor\'s conclusion. <em>Can\'t have been</em> means the speaker is almost sure it is not true.' },
      { opt: 'Joe thinks he could be married', why: 'Without <em>have</em>, this is about his situation now. The doctors are speculating about his life before the attack.' },
      { opt: 'Joe thinks he could have married', why: '<em>Could have married</em> means it had been possible for him to get married (and perhaps he didn\'t). <em>Could have been married</em> describes the state he may have been in.' }
    ],
    rule: 'Past possibility about a <strong>state</strong>: <em>could have been</em> + adjective/participle.'
  },
  u13a3_6: {
    q: 'The patient has been unable to make contact with anyone he knows.',
    a: 'F — false',
    why: 'He has in fact managed to make contact — apparently he\'s been able to find his parents. The statement says the opposite.',
    wrong: [
      { opt: 'T — true', why: 'For most of the conversation nobody knows who he is, so this sounds right; but by the end the doctors report that contact has been made.' }
    ],
    rule: 'Listen to the whole exchange — later information often overturns the opening situation.'
  },
  u13a3c_6: {
    q: 'Correction for sentence 6 (The patient has been unable to make contact with anyone he knows.)',
    a: "he's been able to find his parents",
    why: '<em>Can</em> has no perfect form, so the present perfect must use <em>be able to</em>: <em>has been able to</em>. That form is right here because the search started in the past and has now succeeded.',
    wrong: [
      { opt: "he's could find his parents", why: 'A modal can never follow <em>have/has</em>. Where you would want "has could", English uses <em>has been able to</em>.' },
      { opt: 'he could find his parents', why: 'This loses the "up to now" meaning of the present perfect, and <em>could</em> is not used for a single successful action in the past.' },
      { opt: "he's able to find his parents", why: 'The present simple would mean he is generally capable of finding them. The point is that he has already succeeded.' }
    ],
    rule: 'Perfect and future forms of ability: <em>has been able to</em>, <em>will be able to</em> — never <s>has could</s>, <s>will can</s>.'
  },
  u13a3_7: {
    q: "Deborah thinks that the patient can't have hit his head.",
    a: 'F — false',
    why: 'Deborah\'s conclusion is the opposite: <em>In the attack he must have hit his head.</em> <em>Must have</em> and <em>can\'t have</em> are the two extremes of the same scale, so swapping them reverses her meaning completely.',
    wrong: [
      { opt: 'T — true', why: 'A head injury is discussed, which makes the statement look familiar, but <em>can\'t have hit</em> denies exactly what she concludes.' }
    ],
    rule: '<em>must have</em> = almost certainly did; <em>can\'t have</em> = almost certainly didn\'t.'
  },
  u13a3c_7: {
    q: "Correction for sentence 7 (Deborah thinks that the patient can't have hit his head.)",
    a: 'she thinks that he must have hit his head',
    why: 'The evidence — an attack plus complete memory loss — is strong, so the deduction takes <em>must</em> + <em>have</em> + past participle for a past event.',
    wrong: [
      { opt: 'she thinks that he must hit his head', why: '<em>Must</em> + bare infinitive is a deduction about the present (or an obligation). The attack is over, so you need the perfect: <em>must have hit</em>.' },
      { opt: 'she thinks that he might have hit his head', why: 'This weakens a firm deduction into one possibility among several. Deborah is sure.' },
      { opt: 'she thinks that he had to hit his head', why: '<em>Had to</em> is past obligation — "it was necessary for him to". It cannot be used to draw a conclusion from evidence.' }
    ],
    rule: 'Deduction about the past = <em>must</em> + <em>have</em> + past participle.'
  },
  u13a3_8: {
    q: 'Deborah thinks that the patient will never recover his memory.',
    a: 'F — false',
    why: 'She is hopeful, not pessimistic: <em>He could make a total recovery one day.</em> <em>Will never</em> is a flat prediction, which is much stronger than anything she says.',
    wrong: [
      { opt: 'T — true', why: 'Recovery is uncertain in the recording, so a gloomy reading is tempting; but "uncertain" is <em>could</em>, and the statement turns it into "never".' }
    ],
    rule: 'Do not upgrade a speaker\'s <em>could</em> into <em>will</em> or <em>will never</em>.'
  },
  u13a3c_8: {
    q: 'Correction for sentence 8 (Deborah thinks that the patient will never recover his memory.)',
    a: 'she thinks he could make a total recovery',
    why: '<em>Could</em> + bare infinitive expresses possibility in the future, which is the level of certainty Deborah actually has. It also reverses the negative back to a positive outlook.',
    wrong: [
      { opt: 'she thinks he can make a total recovery', why: '<em>Can</em> presents it as a present fact or ability. The recovery is an uncertain future event, so <em>could</em> is needed.' },
      { opt: 'she thinks he will make a total recovery', why: 'This turns a hopeful possibility into a confident prediction — the same overstatement that made the original sentence false, just in the other direction.' },
      { opt: 'she thinks he could made a total recovery', why: 'Modals take the bare infinitive: <em>could make</em>.' }
    ],
    rule: 'Future possibility: <em>may/might/could</em> + bare infinitive.'
  },

  /* ── C1 Choose the most suitable word (ability) ── */
  u13c1_1: {
    q: "He's a concert pianist and he ______ play all Beethoven's sonatas. (can / manages to)",
    a: 'can',
    why: 'This is a permanent, general ability — part of what being a concert pianist means — so <em>can</em> is right. <em>Can</em> is the normal choice for general ability in the present.',
    wrong: [
      { opt: 'manages to', why: '<em>Manage to</em> means succeeding at something difficult, usually on a particular occasion. It would suggest he only just scrapes through the sonatas each time.' },
      { opt: 'is able to', why: 'Not wrong grammatically, but for general ability <em>can</em> is much more natural; <em>be able to</em> is kept for places where <em>can</em> has no form.' }
    ],
    rule: 'General ability in the present → <em>can</em>.'
  },
  u13c1_2: {
    q: 'When I lived in a small town I ______ walk almost everywhere, but now I live in the capital city I need a car. (was able to / could)',
    a: 'could',
    why: 'This is a general ability that lasted throughout the time he lived there, not a single success, so <em>could</em> is the natural choice. Because it is a repeated, general ability, <em>was able to</em> is also accepted here.',
    wrong: [
      { opt: 'managed to', why: '<em>Managed to</em> implies difficulty on a specific occasion. Walking everywhere in a small town was routine, not an achievement.' },
      { opt: 'can', why: 'The time frame is set by <em>when I lived in a small town</em>, so a past form is required.' }
    ],
    rule: 'Both <em>could</em> and <em>was able to</em> work for a general past ability; only <em>could</em> is blocked for one-off successes.'
  },
  u13c1_3: {
    q: 'They worked all night and ______ finish the report just in time. (could / managed to)',
    a: 'managed to',
    why: 'This is one specific occasion, and <em>worked all night</em> and <em>just in time</em> show how hard it was. <em>Manage to</em> is exactly the verb for succeeding at something difficult.',
    wrong: [
      { opt: 'could', why: '<em>Could</em> cannot be used for a single successful action in the past. English requires <em>was/were able to</em> or <em>managed to</em>: <s>they could finish the report</s>.' },
      { opt: 'managed', why: 'In this meaning <em>manage</em> needs a <em>to</em>-infinitive: <em>managed to finish</em>.' }
    ],
    rule: 'One successful occasion in the past: <em>was/were able to</em> or <em>managed to</em>, never <em>could</em>.'
  },
  u13c1_4: {
    q: 'The protestors ______ persuade the president to change the law. (didn\'t manage to / couldn\'t)',
    a: "didn't manage to",
    why: 'Both options are possible here, and that is the point of the item: the ban on <em>could</em> for a single occasion disappears in the negative, so <em>couldn\'t</em> is fine too. <em>Didn\'t manage to</em> adds the sense of trying hard and still failing.',
    wrong: [
      { opt: "didn't manage persuade", why: '<em>Manage</em> takes a <em>to</em>-infinitive: <em>didn\'t manage to persuade</em>.' },
      { opt: "didn't could persuade", why: 'Modals never take <em>do/did</em>. The negative form is simply <em>couldn\'t</em>.' }
    ],
    rule: '<em>Couldn\'t</em> is allowed for a specific past occasion; <em>could</em> is not.'
  },
  u13c1_5: {
    q: "Next year she ______ join the club, but she's not old enough yet. (can / will be able to)",
    a: 'will be able to',
    why: '<em>Can</em> has no future form of its own, so future ability is expressed with <em>will be able to</em>, and <em>next year</em> puts the ability firmly in the future. The key also accepts <em>can</em>, which speakers do use when a future time expression makes the timing clear.',
    wrong: [
      { opt: 'will can', why: 'Two modals can never follow one another. Use <em>will be able to</em>.' },
      { opt: 'is able to', why: 'A present form contradicts <em>she\'s not old enough yet</em> — she cannot join at the moment.' },
      { opt: 'could', why: '<em>Could</em> can point to a future possibility, but here the club\'s age rule makes it a certainty once she is old enough — and a possibility modal loses the sense of a definite future ability.' }
    ],
    rule: 'Future ability: <em>will be able to</em> (never <s>will can</s>).'
  },
  u13c1_6: {
    q: 'In my country it ______ get very cold in the winter. (can / is able to)',
    a: 'can',
    why: 'This is the <em>can</em> = "sometimes" use: it describes what happens from time to time. It is very common in written academic English — <em>People can be unkind about their colleagues.</em>',
    wrong: [
      { opt: 'is able to', why: '<em>Be able to</em> attributes ability to someone or something that can act. The weather has no ability, so it cannot "be able to" get cold.' },
      { opt: 'must', why: '<em>Must</em> is a deduction from evidence about one situation. Here the writer is describing a general tendency, not concluding anything.' }
    ],
    rule: '<em>Can</em> can mean "sometimes": <em>It can get very cold.</em>'
  },
  u13c1_7: {
    q: "I was nearly late as the bus didn't come, but luckily I ______ get a taxi. (could / managed to)",
    a: 'managed to',
    why: 'One specific occasion, and <em>luckily</em> shows it was not straightforward. <em>Manage to</em> marks a difficult success on a single occasion.',
    wrong: [
      { opt: 'could', why: '<em>Could</em> describes a general ability, so it cannot report one particular thing you succeeded in doing: <s>luckily I could get a taxi</s>.' },
      { opt: 'manage to', why: 'The whole sentence is in the past (<em>was, didn\'t come</em>), so the past form <em>managed</em> is needed.' }
    ],
    rule: 'Specific occasion + difficulty → <em>managed to</em>.'
  },
  u13c1_8: {
    q: "I hope that I ______ do some sightseeing when I'm in New York. (will be able to / will manage to)",
    a: 'will be able to',
    why: 'The trip is in the future and <em>can</em> has no future form, so <em>will be able to</em> is used. <em>Will manage to</em> is also accepted; it adds the idea of fitting the sightseeing in despite a busy schedule.',
    wrong: [
      { opt: 'will can', why: 'You cannot put two modals together. <em>Will be able to</em> is the future of <em>can</em>.' },
      { opt: 'am able to', why: 'A present form clashes with <em>when I\'m in New York</em>, which refers to a future stay.' }
    ],
    rule: '<em>Can</em> has no infinitive, participle or future — use <em>be able to</em> in those slots.'
  },
  u13c1_9: {
    q: "She didn't get good enough grades to go to her first choice of university but she ______ get a place at another one. (could / was able to)",
    a: 'was able to',
    why: 'This reports one particular success in the past — she actually got the place — so <em>was able to</em> is required. <em>Could</em> is reserved for general ability.',
    wrong: [
      { opt: 'could', why: '<em>Could</em> would mean she was generally capable of getting places at universities, not that she succeeded on this occasion.' },
      { opt: 'were able to', why: 'The subject <em>she</em> is singular, so the verb must be <em>was</em>.' },
      { opt: 'was able get', why: '<em>Be able</em> always keeps its <em>to</em>: <em>was able <strong>to</strong> get</em>.' }
    ],
    rule: 'Past ability on one occasion, successfully used: <em>was/were able to</em> or <em>managed to</em>.'
  },

  /* ── C2 Which sentence, a or b, best matches? ── */
  u13c2_1: {
    q: 'He has a British passport. → a He might be British. / b He must be British.',
    a: 'b — He must be British.',
    why: 'A British passport is very strong evidence, and the modal has to match the strength of the evidence. <em>Must</em> is the "very likely / almost certain" modal.',
    wrong: [
      { opt: 'a — He might be British.', why: '<em>Might</em> puts it at "possible". That is far too weak for someone who is actually holding a British passport.' }
    ],
    rule: 'Strong evidence → <em>must</em>; weak evidence → <em>may/might/could</em>.'
  },
  u13c2_2: {
    q: 'I just saw him in the corridor talking to a student. → a Our teacher can\'t be off sick. / b Our teacher may not be off sick.',
    a: "a — Our teacher can't be off sick.",
    why: 'Seeing the teacher in person is strong evidence <strong>against</strong> his being off sick, so the near-impossibility modal <em>can\'t</em> is right.',
    wrong: [
      { opt: 'b — Our teacher may not be off sick.', why: '<em>May not</em> leaves the question open ("possibly he isn\'t"), but the speaker has just seen him, so there is no doubt left. Remember that <em>may not/might not</em> do not express the same probability as <em>can\'t</em>.' }
    ],
    rule: '<em>Can\'t</em> = "there is strong evidence this is not true", not merely "perhaps not".'
  },
  u13c2_3: {
    q: 'I advise you to take some warm clothes just in case. → a It can be cold in Delhi in December. / b It must be cold in Delhi in December.',
    a: 'a — It can be cold in Delhi in December.',
    why: '<em>Just in case</em> shows the speaker is talking about what happens from time to time, which is the <em>can</em> = "sometimes" use.',
    wrong: [
      { opt: 'b — It must be cold in Delhi in December.', why: '<em>Must</em> is a deduction about one particular situation on the basis of evidence. Nothing here is being deduced — the advice is about an occasional possibility.' }
    ],
    rule: 'General tendency → <em>can</em>; conclusion from evidence → <em>must</em>.'
  },
  u13c2_4: {
    q: "He wasn't home when I called at seven. → a John can't have been working late last night. / b John might have been working late last night.",
    a: 'b — John might have been working late last night.',
    why: 'An empty house at seven is weak evidence: working late is just one explanation among several. <em>Might have been</em> + <em>-ing</em> is the form for something possibly in progress in the past.',
    wrong: [
      { opt: "a — John can't have been working late last night.", why: '<em>Can\'t have</em> claims near-certainty that it did <strong>not</strong> happen, but his absence actually points towards working late, not away from it.' }
    ],
    rule: '<em>may/might/could + have been + -ing</em> = possibly happening at a past moment.'
  },
  u13c2_5: {
    q: "He has shares in the most successful company of all time. → a He can't be a millionaire. / b He must be a millionaire.",
    a: 'b — He must be a millionaire.',
    why: 'Owning shares in the most successful company ever is strong evidence for wealth, so the deduction takes <em>must</em>.',
    wrong: [
      { opt: "a — He can't be a millionaire.", why: 'This says the evidence makes wealth almost impossible, which is the reverse of what the sentence on the right implies.' }
    ],
    rule: 'Deduction in the present: <em>must/can\'t</em> + bare infinitive.'
  },
  u13c2_6: {
    q: 'It depends if I finish my essay before then. → a I may come to the lecture this afternoon. / b I must come to the lecture this afternoon.',
    a: 'a — I may come to the lecture this afternoon.',
    why: '<em>It depends</em> signals genuine uncertainty about a future event, and <em>may</em> is the standard modal for that.',
    wrong: [
      { opt: 'b — I must come to the lecture this afternoon.', why: '<em>Must</em> expresses obligation (or near-certainty). Either reading clashes with an outcome that still depends on an unfinished essay.' }
    ],
    rule: 'Uncertain future plan → <em>may/might/could</em> + bare infinitive.'
  },
  u13c2_7: {
    q: 'Not many people passed it. → a The exam may have been very difficult. / b The exam must have been very difficult.',
    a: 'b — The exam must have been very difficult.',
    why: 'A low pass rate is strong evidence, so the strong deduction is justified: <em>must</em> + <em>have</em> + past participle for a conclusion about the past.',
    wrong: [
      { opt: 'a — The exam may have been very difficult.', why: 'Perfectly good English, but too tentative. <em>May have</em> offers one possible explanation, whereas the pass rate makes difficulty the obvious conclusion.' }
    ],
    rule: 'Match the modal to the strength of the evidence you are given.'
  },
  u13c2_8: {
    q: "We will have to give him directions. → a John couldn't know how to get here. / b John might not know how to get here.",
    a: 'b — John might not know how to get here.',
    why: 'Directions are needed because there is a real chance he does not know the way. <em>Might not</em> expresses exactly that open possibility.',
    wrong: [
      { opt: "a — John couldn't know how to get here.", why: '<em>Couldn\'t</em> means near-impossibility and is normally used about the past. It does not express the same probability as <em>might not</em> — and if it were almost impossible for him to know the way, the sentence would not be about giving him directions just in case.' }
    ],
    rule: '<em>may not / might not</em> ≠ <em>couldn\'t</em>: the first is "perhaps not", the second is "almost certainly not".'
  },

  /* ── C3 Replace the bracketed phrases with past modal phrases ── */
  u13c3_1: {
    q: 'As a double-income couple without children they ______ (they were likely) rather unusual.',
    a: 'must have been',
    why: '<em>They were likely</em> signals strong probability, which is <em>must</em>; and the couple lived 2,800 years ago, so the past form <em>must</em> + <em>have</em> + past participle is needed.',
    wrong: [
      { opt: 'may have been', why: 'This downgrades "likely" to "possible". The bracket tells you the writer is fairly confident.' },
      { opt: 'must be', why: '<em>Must</em> + bare infinitive is a deduction about the present. The whole paragraph is about ancient Thebes.' },
      { opt: 'must have be', why: 'After <em>have</em> you need the past participle: <em>been</em>.' }
    ],
    rule: 'Strong deduction about the past: <em>must</em> + <em>have</em> + past participle.'
  },
  u13c3_2: {
    q: 'Their jobs at the temple ______ (it is possible that they provided) the couple with a small wage.',
    a: 'may have provided',
    why: '<em>It is possible that</em> maps onto the middle-strength modals, and the event is in the past, so you need <em>may/might/could</em> + <em>have</em> + past participle. All three are accepted.',
    wrong: [
      { opt: 'must have provided', why: 'Too strong. The writer is speculating about a couple we know almost nothing about, and the bracket says "it is possible".' },
      { opt: 'may provide', why: 'Without <em>have</em> this refers to the present or future. The temple jobs ended nearly three thousand years ago.' },
      { opt: 'may have provide', why: 'The past participle is required after <em>have</em>: <em>provided</em>.' }
    ],
    rule: '"It is possible that + past" → <em>may/might/could have</em> + past participle.'
  },
  u13c3_3: {
    q: 'A piece of fertile Nile land on which ______ (it is possible that they grew) crops of barley, sesame, or dates.',
    a: 'may have grown',
    why: 'Same pattern as the previous gap: a possible past event takes <em>may/might/could</em> + <em>have</em> + past participle. <em>Might have grown</em> and <em>could have grown</em> are equally accepted.',
    wrong: [
      { opt: 'must have grown', why: 'The writer has no direct evidence about this particular field, so the cautious modal is the right one.' },
      { opt: 'may have grew', why: '<em>Grew</em> is the past simple. After <em>have</em> you need the past participle <em>grown</em>.' },
      { opt: 'could grow', why: 'This means "were able to grow" — a statement about ability. The bracket asks about what possibly happened.' }
    ],
    rule: 'Keep parallel speculations in the same modal pattern throughout a passage.'
  },
  u13c3_4: {
    q: 'She ______ (it is possible she was) anxious about her inability to have children.',
    a: 'may have been',
    why: 'The paragraph opens with <em>We can only guess</em>, so the writer is speculating. A possible past state takes <em>may/might/could</em> + <em>have been</em>.',
    wrong: [
      { opt: 'must have been', why: 'Save <em>must</em> for the next gap, where <em>certainly</em> licenses it. Here the bracket only claims possibility.' },
      { opt: 'may be', why: 'Present reference. Djedmaatesankh died 2,800 years ago, so the perfect form is needed.' },
      { opt: 'may have was', why: 'After <em>have</em> the past participle is <em>been</em>, never <em>was</em>.' }
    ],
    rule: 'Notice the contrast the writer builds: <em>may have been</em> anxious, but <em>must have</em> worried.'
  },
  u13c3_5: {
    q: 'Certainly, as she approached her thirties, she ______ (it is highly likely she worried) about her health.',
    a: 'must have worried',
    why: 'Two clues push you to the strongest modal: the bracket says <em>highly likely</em>, and the sentence itself begins <em>certainly</em>. Past deduction takes <em>must</em> + <em>have</em> + past participle.',
    wrong: [
      { opt: 'may have worried', why: 'Too weak. <em>Certainly</em> in the same sentence would then contradict the modal you had chosen.' },
      { opt: 'must worry', why: 'Present deduction. The sentence is about a woman approaching thirty in the ninth century BC.' },
      { opt: 'must have worry', why: 'The past participle <em>worried</em> is required after <em>have</em>.' }
    ],
    rule: 'Let the adverb decide: <em>certainly/probably</em> → <em>must</em>; <em>possibly/perhaps</em> → <em>may/might/could</em>.'
  },
  u13c3_6: {
    q: 'In a way that she ______ (was impossible for her to imagine), Djedmaatesankh has achieved a degree of fame in our 21st century.',
    a: 'could not have imagined',
    why: 'The full sentence reads <em>In a way that she could not have imagined…</em>: impossibility looking back at the past is expressed by <em>could not/couldn\'t have</em> + past participle. <em>Cannot have imagined</em> is also accepted.',
    wrong: [
      { opt: 'must not have imagined', why: '<em>Must not</em> is not used for negative deduction in English. To say something was almost impossible you use <em>can\'t/couldn\'t have</em>.' },
      { opt: 'may not have imagined', why: 'This only says it is possible she didn\'t imagine it. The bracket says it was <strong>impossible</strong>, so you need the strong modal.' },
      { opt: 'could not have imagine', why: 'After <em>have</em> the past participle is required: <em>imagined</em>.' },
      { opt: "wasn't able to imagine", why: 'A reasonable paraphrase, but the exercise asks specifically for a past <strong>modal</strong> phrase.' }
    ],
    rule: 'Negative deduction about the past: <em>can\'t/couldn\'t have</em> + past participle — never <s>mustn\'t have</s>.'
  },

  /* ── C4 Add may, can or can't to soften the essay ── */
  u13c4_1: {
    q: 'Some people believe that television ______ be harmful to children.',
    a: 'can',
    why: 'Inserting <em>can</em> turns a sweeping claim into "is sometimes harmful", which is the tone academic writing rewards. <em>May</em> is also accepted, softening it to "possibly harmful".',
    wrong: [
      { opt: 'must', why: 'This makes the claim <strong>stronger</strong>, which is the opposite of what the task asks for.' },
      { opt: "can't", why: 'This reverses the meaning. The sentence is reporting the view of people who are worried about television.' },
      { opt: 'can be', why: 'The verb <em>be</em> is already printed after the gap. Write only the modal, or you get <s>can be be harmful</s>.' }
    ],
    rule: 'Modals "soften" a claim and show it is an opinion, not a proven fact.'
  },
  u13c4_2: {
    q: 'Some people believe that television can be harmful to children, saying that it ______ influence behaviour in a negative way.',
    a: 'may',
    why: '<em>May</em> presents the effect as a possibility rather than an established fact, which is exactly the hedging the task is training. <em>Can</em> ("sometimes does") is also accepted.',
    wrong: [
      { opt: 'will', why: 'A flat prediction. In the B4 comparison, this is precisely the style the teacher marks as "a very strong opinion".' },
      { opt: "can't", why: 'This contradicts the opinion being reported — these people believe television <strong>does</strong> have a bad effect.' },
      { opt: 'must', why: 'Over-claims. <em>Must</em> asserts near-certainty, so the sentence would sound less careful, not more.' }
    ],
    rule: '<em>May</em> is the commonest hedging modal in academic writing.'
  },
  u13c4_3: {
    q: 'However, watching violence on television ______ encourage violent behaviour in children.',
    a: 'can',
    why: 'The <em>can</em> = "sometimes" use fits perfectly, because the next sentence goes on to say it is true in some cases but not all. <em>May</em> is also accepted.',
    wrong: [
      { opt: 'must', why: 'Far too strong, and it would contradict the very next clause, which limits the claim.' },
      { opt: "can't", why: 'That negative belongs in gap 5, where the essay explicitly says the claim cannot be true of <strong>all</strong> children.' },
      { opt: 'will', why: 'Presents the effect as guaranteed. The paragraph is building a balanced argument, not a prediction.' }
    ],
    rule: '<em>Can</em> + bare infinitive can mean "sometimes does": <em>Television can influence behaviour.</em>'
  },
  u13c4_4: {
    q: 'This ______ be true in cases of children who have already exhibited violent tendencies, but …',
    a: 'may',
    why: 'The writer is conceding one possibility before limiting it, and <em>may</em> is the standard modal for a careful concession. It also sets up the contrast with <em>can\'t</em> in the next clause.',
    wrong: [
      { opt: 'must', why: 'A near-certainty claim about a group of children the writer has no data on. The whole point of the exercise is to avoid that.' },
      { opt: "can't", why: 'This destroys the argument: the sentence concedes the point for one group before denying it for all children.' },
      { opt: 'will', why: 'Turns a cautious concession into a confident forecast.' }
    ],
    rule: 'Concede with <em>may</em>, then limit with <em>but … can\'t</em>.'
  },
  u13c4_5: {
    q: '… but it ______ be true of all children, otherwise we would have an epidemic of child crime.',
    a: "can't",
    why: 'The clause after <em>otherwise</em> is strong evidence against the claim, so the near-impossibility modal is right. <em>Cannot</em> is also accepted.',
    wrong: [
      { opt: 'may not', why: 'Too weak. <em>May not</em> only says "possibly it isn\'t true", and it does not express the same probability as <em>can\'t</em>.' },
      { opt: 'may', why: '<em>But</em> demands a reversal. Repeating <em>may</em> would make the second half agree with the first instead of contradicting it.' },
      { opt: "mustn't", why: '<em>Mustn\'t</em> expresses prohibition ("you are not allowed to"), not negative deduction. To say something is almost certainly not true, use <em>can\'t</em>.' }
    ],
    rule: 'Negative deduction in the present: <em>can\'t</em> + bare infinitive.'
  },
  u13c4_6: {
    q: 'It is also argued that bad language on television ______ encourage the same in children.',
    a: 'may',
    why: 'The writer is reporting an argument, not endorsing it, so <em>may</em> keeps a careful distance. <em>Can</em> ("sometimes does") is also accepted.',
    wrong: [
      { opt: 'must', why: 'Presents somebody else\'s argument as an established fact, which is exactly what the softening exercise is designed to prevent.' },
      { opt: 'will', why: 'A guaranteed outcome. There is no evidence in the essay for that level of confidence.' },
      { opt: "can't", why: 'Reverses the argument being reported.' }
    ],
    rule: 'When reporting other people\'s claims, hedge with <em>may</em> or <em>can</em>.'
  },
  u13c4_7: {
    q: '… restricting children\'s television viewing to mainly educational programmes … ______ overcome any risks of television being a bad influence.',
    a: 'may',
    why: 'This is the writer\'s own conclusion, so <em>may</em> presents it as a reasoned opinion rather than a fact. That is what an IELTS Writing Task 2 conclusion should sound like.',
    wrong: [
      { opt: 'will', why: 'The B4 examples make exactly this point: <em>it will result in less pollution</em> earns "This is a very strong opinion", while <em>it could result in</em> earns "Good sentence".' },
      { opt: "can't", why: 'Reverses the writer\'s conclusion — the paragraph begins <em>Nevertheless, overall I believe…</em>' },
      { opt: 'must', why: 'Reads as an obligation or a near-certainty. Neither suits a personal conclusion offered as an opinion.' }
    ],
    rule: 'Soften your conclusion: <em>may/could</em> instead of <em>will</em>.'
  },

  /* ── D Q1–10 Summary completion: The history of soap (Track 18) ── */
  u13d1_1: {
    q: 'In ancient times, soap was used to clean ______.',
    a: 'clothing',
    why: 'The talk explains that the earliest soaps were for washing things, not people — <em>clothing</em> is the word the speaker uses. It is one word, well inside the two-word limit.',
    wrong: [
      { opt: 'clothes', why: 'The obvious synonym, and a very common slip. In summary completion you must write the word you actually hear.' },
      { opt: 'people', why: 'That is the contrast the very next sentence makes: washing people came much later.' },
      { opt: 'the body', why: 'Personal hygiene is described as a modern idea, so this contradicts the summary.' }
    ],
    rule: 'Summary completion is a dictation task — transfer the speaker\'s own word.'
  },
  u13d1_2: {
    q: 'The use of soap for personal hygiene was unheard of until relatively ______ times.',
    a: 'modern',
    why: '<em>Relatively ______ times</em> needs an adjective, and the speaker\'s point is that washing yourself with soap is a recent idea. <em>Modern</em> collocates naturally with <em>times</em>.',
    wrong: [
      { opt: 'recent', why: 'A near-perfect synonym, which makes it tempting, but the recording says <em>modern</em>.' },
      { opt: 'ancient', why: 'The opposite meaning, and <em>ancient</em> is already used in the previous sentence of the summary.' },
      { opt: 'modern day', why: 'Two words where one is needed, and it does not fit before <em>times</em>.' }
    ],
    rule: 'Check the word class the gap needs — here an adjective before <em>times</em>.'
  },
  u13d1_3: {
    q: 'Ancient people had little technology but many ______, so they were probably able to discover soap by chance.',
    a: 'practical skills',
    why: 'The sentence is built on a contrast: <em>little technology</em> versus <em>many …</em>. <em>Many</em> requires a plural noun, and the speaker specifies that the skills were practical. Two words, exactly at the limit.',
    wrong: [
      { opt: 'skills', why: 'Loses the adjective the speaker uses. The contrast being drawn is between technology and hands-on, practical know-how.' },
      { opt: 'many practical skills', why: '<em>Many</em> is already printed before the gap, and this would also break the two-word limit.' },
      { opt: 'practical skill', why: '<em>Many</em> must be followed by a plural noun.' }
    ],
    rule: 'Read the words on both sides of the gap — they fix the grammar of your answer.'
  },
  u13d1_4: {
    q: 'Soap was probably only used in ______ societies.',
    a: 'wealthy',
    why: 'The gap needs an adjective before <em>societies</em>, and the speaker\'s point is that soap was a luxury only richer societies could afford to make and use.',
    wrong: [
      { opt: 'rich', why: 'Means the same thing, but the recording says <em>wealthy</em>. Synonyms are not accepted in gap-fill listening.' },
      { opt: 'ancient', why: 'True of all the societies discussed, so it would not answer the question of <strong>which</strong> ones used soap.' },
      { opt: 'wealthy people', why: 'The noun <em>societies</em> is already printed after the gap.' }
    ],
    rule: 'If two societies are contrasted, listen for the distinguishing adjective.'
  },
  u13d1_5: {
    q: 'There is no evidence that tribespeople at the time of the British ______ used soap.',
    a: 'Iron Age',
    why: 'The gap names a historical period, so it takes capital letters: the British <em>Iron Age</em>. It is two words, which is the maximum allowed.',
    wrong: [
      { opt: 'Bronze Age', why: 'The neighbouring period, and the classic trap in any question about early British history. Listen for which age is named.' },
      { opt: 'Empire', why: '<em>British Empire</em> is the collocation your ear expects, but it is the wrong era entirely — the sentence is about tribespeople.' },
      { opt: 'Stone Age', why: 'An earlier period again, and too early for the iron tools and tribal settlements the speaker describes.' }
    ],
    rule: 'Capitalise proper nouns: periods, places, nationalities, names.'
  },
  u13d1_6: {
    q: 'The history of soap has mostly been discovered from ______.',
    a: 'written texts',
    why: 'The speaker says what we know about early soap comes from documents rather than from objects. <em>Written texts</em> is two words, at the limit.',
    wrong: [
      { opt: 'archaeology', why: 'A very plausible guess for ancient history, but the recording specifically credits written sources.' },
      { opt: 'texts', why: 'Drops the adjective the speaker uses. Write the full phrase when it fits the word limit.' },
      { opt: 'written text', why: 'The speaker uses the plural; keep the exact form you hear.' }
    ],
    rule: 'Use the whole phrase if it stays within the word limit.'
  },
  u13d1_7: {
    q: 'The earliest known use of soap, in 2500 BC, was to wash ______.',
    a: 'wool',
    why: 'The oldest recorded use of soap is for washing wool during cloth production. The date <em>2500 BC</em> in the summary tells you which part of the talk to listen for.',
    wrong: [
      { opt: 'clothing', why: 'That is the answer to question 1. IELTS summaries often repeat a theme, so keep each answer tied to its own date and detail.' },
      { opt: 'hands', why: 'Washing the body is described as a modern idea, so this contradicts the summary.' },
      { opt: 'wool cloth', why: 'Adds a word the speaker does not use at this point. Stick to what you hear.' }
    ],
    rule: 'Use dates and numbers printed in the summary as signposts while you listen.'
  },
  u13d1_8: {
    q: 'The Egyptians made soap by mixing salts with oil taken from ______.',
    a: 'vegetables',
    why: 'The recipe described is alkaline salts plus a vegetable oil, so the source of the oil is <em>vegetables</em>. The plural matches <em>oil taken from …</em>.',
    wrong: [
      { opt: 'animals', why: 'Animal fat is the other classic soap ingredient, which makes it a deliberate trap. The recording specifies vegetables here.' },
      { opt: 'olives', why: 'A sensible Mediterranean guess, but it is not the word used.' },
      { opt: 'vegetable', why: 'The speaker uses the plural form. Copy it exactly.' }
    ],
    rule: 'Where two ingredients are equally likely, the recording will name one — do not guess from general knowledge.'
  },
  u13d1_9: {
    q: 'The Romans … removed dirt using steam and a ______.',
    a: 'metal blade',
    why: 'Romans steamed the dirt loose in the baths and then scraped it off with a metal blade. <em>Steam and a …</em> tells you the gap is a singular countable noun; two words is the limit and this uses both.',
    wrong: [
      { opt: 'blade', why: 'Loses the material the speaker specifies, and <em>metal blade</em> fits comfortably inside the two-word limit.' },
      { opt: 'a metal blade', why: 'The article <em>a</em> is already printed before the gap.' },
      { opt: 'soap', why: 'The point of this part of the talk is that the Romans cleaned themselves <strong>without</strong> soap.' }
    ],
    rule: 'Never repeat a word that is already printed next to the gap.'
  },
  u13d1_10: {
    q: 'When Pompeii was excavated, they discovered a ______ for making soap.',
    a: 'factory',
    why: 'The excavation of Pompeii uncovered a whole soap-making works, which shows soap was produced on a commercial scale. <em>Soap factory</em> is also accepted, as it is still within the two-word limit.',
    wrong: [
      { opt: 'recipe', why: 'Plausible after <em>for making soap</em>, but what was dug up at Pompeii was a building, not a document.' },
      { opt: 'a factory', why: 'The article <em>a</em> is already printed before the gap.' },
      { opt: 'soap factory for making soap', why: 'Way over the two-word limit, and it repeats words already printed after the gap.' }
    ],
    rule: 'NO MORE THAN TWO WORDS — a third word costs you the mark even if the meaning is right.'
  },

  /* ── Grammar Focus Task: modal + verb, then ability or possibility ── */
  u13gft_1: {
    q: 'While you ______ (find) some information on the origins of soap, it is not a substance which has excited a great deal of study so far.',
    a: 'may be able to find',
    why: '<em>May</em> softens the claim to a possibility, exactly as the concessive <em>While you …, it is not …</em> requires. Because <em>can</em> has no infinitive, the ability part has to be expressed as <em>be able to</em> after the first modal.',
    wrong: [
      { opt: 'may can find', why: 'Two modals can never follow one another. After <em>may</em> you must switch to <em>be able to</em>.' },
      { opt: 'can find', why: 'States it as a plain fact and loses the hedging that the <em>While …</em> structure sets up.' },
      { opt: 'may be able to found', why: 'After <em>to</em> you need the bare infinitive <em>find</em>. <em>Found</em> is the past form.' }
    ],
    rule: 'Modal + <em>be able to</em> is how English stacks possibility on top of ability.'
  },
  u13gftc_1: {
    q: 'Is the modal in sentence 1 used for ability or possibility?',
    a: 'possibility',
    why: 'The modal doing the work is <em>may</em>: the speaker is saying it is possible you will find some information. <em>Be able to</em> is only there because <em>can</em> has no infinitive form to follow <em>may</em>.',
    wrong: [
      { opt: 'ability', why: 'Tempting, because <em>be able to</em> appears in the answer — but the tested modal is <em>may</em>, and nothing in the sentence is about the reader having a special skill.' }
    ],
    rule: 'Label the sentence by the modal that carries the meaning, not by every word in the phrase.'
  },
  u13gft_2: {
    q: 'We can only assume that other activities ______ (provide) the basis from which this key concept arose.',
    a: 'must have provided',
    why: '<em>We can only assume</em> means this is the one conclusion the evidence allows, which is the job of <em>must</em>. The events are in the distant past, so it takes <em>have</em> + past participle.',
    wrong: [
      { opt: 'may have provided', why: 'This offers one option among several, which makes <em>we can only assume</em> pointless — the speaker is drawing the single available conclusion.' },
      { opt: 'must provide', why: 'A present deduction. The origins of soap are being reconstructed from the distant past.' },
      { opt: 'must have provide', why: 'The past participle <em>provided</em> is required after <em>have</em>.' }
    ],
    rule: 'Past deduction: <em>must</em> + <em>have</em> + past participle.'
  },
  u13gftc_2: {
    q: 'Is the modal in sentence 2 used for ability or possibility?',
    a: 'possibility',
    why: '<em>Must</em> here says how likely the speaker thinks something is — it sits at the top of the possibility scale in B3. Nobody\'s capability is being described.',
    wrong: [
      { opt: 'ability', why: 'Nothing in the sentence is about being able to do something; <em>must</em> is about how sure the speaker is.' },
      { opt: 'obligation', why: '<em>Must</em> does express obligation elsewhere, but nothing is being required of anyone here — and in any case this exercise only offers ability or possibility.' }
    ],
    rule: 'In this unit, "possibility" covers the whole certainty scale: <em>must, may, might, could, can\'t</em>.'
  },
  u13gft_3: {
    q: 'So, how is it that these primitive people from over two thousand years ago ______ (discover) soap?',
    a: 'could have discovered',
    why: '<em>How is it that …</em> asks how they <strong>managed</strong> to do it, so <em>could</em> here means "were able to". The discovery is a completed event in the distant past, hence <em>have</em> + past participle.',
    wrong: [
      { opt: 'could have discover', why: 'The past participle <em>discovered</em> is required after <em>have</em>.' },
      { opt: 'must have discovered', why: 'That would be a deduction that they did discover it. The question is not <strong>whether</strong> but <strong>how</strong> they were able to.' },
      { opt: 'can have discovered', why: '<em>Can have</em> + past participle does not work in a statement or in a <em>how</em>-question like this one. In the affirmative English uses <em>could have</em>; <em>can have</em> survives mainly in negatives such as <em>can\'t have discovered</em>.' }
    ],
    rule: '<em>Could have</em> + past participle can express past ability as well as past possibility — the context decides.'
  },
  u13gftc_3: {
    q: 'Is the modal in sentence 3 used for ability or possibility?',
    a: 'ability',
    why: 'The giveaway is <em>how is it that …</em>: the speaker is asking how people with almost no technology were <strong>able</strong> to discover soap, not how likely it is that they did.',
    wrong: [
      { opt: 'possibility', why: 'A fair guess, since <em>could</em> usually signals possibility — but here the speaker takes the discovery as a fact and is asking how it was achieved.' }
    ],
    rule: 'Same form, two jobs: read the surrounding question to decide which one <em>could</em> is doing.'
  },
  u13gft_4: {
    q: 'I carried out some experiments using basic techniques to try to find out what people ______ (observe).',
    a: 'might have observed',
    why: 'The speaker ran experiments precisely because he did not know what ancient people noticed, so he speculates: <em>might</em> + <em>have</em> + past participle for a possible past event.',
    wrong: [
      { opt: 'might observe', why: 'Without <em>have</em> this points to the present or future. The observations he is investigating happened thousands of years ago.' },
      { opt: 'must have observed', why: 'A firm deduction, but the whole sentence is about trying to find out — the speaker is not yet sure.' },
      { opt: 'might have observe', why: 'The past participle <em>observed</em> is required after <em>have</em>.' }
    ],
    rule: 'Speculating about a past event: <em>may/might/could</em> + <em>have</em> + past participle.'
  },
  u13gftc_4: {
    q: 'Is the modal in sentence 4 used for ability or possibility?',
    a: 'possibility',
    why: '<em>Might</em> only ever expresses possibility — it is one of the middle-strength modals on the evidence scale. The speaker is guessing at what people may have seen.',
    wrong: [
      { opt: 'ability', why: '<em>Might</em> is never an ability modal. If ability were meant, the sentence would need <em>could</em> or <em>had been able to</em>.' }
    ],
    rule: '<em>May</em> and <em>might</em> belong only to the possibility group.'
  },
  u13gft_5: {
    q: 'I was able to demonstrate that they would indeed ______ (make) a soap that is not dissimilar to the one we know today.',
    a: 'have been able to make',
    why: '<em>Would</em> is already printed, so the gap continues it: <em>would have been able to make</em>. <em>Can</em> has no participle, so past ability after another modal has to be built with <em>have been able to</em>.',
    wrong: [
      { opt: 'have could make', why: 'A modal can never follow <em>have</em>. Use <em>have been able to</em>.' },
      { opt: 'be able to make', why: '<em>Would be able to</em> points at a present or future capability, but the demonstration was about what people thousands of years ago could have done.' },
      { opt: 'have been able to made', why: 'After <em>to</em> you need the bare infinitive: <em>make</em>.' }
    ],
    rule: 'Past ability inside a modal structure: <em>modal</em> + <em>have been able to</em> + bare infinitive.'
  },
  u13gftc_5: {
    q: 'Is the modal in sentence 5 used for ability or possibility?',
    a: 'ability',
    why: 'The phrase at the heart of the answer is <em>be able to</em>, and the speaker\'s claim is that ancient people were capable of producing real soap. <em>Would</em> is only marking the hypothetical framing of the experiment.',
    wrong: [
      { opt: 'possibility', why: '<em>Would</em> looks like a possibility modal, but it is not what the gap tests. The gap supplies <em>have been able to</em>, which is the ability phrase.' }
    ],
    rule: '<em>Be able to</em> in any tense is always the ability phrase.'
  }
};
