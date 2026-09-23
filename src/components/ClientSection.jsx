import {
  clientTypes,
  networkRelationships,
  sectors,
} from "../data/siteContent";

export default function ClientSection() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="luxury-block rounded-[40px] p-6 md:p-10">
          <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div className="flex flex-col justify-between">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                Who we serve
              </p>
              <h2 className="text-display mt-5 text-5xl leading-[0.9] tracking-[-0.04em] md:text-6xl">
                Capital with
                <br />
                <em>ambition.</em>
              </h2>

              <div className="mt-8 rounded-[26px] border border-brand-ink/10 bg-[#f5f1eb] p-5">
                <p className="text-mono text-[9px] uppercase tracking-[0.18em] text-brand-ink/60">
                  Focused on the sectors where execution matters most
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-brand-ink/10 bg-white px-3 py-2 text-mono text-[9px] uppercase tracking-[0.12em] text-brand-ink/75"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="muted-panel rounded-[28px] overflow-hidden">
              {clientTypes.map((client, index) => (
                <div
                  key={client}
                  className="luxury-list-item flex gap-5 px-5 py-5 first:pt-6 last:pb-6 md:px-7"
                >
                  <span className="text-mono text-[10px] uppercase tracking-[0.14em] text-brand-blue">
                    0{index + 1}
                  </span>
                  <p className="max-w-xl text-lg leading-8 text-brand-ink/80 md:text-xl">
                    {client}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-brand-ink/10 bg-brand-ink p-6 text-white md:p-7">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-sand">
                Anchor network relationships
              </p>
              <ul className="mt-7 space-y-4">
                {networkRelationships.map((relationship) => (
                  <li
                    key={relationship}
                    className="border-b border-white/10 pb-3 text-base text-white/78 last:border-b-0 last:pb-0"
                  >
                    {relationship}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
