import { ArrowRight } from "lucide-react";

import { phases } from "../data/siteContent";

export default function ModelSection() {
  return (
    <section
      id="model"
      className="relative overflow-hidden bg-[#e8eff0] px-4 py-16 text-brand-ink md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,173,120,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.55),transparent_52%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col justify-between gap-7 border-b border-brand-ink/10 pb-10 md:flex-row md:items-end">
          <div className="animate-rise">
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
              How we work
            </p>
            <h2 className="text-display mt-5 text-4xl leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-7xl">
              Close to the work,
              <br />
              <em>clear about the detail.</em>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-brand-ink/65">
            The work changes from one mandate to the next, but our approach is
            consistent: understand the local context, make the right
            introductions, and stay involved long enough to be useful.
          </p>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-3 lg:gap-6">
          <div className="absolute left-[16%] right-[16%] top-9 hidden border-t border-brand-ink/15 lg:block" />
          {phases.map((phase, index) => (
            <article
              key={phase.number}
              className="group relative rounded-[28px] border border-brand-ink/10 bg-white/75 p-5 shadow-[0_22px_50px_rgba(6,31,40,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-white md:p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-mono text-[10px] uppercase tracking-[0.14em] text-brand-blue">
                  PHASE {phase.number}
                </span>
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brand-sand bg-brand-ink text-sm text-brand-sand shadow-[0_0_0_6px_#e8eff0]">
                  {phase.number}
                </span>
              </div>
              <p className="text-mono text-[9px] uppercase tracking-[0.16em] text-brand-ink/40">
                0{index + 1} / 03
              </p>
              <h3 className="text-display mt-4 text-3xl text-brand-ink">
                {phase.title}
              </h3>
              <p className="mt-5 min-h-20 leading-7 text-brand-ink/65">
                {phase.text}
              </p>

              <ul className="mt-7 space-y-3 border-t border-brand-ink/10 pt-5 text-mono text-[10px] uppercase tracking-[0.12em]">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-brand-ink/70"
                  >
                    <ArrowRight
                      size={13}
                      className="mt-0.5 shrink-0 text-brand-blue transition-transform group-hover:translate-x-1"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
