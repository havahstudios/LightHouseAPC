const steps = [
  {
    title: "Tell us what happened",
    text: "Send the form or call us. A few sentences is plenty — you don't need documents to get started.",
  },
  {
    title: "We review your situation",
    text: "Our team looks at the facts confidentially and works out what questions to ask you.",
  },
  {
    title: "We talk through your options",
    text: "We contact you to explain where you stand and what you can do. The consultation is free, with no obligation.",
  },
];

// The numbered "what happens after you reach out" list on the contact page.
export default function NextSteps() {
  return (
    <div>
      <h2 className="text-2xl font-light md:text-3xl">What Happens Next</h2>
      <ol className="mt-8 space-y-7">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-5">
            <span className="font-serif text-2xl leading-none text-beacon-dark">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-sans text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-stone">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
