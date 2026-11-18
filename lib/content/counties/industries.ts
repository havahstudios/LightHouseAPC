// Industries found across California counties, and the workplace problems that come up most
// in each one. Every issue links to the practice page that covers it.

export type Issue = { text: string; slug: string };
export type Industry = { label: string; description: string; issues: Issue[] };

export const industries = {
  agriculture: {
    label: "Agriculture & farm work",
    description: "Field, orchard, dairy and ranch work is hard, seasonal and often underpaid.",
    issues: [
      { text: "Unpaid overtime and minimum wage for farmworkers", slug: "wage-and-hour" },
      { text: "Missed meal and rest breaks, piece-rate pay problems", slug: "labor-law-violations" },
      { text: "Heat illness and on-the-job injuries", slug: "work-injury" },
      { text: "Retaliation for speaking up about conditions", slug: "retaliation" },
    ],
  },
  foodProcessing: {
    label: "Food processing & packing",
    description: "Poultry plants, canneries, dairies and packing houses run fast lines and long shifts.",
    issues: [
      { text: "Off-the-clock work and unpaid overtime", slug: "wage-and-hour" },
      { text: "Denied breaks and line-speed pressure", slug: "labor-law-violations" },
      { text: "Injuries from machinery and repetitive work", slug: "work-injury" },
      { text: "Discrimination and harassment on the line", slug: "employment-discrimination" },
    ],
  },
  logistics: {
    label: "Warehousing, trucking & logistics",
    description: "Distribution centers and delivery fleets move goods across the state around the clock.",
    issues: [
      { text: "Unsafe production quotas and missed breaks", slug: "labor-law-violations" },
      { text: "Drivers misclassified as independent contractors", slug: "wage-and-hour" },
      { text: "Firing after an injury or medical leave", slug: "disability-discrimination" },
      { text: "Truck and delivery vehicle crashes", slug: "truck-accidents" },
    ],
  },
  healthcare: {
    label: "Healthcare",
    description: "Hospitals, clinics and care facilities are among the largest employers in the state.",
    issues: [
      { text: "Retaliation for reporting patient-safety problems", slug: "whistleblower" },
      { text: "Unpaid overtime and missed breaks for nurses and staff", slug: "wage-and-hour" },
      { text: "Pregnancy and family leave violations", slug: "pregnancy-discrimination" },
      { text: "Harassment by coworkers, supervisors or patients", slug: "workplace-harassment" },
    ],
  },
  technology: {
    label: "Technology",
    description: "Tech companies offer high pay, but also high pressure and frequent layoffs.",
    issues: [
      { text: "Age discrimination in layoffs and hiring", slug: "age-discrimination" },
      { text: "Unequal pay for women and minorities", slug: "equal-pay" },
      { text: "Wrongful termination and unfair severance deals", slug: "severance-agreements" },
      { text: "Retaliation for raising concerns internally", slug: "retaliation" },
    ],
  },
  hospitality: {
    label: "Hospitality & tourism",
    description: "Hotels, restaurants, resorts and attractions depend on hourly and tipped workers.",
    issues: [
      { text: "Stolen tips, unpaid overtime and split shifts", slug: "wage-and-hour" },
      { text: "Sexual harassment by guests or managers", slug: "sexual-harassment" },
      { text: "Missed meal and rest breaks", slug: "labor-law-violations" },
      { text: "Slip-and-fall injuries for guests and workers", slug: "slip-and-fall" },
    ],
  },
  government: {
    label: "Government & public service",
    description: "City, county and state agencies employ thousands, with special rules and short deadlines.",
    issues: [
      { text: "Whistleblower retaliation against public employees", slug: "whistleblower" },
      { text: "Discrimination in promotions and discipline", slug: "employment-discrimination" },
      { text: "Disability accommodation and leave problems", slug: "disability-discrimination" },
      { text: "Injury claims against public agencies (short deadlines)", slug: "premises-liability" },
    ],
  },
  military: {
    label: "Military bases & defense contractors",
    description: "Bases support large civilian workforces and many private contractors.",
    issues: [
      { text: "Retaliation for reporting fraud or safety problems", slug: "whistleblower" },
      { text: "Disability discrimination against veterans and staff", slug: "disability-discrimination" },
      { text: "Wrongful termination of contractor employees", slug: "wrongful-termination" },
      { text: "Unpaid overtime for hourly contractor staff", slug: "wage-and-hour" },
    ],
  },
  manufacturing: {
    label: "Manufacturing",
    description: "Factories and plants make everything from cars and chips to food and furniture.",
    issues: [
      { text: "Injuries from machinery and unsafe conditions", slug: "work-injury" },
      { text: "Retaliation for safety complaints", slug: "retaliation" },
      { text: "Unpaid overtime and shift-change pay problems", slug: "wage-and-hour" },
      { text: "Race and national-origin discrimination", slug: "racial-discrimination" },
    ],
  },
  construction: {
    label: "Construction",
    description: "Housing, roads and commercial projects keep crews busy across the region.",
    issues: [
      { text: "Falls, equipment accidents and site injuries", slug: "construction-accidents" },
      { text: "Wage theft and misclassified workers", slug: "wage-and-hour" },
      { text: "Retaliation for reporting safety violations", slug: "whistleblower" },
      { text: "Harassment and hostile job sites", slug: "hostile-work-environment" },
    ],
  },
  entertainment: {
    label: "Entertainment & media",
    description: "Studios, productions and media companies rely on long hours and freelance crews.",
    issues: [
      { text: "Sexual harassment in the industry", slug: "sexual-harassment" },
      { text: "Misclassified crew and unpaid overtime", slug: "wage-and-hour" },
      { text: "Retaliation for reporting misconduct", slug: "retaliation" },
      { text: "Gender and age discrimination", slug: "gender-discrimination" },
    ],
  },
  energy: {
    label: "Oil, gas & energy",
    description: "Oil fields, refineries and power plants are high-paying but dangerous workplaces.",
    issues: [
      { text: "Explosions, burns and serious workplace injuries", slug: "burn-injury" },
      { text: "Retaliation for reporting safety or environmental violations", slug: "whistleblower" },
      { text: "Unpaid overtime on long shifts", slug: "wage-and-hour" },
      { text: "Wrongful death claims for families", slug: "wrongful-death" },
    ],
  },
  wine: {
    label: "Wine & vineyards",
    description: "Vineyards, wineries and tasting rooms employ field crews and hospitality staff.",
    issues: [
      { text: "Unpaid overtime during harvest", slug: "wage-and-hour" },
      { text: "Heat illness and vineyard injuries", slug: "work-injury" },
      { text: "Sexual harassment in fields and tasting rooms", slug: "sexual-harassment" },
      { text: "Retaliation for complaints", slug: "retaliation" },
    ],
  },
  timber: {
    label: "Timber & forestry",
    description: "Logging, sawmills and forest work remain major employers in rural counties.",
    issues: [
      { text: "Serious injuries in logging and mills", slug: "work-injury" },
      { text: "Retaliation for reporting unsafe conditions", slug: "retaliation" },
      { text: "Unpaid overtime and travel time", slug: "wage-and-hour" },
      { text: "Firing after an injury", slug: "wrongful-termination" },
    ],
  },
  education: {
    label: "Education",
    description: "Universities, colleges and school districts employ teachers, researchers and staff.",
    issues: [
      { text: "Discrimination in hiring, tenure and promotion", slug: "employment-discrimination" },
      { text: "Retaliation for reporting misconduct", slug: "whistleblower" },
      { text: "Pregnancy and family leave problems", slug: "fmla" },
      { text: "Harassment by supervisors or colleagues", slug: "workplace-harassment" },
    ],
  },
  retail: {
    label: "Retail",
    description: "Stores and shopping centers employ many hourly workers with changing schedules.",
    issues: [
      { text: "Off-the-clock work and missed breaks", slug: "wage-and-hour" },
      { text: "Discrimination and unfair firings", slug: "wrongful-termination" },
      { text: "Pregnancy discrimination", slug: "pregnancy-discrimination" },
      { text: "Customer slip-and-fall injuries", slug: "premises-liability" },
    ],
  },
  corrections: {
    label: "Corrections & public safety",
    description: "State prisons and public-safety agencies are major employers in many smaller counties.",
    issues: [
      { text: "Retaliation against officers and staff who speak up", slug: "whistleblower" },
      { text: "Discrimination and hostile work environments", slug: "hostile-work-environment" },
      { text: "Disability accommodation after an injury", slug: "disability-discrimination" },
      { text: "Sexual harassment", slug: "sexual-harassment" },
    ],
  },
  finance: {
    label: "Finance & professional services",
    description: "Banks, insurers and firms employ office workers with salaried and commission pay.",
    issues: [
      { text: "Misclassification as \"exempt\" from overtime", slug: "wage-and-hour" },
      { text: "Unequal pay and gender discrimination", slug: "equal-pay" },
      { text: "Wrongful termination and severance negotiations", slug: "severance-agreements" },
      { text: "Retaliation for reporting fraud", slug: "whistleblower" },
    ],
  },
  biotech: {
    label: "Biotech & life sciences",
    description: "Labs and drug and device makers employ scientists, technicians and manufacturing staff.",
    issues: [
      { text: "Retaliation for reporting research or safety violations", slug: "whistleblower" },
      { text: "Age and gender discrimination", slug: "age-discrimination" },
      { text: "Pregnancy and leave discrimination", slug: "pregnancy-discrimination" },
      { text: "Wrongful termination during layoffs", slug: "wrongful-termination" },
    ],
  },
  aerospace: {
    label: "Aerospace",
    description: "Aircraft, space and defense companies employ engineers, technicians and assemblers.",
    issues: [
      { text: "Retaliation for reporting safety or fraud", slug: "whistleblower" },
      { text: "Age discrimination", slug: "age-discrimination" },
      { text: "Race and national-origin discrimination", slug: "racial-discrimination" },
      { text: "Workplace injuries", slug: "work-injury" },
    ],
  },
  ports: {
    label: "Ports & shipping",
    description: "Ports, rail yards and shipping terminals keep cargo moving in and out of California.",
    issues: [
      { text: "Injuries at terminals and rail yards", slug: "work-injury" },
      { text: "Misclassified port truck drivers", slug: "wage-and-hour" },
      { text: "Retaliation for safety complaints", slug: "retaliation" },
      { text: "Truck crashes on port routes", slug: "truck-accidents" },
    ],
  },
  recreation: {
    label: "Ski resorts & outdoor recreation",
    description: "Resorts, parks and outdoor businesses rely on seasonal and year-round staff.",
    issues: [
      { text: "Unpaid overtime for seasonal workers", slug: "wage-and-hour" },
      { text: "Housing and pay deductions problems", slug: "labor-law-violations" },
      { text: "Sexual harassment", slug: "sexual-harassment" },
      { text: "Injuries on the job", slug: "work-injury" },
    ],
  },
  cannabis: {
    label: "Cannabis",
    description: "Licensed farms, processors and dispensaries are a growing source of jobs.",
    issues: [
      { text: "Unpaid wages and overtime for trimmers and growers", slug: "wage-and-hour" },
      { text: "Workers misclassified as contractors", slug: "labor-law-violations" },
      { text: "Retaliation for complaints", slug: "retaliation" },
      { text: "Sexual harassment", slug: "sexual-harassment" },
    ],
  },
} satisfies Record<string, Industry>;

export type IndustryKey = keyof typeof industries;
