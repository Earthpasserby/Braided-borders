import { founders } from "../data/siteContent";

export default function LeadershipSection() {
  return (
    <section className="grid overflow-hidden md:grid-cols-[0.8fr_1.2fr]">
      <div className="relative flex min-h-[500px] flex-col justify-between overflow-hidden bg-brand-ink px-6 py-12 text-white md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,201,166,0.22),transparent_28%)]" />
        <div className="relative">
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-sand">
            Leadership synergy
          </p>
          <h2 className="text-display mt-5 text-5xl leading-[0.9] md:text-6xl">
            Regional depth.
            <br />
            <em>Global fluency.</em>
          </h2>
        </div>

        <div className="relative max-w-md rounded-[28px] border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
          <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-brand-sand">
            Why it matters
          </p>
          <p className="mt-4 text-lg leading-8 text-white/72">
            Seasoned builders behind the Middle East Insurtech Summit and Africa
            Insurtech Rising, with networks spanning GCC sovereign, global
            insurance, and Sub-Saharan markets.
          </p>
        </div>
      </div>

      <div className="flex min-h-[500px] flex-col justify-center bg-[#edf0f1] px-6 py-12 md:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="group rounded-[28px] border border-brand-ink/10 bg-white p-4 shadow-[0_20px_35px_rgba(6,31,40,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(6,31,40,0.12)]"
            >
              <div className="relative mb-5 h-56 overflow-hidden rounded-[22px] bg-brand-ink">
                <img
                  src={founder.image}
                  alt={founder.alt}
                  className="h-full w-full object-cover opacity-80 grayscale transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#061f28] to-transparent" />
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="text-mono text-[9px] uppercase tracking-[0.16em] text-brand-blue">
                  {founder.region}
                </p>
                <span className="rounded-full border border-brand-ink/10 bg-[#f6f2ee] px-2 py-1 text-mono text-[8px] uppercase tracking-[0.14em] text-brand-ink/60">
                  profile
                </span>
              </div>

              <h3 className="text-display mt-4 text-3xl leading-none text-brand-ink">
                {founder.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-brand-ink/68">
                {founder.description}
              </p>
              <p className="mt-4 border-t border-brand-ink/10 pt-3 text-xs leading-5 text-brand-ink/60">
                {founder.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
