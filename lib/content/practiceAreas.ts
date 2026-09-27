// Practice areas shown in the homepage grid and popups.
// `icon` must match a key in components/PracticeIcon.tsx.

export type PracticeArea = {
  title: string;
  icon:
    | "termination"
    | "discrimination"
    | "harassment"
    | "retaliation"
    | "wage"
    | "overtime"
    | "disability"
    | "leave"
    | "whistleblower";
  summary: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    title: "Wrongful Termination",
    icon: "termination",
    summary:
      "California is an at-will state, but employers still can't fire you for an illegal reason — such as discrimination, taking protected leave, reporting wrongdoing or refusing to break the law. We examine the real reason behind your firing and hold employers accountable.",
  },
  {
    title: "Discrimination",
    icon: "discrimination",
    summary:
      "It is illegal to treat workers differently because of race, gender, age (40+), religion, national origin, sexual orientation, gender identity and other protected traits. We pursue claims under California's Fair Employment and Housing Act and federal law.",
  },
  {
    title: "Sexual Harassment",
    icon: "harassment",
    summary:
      "No one should have to endure unwanted advances, offensive comments or a hostile work environment. We help survivors document what happened, protect their jobs and pursue compensation from employers who failed to act.",
  },
  {
    title: "Retaliation",
    icon: "retaliation",
    summary:
      "If you were demoted, cut from the schedule or fired after complaining, requesting leave or supporting a coworker's claim, you may have a retaliation case. These claims are among the most common — and most powerful — in employment law.",
  },
  {
    title: "Wage & Hour",
    icon: "wage",
    summary:
      "Missed meal and rest breaks, off-the-clock work, minimum wage violations and late final paychecks all break California law. We recover unpaid wages plus the penalties employers owe.",
  },
  {
    title: "Unpaid Overtime",
    icon: "overtime",
    summary:
      "Many workers labeled 'exempt' or paid a salary are actually owed overtime. We review your duties and pay records to find out whether you've been shortchanged, and pursue what you're owed.",
  },
  {
    title: "Disability Accommodation",
    icon: "disability",
    summary:
      "Employers must make reasonable accommodations and engage in a good-faith process with workers who have physical or mental health conditions. We step in when employers refuse, delay or punish employees for asking.",
  },
  {
    title: "Pregnancy & Family Leave",
    icon: "leave",
    summary:
      "California gives workers strong rights to pregnancy disability leave and job-protected family leave. If you were denied leave or treated unfairly for taking it, we can help.",
  },
  {
    title: "Whistleblower Claims",
    icon: "whistleblower",
    summary:
      "Reporting fraud, safety hazards or illegal conduct is protected. When employers retaliate against whistleblowers, we fight to restore your career and recover damages.",
  },
];
