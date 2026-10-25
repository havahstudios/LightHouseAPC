import type { ServiceContent } from "./types";

// Employment law pages, part 1. General legal information — have the attorney review before launch.

export const employmentA: Record<string, ServiceContent> = {
  "wrongful-termination": {
    h1: "Los Angeles Wrongful Termination Lawyer",
    metaDescription:
      "Fired for an illegal reason? Our Los Angeles wrongful termination lawyers fight for lost wages and damages. Free, confidential consultation.",
    intro: [
      "Losing your job is hard. Losing it for an illegal reason is worse. As a Los Angeles wrongful termination lawyer, Lighthouse Law APC helps employees who were fired because of discrimination, retaliation, taking protected leave, or refusing to break the law hold their former employers accountable.",
      "California is an “at-will” employment state, which means an employer can usually let you go for any reason or no reason at all — but never for an unlawful one. When the real reason behind a firing is illegal, you may be entitled to lost pay, lost benefits, emotional distress damages, and in some cases punitive damages.",
    ],
    sections: [
      {
        heading: "What counts as wrongful termination in California?",
        paragraphs: [
          "Wrongful termination isn't simply being fired unfairly. It means you were let go for a reason the law forbids, or in a way that breaks a contract or a legal duty. California's Fair Employment and Housing Act (FEHA), the California Labor Code and federal laws all limit why an employer can end your job.",
        ],
        bullets: [
          "Firing based on race, sex, age (40+), disability, pregnancy, religion, sexual orientation or another protected trait",
          "Firing after you complained about harassment, discrimination, unpaid wages or unsafe conditions",
          "Firing for taking protected medical, pregnancy or family leave",
          "Firing for reporting illegal activity or refusing to participate in it",
          "Firing that breaks a written or implied employment contract",
          "Being forced to quit because conditions became intolerable (constructive discharge)",
        ],
      },
      {
        heading: "Signs your firing may have been illegal",
        paragraphs: [
          "Employers rarely admit to an illegal motive. Instead, these cases are usually built from timing, documents and patterns. Red flags include being fired shortly after you made a complaint or requested leave, a sudden string of negative reviews after years of good ones, a reason for termination that keeps changing, or being replaced by someone outside your protected group.",
          "Save anything that helps tell the story: performance reviews, emails, text messages, schedules, pay stubs and the names of coworkers who saw what happened. Avoid signing a severance or release agreement until you understand what rights you may be giving up.",
        ],
      },
      {
        heading: "What you may recover",
        paragraphs: [
          "Every case is different, but a successful wrongful termination claim can include back pay (wages and benefits you lost since being fired), front pay (future lost earnings), compensation for emotional distress, and attorney's fees under certain statutes. When an employer acted with malice or oppression, California law may also allow punitive damages.",
        ],
      },
      {
        heading: "Deadlines for wrongful termination claims",
        paragraphs: [
          "Timing matters. Discrimination and retaliation claims under FEHA generally must be filed with the California Civil Rights Department (CRD) within three years. Claims for wrongful termination in violation of public policy are generally subject to a two-year deadline, and some claims have much shorter windows. Talking with a lawyer early helps protect your options.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is considered wrongful termination?",
        answer:
          "In California, wrongful termination means being fired for a reason the law prohibits — such as discrimination, retaliation for a complaint, taking protected leave, or refusing to break the law — or in violation of an employment contract.",
      },
      {
        question: "Can I sue my employer for wrongful termination in an at-will state?",
        answer:
          "Yes. At-will employment lets employers fire workers without cause, but it never allows firing for an illegal reason. If your termination was discriminatory, retaliatory or violated public policy, you may have a claim.",
      },
      {
        question: "How do I prove I was wrongfully terminated?",
        answer:
          "Most cases rely on circumstantial evidence: suspicious timing, inconsistent explanations, sudden performance write-ups, comments from supervisors and how others were treated. A lawyer can help gather records and witness accounts to show the real reason.",
      },
      {
        question: "How much does a wrongful termination lawyer cost?",
        answer:
          "Lighthouse Law APC offers a free consultation, and many employment cases are handled on a contingency basis — meaning no attorney fees unless we recover money for you.",
      },
    ],
    related: ["retaliation", "employment-discrimination", "wrongful-discharge", "severance-agreements"],
  },

  whistleblower: {
    h1: "Los Angeles Whistleblower Lawyer",
    metaDescription:
      "Punished for reporting illegal activity at work? A Los Angeles whistleblower lawyer can protect your job and your rights. Free consultation.",
    intro: [
      "Speaking up takes courage. If you reported fraud, safety violations or other illegal conduct and your employer punished you for it, a Los Angeles whistleblower lawyer at Lighthouse Law APC can help you fight back.",
      "California has some of the strongest whistleblower protections in the country. Employers cannot fire, demote, threaten, cut the hours of or otherwise retaliate against workers who report — or refuse to take part in — activity they reasonably believe is illegal.",
    ],
    sections: [
      {
        heading: "What is a whistleblower?",
        paragraphs: [
          "A whistleblower is an employee who reports conduct they reasonably believe breaks a law, rule or regulation. You don't have to be right about the violation, and you don't have to go to the government — reporting to a supervisor or HR can be protected too.",
          "California Labor Code section 1102.5 is the main state whistleblower law. Other protections cover workplace health and safety complaints, healthcare and patient safety reports, government fraud, and reports to agencies like the Labor Commissioner or Cal/OSHA.",
        ],
        bullets: [
          "Reporting fraud, false billing or accounting irregularities",
          "Raising workplace safety or health hazards",
          "Reporting unpaid wages or other labor law violations",
          "Reporting patient safety concerns in healthcare settings",
          "Refusing to participate in conduct you believe is illegal",
          "Cooperating with a government investigation",
        ],
      },
      {
        heading: "What does whistleblower retaliation look like?",
        paragraphs: [
          "Retaliation can be obvious, like being fired the week after you made a report. It can also be subtle: being cut out of meetings, moved to a worse shift, suddenly written up, denied a promotion or pressured to resign. The closer the timing between your report and the negative treatment, the stronger the inference that the two are connected.",
        ],
      },
      {
        heading: "How California law helps whistleblowers",
        paragraphs: [
          "Under Labor Code 1102.5, once an employee shows that their protected report was a contributing factor in the employer's decision, the employer must prove by clear and convincing evidence that it would have made the same decision anyway. That framework gives whistleblowers meaningful leverage.",
          "Remedies may include reinstatement, lost wages and benefits, emotional distress damages, civil penalties and attorney's fees. Some claims also allow punitive damages.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a whistleblower protected by law?",
        answer:
          "Yes. In California, employees who report suspected illegal activity — internally or to a government agency — are protected from retaliation under Labor Code 1102.5 and several other state and federal laws.",
      },
      {
        question: "Do I have to report to the government to be protected?",
        answer:
          "No. Reporting to a supervisor, manager or anyone with authority to investigate or fix the problem can be protected, as long as you reasonably believed the conduct was unlawful.",
      },
      {
        question: "What if I was wrong about the violation?",
        answer:
          "You don't need to prove the employer actually broke the law. Protection generally applies if you had a reasonable, good-faith belief that the conduct was illegal.",
      },
      {
        question: "What should I do if I'm being retaliated against?",
        answer:
          "Write down dates and details, keep copies of your reports and any responses, and avoid signing anything before getting advice. Then speak with a whistleblower attorney about your options.",
      },
    ],
    related: ["retaliation", "wrongful-termination", "labor-law-violations", "wrongful-discharge"],
  },

  "workplace-harassment": {
    h1: "Los Angeles Workplace Harassment Lawyer",
    metaDescription:
      "Facing harassment at work? Our Los Angeles workplace harassment lawyers help employees stop the abuse and pursue compensation. Free consultation.",
    intro: [
      "No one should dread going to work because of how they're treated. A Los Angeles workplace harassment lawyer at Lighthouse Law APC helps employees who are targeted by supervisors, coworkers or even customers because of who they are.",
      "California's Fair Employment and Housing Act protects workers at businesses of every size from harassment based on protected characteristics. When employers fail to prevent or stop it, they can be held responsible.",
    ],
    sections: [
      {
        heading: "What is workplace harassment?",
        paragraphs: [
          "Legally, workplace harassment is unwelcome conduct based on a protected characteristic — such as race, sex, gender identity, sexual orientation, religion, national origin, age, disability or pregnancy — that is severe or pervasive enough to alter the conditions of your job. In California, a single serious incident can be enough.",
          "Harassment can take many forms. People often describe four broad types: verbal, physical, visual or written, and sexual or quid pro quo harassment.",
        ],
        bullets: [
          "Slurs, insults, “jokes” or comments about a protected trait",
          "Unwanted touching, blocking your path or physical intimidation",
          "Offensive images, messages, emails or social media posts",
          "Threats or pressure tied to your job or promotion",
          "Repeated mocking of an accent, religion, disability or appearance",
        ],
      },
      {
        heading: "Is yelling or rudeness harassment?",
        paragraphs: [
          "Not always. A boss who is harsh with everyone may be unpleasant without breaking the law. Conduct becomes illegal harassment when it's connected to a protected characteristic — or when it's retaliation for complaining about discrimination. A lawyer can help you sort out whether what you're experiencing crosses the line.",
        ],
      },
      {
        heading: "How to report workplace harassment",
        paragraphs: [
          "If it's safe to do so, report the harassment in writing to HR or a manager and keep a copy. Write down each incident with the date, what was said or done, and who saw it. You can also file a complaint with the California Civil Rights Department, generally within three years, or with the federal EEOC.",
          "Your employer is legally required to take reasonable steps to prevent and correct harassment — and it cannot retaliate against you for reporting it.",
        ],
      },
    ],
    faqs: [
      {
        question: "What constitutes workplace harassment?",
        answer:
          "Unwelcome conduct tied to a protected characteristic that is severe or pervasive enough to create an intimidating, hostile or offensive work environment. In California, one severe incident can qualify.",
      },
      {
        question: "What are the 4 types of workplace harassment?",
        answer:
          "Harassment is commonly grouped into verbal, physical, visual or written, and sexual (including quid pro quo) harassment. All can be unlawful when based on a protected trait.",
      },
      {
        question: "Which agency enforces laws against workplace harassment?",
        answer:
          "In California, the Civil Rights Department (CRD) enforces state law, and the U.S. Equal Employment Opportunity Commission (EEOC) enforces federal law. Many claims must be filed with one of these agencies before a lawsuit.",
      },
      {
        question: "Can my employer fire me for reporting harassment?",
        answer:
          "No. Retaliating against an employee for reporting or opposing harassment is illegal and can be its own claim.",
      },
    ],
    related: ["sexual-harassment", "hostile-work-environment", "retaliation", "employment-discrimination"],
  },

  "wage-and-hour": {
    h1: "Los Angeles Wage and Hour Lawyer",
    metaDescription:
      "Unpaid overtime, missed breaks or off-the-clock work? A Los Angeles wage and hour lawyer can help you recover what you're owed. Free consultation.",
    intro: [
      "You earned every hour you worked. A Los Angeles wage and hour lawyer at Lighthouse Law APC helps workers recover unpaid overtime, missed meal and rest break pay, minimum wage shortfalls and the penalties California employers owe when they break the rules.",
      "California's wage laws are among the most protective in the nation — and among the most commonly violated. Many workers are owed money without realizing it.",
    ],
    sections: [
      {
        heading: "How does overtime work in California?",
        paragraphs: [
          "Most non-exempt employees in California earn overtime at 1.5 times their regular rate for hours worked over 8 in a workday or over 40 in a workweek, and for the first 8 hours on a seventh consecutive day of work. Double time applies to hours over 12 in a day and over 8 on the seventh consecutive day.",
          "Being paid a salary doesn't automatically make you exempt. To be exempt, you generally must meet both a minimum salary threshold and specific job-duties tests. Misclassification is one of the most common ways workers lose overtime pay.",
        ],
      },
      {
        heading: "Common wage and hour violations",
        paragraphs: ["We regularly see employers violate California law in ways like these:"],
        bullets: [
          "Not paying overtime or double time, or miscalculating the regular rate",
          "Requiring work before clocking in or after clocking out",
          "Missed, late or interrupted meal and rest breaks without premium pay",
          "Paying below the state or local minimum wage",
          "Misclassifying employees as exempt or as independent contractors",
          "Late final paychecks after quitting or being fired",
          "Inaccurate wage statements or unreimbursed work expenses",
        ],
      },
      {
        heading: "Penalties employers may owe",
        paragraphs: [
          "Beyond the unpaid wages themselves, California law can add significant amounts: one extra hour of pay for each day a meal or rest break was missed, interest, waiting time penalties of up to 30 days' wages for late final pay, wage statement penalties, and attorney's fees. Workers can generally recover unpaid wages going back three years, and sometimes four.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is overtime after 8 hours or 40 hours in California?",
        answer:
          "Both. Non-exempt California employees generally earn overtime for hours over 8 in a day or over 40 in a week, plus double time for hours over 12 in a day.",
      },
      {
        question: "How much is overtime pay in California?",
        answer:
          "Overtime is 1.5 times your regular rate of pay, and double time is 2 times. Your regular rate can include certain bonuses and commissions, not just your hourly wage.",
      },
      {
        question: "Is overtime mandatory in California?",
        answer:
          "Employers can usually require reasonable overtime, but they must pay for it at the proper overtime or double-time rate.",
      },
      {
        question: "How far back can I recover unpaid wages?",
        answer:
          "Generally three years under the California Labor Code, and in some cases four years under California's Unfair Competition Law.",
      },
    ],
    related: ["labor-law-violations", "class-action", "retaliation", "wrongful-termination"],
  },

  "employment-discrimination": {
    h1: "Los Angeles Employment Discrimination Lawyer",
    metaDescription:
      "Treated unfairly at work because of who you are? A Los Angeles employment discrimination lawyer can help. Free, confidential consultation.",
    intro: [
      "Your job should depend on your work — not your race, gender, age, religion, disability or background. A Los Angeles employment discrimination lawyer at Lighthouse Law APC represents workers who were denied jobs, promotions, fair pay or fair treatment because of a protected characteristic.",
      "California's Fair Employment and Housing Act (FEHA) applies to employers with five or more employees and protects more categories than federal law. Federal laws like Title VII, the ADA and the ADEA add further protections.",
    ],
    sections: [
      {
        heading: "What is employment discrimination?",
        paragraphs: [
          "Employment discrimination happens when an employer treats an applicant or employee worse because of a protected characteristic. It can affect hiring, firing, pay, scheduling, assignments, promotions, training, discipline and benefits.",
        ],
        bullets: [
          "Race, color, ancestry and national origin (including hairstyle under the CROWN Act)",
          "Sex, gender, gender identity and gender expression",
          "Sexual orientation and marital status",
          "Age (40 and older)",
          "Physical or mental disability and medical condition",
          "Pregnancy, childbirth and related conditions",
          "Religion, including religious dress and grooming",
          "Military or veteran status and genetic information",
        ],
      },
      {
        heading: "How do you prove employment discrimination?",
        paragraphs: [
          "Direct evidence — like a manager saying you were passed over because of your age — is rare. Most cases are proven with circumstantial evidence: comparing how you were treated with coworkers outside your protected group, timing, statistics, shifting explanations, and comments or stereotypes from decision-makers.",
          "Employers often point to a “legitimate” reason. A key part of our work is showing that the stated reason doesn't hold up.",
        ],
      },
      {
        heading: "Where to file an employment discrimination complaint",
        paragraphs: [
          "In California, most discrimination claims start with a complaint to the Civil Rights Department (CRD), generally within three years of the discriminatory act. The CRD can issue a right-to-sue notice so your case can proceed in court. Federal claims are filed with the EEOC, generally within 300 days in California. A lawyer can choose the best path and handle the filing for you.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is employment discrimination?",
        answer:
          "Treating a job applicant or employee less favorably because of a protected characteristic, such as race, sex, age, disability, religion, national origin or sexual orientation.",
      },
      {
        question: "Can I sue my employer for discrimination?",
        answer:
          "Yes. After filing with the California Civil Rights Department and receiving a right-to-sue notice, you can bring a lawsuit seeking lost wages, emotional distress damages and more.",
      },
      {
        question: "Where does someone initially file an employment discrimination complaint?",
        answer:
          "In California, usually with the Civil Rights Department (CRD). Federal claims go to the U.S. Equal Employment Opportunity Commission (EEOC).",
      },
      {
        question: "Does my employer's size matter?",
        answer:
          "California's FEHA discrimination protections generally apply to employers with five or more employees. Harassment protections apply to employers of any size.",
      },
    ],
    related: ["racial-discrimination", "gender-discrimination", "age-discrimination", "disability-discrimination"],
  },

  retaliation: {
    h1: "Los Angeles Retaliation Lawyer",
    metaDescription:
      "Punished for complaining, requesting leave or speaking up? A Los Angeles retaliation lawyer can help you fight back. Free consultation.",
    intro: [
      "The law protects you when you stand up for your rights at work. A Los Angeles retaliation lawyer at Lighthouse Law APC represents employees who were fired, demoted, cut from the schedule or otherwise punished for doing something the law protects.",
      "Retaliation is one of the most common claims employees bring — and often one of the strongest, because the timeline itself can tell the story.",
    ],
    sections: [
      {
        heading: "What is retaliation in the workplace?",
        paragraphs: [
          "Workplace retaliation happens when an employer takes a negative action against an employee because the employee engaged in a legally protected activity. The negative action doesn't have to be a firing; it can be anything that would discourage a reasonable worker from speaking up.",
        ],
        bullets: [
          "Complaining about discrimination or harassment",
          "Reporting unpaid wages, overtime or break violations",
          "Requesting a disability accommodation or medical leave",
          "Taking pregnancy, family or sick leave",
          "Reporting safety hazards or suspected illegal activity",
          "Participating in an investigation or supporting a coworker's complaint",
        ],
      },
      {
        heading: "How do you prove retaliation?",
        paragraphs: [
          "A retaliation claim generally has three parts: you engaged in protected activity, your employer took an adverse action against you, and the two are connected. Close timing between a complaint and a demotion or termination is powerful evidence. So are sudden write-ups after a clean record, being singled out, and changing explanations from management.",
          "For certain protected activities — such as some wage complaints — California law creates a presumption of retaliation if the employer takes action within 90 days.",
        ],
      },
      {
        heading: "What you can recover",
        paragraphs: [
          "Depending on the claim, retaliation victims may recover lost wages and benefits, reinstatement, emotional distress damages, civil penalties, attorney's fees and, in some cases, punitive damages. Laws that prohibit retaliation include FEHA, Labor Code sections 98.6 and 1102.5, and federal statutes.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is retaliation in the workplace?",
        answer:
          "Any negative action an employer takes because you engaged in protected activity — like complaining about discrimination, reporting wage violations or taking protected leave.",
      },
      {
        question: "Is workplace retaliation illegal?",
        answer:
          "Yes. California and federal law prohibit retaliation against employees for exercising their workplace rights.",
      },
      {
        question: "What qualifies as retaliation in the workplace?",
        answer:
          "Firing, demotion, pay cuts, reduced hours, worse shifts, exclusion, unwarranted discipline or threats — when they happen because of protected activity.",
      },
      {
        question: "How long do I have to file a retaliation claim?",
        answer:
          "It depends on the law involved. FEHA retaliation claims generally must be filed with the Civil Rights Department within three years; other claims may have shorter deadlines.",
      },
    ],
    related: ["whistleblower", "wrongful-termination", "workplace-harassment", "fmla"],
  },

  "age-discrimination": {
    h1: "Los Angeles Age Discrimination Lawyer",
    metaDescription:
      "Pushed out, passed over or replaced because of your age? A Los Angeles age discrimination lawyer can protect workers 40+. Free consultation.",
    intro: [
      "Experience should be valued, not penalized. A Los Angeles age discrimination lawyer at Lighthouse Law APC represents workers 40 and older who were laid off, passed over or pushed out because of their age.",
      "Both California's Fair Employment and Housing Act and the federal Age Discrimination in Employment Act (ADEA) make it illegal to treat workers differently because they are 40 or older.",
    ],
    sections: [
      {
        heading: "What qualifies as age discrimination?",
        paragraphs: [
          "Age discrimination is any negative employment decision based on an employee's or applicant's age. It often appears during layoffs, reorganizations and hiring.",
        ],
        bullets: [
          "Being replaced by a much younger employee",
          "Layoffs that fall mostly on older workers",
          "Comments about being “overqualified,” “not a culture fit” or “ready to retire”",
          "Being pressured into early retirement",
          "Losing training, assignments or promotions to younger colleagues",
          "Job ads seeking “digital natives” or “recent graduates” only",
        ],
      },
      {
        heading: "How to prove age discrimination",
        paragraphs: [
          "Evidence often includes age-related remarks, a pattern of older workers being let go, the age of your replacement, and comparisons with how younger employees were treated. In California, salary-saving can't be used as a pretext to cut older, higher-paid workers.",
          "We also look closely at severance offers: when you're 40 or older, federal law gives you specific time to review an age-discrimination waiver — typically 21 days (45 days in a group layoff) — and 7 days to change your mind after signing.",
        ],
      },
      {
        heading: "The Age Discrimination in Employment Act and California law",
        paragraphs: [
          "The ADEA, passed in 1967, protects workers 40 and older at employers with 20 or more employees. California's FEHA protects the same age group but applies to employers with just five or more employees and often allows broader remedies, including uncapped emotional distress and punitive damages.",
        ],
      },
    ],
    faqs: [
      {
        question: "What age is age discrimination?",
        answer:
          "Under both California and federal law, age discrimination protections apply to workers who are 40 years old or older.",
      },
      {
        question: "What is the Age Discrimination in Employment Act (ADEA)?",
        answer:
          "A 1967 federal law that prohibits employers with 20 or more employees from discriminating against workers age 40 and over. California's FEHA offers similar, often stronger, protections.",
      },
      {
        question: "How do you prove age discrimination?",
        answer:
          "Through evidence like age-related comments, being replaced by a younger worker, layoff patterns affecting older employees, and inconsistent reasons for the decision.",
      },
      {
        question: "Is age discrimination illegal?",
        answer: "Yes. It's illegal under California's FEHA and the federal ADEA for covered employers.",
      },
    ],
    related: ["employment-discrimination", "wrongful-termination", "severance-agreements", "class-action"],
  },

  "civil-rights": {
    h1: "Civil Rights Attorney in Los Angeles",
    metaDescription:
      "Your civil rights don't stop at work. A Los Angeles civil rights attorney can help with workplace discrimination and equal treatment claims.",
    intro: [
      "Equal treatment is a civil right. As a civil rights attorney in Los Angeles, Lighthouse Law APC represents workers whose rights to fair, equal treatment on the job were violated because of their race, religion, national origin, sex, disability or other protected characteristic.",
      "Federal civil rights laws like Title VII of the Civil Rights Act of 1964 and Section 1981, together with California's Fair Employment and Housing Act, give employees powerful tools to challenge discrimination.",
    ],
    sections: [
      {
        heading: "Civil rights at work",
        paragraphs: [
          "Civil rights laws protect employees from discrimination and harassment in every part of the employment relationship — hiring, pay, promotions, discipline and firing. They also protect employees from retaliation for opposing discrimination or participating in investigations.",
        ],
        bullets: [
          "Title VII of the Civil Rights Act of 1964 (race, color, religion, sex, national origin)",
          "42 U.S.C. § 1981 (racial discrimination in contracts, including employment)",
          "Americans with Disabilities Act (disability)",
          "California's Fair Employment and Housing Act (broad state protections)",
        ],
      },
      {
        heading: "Why California law matters",
        paragraphs: [
          "California's protections often go further than federal law. FEHA covers smaller employers, recognizes more protected categories (including marital status, gender expression and medical condition), and doesn't cap emotional distress or punitive damages the way federal law does.",
          "Choosing the right laws and the right forum can make a major difference in the outcome of a civil rights case.",
        ],
      },
      {
        heading: "How we approach civil rights cases",
        paragraphs: [
          "We start by listening. Then we gather the evidence — documents, witnesses and comparisons with how others were treated — and identify every claim available to you. We handle agency filings, negotiations with the employer and, when needed, litigation in court.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a civil rights attorney do?",
        answer:
          "A civil rights attorney represents people whose legal rights to equal treatment were violated. At Lighthouse Law APC, we focus on civil rights in the workplace, including discrimination, harassment and retaliation.",
      },
      {
        question: "What civil rights laws protect employees?",
        answer:
          "Key laws include Title VII of the Civil Rights Act, Section 1981, the ADA, the ADEA and California's Fair Employment and Housing Act.",
      },
      {
        question: "Is there a deadline to file a civil rights claim?",
        answer:
          "Yes. State workplace claims are generally filed with the California Civil Rights Department within three years; federal EEOC charges generally within 300 days in California. Some claims have different deadlines.",
      },
      {
        question: "Do I need to file with an agency before suing?",
        answer:
          "For most FEHA and Title VII claims, yes — you'll need a right-to-sue notice first. Some claims, like Section 1981 claims, can go directly to court.",
      },
    ],
    related: ["employment-discrimination", "racial-discrimination", "religious-discrimination", "retaliation"],
  },

  "disability-discrimination": {
    h1: "Los Angeles Disability Discrimination Lawyer",
    metaDescription:
      "Denied an accommodation or fired because of a disability? A Los Angeles disability discrimination lawyer can help. Free consultation.",
    intro: [
      "A health condition should never cost you your job. A Los Angeles disability discrimination lawyer at Lighthouse Law APC helps employees with physical or mental health conditions who were denied accommodations, mistreated or fired.",
      "California's Fair Employment and Housing Act defines disability broadly and requires employers to work with employees to find reasonable accommodations. The federal Americans with Disabilities Act (ADA) adds further protections.",
    ],
    sections: [
      {
        heading: "What is disability discrimination?",
        paragraphs: [
          "Disability discrimination occurs when an employer treats an employee or applicant unfavorably because of a disability, a perceived disability or a medical condition. Under California law, a condition only has to limit a major life activity — a lower bar than federal law.",
        ],
        bullets: [
          "Firing or demoting someone after learning of a diagnosis",
          "Refusing a reasonable accommodation, like a schedule change or modified duties",
          "Failing to engage in the “interactive process” in good faith",
          "Refusing to let an employee return from medical leave",
          "Rejecting applicants because of a disability or medical history",
        ],
      },
      {
        heading: "Your right to reasonable accommodation",
        paragraphs: [
          "Employers with five or more employees must provide reasonable accommodations that let qualified employees do their jobs, unless doing so would cause undue hardship. Accommodations can include modified schedules, remote work, equipment, leave, reassignment to a vacant position or changes to job duties.",
          "Employers also must engage in a timely, good-faith interactive process — a conversation with you to identify workable options. Failing to do so can be a separate legal violation.",
        ],
      },
      {
        heading: "How to prove disability discrimination",
        paragraphs: [
          "Helpful evidence includes your accommodation requests and the employer's responses, medical notes, the timing of any discipline or termination, and how the employer treated other employees. We help collect and organize this evidence to show what really happened.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you prove disability discrimination?",
        answer:
          "By showing you have a disability, you could do the job with or without accommodation, and you suffered an adverse action connected to your disability — often shown through timing, emails and how requests were handled.",
      },
      {
        question: "Which federal law prohibits discrimination against people with disabilities?",
        answer:
          "The Americans with Disabilities Act (ADA). In California, the Fair Employment and Housing Act provides broader protections.",
      },
      {
        question: "How much is a disability discrimination lawsuit worth?",
        answer:
          "It depends on lost wages, emotional distress, the employer's conduct and other factors. A lawyer can evaluate the potential value after reviewing your situation.",
      },
      {
        question: "What is the interactive process?",
        answer:
          "A good-faith, ongoing conversation between you and your employer to identify reasonable accommodations. California requires employers to engage in it.",
      },
    ],
    related: ["fmla", "employment-discrimination", "retaliation", "wrongful-termination"],
  },

  "equal-pay": {
    h1: "Equal Pay Attorney in Los Angeles",
    metaDescription:
      "Paid less than coworkers for similar work? A Los Angeles equal pay attorney can help you challenge unfair pay gaps. Free consultation.",
    intro: [
      "Equal work deserves equal pay. As an equal pay attorney in Los Angeles, Lighthouse Law APC helps employees who are paid less than coworkers of a different gender, race or ethnicity for substantially similar work.",
      "The California Equal Pay Act is one of the strongest pay equity laws in the country. Federal law, including the Equal Pay Act of 1963, adds protection against sex-based wage discrimination.",
    ],
    sections: [
      {
        heading: "What the California Equal Pay Act requires",
        paragraphs: [
          "California Labor Code section 1197.5 prohibits paying employees less than employees of another sex, race or ethnicity for substantially similar work, considering skill, effort, responsibility and working conditions. The jobs don't need identical titles.",
          "An employer can justify a pay difference only by proving it's based entirely on legitimate factors such as seniority, merit, production-based systems or a bona fide factor other than sex, race or ethnicity — and that those factors are applied reasonably.",
        ],
      },
      {
        heading: "Signs you may be underpaid",
        paragraphs: ["Pay discrimination is often hidden. Warning signs include:"],
        bullets: [
          "Learning a coworker in a similar role earns noticeably more",
          "Being told your starting pay was based on your salary history",
          "Being discouraged from discussing pay with coworkers",
          "Consistent pay gaps between groups in the same role",
        ],
      },
      {
        heading: "Your right to talk about pay",
        paragraphs: [
          "California law protects your right to discuss and ask about wages, and employers can't rely on salary history to set pay. Larger employers must include pay ranges in job postings and provide a position's pay scale on request. Retaliation for asking about pay is illegal.",
          "Employees who win an equal pay claim may recover the wage difference, interest, an equal amount as liquidated damages, and attorney's fees.",
        ],
      },
    ],
    faqs: [
      {
        question: "What law prohibits sex-based wage discrimination?",
        answer:
          "The federal Equal Pay Act of 1963 prohibits sex-based wage discrimination. California's Equal Pay Act goes further by also covering race and ethnicity.",
      },
      {
        question: "Can I be fired for discussing my salary?",
        answer: "No. California law protects your right to disclose and discuss your wages.",
      },
      {
        question: "Do jobs have to be identical to bring an equal pay claim?",
        answer:
          "No. Under California law, the work only has to be substantially similar in skill, effort, responsibility and working conditions.",
      },
      {
        question: "How far back can I recover?",
        answer:
          "California Equal Pay Act claims generally can be brought within two years, or three years if the violation was willful.",
      },
    ],
    related: ["gender-discrimination", "racial-discrimination", "wage-and-hour", "retaliation"],
  },

  "gender-discrimination": {
    h1: "Los Angeles Gender Discrimination Lawyer",
    metaDescription:
      "Treated unfairly at work because of your gender? A Los Angeles gender discrimination lawyer can help you fight back. Free consultation.",
    intro: [
      "Your gender should have nothing to do with your paycheck, your promotions or your job security. A Los Angeles gender discrimination lawyer at Lighthouse Law APC represents employees treated unfairly because of their sex, gender, gender identity or gender expression.",
      "California's Fair Employment and Housing Act and federal Title VII both prohibit gender discrimination at work, and California's protections are among the broadest in the country.",
    ],
    sections: [
      {
        heading: "What gender discrimination looks like",
        paragraphs: [
          "Gender discrimination can be blatant or subtle. It can affect hiring, pay, assignments, promotions, discipline and termination.",
        ],
        bullets: [
          "Being paid less than colleagues of another gender for similar work",
          "Being passed over for promotion in favor of less-qualified colleagues",
          "Stereotypes about caregiving, “toughness” or leadership",
          "Discrimination based on gender identity, transition or expression",
          "Unequal discipline or scrutiny compared with other employees",
          "Pregnancy-related mistreatment",
        ],
      },
      {
        heading: "Gender identity and expression are protected",
        paragraphs: [
          "California law explicitly protects transgender, nonbinary and gender-nonconforming employees. Employers must respect an employee's gender identity, including the use of facilities consistent with that identity and their chosen name and pronouns.",
        ],
      },
      {
        heading: "Building a gender discrimination case",
        paragraphs: [
          "We look at pay data, promotion histories, comments from decision-makers, performance reviews and how similarly situated employees were treated. Claims usually begin with a complaint to the California Civil Rights Department, generally within three years, before moving to court.",
          "Remedies may include back pay, front pay, emotional distress damages, punitive damages and attorney's fees.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is gender discrimination at work?",
        answer:
          "Treating an employee or applicant worse because of their sex, gender, gender identity or gender expression in any part of employment.",
      },
      {
        question: "Is pay inequality a form of gender discrimination?",
        answer:
          "Yes. Paying someone less than a colleague of another gender for substantially similar work can violate both FEHA and the California Equal Pay Act.",
      },
      {
        question: "Are transgender employees protected in California?",
        answer: "Yes. California law expressly protects gender identity and gender expression in the workplace.",
      },
      {
        question: "What should I do if I'm facing gender discrimination?",
        answer:
          "Document incidents, keep copies of reviews and pay records, report the issue in writing if safe, and speak with a lawyer before signing anything.",
      },
    ],
    related: ["equal-pay", "sexual-harassment", "pregnancy-discrimination", "employment-discrimination"],
  },
};
