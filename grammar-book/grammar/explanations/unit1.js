/* Unit 1 — Present Tenses: explanations
   window.__EXPL[<data-id>] = { q, a, why, wrong:[{opt,why}], rule? }
   Rendered by initExplanations() in scripts/utils.js. */
window.__EXPL = {

  /* ── A3 True/False (Track 02) ── */
  tf1: {
    q: 'Peter is waiting for his friends.',
    a: 'TRUE',
    why: 'Peter says he is waiting for his friends right now, at the moment of speaking. The present continuous <em>is waiting</em> is the correct tense for an action in progress at this moment, and the statement matches what he says.',
    wrong: [{ opt: 'FALSE', why: 'Nothing in the recording contradicts this. The action is happening as he speaks, which is exactly what <em>is waiting</em> expresses.' }],
    rule: 'Present continuous = action in progress at the moment of speaking.'
  },
  tf2: {
    q: "He isn't studying much this month.",
    a: 'FALSE',
    why: 'The opposite is true: he <strong>is</strong> studying really hard this month. <em>This month</em> marks a temporary period around now, so the present continuous is the right tense — but the statement reverses the fact.',
    wrong: [{ opt: 'TRUE', why: 'This would mean he is doing little studying. He actually says he is studying hard because of exams, so the negative is factually wrong even though the tense is well formed.' }],
    rule: 'Present continuous for temporary situations around now (this week, this month).'
  },
  tf3: {
    q: 'His parents own a shop.',
    a: 'FALSE',
    why: 'His parents own a <strong>restaurant</strong>, not a shop. The tense is right — <em>own</em> is a state verb used in the present simple for a permanent situation — but the noun is wrong.',
    wrong: [{ opt: 'TRUE', why: 'The business is a restaurant. This is a detail error, not a grammar error: listen for the specific noun, not just the general idea of a family business.' }],
    rule: '<em>Own</em> is a state verb: present simple, never <s>are owning</s>.'
  },
  tf4: {
    q: 'He practises the guitar most mornings.',
    a: 'FALSE',
    why: 'He practises the <strong>piano</strong> most mornings. He does play guitar, but in a band — the instrument he practises in the mornings is the piano.',
    wrong: [{ opt: 'TRUE', why: 'Guitar is mentioned in the recording, which makes this tempting, but it is attached to the band, not to the morning practice routine. Match the detail to the right part of the sentence.' }],
    rule: 'Present simple + <em>most mornings</em> = a repeated habit.'
  },
  tf5: {
    q: 'He frequently uses the Internet.',
    a: 'TRUE',
    why: 'He says he uses the Internet just about every day. <em>Frequently</em> is an accurate paraphrase of <em>just about every day</em>, and the present simple is correct for a repeated habit.',
    wrong: [{ opt: 'FALSE', why: 'The wording differs from the recording, but the meaning is the same. IELTS statements normally paraphrase rather than repeat the exact words.' }],
    rule: 'Present simple with frequency adverbs: always, often, frequently, rarely.'
  },
  tf6: {
    q: 'His cousin is living in America at the moment.',
    a: 'FALSE',
    why: 'His cousin is living in <strong>Thailand</strong> at the moment. The present continuous is correct here — <em>at the moment</em> signals a temporary stay — but the country is wrong.',
    wrong: [{ opt: 'TRUE', why: 'The grammar of the sentence is fine and the structure matches the recording, so it sounds plausible; only the place name has been swapped.' }],
    rule: 'Present continuous for a temporary situation: <em>He\'s living in Thailand</em> (not permanently).'
  },
  tf7: {
    q: "Peter doesn't support any football teams.",
    a: 'FALSE',
    why: 'Peter <strong>does</strong> support a team — his local football team. The statement makes it negative, which contradicts the recording.',
    wrong: [{ opt: 'TRUE', why: 'He plays football rather than only watching it, which may suggest he is not a supporter, but he explicitly says he supports his local team.' }],
    rule: 'Present simple for a permanent fact about someone.'
  },

  /* ── A4 Categorise the sentences ── */
  cat1: {
    q: 'Which sentences are about a situation that is permanent or a fact?',
    a: '3, 7',
    why: 'Sentence 3 (<em>His parents own a restaurant</em>) and sentence 7 (<em>Peter supports his local team</em>) both describe permanent, unchanging situations, so both use the present simple.',
    wrong: [
      { opt: '4, 5', why: 'These are repeated habits (<em>most mornings</em>, <em>every day</em>), not permanent states. Habits can stop; a permanent situation is treated as simply true.' },
      { opt: '2, 6', why: 'These are temporary situations in the present continuous, which is the opposite of permanent.' }
    ],
    rule: 'Present simple = permanent situations and facts.'
  },
  cat2: {
    q: 'Which sentences are about everyday habits?',
    a: '4, 5',
    why: 'Sentence 4 (<em>practises most mornings</em>) and sentence 5 (<em>uses the Internet every day</em>) describe actions repeated on a regular schedule. The time expressions <em>most mornings</em> and <em>every day</em> are the giveaway.',
    wrong: [
      { opt: '3, 7', why: 'These are permanent states — owning a restaurant and supporting a team are not actions you repeat each day.' },
      { opt: '1', why: 'Sentence 1 is happening at this moment, not repeatedly.' }
    ],
    rule: 'Habits take the present simple with a frequency expression.'
  },
  cat3: {
    q: 'Which sentence is about an action happening at the moment of speaking?',
    a: '1',
    why: 'Only sentence 1 (<em>Peter is waiting for his friends</em>) describes something in progress right now, as he speaks. This is the core use of the present continuous.',
    wrong: [
      { opt: '2, 6', why: 'These are also present continuous, but they cover a longer temporary period (<em>this month</em>, <em>at the moment</em> = these weeks), not the exact moment of speaking.' },
      { opt: '4', why: 'This is a habit in the present simple, so it is not happening as he speaks.' }
    ],
    rule: 'Present continuous covers both "right now" and "around now" — read the time phrase.'
  },
  cat4: {
    q: 'Which sentences are about a temporary situation?',
    a: '2, 6',
    why: 'Sentence 2 (<em>He is studying hard this month</em>) and sentence 6 (<em>His cousin is living in Thailand at the moment</em>) both describe situations that are true now but expected to change. <em>This month</em> and <em>at the moment</em> mark that limited period.',
    wrong: [
      { opt: '1', why: 'Sentence 1 is present continuous too, but it is an action at the exact moment of speaking rather than an extended temporary situation.' },
      { opt: '3, 7', why: 'These are permanent, so they take the present simple.' }
    ],
    rule: 'Present continuous for situations that are temporary and will change.'
  },

  /* ── C1 Choose the best ending ── */
  e1: {
    q: 'Fiona is watching television …',
    a: 'a — because her favourite film star is on.',
    why: '<em>Is watching</em> is present continuous, so the action is happening now. Ending (a) gives a reason for watching at this particular moment, which fits an action in progress.',
    wrong: [{ opt: 'b — when she has time.', why: '<em>When she has time</em> describes a repeated habit, and habits need the present simple: <em>Fiona watches television when she has time.</em>' }],
    rule: 'Match the tense to the time phrase: now → continuous; whenever → simple.'
  },
  e2: {
    q: "I'm having my lunch …",
    a: 'b — early today as I have an appointment.',
    why: '<em>Am having</em> is present continuous, and <em>early today</em> marks a one-off change from the normal routine. <em>Have</em> here means "eat", an action, so the continuous form is allowed.',
    wrong: [{ opt: 'a — at one o\'clock every day.', why: '<em>Every day</em> is a habit, which requires the present simple: <em>I have my lunch at one o\'clock every day.</em>' }],
    rule: '<em>Have</em> = eat/experience is an action verb and can be continuous.'
  },
  e3: {
    q: 'I do the shopping …',
    a: 'a — at the same time every week.',
    why: '<em>Do</em> is present simple, so it needs a habitual time phrase. <em>At the same time every week</em> describes a regular routine.',
    wrong: [{ opt: 'b — today for a friend who\'s ill.', why: '<em>Today</em> marks a temporary, one-off arrangement, which needs the present continuous: <em>I\'m doing the shopping today for a friend who\'s ill.</em>' }],
    rule: 'Present simple + every day/week/year = routine.'
  },
  e4: {
    q: 'What are you doing …',
    a: 'b — to your sister? Leave her alone!',
    why: 'The present continuous question asks about an action in progress at this moment, and <em>Leave her alone!</em> confirms it is happening right now.',
    wrong: [{ opt: 'a — to your sister when she behaves badly?', why: '<em>When she behaves badly</em> asks about a general habit, so it needs the present simple: <em>What do you do to your sister when she behaves badly?</em>' }],
    rule: 'Questions follow the same rule: now → <em>are you doing</em>; generally → <em>do you do</em>.'
  },
  e5: {
    q: 'I wear casual clothes …',
    a: 'a — at the weekend.',
    why: '<em>Wear</em> is present simple, so it pairs with the habitual phrase <em>at the weekend</em>, meaning every weekend.',
    wrong: [{ opt: 'b — because we\'re having a party at lunchtime.', why: 'This gives a reason for one specific occasion, so the continuous is needed: <em>I\'m wearing casual clothes because we\'re having a party.</em>' }],
    rule: 'A repeated occasion (at the weekend, on Fridays) takes the present simple.'
  },
  e6: {
    q: 'Teachers work hard …',
    a: 'b — but they get long holidays.',
    why: 'The present simple <em>work</em> states a general truth about teachers as a group, and the contrast <em>but they get long holidays</em> is also a general truth.',
    wrong: [{ opt: 'a — to get the concert ready for next week.', why: 'This is a temporary effort with a deadline, so it needs the continuous: <em>Teachers are working hard to get the concert ready.</em>' }],
    rule: 'Present simple for generally accepted truths.'
  },
  e7: {
    q: "The company's financial situation is improving …",
    a: 'a — now that it has a new Chief Executive.',
    why: '<em>Is improving</em> describes a changing situation or trend, and <em>now that…</em> explains the recent cause of that change.',
    wrong: [{ opt: 'b — when there is greater demand for its products.', why: '<em>When…</em> describes what generally happens, so it needs the present simple: <em>The situation improves when there is greater demand.</em>' }],
    rule: 'Present continuous for trends and changing situations: rising, falling, improving.'
  },
  e8: {
    q: 'Serge is thinking of retiring early …',
    a: 'b — because he isn\'t happy at work any more.',
    why: '<em>Is thinking of</em> means "is considering", which is a temporary mental activity, not a fixed opinion — so the continuous is correct. Ending (b) gives the current reason.',
    wrong: [{ opt: 'a — every time something bad happens at work.', why: '<em>Every time</em> signals a repeated habit and would need the present simple: <em>Serge thinks of retiring every time something bad happens.</em>' }],
    rule: '<em>Think of/about</em> = consider (action, continuous); <em>think</em> = believe (state, simple).'
  },

  /* ── C2 Gap fill: correct present form ── */
  c2_2: {
    q: 'My tutor ______ (see) me every Monday at two o\'clock.',
    a: 'sees',
    why: '<em>Every Monday</em> marks a fixed, repeated arrangement, so the present simple is used. The subject <em>my tutor</em> is third person singular, which adds <em>-s</em>.',
    wrong: [
      { opt: 'is seeing', why: 'The continuous would suggest a one-off meeting now or a temporary arrangement, which clashes with <em>every Monday</em>.' },
      { opt: 'see', why: 'The verb must agree with the singular subject <em>my tutor</em>, so it needs the <em>-s</em> ending.' }
    ],
    rule: 'Present simple for regular, timetabled events.'
  },
  c2_3a: {
    q: 'John ______ (not/study) hard at the moment.',
    a: "isn't studying",
    why: '<em>At the moment</em> limits this to a temporary period around now, so the present continuous is required. The negative is formed with <em>isn\'t</em> + <em>-ing</em>.',
    wrong: [
      { opt: "doesn't study", why: 'The present simple would mean he never studies hard as a general rule, losing the "just at the moment" meaning.' },
      { opt: "isn't study", why: 'The continuous always needs the <em>-ing</em> form after <em>is/isn\'t</em>.' }
    ],
    rule: '<em>at the moment / right now / currently</em> → present continuous.'
  },
  c2_3b: {
    q: "I ______ (not/think) he'll pass his exams.",
    a: "don't think",
    why: 'Here <em>think</em> means "believe" — an opinion, which is a state, not an action. State verbs take the present simple even when you are speaking now.',
    wrong: [
      { opt: "'m not thinking", why: '<em>Am thinking</em> means "am considering", an activity going on in your head. That is not the meaning here: you are stating an opinion you already hold.' },
      { opt: "not think", why: 'The negative present simple needs the auxiliary: <em>do not / don\'t</em> + base verb.' }
    ],
    rule: 'State verbs (think = believe, know, want, like) stay in the present simple.'
  },
  c2_4a: {
    q: "'What ______ (he/do)?'",
    a: 'is he doing',
    why: 'The reply describes an action in progress, so the question is present continuous. In questions the auxiliary comes before the subject: <em>is he doing</em>.',
    wrong: [
      { opt: 'does he do', why: 'This asks about a habit or a job ("What is his profession?"), which does not match the answer about fixing the aerial right now.' },
      { opt: 'he is doing', why: 'A direct question needs inversion — the auxiliary <em>is</em> must come before <em>he</em>.' }
    ],
    rule: 'Question form: auxiliary + subject + verb.'
  },
  c2_4b: {
    q: "'He ______ (try) to fix the television aerial.'",
    a: 'is trying',
    why: 'This is an action in progress at the moment of speaking, so the present continuous is correct. <em>\'s trying</em> is equally acceptable as the contracted form.',
    wrong: [
      { opt: 'tries', why: 'The present simple would mean he regularly attempts this, rather than being in the middle of it now.' },
      { opt: 'is try', why: 'After <em>is</em> the verb must take <em>-ing</em>.' }
    ],
    rule: 'Present continuous = happening at this moment.'
  },
  c2_5a: {
    q: 'Animals ______ (breathe in) oxygen …',
    a: 'breathe in',
    why: 'This is a scientific fact that is always true, so the present simple is used. <em>Animals</em> is plural, so there is no <em>-s</em>.',
    wrong: [
      { opt: 'are breathing in', why: 'The continuous would make it a temporary activity happening now, which contradicts a permanent scientific truth.' },
      { opt: 'breathes in', why: '<em>Animals</em> is plural, so the <em>-s</em> ending is wrong.' }
    ],
    rule: 'Present simple for facts and scientific truths.'
  },
  c2_5b: {
    q: '… and ______ (give out) carbon dioxide.',
    a: 'give out',
    why: 'The second verb shares the subject <em>animals</em> and describes the same permanent scientific fact, so it stays in the present simple plural form.',
    wrong: [
      { opt: 'are giving out', why: 'Mixing a continuous into a factual statement breaks the parallel with <em>breathe in</em> and wrongly suggests a temporary process.' },
      { opt: 'gives out', why: 'The subject is still the plural <em>animals</em>, so no <em>-s</em>.' }
    ],
    rule: 'Keep parallel verbs in the same tense.'
  },
  c2_6: {
    q: 'Be quiet! I ______ (want) to hear the news.',
    a: 'want',
    why: '<em>Want</em> is a state verb describing a feeling, so it is not used in the continuous, even though the desire applies to this very moment.',
    wrong: [
      { opt: "'m wanting", why: '<em>Want</em> belongs to the feelings group of state verbs and is not normally used in the continuous form in standard English.' },
      { opt: 'wants', why: 'The subject is <em>I</em>, so the base form is needed without <em>-s</em>.' }
    ],
    rule: 'State verbs of feeling: want, like, love, hate, prefer → present simple.'
  },
  c2_7: {
    q: 'In my country we ______ (drive) on the right-hand side of the road.',
    a: 'drive',
    why: 'This is a permanent fact about the country, so it takes the present simple. <em>We</em> takes the base form.',
    wrong: [
      { opt: 'are driving', why: 'The continuous would describe what people happen to be doing at this moment, not a permanent national rule.' },
      { opt: 'drives', why: '<em>We</em> is plural, so the <em>-s</em> ending does not apply.' }
    ],
    rule: 'Present simple for permanent situations and general rules.'
  },
  c2_8: {
    q: "My friend Joe's parents ______ (travel) round the world this summer.",
    a: 'are travelling',
    why: '<em>This summer</em> marks a temporary period around now, so the present continuous is correct. British spelling doubles the <em>l</em> in <em>travelling</em>; the American <em>traveling</em> is also accepted.',
    wrong: [
      { opt: 'travel', why: 'The present simple would mean they do this every summer as a routine, which loses the "just this summer" meaning.' },
      { opt: 'travels', why: '<em>Parents</em> is plural, and the sentence needs the continuous anyway.' }
    ],
    rule: 'this week / this summer / this year → present continuous for a temporary period.'
  },
  c2_9: {
    q: 'The college ______ (run) the same course every year.',
    a: 'runs',
    why: '<em>Every year</em> marks a repeated event, so the present simple is used. <em>The college</em> is singular, so the verb takes <em>-s</em>.',
    wrong: [
      { opt: 'is running', why: 'The continuous would suggest the course is running just at the moment, contradicting <em>every year</em>.' },
      { opt: 'run', why: '<em>The college</em> is a singular subject here, so <em>runs</em> is needed.' }
    ],
    rule: 'Repeated events with every + time → present simple.'
  },
  c2_10: {
    q: 'Numbers of wild butterflies ______ (fall) as a result of changes in farming methods.',
    a: 'are falling',
    why: 'This describes a trend — a situation that is changing over time — which is a standard use of the present continuous. It is also very common in IELTS Writing Task 1.',
    wrong: [
      { opt: 'fall', why: 'The present simple would state it as a permanent fact rather than an ongoing change, losing the sense of a developing trend.' },
      { opt: 'falls', why: '<em>Numbers</em> is plural, so the verb must be plural: <em>are falling</em>.' }
    ],
    rule: 'Present continuous for trends: rising, falling, increasing, improving.'
  },

  /* ── C3 Word-box gap fill (energy passage) ── */
  c3_1: {
    q: 'We ______ energy for three main things: electricity production, heating and transport.',
    a: 'use',
    why: 'This is a general, permanent fact about how energy is consumed, so the present simple is used. <em>We</em> takes the base form.',
    wrong: [
      { opt: 'are using', why: 'The continuous would restrict the statement to what is happening at this moment, but the sentence introduces a permanent, general truth.' },
      { opt: 'uses', why: 'The subject <em>we</em> is plural, so no <em>-s</em>.' }
    ],
    rule: 'Present simple for facts that are generally true.'
  },
  c3_2: {
    q: 'For the first two, we ______ options such as solar and wind power, or natural gas.',
    a: 'have',
    why: '<em>Have</em> here means "possess / there exist", which is a state, so it takes the present simple and is not used in the continuous.',
    wrong: [
      { opt: 'are having', why: '<em>Have</em> meaning possession is a state verb. The continuous is only possible when <em>have</em> means an action, as in <em>having lunch</em>.' },
      { opt: 'has', why: 'The subject <em>we</em> requires <em>have</em>, not <em>has</em>.' }
    ],
    rule: '<em>Have</em> = possess → state verb → present simple.'
  },
  c3_3: {
    q: 'In China, domestic energy consumption ______ year by year.',
    a: 'is going up',
    why: 'This is a changing situation measured over time, so the present continuous expresses the trend. <em>Goes up</em> is also accepted, since <em>year by year</em> can be read as a regular pattern.',
    wrong: [
      { opt: 'is gone up', why: 'This is not a valid form: the continuous needs <em>going</em>, and <em>gone up</em> belongs to the perfect tenses.' },
      { opt: 'go up', why: '<em>Consumption</em> is an uncountable singular noun, so a plural verb is wrong.' }
    ],
    rule: 'Present continuous for trends; present simple if you treat it as a regular pattern.'
  },
  c3_4: {
    q: 'Demand in similar regions ______ fast.',
    a: 'is catching up',
    why: 'The present continuous shows a change still in progress, and <em>fast</em> describes the speed of that ongoing change.',
    wrong: [
      { opt: 'catches up', why: 'The present simple would present this as a routine or completed fact rather than a development currently under way.' },
      { opt: 'are catching up', why: '<em>Demand</em> is singular, so the auxiliary must be <em>is</em>.' }
    ],
    rule: 'Trends in progress take the present continuous.'
  },
  c3_5: {
    q: 'We ______ how to use energy more efficiently now than in the past.',
    a: 'know',
    why: '<em>Know</em> is a state verb describing knowledge, so it stays in the present simple even with <em>now</em> in the sentence.',
    wrong: [
      { opt: 'are knowing', why: '<em>Know</em> is one of the clearest state verbs and is not used in the continuous in standard English.' },
      { opt: 'knows', why: 'The plural subject <em>we</em> takes the base form.' }
    ],
    rule: 'Thought verbs (know, believe, understand) never take the continuous.'
  },
  c3_6: {
    q: 'The worldwide rise in demand ______ concern amongst experts.',
    a: 'causes',
    why: 'The present simple states this as a general fact, and the singular subject <em>the rise</em> needs the <em>-s</em> ending. <em>Is causing</em> is also acceptable if you read it as an ongoing development.',
    wrong: [
      { opt: 'cause', why: 'The head noun is the singular <em>rise</em>, not <em>demand</em> or <em>experts</em>, so the verb must be singular.' },
      { opt: 'are causing', why: 'The subject is singular, so the auxiliary would have to be <em>is</em>, not <em>are</em>.' }
    ],
    rule: 'Agree with the head noun of the subject, not the nearest noun.'
  },
  c3_7: {
    q: 'Some experts ______ that oil supplies will start to fall within the next twenty years.',
    a: 'think',
    why: '<em>Think</em> here means "believe" — an opinion, which is a state — so it takes the present simple. The plural subject <em>experts</em> takes the base form.',
    wrong: [
      { opt: 'are thinking', why: '<em>Are thinking</em> means "are considering". Stating what experts believe calls for the simple form.' },
      { opt: 'thinks', why: '<em>Experts</em> is plural, so no <em>-s</em> on the verb.' }
    ],
    rule: '<em>think</em> = believe → state verb → present simple.'
  },
  c3_8: {
    q: 'Most experts ______ that we need to find a new source of energy soon.',
    a: 'agree',
    why: '<em>Agree</em> is a state verb expressing a shared opinion, so the present simple is used. <em>Most experts</em> is plural and takes the base form.',
    wrong: [
      { opt: 'are agreeing', why: '<em>Agree</em> describes a mental state rather than an activity in progress, so the continuous is not used here.' },
      { opt: 'agrees', why: 'The subject <em>most experts</em> is plural.' }
    ],
    rule: 'Verbs of opinion (agree, disagree, suppose) are state verbs.'
  },

  /* ── C4 Find and correct the incorrect verbs ── */
  c4_1: {
    q: 'From the graphs, we <s>are seeing</s> that … → correct form?',
    a: 'can see',
    why: '<em>See</em> is a state verb of perception, so it is not used in the continuous. With senses, English uses <em>can</em>: <em>we can see</em>. This is the standard phrasing for describing a graph in IELTS Writing Task 1.',
    wrong: [
      { opt: 'are seeing', why: '<em>See</em> as a sense verb cannot take the continuous. (<em>Be seeing</em> only works with a different meaning, such as meeting someone.)' },
      { opt: 'see', why: 'Grammatically possible, but with sense verbs English strongly prefers <em>can see</em> when describing what is visible.' }
    ],
    rule: 'Sense verbs: <em>can see / can hear / can smell</em>, not the continuous.'
  },
  c4_2: {
    q: 'The number of employees … <s>are increasing</s> each year → correct form?',
    a: 'increases',
    why: 'Two problems are fixed at once. The subject is <em>the number</em>, which is singular, so the verb must be singular; and <em>each year</em> marks a regular, repeated pattern, so the present simple is correct.',
    wrong: [
      { opt: 'are increasing', why: 'The plural <em>are</em> agrees with <em>employees</em> instead of the real head noun <em>the number</em>, and the continuous clashes with <em>each year</em>.' },
      { opt: 'is increasing', why: 'This fixes the agreement but keeps the continuous, which does not fit the repeated pattern signalled by <em>each year</em>.' }
    ],
    rule: '<em>The number of</em> + plural noun takes a singular verb.'
  },
  c4_3: {
    q: '… and the number of employees leaving after less than five years <s>decreases</s> → correct form?',
    a: 'decreases',
    why: 'This one is already correct — it is the control item in the exercise. The singular subject <em>the number</em> takes <em>decreases</em>, and the present simple matches the factual description of the graph.',
    wrong: [
      { opt: 'is decreasing', why: 'Changing it to the continuous would break the parallel with <em>increases</em> in the same sentence and add a "right now" meaning the graph does not carry.' },
      { opt: 'decrease', why: 'The head noun is the singular <em>the number</em>, so the plural form would be wrong.' }
    ],
    rule: 'Not every marked verb in a correction task is wrong — check before changing.'
  },
  c4_4: {
    q: 'The sun heats the ground. This <s>is warming</s> the air nearby → correct form?',
    a: 'warms',
    why: 'The passage describes a scientific process that is always true, so the present simple is used throughout. It must also stay parallel with <em>heats</em> in the previous sentence.',
    wrong: [
      { opt: 'is warming', why: 'The continuous makes it a temporary event happening now, but cloud formation is a permanent natural process.' },
      { opt: 'warm', why: 'The subject <em>this</em> is singular, so the verb needs <em>-s</em>.' }
    ],
    rule: 'Describing a process or cycle → present simple throughout.'
  },
  c4_5: {
    q: '… and the warm air <s>is rising</s> into the sky → correct form?',
    a: 'rises',
    why: 'The same rule applies: this is a permanent step in a natural process, so the present simple is used, and the singular subject <em>the warm air</em> takes <em>-s</em>.',
    wrong: [
      { opt: 'is rising', why: 'The continuous would suit a trend in a specific dataset, but here it describes what always happens in nature.' },
      { opt: 'rise', why: '<em>The warm air</em> is singular, so the <em>-s</em> ending is required.' }
    ],
    rule: 'Keep every verb in a process description in the same simple tense.'
  },
  c4_6: {
    q: '… the water vapour inside it <s>change</s> into droplets of water → correct form?',
    a: 'changes',
    why: 'The tense was already right; only the agreement was wrong. <em>Water vapour</em> is an uncountable singular noun, so the verb takes <em>-s</em>.',
    wrong: [
      { opt: 'change', why: 'The plural form does not agree with the uncountable singular subject <em>water vapour</em>.' },
      { opt: 'is changing', why: 'The continuous would break the pattern of the process description, which is entirely in the present simple.' }
    ],
    rule: 'Uncountable nouns (water, vapour, information) take singular verbs.'
  },

  /* ── D Q1–3 Multiple choice (Track 03) ── */
  dq1: {
    q: 'How long is the heated pool?',
    a: 'A — 15 metres',
    why: 'The speaker gives 15 metres as the length of the heated pool. The other numbers are mentioned in the recording but belong to different pools or facilities.',
    wrong: [
      { opt: 'B — 25 metres', why: 'This figure appears in the recording but refers to a different pool, not the heated one. Always match the number to the exact thing asked about.' },
      { opt: 'C — 50 metres', why: 'Another distractor number from the same passage. Multiple-choice questions in IELTS deliberately mention every option.' }
    ],
    rule: 'Listen for which facility each number belongs to, not just the number.'
  },
  dq2: {
    q: 'Which of these is free for all members?',
    a: 'A — the beginners swimming class',
    why: 'The beginners swimming class is the one included in membership at no extra cost. The other two are mentioned but carry a charge or a condition.',
    wrong: [
      { opt: 'B — the training session', why: 'This is mentioned but is not free for everyone, so it does not answer "free for all members".' },
      { opt: 'C — the keep-fit class', why: 'Also mentioned, but with a cost or restriction attached. The key words in the question are <em>free</em> and <em>all</em>.' }
    ],
    rule: 'Underline the qualifying words (free, all, only) before you listen.'
  },
  dq3: {
    q: 'Which of these does the woman need to book?',
    a: 'C — sauna',
    why: 'The sauna is the one facility that has to be booked in advance. This is confirmed in the Grammar Focus Task, where the speaker says they do not require anyone to book the lanes or the gym equipment.',
    wrong: [
      { opt: 'A — swimming lanes', why: 'Explicitly stated as not needing a booking: <em>We don\'t actually allow anyone to book the swimming lanes.</em>' },
      { opt: 'B — gym equipment', why: 'Covered by the same statement — no booking is required for the gym equipment either.' }
    ],
    rule: 'Negatives matter: "we don\'t require booking" eliminates an option.'
  },

  /* ── D Q4–10 Note completion ── */
  dn4a: {
    q: 'Yoga classes: held on Monday, ______ and … mornings',
    a: 'Tuesday',
    why: 'The speaker lists the morning class days as Monday, Tuesday and Friday. Monday is already printed, so the first gap takes Tuesday.',
    wrong: [
      { opt: 'Monday', why: 'Already printed in the notes. IELTS never expects you to repeat a word that is already given.' },
      { opt: 'Thursday', why: 'A plausible-sounding day that is not in the list. Write only the days you actually hear.' }
    ],
    rule: 'Days and months are proper nouns — always capitalise them.'
  },
  dn4b: {
    q: 'Yoga classes: held on Monday, Tuesday and ______ mornings',
    a: 'Friday',
    why: 'Friday is the third day in the list of morning classes, following Monday and Tuesday.',
    wrong: [
      { opt: 'Saturday', why: 'The weekend is covered by the next line about evening classes, so it is not part of the mornings list.' },
      { opt: 'Wednesday', why: 'Not mentioned among the class days. Listen for the exact sequence rather than assuming consecutive days.' }
    ],
    rule: 'Track the order of a spoken list — it usually matches the gaps.'
  },
  dn5a: {
    q: 'Weekend evenings from ______ to …',
    a: '6.00',
    why: 'The evening classes start at six o\'clock. A number answer is acceptable in several formats — <em>6.00</em>, <em>6:00</em>, <em>six</em> and <em>6.00 pm</em> are all marked correct.',
    wrong: [
      { opt: '7.30', why: 'That is the finishing time, so it belongs in the second gap. Start and end times are easy to swap under pressure.' },
      { opt: '6.30', why: 'A near-miss on the minutes. Half-hour times are common distractors, so listen carefully past the hour.' }
    ],
    rule: 'Numbers count as one word — a time never breaks the word limit.'
  },
  dn5b: {
    q: 'Weekend evenings from 6.00 to ______',
    a: '7.30',
    why: 'The classes finish at half past seven. <em>7:30</em>, <em>seven thirty</em> and <em>7.30 pm</em> are also accepted.',
    wrong: [
      { opt: '6.00', why: 'That is the start time from the previous gap.' },
      { opt: '7.00', why: 'Missing the <em>thirty</em>. Write the full time, including the minutes.' }
    ],
    rule: 'Copy the time format used in the notes where one is shown.'
  },
  dn6: {
    q: 'Attend ______ per week',
    a: 'one day',
    why: 'Members are expected to attend one day per week. <em>1 day</em> and <em>once</em> are also accepted, as all three stay within the three-word limit.',
    wrong: [
      { opt: 'one day a week', why: 'The phrase <em>per week</em> is already printed after the gap, so repeating it makes the sentence ungrammatical.' },
      { opt: 'two days', why: 'The wrong quantity. Numbers of sessions are a standard distractor in note completion.' }
    ],
    rule: 'Read the words around the gap so your answer fits grammatically.'
  },
  dn7: {
    q: 'See instructor to change ______',
    a: 'level',
    why: 'Students should speak to the instructor if they want to change level. <em>levels</em>, <em>class</em> and <em>classes</em> are also accepted here.',
    wrong: [
      { opt: 'instructor', why: 'The word <em>instructor</em> is already printed in the line, so it cannot also be the answer.' },
      { opt: 'time', why: 'Plausible in a class context, but the recording is about moving between ability levels.' }
    ],
    rule: 'The answer is never a word already printed in the notes.'
  },
  dn8: {
    q: 'Meet John ______ (surname)',
    a: 'Doherty',
    why: 'The surname is Doherty. Names in IELTS Listening are almost always spelled out by the speaker, so write the letters exactly as you hear them.',
    wrong: [
      { opt: 'Dougherty', why: 'A common alternative spelling of the same name. Spelling is marked, so follow the letters given in the recording.' },
      { opt: 'John', why: 'The first name is already printed; the gap asks specifically for the surname.' }
    ],
    rule: 'Spell names exactly as dictated — a spelling error loses the mark.'
  },
  dn9: {
    q: 'Meet at ______ tomorrow',
    a: '11.00',
    why: 'The meeting is arranged for eleven o\'clock. <em>11:00</em>, <em>eleven</em> and <em>11.00 am</em> are all accepted.',
    wrong: [
      { opt: '11.30', why: 'A half-hour distractor. Listen for whether any minutes follow the hour.' },
      { opt: '1.00', why: 'Easily confused with eleven when listening quickly. Numbers such as 11 and 1, or 13 and 30, are deliberate traps.' }
    ],
    rule: 'Check whether am or pm is needed — here the notes already imply morning.'
  },
  dn10: {
    q: 'Tel: ______',
    a: '0117 965 478',
    why: 'Phone numbers are read out in groups, and you write the digits exactly as heard. The whole number counts as a single number answer, so the word limit is not a problem.',
    wrong: [
      { opt: '0117 965 487', why: 'The last two digits are transposed. Long digit strings are easy to reverse, so check them back if you have time.' },
      { opt: '117 965 478', why: 'The leading zero has been dropped. Every digit you hear must appear in the answer.' }
    ],
    rule: 'In British English <em>0</em> is usually said "oh", and a repeated digit may be said as "double".'
  },

  /* ── Grammar Focus Task ── */
  gft1: {
    q: 'I _______ to do some sports activities.',
    a: 'want',
    why: '<em>Want</em> is a state verb expressing a feeling, so it takes the present simple even though the speaker is talking about right now.',
    wrong: [{ opt: "I'm wanting", why: '<em>Want</em> is not used in the continuous in standard English. It describes a state of mind, not an activity in progress.' }],
    rule: 'State verbs of feeling stay simple: want, like, love, prefer, need.'
  },
  gft2: {
    q: 'Our tennis team _______ for new people.',
    a: 'are always looking',
    why: '<em>Always</em> + present continuous emphasises that this happens repeatedly and is an ongoing characteristic of the team. It is warmer and more emphatic than the plain present simple.',
    wrong: [{ opt: 'always look', why: 'Grammatically correct, but it states a flat habit. The speaker wants the emphatic "we are constantly on the lookout" meaning, which needs the continuous.' }],
    rule: '<em>always</em> + continuous adds emphasis, criticism or envy.'
  },
  gft3: {
    q: '_______ to pay to use the pools?',
    a: 'Do members have to',
    why: '<em>Have to</em> expresses obligation, which is a state, so the question is formed with <em>do</em> + subject + <em>have to</em>.',
    wrong: [{ opt: 'Are members having to', why: '<em>Have to</em> for obligation is not normally used in the continuous. The continuous <em>have</em> only works when it means an action, such as <em>having lunch</em>.' }],
    rule: 'Obligation with <em>have to</em> takes the present simple.'
  },
  gft4: {
    q: 'We _______ anyone to book the swimming lanes or the gym equipment.',
    a: "don't actually allow",
    why: 'This is a permanent policy of the sports centre, not something temporarily in force, so the present simple negative is correct.',
    wrong: [{ opt: "We're not actually allowing", why: 'The continuous would suggest a temporary rule that applies only at the moment, but this is the centre\'s standing policy.' }],
    rule: 'Rules and policies are permanent → present simple.'
  },
  gft5: {
    q: 'What time _______ you?',
    a: 'suits',
    why: '<em>Suit</em> is a state verb of description, so it takes the present simple. <em>What time</em> is the subject here, so the verb carries the singular <em>-s</em>.',
    wrong: [{ opt: 'is suiting', why: '<em>Suit</em> describes a fixed relationship between a time and a person, not an action in progress, so it is not used in the continuous.' }],
    rule: 'Description verbs (suit, seem, resemble, contain) are state verbs.'
  },
  gft6: {
    q: "Great, well, I _______ that's everything.",
    a: 'think',
    why: 'Here <em>think</em> means "believe", so it is a state verb and takes the present simple. The speaker is stating a conclusion, not describing mental activity.',
    wrong: [{ opt: "I'm thinking", why: '<em>I\'m thinking</em> means "I am in the middle of considering something". That does not fit a closing remark that sums up the conversation.' }],
    rule: '<em>think</em> = believe (simple); <em>think about</em> = consider (continuous).'
  }
};
