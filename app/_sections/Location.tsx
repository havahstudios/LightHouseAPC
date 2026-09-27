import { site } from "@/lib/site";

// Navy card with the office address, phone and a map.
export default function Location() {
  return (
    <section className="bg-shell pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-10 bg-navy px-7 py-12 md:grid-cols-2 md:px-14 md:py-16">
            <div>
              <h2 className="text-3xl leading-tight font-light text-white md:text-[2.4rem]">
                Visit Our Employment Law Office in Los Angeles, CA
              </h2>
              <dl className="mt-10 space-y-7 text-sm text-white/75">
                <div>
                  <dt className="mb-2 text-xs font-semibold tracking-[0.18em] text-white uppercase">Address</dt>
                  <dd>
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </dd>
                </div>
                <div>
                  <dt className="mb-2 text-xs font-semibold tracking-[0.18em] text-white uppercase">Phone</dt>
                  <dd>
                    <a href={site.phoneHref} className="text-beacon transition hover:text-beacon-light">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center rounded-[3px] bg-beacon px-8 py-4 font-serif text-[0.8rem] font-medium tracking-[0.16em] text-ink uppercase transition-colors duration-300 hover:bg-beacon-light"
              >
                Get Directions
              </a>
            </div>
            <iframe
              title={`${site.name} location`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="aspect-[4/3] w-full rounded-sm grayscale-[0.5]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
      </div>
    </section>
  );
}
