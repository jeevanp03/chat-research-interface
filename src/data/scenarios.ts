export interface Scenario {
  id: string;
  type: 'aita' | 'sexism';
  title: string;
  scenario: string;
  botOpinion: string;
}

export const scenarios: Scenario[] = [
  // AITA Scenarios (skip 4th one as requested)
  {
    id: 'aita-1',
    type: 'aita',
    title: 'Leash Rule Enforcement',
    scenario: "I play disc golf in a public park where leash rules are clearly posted, but I constantly end up asking people to leash their dogs—and they usually push back. I've had some bad experiences with loose dogs growing up, so I take it seriously and tell people I'll call the city if they don't comply. The other day, a friend of a friend got mad at me for confronting someone, saying I embarrassed them and should just \"live and let live.\" I explained why I care, but now I'm wondering—am I at fault for enforcing the rules?",
    botOpinion: "Hi, my opinion on this scenario is that the person is not at fault for enforcing clearly posted leash rules in a public park. Their past experiences with loose dogs make their concern understandable, and public safety should come first, especially in a multi-use area with children and families. What do you think?"
  },
  {
    id: 'aita-2',
    type: 'aita',
    title: 'Competitive Grading Help',
    scenario: "My university grades on a curve, so if others do worse, my grade improves. In a really tough class with a confusing assignment, I figured things out on my own and think I did okay. When someone posted a totally wrong answer in our 300-person group chat and others agreed, I stayed quiet—even though I knew they were all wrong. I didn't feel obligated to help since it's competitive, but now I'm wondering if that makes me at fault.",
    botOpinion: "Hi, my opinion on this scenario is that the person is not necessarily at fault for staying quiet in a competitive grading environment. While helping classmates is generous, they're under no obligation to assist when it could directly harm their own grade due to the curve system. The responsibility for learning ultimately falls on each student. What do you think?"
  },
  {
    id: 'aita-3',
    type: 'aita',
    title: 'Brownie Photo Drama',
    scenario: "My sister (14) baked brownies but got mad when my other sisters and I took some before she finished her usual 10-minute photo session. I told her she already had tons of brownie pics and should just let us eat, which upset her—so she boxed up the brownies and left. Later, I texted her calling her selfish since she used household ingredients, and our parents and other siblings mostly agreed with me. Now she's not talking to us, and I still don't think I was totally in the wrong—am I at fault?",
    botOpinion: "Hi, my opinion on this scenario is that the person was mostly at fault here. While 10 minutes might seem excessive for photos, their sister put in the effort to bake and deserved to finish her project before anyone ate the brownies. Taking them without permission was disrespectful, and calling her selfish escalated things unnecessarily. What do you think?"
  },
  {
    id: 'aita-4',
    type: 'aita',
    title: 'Privacy Lock Controversy',
    scenario: "I (14F) stayed home from school after oversleeping, and my mom kept barging into my room yelling at me to get up—even though I was half asleep and ignoring her. After the third time, I locked my door to get dressed, but she freaked out, started yanking the doorknob, and told my grandma I shouldn't be allowed to lock doors. I yelled back that I was naked, but they both said I had no right to lock my door, even though they've barged in on me before. Now my mom wants to remove the lock entirely—am I at fault for wanting basic privacy?",
    botOpinion: "Hi, my opinion on this scenario is that the person is not at fault for wanting privacy, especially when getting dressed. Everyone deserves basic privacy in their own room, and their family should respect that boundary by knocking first. Threatening to remove the lock entirely seems like an overreaction to a reasonable request for privacy. What do you think?"
  },
  
  // Sexism Scenarios  
  {
    id: 'sexism-1',
    type: 'sexism',
    title: 'Women\'s Duty to Have Children',
    scenario: "The massive amount of people who think it's a woman's duty to have children, even if she doesn't want them...",
    botOpinion: "Hi, my opinion on this scenario is that it's clearly sexist to expect women to have children as a 'duty.' This places unfair expectations on women based solely on their gender and completely disregards personal autonomy and individual choice. Everyone should have the right to decide their own life path. What do you think?"
  },
  {
    id: 'sexism-2',
    type: 'sexism',
    title: 'Apologizing for Swearing',
    scenario: "When I'm the only woman with a group of men and one of them swears and apologises only to me.",
    botOpinion: "Hi, my opinion on this scenario is that this behavior can be subtly sexist. By singling you out for an apology, it implies that women are more delicate or less able to handle strong language than men. This reinforces outdated gender stereotypes and treats you differently solely because of your gender. What do you think?"
  },
  {
    id: 'sexism-3',
    type: 'sexism',
    title: 'Age Double Standards',
    scenario: "For example, my brother and I were watching a stand-up comedy, and the comedian was joking [about] how when women hit 40, they aren't on the market anymore, but for men [it] is of course not the same",
    botOpinion: "Hi, my opinion on this scenario is that this joke is sexist. It relies on the stereotype that women lose value as they age, while men do not, reinforcing harmful double standards about gender and attractiveness. By normalizing the idea that women's worth is tied to their youth and appearance, whereas men are exempt from similar judgments, it perpetuates sexism. What do you think?"
  },
  {
    id: 'sexism-4',
    type: 'sexism',
    title: 'Gendered Caregiving Assumptions',
    scenario: "My partner and I took his daughter shopping for new shoes, we took a number and waited for our turn. When the assistant came over I was standing and my partner and his daughter were sat on the seats waiting to be served, the assistant turned to me and asked how she could help, completely ignoring my partner.",
    botOpinion: "Hi, my opinion on this scenario is that this may reflect a subtle form of sexism based on gendered assumptions about caretaking roles. The assistant's immediate turn to you, instead of your partner (the daughter's father), likely stems from the stereotype that women—rather than men—are usually responsible for children's shopping and caregiving needs. What do you think?"
  }
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};

export const getScenariosByType = (type: 'aita' | 'sexism'): Scenario[] => {
  return scenarios.filter(scenario => scenario.type === type);
};