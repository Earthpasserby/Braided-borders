import { founders } from "../data/siteContent";

export default function LeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-4 py-16 text-white md:px-12 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,173,120,0.12),transparent_28%),linear-gradient(120deg,rgba(47,104,114,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-16">
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-sand">
              The people behind the work
            </p>
            <h2 className="text-display mt-5 text-4xl leading-[0.96] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Regional depth.
              <br />
              <em>Global fluency.</em>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 md:text-xl">
            Seasoned builders behind the Middle East Insurtech Summit and Africa
            Insurtech Rising, with networks spanning GCC sovereign, global
            insurance, and Sub-Saharan markets.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-4 shadow-[0_25px_60px_rgba(3,26,37,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-sand/40 hover:bg-white/[0.07] md:rounded-[32px] md:p-5"
            >
              <div className="relative mb-5 h-56 overflow-hidden rounded-[24px] bg-[#102f39] sm:h-64 md:mb-6 md:rounded-[28px]">
                <img
                  src={founder.image}
                  alt={founder.alt}
                  className="h-full w-full object-cover opacity-85 grayscale transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-brand-ink/45 text-mono text-[9px] text-brand-sand backdrop-blur-sm">
                  0{index + 1}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="text-mono text-[9px] uppercase tracking-[0.16em] text-brand-sand">
                  {founder.region}
                </p>
                <span className="rounded-full border border-white/15 px-3 py-1 text-mono text-[8px] uppercase tracking-[0.14em] text-white/55">
                  Leadership
                </span>
              </div>

              <h3 className="text-display mt-4 text-3xl leading-none text-white">
                {founder.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {founder.description}
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-white/55">
                {founder.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
