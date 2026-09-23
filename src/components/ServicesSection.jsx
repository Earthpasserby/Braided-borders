import { capabilities, startupServices } from "../data/siteContent";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-ink px-6 py-20 text-white md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,201,166,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(7,87,200,0.18),transparent_26%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
            What we help with
          </p>
          <div className="animate-rise">
            <h2 className="text-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Useful work
              <br />
              <em>at every stage.</em>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              We work alongside investment teams, portfolio companies, and
              founders when regional knowledge and follow-through matter most.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <article
              key={capability}
              className="group min-h-[220px] rounded-[28px] border border-white/10 bg-[#0a1f2b] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-sand/50 hover:bg-[#102835] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-mono text-[10px] text-brand-sand">
                  0{index + 1}
                </span>
                <span className="text-xl text-white/50 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="mt-10 text-lg leading-7 text-white/90">{capability}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[30px] border border-white/10 bg-[#081f27] p-6 md:p-8">
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
            For founders and teams
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {startupServices.map((service, index) => (
              <div
                key={service}
                className="rounded-[22px] border border-white/10 bg-white/[0.02] p-5"
              >
                <span className="text-mono text-xs text-white/50">
                  0{index + 1}
                </span>
                <p className="mt-10 text-lg leading-7 text-white/90">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
