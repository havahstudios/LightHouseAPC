import type { ServiceContent } from "./types";

// Personal injury pages, part 1. General legal information — have the attorney review before launch.

export const injuryA: Record<string, ServiceContent> = {
  "car-accidents": {
    h1: "Car Accident Lawyer in Los Angeles",
    metaDescription:
      "Hurt in a crash? Our car accident lawyers in Los Angeles handle the insurance company and fight for full compensation. Free consultation.",
    intro: [
      "A car crash can change your life in seconds. As a car accident lawyer in Los Angeles, Lighthouse Law APC helps injured drivers and passengers recover compensation for medical bills, lost income, vehicle damage and pain and suffering — while we deal with the insurance companies.",
      "Los Angeles has some of the busiest roads in the country, from the 405 and the 10 to crowded surface streets. When another driver's carelessness causes a collision, California law allows you to hold them responsible.",
    ],
    sections: [
      {
        heading: "What does a car accident lawyer do?",
        paragraphs: [
          "Insurance companies are businesses, and their adjusters are trained to pay as little as possible. A car accident lawyer levels the playing field. We investigate the crash, collect police reports, photos, video and witness statements, work with medical providers to document your injuries, calculate the full value of your claim, and negotiate with insurers. If they won't be fair, we're prepared to take your case to court.",
        ],
      },
      {
        heading: "What to do after a car accident in Los Angeles",
        paragraphs: ["The steps you take after a crash can protect both your health and your claim:"],
        bullets: [
          "Call 911 and get medical attention, even if you feel okay",
          "Take photos of the vehicles, the scene, road conditions and your injuries",
          "Exchange insurance and contact information with the other driver",
          "Get names and phone numbers of witnesses",
          "Report the crash to the DMV (SR-1 form) within 10 days if someone was injured or damage exceeds $1,000",
          "Avoid giving a recorded statement to the other driver's insurer before talking to a lawyer",
        ],
      },
      {
        heading: "Compensation in a California car accident claim",
        paragraphs: [
          "Injured people may recover economic damages — medical expenses, future treatment, lost wages and reduced earning capacity, and property damage — as well as non-economic damages for pain, suffering and loss of enjoyment of life.",
          "California follows pure comparative negligence. Even if you were partly at fault, you can still recover, though your compensation is reduced by your percentage of fault. Most claims must be filed within two years, and claims involving a government vehicle or road may require a formal claim within six months.",
        ],
      },
      {
        heading: "Dealing with insurance companies after a crash",
        paragraphs: [
          "Shortly after a crash, you'll likely hear from the other driver's insurance adjuster. They may sound helpful, but their goal is to limit what the company pays. Common tactics include asking for a recorded statement, requesting broad access to your medical records, or making a quick settlement offer before the full extent of your injuries is known.",
          "Once you accept a settlement and sign a release, you usually can't reopen your claim — even if your injuries turn out to be worse than expected. Let your lawyer handle communications, and don't sign anything until you understand your full medical picture and the value of your claim.",
        ],
      },
      {
        heading: "Common causes of car accidents in Los Angeles",
        paragraphs: [
          "Most car crashes are preventable. Identifying the cause is an important part of proving who's responsible, and in Los Angeles, a handful of dangerous behaviors account for many serious collisions.",
        ],
        bullets: [
          "Distracted driving, including texting and using apps",
          "Speeding and aggressive lane changes on freeways",
          "Running red lights and stop signs",
          "Driving under the influence of alcohol or drugs",
          "Unsafe left turns at busy intersections",
          "Following too closely in stop-and-go traffic",
        ],
        closing: [
          "Phone records, vehicle data, traffic cameras and witness statements can help prove what the other driver was doing. When a commercial vehicle or a driver working for a company caused the crash, the employer may share responsibility too.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I get a lawyer for a car accident?",
        answer:
          "If you were injured, missed work or the other insurer is disputing fault, a lawyer can protect your rights and often increase the value of your recovery.",
      },
      {
        question: "Should I get a lawyer for a minor car accident?",
        answer:
          "For property damage only, you may not need one. But injuries from “minor” crashes — like whiplash or concussions — often show up later. A free consultation can help you decide.",
      },
      {
        question: "How much does a car accident lawyer cost?",
        answer:
          "Lighthouse Law APC handles car accident cases on a contingency basis: you pay no attorney fees unless we recover money for you.",
      },
      {
        question: "How long do I have to file a car accident claim in California?",
        answer:
          "Generally two years from the date of the accident for injuries, and six months to file a government claim if a public entity is involved.",
      },
    ],
    related: ["truck-accidents", "uber-lyft-accidents", "traffic-accidents", "wrongful-death"],
  },

  "motorcycle-accidents": {
    h1: "Motorcycle Accident Lawyer in Los Angeles",
    metaDescription:
      "Injured on your bike? A Los Angeles motorcycle accident lawyer can fight rider bias and pursue full compensation. Free consultation.",
    intro: [
      "Riders face real dangers on Los Angeles roads — and unfair assumptions after a crash. As a motorcycle accident lawyer in Los Angeles, Lighthouse Law APC fights for injured motorcyclists and pushes back against insurers who try to blame the rider.",
      "Motorcyclists have little protection in a collision, so injuries are often severe. You deserve an advocate who understands riding and California's motorcycle laws.",
    ],
    sections: [
      {
        heading: "What to do after a motorcycle accident",
        paragraphs: ["If you're able, these steps help protect your health and your case:"],
        bullets: [
          "Get medical care right away — adrenaline can mask serious injuries",
          "Call the police and request a report",
          "Photograph your bike, gear, the other vehicle and the scene",
          "Keep your helmet and damaged gear; they can be important evidence",
          "Collect witness names and contact information",
          "Don't discuss fault with the other driver's insurer",
        ],
      },
      {
        heading: "Fighting bias against motorcyclists",
        paragraphs: [
          "Insurance adjusters often assume riders were speeding or reckless. Many motorcycle crashes are actually caused by drivers who fail to see a rider — turning left in front of a bike, changing lanes without checking, or opening a door into traffic.",
          "Lane splitting is legal in California when done safely, and wearing a DOT-compliant helmet is required. We use accident reconstruction, video and witness accounts to show what really happened.",
        ],
      },
      {
        heading: "Compensation for injured riders",
        paragraphs: [
          "Motorcycle crashes frequently cause fractures, road rash, spinal injuries and brain injuries. Compensation may include medical bills, future care, lost wages, gear and bike damage, and pain and suffering. California's comparative negligence rules mean you can still recover even if you share some fault. Claims are generally due within two years.",
        ],
      },
      {
        heading: "Common motorcycle crash scenarios in Los Angeles",
        paragraphs: [
          "Left-turn collisions are among the most dangerous crashes for riders: a driver turning left at an intersection misjudges a motorcycle's speed or simply fails to see it. Lane-change crashes, rear-end collisions in stop-and-go freeway traffic, and dooring on busy streets are also common.",
          "Road hazards can play a role too. Potholes, uneven pavement, gravel and poorly marked construction zones pose a much greater danger to motorcycles than to cars. When a dangerous road condition contributed to a crash, a public agency may share responsibility — and the six-month government claim deadline may apply.",
        ],
      },
      {
        heading: "Evidence that helps motorcycle accident claims",
        paragraphs: [
          "Because insurers are quick to blame riders, strong evidence matters even more in motorcycle cases. The goal is to show exactly what the other driver did and how the crash happened.",
        ],
        bullets: [
          "Photos of the scene, skid marks and vehicle positions",
          "Helmet camera or dashcam footage",
          "Damage to your bike and protective gear",
          "Police reports and witness statements",
          "Nearby business or traffic camera video",
          "Medical records documenting all of your injuries",
        ],
        closing: [
          "Don't repair your motorcycle or throw away damaged gear until your lawyer has documented it. These items can show the force and direction of impact and help counter claims that you were riding unsafely.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should I do after a motorcycle accident?",
        answer:
          "Get medical care, call the police, document the scene and your gear, collect witness information, and speak with a lawyer before giving insurers a statement.",
      },
      {
        question: "Does health insurance cover motorcycle accident injuries?",
        answer:
          "Usually, yes, though your health plan may seek repayment from any settlement. A lawyer can help manage those liens.",
      },
      {
        question: "Is lane splitting legal in California?",
        answer:
          "Yes. California allows lane splitting when it's done safely. It doesn't automatically make a rider at fault.",
      },
      {
        question: "Can I recover if I wasn't wearing a helmet?",
        answer:
          "Possibly. Not wearing a helmet may reduce recovery for certain head injuries, but it doesn't necessarily bar your claim.",
      },
    ],
    related: ["car-accidents", "brain-injury", "spinal-cord-injury", "traffic-accidents"],
  },

  "pedestrian-accidents": {
    h1: "Los Angeles Pedestrian Accident Lawyer",
    metaDescription:
      "Hit by a car while walking? A Los Angeles pedestrian accident lawyer can hold the driver accountable. Free, no-obligation consultation.",
    intro: [
      "Walking should never put your life at risk. A Los Angeles pedestrian accident lawyer at Lighthouse Law APC helps people hit by cars, trucks and buses recover compensation for serious injuries and the costs of recovery.",
      "Los Angeles sees thousands of pedestrian injuries every year. Because pedestrians have no protection, even low-speed collisions can cause devastating harm.",
    ],
    sections: [
      {
        heading: "Common causes of pedestrian accidents",
        paragraphs: ["Most pedestrian collisions are caused by driver error, such as:"],
        bullets: [
          "Failing to yield at crosswalks or intersections",
          "Distracted driving and phone use",
          "Speeding or running red lights",
          "Turning right on red without checking for pedestrians",
          "Backing out of driveways and parking spaces",
          "Driving under the influence",
        ],
      },
      {
        heading: "Pedestrian rights in California",
        paragraphs: [
          "California law requires drivers to yield to pedestrians in marked and unmarked crosswalks. Drivers also have a duty to use reasonable care toward pedestrians everywhere. Even if you were outside a crosswalk, the driver may still be fully or partly responsible.",
          "California recently changed its jaywalking rules so that pedestrians are generally only ticketed for crossing outside a crosswalk when there's an immediate danger of a collision.",
        ],
      },
      {
        heading: "Recovering compensation",
        paragraphs: [
          "Compensation may include emergency care, surgery, rehabilitation, lost wages, future care needs and pain and suffering. If a city bus or dangerous road design contributed, a government claim may be required within six months. Other claims generally must be filed within two years.",
        ],
      },
      {
        heading: "Injuries common in pedestrian collisions",
        paragraphs: [
          "Because pedestrians absorb the full force of an impact, injuries are often severe: broken legs and pelvises, head and brain injuries, spinal injuries, internal injuries and serious soft tissue damage. Many victims need surgery, extended rehabilitation and time away from work.",
          "Documenting these injuries thoroughly matters. Follow your doctors' treatment plans, keep every bill and record, and keep notes about pain, limitations and missed activities. This information helps show the true impact of the collision on your life and supports a claim for full compensation.",
        ],
      },
      {
        heading: "Steps to take after being hit by a car",
        paragraphs: [
          "After a pedestrian accident, your health comes first. Once you're safe, these steps can help protect your right to compensation.",
        ],
        bullets: [
          "Call 911 and get medical attention, even for injuries that seem minor",
          "Get the driver's name, license, plate number and insurance",
          "Photograph the scene, crosswalk, signals and your injuries",
          "Collect contact information from witnesses",
          "Note nearby cameras at businesses or homes",
          "Avoid discussing fault with the driver or their insurer",
        ],
        closing: [
          "If you can't do these things because of your injuries, a family member or your lawyer can help gather information afterward. Acting quickly helps preserve video and witness memories.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who is at fault in a pedestrian accident?",
        answer:
          "Often the driver, but fault depends on the facts. California uses comparative negligence, so compensation is shared based on each party's responsibility.",
      },
      {
        question: "What if I was hit outside a crosswalk?",
        answer:
          "You may still have a claim. Drivers must always use reasonable care, and fault is divided based on what each person did.",
      },
      {
        question: "What if the driver fled the scene?",
        answer:
          "Report it to police right away. Your own uninsured motorist coverage may help pay for your injuries.",
      },
      {
        question: "How long do I have to file a pedestrian accident claim?",
        answer:
          "Generally two years, or six months for a claim against a government entity.",
      },
    ],
    related: ["car-accidents", "bus-accidents", "brain-injury", "wrongful-death"],
  },

  "slip-and-fall": {
    h1: "Los Angeles Slip and Fall Lawyer",
    metaDescription:
      "Injured in a fall on someone's property? A Los Angeles slip and fall lawyer can prove liability and pursue compensation. Free consultation.",
    intro: [
      "A fall can cause injuries far more serious than people expect. A Los Angeles slip and fall lawyer at Lighthouse Law APC helps people injured on unsafe property — in stores, restaurants, apartment buildings, parking lots and more.",
      "Property owners and businesses in California must keep their premises reasonably safe. When they don't, they can be responsible for the injuries that follow.",
    ],
    sections: [
      {
        heading: "How to prove liability in a slip and fall case",
        paragraphs: [
          "Slip and fall cases turn on what the property owner knew or should have known. To succeed, you generally need to show that a dangerous condition existed, the owner created it or knew (or should have known) about it, they failed to fix it or warn you in time, and it caused your injury.",
          "Evidence is critical and disappears fast. Surveillance video may be overwritten within days, and spills get cleaned up. That's why acting quickly matters.",
        ],
      },
      {
        heading: "What to do after a slip and fall accident",
        paragraphs: [],
        bullets: [
          "Report the fall to the manager or property owner and ask for a written incident report",
          "Photograph the hazard, the area and your shoes",
          "Get names and contact information for witnesses",
          "Seek medical attention promptly",
          "Keep your shoes and clothing as they were",
          "Ask that surveillance video be preserved",
        ],
      },
      {
        heading: "Common hazards and injuries",
        paragraphs: [
          "Falls are often caused by wet floors, uneven sidewalks, broken stairs, poor lighting, loose mats, missing handrails and cluttered walkways. Injuries can include broken hips and wrists, back injuries and head trauma. Compensation may cover medical bills, lost wages and pain and suffering. Claims generally must be filed within two years, or six months for public property.",
        ],
      },
      {
        heading: "Slip and falls at stores and restaurants",
        paragraphs: [
          "Grocery stores, big-box retailers and restaurants see heavy foot traffic and frequent spills. Businesses are expected to regularly inspect aisles and floors, clean up hazards promptly and warn customers with signs or barriers when needed.",
          "Key questions in these cases include how long the hazard was on the floor, whether employees walked past it, how often the store inspects, and whether its own policies were followed. Store inspection logs, employee testimony and surveillance footage often answer these questions — which is why preserving that evidence quickly is so important.",
        ],
      },
      {
        heading: "Slip and falls on sidewalks and public property",
        paragraphs: [
          "Many falls in Los Angeles happen on cracked or uplifted sidewalks, often caused by tree roots, as well as in parks, public buildings and transit stations. Claims involving public property follow special rules.",
        ],
        bullets: [
          "A written government claim is generally required within six months",
          "You must show the condition was dangerous, not just a minor defect",
          "The public entity must have known about the hazard or created it",
          "Prior complaints or repair requests can be important evidence",
          "Photos with measurements of the defect help show its size",
          "Adjacent property owners may also share responsibility in some cases",
        ],
        closing: [
          "Because the deadlines are short and the rules are technical, speaking with a slip and fall lawyer soon after a fall on public property is especially important.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are slip and fall cases hard to win?",
        answer:
          "They can be, because you must show the owner knew or should have known about the hazard. Strong, quickly gathered evidence makes a big difference.",
      },
      {
        question: "How long do slip and fall settlements take?",
        answer:
          "Many resolve within several months to a year, depending on the injuries, the evidence and whether a lawsuit is needed.",
      },
      {
        question: "Should I get a lawyer for a slip and fall?",
        answer:
          "If you were seriously hurt, a lawyer can preserve evidence, deal with insurers and help you pursue full compensation.",
      },
      {
        question: "What if I fell on city property?",
        answer:
          "Claims against public entities generally require a written government claim within six months of the fall.",
      },
    ],
    related: ["premises-liability", "negligence", "brain-injury", "work-injury"],
  },

  "bicycle-accidents": {
    h1: "Los Angeles Bicycle Accident Lawyer",
    metaDescription:
      "Hit while riding? A Los Angeles bicycle accident lawyer can hold careless drivers accountable and pursue full compensation. Free consultation.",
    intro: [
      "Cyclists have the same right to the road as drivers. A Los Angeles bicycle accident lawyer at Lighthouse Law APC helps cyclists who were injured by careless drivers, dangerous road conditions or defective equipment.",
      "From commuters to weekend riders, cyclists in LA face heavy traffic and distracted drivers. When a crash happens, the injuries are often serious.",
    ],
    sections: [
      {
        heading: "Common causes of bicycle accidents",
        paragraphs: [],
        bullets: [
          "Drivers passing too closely (California requires at least 3 feet)",
          "“Dooring” — a parked driver opening a door into a cyclist",
          "Right hooks and left turns across a bike lane",
          "Drivers failing to yield at intersections",
          "Potholes, debris and poorly maintained bike lanes",
          "Distracted or impaired drivers",
        ],
      },
      {
        heading: "What insurance covers bicycle accidents?",
        paragraphs: [
          "When a driver causes the crash, their auto liability insurance is usually the first source of compensation. If the driver is uninsured or underinsured, your own auto policy's uninsured motorist coverage may apply — even though you were on a bike. Health insurance, and sometimes homeowners or renters insurance, may cover other costs.",
          "Sorting out which policies apply can be confusing. We identify every available source of recovery.",
        ],
      },
      {
        heading: "What to do after a bicycle accident",
        paragraphs: [
          "Get medical care, call the police, photograph the scene and your bike, keep your helmet and damaged gear, and collect witness information. Avoid making statements about fault to insurers. Claims generally must be filed within two years, or six months for road-condition claims against a public entity.",
        ],
      },
      {
        heading: "Proving fault when a driver says they didn't see you",
        paragraphs: [
          "“I didn't see the cyclist” is one of the most common things drivers say after a bike crash. But failing to see a cyclist who was there to be seen isn't an excuse; drivers have a duty to watch for bikes, check mirrors and blind spots, and give cyclists the required space.",
          "Evidence like traffic camera or doorbell video, bike-mounted cameras, GPS ride data, damage patterns on the bike and car, and witness statements can show what really happened. Bicycle crash reconstruction can also help establish speed and position at the moment of impact.",
        ],
      },
      {
        heading: "California laws that protect cyclists",
        paragraphs: [
          "California has several laws designed to protect people on bikes. Knowing these rules can help show when a driver acted unlawfully.",
        ],
        bullets: [
          "Drivers must give at least three feet when passing a cyclist",
          "Drivers must change lanes to pass when possible, if it's safe",
          "Cyclists may use the full lane when it's too narrow to share",
          "Drivers must check for cyclists before opening doors into traffic",
          "Drivers must yield to cyclists in bike lanes when turning",
          "Cyclists have the same rights and duties as drivers on the road",
        ],
        closing: [
          "When a driver violates one of these rules and causes a crash, that violation can be strong evidence of negligence. A bicycle accident lawyer can identify the rules that apply to your crash.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does homeowners insurance cover bicycle accidents?",
        answer:
          "Sometimes, for things like a stolen or damaged bike, but injuries caused by a driver are usually covered by the driver's auto insurance or your uninsured motorist coverage.",
      },
      {
        question: "What insurance covers bicycle accidents?",
        answer:
          "Typically the at-fault driver's auto insurance, your own uninsured or underinsured motorist coverage, and your health insurance.",
      },
      {
        question: "What should I do after a bicycle accident?",
        answer:
          "Get medical care, report the crash, document the scene and your injuries, preserve your bike and helmet, and talk with a lawyer before speaking with insurers.",
      },
      {
        question: "How do I choose a bicycle accident lawyer?",
        answer:
          "Look for experience with injury cases, a willingness to go to trial, clear communication and contingency-fee representation.",
      },
    ],
    related: ["car-accidents", "scooter-accidents", "pedestrian-accidents", "brain-injury"],
  },

  "work-injury": {
    h1: "Work Injury Lawyer in Los Angeles",
    metaDescription:
      "Hurt on the job? A Los Angeles work injury lawyer can explore claims beyond workers' comp when a third party is at fault. Free consultation.",
    intro: [
      "Getting hurt at work can put your health and your paycheck at risk. As a work injury lawyer in Los Angeles, Lighthouse Law APC helps injured workers understand their options — including claims beyond workers' compensation when someone other than the employer is responsible.",
      "Workers' compensation provides important benefits, but it doesn't cover pain and suffering and often falls short of the full cost of a serious injury.",
    ],
    sections: [
      {
        heading: "Workers' compensation vs. a personal injury claim",
        paragraphs: [
          "In California, workers' compensation is usually the exclusive remedy against your employer for a workplace injury, regardless of fault. But when a third party contributed to your injury, you may also bring a personal injury claim against them — and that claim can include full damages, including pain and suffering.",
        ],
        bullets: [
          "A subcontractor or another company on a job site",
          "The manufacturer of defective equipment or machinery",
          "A driver who caused a crash while you were working",
          "A property owner who allowed an unsafe condition",
        ],
      },
      {
        heading: "When an employer may be directly liable",
        paragraphs: [
          "There are limited exceptions to the workers' compensation rule — for example, when an employer doesn't carry required workers' compensation insurance, or in certain cases involving intentional conduct or removed machine safety guards. We'll evaluate whether any exception may apply.",
        ],
      },
      {
        heading: "Protecting yourself after a workplace injury",
        paragraphs: [
          "Report your injury to your employer in writing as soon as possible, get medical treatment, and keep records of everything. It's illegal for your employer to retaliate against you for reporting an injury or filing a workers' compensation claim. If you were fired after getting hurt, you may have an employment claim as well.",
        ],
      },
      {
        heading: "Common workplace injuries",
        paragraphs: [
          "Workplace injuries range from sudden accidents to injuries that build up over time. Common examples include falls, being struck by equipment or vehicles, lifting injuries, repetitive stress injuries like carpal tunnel syndrome, exposure to toxic substances, and injuries in vehicle crashes while driving for work.",
          "Even if your injury developed gradually, it may be covered by workers' compensation. And if a defective tool, a negligent driver or another contractor played a part, a separate third-party claim may let you recover damages workers' compensation doesn't cover, like pain and suffering and full lost income.",
        ],
      },
      {
        heading: "Workers' comp benefits and their limits",
        paragraphs: [
          "Workers' compensation provides important benefits, but it doesn't make injured workers whole. Understanding what it does and doesn't cover helps explain why a third-party claim can matter.",
        ],
        bullets: [
          "Covers: medical treatment related to the injury",
          "Covers: temporary disability payments, usually about two-thirds of wages up to a limit",
          "Covers: permanent disability benefits based on a rating",
          "Covers: supplemental job displacement benefits in some cases",
          "Does not cover: pain and suffering",
          "Does not cover: full lost wages or loss of quality of life",
        ],
        closing: [
          "A third-party personal injury claim can fill these gaps. If you have both a workers' compensation claim and a third-party claim, they need to be coordinated carefully, including any reimbursement owed to the workers' compensation carrier.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I sue my employer for a work injury?",
        answer:
          "Usually not — workers' compensation is generally the exclusive remedy against employers. But you may be able to sue a third party who contributed to your injury.",
      },
      {
        question: "What is a third-party claim?",
        answer:
          "A personal injury claim against someone other than your employer — like an equipment maker or another contractor — whose negligence helped cause your injury.",
      },
      {
        question: "Can I be fired for getting hurt at work?",
        answer:
          "Firing someone for reporting an injury or filing a workers' compensation claim is illegal in California.",
      },
      {
        question: "How long do I have to report a work injury?",
        answer:
          "Report it to your employer within 30 days to protect your workers' compensation rights. Third-party injury claims generally must be filed within two years.",
      },
    ],
    related: ["construction-accidents", "retaliation", "brain-injury", "spinal-cord-injury"],
  },

  "aviation-accidents": {
    h1: "Aviation Accident Lawyer in Los Angeles",
    metaDescription:
      "Injured or lost a loved one in a plane or helicopter accident? A Los Angeles aviation accident lawyer can help you get answers. Free consultation.",
    intro: [
      "Aviation accidents are rare, but when they happen the consequences are often catastrophic. As an aviation accident lawyer in Los Angeles, Lighthouse Law APC helps injured passengers and grieving families seek answers and accountability.",
      "Southern California's skies are busy — with commercial flights at LAX, private aircraft at Van Nuys and Santa Monica, and helicopters for tours, news and medical transport.",
    ],
    sections: [
      {
        heading: "Types of aviation accidents",
        paragraphs: [],
        bullets: [
          "Small private plane crashes",
          "Helicopter accidents, including tour and charter flights",
          "Commercial airline injuries during flight, boarding or landing",
          "Charter and air taxi accidents",
          "Ground accidents on runways and tarmacs",
        ],
      },
      {
        heading: "Who may be responsible?",
        paragraphs: [
          "Aviation cases often involve several parties: pilots and operators, aircraft and parts manufacturers, maintenance companies, airports and air traffic control. Federal regulations from the FAA, investigations by the National Transportation Safety Board (NTSB), and international treaties for international flights can all affect your claim.",
          "Because these cases are complex, early investigation and expert analysis are essential.",
        ],
      },
      {
        heading: "Compensation and deadlines",
        paragraphs: [
          "Injured passengers may recover medical costs, lost income and pain and suffering. Families who lost a loved one may bring wrongful death claims. Deadlines vary widely — from two years under California law to shorter periods for government defendants and different rules for international travel — so prompt action is important.",
        ],
      },
      {
        heading: "Why early investigation matters",
        paragraphs: [
          "After an aviation accident, the NTSB typically takes control of the wreckage and begins its investigation. Its reports can take a year or more to finalize, and NTSB reports often can't be used directly as evidence in court. Injured people and families usually need their own independent investigation.",
          "Experts in aviation mechanics, pilot procedures and air traffic control can review maintenance records, flight data, communications recordings and weather conditions. Identifying every responsible party early — operators, manufacturers and maintenance providers — helps ensure no important claim or deadline is missed.",
        ],
      },
      {
        heading: "Common causes of aviation accidents",
        paragraphs: [
          "Aviation accidents rarely have a single cause. Investigations often uncover a chain of events involving people, equipment and conditions.",
        ],
        bullets: [
          "Pilot error, fatigue or inadequate training",
          "Mechanical failures and defective parts",
          "Improper maintenance or missed inspections",
          "Air traffic control errors",
          "Weather-related decisions and poor visibility",
          "Fuel problems or improper loading",
        ],
        closing: [
          "Identifying each contributing factor helps determine who may be liable. Because manufacturers and operators often have extensive resources, families benefit from attorneys who can retain qualified aviation experts early.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who investigates aviation accidents?",
        answer:
          "The National Transportation Safety Board (NTSB) investigates civil aviation accidents in the U.S., while the FAA oversees safety regulations.",
      },
      {
        question: "Can I sue an airline for an injury?",
        answer:
          "Yes, depending on the circumstances. International flights are often governed by the Montreal Convention, which has its own rules and a two-year deadline.",
      },
      {
        question: "Who can be liable in a helicopter crash?",
        answer:
          "Potentially the operator, pilot, manufacturer, maintenance provider or others whose negligence or defects contributed.",
      },
      {
        question: "How long do I have to file an aviation accident claim?",
        answer:
          "It depends on the case. Many California claims have a two-year limit, but government and international claims can differ.",
      },
    ],
    related: ["wrongful-death", "brain-injury", "burn-injury", "spinal-cord-injury"],
  },

  "uber-lyft-accidents": {
    h1: "Uber Accident Lawyer in Los Angeles",
    metaDescription:
      "Injured in an Uber or Lyft crash? A Los Angeles rideshare accident lawyer can sort out the insurance and pursue full compensation.",
    intro: [
      "Rideshare crashes raise questions ordinary car accidents don't. As an Uber accident lawyer in Los Angeles, Lighthouse Law APC helps injured passengers, drivers, pedestrians and other motorists navigate Uber and Lyft's insurance policies and recover what they're owed.",
      "Los Angeles is one of the biggest rideshare markets in the country. Whether you were in the back seat or hit by a rideshare driver, you deserve clear answers.",
    ],
    sections: [
      {
        heading: "How rideshare insurance works in California",
        paragraphs: [
          "California requires Uber and Lyft to carry insurance that depends on what the driver was doing at the time of the crash:",
        ],
        bullets: [
          "App off: only the driver's personal auto policy applies",
          "App on, waiting for a ride request: limited liability coverage provided by the rideshare company",
          "En route to a pickup or carrying a passenger: at least $1 million in liability coverage",
        ],
      },
      {
        heading: "How to report an Uber or Lyft accident",
        paragraphs: [
          "Call 911 and get medical care. Then report the crash in the app and keep a screenshot of your trip details. Photograph the vehicles and scene, get the driver's information and insurance, and collect witness contacts. Be cautious when speaking with the rideshare company's insurer before getting legal advice.",
        ],
      },
      {
        heading: "Can you sue Uber or Lyft?",
        paragraphs: [
          "Rideshare drivers are generally classified as independent contractors, so claims typically proceed through the companies' insurance policies rather than against the companies directly. In some situations, though, there may be claims against the company itself. Every case depends on its facts. Claims generally must be filed within two years.",
        ],
      },
      {
        heading: "Injured as a rideshare passenger",
        paragraphs: [
          "If you were hurt while riding in an Uber or Lyft, you're usually in a strong position: as a passenger, you're rarely at fault. Your claim may be against the rideshare driver's coverage, another at-fault driver, or both. When the rideshare driver was carrying you, the company's $1 million liability policy generally applies.",
          "Rideshare insurers are large, sophisticated companies. Keep your trip receipt, screenshots of the driver and vehicle details, and any messages through the app. Get medical care right away and keep records of every appointment and expense related to your injuries.",
        ],
      },
      {
        heading: "Uninsured drivers and rideshare coverage",
        paragraphs: [
          "Rideshare insurance can also help when another driver causes a crash and doesn't have enough insurance. Coverage depends on the trip status at the time of the collision.",
        ],
        bullets: [
          "During a trip, rideshare policies typically include uninsured and underinsured motorist coverage",
          "Passengers may be protected if an uninsured driver hits the rideshare vehicle",
          "Drivers may have coverage through the rideshare policy and their own policy",
          "Hit-and-run crashes may fall under uninsured motorist coverage",
          "Medical payments coverage may help with immediate bills",
          "Your own health insurance can cover treatment while the claim is pending",
        ],
        closing: [
          "Sorting out overlapping policies can be complicated. A rideshare accident lawyer can identify every source of coverage and handle communications with each insurer.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I report an Uber accident?",
        answer:
          "Call 911 if anyone is hurt, report the crash through the Uber app's help section, screenshot your trip details, and document the scene.",
      },
      {
        question: "Is Uber liable for accidents?",
        answer:
          "Uber's insurance usually covers crashes that happen while a driver is en route to a pickup or carrying a passenger, with at least $1 million in liability coverage.",
      },
      {
        question: "Does Uber cover accidents if I'm a passenger?",
        answer:
          "Yes. If you were injured as a passenger during a trip, the rideshare company's insurance typically applies.",
      },
      {
        question: "What if I'm a Lyft driver and got hurt?",
        answer:
          "You may have claims against an at-fault driver, and the rideshare company's policies may offer additional coverage. A lawyer can sort out your options.",
      },
    ],
    related: ["car-accidents", "traffic-accidents", "pedestrian-accidents", "brain-injury"],
  },

  "scooter-accidents": {
    h1: "Los Angeles Scooter Accident Lawyer",
    metaDescription:
      "Hurt on an electric scooter? A Los Angeles scooter accident lawyer can identify who's responsible and pursue compensation. Free consultation.",
    intro: [
      "Electric scooters are everywhere in Los Angeles — and so are scooter injuries. A Los Angeles scooter accident lawyer at Lighthouse Law APC helps riders and pedestrians injured in e-scooter crashes find out who's responsible.",
      "Scooter accidents can involve careless drivers, dangerous streets, defective scooters or rental company failures. Identifying the right party is the first step toward recovery.",
    ],
    sections: [
      {
        heading: "Common causes of electric scooter accidents",
        paragraphs: [],
        bullets: [
          "Drivers failing to see or yield to scooter riders",
          "Potholes, cracked pavement and uneven surfaces",
          "Brake, throttle or battery defects",
          "Poorly maintained rental scooters",
          "Riders colliding with pedestrians on sidewalks",
        ],
      },
      {
        heading: "Who may be liable?",
        paragraphs: [
          "Depending on the facts, responsibility may fall on a negligent driver, the scooter's manufacturer, a rental company that failed to maintain its fleet, or a government entity responsible for a dangerous road. Rental agreements often include terms that try to limit liability, so we review them carefully.",
        ],
      },
      {
        heading: "Scooter rules in California",
        paragraphs: [
          "California requires riders to have a driver's license or permit, prohibits riding on sidewalks in most cases, and requires helmets for riders under 18. Following — or breaking — these rules can affect a claim, but under comparative negligence you may still recover even if you share some fault. Claims generally must be filed within two years, or six months for public entities.",
        ],
      },
      {
        heading: "Injuries from scooter crashes",
        paragraphs: [
          "Electric scooters offer little protection in a crash. Riders commonly suffer head injuries, facial fractures, broken wrists and arms from bracing a fall, and serious road rash. Pedestrians struck by scooters can also suffer fractures and head injuries, especially older adults.",
          "Prompt medical care is important — head injuries in particular may not show symptoms right away. Photograph the scooter, its ID number, the scene and any road defects, and save your rental app records showing your ride. That information can help establish what went wrong and who should be responsible.",
        ],
      },
      {
        heading: "Steps to take after a scooter accident",
        paragraphs: [
          "After a scooter crash, quick steps can protect both your health and your claim.",
        ],
        bullets: [
          "Get medical attention, especially for any head injury",
          "Photograph the scooter, its ID number and the scene",
          "Take pictures of potholes, cracks or debris that caused the fall",
          "Get driver and witness contact information if a vehicle was involved",
          "Screenshot your ride details in the rental app",
          "Report the crash to the rental company and keep a copy",
        ],
        closing: [
          "Keep the clothes and helmet you were wearing. If the scooter malfunctioned, note what happened — brakes failing, sudden acceleration or a battery problem — as specifically as possible.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who is responsible for an electric scooter accident?",
        answer:
          "It could be a driver, the scooter manufacturer, the rental company or a public agency responsible for a hazardous road, depending on what caused the crash.",
      },
      {
        question: "Can I sue Bird, Lime or another scooter company?",
        answer:
          "Possibly, especially if a defect or poor maintenance caused your injury. Rental agreements may affect your options, so a lawyer should review them.",
      },
      {
        question: "Do I need a helmet to ride a scooter in California?",
        answer: "Helmets are required for riders under 18 and strongly recommended for everyone.",
      },
      {
        question: "What if a scooter rider hit me while I was walking?",
        answer:
          "You may have a claim against the rider and possibly others. Document the incident and get medical care.",
      },
    ],
    related: ["bicycle-accidents", "pedestrian-accidents", "negligence", "brain-injury"],
  },

  "brain-injury": {
    h1: "Brain Injury Attorney in Los Angeles",
    metaDescription:
      "Suffered a traumatic brain injury? A Los Angeles brain injury attorney can pursue compensation for lifelong needs. Free consultation.",
    intro: [
      "A brain injury can affect who you are — your memory, your mood, your ability to work and your relationships. As a brain injury attorney in Los Angeles, Lighthouse Law APC helps people with traumatic brain injuries (TBIs) and their families pursue compensation that reflects the full impact on their lives.",
      "Brain injuries are often called “invisible injuries” because the symptoms aren't always obvious. Insurance companies may try to downplay them. We make sure they're taken seriously.",
    ],
    sections: [
      {
        heading: "Common causes of traumatic brain injuries",
        paragraphs: [],
        bullets: [
          "Car, motorcycle, truck and bicycle accidents",
          "Pedestrian accidents",
          "Slip and falls and falls from heights",
          "Construction and workplace accidents",
          "Assaults and inadequate security",
          "Sports and recreational accidents",
        ],
      },
      {
        heading: "Signs of a brain injury",
        paragraphs: [
          "Symptoms can appear right away or develop over days or weeks. Watch for headaches, dizziness, confusion, memory problems, trouble concentrating, sensitivity to light or noise, mood changes, sleep problems and fatigue. Even a “mild” concussion can have lasting effects.",
          "Not every brain injury shows up on a CT scan or MRI. Neuropsychological testing and specialist evaluations are often needed to document the injury.",
        ],
      },
      {
        heading: "Valuing a brain injury case",
        paragraphs: [
          "Serious brain injuries can require years of care. We work with medical experts, life-care planners and economists to account for current and future medical treatment, rehabilitation, lost income and earning capacity, home care, and the loss of quality of life. Claims generally must be filed within two years.",
        ],
      },
      {
        heading: "Supporting families of brain injury survivors",
        paragraphs: [
          "Brain injuries affect entire families. Loved ones may become caregivers, manage appointments and finances, and adjust to changes in personality or behavior. California law may allow a spouse to seek damages for loss of consortium — the loss of companionship and support caused by a serious injury.",
          "We work with families to understand day-to-day needs and document them carefully. Journals noting symptoms, changes in mood, memory lapses and new limitations can be powerful evidence, especially when medical imaging doesn't fully capture the injury's impact.",
        ],
      },
      {
        heading: "Long-term effects of traumatic brain injury",
        paragraphs: [
          "Even after initial recovery, many people with TBIs live with lasting effects that can change their work, relationships and independence. These long-term consequences should be part of any claim.",
        ],
        bullets: [
          "Memory problems and difficulty learning new information",
          "Trouble concentrating or making decisions",
          "Headaches, dizziness and sensitivity to light or sound",
          "Depression, anxiety, irritability and mood swings",
          "Sleep disturbances and chronic fatigue",
          "Increased risk of later neurological conditions",
        ],
        closing: [
          "Specialists like neurologists, neuropsychologists and vocational experts can help show how these effects impact daily life and the ability to work, now and in the future.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do brain injuries show up on an MRI?",
        answer:
          "Not always. Many traumatic brain injuries, including concussions, don't appear on standard scans, so other testing is often used.",
      },
      {
        question: "How much is a brain injury case worth?",
        answer:
          "It depends on the severity, long-term effects, medical costs and lost income. Serious TBIs can involve substantial future care costs.",
      },
      {
        question: "Can I work while pursuing a brain injury claim?",
        answer:
          "Yes, if you're able. Changes in your ability to work can be an important part of the claim, so keep records.",
      },
      {
        question: "What if symptoms appeared days after the accident?",
        answer:
          "That's common with brain injuries. See a doctor promptly and tell them about the accident.",
      },
    ],
    related: ["car-accidents", "spinal-cord-injury", "motorcycle-accidents", "wrongful-death"],
  },

  "burn-injury": {
    h1: "Los Angeles Burn Injury Lawyer",
    metaDescription:
      "Severely burned through someone else's negligence? A Los Angeles burn injury lawyer can pursue compensation for treatment and scarring.",
    intro: [
      "Burn injuries are among the most painful injuries a person can suffer, and recovery can take years. A Los Angeles burn injury lawyer at Lighthouse Law APC helps burn survivors pursue compensation for treatment, lost income, scarring and emotional trauma.",
      "Burns can be caused by fires, explosions, chemicals, electricity and scalding liquids. When negligence or a defective product is to blame, you may have a claim.",
    ],
    sections: [
      {
        heading: "Common causes of burn injuries",
        paragraphs: [],
        bullets: [
          "Car and truck crashes involving fires",
          "Apartment and building fires caused by code violations",
          "Gas leaks and explosions",
          "Defective products, batteries and e-bikes",
          "Electrical accidents on job sites",
          "Chemical exposure and scalding liquids",
        ],
      },
      {
        heading: "The true cost of a burn injury",
        paragraphs: [
          "Severe burns often require hospitalization in a burn unit, skin grafts, multiple surgeries and long-term therapy. Many survivors face permanent scarring, limited mobility, infection risk and psychological effects like anxiety and PTSD. Compensation should account for all of it — today and in the future.",
        ],
      },
      {
        heading: "Who can be held responsible?",
        paragraphs: [
          "Depending on the cause, liable parties may include property owners and landlords, product manufacturers, employers' contractors, utility companies or negligent drivers. We investigate the cause, preserve evidence and consult fire and product experts. Claims generally must be filed within two years.",
        ],
      },
      {
        heading: "Degrees of burn injuries",
        paragraphs: [
          "Burns are classified by depth. First-degree burns affect only the outer layer of skin. Second-degree burns reach deeper layers and often blister. Third-degree burns destroy the full thickness of the skin and may damage nerves, while fourth-degree burns extend into muscle and bone.",
          "Deeper burns frequently require skin grafts, reconstructive surgery and long-term scar management, and they carry a high risk of infection. The location of a burn matters too — burns to the face, hands and joints can affect appearance and function in lasting ways. Your claim should reflect both the medical treatment and these long-term consequences.",
        ],
      },
      {
        heading: "Steps to take after a burn injury",
        paragraphs: [
          "After a burn injury, medical care comes first. Once you're safe, these steps can help protect your claim.",
        ],
        bullets: [
          "Get emergency treatment and follow up with a burn specialist",
          "Photograph your injuries throughout healing",
          "Keep the product, device or item involved, if possible",
          "Get the names of witnesses and responders",
          "Request fire department or incident reports",
          "Keep records of all medical bills and missed work",
        ],
        closing: [
          "Avoid giving recorded statements to insurers before speaking with a lawyer. Burn cases often require expert investigation into how a fire started or why a product failed.",
        ],
      },
    ],
    faqs: [
      {
        question: "What compensation is available for burn injuries?",
        answer:
          "Medical bills, future surgeries and care, lost income, scarring and disfigurement, and pain and suffering.",
      },
      {
        question: "Can I sue a landlord for a fire?",
        answer:
          "Possibly, if the landlord's failure to maintain smoke detectors, wiring or other safety features contributed to the fire.",
      },
      {
        question: "What if a defective product caused my burn?",
        answer:
          "You may have a product liability claim against the manufacturer, distributor or seller.",
      },
      {
        question: "What's the deadline for a burn injury claim?",
        answer:
          "Generally two years in California, or six months for claims against public entities.",
      },
    ],
    related: ["premises-liability", "construction-accidents", "work-injury", "wrongful-death"],
  },
};
