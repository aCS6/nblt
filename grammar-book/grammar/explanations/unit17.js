/* Unit 17 — Likelihood & Conditions 1: explanations
   window.__EXPL[<data-id>] = { q, a, why, wrong:[{opt,why}], rule? }
   Rendered by initExplanations() in scripts/utils.js. */
window.__EXPL = {

  /* ── A1 Pre-listening prediction ── */
  u17a1_1: {
    q: 'What would you do with the money?',
    a: 'invest it',
    why: 'The question is a second conditional in disguise: <em>What would you do <strong>if</strong> you had the money?</em> You don\'t have $10,000, so the situation is imaginary and <em>would</em> + base verb is the right answer form. Any of the ideas in the box is accepted: <em>invest it, buy a car, go travelling, save it in the bank, buy a house, give it away</em>.',
    wrong: [
      { opt: 'I will invest it', why: 'The question asks <em>would</em>, not <em>will</em>. <em>Will</em> would mean you really are about to receive the money; the task is hypothetical, so answer with <em>would</em>.' },
      { opt: 'I would invested it', why: 'After <em>would</em> English uses the bare infinitive: <em>I would invest it</em>, never a past form.' },
      { opt: 'I would to invest it', why: 'Modals such as <em>would</em> are never followed by <em>to</em>: <s>would to invest</s> → <em>would invest</em>.' }
    ],
    rule: 'Imaginary present/future → <em>would</em> + base verb.'
  },

  /* ── A2 What do they talk about (Track 24) ── */
  u17a2_1: {
    q: 'They talk about ______ with the money.',
    a: 'buying a car, travelling and investing the money',
    why: 'Three of the six pictures come up in the conversation: Simon wants a car and a year of travelling, and his father pushes investment. Word order does not matter, so <em>buying a car, investing the money and travelling</em> is equally right.',
    wrong: [
      { opt: 'buying a house', why: 'A house is in the picture box but never mentioned in the recording. The box deliberately offers more options than the speakers use.' },
      { opt: 'giving it away', why: 'Also a distractor from the pictures. Nobody suggests giving the inheritance away.' },
      { opt: 'to buy a car, to travel and to invest', why: 'After the preposition <em>about</em> English needs the <em>-ing</em> form, not the infinitive: <em>talk about buying</em>, not <s>talk about to buy</s>.' }
    ],
    rule: 'After a preposition, use the <em>-ing</em> form of the verb.'
  },

  /* ── A3 Match the sentence halves ── */
  u17a3_1: {
    q: 'Unless you invest it properly, …',
    a: 'c – you won\'t earn much interest.',
    why: '<em>Unless</em> means <em>if … not</em>, so the sentence reads <em>if you don\'t invest it properly</em>. That negative condition needs a negative future result, and <em>you won\'t earn much interest</em> supplies exactly that.',
    wrong: [
      { opt: 'd – provided that you think of it as a long-term investment.', why: 'This ending is itself a condition, so <em>Unless … provided that …</em> would leave the sentence with two condition clauses and no result.' },
      { opt: 'h – I won\'t be able to access the money quickly.', why: 'The tense pattern fits, but the subject jumps from <em>you</em> to <em>I</em> for no reason. The result should be about the person who fails to invest.' }
    ],
    rule: '<em>unless</em> = <em>if … not</em>; never add a second <em>not</em> to the clause.'
  },
  u17a3_2: {
    q: 'If I invest it, …',
    a: 'h – I won\'t be able to access the money quickly.',
    why: 'First conditional: present tense <em>invest</em> in the <em>if</em>-clause, <em>will/won\'t</em> in the result. Simon is talking about a real, probable consequence for himself, so the <em>I</em> subject carries through.',
    wrong: [
      { opt: 'c – you won\'t earn much interest.', why: 'The form works but the meaning reverses. Investing properly is what <strong>earns</strong> interest; leaving money uninvested is what loses it.' },
      { opt: 'f – I\'d lose a year of study.', why: 'Mixing a first conditional <em>if</em>-clause with a second conditional result. <em>If I invest</em> needs <em>will</em>, not <em>\'d</em>, and losing study time has nothing to do with investing.' }
    ],
    rule: 'First conditional: <em>if</em> + present, + <em>will/won\'t</em> + verb.'
  },
  u17a3_3: {
    q: 'If I went travelling, …',
    a: 'f – I\'d lose a year of study.',
    why: 'Second conditional: past tense <em>went</em> signals an unlikely or imagined plan, so the result takes <em>would</em>. The contraction <em>I\'d lose</em> is <em>I would lose</em>, matching that pattern.',
    wrong: [
      { opt: 'a – you\'d probably need an awful lot more money than this!', why: 'The <em>would</em> form is right, but the subject is wrong: the <em>if</em>-clause is about <em>I</em>, so the result should not switch to <em>you</em>.' },
      { opt: 'h – I won\'t be able to access the money quickly.', why: 'A past tense <em>if</em>-clause does not take <em>won\'t</em> in the result. Pair <em>went</em> with <em>wouldn\'t</em>.' }
    ],
    rule: 'Second conditional: <em>if</em> + past, + <em>would(n\'t)</em> + verb.'
  },
  u17a3_4: {
    q: 'If you were to spend a year travelling around the world, …',
    a: 'a – you\'d probably need an awful lot more money than this!',
    why: '<em>Were to + infinitive</em> is an emphatic second conditional used for actions the speaker thinks unlikely, so the result clause takes <em>would</em>: <em>you\'d probably need</em>. The subject <em>you</em> runs through both halves.',
    wrong: [
      { opt: 'f – I\'d lose a year of study.', why: 'The <em>would</em> form matches but the subject does not: this <em>if</em>-clause is about <em>you</em>, not <em>I</em>.' },
      { opt: 'e – you should still be able to invest some money as well.', why: 'This is a positive, encouraging result, which clashes with a condition about needing far more money than you have.' }
    ],
    rule: '<em>If … were to</em> + infinitive = an unlikely future action.'
  },
  u17a3_5: {
    q: 'If you own a car, …',
    a: 'g – you also have to pay for insurance and road tax every year.',
    why: 'Zero conditional: present tense in both halves. Here <em>if</em> means <em>every time</em> — owning a car always brings these costs, so the sentence states a general truth rather than a prediction.',
    wrong: [
      { opt: 'c – you won\'t earn much interest.', why: 'A <em>will</em>-result belongs with a first conditional, and interest has nothing to do with owning a car.' },
      { opt: 'b – if I could drive to work instead of travelling on the bus.', why: 'This ending is itself a condition, so the sentence would end up with two <em>if</em>-clauses and no result.' }
    ],
    rule: 'Zero conditional: <em>if</em> + present, + present, for general truths.'
  },
  u17a3_6: {
    q: 'It would be great …',
    a: 'b – if I could drive to work instead of travelling on the bus.',
    why: 'The result clause comes first here, so no comma is needed. <em>Would</em> in the result signals a second conditional, and the <em>if</em>-clause supplies the imagined situation with the past form <em>could</em>.',
    wrong: [
      { opt: 'e – you should still be able to invest some money as well.', why: 'This is a second result clause. Joined to <em>It would be great</em>, the sentence has no condition at all.' },
      { opt: 'g – you also have to pay for insurance and road tax every year.', why: '<s>It would be great you also have to pay…</s> is ungrammatical: the ending has no linking word to attach it to the result clause.' }
    ],
    rule: 'When the result comes first, no comma: <em>It would be great if I could…</em>'
  },
  u17a3_7: {
    q: 'You won\'t lose any money …',
    a: 'd – provided that you think of it as a long-term investment.',
    why: '<em>Provided that</em> replaces <em>if</em> and emphasises that the promise holds on one condition only. The pattern is still a first conditional: present tense in the condition, <em>won\'t</em> in the result.',
    wrong: [
      { opt: 'c – you won\'t earn much interest.', why: 'Another result clause with no condition word, so the two halves cannot join.' },
      { opt: 'e – you should still be able to invest some money as well.', why: 'Also a result clause. The stem already gives the result, so the ending must supply the condition.' }
    ],
    rule: '<em>provided/providing that</em> = <em>if</em>, with emphasis; common in written English.'
  },
  u17a3_8: {
    q: 'As long as you get a second-hand one, …',
    a: 'e – you should still be able to invest some money as well.',
    why: '<em>As long as</em> = <em>if</em>, stressing the one condition attached: the car must be second-hand. The condition comes first, so there is a comma, and the result uses <em>should</em> to soften the prediction.',
    wrong: [
      { opt: 'd – provided that you think of it as a long-term investment.', why: 'Two condition words in one sentence (<em>as long as</em> + <em>provided that</em>) leaves the sentence with no result clause.' },
      { opt: 'a – you\'d probably need an awful lot more money than this!', why: 'A <em>would</em>-result needs an imaginary condition, but buying a second-hand car is presented as a realistic, affordable option.' }
    ],
    rule: '<em>so/as long as</em> = <em>if</em>, emphasising a single requirement.'
  },

  /* ── A4 Look at the sentences in Exercise 3 ── */
  u17a4_1: {
    q: 'Which words or phrases have a similar meaning to "if"?',
    a: 'provided that, unless, as long as',
    why: 'Three of the eight sentences introduce their condition without <em>if</em>: <em>unless</em> (sentence 1), <em>provided that</em> (sentence 7, via ending d) and <em>as long as</em> (sentence 8). The key also accepts any one of them on its own.',
    wrong: [
      { opt: 'when', why: '<em>When</em> can replace <em>if</em> — this unit teaches it for things that are more certain — but it does not appear in any of the eight sentences.' },
      { opt: 'in case', why: 'Another condition-type linker from this unit, but it expresses a precaution and is not used in the recording.' },
      { opt: 'would', why: '<em>Would</em> belongs to the result clause (<em>I\'d lose a year of study</em>). It marks the consequence, not the condition.' }
    ],
    rule: '<em>unless, provided/providing that, so/as long as, when</em> can all replace <em>if</em>.'
  },
  u17a4_2: {
    q: 'Do any of the sentences talk about events in the past?',
    a: 'no, none of them',
    why: 'Sentences 3 (<em>If I went travelling</em>) and 4 (<em>If you were to spend a year travelling</em>) use past forms, but that is the second conditional: the past tense marks the situation as imaginary, not as past time. Everything discussed is present or future.',
    wrong: [
      { opt: 'yes, sentence 3', why: '<em>Went</em> looks like past time, but Simon has not travelled anywhere — he is imagining a trip he might take. The past form only signals "unlikely".' },
      { opt: 'yes, sentences 3 and 4', why: 'Same trap doubled. <em>Were to spend</em> also refers to an unlikely <strong>future</strong> action, not to something that happened.' }
    ],
    rule: 'In the second conditional the past tense means "unreal", not "past".'
  },

  /* ── C1 Match the two halves ── */
  u17c1_2: {
    q: 'If you boil milk, …',
    a: 'e – it forms a skin on the top.',
    why: 'Zero conditional: present + present for something that always happens. <em>If</em> here means <em>every time</em>, and <em>it</em> refers back to the milk.',
    wrong: [
      { opt: 'g – you won\'t be able to open the cupboard.', why: 'A <em>won\'t</em>-result is a prediction about one future occasion, which does not fit a permanent physical fact — and cupboards have nothing to do with milk.' },
      { opt: 'c – I\'ll take you somewhere nice to celebrate.', why: 'Already used for the example sentence, and a <em>will</em>-result cannot follow a general scientific truth.' }
    ],
    rule: 'Zero conditional for facts: <em>If you boil milk, it forms a skin.</em>'
  },
  u17c1_3: {
    q: 'What will you do …',
    a: 'b – if you don\'t get accepted at Macquarie University?',
    why: 'A first conditional question with the result clause first: <em>will</em> in the question, present simple in the <em>if</em>-clause. Not getting a place is a real possibility, and the question mark matches the interrogative stem.',
    wrong: [
      { opt: 'd – if you put diesel fuel into a petrol-driven car?', why: 'Also a question ending, but it pairs with <em>What happens</em> — a general truth — not with <em>What will you do</em>, which asks about one person\'s plans.' },
      { opt: 'h – if my boss allows me to work from home sometimes.', why: 'A statement ending with no question mark, and the subject shifts to <em>my boss</em>, which does not answer a question addressed to <em>you</em>.' }
    ],
    rule: 'Questions keep the pattern: <em>will</em> in the result, present in the <em>if</em>-clause.'
  },
  u17c1_4: {
    q: 'What happens to the engine …',
    a: 'd – if you put diesel fuel into a petrol-driven car?',
    why: 'Zero conditional question: present simple in both halves, asking what always happens. <em>Happens</em> agrees with the singular question word <em>what</em>.',
    wrong: [
      { opt: 'b – if you don\'t get accepted at Macquarie University?', why: 'The topics do not connect — an engine is not affected by a university application — and this ending belongs with a <em>will</em>-question.' },
      { opt: 'g – you won\'t be able to open the cupboard.', why: 'This is a result clause, not a condition, so it cannot follow another result clause.' }
    ],
    rule: 'Zero conditional questions ask about a general, repeatable outcome.'
  },
  u17c1_5: {
    q: 'If I get all my work done in time, …',
    a: 'f – I\'ll be home by six o\'clock tonight.',
    why: 'First conditional: present simple <em>get</em> in the condition, <em>\'ll</em> in the result. The subject <em>I</em> runs through both halves, and <em>tonight</em> confirms a specific, probable future.',
    wrong: [
      { opt: 'a – we\'ll give you the job.', why: 'The form is right but the people are wrong: the condition is about my own work, so the result should be about me, not about an employer offering a job.' },
      { opt: 'h – if my boss allows me to work from home sometimes.', why: 'Two <em>if</em>-clauses in one sentence, with no result.' }
    ],
    rule: 'Keep the subject consistent across the two halves unless the sense demands a change.'
  },
  u17c1_6: {
    q: 'I might buy a new laptop computer …',
    a: 'h – if my boss allows me to work from home sometimes.',
    why: 'A first conditional with the result first. <em>Might</em> replaces <em>will</em> to show the purchase is less certain, and the <em>if</em>-clause keeps the present simple <em>allows</em>.',
    wrong: [
      { opt: 'b – if you don\'t get accepted at Macquarie University?', why: 'A question ending, but the stem is a statement with no question word — the sentence would end in a stray question mark.' },
      { opt: 'f – I\'ll be home by six o\'clock tonight.', why: 'Two result clauses with no condition between them.' }
    ],
    rule: '<em>might/may/could</em> instead of <em>will</em> = a less probable result.'
  },
  u17c1_7: {
    q: 'If you agree to enrol in the diploma course, …',
    a: 'a – we\'ll give you the job.',
    why: 'First conditional: an employer makes a real offer that depends on one condition. Present simple <em>agree</em> in the <em>if</em>-clause, <em>\'ll give</em> in the result.',
    wrong: [
      { opt: 'f – I\'ll be home by six o\'clock tonight.', why: 'The <em>will</em>-form fits, but agreeing to enrol in a course has no logical link to getting home on time.' },
      { opt: 'e – it forms a skin on the top.', why: 'A zero-conditional general truth about milk; <em>it</em> would have nothing to refer back to.' }
    ],
    rule: 'First conditional for offers and promises that depend on a condition.'
  },
  u17c1_8: {
    q: 'If you put the sofa there, …',
    a: 'g – you won\'t be able to open the cupboard.',
    why: 'First conditional with a negative result: present simple <em>put</em> in the condition, <em>won\'t be able to</em> in the result. Both halves are about the same room and the same <em>you</em>.',
    wrong: [
      { opt: 'e – it forms a skin on the top.', why: 'The milk ending — a zero-conditional fact that has no connection to furniture.' },
      { opt: 'a – we\'ll give you the job.', why: 'The pattern is right, but the condition is about where a sofa goes, not about a job application.' }
    ],
    rule: 'Either clause of a conditional can be negative.'
  },

  /* ── C2 Gap fill: verbs in brackets ── */
  u17c2_2: {
    q: 'My parents would love it if I ______ (become) a doctor.',
    a: 'became',
    why: 'The result clause already has <em>would love</em>, so this is a second conditional and the <em>if</em>-clause takes the past tense. The past form marks the situation as unlikely — the speaker doubts they could face the years of study.',
    wrong: [
      { opt: 'become', why: '<em>would love … if I become</em> mixes two patterns. <em>Would</em> in the result must be matched by a past tense in the condition.' },
      { opt: 'will become', why: 'Never put <em>will</em> in this kind of <em>if</em>-clause, and <em>will</em> belongs with a <em>will</em>-result, not a <em>would</em>-result.' },
      { opt: 'had become', why: 'The past perfect would make it a third conditional — a regret about the past. Here the speaker is talking about a possible career ahead.' }
    ],
    rule: 'Second conditional: <em>would</em> in the result ⇒ past tense after <em>if</em>.'
  },
  u17c2_3: {
    q: 'Also if I ______ (be) a doctor, I\'d hate all those hours you have to work.',
    a: 'were',
    why: 'Second conditional again — the next clause has <em>\'d hate</em>. With the verb <em>be</em>, both <em>were</em> and <em>was</em> are correct after <em>I/he/she/it</em>, and the key accepts either; <em>were</em> is the slightly more formal choice.',
    wrong: [
      { opt: 'am', why: 'The present tense would make it a real condition, but the speaker is imagining a life they are not going to have.' },
      { opt: 'will be', why: 'No <em>will</em> in the <em>if</em>-clause, and the result clause <em>I\'d hate</em> needs a past-tense condition.' },
      { opt: 'would be', why: '<s>If I would be</s> is a common error. <em>Would</em> belongs in the result clause only.' }
    ],
    rule: '<em>If I were/was you…</em> — both forms are accepted after I/he/she/it.'
  },
  u17c2_4: {
    q: '… I ______ (hate) all those hours you have to work.',
    a: 'would hate',
    why: 'This is the result clause of the second conditional begun by <em>if I were a doctor</em>, so it takes <em>would</em> + the base verb. The contraction <em>\'d hate</em> is equally correct.',
    wrong: [
      { opt: 'hate', why: 'The plain present would state a fact about the speaker\'s life now, but they are not a doctor — the feeling is hypothetical.' },
      { opt: 'will hate', why: '<em>Will</em> pairs with a present-tense condition. The condition here is <em>if I were</em>, so the result needs <em>would</em>.' },
      { opt: 'would hated', why: 'After <em>would</em> the verb stays in its base form: <em>would hate</em>.' }
    ],
    rule: 'Second conditional result: <em>would/wouldn\'t</em> (or <em>might/could</em>) + base verb.'
  },
  u17c2_5: {
    q: 'If I ______ (not/have) my computer, I wouldn\'t know what to do.',
    a: 'didn\'t have',
    why: 'The speaker <strong>does</strong> have a computer, so this is an imagined situation — second conditional, past tense in the <em>if</em>-clause. The past simple negative is <em>didn\'t</em> + base verb.',
    wrong: [
      { opt: 'don\'t have', why: 'The present would make it a genuine possibility and would need <em>won\'t know</em> in the result; the result clause given is <em>wouldn\'t know</em>.' },
      { opt: 'wouldn\'t have', why: '<em>Would</em> goes in the result clause, not after <em>if</em>.' },
      { opt: 'didn\'t had', why: 'After <em>didn\'t</em> the verb returns to its base form: <em>didn\'t have</em>.' }
    ],
    rule: 'Contrary to present fact → second conditional with the past simple.'
  },
  u17c2_6: {
    q: '… I ______ (not/know) what to do.',
    a: 'wouldn\'t know',
    why: 'Result clause of the second conditional: <em>would</em> + base verb, negative <em>wouldn\'t</em>. <em>Know</em> is also a state verb, so it could never appear in a continuous form here.',
    wrong: [
      { opt: 'won\'t know', why: '<em>Won\'t</em> would require a present-tense condition (<em>If I don\'t have</em>), but the condition is <em>didn\'t have</em>.' },
      { opt: 'didn\'t know', why: 'A past tense in both halves would describe something that really happened; the speaker is imagining life without a computer now.' },
      { opt: 'wouldn\'t knew', why: 'After <em>would</em> use the base form: <em>wouldn\'t know</em>.' }
    ],
    rule: 'Match the halves: past tense after <em>if</em> ⇒ <em>would</em> in the result.'
  },
  u17c2_7: {
    q: 'If you ______ (not/find) what you want in the shops, you\'ll find it on the Internet.',
    a: 'don\'t find',
    why: 'This is a real, everyday possibility, so it is a first conditional with the present simple in the <em>if</em>-clause. The key also accepts <em>can\'t find</em>, since English often adds <em>can</em> to verbs of searching and perception.',
    wrong: [
      { opt: 'won\'t find', why: 'Never put <em>will/won\'t</em> in the <em>if</em>-clause of a first conditional — the future meaning sits in the result clause.' },
      { opt: 'didn\'t find', why: 'A past form would make the condition imaginary, but shops not stocking what you want is entirely realistic.' },
      { opt: 'doesn\'t find', why: 'The subject is <em>you</em>, which never takes the <em>-s</em> ending.' }
    ],
    rule: 'First conditional: <em>if</em> + present simple, even when the meaning is future.'
  },
  u17c2_8: {
    q: '… you ______ (find) it on the Internet.',
    a: 'will find',
    why: 'The probable result of a real condition, so the first conditional <em>will</em> + base verb. The key also accepts the plain present <em>find</em>, reading the sentence as a general truth (zero conditional) about online shopping.',
    wrong: [
      { opt: 'would find', why: '<em>Would</em> needs an imaginary, past-tense condition; the condition here is the present <em>don\'t find</em>.' },
      { opt: 'will found', why: 'After <em>will</em> the verb takes its base form: <em>will find</em>.' },
      { opt: 'are finding', why: 'The continuous describes something in progress right now, not a prediction about any future shopping trip.' }
    ],
    rule: 'Zero and first conditional both work when a real situation is also a general pattern.'
  },
  u17c2_9: {
    q: '… because it ______ (save) me about £50 if I do it that way.',
    a: 'will save',
    why: 'Result clause first, condition second — the meaning is the same, and no comma is used when the <em>if</em>-clause comes second. The saving is a probable future result of a booking he really intends to make, so the first conditional <em>will</em> is right.',
    wrong: [
      { opt: 'saves', why: 'The present simple would state it as a timeless general truth, but he is talking about one specific ticket to Barcelona.' },
      { opt: 'would save', why: '<em>Would</em> needs an unreal condition, yet he really is going to buy the ticket online.' },
      { opt: 'is saving', why: 'The continuous would mean the saving is happening at this moment; the money is only saved once he books.' }
    ],
    rule: 'No comma when the result clause comes first.'
  },
  u17c2_10: {
    q: '… if I ______ (do) it that way.',
    a: 'do',
    why: 'The <em>if</em>-clause of a first conditional takes the present simple, and the subject <em>I</em> takes the base form with no ending.',
    wrong: [
      { opt: 'will do', why: 'The <em>will</em> is already in the result clause (<em>it\'ll save me £50</em>). It must not be repeated after <em>if</em>.' },
      { opt: 'did', why: 'A past form would make the plan hypothetical and would force <em>would save</em> in the result.' },
      { opt: 'does', why: 'The subject is <em>I</em>, so there is no <em>-s</em>.' }
    ],
    rule: 'One <em>will</em> per first conditional — and it goes in the result clause.'
  },
  u17c2_11: {
    q: 'This production of Shakespeare\'s play ______ (surprise) you, unless you are used to seeing all the characters being played by just two people!',
    a: 'will surprise',
    why: 'A first conditional with <em>unless</em> in place of <em>if … not</em>, so the result clause takes <em>will</em>. The writer is predicting a real reaction from a real audience.',
    wrong: [
      { opt: 'surprises', why: 'The present simple would state it as a permanent general truth; the writer is predicting what will happen to whoever goes to see it.' },
      { opt: 'would surprise', why: '<em>Would</em> would make the visit imaginary, but this is a production people can actually attend.' },
      { opt: 'will surprises', why: 'After <em>will</em> the verb never takes <em>-s</em>, even with a singular subject.' }
    ],
    rule: '<em>unless</em> + present tense in the condition, <em>will</em> in the result.'
  },
  u17c2_12: {
    q: '… unless you ______ (be used to) seeing all the characters being played by just two people!',
    a: 'are used to',
    why: '<em>Unless</em> introduces the condition, and condition clauses take a present tense. <em>Be used to</em> means "be accustomed to", so <em>be</em> agrees with <em>you</em>: <em>are used to</em> — and it is followed by an <em>-ing</em> form, <em>seeing</em>.',
    wrong: [
      { opt: 'aren\'t used to', why: '<em>Unless</em> already carries the negative (= <em>if you are not used to</em>). Adding <em>not</em> negates it twice and reverses the meaning.' },
      { opt: 'used to', why: '<em>Used to see</em> is a different structure altogether — a past habit that has stopped. Here you need <em>be</em> + <em>used to</em> + <em>-ing</em>.' },
      { opt: 'will be used to', why: 'No <em>will</em> in the condition clause; the <em>will</em> is already in the result.' }
    ],
    rule: '<em>be used to</em> + <em>-ing</em> = be accustomed to; <em>used to</em> + infinitive = a finished past habit.'
  },
  u17c2_13: {
    q: 'I don\'t keep my eggs in the fridge. If I ______ (keep) them in the fridge, I\'d take them out half an hour before cooking.',
    a: 'kept',
    why: 'The writer has just said she does <strong>not</strong> keep eggs in the fridge, so the condition is contrary to fact — second conditional, past tense after <em>if</em>. The result clause <em>I\'d take</em> confirms it.',
    wrong: [
      { opt: 'keep', why: 'The present would make it a real condition and would need <em>I\'ll take</em> in the result, but the result given is <em>I\'d take</em>.' },
      { opt: 'had kept', why: 'The past perfect belongs to the third conditional, for a past that cannot be changed. This is about her present habit.' },
      { opt: 'would keep', why: '<em>Would</em> goes in the result clause, never after <em>if</em> in this pattern.' }
    ],
    rule: 'A condition that contradicts the facts you have just stated → second conditional.'
  },
  u17c2_14: {
    q: '… I ______ (take) them out half an hour before cooking.',
    a: 'would take',
    why: 'Result of the imaginary condition <em>if I kept them in the fridge</em>: <em>would</em> + base verb. <em>\'d take</em> is the same form contracted.',
    wrong: [
      { opt: 'will take', why: '<em>Will</em> pairs with a present-tense condition, but the condition here is the past form <em>kept</em>.' },
      { opt: 'take', why: 'The plain present would describe what she actually does, and she has just said she does not use the fridge for eggs.' },
      { opt: 'took', why: 'A past tense in both halves would describe a real past routine rather than an imagined present one.' }
    ],
    rule: 'Past tense after <em>if</em> ⇒ <em>would</em> + base verb in the result.'
  },
  u17c2_15: {
    q: '… not everyone has somewhere cool to store them in your home, you ______ (have to) use the fridge, but just remember to take them out in time.',
    a: 'will have to',
    why: 'This is practical advice about a real situation, so it is a first conditional result: <em>will</em> + <em>have to</em>. Obligation is expressed with <em>have to</em>, which keeps its base form after <em>will</em>.',
    wrong: [
      { opt: 'would have to', why: '<em>Would</em> would make it hypothetical, but plenty of readers genuinely have nowhere cool to keep eggs — the writer is addressing them directly.' },
      { opt: 'have to', why: 'The plain present loses the "in that case" future consequence the sentence is building towards.' },
      { opt: 'will has to', why: 'After <em>will</em> the verb never takes <em>-s</em>: <em>will have to</em>.' }
    ],
    rule: 'Obligation in a first conditional result: <em>will have to</em> + base verb.'
  },

  /* ── C3 Decide if the underlined verbs are correct ── */
  u17c3_1: {
    q: 'I think that if you have lots of friends, you (will be lucky).',
    a: '✓',
    why: 'Correct as it stands. The <em>if</em>-clause has the present simple <em>have</em> and the result has <em>will</em> — a textbook first conditional about a probable outcome.',
    wrong: [
      { opt: 'would be lucky', why: '<em>Would</em> needs a past-tense condition. <em>If you have</em> is present, so the result must be <em>will</em>.' },
      { opt: 'are lucky', why: 'A zero conditional would state it as an unvarying fact. The speaker is offering an opinion about a likely outcome, and the exercise only asks you to change what is actually wrong.' }
    ],
    rule: 'In a "tick or correct" task, check the pattern before you change anything.'
  },
  u17c3_2: {
    q: 'If you (won\'t have) a special friend, you won\'t have someone to talk to at difficult times.',
    a: 'don\'t have',
    why: '<em>Will/won\'t</em> never appears in the <em>if</em>-clause of a first conditional; the future meaning is carried by the result clause (<em>you won\'t have someone to talk to</em>). Change it to the present simple negative.',
    wrong: [
      { opt: 'won\'t have', why: 'The printed form. <s>If you won\'t have</s> is one of the commonest conditional errors — the <em>if</em>-clause stays present even when the meaning is future.' },
      { opt: 'didn\'t have', why: 'A past form would make it a second conditional and would need <em>wouldn\'t have</em> in the result, but the result clause is <em>won\'t have</em>.' },
      { opt: '✓', why: 'Ticking it leaves the <em>will</em> inside the condition, which is exactly the error this exercise is testing.' }
    ],
    rule: 'No <em>will</em> after <em>if</em> in a first conditional.'
  },
  u17c3_3: {
    q: 'If you (are) in an environment where everyone is your own age …',
    a: '✓',
    why: 'Correct. The <em>if</em>-clause takes the present simple, and <em>are</em> agrees with the subject <em>you</em>.',
    wrong: [
      { opt: 'will be', why: 'No <em>will</em> in the <em>if</em>-clause — that is the error being tested elsewhere in this exercise.' },
      { opt: 'were', why: 'A past form would signal an imaginary situation, but being at school among people your own age is the real, normal case being described.' }
    ],
    rule: 'Present simple after <em>if</em>, whatever the time reference.'
  },
  u17c3_4: {
    q: '… you (would probably make) friends.',
    a: 'will probably make',
    why: 'The condition is the present <em>if you are in an environment…</em>, so the result must use <em>will</em>, not <em>would</em>. The adverb <em>probably</em> sits between the auxiliary and the main verb.',
    wrong: [
      { opt: 'would probably make', why: 'The printed form. <em>Would</em> requires a past-tense condition (<em>if you were…</em>); mixing <em>if you are</em> with <em>you would</em> is wrong.' },
      { opt: 'probably will make', why: 'Possible in some emphatic contexts, but the neutral position for a mid-sentence adverb is after the auxiliary: <em>will probably make</em>.' },
      { opt: '✓', why: 'The sentence cannot stand: its two halves belong to different conditional patterns.' }
    ],
    rule: 'Adverb position: <em>will</em> + <em>probably</em> + base verb.'
  },
  u17c3_5: {
    q: 'But when you (started work), for example, you meet people of different ages.',
    a: 'start',
    why: 'The result clause is the present simple <em>you meet</em>, so this is a general statement about what happens to people — the time clause must also be present. <em>When</em> here means "every time", not a moment in the speaker\'s past.',
    wrong: [
      { opt: 'started work', why: 'The printed form. A past tense turns it into a one-off memory, but the surrounding sentences are all generalisations about people in general.' },
      { opt: 'will start work', why: 'No <em>will</em> after <em>when</em> in a time or condition clause, even though the meaning can be future.' },
      { opt: 'starts work', why: 'The subject is <em>you</em>, so there is no <em>-s</em>.' }
    ],
    rule: 'No <em>will</em> after <em>when, as soon as, until</em> in a time clause.'
  },
  u17c3_6: {
    q: 'If you get on well with someone and you (will have) a lot in common …',
    a: 'have',
    why: 'This second verb is inside the same <em>if</em>-clause as <em>get on</em>, so it stays in the present simple and parallel with it. There is no <em>will</em> after <em>if</em>.',
    wrong: [
      { opt: 'will have', why: 'The printed form. The <em>will</em> has been put in the condition instead of the result — the classic error in this exercise.' },
      { opt: 'had', why: 'A past tense would make the whole sentence hypothetical and would need <em>wouldn\'t be</em> in the result.' },
      { opt: 'are having', why: '<em>Have</em> meaning "possess (things in common)" is a state verb, so it is not used in the continuous.' }
    ],
    rule: 'Keep coordinated verbs in the same clause in the same tense.'
  },
  u17c3_7: {
    q: '… then age (won\'t be) important.',
    a: 'isn\'t',
    why: 'The speaker is describing how friendship works in general, so both halves take the present simple: <em>If you get on well with someone and you have a lot in common, then age isn\'t important.</em> That is a zero conditional.',
    wrong: [
      { opt: 'won\'t be', why: 'The printed form. <em>Won\'t</em> predicts one particular future occasion, but the sentence states something the speaker believes is always true.' },
      { opt: 'wouldn\'t be', why: '<em>Would</em> needs an imaginary past-tense condition; the condition here is the real present <em>if you get on well</em>.' },
      { opt: '✓', why: 'Ticking it leaves a future form in a sentence whose other verbs are all present simple.' }
    ],
    rule: 'Zero conditional for what is generally true: present + present.'
  },
  u17c3_8: {
    q: 'If you (like) the same things, you will probably get on well.',
    a: '✓',
    why: 'Correct. Present simple in the <em>if</em>-clause, <em>will</em> in the result — a standard first conditional. <em>Like</em> is also a state verb, so the simple form is the only option available.',
    wrong: [
      { opt: 'will like', why: 'No <em>will</em> in the <em>if</em>-clause; the result clause already carries it.' },
      { opt: 'are liking', why: '<em>Like</em> is a state verb of feeling and is not used in the continuous in standard English.' },
      { opt: 'liked', why: 'A past form would make the condition imaginary and would need <em>would probably get on</em> in the result.' }
    ],
    rule: 'State verbs (like, know, have = possess) stay simple in conditionals too.'
  },
  u17c3_9: {
    q: 'If you asked me why we were friends, I (am not able) to say!',
    a: 'wouldn\'t be able',
    why: 'The condition <em>if you asked me</em> uses a past form for an imagined question, so this is a second conditional and the result needs <em>would</em> + base verb: <em>I wouldn\'t be able to say</em>.',
    wrong: [
      { opt: 'am not able', why: 'The printed form. A present tense cannot answer a past-form condition, and nobody has actually asked the question.' },
      { opt: 'won\'t be able', why: '<em>Will</em> pairs with a present condition (<em>if you ask me</em>), but the condition given is <em>asked</em>.' },
      { opt: 'wasn\'t able', why: 'This would report a real past inability, but the question is hypothetical — it has never been put to her.' }
    ],
    rule: '<em>If you asked me…, I would…</em> — a polite, hypothetical framing.'
  },
  u17c3_10: {
    q: '… if you are in a certain place at a certain time you (become) friends …',
    a: '✓',
    why: 'Correct. Present + present is a zero conditional, which suits the general truth the speaker is describing: chance meetings are what create friendships.',
    wrong: [
      { opt: 'will become', why: 'A future form would narrow it to one particular occasion, but the sentence is a general observation about how friendship happens.' },
      { opt: 'became', why: 'A past tense would clash with the present <em>if you are</em> in the same sentence.' }
    ],
    rule: 'Zero conditional: <em>if</em> = "whenever".'
  },
  u17c3_11: {
    q: '… but if you (will meet) the same person at a different time in a different place …',
    a: 'met',
    why: 'Two things are fixed at once: the <em>will</em> comes out of the <em>if</em>-clause, and the verb moves to the past. The result clause is <em>it might not happen</em> — an imagined alternative to what really occurred — so the second conditional is needed.',
    wrong: [
      { opt: 'will meet', why: 'The printed form. <em>Will</em> never goes in the <em>if</em>-clause.' },
      { opt: 'meet', why: 'This removes the <em>will</em> but keeps the sentence in the present. The speaker is imagining a different version of a meeting that has already happened, so the key requires the past form to match <em>might not happen</em>.' },
      { opt: 'had met', why: 'The past perfect belongs to the third conditional, about a past that can no longer be altered.' }
    ],
    rule: 'Imagining an alternative present → past tense after <em>if</em>.'
  },
  u17c3_12: {
    q: '… it (didn\'t happen).',
    a: 'might not happen',
    why: 'The condition <em>if you met the same person…</em> is imaginary, so the result needs a modal + base verb. <em>Might</em> (or <em>may</em>) is chosen instead of <em>would</em> because the speaker is unsure — friendship is a matter of chance.',
    wrong: [
      { opt: 'didn\'t happen', why: 'The printed form. A past simple asserts that something really did not happen, but nothing has happened at all here — the whole scenario is imagined.' },
      { opt: 'won\'t happen', why: '<em>Will</em> pairs with a present-tense condition, but the condition is the past form <em>met</em>.' },
      { opt: 'might not happened', why: 'After a modal the verb stays in the base form: <em>might not happen</em>.' }
    ],
    rule: '<em>might/could</em> can replace <em>would</em> in a second conditional to show less certainty.'
  },
  u17c3_13: {
    q: 'And if you (will need) help, you often turn to your friends.',
    a: 'need',
    why: '<em>Often turn</em> in the result clause shows this is a general truth, so both halves stay in the present simple — a zero conditional. And in any case <em>will</em> is not allowed after <em>if</em>.',
    wrong: [
      { opt: 'will need', why: 'The printed form. The <em>will</em> has been placed in the condition, which is the error being tested.' },
      { opt: 'needed', why: 'A past form would clash with the present <em>you often turn</em> in the same sentence.' },
      { opt: 'needs', why: 'The subject is <em>you</em>, so there is no <em>-s</em>.' }
    ],
    rule: 'A frequency adverb such as <em>often</em> in the result signals a zero conditional.'
  },
  u17c3_14: {
    q: 'When your friends need you, you (will help) them.',
    a: 'help',
    why: 'The speaker is describing what generally happens between friends — <em>it works the other way too</em> — so this sentence mirrors <em>you often turn to your friends</em> and stays in the present simple. <em>When</em> here means "every time".',
    wrong: [
      { opt: 'will help', why: 'The printed form. A future form points at one particular occasion and breaks the parallel with the present-simple sentence it is echoing.' },
      { opt: 'would help', why: '<em>Would</em> needs an imaginary condition, but <em>when your friends need you</em> is presented as something that really happens.' },
      { opt: 'are helping', why: 'The continuous describes an action in progress now, not a general pattern of behaviour.' }
    ],
    rule: 'Keep a whole general description in the present simple.'
  },

  /* ── C4 Underline the correct words ── */
  u17c4_1: {
    q: 'I\'ll put my umbrella in my bag ______ it rains later. (in case / provided that)',
    a: 'in case',
    why: 'You pack the umbrella <strong>before</strong> you know whether it will rain. That is a precaution against a possible problem, and precautions take <em>in case</em>.',
    wrong: [
      { opt: 'provided that', why: '<em>Provided that</em> means "only on condition that", so the sentence would say you pack the umbrella only if rain is guaranteed. You pack it precisely because you do <strong>not</strong> know.' },
      { opt: 'if', why: 'Not offered here, but worth the contrast: <em>if it rains later</em> points at the moment the rain starts, whereas the umbrella has to be in the bag well before that.' }
    ],
    rule: '<em>in case</em> = do it now because it might happen later.'
  },
  u17c4_2: {
    q: '______ you pay me in advance, I\'ll buy the tickets for you. (unless / as long as)',
    a: 'as long as',
    why: 'The speaker will buy the tickets on one condition — being paid first. <em>As long as</em> = <em>if</em>, with emphasis on that single requirement.',
    wrong: [
      { opt: 'unless', why: '<em>Unless</em> means "if … not", which gives the nonsensical reverse: "if you don\'t pay me in advance, I\'ll buy the tickets".' }
    ],
    rule: '<em>so/as long as</em> states the one thing that must be true.'
  },
  u17c4_3: {
    q: 'I\'m going to get fat ______ I stop eating so much chocolate. (if / unless)',
    a: 'unless',
    why: 'Only stopping will prevent the weight gain, so the condition is negative: <em>if I don\'t stop eating so much chocolate</em>. <em>Unless</em> expresses that in one word.',
    wrong: [
      { opt: 'if', why: '<em>If I stop eating so much chocolate</em> would mean that giving up chocolate is what makes you fat — the opposite of the intended meaning.' }
    ],
    rule: '<em>unless</em> = <em>if … not</em>: never add another negative to the clause.'
  },
  u17c4_4: {
    q: 'You must follow the instructions accurately ______ you want to risk damaging the machine. (in case / unless)',
    a: 'unless',
    why: '<em>Unless</em> = "except if". The sentence means "follow the instructions — the only reason not to would be if you actually wanted to wreck the machine", which is a slightly ironic way of stressing the warning.',
    wrong: [
      { opt: 'in case', why: '<em>In case</em> would mean you follow the instructions <strong>because</strong> you might want to risk damaging the machine, which turns the warning into nonsense.' }
    ],
    rule: '<em>unless</em> introduces the single exception to a rule.'
  },
  u17c4_5: {
    q: 'When I travel on planes I always put my toothbrush in my hand luggage ______ my suitcase gets lost. (in case / if)',
    a: 'in case',
    why: 'The toothbrush goes in the hand luggage in advance, as a precaution against a suitcase that <strong>might</strong> go missing. That is exactly what <em>in case</em> expresses.',
    wrong: [
      { opt: 'if', why: '<em>If my suitcase gets lost</em> would mean you move the toothbrush at the moment the suitcase disappears — impossible once the case has been checked in.' }
    ],
    rule: '<em>in case</em> = beforehand; <em>if</em> = at the time it happens.'
  },
  u17c4_6: {
    q: 'Ice skating is fun ______ you are willing to fall over a lot! (as long as / when)',
    a: 'as long as',
    why: 'The fun depends on one condition — accepting that you will fall. <em>As long as</em> = <em>if</em>, emphasising that requirement, which is where the joke lies.',
    wrong: [
      { opt: 'when', why: '<em>When</em> treats the falling as simply certain to happen and removes the "only on this condition" meaning the sentence needs.' }
    ],
    rule: '<em>as long as</em> attaches a condition; <em>when</em> assumes the event.'
  },
  u17c4_7: {
    q: 'Your library books are overdue. ______ you return them immediately, you will not be fined. (provided that / when)',
    a: 'provided that',
    why: 'This is a formal letter, and <em>provided that</em> is the formal equivalent of "only if". It stresses that escaping the fine depends entirely on returning the books at once.',
    wrong: [
      { opt: 'when', why: '<em>When</em> would take it for granted that the books are coming back and would remove the condition — but imposing a condition is the whole purpose of the letter.' }
    ],
    rule: '<em>provided/providing that</em> is more common in writing than in speech.'
  },
  u17c4_8: {
    q: 'I\'ve just signed the contract for the job in Indonesia, starting in April. ______ I move there, I\'ll have to sell my car. (when / if)',
    a: 'when',
    why: 'The contract is already signed, so the move is certain. English uses <em>when</em> rather than <em>if</em> for something that is definitely going to happen.',
    wrong: [
      { opt: 'if', why: '<em>If</em> would suggest the move is still in doubt, which contradicts <em>I\'ve just signed the contract</em> in the previous sentence.' }
    ],
    rule: '<em>when</em> = it will happen; <em>if</em> = it may happen.'
  },
  u17c4_9: {
    q: 'I wouldn\'t stay out in the sun too long ______ I were you. (as long as / if)',
    a: 'if',
    why: '<em>If I were you</em> is a fixed second-conditional phrase for giving advice, and it pairs naturally with <em>wouldn\'t</em> in the result clause.',
    wrong: [
      { opt: 'as long as', why: '<s>As long as I were you</s> is not English. The advice formula is fixed: <em>if I were you</em> (or, informally, <em>if I was you</em>).' }
    ],
    rule: 'Advice formula: <em>If I were you, I\'d/I wouldn\'t…</em>'
  },
  u17c4_10: {
    q: 'I don\'t really like going to parties ______ I know most people there. (unless / as long as)',
    a: 'unless',
    why: 'The speaker dislikes parties full of strangers, so the condition is negative: <em>if I don\'t know most people there</em>. <em>Unless</em> carries that "if … not" meaning.',
    wrong: [
      { opt: 'as long as', why: '<em>As long as I know most people there</em> would mean that knowing people is what makes parties unpleasant — the reverse of the intended sense.' }
    ],
    rule: 'A negative main clause + <em>unless</em> = "the only time I do like it is when…".'
  },

  /* ── D Q1–3 Multiple choice (Endangered chocolate) ── */
  u17d1_1: {
    q: '1 The flowers of the cacao plant appear',
    a: 'C – mainly on its trunk.',
    why: 'Paragraph A says <em>its sweet white buds hang from the trunk and along a few fat branches</em>. The trunk is named first and the branches are only <em>a few</em>, so <em>mainly on its trunk</em> is the accurate summary.',
    wrong: [
      { opt: 'A – at the end of its top branches.', why: 'The passage explicitly denies this: <em>Cacao doesn\'t flower, as most plants do, at the tips of its outer and uppermost branches.</em>' },
      { opt: 'B – along all of its branches.', why: 'An all/some trap. The text says <em>a few fat branches</em>, not all of them.' },
      { opt: 'D – close to its leaves.', why: 'The opposite: the flowering branches <em>form where leaves drop off</em>, so the buds appear where there are no longer any leaves.' }
    ],
    rule: 'Watch quantifiers: <em>a few</em> in the passage never means <em>all</em> in the option.'
  },
  u17d1_2: {
    q: '2 In Africa, banana trees are planted with the cacao plants in order to',
    a: 'B – protect the new plants.',
    why: 'Paragraph F: growers use <em>temporary plantings of banana to shade the cacao while it\'s young</em>. <em>Shade … while it\'s young</em> is paraphrased in the option as <em>protect the new plants</em>.',
    wrong: [
      { opt: 'A – replace the largest trees.', why: 'Growers keep the tallest canopy trees standing and strip out everything else, so the bananas replace nothing.' },
      { opt: 'C – provide an extra crop.', why: 'The bananas are described only as temporary shade. Nothing says the fruit is harvested or sold.' },
      { opt: 'D – help improve soil quality.', why: 'Soil exhaustion appears later in the same paragraph, but as a problem that ends the grove\'s life — not as something bananas fix.' }
    ],
    rule: 'Correct options paraphrase the passage; distractors reuse nearby words.'
  },
  u17d1_3: {
    q: '3 In paragraph H, what is the writer referring to when he says \'the ripples would be felt the world over\'?',
    a: 'A – the impact a collapse in chocolate production could have on other industries',
    why: 'The very next sentence explains the metaphor: the US chocolate industry is worth $8.6 billion and <em>in turn supports the nation\'s dairy and nut industries</em>, with 20% of US dairy going into confectionery. The ripples are those knock-on effects.',
    wrong: [
      { opt: 'B – the possibility of disease spreading to other crops', why: 'The passage only describes disease spreading between cacao-growing regions. No other crop is ever said to be at risk.' },
      { opt: 'C – the effects of the economy on world chocolate growers', why: 'This reverses the direction. The ripples run outwards <strong>from</strong> chocolate to other industries, not from the economy to growers.' },
      { opt: 'D – the link between Brazilian growers and African growers', why: 'Both are mentioned, but as separate illustrations of risk. The metaphor is about worldwide economic consequences, not a connection between two countries.' }
    ],
    rule: 'For "what does this phrase mean" questions, read the sentence immediately after it.'
  },

  /* ── D Q4–9 Locating information ── */
  u17d2_4: {
    q: '4 a list of the cacao growing areas',
    a: 'E – the paragraph on where cacao is planted',
    why: 'Paragraph E names the whole growing belt: <em>South America and the Caribbean to West Africa, east Asia, and New Guinea and Vanuatu in the Pacific</em>. The question asks for a <strong>list</strong>, so several places must appear together.',
    wrong: [
      { opt: 'F – West Africa and Central Africa', why: 'Only two regions, and the point there is the 70% share of production, not a survey of where cacao grows.' },
      { opt: 'H – Brazil and West Africa', why: 'These are named as disease examples, not as a list of growing areas.' }
    ],
    rule: 'If the question says "a list", one or two names is not enough.'
  },
  u17d2_5: {
    q: '5 an example of how disease has affected one cacao growing region',
    a: 'H – witches broom in Bahia, Brazil',
    why: 'Paragraph H gives a single named case: witches broom devastated the Bahia region of Brazil and yields fell by 75% in the 1980s. That is one region, named, with a figure.',
    wrong: [
      { opt: 'G – the paragraph on rotting diseases', why: 'It describes disease in general (fungi spoil more than a quarter of the world harvest) but names no particular region.' },
      { opt: 'I – the paragraph on solutions', why: 'It is about disease-<em>resistant</em> plants and fairer prices, i.e. the remedy rather than an example of damage.' }
    ],
    rule: '"An example of" means a specific, named case, not a general statement.'
  },
  u17d2_6: {
    q: '6 details of an ancient chocolate drink',
    a: 'C – the Maya and Aztec paragraph',
    why: 'Paragraph C says the Maya and Aztecs <em>frothed up</em> chocolate <em>with water and spices to make bracing concoctions</em> — the ingredients and preparation of an ancient drink.',
    wrong: [
      { opt: 'B – the paragraph on processing the beans', why: 'It describes fermenting, drying, roasting and pressing into a paste. That is solid chocolate, not a drink.' },
      { opt: 'D – the paragraph on modern chocolate', why: 'It mentions the shift <em>from an elite drink</em> to candy bars, but gives no details of what the ancient drink contained.' }
    ],
    rule: 'Match the exact focus: "details of" means ingredients, method or description.'
  },
  u17d2_7: {
    q: '7 a brief summary of how the chocolate industry has changed in modern times',
    a: 'D – the paragraph on mass-market chocolate',
    why: 'Paragraph D compresses 200 years into a few lines: chocolate has been <em>transformed from an elite drink into ubiquitous candy bars, cocoa powders and confections</em>, with new markets in Eastern Europe and Asia.',
    wrong: [
      { opt: 'C – the Maya, Aztecs and Linnaeus', why: 'It stops in 1753, so it is early history rather than modern change.' },
      { opt: 'I – the paragraph on what needs to be done', why: 'It looks forward to future reforms for farmers; it does not summarise how the industry has already changed.' }
    ],
    rule: '"In modern times" points to the paragraph with recent dates and current markets.'
  },
  u17d2_8: {
    q: '8 the typical lifespan and crop size of a cacao plantation',
    a: 'F – the pioneer-farming paragraph',
    why: 'Paragraph F gives both figures in one sentence: <em>annual yields of 50 to 60 pods per tree for 25 to 30 years</em>. Crop size and lifespan must both appear, and only here do they.',
    wrong: [
      { opt: 'A – the botanical description', why: 'It describes the leaves, buds and pod size, but gives no yields and no timescale.' },
      { opt: 'G – the disease paragraph', why: 'Its figure — more than a quarter of the yearly harvest — is a loss statistic, not a plantation\'s normal yield.' }
    ],
    rule: 'When a question names two pieces of information, both must be in the same paragraph.'
  },
  u17d2_9: {
    q: '9 a reference to the scientific identification of the cacao plant',
    a: 'C – Linnaeus naming the genus Theobroma',
    why: 'Paragraph C records that in 1753 Carolus Linnaeus <em>gave the cacao tree\'s genus the name Theobroma</em>. Naming a genus is scientific identification. Paragraph C answers two questions here (6 and 9), which is allowed in this task type.',
    wrong: [
      { opt: 'A – the description of the plant', why: 'It describes the tree in everyday language but names no scientist and gives no Latin name.' },
      { opt: 'E – Petithuguenin and the growing belt', why: 'It names a modern researcher and a map, which is scientific work but not the identification of the species.' }
    ],
    rule: 'The same paragraph letter can be the answer to more than one question.'
  },

  /* ── D Q10–13 Notes completion (NO MORE THAN TWO WORDS) ── */
  u17d3_10: {
    q: '10 Need to find plants which are not affected by ______',
    a: 'disease',
    why: 'Paragraph I: research aims at <em>establishing disease-resistant plants</em>. <em>Disease-resistant</em> means exactly "not affected by disease", so the gap takes the noun <em>disease</em>. The plural <em>diseases</em> is also accepted.',
    wrong: [
      { opt: 'disease-resistant', why: 'This copies the adjective straight from the passage, but after <em>affected by</em> the gap needs a noun.' },
      { opt: 'fungi', why: 'Fungi are named in paragraph G as the main cause, but the note paraphrases paragraph I, which uses the broader word <em>disease</em>.' },
      { opt: 'pests, pathogens and soil exhaustion', why: 'Five words, so it breaks the two-word limit — and it comes from paragraph F, which is about falling yields.' }
    ],
    rule: 'Change the word class to fit the gap: <em>disease-resistant</em> → <em>disease</em>.'
  },
  u17d3_11: {
    q: '11 Chocolate producers need to work directly with farmers instead of ______',
    a: 'local middlemen',
    why: 'Paragraph I: farmers are <em>at the mercy of local middlemen who buy the beans then sell them for a much higher price</em>, and <em>these people need to be removed from the process</em>. <em>Middlemen</em> on its own is also accepted.',
    wrong: [
      { opt: 'the local middlemen', why: 'Three words, over the limit. Drop articles when you are close to the word count.' },
      { opt: 'chocolate manufacturers', why: 'The manufacturers are the ones who should be dealing with farmers directly — they are the subject of the sentence, not the people being cut out.' },
      { opt: 'the rest of the chocolate business', why: 'Six words, and it refers to who takes the profits rather than who stands between producer and farmer.' }
    ],
    rule: 'Count the words before you write: "NO MORE THAN TWO" includes articles.'
  },
  u17d3_12: {
    q: '12 Need to encourage farmers to use ______ methods to grow cacao plants',
    a: 'sustainable',
    why: 'Paragraph I: companies must <em>ensure that sustainable farming practices are used</em>. The note already prints <em>methods</em>, which replaces <em>practices</em>, so the gap needs only the adjective. The key also accepts <em>sustainable farming</em>.',
    wrong: [
      { opt: 'sustainable farming practices', why: 'Three words, over the limit — and <em>practices</em> would duplicate <em>methods</em>, which is already printed after the gap.' },
      { opt: 'pioneer farming', why: 'Pioneer farming (paragraph F) is the problem being described — clearing fresh forest — not the method to be encouraged.' },
      { opt: 'disease-resistant', why: 'That belongs to question 10, about plants rather than farming methods.' }
    ],
    rule: 'Read the words printed after the gap — they tell you what part of speech to write.'
  },
  u17d3_13: {
    q: '13 Make sure farmers receive some of the ______ made by the chocolate industry',
    a: 'profits',
    why: 'Paragraph I: farmers <em>get a pittance for their beans compared with the profits reaped by the rest of the chocolate business</em>. The singular <em>profit</em> is also accepted.',
    wrong: [
      { opt: 'pittance', why: 'A pittance is the tiny amount farmers already receive, not the money the industry makes.' },
      { opt: 'higher price', why: 'A higher price is the mechanism suggested at the end of the paragraph, but the gap follows <em>some of the … made by the chocolate industry</em>, which points to profits.' },
      { opt: '$8.6 billion', why: 'That figure is from paragraph H and measures the size of the US industry, not what farmers should be paid.' }
    ],
    rule: 'Take the answer from the paragraph the note is paraphrasing.'
  },

  /* ── Grammar Focus Task (verbs from paragraph B) ── */
  u17gft_1: {
    q: 'If you ______ them from the pod with their pulp …',
    a: 'scoop',
    why: 'Zero conditional: the writer is describing what always happens, so the <em>if</em>-clause takes the present simple. The subject <em>you</em> takes the base form with no ending.',
    wrong: [
      { opt: 'scoops', why: '<em>You</em> never takes the <em>-s</em> ending.' },
      { opt: 'scooped', why: 'A past form would make the process imaginary; this is a set of instructions that works every time.' },
      { opt: 'will scoop', why: 'No <em>will</em> in an <em>if</em>-clause.' }
    ],
    rule: 'Instructions and processes: <em>if</em> + present simple.'
  },
  u17gft_2: {
    q: '… ______ them ferment and dry in the sun …',
    a: 'let',
    why: 'A second verb in the same <em>if</em>-clause, sharing the subject <em>you</em>: <em>if you scoop them …, let them ferment …</em>. It stays parallel with <em>scoop</em>, so present simple, base form.',
    wrong: [
      { opt: 'lets', why: 'The subject is still <em>you</em>, so no <em>-s</em>.' },
      { opt: 'letting', why: 'Verbs listed in the same clause keep the same simple form; an <em>-ing</em> form would need an auxiliary.' },
      { opt: 'will let', why: 'The <em>will</em> belongs in the result clause, not in the condition.' }
    ],
    rule: 'Coordinated verbs in one clause stay in the same tense and form.'
  },
  u17gft_3: {
    q: '… let them ferment and ______ in the sun …',
    a: 'dry',
    why: 'This is the second bare infinitive governed by <em>let them</em>: <em>let them [ferment and dry]</em>. <em>Let</em> is followed by an object and a bare infinitive, so the verb takes no ending and no <em>to</em>.',
    wrong: [
      { opt: 'to dry', why: 'After <em>let</em> English uses the bare infinitive: <em>let them dry</em>, never <s>let them to dry</s>.' },
      { opt: 'dries', why: 'The verb is controlled by <em>let</em>, not by a subject of its own, so it cannot take <em>-s</em>.' },
      { opt: 'drying', why: '<em>Let</em> does not take an <em>-ing</em> form — compare <em>let them ferment</em> just before the gap.' }
    ],
    rule: '<em>let</em> + object + bare infinitive: <em>let them ferment and dry</em>.'
  },
  u17gft_4: {
    q: '… then ______ them over a gentle fire …',
    a: 'roast',
    why: 'The third action in the <em>if</em>-clause, introduced by <em>then</em>. It is parallel with <em>scoop</em> and <em>let</em>, so it keeps the present simple base form.',
    wrong: [
      { opt: 'roasts', why: 'The subject is <em>you</em>, so no <em>-s</em>.' },
      { opt: 'roasted', why: 'A past form would break the parallel with the other verbs in the clause and make the process hypothetical.' },
      { opt: 'will roast', why: 'No <em>will</em> after <em>if</em>, however far the verb is from the word <em>if</em>.' }
    ],
    rule: 'A long <em>if</em>-clause can hold several verbs — keep them all present simple.'
  },
  u17gft_5: {
    q: '… something extraordinary ______.',
    a: 'happens',
    why: 'This is the result clause of the zero conditional, so it takes the present simple. The subject <em>something extraordinary</em> is singular, which is why the verb carries the <em>-s</em>.',
    wrong: [
      { opt: 'happen', why: '<em>Something</em> is singular, so the verb must agree: <em>happens</em>.' },
      { opt: 'will happen', why: 'A first conditional would predict one future occasion; the passage states what happens every time the beans are treated this way.' },
      { opt: 'is happening', why: 'The continuous describes an action in progress now, not a repeatable natural process.' }
    ],
    rule: 'Zero conditional result: present simple, agreeing with its subject.'
  },
  u17gft_6: {
    q: 'They ______ chocolatey.',
    a: 'become',
    why: 'The subject <em>they</em> refers to the beans, so the plural present simple takes the base form with no <em>-s</em>. The sentence continues the same general truth.',
    wrong: [
      { opt: 'becomes', why: '<em>They</em> is plural, so the <em>-s</em> ending is wrong.' },
      { opt: 'became', why: 'A past tense would place the change in history, but it happens whenever the process is followed.' },
      { opt: 'are becoming', why: 'The continuous would describe a change under way at this moment rather than a timeless result.' }
    ],
    rule: 'Present simple for a permanent, repeatable outcome.'
  },
  u17gft_7: {
    q: 'And if you then ______ and press the beans …',
    a: 'grind',
    why: 'A new <em>if</em>-clause, so the present simple returns. The subject <em>you</em> takes the base form.',
    wrong: [
      { opt: 'grinds', why: '<em>You</em> takes no <em>-s</em>.' },
      { opt: 'ground', why: '<em>Ground</em> is the past form of <em>grind</em>; an <em>if</em>-clause of this type needs the present.' },
      { opt: 'will grind', why: 'The <em>will</em> belongs in the result clause (<em>you will obtain…</em>), not after <em>if</em>.' }
    ],
    rule: 'Each new <em>if</em>-clause resets to the present simple.'
  },
  u17gft_8: {
    q: '… if you then grind and ______ the beans …',
    a: 'press',
    why: 'Coordinated with <em>grind</em> inside the same <em>if</em>-clause, so it takes exactly the same form: present simple, base form after <em>you</em>.',
    wrong: [
      { opt: 'presses', why: 'The shared subject is <em>you</em>, so no <em>-s</em>.' },
      { opt: 'pressed', why: 'A past form would break the parallel with <em>grind</em> in the same clause.' },
      { opt: 'pressing', why: 'The <em>-ing</em> form would need an auxiliary; here the verb simply mirrors <em>grind</em>.' }
    ],
    rule: 'Verbs joined by <em>and</em> must match in form.'
  },
  u17gft_9: {
    q: '… you ______ a rich, crumbly, chestnut brown paste.',
    a: 'will obtain',
    why: 'Here the passage shifts to a first conditional: the writer promises the reader a definite outcome, so the result clause takes <em>will</em> + base verb. <em>\'ll obtain</em> is the same answer contracted.',
    wrong: [
      { opt: 'obtain', why: 'The key follows the original passage, which reads <em>you will obtain</em>, so the plain present is not accepted here even though the earlier sentences use it.' },
      { opt: 'would obtain', why: '<em>Would</em> would make the outcome imaginary, but the writer is telling you what really results from the process.' },
      { opt: 'obtains', why: 'The subject is <em>you</em>, so there is no <em>-s</em> — and the key requires the <em>will</em> form.' }
    ],
    rule: 'A writer can move from zero to first conditional to promise the reader a result.'
  }
};
