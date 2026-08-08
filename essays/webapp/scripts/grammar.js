/**
 * Grammar pattern analysis for IELTS essay paragraphs.
 * Detects structures and provides memorisable explanations.
 */
const GRAMMAR_PATTERNS = [
  {
    id: 'reporting-opinion',
    regex: /^(Some people|Many people|Those who|Supporters|Critics|Others)\s+(believe|think|argue|feel|claim|suggest|consider|contend)\s+that\b/i,
    title: 'Reporting Opinions',
    structure: 'Subject + believe/think/argue + that + clause',
    explanation: 'This structure introduces other people\'s views. Use it in body paragraphs to present a perspective before you respond to it. The "that" clause contains the reported opinion.',
    tip: 'Memorise variants: "Some people believe that…", "Critics argue that…", "Those who support… argue that…"'
  },
  {
    id: 'personal-opinion',
    regex: /^In my opinion,/i,
    title: 'Expressing Personal Opinion',
    structure: 'In my opinion, + main clause',
    explanation: 'A direct opinion marker placed at the start of a sentence. This clearly signals your personal stance to the examiner. Follow it with a clear, confident statement.',
    tip: 'Alternatives: "I believe that…", "From my perspective,…", "As I see it,…"'
  },
  {
    id: 'concession',
    regex: /\b(However|Nevertheless|On the other hand|Conversely|Despite this|That said),?\s/i,
    title: 'Concession / Contrast',
    structure: 'However, / On the other hand, + contrasting clause',
    explanation: 'Concession markers introduce an opposing or contrasting point. They show the examiner you can discuss multiple perspectives, which is essential for a high band score.',
    tip: '"However" is the most versatile. Use "On the other hand" only when directly comparing two sides.'
  },
  {
    id: 'exemplification',
    regex: /\bFor (example|instance),\s/i,
    title: 'Exemplification',
    structure: 'For example, / For instance, + specific example',
    explanation: 'Introduces a concrete example to support your argument. IELTS examiners look for specific examples — they turn a general claim into a convincing point.',
    tip: 'Place after your main argument sentence. Keep examples realistic and specific, not vague.'
  },
  {
    id: 'conclusion',
    regex: /^In conclusion,/i,
    title: 'Conclusion Signal',
    structure: 'In conclusion, + summary of main argument',
    explanation: 'Signals the final paragraph. Restate your thesis in different words and briefly summarise the key points. Do NOT introduce new ideas here.',
    tip: 'Keep conclusions to 1–2 sentences. Paraphrase your introduction — don\'t copy it.'
  },
  {
    id: 'reason-result',
    regex: /\b(As a result|Therefore|Consequently|This means that|For this reason)\b/i,
    title: 'Cause → Result',
    structure: 'Cause statement. As a result, / Therefore, + result',
    explanation: 'Links a cause to its effect. Shows logical reasoning, which boosts your Coherence & Cohesion score.',
    tip: '"As a result" is safest. Avoid overusing "Therefore" — it can sound repetitive.'
  },
  {
    id: 'conditional',
    regex: /\bIf\s+\w+\s+(were|was|is|are|do|does|did|could|should|would|fail|manage|succeed)\b/i,
    title: 'Conditional Structure',
    structure: 'If + condition clause, + result clause',
    explanation: 'Conditionals show hypothetical or real situations. Type 1 (If + present, will + verb) for likely scenarios. Type 2 (If + past, would + verb) for hypothetical ones.',
    tip: 'Use Type 2 conditionals for balanced arguments: "If governments invested more in…, this could lead to…"'
  },
  {
    id: 'comparison',
    regex: /\b(compared to|more\s+\w+\s+than|less\s+\w+\s+than|rather than|as\s+\w+\s+as)\b/i,
    title: 'Comparative Structure',
    structure: 'X is more/less [adjective] than Y',
    explanation: 'Comparisons allow you to weigh two options. Essential for Discussion and Advantages/Disadvantages essays.',
    tip: 'Combine with opinion: "I believe X is more effective than Y because…"'
  },
  {
    id: 'passive-voice',
    regex: /\b(is|are|was|were|been|being)\s+(considered|seen|viewed|regarded|thought|believed|expected|required|affected|influenced|shaped|given)\b/i,
    title: 'Passive Voice',
    structure: 'Subject + be + past participle (+ by agent)',
    explanation: 'Passive voice is common in academic writing to shift focus from the doer to the action or result. It sounds more formal and objective.',
    tip: 'Use passives for general truths: "Education is considered essential…" Avoid overuse — mix with active voice.'
  },
  {
    id: 'addition',
    regex: /^(In addition|Additionally|Furthermore|Moreover),?\s/i,
    title: 'Adding Points',
    structure: 'In addition, / Furthermore, + additional argument',
    explanation: 'These linking phrases add a new supporting point to your argument. They show you can develop ideas with depth.',
    tip: 'Use one per paragraph maximum. "In addition" is the most natural choice.'
  },
  {
    id: 'this-essay-will',
    regex: /This essay will (discuss|explore|examine|analyse|consider)\b/i,
    title: 'Essay Thesis Statement',
    structure: 'This essay will discuss/examine + topic + before giving my opinion',
    explanation: 'A thesis statement tells the reader what the essay will do. It\'s a clear roadmap that immediately sets expectations.',
    tip: 'Always include in your introduction. Match the essay type: "discuss both views", "explore the causes and suggest solutions".'
  },
  {
    id: 'relative-clause',
    regex: /,?\s+which\s+(can|could|may|might|would|has|have|is|are|often|also|not)\b/i,
    title: 'Non-restrictive Relative Clause',
    structure: ', which + verb phrase',
    explanation: 'Adds extra information about the preceding noun/idea. Uses a comma before "which". This structure adds sophistication to your writing.',
    tip: 'Use to extend a point naturally: "…funding for the arts, which can also boost tourism,…"'
  },
];

/**
 * Analyse a paragraph and return matching grammar patterns.
 * @param {string} text - The paragraph text
 * @returns {Array} Matching patterns with highlighted sentences
 */
function analyseGrammar(text) {
  const results = [];
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    for (const pattern of GRAMMAR_PATTERNS) {
      if (pattern.regex.test(trimmed) && !results.find(r => r.id === pattern.id)) {
        results.push({
          ...pattern,
          matchedSentence: trimmed
        });
      }
    }
  }

  // If no specific patterns matched, provide a general structure analysis
  if (results.length === 0) {
    results.push({
      id: 'general',
      title: 'Paragraph Structure',
      structure: 'Topic sentence → Supporting detail → Example/Explanation',
      explanation: 'This paragraph follows a standard academic structure. The first sentence introduces the point, followed by supporting evidence or reasoning.',
      tip: 'Every body paragraph should have: 1) Topic sentence, 2) Explanation, 3) Example. This is the TEE structure.',
      matchedSentence: sentences[0]?.trim() || text.substring(0, 100)
    });
  }

  return results;
}
