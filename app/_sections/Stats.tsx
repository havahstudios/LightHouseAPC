import { stats } from "@/lib/content/home";

// Three big numbers, each with a short gold line above.
export default function Stats() {
  return (
    <section className="bg-shell pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 border-b border-line pb-16 md:grid-cols-3 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="mb-7 block h-[3px] w-16 bg-beacon" />
              <p className="font-serif text-6xl font-light text-ink md:text-[4.25rem]">
                {stat.value.toLocaleString("en-US")}
                {stat.suffix}
              </p>
              <p className="mt-4 text-sm text-stone">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
