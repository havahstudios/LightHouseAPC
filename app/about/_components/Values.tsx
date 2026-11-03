const values = [
  {
    title: "Prepared for trial",
    text: "We build every case as if it will go before a jury. Insurance companies and employers know the difference, and it shows in what they're willing to offer.",
  },
  {
    title: "Straight answers",
    text: "We tell you what your case is really worth and what to expect, in plain language. No legal jargon, no false promises.",
  },
  {
    title: "Personal attention",
    text: "You won't be passed around or left waiting for a call back. We keep you updated and respond when you have questions.",
  },
  {
    title: "Free to talk",
    text: "Your first consultation is free and confidential, so you can learn your options before deciding anything.",
  },
];

// "How we work" principles shown in a four-column grid on the About page.
export default function Values() {
  return (
    <section className="bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-xl text-3xl leading-tight font-light md:text-[2.5rem]">How We Work</h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((value, i) => (
            <li key={value.title} className="border-t-2 border-beacon pt-6">
              <span className="font-serif text-sm text-beacon-dark">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-sans text-base font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone">{value.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
