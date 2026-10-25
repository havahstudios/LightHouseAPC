import type { ServiceContent } from "./types";

// Hub pages: /practice-areas/employment-law and /practice-areas/personal-injury.
// `related` is unused here — hubs list every service in their group instead.

export const hubs: Record<string, ServiceContent> = {
  "employment-law": {
    h1: "Los Angeles Employment Lawyer",
    metaDescription:
      "Wronged by your employer? Our Los Angeles employment lawyers handle wrongful termination, discrimination, harassment and wage claims. Free consultation.",
    intro: [
      "When your job is on the line, you need someone firmly in your corner. As a Los Angeles employment lawyer, Lighthouse Law APC represents employees — never employers — in claims for wrongful termination, discrimination, harassment, retaliation, unpaid wages and more.",
      "California gives workers some of the strongest legal protections in the country. We know how to use them, and as trial lawyers, we're prepared to take your case to court when an employer won't do the right thing.",
    ],
    sections: [
      {
        heading: "What does an employment lawyer do?",
        paragraphs: [
          "An employment lawyer helps workers understand and enforce their rights on the job. That can mean reviewing what happened, gathering evidence, filing claims with agencies like the California Civil Rights Department or the Labor Commissioner, negotiating with your employer, reviewing severance agreements and, when necessary, filing a lawsuit and going to trial.",
        ],
      },
      {
        heading: "Do I need an employment lawyer?",
        paragraphs: ["It's a good idea to talk with an employment lawyer if:"],
        bullets: [
          "You were fired, demoted or disciplined soon after complaining or taking leave",
          "You're being harassed or treated differently because of who you are",
          "You haven't been paid overtime, breaks or all of your wages",
          "You were offered a severance agreement and asked to sign a release",
          "You requested an accommodation or leave and were denied or punished",
        ],
      },
      {
        heading: "Deadlines matter",
        paragraphs: [
          "Employment claims have strict deadlines. Many discrimination and retaliation claims must be filed with the Civil Rights Department within three years, wrongful discharge claims generally within two years, and some claims much sooner. Evidence like emails and schedules can disappear quickly, so early advice can make a real difference.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does an employment lawyer do?",
        answer:
          "Represents workers in disputes with employers — investigating claims, filing with agencies, negotiating settlements and severance, and litigating cases in court.",
      },
      {
        question: "How much does an employment lawyer cost?",
        answer:
          "Consultations at Lighthouse Law APC are free, and many employment cases are handled on contingency, so you pay no attorney fees unless we recover money for you.",
      },
      {
        question: "Do I need an employment lawyer?",
        answer:
          "If you believe you were treated illegally at work, a consultation can help you understand your rights and deadlines before you make decisions.",
      },
      {
        question: "Do you represent employers?",
        answer: "No. Lighthouse Law APC represents employees only.",
      },
    ],
    related: [],
  },

  "personal-injury": {
    h1: "Los Angeles Personal Injury Attorney",
    metaDescription:
      "Injured through someone else's carelessness? Our Los Angeles personal injury attorneys fight insurers for full compensation. Free consultation.",
    intro: [
      "An injury can upend your health, your income and your family's stability. As a Los Angeles personal injury attorney, Lighthouse Law APC fights for people hurt in car, truck and motorcycle crashes, falls, dog bites, workplace accidents and other incidents caused by someone else's carelessness.",
      "We deal with the insurance companies so you can focus on healing — and as trial lawyers, we prepare every case as if it's going to court.",
    ],
    sections: [
      {
        heading: "What does a personal injury lawyer do?",
        paragraphs: [
          "A personal injury lawyer investigates how you were hurt, identifies everyone who may be responsible, gathers evidence, works with doctors and experts to document your injuries and future needs, handles every conversation with insurers, and negotiates or litigates for full and fair compensation.",
        ],
      },
      {
        heading: "When should you hire a personal injury lawyer?",
        paragraphs: ["Consider speaking with a lawyer if:"],
        bullets: [
          "You were seriously injured or needed ongoing medical treatment",
          "You missed work or can't return to your job",
          "The insurance company is disputing fault or offering a low settlement",
          "The accident involved a commercial vehicle, rideshare or government agency",
          "A loved one died because of someone else's negligence",
        ],
      },
      {
        heading: "What your case may be worth",
        paragraphs: [
          "Compensation in a California personal injury case can include medical bills, future care, lost wages and earning capacity, property damage, and pain and suffering. Under California's comparative negligence rule, you can recover even if you were partly at fault. Most claims must be filed within two years, and claims against public agencies within six months.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a personal injury lawyer?",
        answer:
          "If you were injured and the other side's insurer is involved, a lawyer can protect your rights and often secure significantly more than you would alone.",
      },
      {
        question: "When should I hire a personal injury lawyer?",
        answer:
          "As soon as possible after getting medical care, before giving recorded statements or accepting any settlement offer.",
      },
      {
        question: "How much does a personal injury lawyer cost?",
        answer:
          "Lighthouse Law APC works on contingency: no fees unless we recover compensation for you.",
      },
      {
        question: "How do I choose a personal injury lawyer?",
        answer:
          "Look for trial experience, clear communication, a focus on injury cases and a free consultation so you can ask questions before deciding.",
      },
    ],
    related: [],
  },
};
