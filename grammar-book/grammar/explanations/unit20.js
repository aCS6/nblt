/* Unit 20 — Relative clauses: explanations
   window.__EXPL[<data-id>] = { q, a, why, wrong:[{opt,why}], rule? }
   Rendered by initExplanations() in scripts/utils.js. */
window.__EXPL = {

  /* ── A3 Notes completion: "How to protect your home" (Track 28) ── */
  u20a3_1: {
    q: 'If you live in an area ______ a lot of tall trees, cut off overhanging or dead branches.',
    a: 'where there are',
    why: '<em>An area</em> is a place, so the relative pronoun is <em>where</em>. <em>Where</em> is a relative adverb, not a subject, so the clause still needs its own subject — hence <em>there are</em> after it.',
    wrong: [
      { opt: 'which there are', why: '<em>Which</em> would have to be the subject of the clause, but <em>there</em> is already doing that job. You would need the preposition too: <em>in which there are a lot of tall trees</em>.' },
      { opt: 'where are', why: 'This drops the subject. After <em>where</em> the clause must be complete: <em>where <strong>there</strong> are a lot of tall trees</em>.' },
      { opt: 'who have', why: '<em>Who</em> refers to people. An <em>area</em> is a place, so it takes <em>where</em>.' }
    ],
    rule: '<em>where</em> = places, and it never acts as the subject of the clause.'
  },
  u20a3_2: {
    q: 'Put away objects ______ damaging missiles.',
    a: 'that could become',
    why: '<em>Objects</em> are things, so the pronoun is <em>that</em> or <em>which</em> — both are accepted here. The pronoun is the subject of <em>could become</em>, which is why no other subject follows it.',
    wrong: [
      { opt: 'who could become', why: '<em>Who</em> is only used for people. <em>Objects</em> are things, so you need <em>that</em> or <em>which</em>.' },
      { opt: 'that they could become', why: 'Never add a second pronoun for the noun the clause already refers to: not <s>objects that they could become missiles</s>.' },
      { opt: 'could become', why: 'A defining relative clause can only lose its pronoun when the pronoun is the <strong>object</strong>. Here it is the subject, so it must stay.' }
    ],
    rule: 'Things → <em>which</em> or <em>that</em>; no extra pronoun inside the clause.'
  },
  u20a3_3: {
    q: 'If you are away for a long time then find someone ______ on your home for you.',
    a: 'that can check',
    why: '<em>Someone</em> is a person, so the pronoun is <em>who</em> or <em>that</em> — both are accepted. <em>Can</em> keeps the speaker\'s meaning of "is able to", and the pronoun is the subject of <em>can check</em>.',
    wrong: [
      { opt: 'whose can check', why: '<em>Whose</em> shows possession and must be followed by a noun (<em>someone whose job it is</em>), not by a verb.' },
      { opt: 'that can checking', why: 'After the modal <em>can</em> you need the bare infinitive: <em>can check</em>.' },
      { opt: 'who checks', why: 'Grammatically possible, but the recording says <em>can check</em>, and note completion is marked on the words actually spoken.' }
    ],
    rule: 'People → <em>who</em> or <em>that</em>; after a modal use the bare infinitive.'
  },
  u20a3_4: {
    q: 'Install lights ______ a timer so that it looks as though you are home.',
    a: 'which have',
    why: '<em>Lights</em> are things, so the pronoun is <em>which</em> or <em>that</em> — both are accepted. <em>Lights</em> is plural, so the verb is <em>have</em>, not <em>has</em>.',
    wrong: [
      { opt: 'which has', why: 'The pronoun stands for the plural <em>lights</em>, so the verb must be plural: <em>which have</em>.' },
      { opt: 'who have', why: '<em>Who</em> is for people only; lights are things.' },
      { opt: 'which they have', why: 'The relative pronoun already refers to <em>lights</em>, so <em>they</em> is a duplicate subject: not <s>lights which they have a timer</s>.' }
    ],
    rule: 'The relative verb agrees with the noun the pronoun refers back to.'
  },
  u20a3_5: {
    q: 'Find someone ______ your mail regularly.',
    a: 'who can collect',
    why: '<em>Someone</em> is a person, so <em>who</em> (or <em>that</em>) is correct, and the pronoun is the subject of <em>can collect</em>. Both <em>who can collect</em> and <em>that can collect</em> are accepted.',
    wrong: [
      { opt: 'which can collect', why: '<em>Which</em> refers to things. For a person use <em>who</em> or <em>that</em>.' },
      { opt: 'who can collecting', why: 'A modal verb is followed by the bare infinitive: <em>can collect</em>.' },
      { opt: 'whose collects', why: '<em>Whose</em> must be followed by a noun that is possessed, e.g. <em>someone whose car is free</em>.' }
    ],
    rule: 'Three words maximum — <em>who can collect</em> fits exactly.'
  },

  /* ── A4 Which pronoun refers to what ── */
  u20a4_1: {
    q: 'Which relative pronoun refers to a place?',
    a: 'where',
    why: '<em>Where</em> is the relative pronoun for places, as in answer 1: <em>an area <strong>where</strong> there are a lot of tall trees</em>.',
    wrong: [
      { opt: 'which', why: '<em>Which</em> refers to things. To talk about a place with <em>which</em> you need a preposition as well: <em>the area <strong>in which</strong> I live</em>.' },
      { opt: 'when', why: '<em>When</em> refers to times, not places: <em>a time when I\'m not busy</em>.' }
    ],
    rule: 'place → <em>where</em>; time → <em>when</em>; reason → <em>why</em>.'
  },
  u20a4_2: {
    q: 'Which relative pronouns are used to refer to people?',
    a: 'that and who',
    why: 'Answers 3 and 5 use <em>that/who can check</em> and <em>who can collect</em> for <em>someone</em>. <em>Who</em> is the pronoun for people and <em>that</em> is an everyday alternative, especially in speech.',
    wrong: [
      { opt: 'who and which', why: '<em>Which</em> is never used for people. The two options for people are <em>who</em> and <em>that</em>.' },
      { opt: 'who only', why: '<em>That</em> also refers to people in a defining clause — <em>find someone that can check on your home</em> — and is very common in spoken English.' }
    ],
    rule: '<em>that</em> can replace <em>who</em> or <em>which</em>, but only in defining clauses.'
  },
  u20a4_3: {
    q: 'Which relative pronouns are used to refer to things?',
    a: 'that and which',
    why: 'Answers 2 and 4 refer to <em>objects</em> and <em>lights</em>, and both accept <em>that</em> or <em>which</em>. These are the two pronouns for things.',
    wrong: [
      { opt: 'which and who', why: '<em>Who</em> only refers to people, so it cannot be one of the pronouns for things.' },
      { opt: 'that and what', why: '<em>What</em> is not a relative pronoun in standard English: not <s>the objects what I put away</s>.' }
    ],
    rule: 'Things → <em>which</em> or <em>that</em>; never <em>what</em>.'
  },

  /* ── C1 Match the beginnings and endings, and add the relative pronoun ── */
  u20c1_2p: {
    q: 'My cousin Phillip is a solicitor; he was the one ______ advised me to study law.',
    a: 'who',
    why: '<em>The one</em> stands for a person (Phillip), so the pronoun is <em>who</em>; <em>that</em> is equally accepted. It is the subject of <em>advised</em>.',
    wrong: [
      { opt: 'which', why: '<em>Which</em> refers to things, never to people.' },
      { opt: 'whom', why: '<em>Whom</em> is the object form. Here the pronoun does the advising, so it is the subject: <em>who advised me</em>.' },
      { opt: 'whose', why: '<em>Whose</em> shows possession and needs a noun after it: <em>the one whose advice I followed</em>.' }
    ],
    rule: '<em>the one who/that</em> is a very common pattern with defining relative clauses.'
  },
  u20c1_2e: {
    q: 'My cousin Phillip is a solicitor; he was the one …',
    a: 'e — advised me to study law.',
    why: 'Phillip is a solicitor — a lawyer — so advising someone to study law is exactly what fits. Ending (e) also has no subject of its own, which is what a subject relative pronoun needs.',
    wrong: [
      { opt: 'g — invented the first electric motor.', why: 'That belongs to Faraday in sentence 7; a solicitor is not an inventor.' },
      { opt: 'c — every student wants to have.', why: 'This ending already has its own subject (<em>every student</em>), so it needs an object pronoun, and it describes a teacher, not a solicitor.' }
    ],
    rule: 'Check meaning <strong>and</strong> whether the ending already has a subject.'
  },
  u20c1_3p: {
    q: 'I went to a school ______ didn\'t have very good sports facilities.',
    a: 'which',
    why: 'A <em>school</em> here is an institution — a thing — so the pronoun is <em>which</em> or <em>that</em>, and it is the subject of <em>didn\'t have</em>.',
    wrong: [
      { opt: 'where', why: 'Tempting, because a school is also a building — but <em>where</em> cannot be the subject, and the ending <em>didn\'t have very good sports facilities</em> has no other subject.' },
      { opt: 'who', why: '<em>Who</em> is for people. The school itself, not the people in it, lacked the facilities.' },
      { opt: 'whose', why: '<em>Whose</em> needs a noun after it: <em>a school whose sports facilities weren\'t very good</em>.' }
    ],
    rule: 'If the clause has no subject of its own, the pronoun must be a subject pronoun.'
  },
  u20c1_3e: {
    q: 'I went to a school …',
    a: 'i — didn\'t have very good sports facilities.',
    why: 'A school is the kind of place that has (or lacks) sports facilities, and the ending needs a subject, which the relative pronoun supplies.',
    wrong: [
      { opt: 'a — Mozart performed many of his operas.', why: 'This ending has its own subject (<em>Mozart</em>) and describes a place of performance, so it goes with <em>the theatre where…</em> in sentence 4.' },
      { opt: 'f — I\'m not as busy.', why: 'This describes a period of time, so it needs <em>a time when…</em> as in sentence 5.' }
    ]
  },
  u20c1_4p: {
    q: 'I visited the theatre ______ Mozart performed many of his operas.',
    a: 'where',
    why: 'A <em>theatre</em> is a place and the clause already has its own subject (<em>Mozart</em>), so the pronoun is the relative adverb <em>where</em> = "in which".',
    wrong: [
      { opt: 'which', why: '<em>Which</em> would need a preposition to express "in that place": <em>the theatre <strong>in which</strong> Mozart performed</em>, or <em>which Mozart performed in</em>.' },
      { opt: 'that', why: 'Same problem — <em>the theatre that Mozart performed many of his operas</em> is incomplete; you would need <em>…performed many of his operas <strong>in</strong></em>.' },
      { opt: 'when', why: '<em>When</em> refers to times. A theatre is a place.' }
    ],
    rule: '<em>where</em> already contains the preposition: <em>where</em> = <em>in/at which</em>.'
  },
  u20c1_4e: {
    q: 'I visited the theatre …',
    a: 'a — Mozart performed many of his operas.',
    why: 'A theatre is where operas are performed, and this ending has its own subject and object, so the missing element is the place — supplied by <em>where</em>.',
    wrong: [
      { opt: 'i — didn\'t have very good sports facilities.', why: 'Sports facilities belong to a school, and this ending needs a subject pronoun (<em>which/that</em>), not <em>where</em>.' },
      { opt: 'h — factory burned down yesterday?', why: '<em>Factory</em> here is a possessed noun, so it needs <em>whose</em> and a company as the head noun (sentence 9).' }
    ]
  },
  u20c1_5p: {
    q: 'Why don\'t you call again at a time ______ I\'m not as busy.',
    a: 'when',
    why: '<em>A time</em> is a time expression, so the relative pronoun is <em>when</em>; the key also accepts <em>that</em>. The clause already has its own subject (<em>I</em>).',
    wrong: [
      { opt: 'which', why: 'With <em>which</em> you would need a preposition: <em>at a time <strong>at which</strong> I\'m not as busy</em>.' },
      { opt: 'where', why: '<em>Where</em> refers to places, not to points in time.' },
      { opt: 'while', why: '<em>While</em> is a conjunction, not a relative pronoun, so it cannot link a clause to the noun <em>a time</em>.' }
    ],
    rule: 'time → <em>when</em>: <em>the day when</em>, <em>the moment when</em>, <em>a time when</em>.'
  },
  u20c1_5e: {
    q: 'Why don\'t you call again at a time …',
    a: 'f — I\'m not as busy.',
    why: '<em>At a time…</em> needs an ending that describes a period, and <em>I\'m not as busy</em> does exactly that. The comparison <em>as busy</em> also points back to the busy moment of the call.',
    wrong: [
      { opt: 'c — every student wants to have.', why: 'You cannot "have" a time in this sense; this ending describes the kind of teacher in sentence 6.' },
      { opt: 'j — manufacturers like to keep demand above supply?', why: 'This is an explanation, so it needs <em>any reason why…</em> in sentence 8.' }
    ]
  },
  u20c1_6p: {
    q: 'Mrs Jackson is the kind of teacher ______ every student wants to have.',
    a: 'which',
    why: 'The noun the clause identifies is <em>the kind</em> — a thing — so the key takes <em>which</em> or <em>that</em>. The pronoun is the <strong>object</strong> of <em>wants to have</em>, because the clause already has the subject <em>every student</em>.',
    wrong: [
      { opt: 'who', why: 'The head noun in the key is <em>the kind</em>, not <em>teacher</em>, so it is treated as a thing and takes <em>which/that</em>.' },
      { opt: 'whose', why: '<em>Whose</em> must be followed by the thing possessed: <em>a teacher whose lessons everyone enjoys</em>.' },
      { opt: 'what', why: '<em>What</em> is not a relative pronoun in standard English: not <s>the kind of teacher what every student wants</s>.' }
    ],
    rule: 'Look for the real head noun — here it is <em>kind</em>, not <em>teacher</em>.'
  },
  u20c1_6e: {
    q: 'Mrs Jackson is the kind of teacher …',
    a: 'c — every student wants to have.',
    why: 'Only this ending both makes sense about a teacher and already contains a subject (<em>every student</em>) and a verb needing an object — which the relative pronoun supplies.',
    wrong: [
      { opt: 'e — advised me to study law.', why: 'This has no subject of its own, so it would make the pronoun a subject; it also describes the solicitor in sentence 2.' },
      { opt: 'i — didn\'t have very good sports facilities.', why: 'Facilities belong to the school in sentence 3, not to a person.' }
    ]
  },
  u20c1_7p: {
    q: 'Faraday was the man ______ invented the first electric motor.',
    a: 'who',
    why: '<em>The man</em> is a person, so the pronoun is <em>who</em> (or <em>that</em>), and it is the subject of <em>invented</em>.',
    wrong: [
      { opt: 'which', why: '<em>Which</em> cannot refer to a person.' },
      { opt: 'whom', why: 'The pronoun does the inventing, so it is the subject. <em>Whom</em> is only used for the object: <em>the man whom we met</em>.' },
      { opt: 'whose', why: '<em>Whose</em> needs a possessed noun after it: <em>the man whose invention changed the world</em>.' }
    ],
    rule: 'Subject pronoun for people: <em>who</em>/<em>that</em>, never <em>whom</em>.'
  },
  u20c1_7e: {
    q: 'Faraday was the man …',
    a: 'g — invented the first electric motor.',
    why: 'Faraday was a scientist, so the invention ending fits the meaning, and it has no subject of its own, which suits the subject pronoun <em>who</em>.',
    wrong: [
      { opt: 'e — advised me to study law.', why: 'That is the solicitor cousin in sentence 2.' },
      { opt: 'b — flat I rent.', why: '<em>Flat</em> is a possessed noun, so it needs <em>whose</em> and a person who owns the flat (sentence 10).' }
    ]
  },
  u20c1_8p: {
    q: 'Is there any reason ______ manufacturers like to keep demand above supply?',
    a: 'why',
    why: 'After <em>reason</em> the relative pronoun is <em>why</em>, which links the noun to an explanation. The clause already has its own subject (<em>manufacturers</em>).',
    wrong: [
      { opt: 'which', why: '<em>Which</em> has no job in this clause — the clause already has a subject and an object — so the sentence would be ungrammatical.' },
      { opt: 'because', why: '<em>Because</em> is a conjunction, not a relative pronoun, and it cannot follow the noun <em>reason</em> in this pattern.' },
      { opt: 'when', why: '<em>When</em> refers to times. <em>Reason</em> calls for <em>why</em>.' }
    ],
    rule: '<em>the reason why</em> — the pronoun for reasons.'
  },
  u20c1_8e: {
    q: 'Is there any reason …',
    a: 'j — manufacturers like to keep demand above supply?',
    why: 'This ending states a business practice that someone might want explained, so it fits <em>Is there any reason why…?</em> The question mark on the ending also matches the question stem.',
    wrong: [
      { opt: 'h — factory burned down yesterday?', why: 'Also a question, which makes it tempting, but <em>factory</em> is a possessed noun and belongs with <em>that company whose…</em> in sentence 9.' },
      { opt: 'f — I\'m not as busy.', why: 'This describes a time, not a reason.' }
    ]
  },
  u20c1_9p: {
    q: 'What was the name of that company ______ factory burned down yesterday?',
    a: 'whose',
    why: 'The factory belongs to the company, and possession is expressed by <em>whose</em>. <em>Whose</em> is always followed directly by the noun that is owned — here <em>factory</em>.',
    wrong: [
      { opt: 'which', why: '<em>Which</em> cannot show possession: not <s>that company which factory burned down</s>. You would have to say <em>the factory of which</em>.' },
      { opt: 'who\'s', why: '<em>Who\'s</em> is the contraction of <em>who is</em>, so it means something quite different, and a company is not a person.' },
      { opt: 'that', why: '<em>That</em> has no possessive meaning, so it leaves <em>factory</em> with nothing to connect it to <em>company</em>.' }
    ],
    rule: '<em>whose</em> works for things and organisations too, not just people.'
  },
  u20c1_9e: {
    q: 'What was the name of that company …',
    a: 'h — factory burned down yesterday?',
    why: 'A company can own a factory, so <em>whose factory</em> links the two. The ending begins with a bare noun, which is the signal that <em>whose</em> is needed.',
    wrong: [
      { opt: 'b — flat I rent.', why: 'Also a <em>whose</em> ending, but a company does not normally rent you a flat — this one belongs to <em>the woman</em> in sentence 10.' },
      { opt: 'j — manufacturers like to keep demand above supply?', why: 'This explains a practice, so it needs <em>reason why</em> in sentence 8.' }
    ],
    rule: 'An ending that starts with a bare noun almost always needs <em>whose</em>.'
  },
  u20c1_10p: {
    q: 'That\'s the woman ______ flat I rent.',
    a: 'whose',
    why: 'The flat belongs to the woman, so possession is shown by <em>whose</em> followed directly by <em>flat</em>.',
    wrong: [
      { opt: 'who', why: '<em>Who</em> cannot show possession: not <s>the woman who flat I rent</s>.' },
      { opt: 'which', why: '<em>Which</em> is for things, and it cannot express possession either.' },
      { opt: 'that', why: '<em>That</em> would make the sentence mean the woman herself is rented, which is nonsense; possession needs <em>whose</em>.' }
    ],
    rule: '<em>whose</em> + noun = possession, for people and things alike.'
  },
  u20c1_10e: {
    q: 'That\'s the woman …',
    a: 'b — flat I rent.',
    why: 'A woman can own a flat that you rent from her, and the bare noun <em>flat</em> at the start of the ending shows that a possessive pronoun is needed.',
    wrong: [
      { opt: 'h — factory burned down yesterday?', why: 'A factory belongs to the company in sentence 9, and this ending is a question, which does not match the statement <em>That\'s the woman…</em>' },
      { opt: 'e — advised me to study law.', why: 'That ending goes with <em>the one who…</em> in sentence 2.' }
    ]
  },
  u20c1_omit: {
    q: 'In which two sentences can the relative pronoun be left out?',
    a: '6 and 8',
    why: 'In 6 the pronoun is the <strong>object</strong> of <em>wants to have</em> (<em>the kind of teacher every student wants to have</em>), and in 8 <em>why</em> after <em>reason</em> is routinely dropped (<em>Is there any reason manufacturers like to keep demand above supply?</em>). In every other sentence the pronoun is doing work that cannot be left out.',
    wrong: [
      { opt: '2 and 7', why: 'In both, the pronoun is the <strong>subject</strong> of the clause (<em>who advised</em>, <em>who invented</em>), and a subject pronoun can never be omitted.' },
      { opt: '9 and 10', why: '<em>Whose</em> can never be left out — the possessive link between the two nouns would disappear.' },
      { opt: '4 and 5', why: '<em>Where</em> in 4 carries the meaning "in which" and must stay; in 5 the pronoun is not the object of a verb, so the rule taught in B2 does not license dropping it.' }
    ],
    rule: 'Leave out the pronoun only when it is the object of a defining relative clause.'
  },

  /* ── C2 Rewrite using non-defining relative clauses ── */
  u20c2_2: {
    q: 'Some students take a year out before university. This allows them to work or travel. → Some students ______',
    a: 'take a year out before university, which allows them to work or travel',
    why: '<em>This</em> in the second sentence refers to the whole idea of taking a year out, and only <em>which</em> can refer back to a whole clause. A comma separates the non-defining clause from the main clause.',
    wrong: [
      { opt: 'take a year out before university, that allows them to work or travel', why: '<em>That</em> is never used in a non-defining relative clause — see B3.' },
      { opt: 'take a year out before university which allows them to work or travel', why: 'Without the comma this reads as a defining clause, i.e. only the kind of year out that lets you work or travel. The comma is what makes it extra information.' },
      { opt: 'take a year out before university, which it allows them to work or travel', why: '<em>Which</em> is already the subject, so <em>it</em> is a duplicate subject.' }
    ],
    rule: '<em>which</em> can refer to a whole clause; <em>that</em> and <em>who</em> cannot.'
  },
  u20c2_3: {
    q: 'The Guggenheim Museum is in Bilbao. It only displays contemporary art. → The Guggenheim Museum, ______',
    a: 'which is in Bilbao, only displays contemporary art',
    why: 'There is only one Guggenheim Museum in Bilbao, so the location is extra information: a non-defining clause with <em>which</em>, closed off by a second comma before the main verb. (Swapping the two pieces of information round is also accepted.)',
    wrong: [
      { opt: 'that is in Bilbao, only displays contemporary art', why: '<em>That</em> cannot introduce a non-defining clause.' },
      { opt: 'which is in Bilbao only displays contemporary art', why: 'A non-defining clause in the middle of a sentence needs <strong>two</strong> commas — one before and one after.' },
      { opt: 'where is in Bilbao, only displays contemporary art', why: '<em>Where</em> cannot be the subject of <em>is</em>. You could say <em>which is in Bilbao</em> or <em>where contemporary art is displayed</em>, but not this.' }
    ],
    rule: 'A non-defining clause in mid-sentence is fenced in by a comma on each side.'
  },
  u20c2_4: {
    q: 'My English teacher is leaving. His lectures are very interesting. → My English teacher, ______',
    a: 'whose lectures are very interesting, is leaving',
    why: '<em>His lectures</em> becomes <em>whose lectures</em>: the possessive pronoun turns into the relative possessive. The clause is extra information about a teacher we can already identify, so it takes commas.',
    wrong: [
      { opt: 'who lectures are very interesting, is leaving', why: '<em>Who</em> cannot express possession — the link to <em>lectures</em> would be lost.' },
      { opt: 'who\'s lectures are very interesting, is leaving', why: '<em>Who\'s</em> means <em>who is</em>. The possessive form has no apostrophe: <em>whose</em>.' },
      { opt: 'whose lectures are very interesting is leaving', why: 'The second comma is missing; without it the reader cannot see where the extra information ends.' }
    ],
    rule: 'his/her/its/their + noun → <em>whose</em> + noun.'
  },
  u20c2_5: {
    q: 'The lecture was about current economic policy. It was not very easy to understand. → The lecture ______',
    a: ', which was about current economic policy, was not very easy to understand',
    why: 'The lecture is already identified, so the topic is extra information: <em>which</em> plus a comma on each side. The clause is dropped into the middle of the sentence, between the subject and its verb. (Putting the two pieces of information the other way round is also accepted.)',
    wrong: [
      { opt: ', that was about current economic policy, was not very easy to understand', why: '<em>That</em> is not used in non-defining clauses.' },
      { opt: 'which was about current economic policy was not very easy to understand', why: 'With no commas this becomes a defining clause, implying there were other lectures on other topics — and the sentence is hard to read.' },
      { opt: ', which it was about current economic policy, was not very easy to understand', why: '<em>Which</em> already stands for <em>the lecture</em>, so <em>it</em> repeats the subject.' }
    ],
    rule: 'Non-defining clauses are commoner in writing — and they must be punctuated.'
  },
  u20c2_6: {
    q: 'In 1951 my parents arrived in New York. They stayed there for the rest of their lives. → My parents arrived in New York ______',
    a: 'in 1951, where they stayed for the rest of their lives',
    why: '<em>There</em> in the second sentence refers to New York, a place, so it becomes <em>where</em>. New York is already identified, so the clause is non-defining and takes a comma.',
    wrong: [
      { opt: 'in 1951, which they stayed for the rest of their lives', why: '<em>Which</em> would need a preposition: <em>in which they stayed</em>. <em>Where</em> already includes it.' },
      { opt: 'in 1951, where they stayed there for the rest of their lives', why: '<em>Where</em> replaces <em>there</em>, so keeping <em>there</em> says the same thing twice.' },
      { opt: 'in 1951, that they stayed for the rest of their lives', why: '<em>That</em> is banned in non-defining clauses, and it cannot mean "in that place" either.' }
    ],
    rule: '<em>there</em> in the second sentence is the clue that you need <em>where</em>.'
  },
  u20c2_7: {
    q: 'I gave my assignment to the faculty secretary. She was not very friendly. → I gave my assignment ______',
    a: 'to the faculty secretary, who was not very friendly',
    why: '<em>She</em> refers to a person, so the pronoun is <em>who</em>. There is only one faculty secretary, so her manner is extra information and the clause takes a comma.',
    wrong: [
      { opt: 'to the faculty secretary, which was not very friendly', why: '<em>Which</em> is never used for people.' },
      { opt: 'to the faculty secretary, that was not very friendly', why: '<em>That</em> cannot be used in a non-defining clause.' },
      { opt: 'to the faculty secretary who was not very friendly', why: 'Without the comma this defines <strong>which</strong> secretary you mean, suggesting there is a friendly one as well.' }
    ],
    rule: 'One comma is enough when the clause ends the sentence.'
  },

  /* ── C3 Correct the relative-clause mistake in each email extract ── */
  u20c3_2: {
    q: '… the language courses which I saw them advertised in The Daily Star yesterday.',
    a: 'which I saw advertised',
    why: '<em>Which</em> is already the object of <em>saw</em>, so <em>them</em> repeats the object. Delete it: <em>the language courses which I saw advertised…</em> (<em>that</em>, or no pronoun at all, would also be correct here.)',
    wrong: [
      { opt: 'that I saw them advertised', why: 'Swapping the pronoun does not fix anything — the duplicated object <em>them</em> is still there.' },
      { opt: 'who I saw advertised', why: '<em>Who</em> is for people; <em>courses</em> are things.' },
      { opt: 'which them I saw advertised', why: 'Moving <em>them</em> does not help. The extra object pronoun has to be deleted altogether.' }
    ],
    rule: 'Never repeat the noun with a pronoun inside the relative clause.'
  },
  u20c3_3: {
    q: 'I\'m finding my new job exhausting, that is not surprising considering I have to travel so much.',
    a: 'exhausting, which is not surprising',
    why: 'The pronoun refers back to the whole idea "my new job is exhausting", and this is a non-defining clause after a comma — so it must be <em>which</em>. <em>That</em> is not used in non-defining clauses at all.',
    wrong: [
      { opt: 'exhausting, that is not surprising', why: 'This is the original mistake: <em>that</em> can never follow the comma of a non-defining clause.' },
      { opt: 'exhausting which is not surprising', why: 'Deleting the comma does not solve it — a clause referring back to a whole idea is always non-defining and needs the comma.' },
      { opt: 'exhausting, what is not surprising', why: '<em>What</em> is not a relative pronoun in standard English.' }
    ],
    rule: 'Only <em>which</em> can refer back to a whole clause.'
  },
  u20c3_4: {
    q: 'I really enjoyed the lecture which you gave it on Wednesday …',
    a: 'the lecture which you gave on Wednesday',
    why: '<em>Which</em> is the object of <em>gave</em>, so <em>it</em> is a second object for the same verb. Delete <em>it</em>. (Because the pronoun is the object, you could also drop <em>which</em> entirely: <em>the lecture you gave on Wednesday</em>.)',
    wrong: [
      { opt: 'the lecture that you gave it on Wednesday', why: 'The pronoun choice was never the problem — <em>it</em> still duplicates the object.' },
      { opt: 'the lecture what you gave on Wednesday', why: '<em>What</em> cannot introduce a relative clause.' },
      { opt: 'the lecture, which you gave on Wednesday', why: 'The comma would make it extra information, but the clause is needed to say which lecture is meant.' }
    ],
    rule: 'An object relative pronoun can be left out — but never doubled.'
  },
  u20c3_5: {
    q: 'It\'s the one which in you have written your lecture notes.',
    a: 'the one which you have written your lecture notes in',
    why: 'A preposition cannot sit between the relative pronoun and the rest of the clause. In everyday English it goes to the end of the clause: <em>which you have written your lecture notes <strong>in</strong></em>. The formal alternative <em>in which you have written your lecture notes</em> is also accepted.',
    wrong: [
      { opt: 'the one which in you have written your lecture notes', why: 'The original word order. <em>Which in</em> is not a possible sequence in English.' },
      { opt: 'the one in that you have written your lecture notes', why: '<em>That</em> can never follow a preposition — only <em>which</em> and <em>whom</em> can.' },
      { opt: 'the one which you have written your lecture notes', why: 'Dropping <em>in</em> leaves <em>which</em> with no job in the clause, which already has a subject and an object.' }
    ],
    rule: 'Preposition at the end (informal) or before <em>which/whom</em> (formal) — never in between.'
  },
  u20c3_6: {
    q: 'I\'ve got today\'s newspaper which has a list of films.',
    a: 'today\'s newspaper, which has a list of films',
    why: '<em>Today\'s newspaper</em> is already fully identified, so the clause can only add extra information — and non-defining clauses must be separated by a comma.',
    wrong: [
      { opt: 'today\'s newspaper that has a list of films', why: 'This makes it worse: the clause is non-defining, and <em>that</em> is not allowed there. The comma is still missing too.' },
      { opt: 'today\'s newspaper, that has a list of films', why: 'The comma is right but <em>that</em> is still impossible in a non-defining clause.' },
      { opt: 'today\'s newspaper, which it has a list of films', why: '<em>Which</em> is the subject of <em>has</em>, so <em>it</em> is a duplicate subject.' }
    ],
    rule: 'A uniquely identified noun can only take a non-defining clause — so use a comma.'
  },
  u20c3_7: {
    q: 'I want some of those bread rolls what we had last week.',
    a: 'those bread rolls which we had',
    why: '<em>What</em> is not a relative pronoun in standard English. <em>Bread rolls</em> are things, so use <em>which</em> or <em>that</em> — and since the pronoun is the object of <em>had</em>, you could leave it out altogether.',
    wrong: [
      { opt: 'those bread rolls what we had last week', why: 'The original error. <em>What</em> only introduces noun clauses (<em>I know what you mean</em>), never relative clauses.' },
      { opt: 'those bread rolls who we had', why: '<em>Who</em> is for people. Rolls are things.' },
      { opt: 'those bread rolls, which we had last week', why: 'The comma turns it into extra information, but the clause is what identifies which rolls the writer wants.' }
    ],
    rule: 'Things → <em>which</em>/<em>that</em>; <em>what</em> is never a relative pronoun.'
  },
  u20c3_8: {
    q: 'You are clearly a person who life is full and busy …',
    a: 'a person whose life is full',
    why: 'The life belongs to the person, and possession inside a relative clause is expressed by <em>whose</em> + the noun owned: <em>a person <strong>whose life</strong> is full and busy</em>.',
    wrong: [
      { opt: 'a person who\'s life is full', why: '<em>Who\'s</em> is the contraction of <em>who is</em>. The possessive relative pronoun is <em>whose</em>, with no apostrophe.' },
      { opt: 'a person which life is full', why: '<em>Which</em> is not used for people, and it cannot show possession either.' },
      { opt: 'a person that life is full', why: '<em>That</em> would have no role in the clause — <em>life</em> already has one — so the possessive link is lost.' }
    ],
    rule: 'The commonest <em>whose</em> mistake is writing <em>who\'s</em>: check whether "who is" makes sense.'
  },

  /* ── C4 How chocolate is made: pronoun + clause letter ── */
  u20c4_2p: {
    q: '… cocoa, which is made from the cream-coloured beans ______ grow in pods on the cacao tree.',
    a: 'which',
    why: '<em>Beans</em> are things, so the pronoun is <em>which</em> or <em>that</em> — both are accepted. There is no comma, so this is a defining clause telling us which beans are meant, and the pronoun is the subject of <em>grow</em>.',
    wrong: [
      { opt: 'who', why: '<em>Who</em> is only for people.' },
      { opt: 'where', why: 'Beans are not a place, and <em>where</em> could not be the subject of <em>grow</em>.' },
      { opt: 'whose', why: '<em>Whose</em> must be followed by the noun that is owned, e.g. <em>beans whose shells are removed</em>.' }
    ]
  },
  u20c4_2e: {
    q: '… the cream-coloured beans ______',
    a: 'i — … grow in pods on the cacao tree',
    why: 'The plural verb <em>grow</em> agrees with the plural <em>beans</em>, and the passage goes on to describe removing the beans from the pods — so the pods have to be introduced here.',
    wrong: [
      { opt: 'e — … grows in equatorial regions such as South America, Africa and Indonesia', why: 'The singular verb <em>grows</em> shows this refers to <em>the cacao tree</em> (gap 3), not to the plural <em>beans</em>.' },
      { opt: 'c — … are left for several days to dry', why: 'Drying happens after harvesting, which is gap 5. Here the beans are still on the tree.' }
    ],
    rule: 'Subject–verb agreement inside the clause tells you which noun it belongs to.'
  },
  u20c4_3p: {
    q: 'The cacao tree, ______ grows in equatorial regions …, produces a fruit about the size of a small pineapple.',
    a: 'which',
    why: 'The clause sits between two commas, so it is non-defining and adds extra information about the cacao tree — and non-defining clauses take <em>which</em> for things. (The book\'s key also lets <em>that</em> pass here, but <em>which</em> is the form to learn.)',
    wrong: [
      { opt: 'who', why: 'A tree is a thing, not a person.' },
      { opt: 'where', why: 'The tree is not the place; the regions are. <em>Where</em> also could not be the subject of <em>grows</em>.' },
      { opt: 'whose', why: '<em>Whose</em> needs a possessed noun after it: <em>the cacao tree, whose seeds become cocoa,…</em>' }
    ],
    rule: 'Between commas → non-defining → <em>which</em>, not <em>that</em>.'
  },
  u20c4_3e: {
    q: 'The cacao tree, ______, produces a fruit about the size of a small pineapple.',
    a: 'e — … grows in equatorial regions such as South America, Africa and Indonesia',
    why: 'The singular verb <em>grows</em> matches the singular <em>the cacao tree</em>, and where the tree grows is exactly the kind of background detail a non-defining clause adds.',
    wrong: [
      { opt: 'i — … grow in pods on the cacao tree', why: 'The plural <em>grow</em> does not agree with <em>tree</em>, and the tree cannot grow in pods on itself.' },
      { opt: 'f — … forms a solid at about room temperature', why: 'That describes the chocolate liquor much later in the process (gap 7).' }
    ]
  },
  u20c4_4p: {
    q: '… a fruit about the size of a small pineapple, inside ______ are the tree\'s seeds.',
    a: 'which',
    why: 'The preposition <em>inside</em> comes before the pronoun, and only <em>which</em> (or <em>whom</em> for people) can follow a preposition. The clause is also non-defining, which rules out <em>that</em> a second time.',
    wrong: [
      { opt: 'that', why: '<em>That</em> can never follow a preposition, and it is not used in non-defining clauses.' },
      { opt: 'where', why: '<em>Inside where</em> is not possible — <em>inside</em> already supplies the idea of place, so it needs <em>which</em> after it.' },
      { opt: 'whose', why: 'The seeds are inside the fruit rather than belonging to it in the <em>whose</em> sense; and <em>whose</em> cannot follow a preposition like this.' }
    ],
    rule: 'preposition + <em>which</em>/<em>whom</em> — never preposition + <em>that</em>.'
  },
  u20c4_4e: {
    q: '… a fruit about the size of a small pineapple, ______',
    a: 'h — inside … are the tree\'s seeds',
    why: 'This is the only ending that starts with a preposition, which is the clue that it belongs to the gap needing <em>inside which</em>. It also fits the meaning: the seeds are inside the fruit, and they become the beans.',
    wrong: [
      { opt: 'a — … is removed by using presses', why: 'That describes the cocoa butter being pressed out of the liquor (gap 8), which happens in the factory.' },
      { opt: 'c — … are left for several days to dry', why: 'Drying comes after the beans have been taken out of the pods (gap 5).' }
    ]
  },
  u20c4_5p: {
    q: '… the cocoa beans are removed from the pods and piled in heaps ______ are left for several days to dry.',
    a: 'which',
    why: '<em>Heaps</em> are things, so <em>which</em> or <em>that</em> — both accepted. The pronoun is the subject of the passive verb <em>are left</em>, and there is no comma, so the clause defines what happens to those heaps.',
    wrong: [
      { opt: 'where', why: 'Tempting because <em>heaps</em> sounds like a location, but <em>where</em> cannot be the subject, and <em>are left for several days</em> has no other subject.' },
      { opt: 'who', why: 'Only for people.' },
      { opt: 'whose', why: 'Nothing is being possessed here, and <em>whose</em> must be followed by a noun.' }
    ]
  },
  u20c4_5e: {
    q: '… piled in heaps ______',
    a: 'c — … are left for several days to dry',
    why: 'The plural <em>are left</em> agrees with <em>heaps</em>, and the next sentence begins <em>The dried beans…</em>, which confirms drying has just been described.',
    wrong: [
      { opt: 'b — … they are sorted and roasted', why: 'This ending has its own subject <em>they</em>, so it needs <em>where</em> and a place — the factories in gap 6.' },
      { opt: 'a — … is removed by using presses', why: 'The singular <em>is</em> does not agree with <em>heaps</em>, and pressing happens in the factory.' }
    ],
    rule: 'Use the following sentence to confirm your answer — here, <em>the dried beans</em>.'
  },
  u20c4_6p: {
    q: 'The dried beans are then transported to factories ______ they are sorted and roasted.',
    a: 'where',
    why: '<em>Factories</em> are places and the clause already has its own subject (<em>they</em> = the beans), so the pronoun must be the relative adverb <em>where</em>, meaning "in which".',
    wrong: [
      { opt: 'which', why: 'The clause already has the subject <em>they</em>, so <em>which</em> would have no job unless you added a preposition: <em>in which they are sorted</em>.' },
      { opt: 'that', why: 'Same problem, and <em>that</em> cannot carry the "in that place" meaning on its own.' },
      { opt: 'who', why: 'Factories are things, not people.' }
    ],
    rule: 'If the clause already has a subject and describes a place, use <em>where</em>.'
  },
  u20c4_6e: {
    q: '… transported to factories ______',
    a: 'b — … they are sorted and roasted',
    why: 'This is the only ending with a subject of its own (<em>they</em>), so it must go with <em>where</em>. Sorting and roasting are also factory processes, which matches the noun.',
    wrong: [
      { opt: 'c — … are left for several days to dry', why: 'This has no subject, so it needs <em>which/that</em>, and drying happens before transport (gap 5).' },
      { opt: 'd — … can be used to make a hot chocolate drink', why: 'That describes the finished cocoa powder at the very end of the process (gap 9).' }
    ]
  },
  u20c4_7p: {
    q: '… the beans are ground into chocolate liquor – a thick brown liquid ______ forms a solid at about room temperature.',
    a: 'which',
    why: '<em>A thick brown liquid</em> is a thing, so <em>which</em> or <em>that</em> — both accepted. There is no comma, and the pronoun is the subject of <em>forms</em>.',
    wrong: [
      { opt: 'who', why: 'Only for people.' },
      { opt: 'where', why: 'A liquid is not a place, and <em>where</em> could not be the subject of <em>forms</em>.' },
      { opt: 'whose', why: '<em>Whose</em> would need a noun after it, e.g. <em>a liquid whose fat content is high</em>.' }
    ]
  },
  u20c4_7e: {
    q: '… a thick brown liquid ______',
    a: 'f — … forms a solid at about room temperature',
    why: 'The contrast between <em>liquid</em> and <em>forms a solid</em> is the link, and the singular verb <em>forms</em> agrees with the singular <em>liquid</em>.',
    wrong: [
      { opt: 'a — … is removed by using presses', why: 'What is pressed out is the cocoa butter mentioned in the next sentence (gap 8), not the liquor itself.' },
      { opt: 'd — … can be used to make a hot chocolate drink', why: 'That belongs to the powder at the end of the process (gap 9).' }
    ]
  },
  u20c4_8p: {
    q: 'This liquor contains a high percentage of fat (cocoa butter), ______ is removed by using presses.',
    a: 'which',
    why: 'The comma makes this non-defining — extra information about the cocoa butter — and non-defining clauses about things always take <em>which</em>.',
    wrong: [
      { opt: 'that', why: '<em>That</em> is not used in non-defining relative clauses, so the comma rules it out.' },
      { opt: 'where', why: 'Cocoa butter is a substance, not a place.' },
      { opt: 'who', why: 'Only for people.' }
    ],
    rule: 'Comma before the pronoun → <em>which</em>, never <em>that</em>.'
  },
  u20c4_8e: {
    q: 'This liquor contains a high percentage of fat (cocoa butter), ______',
    a: 'a — … is removed by using presses',
    why: 'The next sentence starts <em>The solid block of cocoa that remains</em>, which only makes sense if the fat has just been taken out. The singular <em>is removed</em> also agrees with <em>fat</em>.',
    wrong: [
      { opt: 'f — … forms a solid at about room temperature', why: 'That describes the liquor in gap 7, not the fat that is pressed out of it.' },
      { opt: 'c — … are left for several days to dry', why: 'Plural verb, and drying is a step that happened much earlier, before transport.' }
    ]
  },
  u20c4_9p: {
    q: 'The solid block of cocoa that remains is then made into a powder ______ can be used to make a hot chocolate drink.',
    a: 'which',
    why: '<em>Powder</em> is a thing, so <em>which</em> or <em>that</em> — both accepted. There is no comma, so the clause defines what this powder is for, and the pronoun is the subject of <em>can be used</em>.',
    wrong: [
      { opt: 'who', why: 'Only for people.' },
      { opt: 'where', why: 'Powder is not a place, and <em>where</em> cannot be a subject.' },
      { opt: 'what', why: '<em>What</em> is never a relative pronoun in standard English.' }
    ]
  },
  u20c4_9e: {
    q: '… made into a powder ______',
    a: 'd — … can be used to make a hot chocolate drink',
    why: 'Cocoa powder is what you make a hot chocolate drink from, and the sentence then contrasts this route with mixing the cocoa back with butter and sugar to make solid chocolate.',
    wrong: [
      { opt: 'f — … forms a solid at about room temperature', why: 'That was said of the chocolate liquor in gap 7; a powder is already solid.' },
      { opt: 'a — … is removed by using presses', why: 'The pressing has already happened — it is the fat that is removed, in gap 8.' }
    ]
  },

  /* ── D Questions 1–4 Sentence completion (Robotic approach to crop breeding) ── */
  u20d1_1: {
    q: 'In terms of our health, sunflowers are important in defending humans against ______.',
    a: 'heart disease',
    why: 'Paragraph A says the fatty acid from sunflowers is <em>most able to protect against heart disease</em>. <em>Defending against</em> paraphrases <em>protect against</em>, and <em>heart disease</em> is exactly two words.',
    wrong: [
      { opt: 'polyunsaturated fatty acids', why: 'That is the helpful substance, not the health problem the sentence asks about — and it breaks the two-word limit.' },
      { opt: 'disease', why: 'Too vague. The passage names the specific condition, and you should copy it in full.' },
      { opt: 'drought', why: 'Drought is the problem for the plants, not for human health. Watch which half of the passage the question is about.' }
    ],
    rule: 'Decide what type of answer you need — here, a named illness.'
  },
  u20d1_2: {
    q: 'The research team wanted to find a sunflower that could cope well in ______ conditions.',
    a: 'drought',
    why: 'Paragraph B says the project <em>aims to develop more drought-tolerant sunflowers</em>. <em>Drought-tolerant</em> = <em>able to cope well in drought conditions</em>, so the gap takes the noun <em>drought</em>.',
    wrong: [
      { opt: 'drought-tolerant', why: 'That adjective describes the sunflower, not the conditions. <em>Drought-tolerant conditions</em> does not make sense.' },
      { opt: 'harsh climate', why: 'It comes from paragraph A and is about Australia in general; the team\'s specific target is drought.' },
      { opt: 'dry', why: 'The instruction says the words must be <strong>taken from the passage</strong>, and <em>dry</em> does not appear in this sense.' }
    ],
    rule: 'Change the word class if the gap needs it — adjective in the text, noun in the gap.'
  },
  u20d1_3: {
    q: 'The name of the process which is believed to help keep plants in good condition is ______.',
    a: 'transpiration',
    why: 'Paragraph C defines transpiration and then says <em>This system is thought to facilitate the passage of minerals … and is vital for healthy plants</em>. <em>Is thought to</em> matches <em>is believed to</em>, and <em>vital for healthy plants</em> matches <em>keep plants in good condition</em>.',
    wrong: [
      { opt: 'photosynthesis', why: 'Photosynthesis is described as producing energy, not as the system that is thought to keep plants healthy.' },
      { opt: 'stomata', why: 'Stomata are the pores that let carbon dioxide in — a body part, not a process.' },
      { opt: 'transpiration efficiency', why: 'That is a measure of how well a plant uses water (paragraph D), not the name of the process itself.' }
    ],
    rule: '"Is believed to" in the question signals a hedged verb in the text: <em>is thought to</em>.'
  },
  u20d1_4a: {
    q: '… they needed to measure the impact of external conditions such as ______ and …',
    a: 'wind speed',
    why: 'Paragraph E says the initial approach <em>did not cater for changes in wind speed</em>, and that the team needed a method that would let it examine other variables such as humidity. The two answers may be written in either order, and <em>wind</em> alone is also accepted.',
    wrong: [
      { opt: 'temperature', why: 'Temperature is what the team measures, not an outside condition affecting the readings.' },
      { opt: 'light intensity', why: 'That is a later feature of the robot (paragraph G), not a reason the first approach failed.' },
      { opt: 'experimental variable', why: 'That is the general category the passage uses, not one of the specific conditions the question asks for.' }
    ],
    rule: 'When a sentence needs two answers, look for a list or a pair in one paragraph.'
  },
  u20d1_4b: {
    q: '… external conditions such as wind speed and ______.',
    a: 'humidity',
    why: 'Paragraph E ends: <em>a technique to measure temperature continuously that would allow it to examine the effects of other variables such as humidity</em>. Either order is accepted for the two gaps.',
    wrong: [
      { opt: 'sunlight', why: 'The passage treats light as what drives the leaves to open, not one of the two atmospheric conditions being measured alongside it.' },
      { opt: 'evaporation', why: 'Evaporation is part of how the leaves cool (paragraph D); it is not one of the external conditions listed in paragraph E.' },
      { opt: 'heavy cloud cover', why: 'That is one of the things that sends the robot back to its garage (paragraph G), and it is three words.' }
    ],
    rule: 'Two words maximum — <em>humidity</em> is one.'
  },

  /* ── D Questions 5–12 Locating information (paragraphs A–I) ── */
  u20d2_5: {
    q: 'Which paragraph contains: the precise growing conditions required to allow the experiment to work?',
    a: 'H — Paragraph H',
    why: 'Paragraph H says the canopy <em>had to be complete, with no visible soil</em>, so that the thermometers measured only the plants. That is the precise growing condition the experiment depended on.',
    wrong: [
      { opt: 'B — Paragraph B', why: 'B states the aim of the project and who helped, not the conditions the crop had to meet.' },
      { opt: 'E — Paragraph E', why: 'E is about the first measuring method and why it failed, not about how the sunflowers had to be grown.' }
    ],
    rule: 'A paragraph can be the answer to more than one question — H is also the answer to 11.'
  },
  u20d2_6: {
    q: 'Which paragraph contains: a description of how the robot operates?',
    a: 'F — Paragraph F',
    why: 'Paragraph F describes the machine itself: two infrared thermometers set at 180° to each other, an oblong track, rotation between runs and averaged results.',
    wrong: [
      { opt: 'G — Paragraph G', why: 'G only covers what the robot does when the light is poor — that is question 9, a narrower point.' },
      { opt: 'E — Paragraph E', why: 'E explains why a robot was needed; it does not say how one works.' }
    ]
  },
  u20d2_7: {
    q: 'Which paragraph contains: an explanation of two important processes used by plants?',
    a: 'C — Paragraph C',
    why: 'Paragraph C explains <strong>two</strong> processes — photosynthesis and transpiration. The word <em>two</em> in the question is the key: only C describes a pair.',
    wrong: [
      { opt: 'D — Paragraph D', why: 'D develops one idea, transpiration efficiency, and explains why leaves cool — that is question 12.' },
      { opt: 'A — Paragraph A', why: 'A is about the sunflower industry and fatty acids, not about plant processes.' }
    ],
    rule: 'Number words in the question (<em>two</em>, <em>a previous</em>) narrow the search fast.'
  },
  u20d2_8: {
    q: 'Which paragraph contains: a reference to a previous study using a different crop?',
    a: 'I — Paragraph I',
    why: 'Paragraph I says the team had <strong>already</strong> made a breakthrough in the wheat industry with Drysdale Wheat. Wheat is the different crop, and <em>already</em> marks it as earlier work.',
    wrong: [
      { opt: 'H — Paragraph H', why: 'H is about eight varieties of sunflower — the same crop, and the current study.' },
      { opt: 'A — Paragraph A', why: 'A is about the Australian sunflower industry, not a previous project with another crop.' }
    ]
  },
  u20d2_9: {
    q: 'Which paragraph contains: details of what the robot does when conditions are poor?',
    a: 'G — Paragraph G',
    why: 'Paragraph G says that if the skies darken because of rain, cloud or sunset, the robot returns to its garage to wait. <em>Poor conditions</em> paraphrases the darkening sky.',
    wrong: [
      { opt: 'F — Paragraph F', why: 'F describes the normal working of the robot, not what it does when the light fails.' },
      { opt: 'E — Paragraph E', why: 'E mentions wind affecting the readings, but nothing about the robot\'s behaviour — the robot did not exist yet at that stage.' }
    ]
  },
  u20d2_10: {
    q: 'Which paragraph contains: the name of the group responsible for making the robot?',
    a: 'B — Paragraph B',
    why: 'Paragraph B names it: <em>a robot developed by the Australian National University\'s Research School of Biological Sciences</em>. The question asks for a name, so look for capital letters.',
    wrong: [
      { opt: 'F — Paragraph F', why: 'F begins <em>They designed a robot…</em> but never says who <em>they</em> are — it only refers back to the group named in B.' },
      { opt: 'H — Paragraph H', why: 'H mentions the research group and an agronomist, but does not name any organisation.' }
    ],
    rule: 'If the question says "the name of", scan for proper nouns.'
  },
  u20d2_11: {
    q: 'Which paragraph contains: the number of different types of sunflower tested?',
    a: 'H — Paragraph H',
    why: 'Paragraph H states plainly: <em>Eight varieties of sunflower were examined.</em> <em>Types</em> paraphrases <em>varieties</em>.',
    wrong: [
      { opt: 'F — Paragraph F', why: 'F does contain numbers — two thermometers, 180° — but they describe the robot, not the sunflowers.' },
      { opt: 'B — Paragraph B', why: 'B describes the aim of selecting better flowers but gives no figure.' }
    ],
    rule: 'Match the number to the thing being counted, not just to any number you spot.'
  },
  u20d2_12: {
    q: 'Which paragraph contains: the purpose of taking the temperature of the plants?',
    a: 'D — Paragraph D',
    why: 'Paragraph D explains the reasoning: transpiring leaves cool down, so <em>by measuring the temperature of the leaves, scientists can determine how much water is being lost</em>. That is the purpose.',
    wrong: [
      { opt: 'E — Paragraph E', why: 'E says how the temperature was measured at first and why that failed — the method, not the purpose.' },
      { opt: 'F — Paragraph F', why: 'F describes the thermometers on the robot, again the equipment rather than the reason for using it.' }
    ],
    rule: 'Distinguish <em>how</em> questions from <em>why/purpose</em> questions — they often sit in neighbouring paragraphs.'
  },

  /* ── Grammar Focus Task: clause type / referent / subject or object ── */
  u20gft_1a: {
    q: '… is nearing the end of a project that aims to develop more drought-tolerant sunflowers. → defining or non-defining?',
    a: 'defining',
    why: 'There is no comma before <em>that</em>, and the clause tells us <strong>which</strong> project is meant. That is exactly what a defining relative clause does — and only a defining clause can use <em>that</em>.',
    wrong: [
      { opt: 'non-defining', why: 'A non-defining clause must be marked off by a comma and cannot use <em>that</em>. Both signs point the other way here.' }
    ],
    rule: 'No comma + <em>that</em> = defining, every time.'
  },
  u20gft_1b: {
    q: '… a project that aims to develop more drought-tolerant sunflowers … → which word does the pronoun refer to?',
    a: 'a project',
    why: 'A relative pronoun normally refers to the noun immediately before it, and it is the project — not Dr Lambrides — that aims to develop the sunflowers.',
    wrong: [
      { opt: 'Dr Chris Lambrides', why: 'He is a person, so the pronoun would have to be <em>who</em>; <em>that</em> here follows <em>project</em>.' },
      { opt: 'sunflowers', why: '<em>Sunflowers</em> comes after the verb inside the relative clause, so it cannot be what the clause is describing.' },
      { opt: 'the end', why: 'The clause explains the project, not the end of it. Read the whole noun phrase before deciding.' }
    ]
  },
  u20gft_1c: {
    q: '… a project that aims to develop … → is the pronoun the subject or the object?',
    a: 'subject',
    why: 'The clause has no other subject — <em>that</em> itself does the aiming. Put the noun back and you get <em>the project aims to develop…</em>, so the pronoun is filling the subject slot.',
    wrong: [
      { opt: 'object', why: 'If it were the object, the clause would already contain its own subject (as in <em>the project that he began</em>), and you could leave the pronoun out. You cannot here.' }
    ],
    rule: 'Test: can you delete the pronoun? If not, it is the subject.'
  },
  u20gft_2a: {
    q: '… did not cater for changes in wind speed, which could not be controlled as an experimental variable. → defining or non-defining?',
    a: 'non-defining',
    why: 'The comma before <em>which</em> marks it as extra information: we already know which wind speed is meant, and the clause simply comments on it. <em>That</em> would be impossible here.',
    wrong: [
      { opt: 'defining', why: 'A defining clause has no comma and narrows down the noun. Here the comma is printed, and removing the clause loses nothing essential.' }
    ]
  },
  u20gft_2b: {
    q: '… changes in wind speed, which could not be controlled … → which word or idea does the pronoun refer to?',
    a: 'wind speed',
    why: 'It is the wind speed that the team could not control, and it is the noun phrase immediately before the comma. <em>Changes in wind speed</em> is also accepted.',
    wrong: [
      { opt: 'its initial approach', why: 'That is the subject of the reporting clause, several words earlier — and an approach is something the team chose, not something outside its control.' },
      { opt: 'the research team', why: 'The team is a group of people, so the pronoun would be <em>who</em>, and the meaning would be nonsense.' }
    ],
    rule: 'Start with the noun phrase immediately before the relative pronoun, then check the meaning.'
  },
  u20gft_2c: {
    q: '… wind speed, which could not be controlled as an experimental variable. → subject or object?',
    a: 'subject',
    why: 'The verb is passive (<em>could not be controlled</em>), and <em>which</em> is its grammatical subject — there is no other noun before the verb. In a passive clause the thing acted on is still the subject.',
    wrong: [
      { opt: 'object', why: 'It <strong>feels</strong> like an object because the wind speed is what someone would control, but the passive turns that noun into the subject: compare <em>they could not control it</em> (object) with <em>it could not be controlled</em> (subject).' }
    ],
    rule: 'A passive verb has no object — the affected thing has become the subject.'
  },
  u20gft_3a: {
    q: 'It has a garage on the track, where it waits until the light intensity is high enough … → defining or non-defining?',
    a: 'non-defining',
    why: 'The comma before <em>where</em> shows the clause adds extra information. The robot has only one garage, so the clause is not needed to identify it.',
    wrong: [
      { opt: 'defining', why: 'A defining clause would have no comma and would imply there is more than one garage, with this being the one the robot waits in.' }
    ]
  },
  u20gft_3b: {
    q: '… a garage on the track, where it waits … → which word does the pronoun refer to?',
    a: 'a garage',
    why: '<em>Where</em> refers to the place the robot waits in, and that is the garage. The head noun of the phrase <em>a garage on the track</em> is <em>garage</em>.',
    wrong: [
      { opt: 'the track', why: 'It is the nearest noun, which makes it tempting, but the robot waits <strong>in the garage</strong>, not on the track — that is where it runs.' },
      { opt: 'the robot', why: '<em>It</em> (the robot) is the subject inside the relative clause, so it cannot also be what the clause refers back to.' }
    ],
    rule: 'The pronoun refers to the head noun of the phrase, not always the closest word.'
  },
  u20gft_3c: {
    q: '… a garage on the track, where it waits until … → subject or object?',
    a: 'object',
    why: 'The clause already has its own subject — <em>it</em>, the robot — so <em>where</em> is not the subject; the key therefore classes it as the object. (Strictly, <em>where</em> is an adverbial of place meaning "in which", but the point being tested is that it is <strong>not</strong> the subject.)',
    wrong: [
      { opt: 'subject', why: 'The subject of <em>waits</em> is <em>it</em>, the robot. A relative pronoun can only be the subject when the clause has no other subject.' }
    ],
    rule: 'Find the verb, then ask who or what is doing it — if another word is, the pronoun is not the subject.'
  },
  u20gft_4a: {
    q: '… was to find an agronomist who could grow the perfect crop of sunflowers. → defining or non-defining?',
    a: 'defining',
    why: 'There is no comma, and the clause is essential: without it we would only know that they wanted to find some agronomist, not what kind. <em>That</em> could replace <em>who</em> here, which confirms it is defining.',
    wrong: [
      { opt: 'non-defining', why: 'No comma is printed, and removing the clause would leave the sentence without its main point.' }
    ]
  },
  u20gft_4b: {
    q: '… find an agronomist who could grow the perfect crop … → which word does the pronoun refer to?',
    a: 'an agronomist',
    why: '<em>Who</em> refers to people, and <em>an agronomist</em> is the person directly before it — the one who would grow the crop.',
    wrong: [
      { opt: 'the research group', why: 'That appears inside the participle phrase <em>faced by the research group</em>, and the group is looking for the agronomist rather than being described by the clause.' },
      { opt: 'the main difficulty', why: 'A difficulty is a thing, so it would take <em>which</em>, not <em>who</em>.' }
    ]
  },
  u20gft_4c: {
    q: '… an agronomist who could grow the perfect crop of sunflowers. → subject or object?',
    a: 'subject',
    why: '<em>Who</em> does the growing, and the clause has no other subject; the object of <em>could grow</em> is <em>the perfect crop of sunflowers</em>.',
    wrong: [
      { opt: 'object', why: 'The clause already has an object — <em>the perfect crop</em>. And a subject pronoun cannot be left out, which is another sign: <s>an agronomist could grow the perfect crop</s> would change the meaning entirely.' }
    ]
  },
  u20gft_5a: {
    q: '… with Drysdale Wheat, which signalled the arrival of a new technique … → defining or non-defining?',
    a: 'non-defining',
    why: 'The comma, plus the fact that <em>Drysdale Wheat</em> is a unique name, makes the clause extra information. A name is already fully identified, so nothing can define it further.',
    wrong: [
      { opt: 'defining', why: 'You cannot define a proper name, and the comma is printed. That is also why <em>that</em> is impossible here.' }
    ],
    rule: 'After a proper name, a relative clause is almost always non-defining.'
  },
  u20gft_5b: {
    q: '… with Drysdale Wheat, which signalled the arrival of a new technique … → which word or idea does the pronoun refer to?',
    a: 'Drysdale Wheat',
    why: '<em>Which</em> refers back to the noun phrase immediately before the comma — the wheat variety itself, which is what signalled the new technique. The key also accepts <em>wheat</em>.',
    wrong: [
      { opt: 'the Australian wheat industry', why: 'The industry is where the breakthrough happened; the thing that signalled the new technique was the variety, Drysdale Wheat.' },
      { opt: 'the team and their robot', why: 'They are the subject of the main clause and are people plus a machine, so <em>which</em> could not refer to them as a pair.' },
      { opt: 'the whole first clause', why: '<em>Which</em> can refer to a whole clause (see B3), but here the key takes it as the noun phrase directly before the comma.' }
    ]
  },
  u20gft_5c: {
    q: '… Drysdale Wheat, which signalled the arrival of a new technique … → subject or object?',
    a: 'subject',
    why: '<em>Which</em> performs the verb <em>signalled</em>, and the clause has no other subject. Its object is <em>the arrival of a new technique</em>.',
    wrong: [
      { opt: 'object', why: 'The object slot is already filled by <em>the arrival of a new technique</em>. And in a non-defining clause the pronoun can never be left out, subject or object.' }
    ],
    rule: 'Non-defining clauses always keep their pronoun — but it can still be subject or object.'
  }
};
