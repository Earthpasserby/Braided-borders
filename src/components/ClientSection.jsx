import { clientTypes, sectors } from "../data/siteContent";

export default function ClientSection() {
  return (
    <section id="clients" className="px-4 py-16 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[32px] bg-brand-ink p-5 text-white shadow-[0_30px_70px_rgba(6,31,40,0.16)] sm:p-7 md:rounded-[40px] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,173,120,0.14),transparent_28%),linear-gradient(120deg,rgba(47,104,114,0.16),transparent_48%)]" />

          <div className="relative">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-7">
              <div>
                <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-sand">
                  Who we serve
                </p>
                <h2 className="text-display mt-5 text-4xl leading-[0.96] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                  The ecosystem
                  <br />
                  <em>behind the opportunity.</em>
                </h2>
              </div>
              <div className="max-w-sm text-right">
                <p className="text-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                  Braided Borders / 02
                </p>
                <p className="mt-3 text-base leading-7 text-white/65">
                  Built for the people moving capital, risk, and innovation
                  across complex markets.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-12">
              <div>
                <p className="text-mono text-[9px] uppercase tracking-[0.18em] text-brand-sand">
                  Sector intelligence
                </p>
                <p className="mt-4 max-w-sm text-lg leading-8 text-white/70">
                  We focus where regulatory context, distribution, and trusted
                  relationships shape the outcome.
                </p>
                <div className="mt-7 grid grid-cols-2 gap-2">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3 text-mono text-[9px] uppercase tracking-[0.12em] text-white/75"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04]">
                {clientTypes.map((client, index) => (
                  <div
                    key={client}
                    className="flex gap-5 border-b border-white/10 px-5 py-5 last:border-b-0 md:px-7"
                  >
                    <span className="text-mono text-[10px] uppercase tracking-[0.14em] text-brand-sand">
                      0{index + 1}
                    </span>
                    <p className="max-w-xl text-lg leading-8 text-white/85 md:text-xl">
                      {client}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
