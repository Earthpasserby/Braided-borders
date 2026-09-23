import { ChevronDown } from "lucide-react";

import { phases } from "../data/siteContent";

export default function ModelSection() {
  return (
    <section
      id="model"
      className="relative overflow-hidden bg-brand-blue px-6 py-20 text-white md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,201,166,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(6,31,40,0.2),transparent_26%)]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="animate-rise">
            <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
              How we work
            </p>
            <h2 className="text-display mt-5 text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl">
              Close to the work,
              <br />
              <em>clear about the detail.</em>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-white/75">
            The work changes from one mandate to the next, but our approach is
            consistent: understand the local context, make the right
            introductions, and stay involved long enough to be useful.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="relative rounded-[30px] border border-white/20 bg-white/5 p-6 shadow-[0_25px_60px_rgba(6,31,40,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-sand/70"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-mono text-xs text-white/70">
                  PHASE {phase.number}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-base text-brand-sand">
                  {phase.number}
                </span>
              </div>
              <h3 className="text-display mt-4 text-3xl">{phase.title}</h3>
              <p className="mt-5 min-h-20 leading-7 text-white/75">
                {phase.text}
              </p>

              <ul className="mt-7 space-y-3 border-t border-white/20 pt-5 text-mono text-[10px] uppercase tracking-[0.12em]">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/80">
                    <ChevronDown size={13} className="mt-1 shrink-0 text-brand-sand" />
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
