import type { ServiceContent } from "./types";

// Personal injury pages, part 2. General legal information — have the attorney review before launch.

export const injuryB: Record<string, ServiceContent> = {
  "bus-accidents": {
    h1: "Bus Accident Lawyer in Los Angeles",
    metaDescription:
      "Injured on or by a bus in LA? A Los Angeles bus accident lawyer can handle strict government deadlines and pursue compensation.",
    intro: [
      "Buses carry millions of riders across Los Angeles every year. As a bus accident lawyer in Los Angeles, Lighthouse Law APC helps passengers, pedestrians, cyclists and drivers injured in accidents involving Metro buses, school buses, tour buses, shuttles and charter coaches.",
      "Bus companies and transit agencies are held to a high standard of care. When they fall short, injured people can seek compensation — but these claims often come with short deadlines.",
    ],
    sections: [
      {
        heading: "Why bus accident cases are different",
        paragraphs: [
          "Under California law, common carriers like bus operators owe passengers the utmost care and diligence. That's a higher standard than ordinary drivers. But many buses are operated by public agencies such as LA Metro, school districts or cities, and claims against government entities generally require filing a formal government claim within six months.",
          "Missing that deadline can bar your case, so speaking with a lawyer quickly is important.",
        ],
      },
      {
        heading: "Common causes of bus accidents",
        paragraphs: [],
        bullets: [
          "Driver fatigue, distraction or inadequate training",
          "Sudden stops or starts that throw passengers",
          "Unsafe lane changes and turns",
          "Poor bus maintenance, such as brake failures",
          "Accidents while boarding or exiting",
          "Collisions with cars, cyclists and pedestrians",
        ],
      },
      {
        heading: "Who can be held responsible?",
        paragraphs: [
          "Depending on the accident, liable parties may include the bus driver, the bus company or transit agency, maintenance contractors, manufacturers, or other drivers. Injured people may recover medical expenses, lost wages and pain and suffering.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long do I have to file a claim against LA Metro?",
        answer:
          "Claims against public agencies like LA Metro generally require a written government claim within six months of the accident.",
      },
      {
        question: "Can I sue if I was injured as a bus passenger?",
        answer:
          "Yes. Bus operators owe passengers a very high duty of care, and you may recover if their negligence caused your injury.",
      },
      {
        question: "What if a bus hit my car?",
        answer:
          "You may have a claim against the bus operator. If it's a public agency, the six-month government claim deadline likely applies.",
      },
      {
        question: "What if I fell while the bus was moving?",
        answer:
          "Falls caused by sudden stops, starts or unsafe driving may be the operator's responsibility.",
      },
    ],
    related: ["car-accidents", "pedestrian-accidents", "train-accidents", "traffic-accidents"],
  },

  "dog-bites": {
    h1: "Dog Bite Lawyer in Los Angeles",
    metaDescription:
      "Bitten by a dog? A Los Angeles dog bite lawyer can help you recover under California's strict liability law. Free consultation.",
    intro: [
      "A dog bite can cause deep wounds, infections, scarring and lasting fear. As a dog bite lawyer in Los Angeles, Lighthouse Law APC helps children and adults recover compensation after an attack.",
      "California has one of the strongest dog bite laws in the country. In many cases, the owner is responsible even if the dog never bit anyone before.",
    ],
    sections: [
      {
        heading: "California's dog bite law",
        paragraphs: [
          "Under California Civil Code section 3342, a dog owner is strictly liable when their dog bites someone in a public place or lawfully in a private place, including the owner's property. You generally don't have to prove the owner knew the dog was dangerous or was careless.",
          "If a dog knocked you down or injured you without biting, you may still have a claim based on negligence or other legal theories.",
        ],
      },
      {
        heading: "Does renters or homeowners insurance cover dog bites?",
        paragraphs: [
          "Often, yes. Many dog bite claims are paid through the owner's homeowners or renters insurance policy, which usually includes personal liability coverage. Some policies exclude certain breeds or dogs with a bite history, so we look into every potential source of compensation.",
        ],
      },
      {
        heading: "What to do after a dog bite",
        paragraphs: [],
        bullets: [
          "Get medical care right away — dog bites can become infected quickly",
          "Identify the dog and its owner, and ask about vaccination records",
          "Report the bite to LA County or city animal control",
          "Photograph your injuries and the location",
          "Get contact information from witnesses",
          "Keep records of medical bills and missed work",
        ],
      },
    ],
    faqs: [
      {
        question: "Does renters insurance cover dog bites?",
        answer:
          "Many renters and homeowners policies include liability coverage that can pay for dog bite injuries, though some exclude certain breeds or dogs.",
      },
      {
        question: "Is a dog owner always responsible for a bite in California?",
        answer:
          "Usually, under California's strict liability law, if you were in a public place or lawfully on private property. There are limited exceptions, such as police and military dogs in certain situations.",
      },
      {
        question: "What if the dog knocked me down but didn't bite?",
        answer:
          "The strict liability statute covers bites, but you may still have a negligence claim for other injuries caused by a dog.",
      },
      {
        question: "How long do I have to file a dog bite claim?",
        answer: "Generally two years from the date of the injury in California.",
      },
    ],
    related: ["animal-attacks", "premises-liability", "negligence", "burn-injury"],
  },

  negligence: {
    h1: "Negligence Lawyer in Los Angeles",
    metaDescription:
      "Hurt because someone was careless? A Los Angeles negligence lawyer can help you hold them accountable and recover damages. Free consultation.",
    intro: [
      "Not every injury fits neatly into a category — but if someone's carelessness hurt you, they can still be held responsible. As a negligence lawyer in Los Angeles, Lighthouse Law APC handles personal injury claims of every kind.",
      "Negligence is the foundation of most personal injury law. Understanding how it works can help you understand whether you have a case.",
    ],
    sections: [
      {
        heading: "What is negligence?",
        paragraphs: [
          "In California, everyone has a duty to use reasonable care to avoid injuring others. Negligence happens when someone fails to act as a reasonably careful person would in the same situation. To bring a negligence claim, you generally must show:",
        ],
        bullets: [
          "The other party owed you a duty of care",
          "They breached that duty through action or inaction",
          "The breach caused your injury",
          "You suffered actual damages, such as medical bills or lost income",
        ],
      },
      {
        heading: "Examples of negligence claims",
        paragraphs: [
          "General negligence claims can arise from countless situations: a store that ignores a dangerous display, a company that fails to secure a worksite, a gym with broken equipment, a negligent security failure, or someone who carelessly causes an accident. If you're not sure whether your situation qualifies, a free consultation can help.",
        ],
      },
      {
        heading: "Comparative negligence in California",
        paragraphs: [
          "California follows pure comparative negligence. That means if you were partly at fault, you can still recover — your compensation is reduced by your share of fault. Even if you were 30% responsible, you could still recover 70% of your damages. Most negligence claims must be filed within two years.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the four elements of negligence?",
        answer: "Duty of care, breach of that duty, causation and damages.",
      },
      {
        question: "Can I recover if I was partly at fault?",
        answer:
          "Yes. Under California's pure comparative negligence rule, your recovery is reduced by your percentage of fault but not eliminated.",
      },
      {
        question: "What damages can I recover in a negligence case?",
        answer:
          "Medical expenses, lost wages, future care costs, property damage, and pain and suffering, depending on the case.",
      },
      {
        question: "How long do I have to file a negligence claim?",
        answer:
          "Generally two years for personal injuries in California, with shorter deadlines for claims against government entities.",
      },
    ],
    related: ["premises-liability", "slip-and-fall", "car-accidents", "wrongful-death"],
  },

  "animal-attacks": {
    h1: "Animal Attack Lawyer in Los Angeles",
    metaDescription:
      "Injured by a dog, horse or other animal? A Los Angeles animal attack lawyer can help you recover compensation. Free consultation.",
    intro: [
      "Animal attacks can be terrifying and leave serious physical and emotional injuries. As an animal attack lawyer in Los Angeles, Lighthouse Law APC helps people injured by dogs, horses, exotic pets and other animals.",
      "The rules for animal injuries in California depend on the type of animal and the circumstances of the attack.",
    ],
    sections: [
      {
        heading: "Dogs vs. other animals",
        paragraphs: [
          "For dog bites, California's strict liability statute generally makes the owner responsible regardless of the dog's history. For other domestic animals, an owner is generally liable if they knew or should have known the animal had dangerous tendencies, or if they were negligent in controlling it. Owners of wild or exotic animals are often held strictly liable.",
        ],
      },
      {
        heading: "Who may be responsible?",
        paragraphs: [],
        bullets: [
          "The animal's owner or keeper",
          "A landlord who knew about a dangerous animal on the property",
          "Businesses like stables, ranches, petting zoos or boarding facilities",
          "Property owners who failed to secure an animal",
        ],
      },
      {
        heading: "Injuries and compensation",
        paragraphs: [
          "Animal attacks can cause bites, lacerations, broken bones, infections, scarring and lasting anxiety, especially in children. Compensation may include medical bills, plastic surgery, counseling, lost income and pain and suffering. Report the attack to animal control, get medical care and keep records. Claims generally must be filed within two years.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who is liable for an animal attack in California?",
        answer:
          "Usually the owner or keeper. Dog owners are strictly liable for bites; for other animals, liability often depends on whether the owner knew of the danger or was negligent.",
      },
      {
        question: "Can I sue a landlord for a tenant's dangerous animal?",
        answer:
          "Possibly, if the landlord knew about the dangerous animal and had the ability to prevent the harm.",
      },
      {
        question: "What should I do after an animal attack?",
        answer:
          "Get medical care, identify the animal and owner, report it to animal control, and document your injuries.",
      },
      {
        question: "Does insurance cover animal attacks?",
        answer:
          "Homeowners and renters insurance liability coverage often applies, though some policies have exclusions.",
      },
    ],
    related: ["dog-bites", "premises-liability", "negligence", "burn-injury"],
  },

  "premises-liability": {
    h1: "Los Angeles Premises Liability Lawyer",
    metaDescription:
      "Injured on unsafe property? A Los Angeles premises liability lawyer can hold owners accountable for dangerous conditions. Free consultation.",
    intro: [
      "Property owners have a duty to keep their premises reasonably safe. A Los Angeles premises liability lawyer at Lighthouse Law APC represents people injured because of dangerous conditions in stores, apartments, offices, hotels, parking structures and other properties.",
      "California Civil Code section 1714 holds people responsible for injuries caused by their lack of ordinary care in managing their property.",
    ],
    sections: [
      {
        heading: "Types of premises liability cases",
        paragraphs: [],
        bullets: [
          "Slip, trip and fall accidents",
          "Negligent security leading to assaults or robberies",
          "Swimming pool and drowning accidents",
          "Elevator and escalator accidents",
          "Falling merchandise or objects",
          "Stairway and balcony collapses",
          "Fires and electrical hazards caused by code violations",
        ],
      },
      {
        heading: "Proving a premises liability claim",
        paragraphs: [
          "You generally must show that the owner or occupier controlled the property, was negligent in using or maintaining it, and that this negligence caused your injury. Key questions include how long the hazard existed, whether the owner inspected regularly, and whether warnings were given.",
          "In negligent security cases, prior similar incidents and the owner's security measures are often central evidence.",
        ],
      },
      {
        heading: "Public property and deadlines",
        paragraphs: [
          "Injuries caused by dangerous conditions on public property — such as broken sidewalks or poorly maintained parks — involve special rules. Claims generally require a written government claim within six months. Other premises liability claims generally must be filed within two years.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is premises liability?",
        answer:
          "The legal responsibility property owners and occupiers have for injuries caused by unsafe conditions on their property.",
      },
      {
        question: "Can I sue a landlord for an injury?",
        answer:
          "Yes, if the landlord knew or should have known about a dangerous condition they were responsible for and failed to fix it.",
      },
      {
        question: "What is negligent security?",
        answer:
          "A claim that a property owner failed to provide reasonable security, such as lighting, locks or guards, leading to a foreseeable crime.",
      },
      {
        question: "How long do I have to file a premises liability claim?",
        answer:
          "Generally two years, or six months to file a government claim for injuries on public property.",
      },
    ],
    related: ["slip-and-fall", "negligence", "dog-bites", "burn-injury"],
  },

  "spinal-cord-injury": {
    h1: "Spinal Cord Injury Lawyer in Los Angeles",
    metaDescription:
      "Suffered a spinal cord injury? A Los Angeles spinal cord injury lawyer can pursue compensation for lifelong care. Free consultation.",
    intro: [
      "A spinal cord injury can change every part of daily life. As a spinal cord injury lawyer in Los Angeles, Lighthouse Law APC helps survivors and their families pursue compensation that covers the lifelong costs of care, lost income and the loss of independence.",
      "These are among the most serious injury cases, and they demand careful preparation and experienced advocacy.",
    ],
    sections: [
      {
        heading: "Common causes of spinal cord injuries",
        paragraphs: [],
        bullets: [
          "Car, truck and motorcycle crashes",
          "Falls from heights and slip and falls",
          "Construction and workplace accidents",
          "Pedestrian and bicycle accidents",
          "Diving and swimming pool accidents",
          "Acts of violence and negligent security",
        ],
      },
      {
        heading: "Types of spinal cord injuries",
        paragraphs: [
          "A complete spinal cord injury causes total loss of sensation and movement below the injury, while an incomplete injury leaves some function. Injuries high on the spine may lead to quadriplegia (tetraplegia); lower injuries may lead to paraplegia. Herniated discs and vertebral fractures can also cause serious, lasting problems.",
        ],
      },
      {
        heading: "Planning for the future",
        paragraphs: [
          "Spinal cord injuries often require surgeries, rehabilitation, mobility equipment, home and vehicle modifications, ongoing therapy and in-home care. We work with medical experts and life-care planners to calculate these costs over a lifetime, along with lost earning capacity and pain and suffering. Claims generally must be filed within two years.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much is a spinal cord injury case worth?",
        answer:
          "It depends on the severity, medical needs, age and lost earning capacity. Severe injuries can involve millions of dollars in lifetime care costs.",
      },
      {
        question: "What is a life-care plan?",
        answer:
          "A detailed estimate prepared by experts of the medical care, equipment and support someone will need over their lifetime.",
      },
      {
        question: "Can I recover compensation if I was partly at fault?",
        answer:
          "Yes. California's comparative negligence rule reduces, but doesn't eliminate, your recovery.",
      },
      {
        question: "How long do I have to file a spinal cord injury claim?",
        answer: "Generally two years in California, or six months for claims against public entities.",
      },
    ],
    related: ["brain-injury", "truck-accidents", "construction-accidents", "motorcycle-accidents"],
  },

  "traffic-accidents": {
    h1: "Traffic Accident Attorney in Los Angeles",
    metaDescription:
      "Injured in a traffic accident on LA roads? A Los Angeles traffic accident attorney can prove fault and fight for fair compensation.",
    intro: [
      "Traffic in Los Angeles is a fact of life — and so, unfortunately, are traffic accidents. As a traffic accident attorney in Los Angeles, Lighthouse Law APC represents drivers, passengers and others injured in collisions on freeways, highways and city streets.",
      "Every collision is different. Our job is to figure out exactly what happened and who should pay for the harm it caused.",
    ],
    sections: [
      {
        heading: "Types of traffic accidents",
        paragraphs: [],
        bullets: [
          "Rear-end collisions in stop-and-go traffic",
          "T-bone and intersection crashes",
          "Freeway multi-vehicle pileups",
          "Head-on and wrong-way collisions",
          "Hit-and-run accidents",
          "Crashes involving drunk or distracted drivers",
        ],
      },
      {
        heading: "Proving who was at fault",
        paragraphs: [
          "We gather police reports, traffic camera and dashcam footage, vehicle data, witness statements and photos of the scene. In complex crashes, accident reconstruction experts can help explain how the collision happened. Multiple drivers, vehicle owners, employers or even road designers may share responsibility.",
        ],
      },
      {
        heading: "Hit-and-run and uninsured drivers",
        paragraphs: [
          "If the at-fault driver fled or doesn't have enough insurance, your own uninsured or underinsured motorist coverage may help pay for your injuries. Report a hit-and-run to police right away. Most traffic accident claims must be filed within two years.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who pays for my injuries after a traffic accident?",
        answer:
          "Usually the at-fault driver's insurance. Your own uninsured or underinsured motorist coverage may help if the other driver lacks enough coverage.",
      },
      {
        question: "What if more than one driver caused the crash?",
        answer:
          "California allows fault to be divided among several parties, and each may be responsible for their share.",
      },
      {
        question: "What should I do after a hit-and-run?",
        answer:
          "Call police, get medical care, write down everything you remember about the vehicle, and look for witnesses or cameras nearby.",
      },
      {
        question: "Do I need a lawyer for a traffic accident claim?",
        answer:
          "If you were injured or fault is disputed, a lawyer can help protect your claim and deal with insurers.",
      },
    ],
    related: ["car-accidents", "truck-accidents", "motorcycle-accidents", "uber-lyft-accidents"],
  },

  "train-accidents": {
    h1: "Train Accident Lawyer in Los Angeles",
    metaDescription:
      "Hurt in a train, Metro rail or crossing accident? A Los Angeles train accident lawyer can navigate strict deadlines. Free consultation.",
    intro: [
      "Rail travel is generally safe, but when train accidents happen, injuries are often severe. As a train accident lawyer in Los Angeles, Lighthouse Law APC helps passengers, pedestrians and drivers injured in accidents involving Metro Rail, Metrolink, Amtrak and freight trains.",
      "Train accident claims often involve public agencies and federal regulations, which makes acting quickly especially important.",
    ],
    sections: [
      {
        heading: "Types of train accidents",
        paragraphs: [],
        bullets: [
          "Derailments and collisions",
          "Railroad crossing accidents with cars or pedestrians",
          "Platform falls and boarding accidents",
          "Sudden stops that injure passengers",
          "Light rail collisions on city streets",
        ],
      },
      {
        heading: "Who may be liable?",
        paragraphs: [
          "Depending on the accident, liable parties may include the rail operator, a public transit agency, track maintenance contractors, equipment manufacturers, or drivers who ignored crossing signals. As common carriers, rail operators owe passengers a very high duty of care.",
        ],
      },
      {
        heading: "Strict deadlines for public rail claims",
        paragraphs: [
          "Many passenger rail systems in Los Angeles are run by public agencies. Claims against government entities generally require a written government claim within six months of the accident. Claims against private railroads generally must be filed within two years. Federal rules may also apply, so early legal help matters.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I sue Metro for a train accident?",
        answer:
          "Yes, potentially. Because Metro is a public agency, you generally must file a government claim within six months.",
      },
      {
        question: "Who is at fault in a railroad crossing accident?",
        answer:
          "It can be the driver, the rail operator, or whoever is responsible for maintaining crossing signals and gates.",
      },
      {
        question: "What if I fell on a train platform?",
        answer:
          "You may have a claim if the fall was caused by a hazard, crowding or an unsafe gap the operator should have addressed.",
      },
      {
        question: "Do federal laws affect train accident claims?",
        answer:
          "Sometimes. Federal safety regulations and rules can affect claims involving interstate rail like Amtrak.",
      },
    ],
    related: ["bus-accidents", "pedestrian-accidents", "wrongful-death", "brain-injury"],
  },

  "truck-accidents": {
    h1: "Truck Accident Lawyer in Los Angeles",
    metaDescription:
      "Hurt in a crash with a big rig or delivery truck? A Los Angeles truck accident lawyer can investigate and fight for full compensation.",
    intro: [
      "Commercial trucks can weigh 20 times more than a passenger car, and crashes with them often cause devastating injuries. As a truck accident lawyer in Los Angeles, Lighthouse Law APC represents people injured in collisions with big rigs, delivery trucks, garbage trucks and other commercial vehicles.",
      "With the Ports of Los Angeles and Long Beach and freeways like the 710, 5 and 60, Los Angeles sees enormous truck traffic.",
    ],
    sections: [
      {
        heading: "What to do after a truck accident",
        paragraphs: [],
        bullets: [
          "Call 911 and get medical care immediately",
          "Photograph the scene, vehicles, truck markings and DOT numbers",
          "Get the truck driver's and company's information",
          "Collect witness names and contact details",
          "Avoid statements to the trucking company's insurer",
          "Contact a lawyer quickly so evidence can be preserved",
        ],
      },
      {
        heading: "Who is liable in a truck accident?",
        paragraphs: [
          "Truck accident cases often involve several potentially responsible parties: the driver, the trucking company, the owner of the truck or trailer, the company that loaded the cargo, maintenance providers and parts manufacturers. Trucking companies must follow federal safety rules on driver hours, inspections and maintenance.",
          "Key evidence — like electronic logging device data, black box data, driver logs and maintenance records — can be lost if not preserved quickly. We send preservation demands right away.",
        ],
      },
      {
        heading: "How a truck accident lawyer can help",
        paragraphs: [
          "Trucking companies and their insurers respond fast after a crash. We investigate just as quickly, work with accident reconstruction experts, identify every insurance policy, and fight for compensation for medical care, lost income, future needs and pain and suffering. Claims generally must be filed within two years.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should I do after a truck accident?",
        answer:
          "Get medical care, document the scene and truck information, collect witnesses, avoid insurer statements, and contact a lawyer quickly to preserve evidence.",
      },
      {
        question: "Who is liable in a truck accident?",
        answer:
          "Potentially the driver, trucking company, truck owner, cargo loader, maintenance provider or manufacturer, depending on the cause.",
      },
      {
        question: "When should I consult a lawyer for a truck accident?",
        answer:
          "As soon as possible. Important evidence like driver logs and black box data can be lost or overwritten.",
      },
      {
        question: "What does a truck accident lawyer do?",
        answer:
          "Investigates the crash, preserves evidence, identifies all responsible parties and insurance, and negotiates or litigates for full compensation.",
      },
    ],
    related: ["car-accidents", "wrongful-death", "spinal-cord-injury", "traffic-accidents"],
  },

  "construction-accidents": {
    h1: "Los Angeles Construction Accident Lawyer",
    metaDescription:
      "Injured on a construction site? A Los Angeles construction accident lawyer can pursue claims beyond workers' comp. Free consultation.",
    intro: [
      "Construction is one of the most dangerous industries in California. A Los Angeles construction accident lawyer at Lighthouse Law APC helps injured workers and bystanders recover compensation after accidents on job sites.",
      "Construction sites often involve many companies working side by side. When someone other than your employer contributed to your injury, you may have a claim beyond workers' compensation.",
    ],
    sections: [
      {
        heading: "Common construction accidents",
        paragraphs: [],
        bullets: [
          "Falls from ladders, scaffolding and roofs",
          "Being struck by falling tools or materials",
          "Trench collapses and cave-ins",
          "Electrocution and electrical burns",
          "Crane and heavy equipment accidents",
          "Defective tools and machinery",
        ],
      },
      {
        heading: "Third-party claims on construction sites",
        paragraphs: [
          "Workers' compensation usually limits claims against your direct employer. But general contractors, subcontractors, property owners, equipment rental companies and manufacturers may be liable if their negligence or defective products caused your injury. These third-party claims can include full damages, including pain and suffering.",
          "Cal/OSHA safety rules and site safety records often play an important role in proving these claims.",
        ],
      },
      {
        heading: "Bystanders and passersby",
        paragraphs: [
          "Construction accidents don't only affect workers. Pedestrians and drivers can be hurt by falling debris, blocked sidewalks or unsafe detours. Injured bystanders may bring personal injury claims directly. Claims generally must be filed within two years, or six months for public projects.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I sue if I was hurt on a construction site?",
        answer:
          "You generally can't sue your direct employer outside workers' comp, but you may be able to sue other contractors, owners or manufacturers who contributed.",
      },
      {
        question: "Who is responsible for construction site safety?",
        answer:
          "Employers, general contractors, subcontractors and property owners can all have safety responsibilities depending on their role and control.",
      },
      {
        question: "Can undocumented workers recover compensation?",
        answer:
          "In California, injured workers are generally entitled to workers' compensation and may pursue injury claims regardless of immigration status.",
      },
      {
        question: "What if a bystander was injured by a construction project?",
        answer:
          "Bystanders may bring claims against the contractors or owners responsible for the hazard.",
      },
    ],
    related: ["work-injury", "spinal-cord-injury", "brain-injury", "burn-injury"],
  },

  "wrongful-death": {
    h1: "Los Angeles Wrongful Death Lawyer",
    metaDescription:
      "Lost a loved one due to someone's negligence? A Los Angeles wrongful death lawyer can help your family pursue justice. Free consultation.",
    intro: [
      "Nothing can undo the loss of a loved one. But when a death was caused by someone else's negligence or wrongdoing, a Los Angeles wrongful death lawyer at Lighthouse Law APC can help your family seek accountability and the financial security you need for the future.",
      "We handle these cases with compassion, keeping you informed while we take on the legal work.",
    ],
    sections: [
      {
        heading: "What is a wrongful death lawsuit?",
        paragraphs: [
          "A wrongful death lawsuit is a civil claim brought by certain family members when a person dies because of another party's negligent, reckless or intentional conduct. Common causes include car and truck crashes, pedestrian accidents, workplace and construction accidents, defective products and unsafe property.",
          "A related “survival action” can also recover certain damages the person who died could have claimed had they lived.",
        ],
      },
      {
        heading: "Who can file a wrongful death lawsuit in California?",
        paragraphs: [
          "Under California Code of Civil Procedure section 377.60, the people who may bring a wrongful death claim include:",
        ],
        bullets: [
          "A surviving spouse or registered domestic partner",
          "Children, and grandchildren if the children have passed",
          "Others entitled to inherit, such as parents or siblings, in some cases",
          "Certain dependents, including stepchildren and parents who relied on the deceased financially",
        ],
      },
      {
        heading: "Who gets the money in a wrongful death lawsuit?",
        paragraphs: [
          "Wrongful death damages go to the eligible family members, and are usually divided according to each person's loss. Damages may include loss of financial support, loss of household services, funeral and burial expenses, and the loss of love, companionship, comfort and guidance.",
          "Wrongful death claims generally must be filed within two years of the death, and claims against government entities require a government claim within six months.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a wrongful death lawsuit?",
        answer:
          "A civil lawsuit by eligible family members seeking compensation after a death caused by someone else's negligence or wrongful act.",
      },
      {
        question: "Who can file a wrongful death lawsuit in California?",
        answer:
          "Typically a surviving spouse or domestic partner and children, and in some cases parents, siblings or dependents.",
      },
      {
        question: "Who gets the money in a wrongful death lawsuit?",
        answer:
          "The eligible family members who bring the claim, generally divided based on each person's losses.",
      },
      {
        question: "Are wrongful death settlements taxable?",
        answer:
          "Compensation for personal physical injury or death is generally not taxable under federal law, but some portions, like interest or punitive damages, may be. Consult a tax professional.",
      },
    ],
    related: ["truck-accidents", "car-accidents", "pedestrian-accidents", "aviation-accidents"],
  },
};
