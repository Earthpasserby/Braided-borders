import { capabilities, startupServices } from "../data/siteContent";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-ink px-6 py-20 text-white md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,201,166,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(7,87,200,0.18),transparent_26%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-end">
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
            What we help with
          </p>
          <div className="animate-rise">
            <h2 className="text-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Strategic work
              <br />
              <em>that moves.</em>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              We support investors, operators, and founders with the kind of
              regional intelligence and market access that most decks do not
              capture.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {capabilities.map((capability, index) => (
              <article
                key={capability}
                className="group flex items-center justify-between gap-6 rounded-[26px] border border-white/10 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-sand/40 hover:bg-white/[0.05] md:px-7 md:py-6"
              >
                <div className="flex items-center gap-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mono text-[9px] uppercase tracking-[0.14em] text-brand-sand">
                    0{index + 1}
                  </span>
                  <p className="text-xl leading-7 text-white/90 md:text-2xl">
                    {capability}
                  </p>
                </div>
                <span className="text-2xl text-white/50 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </article>
            ))}
          </div>

          <div className="h-fit self-start rounded-[30px] border border-white/10 bg-[#071d28] p-5 md:p-6">
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
              For founders and teams
            </p>

            <div className="mt-6 space-y-3">
              {startupServices.map((service, index) => (
                <div
                  key={service}
                  className="flex items-start gap-4 rounded-[20px] border border-white/10 bg-white/[0.02] p-3"
                >
                  <span className="mt-1 text-mono text-[9px] uppercase tracking-[0.14em] text-brand-sand">
                    0{index + 1}
                  </span>
                  <p className="text-lg leading-7 text-white/86">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
