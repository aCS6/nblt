/* Unit 9 — Pronouns and Referencing: explanations
   window.__EXPL[<data-id>] = { q, a, why, wrong:[{opt,why}], rule? }
   Rendered by initExplanations() in scripts/utils.js. */
window.__EXPL = {

  /* ── A2 Who does each chore? A = Mrs Smith, B = Chi Wen, C = both (Track 13) ── */
  u9a2_1: {
    q: 'cook dinner — write A (Mrs Smith), B (Chi Wen) or C (both)',
    a: 'A',
    why: 'Mrs Smith provides the evening meal. The giveaway is Chi Wen\'s question <em>And what about other meals? Can I cook for myself?</em> — she asks about the <strong>other</strong> meals because dinner is already taken care of.',
    wrong: [
      { opt: 'B', why: 'B would mean Chi Wen cooks the evening meal. She only asks permission to cook for herself at other times, which shows dinner is not hers to make.' },
      { opt: 'C', why: 'C is reserved for jobs they both do. There is no suggestion that they cook dinner together.' }
    ],
    rule: 'Match each chore to the person who actually does it, not to whoever mentions it.'
  },
  u9a2_2: {
    q: 'make breakfast — write A, B or C',
    a: 'B',
    why: 'Mrs Smith says <em>everyone makes their own breakfast</em>. <em>Everyone</em> includes Chi Wen, so breakfast is her own job — B.',
    wrong: [
      { opt: 'A', why: 'Mrs Smith does not make breakfast for her guests. She only makes sure there is food in the fridge, which is a different chore (buying food).' },
      { opt: 'C', why: '<em>Their own breakfast</em> means each person separately, not the two of them working together.' }
    ],
    rule: '<em>their own</em> + noun signals that each person does it for themselves.'
  },
  u9a2_3: {
    q: 'buy food — write A, B or C',
    a: 'A',
    why: 'Mrs Smith says <em>I always make sure there is plenty of food in the fridge</em>, so the shopping is hers. <em>I always</em> points straight at her.',
    wrong: [
      { opt: 'B', why: 'Chi Wen uses the food, but using it is not the same as buying it. Listen for who stocks the fridge.' },
      { opt: 'C', why: 'Only Mrs Smith is mentioned in connection with keeping food in the house.' }
    ],
    rule: 'Distinguish who supplies something from who uses it.'
  },
  u9a2_4: {
    q: 'make lunches — write A, B or C',
    a: 'B',
    why: 'Mrs Smith says <em>you can prepare yourself a packed lunch if you like</em>. The reflexive <em>yourself</em> makes it clear that Chi Wen does this for herself — B.',
    wrong: [
      { opt: 'A', why: 'Mrs Smith offers the ingredients, not the lunch. <em>You can prepare yourself…</em> hands the job to Chi Wen.' },
      { opt: 'C', why: '<em>Yourself</em> names one person only. If they shared the job the recording would need <em>ourselves</em> or <em>together</em>.' }
    ],
    rule: 'A reflexive pronoun tells you the subject and the object are the same person.'
  },
  u9a2_5: {
    q: 'wash clothes — write A, B or C',
    a: 'C',
    why: 'Mrs Smith says <em>I expect everyone to wash and iron for themselves</em>. <em>Everyone</em> covers both of them, so both wash clothes — each washing their own. That makes it C.',
    wrong: [
      { opt: 'A', why: 'Mrs Smith does not wash Chi Wen\'s clothes; she expects each person to do their own.' },
      { opt: 'B', why: 'Chi Wen does wash her own clothes, but so does Mrs Smith, so the answer covering both is needed.' }
    ],
    rule: '<em>everyone … themselves</em> = each person does it, so both people do it.'
  },
  u9a2_6: {
    q: 'wash sheets — write A, B or C',
    a: 'A',
    why: 'The sheets are Mrs Smith\'s job. Her rule about washing and ironing applies to personal clothes; the bed linen belongs to the house, and she looks after it.',
    wrong: [
      { opt: 'B', why: 'Tempting, because Chi Wen washes her clothes — but the rule she is given is about her own washing and ironing, not the household linen.' },
      { opt: 'C', why: 'Only one person is named for the sheets, so a shared answer is wrong.' }
    ],
    rule: 'Clothes and sheets are two separate items — do not carry one answer over to the next.'
  },
  u9a2_7: {
    q: 'clean the house — write A, B or C',
    a: 'C',
    why: 'Both of them clean. Mrs Smith says <em>I clean the kitchen and the living areas myself</em>, and the guest is responsible for her own room — so the cleaning is shared between them.',
    wrong: [
      { opt: 'A', why: 'Mrs Smith names only the kitchen and living areas. She does not claim the whole house, so this cannot be A.' },
      { opt: 'B', why: 'Chi Wen cleans her own room, but the shared rooms are cleaned by Mrs Smith, so B alone is too narrow.' }
    ],
    rule: '<em>myself</em> for emphasis (= nobody else) still only covers the part named.'
  },

  /* ── A3 Listen again and fill in the gaps (Track 13) ── */
  u9a3_1: {
    q: 'I can introduce ______ to a friend of mine, Yi Ling.',
    a: 'you',
    why: '<em>Introduce</em> is followed by its object, and the person being introduced is the listener, so the object pronoun <em>you</em> is needed. (<em>You</em> has the same form as subject and object, which is why it feels easy here.)',
    wrong: [
      { opt: 'your', why: '<em>Your</em> is a possessive determiner and must be followed by a noun: <em>your friend</em>. It cannot stand alone as the object of <em>introduce</em>.' },
      { opt: 'yourself', why: 'A reflexive is only used when the subject and object are the same. The subject is <em>I</em> and the object is the listener, so they are different people.' }
    ],
    rule: 'Object pronouns go after a verb: <em>introduce you</em>, <em>meet him</em>, <em>tell us</em>.'
  },
  u9a3_2: {
    q: 'I can introduce you to a friend of ______, Yi Ling.',
    a: 'mine',
    why: 'The pattern <em>a friend of</em> + possessive pronoun requires the possessive pronoun form, so <em>mine</em> (= my friend). A possessive pronoun stands alone with no noun after it.',
    wrong: [
      { opt: 'my', why: 'You cannot say <s>a friend of my</s>. <em>My</em> needs a noun immediately after it — either <em>my friend</em> or <em>a friend of mine</em>, never both patterns at once.' },
      { opt: 'me', why: '<em>A friend of me</em> is not natural English. After <em>of</em> in this fixed pattern English uses the possessive pronoun: <em>a friend of mine</em>.' }
    ],
    rule: 'Fixed pattern: <em>a friend/colleague/cousin of mine, yours, his, hers, ours, theirs</em>.'
  },
  u9a3_3: {
    q: "I know ______'s really enjoying herself here in Australia.",
    a: 'she',
    why: 'The gap is the subject of the verb <em>\'s enjoying</em>, so it takes a subject pronoun. Yi Ling has just been named, so repeating the name would be unnatural — <em>she</em> refers back to her.',
    wrong: [
      { opt: 'her', why: '<em>Her</em> is an object pronoun (or a possessive determiner). It cannot be the subject of a verb: <s>Her\'s really enjoying…</s>' },
      { opt: 'hers', why: '<em>Hers</em> is a possessive pronoun standing for <em>her</em> + noun (<em>hers</em> = her room, her course). It names a thing she owns, not the person doing the enjoying.' }
    ],
    rule: 'Subject pronouns come before the verb; use them to avoid repeating a name.'
  },
  u9a3_4: {
    q: "I know she's really enjoying ______ here in Australia.",
    a: 'herself',
    why: 'The subject and the object of <em>enjoy</em> are the same person, so the reflexive <em>herself</em> is required. <em>Enjoy oneself</em> is also a fixed expression meaning "have a good time".',
    wrong: [
      { opt: 'her', why: 'This would mean she is enjoying some other female — a different meaning altogether. When subject and object are the same person you must use the reflexive.' },
      { opt: 'it', why: '<em>Enjoying it</em> needs a thing to refer to, and no such thing has been mentioned. The point is that Yi Ling is having a good time.' }
    ],
    rule: '<em>Enjoy</em> needs an object: <em>enjoy yourself</em> when there is nothing else to enjoy.'
  },
  u9a3_5: {
    q: 'I have had a lot of students staying with ______ over the years.',
    a: 'me',
    why: 'The gap comes after the preposition <em>with</em>, and prepositions are followed by object pronouns. Mrs Smith is talking about herself, so <em>me</em>.',
    wrong: [
      { opt: 'I', why: '<em>I</em> is a subject pronoun and cannot follow a preposition: <s>staying with I</s>.' },
      { opt: 'myself', why: 'A reflexive needs the subject of its <strong>own</strong> verb to be the same person. The subject of <em>staying</em> is <em>a lot of students</em>, not <em>I</em>, so a plain object pronoun is correct.' }
    ],
    rule: 'After a preposition (with, for, to, at) use an object pronoun.'
  },
  u9a3_6: {
    q: 'First of all, my husband and ______ want everyone to feel at home.',
    a: 'I',
    why: '<em>My husband and I</em> is the subject of <em>want</em>, so the subject pronoun <em>I</em> is needed. Test it by removing the other person: <em>I want everyone to feel at home</em>.',
    wrong: [
      { opt: 'me', why: 'A very common error. <em>Me</em> is an object pronoun, and dropping <em>my husband and</em> exposes the problem: <s>Me want everyone to feel at home</s>.' },
      { opt: 'myself', why: 'Reflexives are not used as plain subjects. <em>My husband and myself want…</em> is a frequent mistake in speech but is not standard written English.' }
    ],
    rule: 'To test <em>I</em> or <em>me</em> in a pair, delete the other person and listen to what is left.'
  },
  u9a3_7: {
    q: 'My husband and I want everyone to feel at home so ______ treat everyone like they\'re a member of our own family.',
    a: 'we',
    why: '<em>We</em> is the subject of <em>treat</em>, and it refers back to <em>my husband and I</em> — two people including the speaker. The possessive <em>our own family</em> later in the clause confirms it.',
    wrong: [
      { opt: 'us', why: '<em>Us</em> is the object form and cannot be the subject of <em>treat</em>: <s>us treat everyone</s>.' },
      { opt: 'they', why: '<em>They</em> would point at some other group of people. The speaker is included, so the first person plural is needed.' }
    ],
    rule: 'Choose the pronoun that matches who is included: <em>we</em> includes the speaker.'
  },
  u9a3_8: {
    q: "We treat everyone like ______'re a member of our own family.",
    a: 'they',
    why: '<em>They</em> refers back to <em>everyone</em>. English uses <em>they</em> for a person whose sex is not known or not relevant, and it also lets one pronoun cover all the guests at once.',
    wrong: [
      { opt: 'he', why: 'Choosing a male pronoun for <em>everyone</em> assumes every guest is a man. Modern English uses <em>they</em> when the sex is unknown or mixed.' },
      { opt: 'you', why: '<em>You</em> would address Chi Wen directly and lose the general meaning. The sentence is a rule about all guests, not just this one.' }
    ],
    rule: '<em>They</em> can refer back to <em>everyone</em>/<em>somebody</em> when sex is unknown or irrelevant.'
  },
  u9a3_9: {
    q: 'And what about other meals? Can I cook for ______?',
    a: 'myself',
    why: 'Chi Wen is the subject of <em>cook</em> and also the person the cooking is for, so the reflexive <em>myself</em> is required after <em>for</em>.',
    wrong: [
      { opt: 'me', why: 'This would mean somebody else does the cooking on her behalf, which reverses the meaning she wants. Same subject and object means a reflexive.' },
      { opt: 'yourself', why: '<em>Yourself</em> would mean cooking for Mrs Smith. The subject is <em>I</em>, so the reflexive must match: <em>myself</em>.' }
    ],
    rule: 'The reflexive must agree with the subject: <em>I … myself</em>, <em>you … yourself</em>.'
  },
  u9a3_10: {
    q: 'I always make sure there is plenty of food in the fridge so ______ can prepare yourself a packed lunch.',
    a: 'you',
    why: '<em>You</em> is the subject of <em>can prepare</em>, and Mrs Smith is speaking directly to Chi Wen. The reflexive <em>yourself</em> later in the same clause confirms that the subject must be <em>you</em>.',
    wrong: [
      { opt: 'I', why: 'That would mean Mrs Smith makes the lunch, which contradicts <em>yourself</em> in the same clause — a subject and its reflexive must match.' },
      { opt: 'we', why: '<em>We</em> would include Mrs Smith. The offer is for Chi Wen alone, and again it clashes with <em>yourself</em>.' }
    ],
    rule: 'Use the reflexive in a clause as a clue to the subject: <em>yourself</em> → <em>you</em>.'
  },
  u9a3_11: {
    q: 'so you can prepare ______ a packed lunch if you like.',
    a: 'yourself',
    why: 'The subject <em>you</em> and the person receiving the lunch are the same, so the reflexive <em>yourself</em> is used. <em>Prepare somebody something</em> takes an indirect object, and here that object points back at the subject.',
    wrong: [
      { opt: 'you', why: 'When the object refers to the same person as the subject, English does not simply repeat the pronoun: <s>you can prepare you a lunch</s>. It switches to the reflexive form.' },
      { opt: 'yours', why: '<em>Yours</em> is a possessive pronoun standing for <em>your</em> + noun. It cannot be the person who receives the lunch.' }
    ],
    rule: 'Same person twice in one clause → second mention becomes reflexive.'
  },
  u9a3_12: {
    q: 'I expect everyone to wash and iron for ______.',
    a: 'themselves',
    why: '<em>Everyone</em> is the understood subject of <em>to wash and iron</em>, and each person does the washing for that same person, so a reflexive is needed. With <em>everyone</em> English uses the plural-looking <em>themselves</em>.',
    wrong: [
      { opt: 'himself', why: 'This assumes all the students are male. <em>Everyone</em> covers both sexes, so <em>themselves</em> is the safe and standard choice.' },
      { opt: 'them', why: '<em>Them</em> would mean each person washes for other people. The whole point of the rule is that you do your own washing.' }
    ],
    rule: '<em>everyone</em>/<em>somebody</em> pairs with <em>themselves</em> in modern English.'
  },
  u9a3_13: {
    q: 'Can I use ______ to make local calls?',
    a: 'yours',
    why: 'Chi Wen is asking about Mrs Smith\'s phone. <em>Yours</em> is the possessive pronoun that replaces <em>your phone</em>, so the noun is not repeated.',
    wrong: [
      { opt: 'your', why: '<em>Your</em> is a determiner and must be followed by a noun: <em>your phone</em>. On its own it is incomplete.' },
      { opt: 'you', why: '<em>Use you</em> would mean using the person, not the phone. The sentence needs a possessive form to stand for the object.' }
    ],
    rule: 'Possessive pronouns (mine, yours, his, hers, ours, theirs) replace determiner + noun.'
  },

  /* ── A4 Put the words into four groups ── */
  u9a4_1: {
    q: 'Subject pronouns — first word',
    a: 'I',
    why: '<em>I</em> goes before a verb and names the person doing the action, so it belongs with the subject pronouns: <em>my husband and I want everyone to feel at home</em>. Type the words in the order they appear in the box: <em>I, you, she, we, they</em>.',
    wrong: [
      { opt: 'me', why: '<em>Me</em> is the object form of the same person, so it belongs in the object box, not here.' },
      { opt: 'myself', why: '<em>Myself</em> is reflexive — it goes in the third box, with <em>yourself</em>, <em>herself</em> and <em>themselves</em>.' }
    ],
    rule: 'Subject pronouns: I, you, he, she, it, we, they.'
  },
  u9a4_2: {
    q: 'Subject pronouns — second word',
    a: 'you',
    why: '<em>You</em> is the subject of <em>can prepare</em> in <em>so you can prepare yourself a packed lunch</em>. <em>You</em> is unusual because it has the same form as subject and as object, so it appears in two boxes.',
    wrong: [
      { opt: 'yours', why: '<em>Yours</em> is a possessive pronoun (= your phone), so it belongs in the fourth box.' },
      { opt: 'yourself', why: '<em>Yourself</em> is the reflexive form and goes in the third box.' }
    ],
    rule: '<em>You</em> is both a subject and an object pronoun — the same word does two jobs.'
  },
  u9a4_3: {
    q: 'Subject pronouns — third word',
    a: 'she',
    why: '<em>She</em> comes before the verb in <em>she\'s really enjoying herself</em>, so it is a subject pronoun.',
    wrong: [
      { opt: 'herself', why: 'That is the reflexive form of the same person and belongs in the reflexive box.' },
      { opt: 'her', why: '<em>Her</em> would be the object form, but it does not appear in this exercise\'s word box at all.' }
    ],
    rule: 'A pronoun sitting immediately before a verb is a subject pronoun.'
  },
  u9a4_4: {
    q: 'Subject pronouns — fourth word',
    a: 'we',
    why: '<em>We</em> is the subject of <em>treat</em> in <em>so we treat everyone like they\'re a member of our own family</em>, so it goes with the subject pronouns.',
    wrong: [
      { opt: 'us', why: '<em>Us</em> is the plural object form. It does not appear in this word box, and it would belong in the object group if it did.' },
      { opt: 'ours', why: '<em>Ours</em> is the possessive pronoun for the same people, so it would go in the fourth box.' }
    ],
    rule: 'We / us / ours / ourselves — the same group of people, four different jobs.'
  },
  u9a4_5: {
    q: 'Subject pronouns — fifth word',
    a: 'they',
    why: '<em>They</em> is the subject of <em>\'re</em> in <em>like they\'re a member of our own family</em>, so it is a subject pronoun.',
    wrong: [
      { opt: 'themselves', why: '<em>Themselves</em> is the reflexive form and belongs in the third box.' },
      { opt: 'them', why: '<em>Them</em> is the object form of <em>they</em>, but it is not one of the words you wrote in Exercise 3.' }
    ],
    rule: '<em>They</em> can refer to a group, or to one person of unknown sex.'
  },
  u9a4_6: {
    q: 'Object pronouns — first word',
    a: 'me',
    why: '<em>Me</em> follows the preposition <em>with</em> in <em>students staying with me</em>. Anything after a verb or a preposition takes the object form.',
    wrong: [
      { opt: 'I', why: '<em>I</em> is the subject form and belongs in the first box.' },
      { opt: 'myself', why: '<em>Myself</em> is reflexive: it is only used when the subject of the clause is also <em>I</em>.' }
    ],
    rule: 'Object pronouns: me, you, him, her, it, us, them.'
  },
  u9a4_7: {
    q: 'Object pronouns — second word',
    a: 'you',
    why: '<em>You</em> is the object of <em>introduce</em> in <em>I can introduce you to a friend of mine</em>. Because <em>you</em> has one form for both jobs, it appears in the subject box as well.',
    wrong: [
      { opt: 'yours', why: '<em>Yours</em> replaces a possessive determiner plus a noun, so it goes in the possessive box.' },
      { opt: 'yourself', why: '<em>Yourself</em> is the reflexive form; here the subject is <em>I</em> and the object is a different person, so no reflexive is involved.' }
    ],
    rule: 'Only <em>you</em> and <em>it</em> keep the same form as subject and object.'
  },
  u9a4_8: {
    q: 'Reflexive pronouns — first word',
    a: 'myself',
    why: '<em>Myself</em> appears in <em>Can I cook for myself?</em>, where the subject <em>I</em> and the object are the same person. All reflexives end in <em>-self</em> or <em>-selves</em>.',
    wrong: [
      { opt: 'me', why: '<em>Me</em> is the plain object form. It is used when the subject is somebody else: <em>Can you cook for me?</em>' },
      { opt: 'mine', why: '<em>Mine</em> is possessive — it stands for <em>my</em> + noun, not for the person.' }
    ],
    rule: 'Reflexives end in -self (singular) or -selves (plural).'
  },
  u9a4_9: {
    q: 'Reflexive pronouns — second word',
    a: 'yourself',
    why: '<em>Yourself</em> appears in <em>you can prepare yourself a packed lunch</em>: the subject <em>you</em> is also the person who gets the lunch.',
    wrong: [
      { opt: 'you', why: '<em>You</em> is the plain subject/object form. When the object is the same person as the subject, English uses the reflexive instead of repeating <em>you</em>.' },
      { opt: 'yourselves', why: 'That is the plural reflexive, used when you address more than one person. Mrs Smith is speaking to Chi Wen alone.' }
    ],
    rule: '<em>yourself</em> = one person; <em>yourselves</em> = more than one.'
  },
  u9a4_10: {
    q: 'Reflexive pronouns — third word',
    a: 'herself',
    why: '<em>Herself</em> appears in <em>she\'s really enjoying herself</em> — the subject <em>she</em> and the object of <em>enjoy</em> are the same person.',
    wrong: [
      { opt: 'she', why: '<em>She</em> is the subject form and belongs in the first box.' },
      { opt: 'hers', why: '<em>Hers</em> is a possessive pronoun (= her thing). It does not appear in this word box.' }
    ],
    rule: 'Third person reflexives: himself, herself, itself, themselves.'
  },
  u9a4_11: {
    q: 'Reflexive pronouns — fourth word',
    a: 'themselves',
    why: '<em>Themselves</em> appears in <em>I expect everyone to wash and iron for themselves</em>. It is the reflexive that goes with <em>they</em> and with indefinite words such as <em>everyone</em>.',
    wrong: [
      { opt: 'they', why: '<em>They</em> is the subject form and belongs in the first box.' },
      { opt: 'themself', why: '<em>Themself</em> is sometimes seen after <em>everyone</em>, but the form this book uses — and the one the answer key wants — is <em>themselves</em>.' }
    ],
    rule: '<em>-selves</em> for plural reflexives: ourselves, yourselves, themselves.'
  },
  u9a4_12: {
    q: 'Possessive pronouns — first word',
    a: 'mine',
    why: '<em>Mine</em> appears in <em>a friend of mine</em> and stands for <em>my friend</em>. A possessive pronoun replaces a determiner plus a noun, so no noun follows it.',
    wrong: [
      { opt: 'my', why: '<em>My</em> is a possessive <strong>determiner</strong>, not a pronoun: it must have a noun after it.' },
      { opt: 'me', why: '<em>Me</em> is an object pronoun and shows no possession.' }
    ],
    rule: 'Possessive pronouns: mine, yours, his, hers, ours, theirs (never <s>its</s>).'
  },
  u9a4_13: {
    q: 'Possessive pronouns — second word',
    a: 'yours',
    why: '<em>Yours</em> appears in <em>Can I use yours to make local calls?</em> and stands for <em>your phone</em>, so the noun does not have to be repeated.',
    wrong: [
      { opt: 'your', why: '<em>Your</em> is a determiner and needs a noun after it: <em>your phone</em>.' },
      { opt: 'yourself', why: '<em>Yourself</em> is reflexive and refers to a person, not to a thing somebody owns.' }
    ],
    rule: 'Note the spelling: <em>yours</em>, <em>hers</em>, <em>ours</em>, <em>theirs</em> — no apostrophe.'
  },

  /* ── C1 Anatomy of a bat: it / its / itself / they / their / themselves ── */
  u9c1_1: {
    q: 'Many species also have a membrane between ______ hind limbs enclosing the tail.',
    a: 'their',
    why: 'The gap comes before the noun <em>hind limbs</em>, so a possessive determiner is needed, and the subject <em>many species</em> is plural — hence <em>their</em>.',
    wrong: [
      { opt: 'its', why: '<em>Its</em> is singular, but the subject is the plural <em>many species</em>. The verb <em>have</em> (not <em>has</em>) confirms the plural.' },
      { opt: 'they', why: '<em>They</em> is a subject pronoun and cannot sit in front of a noun. Before a noun you need a determiner: <em>their limbs</em>.' }
    ],
    rule: 'Possessive determiner + noun: <em>its wing</em>, <em>their wings</em>.'
  },
  u9c1_2: {
    q: 'When it is cold, these bats wrap ______ up in their wings like a coat.',
    a: 'themselves',
    why: '<em>Wrap up</em> needs an object, and the bats are wrapping the bats — subject and object are the same — so the reflexive is used. <em>These bats</em> is plural, so <em>themselves</em>.',
    wrong: [
      { opt: 'them', why: 'That would mean the bats are wrapping up some other creatures. When the object is the same as the subject, English switches to <em>-selves</em>.' },
      { opt: 'itself', why: 'The subject <em>these bats</em> is plural, so the singular reflexive does not agree with it.' }
    ],
    rule: 'Subject = object → reflexive; and the reflexive must match in number.'
  },
  u9c1_3: {
    q: 'these bats wrap themselves up in ______ wings like a coat.',
    a: 'their',
    why: 'A possessive determiner is needed before the noun <em>wings</em>, and it must agree with the plural subject <em>these bats</em>.',
    wrong: [
      { opt: 'its', why: 'The subject is plural, so the singular <em>its</em> does not agree. Keep the whole sentence consistent with <em>themselves</em>.' },
      { opt: "it's", why: "<em>It's</em> is short for <em>it is</em>, never a possessive. The possessive of <em>it</em> has no apostrophe: <em>its</em>." }
    ],
    rule: '<em>its</em> = belonging to it; <em>it\'s</em> = it is.'
  },
  u9c1_4: {
    q: 'In warm weather ______ flap their wings in order to cool their bodies.',
    a: 'they',
    why: 'The gap is the subject of <em>flap</em> and refers back to the bats, so a subject pronoun is needed. The plural verb form <em>flap</em> (not <em>flaps</em>) shows it must be <em>they</em>.',
    wrong: [
      { opt: 'their', why: '<em>Their</em> is a determiner and needs a noun after it. Here the gap is followed straight by the verb <em>flap</em>.' },
      { opt: 'it', why: 'A singular subject would require <em>flaps</em>. The passage is talking about bats in general, in the plural.' }
    ],
    rule: 'Check the verb ending: <em>flap</em> → plural subject; <em>flaps</em> → singular.'
  },
  u9c1_5: {
    q: 'In warm weather they flap ______ wings in order to cool their bodies.',
    a: 'their',
    why: 'Again a possessive determiner before a noun (<em>wings</em>), agreeing with the plural subject <em>they</em>.',
    wrong: [
      { opt: 'them', why: '<em>Them</em> is an object pronoun and cannot come before a noun: <s>them wings</s> is not standard English.' },
      { opt: 'theirs', why: '<em>Theirs</em> is a possessive pronoun that stands alone, replacing determiner + noun. It is never followed by a noun.' }
    ],
    rule: '<em>their</em> + noun; <em>theirs</em> alone.'
  },
  u9c1_6: {
    q: 'they flap their wings in order to cool ______ bodies.',
    a: 'their',
    why: 'A third possessive determiner before the noun <em>bodies</em>, matching the plural bats. Keeping the same pronoun through the sentence is what makes the description read smoothly.',
    wrong: [
      { opt: 'themselves', why: 'A reflexive cannot be followed by a noun. You could write <em>to cool themselves</em>, but not <s>to cool themselves bodies</s>.' },
      { opt: 'its', why: '<em>Its</em> is singular, so it clashes with <em>they</em> and <em>bodies</em> in the same sentence.' }
    ],
    rule: 'Keep the person and number consistent across a whole sentence.'
  },
  u9c1_7: {
    q: 'The bat has claws on ______ thumbs and sometimes on the toes of its fore and hind limbs.',
    a: 'its',
    why: 'The subject has changed to the singular <em>the bat</em> — the verb <em>has</em> proves it — so the singular possessive determiner <em>its</em> is used before <em>thumbs</em>.',
    wrong: [
      { opt: 'their', why: 'A common slip when the noun after the gap is plural, but the possessive agrees with the <strong>owner</strong> (<em>the bat</em>, singular), not with the thing owned.' },
      { opt: "it's", why: '<em>It\'s</em> means <em>it is</em>, which makes no sense here: <s>The bat has claws on it is thumbs</s>.' }
    ],
    rule: 'A possessive agrees with the owner, not with the number of things owned.'
  },
  u9c1_8: {
    q: 'The bat has claws on its thumbs and sometimes on the toes of ______ fore and hind limbs.',
    a: 'its',
    why: 'Still the same singular owner, <em>the bat</em>, so <em>its</em> is repeated before the noun phrase <em>fore and hind limbs</em>.',
    wrong: [
      { opt: 'their', why: 'The paragraph has switched to the singular <em>the bat</em>, so a plural possessive would break the agreement started by <em>has</em> and <em>its thumbs</em>.' },
      { opt: 'it', why: '<em>It</em> is a subject or object pronoun. Before a noun you need the possessive form <em>its</em>.' }
    ],
    rule: 'Once a paragraph fixes a singular subject, keep every pronoun singular.'
  },
  u9c1_9: {
    q: 'The rear claws enable ______ to hang itself on to a tree branch or ledge.',
    a: 'it',
    why: '<em>Enable</em> takes an object followed by <em>to</em> + infinitive, so an object pronoun is needed. The subject of the sentence is <em>the rear claws</em>, but the creature being enabled is the singular bat, so <em>it</em>.',
    wrong: [
      { opt: 'its', why: '<em>Its</em> is a possessive determiner and cannot be the object of <em>enable</em>; it would have to be followed by a noun.' },
      { opt: 'them', why: '<em>Them</em> is plural, which clashes with the singular <em>the bat</em> that this paragraph is describing.' }
    ],
    rule: 'Pattern: <em>enable</em> + object + <em>to</em> + infinitive.'
  },
  u9c1_10: {
    q: 'The rear claws enable it to hang ______ on to a tree branch or ledge.',
    a: 'itself',
    why: 'The understood subject of <em>to hang</em> is the bat, and the bat is also what gets hung up, so the reflexive <em>itself</em> is correct — and it is singular to match <em>it</em>.',
    wrong: [
      { opt: 'it', why: 'Repeating <em>it</em> would suggest the bat hangs up some other object. When the same creature fills both the subject and the object slot, the object slot takes the reflexive.' },
      { opt: 'themselves', why: '<em>Themselves</em> is plural and does not agree with the singular <em>it</em> just before it.' }
    ],
    rule: '<em>it … itself</em>; <em>they … themselves</em>.'
  },
  u9c1_11: {
    q: 'All bats are active at night or at twilight, so ______ eyes are poorly developed.',
    a: 'their',
    why: 'The subject is back to the plural <em>all bats</em>, and the gap sits before the noun <em>eyes</em>, so the plural possessive determiner <em>their</em> is needed.',
    wrong: [
      { opt: 'its', why: '<em>Its</em> is singular, but <em>all bats</em> and the plural verb <em>are</em> make it clear the whole paragraph is plural again.' },
      { opt: 'they', why: '<em>They</em> is a subject pronoun, but the subject of <em>are</em> here is <em>eyes</em>, not the gap. The gap sits in front of a noun, so it needs a determiner.' }
    ],
    rule: 'Re-check the subject at the start of every new paragraph.'
  },
  u9c1_12: {
    q: 'Instead ______ use their nose and ears to orientate themselves.',
    a: 'they',
    why: 'The gap is the subject of <em>use</em> and refers back to <em>all bats</em>, so the plural subject pronoun <em>they</em> is needed. The bare form <em>use</em> (not <em>uses</em>) confirms the plural.',
    wrong: [
      { opt: 'it', why: 'A singular subject would need <em>uses</em>. The paragraph is about bats in general.' },
      { opt: 'their', why: 'A determiner cannot be the subject of a verb; it has to be followed by a noun.' }
    ],
    rule: 'Subject pronoun before the verb, possessive determiner before the noun.'
  },
  u9c1_13: {
    q: 'Instead they use ______ nose and ears to orientate themselves.',
    a: 'their',
    why: 'A possessive determiner is needed before the noun phrase <em>nose and ears</em>, and it agrees with the plural subject <em>they</em>.',
    wrong: [
      { opt: 'its', why: '<em>Its</em> is singular, so it does not agree with <em>they</em> at the start of the same sentence.' },
      { opt: 'them', why: 'An object pronoun cannot come before a noun. <em>Use them</em> would be possible, but not <s>use them nose</s>.' }
    ],
    rule: 'Match every possessive in a sentence to the subject you have chosen.'
  },
  u9c1_14: {
    q: 'Instead they use their nose and ears to orientate ______.',
    a: 'themselves',
    why: 'The bats orientate the bats: subject and object are the same, so the reflexive is used, in the plural to agree with <em>they</em>.',
    wrong: [
      { opt: 'them', why: 'This would mean the bats orientate some other creatures. The reflexive is what shows the action comes back to the subject.' },
      { opt: 'itself', why: '<em>Itself</em> is singular, which clashes with the plural <em>they</em> and <em>their</em> in the same sentence.' }
    ],
    rule: 'Reflexives after verbs like <em>orientate, wrap, enjoy, help</em> when the doer is also the receiver.'
  },

  /* ── C2 Replace the repeated nouns with pronouns (email) ── */
  u9c2_1: {
    q: "My course is going well and I'm enjoying [my course] ______ a lot.",
    a: 'it',
    why: '<em>My course</em> has just been mentioned, so repeating it sounds heavy. The course is a singular thing and it is the object of <em>enjoying</em>, so the object pronoun <em>it</em> takes its place.',
    wrong: [
      { opt: 'mine', why: '<em>Mine</em> would contrast your course with somebody else\'s. Here there is no contrast — you simply need to avoid repeating the same noun.' },
      { opt: 'its', why: '<em>Its</em> is a possessive determiner and must be followed by a noun. It cannot be the object of <em>enjoying</em>.' }
    ],
    rule: 'Use <em>it</em> to refer back to a singular thing already mentioned.'
  },
  u9c2_2: {
    q: 'How is [your course] ______ going?',
    a: 'yours',
    why: 'Here there <strong>is</strong> a contrast — my course versus your course — so the possessive pronoun <em>yours</em> replaces <em>your course</em> and keeps the contrast clear.',
    wrong: [
      { opt: 'it', why: '<em>It</em> would most naturally refer back to <em>my course</em>, the course already under discussion, so the reader would lose track of whose course you mean.' },
      { opt: 'your', why: '<em>Your</em> is a determiner and cannot stand on its own. Either keep the noun (<em>your course</em>) or use the pronoun (<em>yours</em>).' }
    ],
    rule: 'Possessive pronouns are ideal for contrasting owners: <em>mine … yours</em>.'
  },
  u9c2_3: {
    q: 'My best friend here is Paul. [Paul] ______ lives in the flat next to mine.',
    a: 'He',
    why: 'Paul has just been named, so the subject of <em>lives</em> becomes <em>he</em>. It starts the sentence, so it takes a capital letter.',
    wrong: [
      { opt: 'Him', why: '<em>Him</em> is the object form and cannot be the subject of <em>lives</em>: <s>Him lives in the flat</s>.' },
      { opt: 'His', why: '<em>His</em> as a determiner needs a noun after it, and as a pronoun it means "the thing belonging to him" — neither fits a subject slot before <em>lives</em>.' }
    ],
    rule: 'Name the person once, then switch to a pronoun.'
  },
  u9c2_4: {
    q: 'He lives in the flat next to [my flat] ______.',
    a: 'mine',
    why: '<em>Flat</em> has already appeared in the same sentence, so <em>my flat</em> becomes the possessive pronoun <em>mine</em>. It replaces determiner + noun in one word.',
    wrong: [
      { opt: 'my', why: 'You cannot end a phrase with a bare determiner: <s>next to my</s>. A possessive pronoun is needed to stand alone.' },
      { opt: 'me', why: '<em>Next to me</em> would mean he lives beside <strong>you</strong> personally rather than beside your flat, so the possessive meaning is lost.' }
    ],
    rule: 'Avoid repeating a noun by turning <em>my</em> + noun into <em>mine</em>.'
  },
  u9c2_5: {
    q: 'and I usually eat most of my meals with [Paul] ______.',
    a: 'him',
    why: 'The gap follows the preposition <em>with</em>, so an object pronoun is needed. Paul is male and singular, so <em>him</em>.',
    wrong: [
      { opt: 'he', why: '<em>He</em> is the subject form and cannot follow a preposition: <s>with he</s>.' },
      { opt: 'himself', why: 'A reflexive would need the subject to be Paul as well, but the subject here is <em>I</em>.' }
    ],
    rule: 'After a preposition, always the object form: <em>with him</em>, <em>for her</em>, <em>to them</em>.'
  },
  u9c2_6: {
    q: "I'm doing most of the cooking though, because [Paul] ______ had an accident last week.",
    a: 'he',
    why: 'Paul is the subject of <em>had</em>, and he has already been named twice, so the subject pronoun <em>he</em> is used. It is inside the sentence, so no capital letter.',
    wrong: [
      { opt: 'him', why: 'The object form cannot be a subject: <s>because him had an accident</s>.' },
      { opt: 'his', why: '<em>His</em> shows possession and needs a noun after it. It cannot be the subject of <em>had an accident</em>.' }
    ],
    rule: 'Write the pronoun with a small letter unless it opens the sentence (or is <em>I</em>).'
  },
  u9c2_7: {
    q: '[The university authorities] ______ have decided that students shouldn\'t be allowed to bring cars up to the campus.',
    a: 'They',
    why: 'The previous sentence has already mentioned <em>changes at the university</em>, so the reader knows who made them and the full noun phrase can be dropped. This is also the <em>they</em> from section B3 that means the authorities. The plural verb <em>have</em> needs a plural pronoun, and the capital is needed because the gap opens the sentence.',
    wrong: [
      { opt: 'Them', why: 'The object form cannot be a subject: <s>Them have decided</s>.' },
      { opt: 'It', why: 'A singular pronoun would need <em>has decided</em>, and <em>authorities</em> is plural.' }
    ],
    rule: '<em>They</em> often stands for the government, the authorities or experts.'
  },
  u9c2_8: {
    q: '[The car driver] ______ didn\'t stop and check if he was okay.',
    a: 'He',
    why: '<em>A car driver</em> was named in the previous sentence, so the noun phrase can be replaced. The gap is the subject of <em>didn\'t stop</em> and it opens the sentence, so a subject pronoun with a capital letter is needed; the email treats the driver as male, hence <em>He</em>.',
    wrong: [
      { opt: 'Him', why: 'The object form cannot be a subject: <s>Him didn\'t stop</s>.' },
      { opt: 'It', why: '<em>It</em> is for things, not people. The driver is a person, so a personal pronoun is needed.' }
    ],
    rule: 'In this task the word box tells you which pronouns are available — count them off as you use them.'
  },
  u9c2_9: {
    q: "He didn't stop and check if [Paul] ______ was okay.",
    a: 'he',
    why: 'Paul is the subject of <em>was</em> in the <em>if</em>-clause, so the subject pronoun <em>he</em> replaces the name. No capital, because the clause is inside the sentence.',
    wrong: [
      { opt: 'him', why: 'The object form cannot be the subject of <em>was</em>: <s>if him was okay</s>.' },
      { opt: 'himself', why: 'A reflexive needs the same person as the subject of its own clause; here <em>he</em> is that subject, so a plain pronoun is correct.' }
    ],
    rule: 'A pronoun can refer back across a clause boundary as long as it is clear who is meant.'
  },
  u9c2_10: {
    q: 'Luckily [Paul] ______ was not badly hurt and managed to pick up his bike.',
    a: 'he',
    why: 'Paul is still the person under discussion and is the subject of <em>was</em>, so <em>he</em> keeps the email flowing without repeating the name a fifth time.',
    wrong: [
      { opt: 'him', why: 'The object form cannot be a subject: <s>Luckily him was not badly hurt</s>.' },
      { opt: 'his', why: '<em>His</em> shows possession. It would need a noun after it, and it does not name the person who was hurt.' }
    ],
    rule: 'Repeating a name where a pronoun would do is a common cause of unnatural English.'
  },
  u9c2_11: {
    q: 'The doctor said his finger was probably broken and strapped [his finger] ______ up.',
    a: 'it',
    why: '<em>His finger</em> appears in the first half of the same sentence, so the second mention becomes <em>it</em> — a singular thing acting as the object of <em>strapped</em>.',
    wrong: [
      { opt: 'him', why: 'That would mean the doctor strapped Paul up, not the finger. <em>It</em> keeps the reference on the finger.' },
      { opt: 'its', why: '<em>Its</em> is possessive and must be followed by a noun, so it cannot be the object of <em>strapped</em>.' }
    ],
    rule: 'Body parts and objects take <em>it</em> on second mention.'
  },
  u9c2_12: {
    q: "so he can't hold anything in his right hand and [Paul] ______ can't really cook for himself.",
    a: 'he',
    why: 'The subject of <em>can\'t cook</em> is still Paul, so the subject pronoun <em>he</em> is used. There is already a <em>he</em> earlier in the same sentence, which is what makes the repeated name so clumsy.',
    wrong: [
      { opt: 'him', why: 'An object pronoun cannot be the subject of <em>can\'t cook</em>: <s>him can\'t really cook</s>.' },
      { opt: 'himself', why: 'The reflexive belongs in the <strong>next</strong> gap, after <em>for</em>. A reflexive is not used as the subject of a clause.' }
    ],
    rule: 'One pronoun per job: subject slot → subject pronoun.'
  },
  u9c2_13: {
    q: "he can't really cook for [Paul] ______.",
    a: 'himself',
    why: 'The subject of <em>cook</em> and the person the cooking is for are the same man, so the reflexive <em>himself</em> is required after <em>for</em>.',
    wrong: [
      { opt: 'him', why: '<em>Cook for him</em> would mean cooking for somebody else. The reflexive is what shows the action comes back to the subject.' },
      { opt: 'he', why: 'A subject pronoun cannot follow the preposition <em>for</em>.' }
    ],
    rule: 'Same person as subject and after a preposition → reflexive.'
  },

  /* ── C3 A student's opinion on space exploration: pronoun or <em>there</em> ── */
  u9c3_1: {
    q: 'Well, I think that ______ are a lot of different factors to take into consideration.',
    a: 'there',
    why: 'The sentence says that something exists, and existence is expressed with <em>there</em> + <em>be</em> + noun phrase. The plural noun phrase <em>a lot of different factors</em> takes <em>are</em>.',
    wrong: [
      { opt: 'it', why: '<em>It</em> is never used to say that something exists: <s>It is a lot of factors</s>. English uses <em>there is/there are</em> for that job.' },
      { opt: 'they', why: '<em>They</em> would have to refer back to something already mentioned, but the factors are being introduced here for the first time.' }
    ],
    rule: 'Use <em>there</em> + <em>be</em> to introduce something new; <em>it</em> cannot do this.'
  },
  u9c3_2: {
    q: 'some countries want to show the rest of the world that ______ are successful',
    a: 'they',
    why: '<em>They</em> is the subject of <em>are successful</em> and refers back to <em>some countries</em>. The plural verb <em>are</em> confirms a plural subject pronoun.',
    wrong: [
      { opt: 'there', why: '<em>There are successful</em> has no noun phrase after the verb, so the existential pattern is incomplete and meaningless here.' },
      { opt: 'it', why: '<em>It</em> is singular, so it clashes with the plural <em>some countries</em> and with the verb <em>are</em>.' }
    ],
    rule: 'A pronoun that refers back to a plural noun must be plural.'
  },
  u9c3_3: {
    q: 'and ______ can do this with a space exploration programme.',
    a: 'they',
    why: 'The subject of <em>can do</em> is still <em>some countries</em>, so the plural subject pronoun <em>they</em> is repeated for the second verb.',
    wrong: [
      { opt: 'it', why: '<em>It</em> is singular, which breaks the agreement with <em>some countries</em> established earlier in the sentence.' },
      { opt: 'them', why: 'The object form cannot be the subject of <em>can do</em>: <s>them can do this</s>.' }
    ],
    rule: 'Keep the same pronoun for the same subject across coordinated clauses.'
  },
  u9c3_4: {
    q: '______ seems that it is more important for these countries to impress the world …',
    a: 'It',
    why: '<em>It seems that…</em> is a fixed pattern in which <em>it</em> is an empty subject carrying no meaning of its own — the real content is the <em>that</em>-clause. The capital is needed because it starts the sentence.',
    wrong: [
      { opt: 'There', why: '<em>There</em> is only used with <em>be</em> to show existence. <s>There seems that…</s> is not a possible structure.' },
      { opt: 'They', why: '<em>They</em> would have to refer to people, but nobody performs the seeming — the sentence is about how things appear in general.' }
    ],
    rule: '<em>It seems / it appears / it looks like</em> + clause — <em>it</em> is an empty subject.'
  },
  u9c3_5: {
    q: 'It seems that ______ is more important for these countries to impress the world than to look after their own people.',
    a: 'it',
    why: 'The real subject is the infinitive phrase <em>to impress the world</em>, and English does not usually put a long infinitive first. Instead the empty subject <em>it</em> holds the position and the infinitive follows.',
    wrong: [
      { opt: 'there', why: '<em>There is more important…</em> has no noun phrase for the existential pattern, so it is not grammatical.' },
      { opt: 'this', why: '<em>This</em> points back to something already mentioned. Here nothing has been mentioned yet — the meaning comes from the infinitive after the adjective.' }
    ],
    rule: 'Pattern: <em>It is</em> + adjective + (<em>for</em> somebody) + <em>to</em> + infinitive.'
  },
  u9c3_6: {
    q: 'Sometimes ______ is difficult to understand this …',
    a: 'it',
    why: 'The same empty-subject pattern: the real subject is <em>to understand this</em>, so <em>it</em> fills the subject slot before <em>is difficult</em>.',
    wrong: [
      { opt: 'there', why: 'Again there is no noun phrase after the verb, which the <em>there is/are</em> pattern requires.' },
      { opt: 'that', why: '<em>That</em> would need to point at something specific already said. The difficulty is introduced by the infinitive that follows.' }
    ],
    rule: '<em>It is difficult/easy/important to</em> + verb — the infinitive is the real subject.'
  },
  u9c3_7: {
    q: 'because every country in the world has ______ problems',
    a: 'its',
    why: 'A possessive determiner is needed before the noun <em>problems</em>, and <em>every country</em> is grammatically singular — the verb <em>has</em> proves it — so <em>its</em>.',
    wrong: [
      { opt: 'their', why: 'Tempting because <em>problems</em> is plural, but the possessive agrees with the owner <em>every country</em>, which is singular.' },
      { opt: "it's", why: '<em>It\'s</em> means <em>it is</em>. The possessive <em>its</em> has no apostrophe.' }
    ],
    rule: '<em>every</em> + singular noun takes a singular verb and a singular possessive.'
  },
  u9c3_8: {
    q: "has poor people that need to be looked after because they can't look after ______.",
    a: 'themselves',
    why: '<em>They</em> refers to the poor people, and they are also the ones who would be looked after, so subject and object are the same and the reflexive is needed — plural, to agree with <em>they</em>.',
    wrong: [
      { opt: 'them', why: 'That would mean they cannot look after some other group. The point is that they cannot manage on their own.' },
      { opt: 'itself', why: '<em>Itself</em> is singular and does not agree with the plural <em>they</em> immediately before the gap.' }
    ],
    rule: '<em>look after yourself</em> = manage without help.'
  },
  u9c3_9: {
    q: 'these countries should look after people first before ______ start trying to send men to the moon!',
    a: 'they',
    why: '<em>They</em> is the subject of <em>start</em> and refers back to <em>these countries</em>. The bare verb <em>start</em> (not <em>starts</em>) shows the subject is plural.',
    wrong: [
      { opt: 'there', why: '<em>There</em> is not a personal subject and cannot perform the action <em>start trying</em>.' },
      { opt: 'it', why: '<em>It</em> is singular, so it would need <em>starts</em> and would clash with <em>these countries</em>.' }
    ],
    rule: 'Check the verb ending to confirm your pronoun\'s number.'
  },
  u9c3_10: {
    q: '______ are too many other problems here on earth that we need to sort out.',
    a: 'There',
    why: 'This states that problems exist, so the existential pattern <em>there</em> + <em>are</em> + noun phrase is used. It begins the sentence, so it is capitalised.',
    wrong: [
      { opt: 'They', why: '<em>They</em> has to point back to a group already mentioned, and it would claim that group <strong>is</strong> the problems rather than saying the problems exist.' },
      { opt: 'It', why: '<em>It</em> cannot introduce existence, and it is singular while <em>are</em> is plural.' }
    ],
    rule: '<em>There are too many / a lot of / several</em> + plural noun.'
  },

  /* ── C4 Recycling: choose the correct word ── */
  u9c4_1: {
    q: 'There are many reasons why ______ should recycle household waste.',
    a: 'we',
    why: '<em>We</em> means people in general, with the writer included — a natural choice in an opinion essay because it makes the argument shared rather than preachy.',
    wrong: [
      { opt: 'they', why: '<em>They</em> would push the responsibility onto some other group and leave the writer outside it, which weakens an argument about what everybody should do.' },
      { opt: 'it', why: 'Recycling is done by people. <em>It</em> is an impersonal pronoun and cannot be the one performing <em>should recycle</em>.' }
    ],
    rule: '<em>we</em> = everybody, speaker included; <em>you</em> = people in general, speaker not necessarily included.'
  },
  u9c4_2: {
    q: 'to avoid using up valuable resources making new things when ______ is not necessary.',
    a: 'it',
    why: '<em>It</em> refers back to the whole idea of making new things, not to a single noun. This is one of the main jobs of <em>it</em>: standing for a phrase, a clause or an idea. The key also accepts <em>it is</em>.',
    wrong: [
      { opt: 'they', why: 'A plural pronoun would have to refer to <em>new things</em>, giving the odd meaning that the things themselves are unnecessary rather than the process of making them.' },
      { opt: 'there', why: '<em>There</em> only works with <em>be</em> + a noun phrase to show existence. <em>Not necessary</em> is an adjective, so the pattern does not fit.' }
    ],
    rule: '<em>It</em> can refer back to an idea or a whole clause, not just to a noun.'
  },
  u9c4_3: {
    q: 'I do not think the government should make ______ compulsory for people to recycle their waste.',
    a: 'it',
    why: 'The real object of <em>make</em> is the long infinitive phrase <em>for people to recycle their waste</em>. English puts the empty <em>it</em> in the object slot first and leaves the infinitive until after the adjective.',
    wrong: [
      { opt: 'them', why: '<em>Make them compulsory</em> would need a plural thing already mentioned. Nothing plural has been named, and the sentence continues with an infinitive.' },
      { opt: 'this', why: '<em>This</em> points back at something already stated. Here the content comes <strong>after</strong> the adjective, which is exactly the job of empty <em>it</em>.' }
    ],
    rule: 'Pattern: <em>make it</em> + adjective + <em>for</em> somebody + <em>to</em> + infinitive.'
  },
  u9c4_4: {
    q: 'If the government makes a law that all households must recycle ______ rubbish, …',
    a: 'their',
    why: 'A possessive determiner is needed before the noun <em>rubbish</em>, and it must agree with the plural <em>all households</em>.',
    wrong: [
      { opt: 'its', why: '<em>Its</em> is singular, so it does not agree with the plural owner <em>all households</em>. Check the noun that owns the rubbish, not the verb.' },
      { opt: 'they', why: 'A subject pronoun cannot sit in front of a noun. Before a noun you need <em>their</em>.' }
    ],
    rule: 'Possessive determiner agrees with the owner: <em>households → their</em>.'
  },
  u9c4_5: {
    q: '…, ______ could lead to more problems.',
    a: 'it',
    why: '<em>It</em> refers back to the entire situation described in the <em>if</em>-clause — the government making such a law. A whole clause is singular, so the pronoun is singular.',
    wrong: [
      { opt: 'they', why: 'A plural pronoun would look for a plural noun such as <em>households</em>, but it is the new law, not the households, that could cause problems.' },
      { opt: 'there', why: '<em>There</em> cannot be the subject of an ordinary verb like <em>lead</em>; it only pairs with <em>be</em> to show existence.' }
    ],
    rule: 'Use <em>it</em> to sum up a previous clause or idea in one word.'
  },
  u9c4_6: {
    q: 'For example, how can ______ check that people are recycling everything?',
    a: 'you',
    why: '<em>You</em> here means people in general — anybody who might try to enforce the rule. It is the impersonal <em>you</em> from section B3, not the reader personally.',
    wrong: [
      { opt: 'it', why: 'Checking is done by people, so an impersonal <em>it</em> cannot be the subject of <em>check</em>.' },
      { opt: 'there', why: '<em>There</em> is not a personal subject and cannot perform the action <em>check</em>.' }
    ],
    rule: 'Impersonal <em>you</em> = anyone, people in general.'
  },
  u9c4_7: {
    q: '______ is not practical to do this.',
    a: 'it',
    why: 'Another empty subject: the real subject is the infinitive <em>to do this</em>, and English prefers to start with <em>it</em>. The key also accepts writing the clause out in full, or reordering it as <em>to do this is not practical</em>.',
    wrong: [
      { opt: 'there', why: 'The <em>there is/are</em> pattern needs a noun phrase after the verb, but <em>not practical</em> is an adjective.' },
      { opt: 'this', why: '<em>This is not practical</em> is grammatical, but the sentence already ends with <em>to do this</em>, so <em>this</em> would repeat itself awkwardly.' }
    ],
    rule: '<em>It is</em> + adjective + <em>to</em> + infinitive is the standard essay pattern.'
  },
  u9c4_8: {
    q: 'there is the argument that individuals should be allowed to decide for ______ whether to throw something away',
    a: 'themselves',
    why: 'The people doing the deciding are the same people the decision is for, so the reflexive is needed after <em>for</em>. <em>Individuals</em> is plural, so <em>themselves</em>. <em>Decide for yourself</em> also carries the useful sense of "without being told what to do".',
    wrong: [
      { opt: 'them', why: 'That would mean somebody else decides on their behalf — the exact opposite of the writer\'s point about personal choice.' },
      { opt: 'himself', why: '<em>Himself</em> is singular and male, so it agrees neither with the plural <em>individuals</em> nor with a mixed group.' }
    ],
    rule: '<em>decide for yourself / by yourself</em> = without help or instruction.'
  },
  u9c4_9: {
    q: 'whether to throw something away or to recycle ______.',
    a: 'it',
    why: '<em>It</em> refers back to <em>something</em>, which is singular. Using a pronoun here also keeps the two halves of the choice neatly balanced.',
    wrong: [
      { opt: 'them', why: '<em>Something</em> is singular, so a plural pronoun does not agree with it.' },
      { opt: 'themselves', why: 'A reflexive would mean the objects recycle themselves. The subject of <em>recycle</em> is the individuals, not the rubbish.' }
    ],
    rule: '<em>something</em>, <em>anything</em>, <em>everything</em> are singular and take <em>it</em>.'
  },
  u9c4_10: {
    q: 'The most successful are ______ where the government gives each household special boxes …',
    a: 'the ones',
    why: '<em>One</em>/<em>ones</em> avoids repeating a countable noun — here <em>recycling schemes</em> from the sentence before. <em>The most successful are the ones where…</em> is much lighter than repeating <em>schemes</em>.',
    wrong: [
      { opt: 'them', why: '<em>Them</em> stands for a group the reader can already identify, so it cannot be narrowed down by a <em>where</em>-clause. The gap needs a word that a relative clause can define — <em>the ones where…</em>' },
      { opt: 'the one', why: 'The singular would suggest only a single scheme exists. <em>The most successful are…</em> with the plural verb <em>are</em> calls for <em>the ones</em>.' }
    ],
    rule: '<em>one</em>/<em>ones</em> replaces a countable noun; <em>it</em>/<em>them</em> replaces a specific thing already identified.'
  },
  u9c4_11: {
    q: '…special boxes to put different kinds of waste in, and ______ provide a regular collection service.',
    a: 'they',
    why: 'This is the <em>they</em> that means the authorities. British English regularly treats <em>the government</em> as a group of people and refers back to it with <em>they</em> and a plural verb — <em>they provide</em>.',
    wrong: [
      { opt: 'there', why: '<em>There</em> only combines with <em>be</em> to show existence; it cannot be the subject of <em>provide</em>.' },
      { opt: 'them', why: 'The object form cannot be the subject of <em>provide</em>: <s>them provide a service</s>.' }
    ],
    rule: '<em>They</em> = the government, the authorities, the scientists.'
  },
  u9c4_12: {
    q: '______ are separate boxes for plastic, metal, glass etc.',
    a: 'There',
    why: 'The sentence tells us that separate boxes exist, so the existential pattern <em>there</em> + <em>are</em> + plural noun phrase is used. It opens the sentence, so it takes a capital.',
    wrong: [
      { opt: 'They', why: '<em>They</em> would have to point back to something already mentioned and say that it <strong>is</strong> the boxes. The writer is announcing that the boxes exist, which is a different job.' },
      { opt: 'It', why: '<em>It</em> cannot show existence, and it is singular while the verb is <em>are</em>.' }
    ],
    rule: 'New information exists → <em>there is/are</em>; known information → <em>it/they</em>.'
  },
  u9c4_13: {
    q: 'This makes ______ easier for people to recycle …',
    a: 'it',
    why: 'The same <em>make it</em> + adjective + <em>for</em> + infinitive pattern as earlier: the empty <em>it</em> holds the object position and the real content is <em>for people to recycle</em>.',
    wrong: [
      { opt: 'them', why: '<em>Make them easier</em> would need a plural thing already mentioned to be the object, but the sentence continues with an infinitive instead.' },
      { opt: 'this', why: '<em>This</em> already opens the sentence as the subject. Repeating it as the object would be confusing as well as unidiomatic.' }
    ],
    rule: '<em>make it easier/harder/possible for</em> somebody <em>to</em> do something.'
  },
  u9c4_14: {
    q: '… and ______ are therefore less likely to throw things in the rubbish bin.',
    a: 'they',
    why: '<em>They</em> refers back to <em>people</em> earlier in the same sentence. It is plural, and the plural verb <em>are</em> confirms it.',
    wrong: [
      { opt: 'there', why: '<em>There are less likely</em> has no noun phrase, so the existential pattern does not work; and nothing would be doing the throwing.' },
      { opt: 'it', why: '<em>It</em> is singular, so it clashes with the plural <em>people</em> and with the verb <em>are</em>.' }
    ],
    rule: 'Make sure a pronoun has a clear, matching noun to point back to.'
  },

  /* ── Grammar Focus Task: match each pronoun (1–5) to its use (A–E) ── */
  u9gft_1: {
    q: 'Pronoun 1 (it): … some people believe this cannot justify the huge amount of money spent on space research when there is a greater need for it here on earth …',
    a: 'C — to refer to money',
    why: '<em>It</em> points back to <em>money</em>, the uncountable noun mentioned just before. Uncountable nouns are singular, so the pronoun that replaces them is <em>it</em>.',
    wrong: [
      { opt: 'A — a subject which doesn\'t carry a specific meaning', why: 'This <em>it</em> is not a subject at all — it follows the preposition <em>for</em>, and it does carry a meaning: money.' },
      { opt: 'E — to replace an infinitive as a subject', why: 'There is no infinitive anywhere in this clause for <em>it</em> to stand in for.' },
      { opt: 'B — to refer to the United States and the USSR', why: 'Those two countries are plural and appear later in the essay, so they would need <em>they</em>, not <em>it</em>.' }
    ],
    rule: 'Uncountable nouns such as <em>money</em>, <em>research</em> and <em>information</em> take <em>it</em>.'
  },
  u9gft_2: {
    q: 'Pronoun 2 (It): … It would have been much easier and cheaper if they had pooled resources and information …',
    a: 'A — a subject which doesn\'t carry a specific meaning',
    why: 'This <em>It</em> is an empty subject: it fills the subject slot before <em>would have been</em> but refers to nothing in particular — the meaning is carried by the <em>if</em>-clause that follows.',
    wrong: [
      { opt: 'C — to refer to money', why: 'Money is not what would have been easier and cheaper; the joint expedition would have been. This <em>It</em> replaces no noun at all.' },
      { opt: 'E — to replace an infinitive as a subject', why: 'The real content here is an <em>if</em>-clause, not an infinitive phrase, so E belongs to a different sentence.' },
      { opt: 'D — to refer to people in general', why: 'People in general would be <em>we</em> or <em>you</em>. <em>It</em> never refers to people.' }
    ],
    rule: 'Empty <em>it</em> starts sentences about weather, time, distance — and general judgements like this one.'
  },
  u9gft_3: {
    q: 'Pronoun 3 (they): … if they had pooled resources and information, and made a joint expedition into space …',
    a: 'B — to refer to the United States and the USSR',
    why: '<em>They</em> replaces the two countries named in the previous sentence. Two named things are plural, so the plural pronoun is used to avoid repeating both names.',
    wrong: [
      { opt: 'D — to refer to people in general', why: 'This <em>they</em> is specific: the reader knows exactly which two countries are meant, because they were just named.' },
      { opt: 'A — a subject which doesn\'t carry a specific meaning', why: 'It is a subject, but it carries a very specific meaning. Only <em>it</em> can be an empty subject in English.' },
      { opt: 'C — to refer to money', why: 'Money is uncountable and singular, so it could not be replaced by <em>they</em>.' }
    ],
    rule: 'Use a plural pronoun to refer back to two or more named things.'
  },
  u9gft_4: {
    q: 'Pronoun 4 (It): … It is very difficult to argue against these criticisms …',
    a: 'E — to replace an infinitive as a subject',
    why: 'The real subject is the infinitive phrase <em>to argue against these criticisms</em>. English avoids starting with a long infinitive, so <em>It</em> takes the subject position and the infinitive comes after the adjective.',
    wrong: [
      { opt: 'A — a subject which doesn\'t carry a specific meaning', why: 'Very close, and both are "empty" subjects — but here there <strong>is</strong> a specific structure being replaced, the infinitive, which makes E the more exact description.' },
      { opt: 'C — to refer to money', why: 'The thing that is difficult is arguing, not money.' },
      { opt: 'B — to refer to the United States and the USSR', why: 'Those are people-like plural subjects and would need <em>they</em>.' }
    ],
    rule: '<em>It is</em> + adjective + <em>to</em> + infinitive — a key essay pattern.'
  },
  u9gft_5: {
    q: 'Pronoun 5 (we): … In my opinion, we need a balance between how much money is spent on space exploration and how much money is invested into solving problems here on earth …',
    a: 'D — to refer to people in general',
    why: '<em>We</em> here means everybody — humanity in general — with the writer included. This is the standard way to make an opinion sound shared rather than personal in an IELTS essay.',
    wrong: [
      { opt: 'B — to refer to the United States and the USSR', why: 'Those two countries would be <em>they</em>. The writer is not a country, and the sentence has widened out to everyone.' },
      { opt: 'A — a subject which doesn\'t carry a specific meaning', why: '<em>We</em> always carries meaning: it includes the speaker. Only <em>it</em> can be a meaningless subject.' },
      { opt: 'C — to refer to money', why: 'Money is a thing and takes <em>it</em>; <em>we</em> is only used for people.' }
    ],
    rule: '<em>we</em> = people in general including the writer; <em>you</em> = people in general, more distant.'
  }
};
