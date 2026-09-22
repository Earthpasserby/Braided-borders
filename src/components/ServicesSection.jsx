import { capabilities, startupServices } from "../data/siteContent";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-ink px-6 py-20 text-white md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,201,166,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(7,87,200,0.18),transparent_26%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
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

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {capabilities.map((capability, index) => (
            <div
              key={capability}
              className="african-card min-h-32 rounded-2xl border border-white/15 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-sand/60 hover:bg-white/5 sm:p-6"
            >
              <span className="text-mono text-[10px] text-brand-sand">
                0{index + 1}
              </span>
              <p className="mt-7 text-lg">{capability}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/20 pt-8">
          <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
            For founders and teams
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-3 md:gap-4">
            {startupServices.map((service, index) => (
              <div
                key={service}
                className="african-card animate-soft-enter rounded-2xl border border-white/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-sand/60"
              >
                <span className="text-mono text-xs text-white/50">
                  0{index + 1}
                </span>
                <p className="mt-10 text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
