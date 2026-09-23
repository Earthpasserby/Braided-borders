import {
  clientTypes,
  networkRelationships,
  sectors,
} from "../data/siteContent";

export default function ClientSection() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="section-shell rounded-[32px] p-6 md:p-10">
          <div className="grid gap-14 md:grid-cols-[0.65fr_1.35fr] md:gap-20">
            <div>
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                Who we serve
              </p>
              <h2 className="text-display mt-5 text-5xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Capital with
                <br />
                <em>ambition.</em>
              </h2>
            </div>

            <div className="grid gap-0 border-t border-brand-ink/15">
              {clientTypes.map((client, index) => (
                <div
                  key={client}
                  className="flex gap-6 border-b border-brand-ink/15 py-6"
                >
                  <span className="text-mono text-xs text-brand-blue">
                    0{index + 1}
                  </span>
                  <p className="max-w-xl text-xl leading-8 text-brand-ink/80">{client}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-[24px] border border-brand-ink/10 bg-[#f7f3ee] p-6">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                Core sector focus
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-2xl border border-brand-ink/10 bg-white px-4 py-4 text-display text-2xl text-brand-ink"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-brand-ink/10 bg-brand-ink p-6 text-white">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-sand">
                Anchor network relationships
              </p>
              <ul className="mt-7 space-y-4">
                {networkRelationships.map((relationship) => (
                  <li
                    key={relationship}
                    className="border-b border-white/10 pb-3 text-base text-white/80 last:border-b-0 last:pb-0"
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
