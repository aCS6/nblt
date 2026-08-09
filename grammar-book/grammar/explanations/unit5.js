/* Unit 5 — Future 1: explanations
   window.__EXPL[<data-id>] = { q, a, why, wrong:[{opt,why}], rule? }
   Rendered by initExplanations() in scripts/utils.js. */
window.__EXPL = {

  /* ── A1 Pre-listening ── */
  u5a1_1: {
    q: 'Which sport does the team play?',
    a: 'hockey',
    why: 'The picture shows players with hockey sticks, and Tim talks throughout about a hockey team and its matches. Only the sport itself is wanted, so one word is enough.',
    wrong: [
      { opt: 'football', why: 'The usual first guess for a team sport, but the equipment in the picture is a stick and a small hard ball, not a football.' },
      { opt: 'hockey team', why: '<em>Team</em> is already in the question, so adding it wastes a word without adding information.' }
    ],
    rule: 'Pre-listening pictures set up the topic — name exactly what is asked for.'
  },
  u5a1_2: {
    q: 'Which two countries will they visit?',
    a: 'Scotland and Greece',
    why: 'The tour has two legs: Scotland first, then Greece. Either order is marked correct, so <em>Greece and Scotland</em> is equally acceptable.',
    wrong: [
      { opt: 'Scotland and Ireland', why: 'Ireland is never mentioned. It is tempting because it sits beside Scotland, but the second destination is in the Mediterranean.' },
      { opt: 'Athens and Scotland', why: 'Athens is a city, not a country. The question asks for two countries, so the country name Greece is needed.' }
    ],
    rule: 'Country, city and region are not interchangeable — answer the noun in the question.'
  },

  /* ── A2 Table completion (Track 08) ── */
  u5a2_1: {
    q: 'Table row 1 — Country',
    a: 'Scotland',
    why: 'The first leg of the tour is Scotland, and the rest of that row (mountain lodge, lots of walking) confirms it. The table follows the order in which the two countries are discussed.',
    wrong: [
      { opt: 'Greece', why: 'Greece is the second destination and belongs in row 2, where the plans are a hotel and a boat trip to the islands.' },
      { opt: 'England', why: 'Never mentioned. Flying to Scotland may suggest a long journey from England, but the recording only names the two tour countries.' }
    ],
    rule: 'Table rows normally follow the order of the recording — work down, not around.'
  },
  u5a2_2: {
    q: 'Scotland — Number of matches',
    a: 'four',
    why: 'They are playing four matches in Scotland. The instructions allow a number, so <em>4</em> is accepted too.',
    wrong: [
      { opt: 'three', why: 'Three is the number of free days in Scotland — and the number of matches in Greece. Both figures come up close together, so tie each one to its own column.' },
      { opt: 'seven', why: 'The total for the whole tour. Adding the two countries together is a standard trap when similar sets of numbers are given.' }
    ],
    rule: 'When two rows share the same figures, match each number to its own column.'
  },
  u5a2_3: {
    q: 'Scotland — Number of free days',
    a: 'three',
    why: 'Scotland gives them three free days alongside the four matches. <em>3</em> is also accepted as a number answer.',
    wrong: [
      { opt: 'four', why: 'Four is the number of matches in Scotland. The two figures are simply reversed in the Greece row, which makes them easy to swap.' },
      { opt: 'none', why: 'They clearly do have free time in Scotland: they plan to hire a bus, drive through the mountains and do lots of walking.' }
    ],
    rule: 'Matches and free days are separate columns — one figure cannot serve both.'
  },
  u5a2_4: {
    q: 'Scotland — Accommodation: stay in a ______',
    a: 'mountain lodge',
    why: 'Tim says they will probably stay in some sort of mountain lodge. The words <em>stay in a</em> are already printed, so only the two-word noun phrase goes in the gap.',
    wrong: [
      { opt: 'small hotel', why: 'The small hotel is the accommodation in Greece, in the row below.' },
      { opt: 'in a mountain lodge', why: '<em>stay in a</em> is already printed before the gap, so this would produce <s>stay in a in a mountain lodge</s>.' }
    ],
    rule: 'Never repeat words that are already printed around the gap.'
  },
  u5a2_5: {
    q: 'Table row 2 — Country',
    a: 'Greece',
    why: 'The second leg of the tour is Greece — Tim mentions Athens, the heat, the hotel and a boat trip to the islands, all of which fill this row.',
    wrong: [
      { opt: 'Scotland', why: 'Scotland is row 1. The details in row 2 (islands, a small hotel) belong to the Mediterranean part of the trip.' },
      { opt: 'Athens', why: 'Athens is the city they stay in, but the column heading asks for the country.' }
    ],
    rule: 'Check the column heading before you write — it tells you what kind of answer is wanted.'
  },
  u5a2_6: {
    q: 'Greece — Number of matches',
    a: 'three',
    why: 'There are three matches in Greece, one fewer than in Scotland. <em>3</em> is also accepted.',
    wrong: [
      { opt: 'four', why: 'Four is the number of free days in Greece, and the number of matches in Scotland — this is exactly where the two rows cross over.' },
      { opt: 'two', why: 'Not a figure given for either country. Small numbers are easy to mishear, so listen for the whole phrase, not just the digit.' }
    ],
    rule: 'The second row often reverses the first — never assume the pattern repeats.'
  },
  u5a2_7: {
    q: 'Greece — Number of free days',
    a: 'four',
    why: 'Greece has four free days, which is why they have time for a boat trip to the islands. <em>4</em> is also accepted.',
    wrong: [
      { opt: 'three', why: 'Three is the number of matches in Greece, and the free days in Scotland. The columns are mirrored between the two rows.' },
      { opt: 'one', why: 'Too few for the plans described — several islands are mentioned, which needs more than a single free day.' }
    ],
    rule: 'Use the surrounding information to sanity-check a number before you commit to it.'
  },
  u5a2_8: {
    q: 'Greece — Accommodation: stay in a ______',
    a: 'small hotel',
    why: 'In Greece the team stays in a small hotel, unlike the mountain lodge in Scotland. The key is generous here: <em>a small hotel</em>, <em>a hotel</em> and <em>hotel</em> are all accepted as well.',
    wrong: [
      { opt: 'mountain lodge', why: 'That is the Scottish accommodation from the row above, and it is described as the less comfortable of the two.' },
      { opt: 'a small hotel in Athens', why: 'Over the stated limit of two words or a number. Extra detail that is not asked for can cost you the mark.' }
    ],
    rule: 'Stay inside the word limit — count the words before you move on.'
  },
  u5a2_9: {
    q: 'Greece — Other plans: visit some ______',
    a: 'islands',
    why: 'They are going to get a boat to a couple of the islands. <em>Some</em> is already printed, so the answer must be the plural noun <em>islands</em>.',
    wrong: [
      { opt: 'island', why: 'After <em>some</em> a countable noun must be plural, and the recording mentions more than one island.' },
      { opt: 'beaches', why: 'Plausible for a Greek trip, but it is not what is said. Write what you hear rather than what the topic suggests.' }
    ],
    rule: 'Make the answer fit the printed grammar — <em>some</em> needs a plural or uncountable noun.'
  },

  /* ── A3 Who says it? A / B / C ── */
  u5a3_1: {
    q: 'We are travelling to Scotland by plane.',
    a: 'A — Tim makes this statement',
    why: 'Tim is the coach and he is the one who explains the travel arrangements. The present continuous <em>we are travelling</em> shows it is a definite, booked arrangement, which is exactly the kind of information the organiser gives.',
    wrong: [
      { opt: 'B — Amanda makes this statement', why: 'Amanda is a player asking about the trip; she receives this information rather than giving it.' },
      { opt: 'C — both Tim and Amanda make this statement', why: 'Only one speaker states the travel arrangement. Choose C only when the same idea genuinely comes from both.' }
    ],
    rule: 'Present continuous for travel already booked: <em>We are flying on Monday.</em>'
  },
  u5a3_2: {
    q: 'We will have fun even if the weather is bad.',
    a: 'B — Amanda makes this statement',
    why: 'Amanda is the optimistic voice: she says she is sure they will enjoy it whatever the weather. <em>Will</em> here is a prediction based on her own opinion, not on any arrangement.',
    wrong: [
      { opt: 'A — Tim makes this statement', why: 'Tim raises the weather as a practical worry about Scotland; the cheerful response comes from Amanda.' },
      { opt: 'C — both Tim and Amanda make this statement', why: 'The two speakers react differently to the weather, so this idea is not shared.' }
    ],
    rule: '<em>will</em> after <em>I\'m sure / I think</em> = a personal prediction.'
  },
  u5a3_3: {
    q: 'The team will be pleased with the accommodation in Athens.',
    a: 'A — Tim makes this statement',
    why: 'Tim knows the hotel bookings and predicts how the team will react to them. <em>Will</em> is used because this is his opinion about a future reaction, not something arranged.',
    wrong: [
      { opt: 'B — Amanda makes this statement', why: 'Amanda has not seen the accommodation; she is being told about it.' },
      { opt: 'C — both Tim and Amanda make this statement', why: 'Only the coach comments on how the team will feel about where they are staying.' }
    ],
    rule: 'Predictions about other people\'s reactions take <em>will</em>.'
  },
  u5a3_4: {
    q: 'The two countries are going to provide very different experiences.',
    a: 'C — both Tim and Amanda make this statement',
    why: 'Both speakers reach the same conclusion from the plans they have just discussed — cold mountains in Scotland, heat and islands in Greece. <em>Going to</em> is used because the prediction rests on present evidence they can both see.',
    wrong: [
      { opt: 'A — Tim makes this statement', why: 'Tim does say it, but he is not the only one — Amanda voices the same idea, so A is incomplete.' },
      { opt: 'B — Amanda makes this statement', why: 'Amanda agrees that the trip will be varied, but Tim says it too, so B alone is not enough.' }
    ],
    rule: '<em>going to</em> for predictions based on evidence you already have.'
  },
  u5a3_5: {
    q: 'The team manager is holding a party on our return.',
    a: 'A — Tim makes this statement',
    why: 'Tim reports the manager\'s arrangement. The present continuous <em>is holding</em> shows the party is already organised, and the time reference comes from <em>on our return</em>.',
    wrong: [
      { opt: 'B — Amanda makes this statement', why: 'Amanda does not know about the party until Tim mentions it.' },
      { opt: 'C — both Tim and Amanda make this statement', why: 'Only Tim announces the party; Amanda simply reacts to the news.' }
    ],
    rule: 'A time expression makes a present continuous clearly future: <em>is holding a party when we get back</em>.'
  },

  /* ── A4 Analysis of the statements ── */
  u5a4_1: {
    q: 'Which tense is used in statements 1 and 5?',
    a: 'present continuous',
    why: 'Statement 1 has <em>are travelling</em> and statement 5 has <em>is holding</em> — in both, a form of <em>be</em> is followed by an <em>-ing</em> verb. A future time reference is either stated or understood, which is what makes them future rather than present.',
    wrong: [
      { opt: 'present simple', why: 'The present simple forms would be <em>travel</em> and <em>holds</em>; there is no <em>be</em> + <em>-ing</em> in that tense.' },
      { opt: 'future continuous', why: 'The future continuous is <em>will be travelling</em>. There is no <em>will</em> in either statement.' }
    ],
    rule: 'Present continuous = <em>am/is/are</em> + <em>-ing</em>, used here for fixed future arrangements.'
  },
  u5a4_2: {
    q: 'Which structure is used in statements 2 and 3 to refer to the future?',
    a: 'will',
    why: 'Both statements use <em>will</em> + base verb: <em>we will have fun</em> and <em>the team will be pleased</em>. Each expresses an opinion about the future rather than something arranged.',
    wrong: [
      { opt: 'going to', why: '<em>Going to</em> appears in statement 4, not in 2 and 3. It needs a form of <em>be</em> before it, which is missing here.' },
      { opt: 'present continuous', why: 'That is the structure of statements 1 and 5; statements 2 and 3 have no <em>-ing</em> verb.' }
    ],
    rule: '<em>will</em> + base form for predictions and non-personal future facts.'
  },
  u5a4_3: {
    q: 'Which structure is used in statement 4 to refer to the future?',
    a: 'going to',
    why: 'Statement 4 reads <em>are going to provide</em>: <em>be</em> + <em>going to</em> + base verb. It is a prediction the speakers make from the evidence of the plans they have just discussed.',
    wrong: [
      { opt: 'will', why: 'There is no <em>will</em> in statement 4. <em>Will</em> is the structure of statements 2 and 3.' },
      { opt: 'present continuous', why: '<em>Are going</em> looks like a present continuous, but here <em>going to</em> is a fixed future structure followed by a base verb, not a verb of movement.' }
    ],
    rule: '<em>be going to</em> + base verb — for intentions and evidence-based predictions.'
  },
  u5a4_4: {
    q: 'Which statements talk about a fixed arrangement?',
    a: 'sentences 1 and 5',
    why: 'The flight and the manager\'s party have both been organised in advance, which is why they take the present continuous. Writing just <em>1 and 5</em> is accepted too.',
    wrong: [
      { opt: '2 and 3', why: 'These are opinions about how the trip will feel. Nothing has been arranged about having fun or being pleased with a hotel.' },
      { opt: '1, 4 and 5', why: 'Statement 4 is a prediction with <em>going to</em>, not an arrangement — nobody has organised the two countries to be different.' }
    ],
    rule: 'Arranged and booked → present continuous.'
  },
  u5a4_5: {
    q: 'Which statements are predictions?',
    a: 'sentences 2, 3 and 4',
    why: 'Statements 2 and 3 predict with <em>will</em>, and statement 4 predicts with <em>going to</em>. The key accepts several ways of writing this, including <em>2-4</em> and <em>sentences 2-4</em>.',
    wrong: [
      { opt: '1 and 5', why: 'These are arrangements already in place, not guesses about what the future holds.' },
      { opt: '2 and 3', why: 'It leaves out statement 4, which is also a prediction — a prediction does not have to contain <em>will</em>.' }
    ],
    rule: 'Both <em>will</em> and <em>going to</em> can make predictions; the difference is the evidence behind them.'
  },

  /* ── C1 Model answer: phrases from the box ── */
  u5c1_1: {
    q: 'Let us consider the changes that ______ in the next 100 years.',
    a: 'are likely to occur',
    why: '<em>Be likely to</em> is a formal way of predicting, which suits an essay opening, and <em>occur</em> is the natural verb with <em>changes</em>. The plural subject <em>changes</em> needs <em>are</em>.',
    wrong: [
      { opt: 'will be', why: '<em>The changes that will be in the next 100 years</em> is incomplete — <em>be</em> needs something after it. You need a verb meaning "happen", and this phrase is needed at gap 2, where <em>for the better</em> completes it.' },
      { opt: 'is likely to occur', why: 'The subject is the plural <em>changes</em>, so the singular <em>is</em> does not agree.' }
    ],
    rule: 'Formal prediction: <em>be likely to</em> + base verb.'
  },
  u5c1_2: {
    q: 'I believe that not all changes ______ for the better.',
    a: 'will be',
    why: '<em>Will</em> is the standard neutral way of predicting, and <em>be</em> is what <em>for the better</em> attaches to. <em>I believe</em> in front of it already marks the sentence as an opinion.',
    wrong: [
      { opt: 'will develop', why: '<em>Develop for the better</em> reads awkwardly, and this phrase is needed at gap 12, where <em>links</em> gives it the object it wants.' },
      { opt: 'are going to be', why: 'Reasonable English in itself, but the task is to use the phrases in the box, and the box offers <em>will be</em>, not a <em>going to</em> version.' }
    ],
    rule: 'In a word-box task, only the listed phrases count — each is used once.'
  },
  u5c1_3: {
    q: 'In the future more and more people ______ from home.',
    a: 'are predicted to work',
    why: '<em>Be predicted to</em> reports what experts expect, which fits the essay register, and <em>work from home</em> is the fixed collocation. The plural subject <em>people</em> takes <em>are</em>.',
    wrong: [
      { opt: 'are likely to occur', why: '<em>Occur</em> means "happen"; people do not occur from home, and events cannot take the phrase <em>from home</em>.' },
      { opt: 'is predicted to work', why: '<em>People</em> is a plural noun, so the auxiliary must be <em>are</em>.' }
    ],
    rule: 'Impersonal predictions: <em>be predicted to</em>, <em>be estimated to</em>, <em>be expected to</em>.'
  },
  u5c1_4: {
    q: '… and so they ______ more isolated from their colleagues.',
    a: 'are going to feel',
    why: '<em>Feel</em> is the linking verb that takes the adjective <em>isolated</em>, and <em>going to</em> is right because the prediction follows directly from the evidence in the previous clause — the shift to home working.',
    wrong: [
      { opt: 'will find', why: '<em>Find</em> needs an object before an adjective (<em>find the job isolating</em>), so it cannot be followed straight by <em>more isolated</em>. It is needed at gap 10.' },
      { opt: 'is going to feel', why: 'The subject <em>they</em> is plural, so the auxiliary must be <em>are</em>.' }
    ],
    rule: '<em>going to</em> when the prediction follows from what you have just established.'
  },
  u5c1_5: {
    q: 'On the other hand, they ______ greater freedom to choose their working hours.',
    a: 'will certainly have',
    why: '<em>Have</em> is the verb that takes <em>greater freedom</em> as its object, and the adverb goes between <em>will</em> and the verb. Note that the key here expects the full model-answer phrase <em>will certainly have</em>, so keep <em>certainly</em> inside the gap.',
    wrong: [
      { opt: 'will find', why: 'This would mean the workers discover the freedom somewhere, rather than simply possessing it. It is also the phrase needed at gap 10.' },
      { opt: 'are certainly having', why: '<em>Have</em> meaning "possess" is a state verb and is not used in the continuous.' }
    ],
    rule: 'Adverbs of certainty sit between <em>will</em> and the main verb: <em>will certainly / undoubtedly / probably</em> + verb.'
  },
  u5c1_6: {
    q: 'A further possible change is that handwriting ______ obsolete.',
    a: 'is likely to become',
    why: '<em>Become</em> is the linking verb needed before the adjective <em>obsolete</em>, and <em>handwriting</em> is an uncountable singular noun, so the auxiliary is <em>is</em>.',
    wrong: [
      { opt: 'are likely to become', why: '<em>Handwriting</em> is uncountable and singular, so a plural auxiliary does not agree with it.' },
      { opt: 'is likely to occur', why: '<em>Occur</em> cannot be followed by an adjective. You need a linking verb such as <em>become</em> to introduce <em>obsolete</em>.' }
    ],
    rule: 'Uncountable nouns take singular verbs: <em>handwriting is</em>, <em>information is</em>.'
  },
  u5c1_7: {
    q: 'Without a doubt, even greater changes ______ in technology used in the workplace.',
    a: 'are going to happen',
    why: '<em>Happen</em> is the natural verb with <em>changes</em>, and <em>going to</em> makes it a confident prediction backed by what the writer has just described. The plural subject <em>changes</em> takes <em>are</em>.',
    wrong: [
      { opt: 'is going to happen', why: 'The subject is the plural <em>even greater changes</em>, so the auxiliary must be <em>are</em>.' },
      { opt: 'are going to feel', why: 'Changes cannot feel anything — <em>feel</em> needs an animate subject, and the phrase is needed at gap 4.' }
    ],
    rule: 'Find the head noun of the subject before choosing <em>is</em> or <em>are</em>.'
  },
  u5c1_8: {
    q: 'Computers ______ to grow even more powerful.',
    a: 'will undoubtedly continue',
    why: '<em>Continue</em> is the only verb in the box that takes the <em>to</em>-infinitive <em>to grow</em>. As at gap 5, the key expects the model answer complete with its adverb, so <em>undoubtedly</em> belongs inside the gap.',
    wrong: [
      { opt: 'will develop', why: '<em>Develop</em> is not followed by a <em>to</em>-infinitive in this way, and the phrase is needed at gap 12.' },
      { opt: 'are continuing', why: 'The present continuous describes what is happening now, but this paragraph predicts the next hundred years.' }
    ],
    rule: 'Let the words after the gap tell you the pattern: <em>continue to</em> + verb.'
  },
  u5c1_9: {
    q: '… and this ______ in an even faster pace of life than we have now.',
    a: 'will probably result',
    why: '<em>Result in</em> is the fixed phrase, and the preposition <em>in</em> is already printed after the gap. <em>Probably</em> softens the claim, which is good essay style — and, as at gaps 5 and 8, the key expects the adverb inside the gap alongside <em>will</em>.',
    wrong: [
      { opt: 'are likely to lead to', why: '<em>Lead to</em> already ends in its own preposition, so it would collide with the printed <em>in</em>; and the singular subject <em>this</em> needs <em>is</em>, not <em>are</em>.' },
      { opt: 'will probably results', why: 'After <em>will</em> the verb is always in the base form — no <em>-s</em>.' }
    ],
    rule: 'Check the preposition printed after the gap: <em>result in</em>, <em>lead to</em>.'
  },
  u5c1_10: {
    q: 'Let us hope that our employers ______ a way to reduce the stress on workers.',
    a: 'will find',
    why: '<em>Find a way</em> is the collocation the sentence needs, and <em>will</em> is the neutral prediction form after <em>let us hope that</em>.',
    wrong: [
      { opt: 'will be', why: '<em>Employers will be a way</em> makes no sense — <em>be</em> would equate the employers with the way itself.' },
      { opt: 'are likely to occur', why: '<em>Occur</em> is intransitive: it cannot take the object <em>a way</em>.' }
    ],
    rule: 'Transitive verbs need an object; intransitive verbs such as <em>occur</em> and <em>happen</em> cannot take one.'
  },
  u5c1_11: {
    q: 'I also think these improvements in technology ______ even more globalisation than now.',
    a: 'are likely to lead to',
    why: '<em>Lead to</em> takes a noun object, and <em>even more globalisation</em> is that object. The head noun of the subject is the plural <em>improvements</em>, so the auxiliary is <em>are</em>.',
    wrong: [
      { opt: 'are likely to lead', why: 'Without <em>to</em>, the noun phrase that follows has nothing to attach to. <em>Lead to</em> must be kept complete.' },
      { opt: 'is likely to lead to', why: 'The verb agrees with the head noun <em>improvements</em>, not with the nearer noun <em>technology</em>.' }
    ],
    rule: 'Agree with the head noun of the subject, not the nearest noun.'
  },
  u5c1_12: {
    q: '… and companies ______ very strong international links.',
    a: 'will develop',
    why: '<em>Develop links</em> is the natural collocation, and <em>will</em> keeps the prediction in the same neutral register as the rest of the paragraph.',
    wrong: [
      { opt: 'will be', why: 'Companies are not links, so <em>be</em> would create a false equation between the two.' },
      { opt: 'are likely to occur', why: '<em>Occur</em> takes no object, so it cannot be followed by <em>very strong international links</em>.' }
    ],
    rule: 'Vary your future forms across an essay — <em>will</em>, <em>going to</em> and <em>be likely to</em> all score.'
  },

  /* ── C2 Email: choose the better future form ── */
  u5c2_1: {
    q: 'Tomorrow ______ on a glass-bottomed boat to look at the wonderful sea life.',
    a: "we're going out",
    why: 'The writers say they have got lots of plans, and the boat trip is one of them, fixed for tomorrow. A definite arrangement with a future time expression takes the present continuous.',
    wrong: [
      { opt: 'we will go out', why: '<em>Will</em> suggests a decision taken at the moment of writing or an unarranged prediction, which contradicts the plans already made.' },
      { opt: 'we go out', why: 'The present simple with a future meaning is for timetables (trains, films, lessons), not for a personal outing.' }
    ],
    rule: 'Definite arrangement + future time expression → present continuous.'
  },
  u5c2_2: {
    q: 'On Wednesday we think ______ a tour of the old town.',
    a: "we'll take",
    why: '<em>We think</em> flags this as an opinion about the future rather than something booked. Words like <em>think</em>, <em>expect</em> and <em>probably</em> naturally introduce <em>will</em>.',
    wrong: [
      { opt: "we're taking", why: 'The present continuous claims a settled arrangement, which clashes with the hedging <em>we think</em>.' },
      { opt: 'we take', why: 'The present simple would describe a routine — as if they took the tour every Wednesday.' }
    ],
    rule: 'After a hedge like <em>we think</em> or <em>probably</em>, <em>will</em> or <em>going to</em> normally fits better than the present continuous.'
  },
  u5c2_3: {
    q: "Ollie's aunt lives quite close, so ______ her too if we have time.",
    a: "we're going to visit",
    why: '<em>If we have time</em> shows nothing has been fixed, but the writers have already formed the intention. That is exactly what <em>going to</em> expresses.',
    wrong: [
      { opt: "we're visiting", why: 'The present continuous would announce a definite arrangement, which the condition <em>if we have time</em> rules out.' },
      { opt: 'we visit', why: 'The present simple states a habit — something they do regularly — rather than a plan for this holiday.' }
    ],
    rule: '<em>going to</em> = intention already formed, arrangements not yet made.'
  },
  u5c2_4: {
    q: 'Tonight ______ an international evening, with lots of food from different countries.',
    a: "they're holding",
    why: 'The hotel has organised the event for tonight, so it is a definite arrangement made by somebody else — the standard use of the present continuous for the future.',
    wrong: [
      { opt: "they'll hold", why: '<em>Will</em> would present it as a prediction or a decision being taken now, but the evening is already on the hotel programme.' },
      { opt: 'they hold', why: 'The present simple would mean the hotel does this regularly; the sentence is about tonight in particular.' }
    ],
    rule: 'Events already on someone\'s programme take the present continuous.'
  },
  u5c2_5: {
    q: '… but ______ as long as us.',
    a: "they aren't staying",
    why: 'John and Wendy have booked their holiday, so the length of their stay is already fixed. The negative of the present continuous is <em>aren\'t</em> + <em>-ing</em>.',
    wrong: [
      { opt: "they won't stay", why: '<em>Won\'t</em> reads as a prediction or even a refusal, but the departure date is already settled by their booking.' },
      { opt: "they don't stay", why: 'The present simple negative describes a general habit, as if they never stayed as long as anyone else.' }
    ],
    rule: 'Booked dates are arrangements: <em>we\'re leaving on Friday</em>, <em>they aren\'t staying</em>.'
  },
  u5c2_6: {
    q: '… so ______ the really touristy things with them, and be lazy in our second week.',
    a: "we'll probably do",
    why: '<em>Probably</em> signals that this is an expectation rather than a plan, and <em>will</em> is the form that carries that uncertainty.',
    wrong: [
      { opt: "we're probably doing", why: 'The present continuous asserts a definite arrangement, which sits awkwardly with the hedge <em>probably</em>.' },
      { opt: 'we probably do', why: 'The present simple would turn it into a habit rather than a plan for the coming days.' }
    ],
    rule: '<em>probably</em>, <em>perhaps</em>, <em>I expect</em> → <em>will</em>.'
  },
  u5c2_7: {
    q: 'You can hire small sailing boats for the day, so we think ______ that next week.',
    a: "we're going to do",
    why: 'They have decided they want to hire a boat but have not booked one, so the intention is real and the arrangement is not. That is the core meaning of <em>going to</em>.',
    wrong: [
      { opt: "we're doing", why: 'The present continuous would claim the boat is already booked, but the sentence only says you <em>can</em> hire one.' },
      { opt: 'we do', why: 'The present simple has no future meaning here; it would describe something they do as a matter of routine.' }
    ],
    rule: '<em>going to</em> for intentions; present continuous only once it is arranged.'
  },
  u5c2_8: {
    q: '… and ______ to have time to do some shopping!',
    a: "we're also going to try",
    why: 'This is another intention for next week, parallel with the boat hire in the previous clause, so it keeps the same <em>going to</em> form.',
    wrong: [
      { opt: "we're also trying", why: 'The present continuous here reads as something happening now, or as a fixed arrangement — neither fits a plan for next week.' },
      { opt: 'we also try', why: 'The present simple describes what they usually do, losing the reference to the coming week.' }
    ],
    rule: 'Keep parallel plans in the same future form.'
  },
  u5c2_9: {
    q: 'I hope you are ready for your big trip. ______ Australia.',
    a: "You'll love",
    why: 'This is a personal prediction based on the writer\'s opinion, so <em>will</em> is used. <em>Love</em> is also a state verb, which rules out the continuous.',
    wrong: [
      { opt: "You're loving", why: '<em>Love</em> describes a feeling, not an activity, so it is not normally used in the continuous — and a feeling cannot be arranged in advance.' },
      { opt: 'You love', why: 'The present simple would state a fact about now, but the friends have not been to Australia yet.' }
    ],
    rule: 'Predictions about how someone will feel: <em>will</em> + a state verb.'
  },
  u5c2_10: {
    q: 'In fact ______ staying there much longer than you have planned.',
    a: "you'll probably end up",
    why: '<em>Probably</em> marks it as a prediction, and with <em>will</em> the adverb sits neatly between the auxiliary and the verb.',
    wrong: [
      { opt: "you're going to probably end up", why: 'The word order is wrong: an adverb is not normally placed between <em>going to</em> and the verb. It would have to be <em>you\'re probably going to end up</em>.' },
      { opt: "you're ending up", why: 'Ending up somewhere is an unplanned outcome, so it cannot be presented as a fixed arrangement.' }
    ],
    rule: 'Adverb position: <em>will probably do</em>, but <em>is probably going to do</em>.'
  },
  u5c2_11: {
    q: 'Have a great time, and ______ you when you get back.',
    a: "we'll see",
    why: 'No date has been agreed, so this is a friendly promise rather than an arrangement — a classic use of <em>will</em>, and the normal way to sign off a letter.',
    wrong: [
      { opt: "we're going to see", why: '<em>Going to</em> reports an intention already formed and decided, which is heavier than the light promise intended here.' },
      { opt: "we're seeing", why: 'The present continuous would claim a meeting is arranged, but the writers only know it will be some time after the trip.' }
    ],
    rule: 'Promises and offers made as you speak or write take <em>will</em>.'
  },

  /* ── C3 Telephone dialogue: present continuous or will ── */
  u5c3_1: {
    q: 'I know this is very short notice but ______ (do) anything tonight?',
    a: 'are you doing',
    why: 'Kirsty is asking about Elaine\'s existing plans for tonight, so the present continuous is used. In a question the auxiliary comes before the subject: <em>are you doing</em>.',
    wrong: [
      { opt: 'will you do', why: 'This asks about willingness or makes a prediction; it does not ask what has already been arranged.' },
      { opt: 'do you do', why: 'The present simple asks about a habit — what Elaine does on a typical evening — not about tonight.' }
    ],
    rule: 'Ask about someone\'s plans with the present continuous: <em>What are you doing tonight?</em>'
  },
  u5c3_2: {
    q: 'Well ______ (take) my class to the theatre, but one of them cannot go.',
    a: 'am taking',
    why: 'The tickets are booked and the class is organised, so this is a definite arrangement — present continuous. Note that the key wants the verb form only: write <em>am taking</em> or <em>\'m taking</em>, without repeating the subject.',
    wrong: [
      { opt: 'will take', why: '<em>Will</em> would suggest Kirsty is deciding at this moment, but the theatre trip was arranged before she picked up the phone.' },
      { opt: 'take', why: 'The present simple describes a routine, as though she took her class to the theatre every week.' }
    ],
    rule: 'Tickets booked, people told → present continuous.'
  },
  u5c3_3: {
    q: 'Oh, ______ (tell) you all about that a little later.',
    a: 'will tell',
    why: 'Kirsty decides to postpone the explanation as she speaks, and a decision made at the moment of speaking takes <em>will</em>. Write the verb form only — <em>will tell</em> or <em>\'ll tell</em> — without the subject.',
    wrong: [
      { opt: 'am telling', why: 'The present continuous would claim this was already arranged, but she has only just thought of it.' },
      { opt: 'tell', why: 'The present simple cannot refer forward to later this evening.' }
    ],
    rule: 'Spontaneous decisions take <em>will</em>: <em>I\'ll explain later.</em>'
  },
  u5c3_4: {
    q: '______ (pick) you up at 6.30 — is that okay?',
    a: 'will pick',
    why: 'This is an offer made on the spot, which is why it is followed by <em>is that okay?</em>. Offers take <em>will</em>; the key wants the verb form alone, so <em>will pick</em> or <em>\'ll pick</em>.',
    wrong: [
      { opt: 'am picking', why: 'The present continuous would state a settled arrangement, but Kirsty is proposing the time and waiting for agreement.' },
      { opt: 'pick', why: 'The present simple gives no future meaning here — it would suggest a regular lift she always gives.' }
    ],
    rule: 'Offers and suggestions: <em>I\'ll pick you up</em>, <em>Shall I pick you up?</em>'
  },
  u5c3_5: {
    q: 'Well, ______ (see) the school principal at four, but I suppose I could come after that.',
    a: 'am seeing',
    why: 'A meeting with the principal at four is an appointment already in the diary, so the present continuous is right. <em>\'m seeing</em> is accepted too, and <em>see</em> here means "meet", an action, so the continuous is possible.',
    wrong: [
      { opt: 'will see', why: '<em>Will</em> would suggest she is deciding now to see the principal, but the appointment already exists — it is the reason she cannot come earlier.' },
      { opt: 'see', why: 'The present simple would mean she sees the principal regularly at four, losing the reference to today.' }
    ],
    rule: '<em>see</em> = meet by appointment → an action verb, so the continuous is allowed.'
  },
  u5c3_6: {
    q: 'My meeting ______ (probably/finish) at about 5.30.',
    a: 'will probably finish',
    why: '<em>Probably</em> and <em>at about</em> both show this is an estimate, not a fixed time, so <em>will</em> is the right form. The adverb sits between <em>will</em> and the verb, and <em>\'ll probably finish</em> is accepted.',
    wrong: [
      { opt: 'is probably finishing', why: 'The present continuous states a definite arrangement, which contradicts the hedging <em>probably</em>.' },
      { opt: 'will probably finishes', why: 'After <em>will</em> the verb keeps its base form — no <em>-s</em> ending.' }
    ],
    rule: '<em>will</em> + <em>probably</em> + base verb for an estimated time.'
  },
  u5c3_7: {
    q: 'At 7.30, although we ______ (need) to be there before.',
    a: 'will need',
    why: '<em>Need</em> is a state verb, so it takes <em>will</em> rather than a continuous form, and <em>will</em> points the sentence at tonight. <em>\'ll need</em> is also accepted.',
    wrong: [
      { opt: "we're needing", why: '<em>Need</em> describes a state, not an activity in progress, so it is not used in the continuous here.' },
      { opt: 'we need', why: 'Not wrong in general English, but this exercise asks for a present continuous or a <em>will</em> form, and <em>will need</em> makes the reference to tonight explicit.' }
    ],
    rule: 'State verbs (need, want, know) take <em>will</em> for the future, not the continuous.'
  },
  u5c3_8: {
    q: '… as ______ (meet) my students at the theatre at seven.',
    a: 'am meeting',
    why: 'The time and place have been agreed with the students, so this is a fixed arrangement in the present continuous. Write the verb form only: <em>am meeting</em> or <em>\'m meeting</em>.',
    wrong: [
      { opt: 'will meet', why: '<em>Will</em> would make it a decision taken during this phone call, but the seven o\'clock meeting is the reason she has to be there early.' },
      { opt: 'meet', why: 'The present simple would describe a regular meeting rather than tonight\'s arrangement.' }
    ],
    rule: 'Arrangements with other people → present continuous.'
  },
  u5c3_9: {
    q: 'Afterwards they ______ (probably/want) to talk about the play for a little while.',
    a: 'will probably want',
    why: 'Two things point to <em>will</em>: <em>probably</em> marks it as a prediction, and <em>want</em> is a state verb, so it cannot go into the continuous. <em>\'ll probably want</em> is accepted.',
    wrong: [
      { opt: "they're probably wanting", why: '<em>Want</em> is a state verb of feeling and is not normally used in the continuous.' },
      { opt: 'they probably want', why: 'The present simple refers to now, but the students\' reaction comes after the play.' }
    ],
    rule: 'Predicting how people will feel: <em>will</em> + state verb.'
  },
  u5c3_10: {
    q: 'But I hope that ______ (not/go on) for too long.',
    a: 'will not go on',
    why: 'This is a hope about the future, not an arrangement, so the negative <em>will</em> form is used. <em>Won\'t go on</em> is accepted as the contraction, and the subject <em>it</em> is understood rather than written in the gap.',
    wrong: [
      { opt: "isn't going on", why: 'The present continuous negative would deny a fixed arrangement, but nothing has been arranged about how long the discussion lasts.' },
      { opt: "doesn't go on", why: 'The present simple negative describes a general habit rather than tonight\'s discussion.' }
    ],
    rule: 'Negative future with <em>will</em>: <em>won\'t</em> + base verb.'
  },
  u5c3_11: {
    q: 'There ______ (be) plenty of time for us to discuss it at tomorrow\'s lesson.',
    a: 'will be',
    why: '<em>There will be</em> is the future of <em>there is</em>, and it is used here for a simple statement of fact about tomorrow. <em>Be</em> is a state verb, so no continuous form is possible.',
    wrong: [
      { opt: 'There is being', why: '<em>Be</em> in the sense of existing is a state and does not take the continuous.' },
      { opt: 'There is', why: 'The present simple refers to now, but the time in question is at tomorrow\'s lesson.' }
    ],
    rule: '<em>there is</em> → <em>there will be</em> for the future.'
  },
  u5c3_12: {
    q: 'That is fine. ______ (see) you at 5.30!',
    a: 'will see',
    why: 'This is the standard way of ending a conversation once a time has just been agreed — a friendly promise rather than a report of an arrangement. Write the verb form only: <em>will see</em> or <em>\'ll see</em>.',
    wrong: [
      { opt: 'see', why: 'The present simple cannot refer to a meeting later today.' },
      { opt: 'am seeing', why: 'Possible in principle as a statement of the arrangement, but as a sign-off English uses <em>I\'ll see you</em>, and the answer here is the <em>will</em> form.' }
    ],
    rule: 'Sign off with <em>will</em>: <em>I\'ll see you later</em>, <em>I\'ll speak to you soon</em>.'
  },

  /* ── D Q1–5 Sentence completion A–F ── */
  u5d1_1: {
    q: 'Students who want to do law …',
    a: 'F — must have certain qualifications',
    why: 'The passage says that for some careers like medicine and law it is essential you have specific qualifications. <em>Essential</em> is paraphrased by the strong obligation <em>must</em> in option F.',
    wrong: [
      { opt: 'D — can be accepted onto a course without qualifications', why: 'That sentence is about mature entrants, and it is the opposite of what the passage says about law.' },
      { opt: 'A — will not need any experience to start a course', why: 'The passage never says this about anyone, and it contradicts the advice that entrants may need evidence of relevant work experience.' }
    ],
    rule: 'Match the strength of the wording: essential → must; helps → should.'
  },
  u5d1_2: {
    q: 'Mature students …',
    a: 'D — can be accepted onto a course without qualifications',
    why: 'The passage says mature entrants do not always need formal qualifications. <em>Do not always need</em> is paraphrased as <em>can be accepted … without qualifications</em>.',
    wrong: [
      { opt: 'A — will not need any experience to start a course', why: 'This is the trap option. Mature entrants may not need qualifications, but the passage says they do need evidence of recent study, relevant work experience or professional qualifications.' },
      { opt: 'F — must have certain qualifications', why: 'That applies to medicine and law, and it is the opposite of what is said about mature entrants.' }
    ],
    rule: 'Watch the difference between qualifications and experience — the passage separates them.'
  },
  u5d1_3: {
    q: 'Students who are motivated by self-development …',
    a: 'E — should enquire about the other students on their course',
    why: 'The passage says that if you are interested in self-development and meeting people, you should find out who else will be on the course. <em>Find out</em> is paraphrased by <em>enquire about</em>.',
    wrong: [
      { opt: 'C — could get relevant work experience while they study', why: 'That advice is aimed at students working towards a particular job, not at those studying for personal development.' },
      { opt: 'B — will benefit from open-learning courses', why: 'Open learning is recommended for people who like working alone or have limited time — the opposite of someone whose motive is meeting people.' }
    ],
    rule: 'The answer paraphrases the passage; the wording will rarely match word for word.'
  },
  u5d1_4: {
    q: 'Students who have young children …',
    a: 'B — will benefit from open-learning courses',
    why: 'The passage lists "you are at home looking after pre-school children" among the circumstances in which you might prefer an open or distance learning course. <em>Pre-school children</em> is paraphrased as <em>young children</em>.',
    wrong: [
      { opt: 'C — could get relevant work experience while they study', why: 'The voluntary-work advice is given to students aiming at a particular job, not to parents of small children.' },
      { opt: 'E — should enquire about the other students on their course', why: 'That belongs to the self-development paragraph. Open learning is largely studied alone, so it does not fit either.' }
    ],
    rule: 'Scan for the key words, then read the whole sentence around them.'
  },
  u5d1_5: {
    q: 'Students who choose a career in journalism …',
    a: 'C — could get relevant work experience while they study',
    why: 'The last paragraph says that if you are doing an English course and want to be a journalist you could write for the student newspaper or work on the radio — that is relevant work experience gained while studying.',
    wrong: [
      { opt: 'F — must have certain qualifications', why: 'Journalism is used in the passage as the contrasting example: it only <em>helps</em> to have a particular qualification, whereas medicine and law require one.' },
      { opt: 'A — will not need any experience to start a course', why: 'Nothing in the passage says this, and journalism is precisely the example where getting experience is recommended.' }
    ],
    rule: 'Journalism appears twice in the passage — check which mention answers the question.'
  },

  /* ── D Q6–9 Classification A/B/C ── */
  u5d2_6: {
    q: 'These courses are available through further education colleges.',
    a: 'C — both academic and vocational courses',
    why: 'The passage states that further education colleges offer academic courses and work-related courses. <em>Work-related</em> is defined earlier in the same paragraph as vocational, so both types apply.',
    wrong: [
      { opt: 'A — academic courses', why: 'True but incomplete: the same sentence also lists work-related courses at further education colleges.' },
      { opt: 'B — vocational courses', why: 'Also incomplete — academic courses are named first in that sentence.' }
    ],
    rule: 'Choose "both" only when the passage genuinely covers the two categories in one statement.'
  },
  u5d2_7: {
    q: 'You must take this kind of course if you wish to have a career in plumbing.',
    a: 'B — vocational courses',
    why: 'The passage says that for a career in plumbing a vocational course is essential. <em>Essential</em> matches the obligation <em>must</em> in the question.',
    wrong: [
      { opt: 'A — academic courses', why: 'The academic example given in the same passage is teaching, which requires a degree.' },
      { opt: 'C — both academic and vocational courses', why: 'The word <em>essential</em> rules out a choice: plumbing has only one route.' }
    ],
    rule: 'Words like essential and must exclude the "both" option.'
  },
  u5d2_8: {
    q: 'You will learn research methods on this type of course.',
    a: 'A — academic courses',
    why: 'The passage says you might prefer an academic course if you like researching, analysing and presenting arguments. Research is placed firmly on the academic side of the contrast.',
    wrong: [
      { opt: 'B — vocational courses', why: 'The vocational course is described as suiting people who like doing things with their hands and working manually.' },
      { opt: 'C — both academic and vocational courses', why: 'The passage sets the two up as a contrast in this paragraph, so research cannot belong to both.' }
    ],
    rule: 'When the passage contrasts two things, the answer is one of them, not both.'
  },
  u5d2_9: {
    q: 'You will learn practical skills on this course.',
    a: 'B — vocational courses',
    why: 'A vocational course is described as better if you like doing things with your hands and working manually — that is the paraphrase of <em>practical skills</em>.',
    wrong: [
      { opt: 'A — academic courses', why: 'Academic study is linked to researching, analysing and presenting arguments, not to manual work.' },
      { opt: 'C — both academic and vocational courses', why: 'The two are directly contrasted here, so practical, hands-on work is attached to only one of them.' }
    ],
    rule: 'Working manually / with your hands = practical skills = vocational.'
  },

  /* ── Grammar Focus Task ── */
  u5gft1: {
    q: 'Your motives ______ (help) you choose the best course for your aims and goals.',
    a: 'will help',
    why: 'The passage predicts a general future outcome for any reader, and impersonal predictions of this kind take <em>will</em>. The contraction <em>\'ll help</em> is accepted too.',
    wrong: [
      { opt: 'are helping', why: 'The present continuous describes something in progress now, but the reader has not chosen a course yet.' },
      { opt: 'are going to help', why: '<em>Going to</em> points to evidence in the present situation or to an intention. This is a neutral, impersonal prediction, which is why the text uses <em>will</em>.' }
    ],
    rule: '<em>will</em> for impersonal predictions and general future facts.'
  },
  u5gft2: {
    q: 'If you are career-driven, you ______ (need) a course relevant to your profession.',
    a: 'will need',
    why: 'This is a first conditional: present simple in the <em>if</em>-clause, <em>will</em> + base verb in the main clause. <em>Need</em> is also a state verb, which rules out the continuous. <em>\'ll need</em> is accepted.',
    wrong: [
      { opt: 'are needing', why: '<em>Need</em> describes a state rather than an activity, so it is not used in the continuous here.' },
      { opt: 'are going to need', why: '<em>Going to</em> suggests an intention or evidence you can already see; the consequence of a condition normally takes <em>will</em>.' }
    ],
    rule: 'First conditional: <em>If</em> + present simple, … <em>will</em> + base verb.'
  },
  u5gft3: {
    q: 'You ______ (ensure) that you do not waste any time or money.',
    a: 'will ensure',
    why: 'This predicts the result of doing the research the passage recommends, so <em>will</em> is used. <em>\'ll ensure</em> is accepted as well.',
    wrong: [
      { opt: 'are ensuring', why: 'The present continuous would place the action now, but the benefit comes later, after the research has been done.' },
      { opt: 'will ensuring', why: 'After <em>will</em> the verb must be in the base form — <em>will ensure</em>, never <em>will</em> + <em>-ing</em>.' }
    ],
    rule: '<em>will</em> + base verb — no <em>-ing</em>, no <em>to</em>, no <em>-s</em>.'
  },
  u5gft4: {
    q: 'What ______ (I/do) after the course?',
    a: 'am I going to do',
    why: 'The heading asks about the reader\'s plans for after the course — something already thought about and intended — so <em>going to</em> is used. In a question, <em>am</em> comes before the subject: <em>Am I going to do…?</em>',
    wrong: [
      { opt: 'I am going to do', why: 'A direct question needs inversion, so the auxiliary <em>am</em> must come in front of <em>I</em>.' },
      { opt: 'will I do', why: 'Grammatically well formed, but it turns the heading into a prediction or a dilemma. The section is about planning ahead, which is what <em>going to</em> expresses.' }
    ],
    rule: 'Question form with <em>going to</em>: <em>Am/Is/Are</em> + subject + <em>going to</em> + base verb.'
  },
  u5gft5: {
    q: 'Having a plan ______ (help) you make the most of the opportunities that come your way.',
    a: 'will help',
    why: 'Like the first extract, this predicts a future benefit for the reader, so the impersonal <em>will</em> is used. The subject <em>having a plan</em> is singular, but <em>will</em> never changes form. <em>\'ll help</em> is accepted.',
    wrong: [
      { opt: 'is helping', why: 'The present continuous puts the action in progress now, but the benefit arrives later, once the reader is on the course.' },
      { opt: 'is going to help', why: '<em>Going to</em> would suggest a prediction drawn from evidence in front of you; this is a general statement about anyone who plans ahead, which takes <em>will</em>.' }
    ],
    rule: '<em>will</em> has one form for every subject — no <em>-s</em>, no agreement.'
  }
};
