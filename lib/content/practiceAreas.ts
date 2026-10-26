// Practice areas, grouped. The list matches mesrianilaw.com's practice areas (client request);
// the descriptions are our own wording.
// An area with an `icon` is "featured": it appears on the homepage. Every area has its own page.
// `icon` must match a key in components/PracticeIcon.tsx.

export type PracticeIconName =
  | "termination"
  | "whistleblower"
  | "harassment"
  | "wage"
  | "discrimination"
  | "retaliation"
  | "car"
  | "motorcycle"
  | "pedestrian"
  | "slip"
  | "bicycle"
  | "workInjury";

export type PracticeArea = {
  title: string;
  slug: string; // page address: /practice-areas/<slug>
  shortTitle?: string; // shorter name for menus and lists, when the full title is long
  keyword: string; // main Google search phrase this page targets (Semrush research, Oct 2026)
  summary: string;
  icon?: PracticeIconName;
};

export type PracticeGroup = {
  id: string; // also the hub page address: /practice-areas/<id>
  title: string;
  intro: string;
  areas: PracticeArea[];
};

export const practiceGroups: PracticeGroup[] = [
  {
    id: "employment-law",
    title: "Employment Law",
    intro:
      "We represent employees — never employers — when a workplace crosses the line. California gives workers some of the strongest protections in the country, and we know how to use them.",
    areas: [
      {
        title: "Wrongful Termination",
        slug: "wrongful-termination",
        keyword: "wrongful termination lawyer los angeles",
        icon: "termination",
        summary:
          "California is an at-will state, but you still can't be fired for an illegal reason, such as discrimination, taking protected leave or reporting wrongdoing. We look at the real reason behind your firing.",
      },
      {
        title: "Whistleblower Violations",
        slug: "whistleblower",
        keyword: "los angeles whistleblower lawyer",
        icon: "whistleblower",
        summary:
          "Reporting fraud, safety hazards or illegal conduct is protected by law. If your employer punished you for speaking up, we fight to hold them accountable.",
      },
      {
        title: "Workplace Harassment",
        slug: "workplace-harassment",
        keyword: "los angeles workplace harassment lawyer",
        icon: "harassment",
        summary:
          "Offensive comments, threats or unwanted conduct tied to who you are can create an illegal work environment. We help you document what happened and pursue compensation.",
      },
      {
        title: "Wage & Hour Violations",
        slug: "wage-and-hour",
        keyword: "los angeles wage and hour lawyer",
        icon: "wage",
        summary:
          "Missed meal and rest breaks, off-the-clock work, unpaid overtime and late final paychecks all break California law. We recover unpaid wages and the penalties employers owe.",
      },
      {
        title: "Employment Discrimination",
        slug: "employment-discrimination",
        keyword: "los angeles employment discrimination lawyer",
        icon: "discrimination",
        summary:
          "It is illegal to treat workers differently because of a protected trait like race, gender, age, religion, disability or national origin. We pursue claims under state and federal law.",
      },
      {
        title: "Employment Retaliation",
        slug: "retaliation",
        keyword: "los angeles retaliation lawyer",
        icon: "retaliation",
        summary:
          "Being demoted, cut from the schedule or fired after complaining, requesting leave or supporting a coworker can be illegal retaliation — one of the most common employment claims.",
      },
      {
        title: "Age Discrimination",
        slug: "age-discrimination",
        keyword: "los angeles age discrimination lawyer",
        summary:
          "Workers 40 and older are protected from being pushed out, passed over or replaced because of their age. We look for patterns that point to age bias.",
      },
      {
        title: "Civil Rights Discrimination",
        slug: "civil-rights",
        keyword: "civil rights attorney los angeles",
        summary:
          "Your civil rights don't stop at the office door. We take on employers who deny equal treatment, opportunities or pay in violation of civil rights laws.",
      },
      {
        title: "Disability Discrimination",
        slug: "disability-discrimination",
        keyword: "los angeles disability discrimination lawyer",
        summary:
          "Employers must reasonably accommodate physical and mental health conditions and engage in a good-faith process. We step in when they refuse, delay or punish you for asking.",
      },
      {
        title: "Equal Pay Act",
        slug: "equal-pay",
        keyword: "equal pay attorney los angeles",
        summary:
          "Employees doing substantially similar work deserve equal pay regardless of gender, race or ethnicity. We help uncover and challenge unfair pay gaps.",
      },
      {
        title: "Gender Discrimination",
        slug: "gender-discrimination",
        keyword: "los angeles gender discrimination lawyer",
        summary:
          "Being treated unfairly in hiring, pay, promotions or discipline because of your gender is against the law. We fight for equal treatment on the job.",
      },
      {
        title: "Hostile Work Environment",
        slug: "hostile-work-environment",
        keyword: "hostile work environment lawyer los angeles",
        summary:
          "When harassment is severe or frequent enough to make your workplace intimidating or abusive, the law may hold your employer responsible.",
      },
      {
        title: "Labor Law Violations",
        slug: "labor-law-violations",
        keyword: "labor law attorney los angeles",
        summary:
          "From misclassifying employees as contractors to denying required breaks, we pursue employers who ignore California's labor laws.",
      },
      {
        title: "Family and Medical Leave Act",
        slug: "fmla",
        keyword: "fmla attorney los angeles",
        summary:
          "Eligible workers can take job-protected leave for their own serious health condition, a new child or a family member's care. We help when that leave is denied or punished.",
      },
      {
        title: "Class Action",
        slug: "class-action",
        keyword: "employment class action lawyer los angeles",
        summary:
          "When an employer wrongs many workers the same way — like a companywide pay policy — joining together can make a claim more powerful. We evaluate group and class claims.",
      },
      {
        title: "Pregnancy Discrimination",
        slug: "pregnancy-discrimination",
        keyword: "los angeles pregnancy discrimination lawyer",
        summary:
          "You have the right to pregnancy disability leave and reasonable accommodations, and you can't be treated worse for being pregnant. We protect expecting and new parents.",
      },
      {
        title: "Racial Discrimination",
        slug: "racial-discrimination",
        keyword: "racial discrimination attorney los angeles",
        summary:
          "Being harassed, passed over or let go because of your race or ethnicity is illegal. We stand up to employers who allow racial bias at work.",
      },
      {
        title: "Religious Discrimination",
        slug: "religious-discrimination",
        keyword: "los angeles religious discrimination lawyer",
        summary:
          "Employers must respect your religious beliefs and reasonably accommodate practices like dress and scheduling. We act when they don't.",
      },
      {
        title: "Severance Package",
        slug: "severance-agreements",
        keyword: "severance lawyer los angeles",
        summary:
          "Before you sign a severance agreement, it pays to know what rights you might be giving up. We review offers and negotiate for fair terms.",
      },
      {
        title: "Sexual Harassment",
        slug: "sexual-harassment",
        keyword: "los angeles sexual harassment lawyer",
        summary:
          "No one should have to endure unwanted advances or sexual comments at work. We help survivors protect their careers and pursue employers that failed to act.",
      },
      {
        title: "Wrongful Discharge in Violation of Public Policy",
        slug: "wrongful-discharge",
        shortTitle: "Wrongful Discharge (Public Policy)",
        keyword: "wrongful discharge lawyer los angeles",
        summary:
          "You can't be fired for refusing to break the law, serving on a jury, or exercising a legal right. These claims protect workers who do the right thing.",
      },
      {
        title: "Marital Status Discrimination",
        slug: "marital-status-discrimination",
        keyword: "los angeles marital status discrimination lawyer",
        summary:
          "California law protects you from being treated differently at work because you are single, married, divorced or widowed.",
      },
    ],
  },
  {
    id: "personal-injury",
    title: "Personal Injury",
    intro:
      "When someone else's carelessness leaves you hurt, we handle the insurance companies and fight for the full compensation you need to recover — medical bills, lost income and more.",
    areas: [
      {
        title: "Car Accidents",
        slug: "car-accidents",
        keyword: "car accident lawyer los angeles",
        icon: "car",
        summary:
          "From rear-end collisions to serious crashes on LA freeways, we investigate what happened and push insurers to pay what your injuries are truly worth.",
      },
      {
        title: "Motorcycle Accidents",
        slug: "motorcycle-accidents",
        keyword: "motorcycle accident lawyer los angeles",
        icon: "motorcycle",
        summary:
          "Riders are often unfairly blamed and seriously hurt. We counter bias against motorcyclists and pursue full compensation for your injuries.",
      },
      {
        title: "Pedestrian Accidents",
        slug: "pedestrian-accidents",
        keyword: "los angeles pedestrian accident lawyer",
        icon: "pedestrian",
        summary:
          "Pedestrians struck by vehicles often suffer life-changing injuries. We hold careless drivers accountable and handle the claim while you heal.",
      },
      {
        title: "Slip & Fall Accidents",
        slug: "slip-and-fall",
        keyword: "los angeles slip and fall lawyer",
        icon: "slip",
        summary:
          "Property owners must keep their premises reasonably safe. If a wet floor, broken step or poor lighting caused your fall, you may have a claim.",
      },
      {
        title: "Bicycle Accidents",
        slug: "bicycle-accidents",
        keyword: "los angeles bicycle accident lawyer",
        icon: "bicycle",
        summary:
          "Cyclists have the same rights on the road as drivers. When a driver's negligence causes a crash, we fight for the recovery you deserve.",
      },
      {
        title: "Work Injury",
        slug: "work-injury",
        keyword: "work injury lawyer los angeles",
        icon: "workInjury",
        summary:
          "If you were hurt on the job, you may have options beyond workers' compensation — especially when a third party, like a contractor or equipment maker, is at fault.",
      },
      {
        title: "Aviation Accident",
        slug: "aviation-accidents",
        keyword: "aviation accident lawyer los angeles",
        summary:
          "Airplane and helicopter accidents involve complex federal rules and multiple responsible parties. We help victims and families get answers and accountability.",
      },
      {
        title: "Uber & Lyft Accident",
        slug: "uber-lyft-accidents",
        keyword: "uber accident lawyer los angeles",
        summary:
          "Rideshare crashes raise tricky insurance questions about which policy applies. Whether you were a passenger, driver or another motorist, we sort it out.",
      },
      {
        title: "Electric Scooter Accident",
        slug: "scooter-accidents",
        keyword: "los angeles scooter accident lawyer",
        summary:
          "E-scooter crashes can be caused by careless drivers, dangerous road conditions or defective equipment. We identify everyone responsible.",
      },
      {
        title: "Brain Injury",
        slug: "brain-injury",
        keyword: "brain injury attorney los angeles",
        summary:
          "Traumatic brain injuries can affect memory, mood and the ability to work for years. We work with medical experts to account for your long-term needs.",
      },
      {
        title: "Burn Injury",
        slug: "burn-injury",
        keyword: "los angeles burn injury lawyer",
        summary:
          "Severe burns often require painful treatment and leave lasting scars. We pursue compensation for medical care, lost income and the emotional toll.",
      },
      {
        title: "Bus Accident",
        slug: "bus-accidents",
        keyword: "bus accident lawyer los angeles",
        summary:
          "Bus companies and public transit agencies owe passengers a high duty of care. Claims against government agencies have short deadlines, so act quickly.",
      },
      {
        title: "Dog Bite",
        slug: "dog-bites",
        keyword: "dog bite lawyer los angeles",
        summary:
          "California holds dog owners responsible for bites in most situations, even if the dog never bit anyone before. We help victims recover.",
      },
      {
        title: "General Negligence",
        slug: "negligence",
        keyword: "negligence lawyer los angeles",
        summary:
          "When someone fails to act with reasonable care and you get hurt, they can be held responsible — even if your situation doesn't fit a neat category.",
      },
      {
        title: "Animal Attack",
        slug: "animal-attacks",
        keyword: "animal attack lawyer los angeles",
        summary:
          "Attacks by dogs and other animals can cause serious physical and emotional harm. We pursue owners and property holders who failed to prevent it.",
      },
      {
        title: "Premises Liability",
        slug: "premises-liability",
        keyword: "los angeles premises liability lawyer",
        summary:
          "Owners of stores, apartments and other properties can be liable for injuries caused by unsafe conditions, inadequate security or poor maintenance.",
      },
      {
        title: "Spinal Cord Injury",
        slug: "spinal-cord-injury",
        keyword: "spinal cord injury lawyer los angeles",
        summary:
          "Spinal cord injuries can change every part of life. We fight for compensation that covers lifelong care, home modifications and lost earning ability.",
      },
      {
        title: "Traffic Accident",
        slug: "traffic-accidents",
        keyword: "traffic accident attorney los angeles",
        summary:
          "Every traffic collision is different. We gather police reports, footage and witness accounts to build a clear picture of who was at fault.",
      },
      {
        title: "Train Accident",
        slug: "train-accidents",
        keyword: "train accident lawyer los angeles",
        summary:
          "Train and light-rail accidents often involve public agencies or large rail companies. We handle the strict deadlines and complex rules that apply.",
      },
      {
        title: "Truck Accident",
        slug: "truck-accidents",
        keyword: "truck accident lawyer los angeles",
        summary:
          "Large trucks cause devastating crashes. Trucking companies must follow strict safety rules, and we dig into driver logs and maintenance records.",
      },
      {
        title: "Construction Accident",
        slug: "construction-accidents",
        keyword: "los angeles construction accident lawyer",
        summary:
          "Construction sites are full of hazards. When unsafe conditions or equipment cause an injury, several parties may share responsibility.",
      },
      {
        title: "Wrongful Death",
        slug: "wrongful-death",
        keyword: "los angeles wrongful death lawyer",
        summary:
          "Losing a loved one because of someone else's negligence is devastating. We help families pursue justice and financial security with compassion.",
      },
    ],
  },
];
