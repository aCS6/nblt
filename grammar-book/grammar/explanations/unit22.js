/* Unit 22 — The Passive: explanations
   window.__EXPL[<data-id>] = { q, a, why, wrong:[{opt,why}], rule? }
   Rendered by initExplanations() in scripts/utils.js. */
window.__EXPL = {

  /* ── A3 Listen again and fill in the gaps (Track 30) ── */
  a3_q1: {
    q: "'______ applications quite quickly?'",
    a: 'do they process',
    why: 'The question is <strong>active</strong>: the vague agent <em>they</em> (the library staff) is the subject, and <em>applications</em> — printed immediately after the gap — is the object. A present simple question is formed with <em>do</em> + subject + bare infinitive.',
    wrong: [
      { opt: 'are applications processed', why: 'This is the passive, but <em>applications</em> is already printed after the gap. In the passive that noun has to stand in front of the verb as its subject, which leaves the printed word with no job.' },
      { opt: 'do they processed', why: 'After the auxiliary <em>do</em> the main verb stays in the bare infinitive: <em>do they process</em>.' },
      { opt: 'are they processing', why: 'Well formed, but the student is asking about normal office practice, not about what is happening this minute, so the present simple is used.' }
    ],
    rule: 'Active question: <em>do/does</em> + subject + bare infinitive + object.'
  },
  a3_a1: {
    q: "'Oh yes. All applications ______ on the spot so they'll be able to issue you a card straight away.'",
    a: 'are processed',
    why: 'The object of the question (<em>applications</em>) becomes the subject of the answer, so the verb turns <strong>passive</strong>: <em>be</em> + past participle. The plural subject takes <em>are</em>, and the agent is left out because it is obvious who does the work.',
    wrong: [
      { opt: 'process', why: 'The active would make the applications do the processing themselves. They receive the action, so the passive is needed.' },
      { opt: 'is processed', why: '<em>Applications</em> is plural, so the auxiliary must be <em>are</em>.' },
      { opt: 'processed', why: 'Without <em>are</em> this reads as a past simple active. Every passive needs a form of <em>be</em> in front of the participle.' }
    ],
    rule: 'The object of an active verb becomes the subject of the passive.'
  },
  a3_q2: {
    q: "'So, ______ the student's union?'",
    a: 'does the university run',
    why: 'Another active question, this time asking who is behind the union: <em>does</em> + subject + bare infinitive, with <em>the student’s union</em> as the object. The key also accepts <em>do you run</em>, since the speaker could address the person directly.',
    wrong: [
      { opt: "is the student's union run", why: 'The passive question is good English, but the noun phrase <em>the student’s union</em> is already printed after the gap, so putting it in the gap as well repeats it.' },
      { opt: 'does the university runs', why: 'After <em>does</em> the main verb loses its <em>-s</em>: <em>does the university run</em>.' },
      { opt: 'is run by', why: 'This has no subject before the object, so it does not make a question. An active question needs an agent as its subject: <em>does the university run…</em>' }
    ],
    rule: 'One auxiliary carries the tense — the main verb stays in the base form.'
  },
  a3_a2: {
    q: "'No, the union ______ by students, seven students to be precise.'",
    a: 'is run',
    why: 'The answer moves the object into subject position, so the passive is used: <em>is</em> + past participle. Here the agent <strong>is</strong> stated (<em>by students</em>) because it is the new, important information the student asked for.',
    wrong: [
      { opt: 'runs', why: 'The active says the union runs something else, which contradicts the <em>by students</em> phrase that follows.' },
      { opt: 'is ran', why: 'The past participle of <em>run</em> is <em>run</em>, not <em>ran</em>. <em>Ran</em> is the past simple.' },
      { opt: 'is running', why: 'The active continuous cannot take a <em>by</em> agent, and the sentence is stating a permanent arrangement rather than something in progress.' }
    ],
    rule: 'Add <em>by</em> + agent only when the doer is worth mentioning.'
  },
  a3_q3: {
    q: "'And how ______ ?'",
    a: 'is the executive committee chosen',
    why: 'With <em>how</em> the question can be asked either way, and the key accepts both: the passive <em>is the executive committee chosen</em> keeps the focus on the committee, and <em>do you choose the executive committee</em> is the active alternative. <em>Is the executive committee elected</em> is also accepted as a synonym.',
    wrong: [
      { opt: 'is chosen the executive committee', why: 'Word order. In a passive question the subject sits between the auxiliary and the participle: <em>is the committee chosen?</em>' },
      { opt: 'the executive committee is chosen', why: 'This is statement order. A question needs the auxiliary in front of the subject.' },
      { opt: 'is the executive committee choose', why: 'The passive needs the past participle <em>chosen</em>, not the base form.' }
    ],
    rule: 'Passive question: auxiliary + subject + past participle.'
  },
  a3_a3: {
    q: "'Well, the executive committee ______ by the students through an election process.'",
    a: 'is chosen',
    why: 'Passive again, matching the question: <em>is</em> + past participle, with the agent named in <em>by the students</em>. The key accepts <em>is elected</em> too, which is the more precise word for an election.',
    wrong: [
      { opt: 'chooses', why: 'The active would mean the committee does the choosing, but <em>by the students</em> shows the choosing is done to it.' },
      { opt: 'are chosen', why: '<em>Committee</em> is treated as a single body here, so the key uses <em>is</em>. British English does allow a plural verb with collective nouns (<em>the committee are meeting</em>), but only <em>is chosen / is elected</em> is accepted here.' },
      { opt: 'is choosing', why: 'The active continuous cannot take a <em>by</em> agent, and this describes a standing procedure rather than an action in progress.' }
    ],
    rule: 'Passive + <em>by</em> + agent when you want to say who does it.'
  },

  /* ── C1 Banana chips: word box in the correct passive form ── */
  c1_2: {
    q: 'First, the bananas ______ by a special machine …',
    a: 'are peeled',
    why: 'A process description stays in the <strong>present simple passive</strong> all the way through, matching the example <em>are made</em>. The bananas receive the action, the agent is given as <em>by a special machine</em>, and the plural subject takes <em>are</em>.',
    wrong: [
      { opt: 'peel', why: 'The active makes the bananas do the peeling, which also leaves <em>by a special machine</em> with nothing to attach to.' },
      { opt: 'is peeled', why: '<em>Bananas</em> is plural, so the auxiliary must be <em>are</em>.' },
      { opt: 'are peeling', why: 'Active and continuous. Process descriptions use the simple passive, not the continuous.' }
    ],
    rule: 'Describing a process → present simple passive throughout.'
  },
  c1_3: {
    q: '… and then they ______ in water.',
    a: 'are soaked',
    why: 'The bananas go into water at this stage, so either verb from the box fits and the key accepts both <em>are soaked</em> and <em>are rinsed</em>. The pronoun <em>they</em> stands for the bananas, which receive the action.',
    wrong: [
      { opt: 'are washed', why: 'The right meaning, but <em>wash</em> is not in the word box. In this task type you can only use the words given.' },
      { opt: 'soak', why: 'Active present simple, so the bananas would be soaking something else.' },
      { opt: 'are soaking', why: '<em>Soak</em> can be used intransitively (<em>the beans are soaking</em>), so this is not impossible English — but the surrounding passage is entirely present simple passive, and the key accepts only <em>are soaked / are rinsed</em>.' }
    ],
    rule: 'Word-box tasks: only the printed verbs are accepted.'
  },
  c1_4: {
    q: 'Next the clean bananas ______ into a chipping machine …',
    a: 'are put',
    why: 'Present simple passive. <em>Put</em> is irregular with the same form throughout (<em>put / put / put</em>), so nothing changes after <em>are</em>.',
    wrong: [
      { opt: 'are putted', why: '<em>Put</em> has no <em>-ed</em> form. Its past participle is simply <em>put</em>.' },
      { opt: 'put', why: 'Without <em>are</em> this is active, making the bananas the ones doing the loading.' },
      { opt: 'are putting', why: 'Active continuous — wrong voice, and the wrong tense for a process description.' }
    ],
    rule: 'Irregular participles: put/put, cut/cut, left/left.'
  },
  c1_5: {
    q: '… where they ______ into thin chips.',
    a: 'are sliced',
    why: 'The chipping machine does the cutting, so the bananas are the receivers and the passive is required. <em>Into thin chips</em> tells you the verb must be one of cutting: <em>slice</em>.',
    wrong: [
      { opt: 'slice', why: 'Active. The bananas do not slice anything — the machine slices them.' },
      { opt: 'are slice', why: 'After <em>are</em> the verb must be a past participle: <em>sliced</em>.' },
      { opt: 'are cut', why: 'Correct in meaning, but <em>cut</em> is not one of the twelve words in the box.' }
    ],
    rule: 'Passive = <em>be</em> + <strong>past participle</strong>, never the base form.'
  },
  c1_6: {
    q: 'After this they ______ to dry.',
    a: 'are left',
    why: '<em>Leave something to dry</em> means to let it stand until it is dry. The chips receive the action, so the passive <em>are left</em> is used, with the to-infinitive <em>to dry</em> showing the purpose.',
    wrong: [
      { opt: 'are leaved', why: '<em>Leave</em> is irregular: leave / left / left. <em>Leaved</em> does not exist as a verb form.' },
      { opt: 'leave', why: 'The active would mean the chips depart, which is not the meaning here.' },
      { opt: 'are dried', why: 'A sensible idea, but <em>dry</em> is already printed after the gap and is not in the word box.' }
    ],
    rule: 'Irregular participle: leave → left.'
  },
  c1_7: {
    q: 'Once they are dry, the banana chips ______ in hot oil in large deep fat fryers.',
    a: 'are fried',
    why: 'Present simple passive. <em>Fry</em> ends in a consonant + <em>-y</em>, so the <em>y</em> changes to <em>i</em> before <em>-ed</em>: <em>fried</em>. <em>In hot oil</em> confirms the verb.',
    wrong: [
      { opt: 'are fryed', why: 'Spelling. A final <em>-y</em> after a consonant becomes <em>-i</em> before <em>-ed</em>: <em>fried</em>, <em>tried</em>, <em>dried</em>.' },
      { opt: 'fry', why: 'Active — the chips would be doing the frying.' },
      { opt: 'is fried', why: '<em>The banana chips</em> is plural, so it takes <em>are</em>.' }
    ],
    rule: 'Consonant + <em>-y</em> → <em>-ied</em> in the past participle.'
  },
  c1_8: {
    q: 'The cooked banana chips ______ from the fryers using a special sieve …',
    a: 'are removed',
    why: 'Someone (or the sieve) takes the chips out, so the chips are the receiver and the passive is used. <em>From the fryers</em> signals a verb of taking out: <em>remove</em>.',
    wrong: [
      { opt: 'remove', why: 'Active. The chips are not removing anything; they are what is removed.' },
      { opt: 'are removing', why: 'Active continuous — the wrong voice, and the passage keeps to the simple form throughout.' },
      { opt: 'are taken', why: 'Right meaning, wrong word: <em>take</em> is not in the box.' }
    ],
    rule: 'Passive when the subject undergoes the action.'
  },
  c1_9: {
    q: 'The banana chips ______ to cool.',
    a: 'are then left',
    why: 'Again <em>leave something to</em> + verb, in the passive. The key gives <em>are then left</em>, and also accepts the plain <em>are left</em>; the adverb <em>then</em> sits between the auxiliary and the participle.',
    wrong: [
      { opt: 'then are left', why: 'Understandable, but the natural position for a mid-sentence adverb is after the auxiliary: <em>are then left</em>.' },
      { opt: 'are then leave', why: 'The passive needs the past participle <em>left</em> after <em>are</em>.' },
      { opt: 'then leave', why: 'Active, so the chips would be the ones leaving.' }
    ],
    rule: 'Adverbs go between the auxiliary and the past participle: <em>is often used</em>.'
  },
  c1_10: {
    q: 'When they have reached the right temperature, spices ______ for extra taste.',
    a: 'are added',
    why: 'The subject changes to <em>spices</em>, which are put in by someone else, so the passive continues. <em>Spices</em> is plural, so the auxiliary is <em>are</em>.',
    wrong: [
      { opt: 'add', why: 'Active — the spices would be adding something themselves.' },
      { opt: 'is added', why: '<em>Spices</em> is plural. Check the noun immediately before the gap, not the previous sentence\'s subject.' },
      { opt: 'are adding', why: 'Active continuous. The process description stays in the present simple passive.' }
    ],
    rule: 'The passive auxiliary agrees with the new subject.'
  },
  c1_11: {
    q: '… the banana chips are packaged ready to ______ around the world …',
    a: 'be distributed',
    why: 'After <em>ready to</em> an infinitive is needed, and the chips are the receiver, so it is the <strong>passive infinitive</strong>: <em>to be distributed</em>. Only <em>be distributed</em> goes in the gap because <em>to</em> is already printed.',
    wrong: [
      { opt: 'to be distributed', why: 'The word <em>to</em> is already printed before the gap, so writing it again gives <s>to to be distributed</s>.' },
      { opt: 'distribute', why: 'The active infinitive would mean the chips distribute something else.' },
      { opt: 'are distributed', why: 'A finite verb cannot follow <em>ready to</em>. The infinitive form <em>be distributed</em> is required.' }
    ],
    rule: 'Passive infinitive = <em>(to) be</em> + past participle.'
  },
  c1_12: {
    q: '… ready to be distributed around the world and ______.',
    a: 'sold',
    why: 'This verb shares the <em>to be</em> of the previous clause: <em>ready to be distributed … and (be) sold</em>. When two passives are joined by <em>and</em>, the auxiliary is not repeated, so only the past participle <em>sold</em> is needed.',
    wrong: [
      { opt: 'be sold', why: 'Acceptable in isolation, but the key wants the shortened form. <em>Be</em> is already carried over from <em>to be distributed</em>.' },
      { opt: 'sell', why: 'The chips do not sell anything; they are sold. The participle is needed for the passive.' },
      { opt: 'are sold', why: 'A finite verb cannot be coordinated with the infinitive <em>be distributed</em>.' }
    ],
    rule: 'In <em>be X-ed and Y-ed</em>, the second participle shares the same auxiliary.'
  },

  /* ── C2 Find and correct the active/passive mistakes ── */
  c2_2: {
    q: 'The world has changed [2] since globalisation and the internet. → correct form?',
    a: 'has been changed',
    why: 'The exercise treats globalisation and the internet as the forces acting on the world, so the world is the receiver and the present perfect <strong>passive</strong> is wanted: <em>has</em> + <em>been</em> + past participle. <em>Since</em> pairs with the present perfect because the change reaches up to now.',
    wrong: [
      { opt: 'has changed', why: 'The printed form. <em>Change</em> also works intransitively, so <em>the world has changed</em> is good English in other contexts — but it presents the world as changing by itself instead of being changed by globalisation, which is the point being tested here.' },
      { opt: 'has been change', why: 'After <em>been</em> the past participle is required: <em>changed</em>.' },
      { opt: 'have been changed', why: '<em>The world</em> is singular, so the auxiliary is <em>has</em>.' }
    ],
    rule: 'Present perfect passive: <em>has/have been</em> + past participle.'
  },
  c2_3: {
    q: 'Attitudes might have been happened [3] to change. → correct form?',
    a: 'might have happened',
    why: '<em>Happen</em> is <strong>intransitive</strong> — it never takes an object — so it has no passive at all. The fix is simply to delete <em>been</em>: <em>might have happened</em>, a modal + perfect infinitive.',
    wrong: [
      { opt: 'might have been happened', why: 'The printed form. Intransitive verbs such as <em>happen</em>, <em>occur</em> and <em>arrive</em> cannot be made passive, so <em>been</em> has no place here.' },
      { opt: 'might be happened', why: 'Still passive, and it also loses the perfect that links the change to the present.' },
      { opt: 'might have been happening', why: 'Well formed, but it changes the meaning to something still in progress. The correction required is only the removal of the passive <em>been</em>.' }
    ],
    rule: 'No object → no passive. Intransitive verbs have active forms only.'
  },
  c2_4: {
    q: 'I think people have given [4] a much broader view of the world … → correct form?',
    a: 'have been given',
    why: 'People are the ones who <em>receive</em> the broader view, so the passive is needed: <em>have been given</em>. With <em>give</em> the indirect object (the person) can become the subject of the passive, which is exactly what happens here.',
    wrong: [
      { opt: 'have given', why: 'The printed form. Active, so it says people handed a broader view to somebody else — the opposite of the intended meaning.' },
      { opt: 'have been gave', why: 'The past participle of <em>give</em> is <em>given</em>. <em>Gave</em> is the past simple and cannot follow <em>been</em>.' },
      { opt: 'has been given', why: '<em>People</em> is a plural noun, so it takes <em>have</em>.' }
    ],
    rule: 'Two-object verbs (give, send, offer) allow the person to be the passive subject.'
  },
  c2_5: {
    q: 'Some say that local cultures have been benefited [5] from tourism. → correct form?',
    a: 'have benefited',
    why: '<em>Benefit from</em> is intransitive, so it cannot be turned into a passive. The cultures are the ones gaining, and the source is introduced by <em>from</em>, not <em>by</em>: <em>local cultures have benefited from tourism</em>.',
    wrong: [
      { opt: 'have been benefited', why: 'The printed form. There is no passive of <em>benefit from</em> — the <em>from</em> phrase already shows where the advantage comes from.' },
      { opt: 'have been benefiting', why: 'Grammatical, and it would mean an ongoing gain, but the correction being tested is the removal of the wrong passive, not a change of aspect.' },
      { opt: 'has benefited', why: '<em>Cultures</em> is plural, so <em>have</em> is required.' }
    ],
    rule: '<em>benefit from</em>, <em>suffer from</em>, <em>result in</em> — intransitive, so active only.'
  },
  c2_6: {
    q: 'Some researchers have been suggested [6] that tourism can actually harm local cultures. → correct form?',
    a: 'have suggested',
    why: 'The researchers do the suggesting, so the verb is active. The <em>that</em>-clause is already the object of <em>suggest</em>, which is why no passive is possible with <em>researchers</em> as the subject.',
    wrong: [
      { opt: 'have been suggested', why: 'The printed form. The passive would mean the researchers themselves were suggested by somebody, which is nonsense here.' },
      { opt: 'has suggested', why: '<em>Some researchers</em> is plural, so it takes <em>have</em>.' },
      { opt: 'it has been suggested', why: 'A genuine reporting passive, but <em>some researchers</em> is already printed as the subject, so there is no room to add the dummy subject <em>it</em>.' }
    ],
    rule: 'A verb already followed by a <em>that</em>-clause object stays active.'
  },
  c2_7: {
    q: 'Traditional ways of life are continued [7] to be threatened. → correct form?',
    a: 'continue',
    why: '<em>Continue</em> is intransitive here — nobody continues the ways of life — so it stays active: <em>continue to be threatened</em>. The passive belongs to the second verb only, and <em>to be threatened</em> is already correct.',
    wrong: [
      { opt: 'are continued', why: 'The printed form. Used this way <em>continue</em> has no passive, and you cannot stack two passives in one verb chain.' },
      { opt: 'continues', why: 'The head noun is the plural <em>ways</em> (<em>of life</em> only describes it), so no <em>-s</em> on the verb.' },
      { opt: 'are continuing', why: 'Well formed, but the sentence is a general statement, so the present simple is the natural choice — and the fault being corrected is the voice, not the aspect.' }
    ],
    rule: 'Agree with the head noun: <em>ways</em> of life <strong>continue</strong>.'
  },
  c2_8: {
    q: 'Tourism numbers are being become [8] much larger each year. → correct form?',
    a: 'are becoming',
    why: '<em>Become</em> is a linking verb: it joins the subject to a description (<em>much larger</em>) rather than taking a true object, so it has no passive. The active present continuous <em>are becoming</em> gives the rising trend.',
    wrong: [
      { opt: 'are being become', why: 'The printed form. Linking verbs such as <em>become</em> and <em>seem</em> take no object, so there is nothing to move into subject position and no passive to form.' },
      { opt: 'are became', why: '<em>Became</em> is the past simple, not the past participle — and no passive is possible with this verb in any case.' },
      { opt: 'become', why: 'Possible English, but the sentence describes a change still under way, so the continuous is what the exercise is after.' }
    ],
    rule: 'Linking verbs (become, seem, appear, look) have no passive.'
  },
  c2_9: {
    q: 'As a result, some people feels [9] that we need stricter policies. → correct form?',
    a: 'is felt',
    why: 'The exercise wants the impersonal <strong>reporting passive</strong> from section B3 — <em>it</em> + passive verb + <em>that</em>-clause — so the clause becomes <em>it is felt that we need stricter policies</em>. That pattern lets you report an opinion without naming who holds it, which suits formal writing.',
    wrong: [
      { opt: 'feels', why: 'The printed form, and wrong however you read the sentence: <em>some people</em> is plural, so a singular verb cannot agree with it.' },
      { opt: 'feel', why: 'This fixes the agreement and <em>some people feel that…</em> is perfectly good English — but it keeps the active voice, and this exercise is about converting to the reporting passive.' },
      { opt: 'are felt', why: '<em>It is felt that…</em> is a fixed impersonal pattern with the dummy singular subject <em>it</em>, so the plural <em>are</em> does not fit.' }
    ],
    rule: 'Reporting passive: <em>It is said / believed / felt / thought that…</em>'
  },
  c2_10: {
    q: 'Many students have been come [10] to study abroad. → correct form?',
    a: 'have come',
    why: '<em>Come</em> is intransitive, so there is no passive: the students do the coming. The fix is the present perfect active <em>have come</em>, which links the arrivals to the present situation.',
    wrong: [
      { opt: 'have been come', why: 'The printed form. Verbs of movement such as <em>come</em>, <em>go</em> and <em>arrive</em> take no object and therefore have no passive.' },
      { opt: 'have came', why: 'The past participle of <em>come</em> is <em>come</em>; <em>came</em> is the past simple.' },
      { opt: 'has come', why: '<em>Many students</em> is plural, so <em>have</em> is needed.' }
    ],
    rule: '<em>come / go / arrive / rise / happen</em> — never passive.'
  },
  c2_11: {
    q: 'Some industries has affected [11] by the presence of so many tourists. → correct form?',
    a: 'have been affected',
    why: 'The agent is spelled out in <em>by the presence of so many tourists</em>, so the verb must be passive: the missing <em>been</em> has to be put back. The subject <em>some industries</em> is plural, so the auxiliary agrees as <em>have</em>.',
    wrong: [
      { opt: 'has affected', why: 'The printed form. Active, so it says the industries affect something else — but the <em>by</em> phrase marks them as the thing affected.' },
      { opt: 'has been affected', why: 'Passive but singular, and the plural subject <em>some industries</em> calls for <em>have been affected</em>.' },
      { opt: 'has being affected', why: 'After <em>has</em> the perfect needs <em>been</em>, not <em>being</em>.' }
    ],
    rule: 'A <em>by</em> + agent phrase is a strong signal that the verb must be passive, and it must agree in number with the subject.'
  },
  c2_12: {
    q: 'In future, e-tourism will use [12] more widely. → correct form?',
    a: 'will be used',
    why: 'E-tourism is what people will use, not the user, so the future passive is needed: after a modal the passive is always <em>be</em> + past participle. <em>More widely</em> is an adverb, which confirms there is no object for an active verb to take.',
    wrong: [
      { opt: 'will use', why: 'The printed form. Active, so e-tourism would have to be using something — but no object follows.' },
      { opt: 'will used', why: 'A modal is followed by a bare infinitive, so <em>be</em> must come between <em>will</em> and the participle.' },
      { opt: 'is used', why: 'Correctly passive, but it loses the future reference given by <em>in future</em>.' }
    ],
    rule: 'Modal passive: <em>will / should / must / can</em> + <em>be</em> + past participle.'
  },

  /* ── C3 Correct active or passive form ── */
  c3_2: {
    q: 'The new shelves ______ (place) in the library last week.',
    a: 'were placed',
    why: 'Shelves cannot place themselves, so the passive is needed, and <em>last week</em> is finished past time, giving the past simple passive with a plural subject: <em>were placed</em>. The key also lists <em>are placed</em>, though <em>were placed</em> is the form the time phrase points to.',
    wrong: [
      { opt: 'placed', why: 'Past simple active — that would make the shelves the ones doing the placing.' },
      { opt: 'was placed', why: '<em>The new shelves</em> is plural, so the auxiliary is <em>were</em>.' },
      { opt: 'have been placed', why: 'The present perfect cannot be used with a finished time expression such as <em>last week</em>.' }
    ],
    rule: 'Finished time (<em>last week, in 2019, yesterday</em>) → past simple.'
  },
  c3_3: {
    q: 'At that time it ______ (believe) that the earth was flat.',
    a: 'was believed',
    why: 'The dummy subject <em>it</em> plus a <em>that</em>-clause is the reporting passive pattern, and <em>at that time</em> puts it in the past: <em>it was believed that…</em>. The passive is ideal here because nobody needs to say who held the belief.',
    wrong: [
      { opt: 'believed', why: 'Active, which would need a real subject: <em>people believed that…</em>. The pronoun <em>it</em> has no meaning of its own and cannot do the believing.' },
      { opt: 'is believed', why: 'The present tense clashes with <em>at that time</em> and with the past <em>was flat</em> in the reported clause.' },
      { opt: 'was believing', why: '<em>Believe</em> is a state verb, so it is not normally used in the continuous — and the sentence needs the passive in any case.' }
    ],
    rule: '<em>It was said / believed / thought that…</em> for past opinions.'
  },
  c3_4: {
    q: 'Students ______ (allow) to use dictionaries in this exam.',
    a: 'have been allowed',
    why: 'Permission is given to the students by the examiners, so the passive is used, and the key wants the present perfect: <em>have been allowed</em>. <em>Allow</em> takes a to-infinitive after it, which is why <em>to use</em> follows unchanged.',
    wrong: [
      { opt: 'allow', why: 'Active, so the students would be granting permission to someone else.' },
      { opt: 'has been allowed', why: '<em>Students</em> is plural, so the auxiliary is <em>have</em>.' },
      { opt: 'are allowing', why: 'Active continuous. The students receive the permission, so a passive form is required.' }
    ],
    rule: '<em>be allowed to</em> + infinitive is the standard passive of <em>allow</em>.'
  },
  c3_5: {
    q: 'My car ______ (service) at the moment — I had to come by bus.',
    a: 'is being serviced',
    why: '<em>At the moment</em> makes it an action in progress, and a garage is doing the work, so this is the <strong>present continuous passive</strong>: <em>is</em> + <em>being</em> + past participle. The bus detail confirms the car is unavailable right now.',
    wrong: [
      { opt: 'is servicing', why: 'Active — that would mean the car is servicing something else.' },
      { opt: 'is serviced', why: 'The simple passive states a routine (<em>my car is serviced every year</em>), which loses the "happening now" sense of <em>at the moment</em>.' },
      { opt: 'is been serviced', why: 'Word order. The continuous passive uses <em>being</em>; <em>been</em> belongs to the perfect forms.' }
    ],
    rule: 'Continuous passive: <em>am/is/are being</em> + past participle.'
  },
  c3_6: {
    q: 'The new sports centre ______ (open) next month.',
    a: 'will be opened',
    why: 'Somebody will perform the opening ceremony, so the centre is the receiver and the future passive is used: <em>will</em> + <em>be</em> + past participle. <em>Next month</em> sets the future time.',
    wrong: [
      { opt: 'will open', why: '<em>Open</em> can be intransitive (<em>the shop opens at nine</em>), but the exercise is practising the passive, and here the focus is on the centre being opened by someone.' },
      { opt: 'will be open', why: '<em>Open</em> as an adjective describes a state (the doors are not locked). The verb needs the participle <em>opened</em> to describe the event.' },
      { opt: 'is opened', why: 'The present simple gives no future reference, which contradicts <em>next month</em>.' }
    ],
    rule: 'Future passive: <em>will be</em> + past participle.'
  },
  c3_7: {
    q: 'The number of students ______ (expect) to rise next year.',
    a: 'is expected',
    why: 'This is the second reporting pattern: subject + passive verb + to-infinitive. <em>The number</em> is the head noun and is singular, so the verb is <em>is expected</em>, not <em>are expected</em>.',
    wrong: [
      { opt: 'are expected', why: 'The plural agrees with <em>students</em> instead of the real head noun <em>the number</em>, which is singular.' },
      { opt: 'expects', why: 'Active — a number cannot expect anything. The people doing the forecasting are left unnamed by the passive.' },
      { opt: 'is expecting', why: '<em>Is expecting</em> is active and means "is anticipating", which does not fit an impersonal forecast.' }
    ],
    rule: '<em>The number of</em> + plural noun takes a singular verb.'
  },
  c3_8: {
    q: 'Glass ______ (make) from sand.',
    a: 'is made',
    why: 'A general fact about manufacturing: glass receives the action, and the maker is unimportant, so the present simple passive is used. <em>Glass</em> is uncountable and singular, so the auxiliary is <em>is</em>.',
    wrong: [
      { opt: 'makes', why: 'Active, so glass would be manufacturing something itself.' },
      { opt: 'are made', why: '<em>Glass</em> is an uncountable noun taking a singular verb.' },
      { opt: 'is being made', why: 'The continuous limits it to this moment, but the sentence states a permanent fact about how glass is produced.' }
    ],
    rule: '<em>be made of / from / in</em> — the classic passive for materials and origins.'
  },
  c3_9: {
    q: 'The company ______ (claim) to have the best safety record in the industry.',
    a: 'claims',
    why: 'This one stays <strong>active</strong>: the company is the one making the claim about itself, so the present simple <em>claims</em> is correct, with <em>-s</em> for the singular subject. Not every gap in a passive unit needs a passive.',
    wrong: [
      { opt: 'is claimed', why: '<em>It is claimed that…</em> works with the dummy subject <em>it</em>, but with <em>the company</em> as subject the passive would mean somebody claims the company, which is not the meaning.' },
      { opt: 'claim', why: '<em>The company</em> is singular, so the verb takes <em>-s</em>.' },
      { opt: 'is claiming', why: 'Grammatical, but the continuous suggests a temporary act of claiming. A standing corporate boast takes the present simple.' }
    ],
    rule: 'Use the passive only when the subject receives the action — check first.'
  },
  c3_10: {
    q: 'Dolphins ______ (know) to be highly intelligent animals.',
    a: 'are known',
    why: 'Subject + passive verb + to-infinitive again. The people who know this are unnamed, so the passive is used, and the plural subject <em>dolphins</em> takes <em>are</em>.',
    wrong: [
      { opt: 'know', why: 'Active. <em>Dolphins know…</em> would say what the dolphins themselves know, not what is known about them.' },
      { opt: 'is known', why: '<em>Dolphins</em> is plural, so <em>are</em> is required.' },
      { opt: 'are knowing', why: '<em>Know</em> is a state verb and is not used in the continuous — and this sentence needs the passive anyway.' }
    ],
    rule: '<em>be said / known / believed / thought / reported to</em> + infinitive.'
  },
  c3_11: {
    q: 'The lab equipment ______ (encourage / need) — use need + -ing.',
    a: 'needs encouraging',
    why: 'The task tells you to use the <strong>need + -ing</strong> pattern, which carries a passive meaning: <em>needs encouraging</em> = <em>needs to be encouraged</em>. The equipment is what receives the action, which is exactly when this pattern is used. <em>Equipment</em> is uncountable and so takes a singular verb: <em>needs</em>.',
    wrong: [
      { opt: 'need encouraging', why: 'The pattern is right but the verb does not agree: <em>equipment</em> is uncountable and takes the singular <em>needs</em>.' },
      { opt: 'need to encourage', why: 'The to-infinitive is active, so this would mean the equipment does the encouraging. With a thing as subject you want the <em>-ing</em> form.' },
      { opt: 'is needed to encourage', why: 'Two problems: it makes <em>need</em> itself passive, and it still leaves the equipment as the one doing the encouraging.' }
    ],
    rule: '<em>need + -ing</em> = <em>need to be + past participle</em>: <em>the room needs cleaning</em>.'
  },
  c3_12: {
    q: 'She ______ (take) a break — she needed to take one.',
    a: 'needed to take',
    why: 'The contrast with the previous item: here the subject <em>she</em> <strong>performs</strong> the action, so <em>need</em> is followed by a to-infinitive, not by <em>-ing</em>. The gloss after the dash is in the past, so the past form <em>needed</em> is used.',
    wrong: [
      { opt: 'needed taking', why: '<em>Need + -ing</em> has a passive meaning, so this would say the break was taken by somebody else on her behalf.' },
      { opt: 'needs to take', why: 'The present clashes with the past tense of the explanation printed after the dash.' },
      { opt: 'took', why: 'Grammatical English, but it drops the <em>need</em> pattern that this pair of items is designed to contrast.' }
    ],
    rule: 'Person as subject → <em>need to do</em>; thing as subject → <em>need doing</em>.'
  },

  /* ── Grammar Focus Task: rewrite as passives, then order them ── */
  gft_a: {
    q: 'Rewrite in the passive: They allow the cans to cool.',
    a: 'The cans are allowed to cool',
    why: 'The object <em>the cans</em> moves to the front and becomes the subject, and <em>allow</em> becomes <em>are allowed</em>. The vague agent <em>they</em> is simply dropped, which is the main reason for using the passive in a process description. The to-infinitive <em>to cool</em> is unchanged.',
    wrong: [
      { opt: 'The cans are allowed to cool by them', why: 'Adding <em>by them</em> defeats the purpose. You use the passive here precisely because the agent is unknown and unimportant.' },
      { opt: 'The cans allowed to cool', why: 'The passive needs a form of <em>be</em>: <em>are allowed</em>.' },
      { opt: 'The cans are allowed to be cooled', why: 'Over-correction. Only the first verb changes voice; <em>cool</em> is intransitive here, so it stays active.' }
    ],
    rule: 'Active object → passive subject; drop a meaningless agent like <em>they</em>.'
  },
  gft_b: {
    q: 'Rewrite in the passive: They sterilize the cans using a special heating process.',
    a: 'The cans are sterilized using a special heating process',
    why: '<em>The cans</em> becomes the subject and the verb becomes <em>are sterilized</em>. The <em>-ing</em> clause <em>using a special heating process</em> describes the method, not the doer, so it stays exactly as it is at the end of the sentence.',
    wrong: [
      { opt: 'The cans are sterilized by using a special heating process', why: 'Understandable, but the key does not include <em>by</em> here. Keep the <em>-ing</em> clause as it stood in the active sentence.' },
      { opt: 'The cans are sterilizing using a special heating process', why: 'Active continuous — that would make the cans do the sterilising.' },
      { opt: 'The cans are sterilize', why: 'A past participle is required after <em>are</em>: <em>sterilized</em>.' }
    ],
    rule: 'A method phrase (<em>using…, by means of…</em>) is not an agent — leave it alone.'
  },
  gft_c: {
    q: 'Rewrite in the passive: They take the fruit to the cannery in large trucks.',
    a: 'The fruit is taken to the cannery in large trucks',
    why: '<em>The fruit</em> becomes the subject, and because it is an uncountable singular noun the auxiliary is <em>is</em>. <em>Take</em> is irregular, so the past participle is <em>taken</em>.',
    wrong: [
      { opt: 'The fruit are taken to the cannery in large trucks', why: '<em>Fruit</em> is uncountable here, so it takes a singular verb: <em>is taken</em>.' },
      { opt: 'The fruit is took to the cannery in large trucks', why: '<em>Took</em> is the past simple. The passive needs the participle <em>taken</em>.' },
      { opt: 'The fruit is taken to the cannery by large trucks', why: 'The original says <em>in large trucks</em> — the trucks are the container, not the agent. Keep the preposition the active sentence used.' }
    ],
    rule: 'Irregular participle: take → taken. Keep the original prepositions.'
  },
  gft_d: {
    q: 'Rewrite in the passive: They check the fruit before storage and they reject any poor quality fruit.',
    a: 'The fruit is checked before storage and any poor quality fruit is rejected',
    why: 'There are two clauses, so there are two passives. Each active object becomes the subject of its own clause — <em>the fruit is checked</em> and <em>any poor quality fruit is rejected</em> — and both instances of <em>they</em> disappear.',
    wrong: [
      { opt: 'The fruit is checked before storage and reject any poor quality fruit', why: 'The second clause has been left active, so the fruit would be doing the rejecting. Convert both verbs.' },
      { opt: 'The fruit is checked before storage and any poor quality fruit are rejected', why: '<em>Fruit</em> is uncountable, so the second auxiliary must also be <em>is</em>.' },
      { opt: 'The fruit is checked before storage and is rejected any poor quality fruit', why: 'Word order. In the passive the noun phrase must stand in front of the verb as its subject.' }
    ],
    rule: 'Convert every clause: two active verbs give two passive verbs.'
  },
  gft_order: {
    q: 'Now write the correct order of sentences A–D.',
    a: 'C, D, B, A',
    why: 'Follow the canning process in the diagram: the fruit is transported (C), then checked before storage (D), then — once it is in cans — sterilized by heating (B), and finally the cans are left to cool (A). Cooling can only come after heating, which fixes the last two.',
    wrong: [
      { opt: 'A, B, C, D', why: 'The order the sentences happen to be printed in. Rewriting tasks nearly always scramble the sequence deliberately.' },
      { opt: 'C, D, A, B', why: 'This cools the cans before they are heated, which reverses cause and effect.' },
      { opt: 'D, C, B, A', why: 'The checking happens at the cannery, so the fruit has to be transported there first.' }
    ],
    rule: 'Order a process by physical logic: nothing can cool before it has been heated.'
  }
};
