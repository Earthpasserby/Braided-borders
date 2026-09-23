import { ArrowRight } from "lucide-react";

import { heroImageUrl, linkedInUrl } from "../data/siteContent";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="premium-hero relative overflow-hidden bg-[#081d27] px-6 pb-16 pt-32 text-white md:px-12 md:pb-20 md:pt-36"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage: `linear-gradient(125deg, rgba(8,29,39,0.7), rgba(8,29,39,0.4)), url('${heroImageUrl}')`,
        }}
      />
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-orbit absolute left-1/2 top-1/2 hidden h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:block" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(231,201,166,0.18),transparent_55%)] md:block" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm">
            Local context for global capital
          </span>
          <span className="rounded-full border border-brand-sand/30 bg-brand-sand/10 px-3 py-2 text-brand-sand">
            Africa & Middle East
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="max-w-[820px] animate-rise">
            <p className="mb-6 text-mono text-[10px] uppercase tracking-[0.22em] text-brand-sand">
              Market access, grounded in reality
            </p>
            <h1 className="text-display text-[clamp(4rem,7vw,8.5rem)] leading-[0.78] tracking-[-0.06em] text-white">
              De-risking Capital
              <span className="mt-2 block text-brand-sand">Across Africa and Middle East</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-7 text-white/75 md:text-xl">
              Braided Borders helps investors and founders understand the market,
              identify the right partners, and turn regional complexity into a
              practical path to growth.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#challenge"
                className="inline-flex items-center gap-4 rounded-full bg-brand-blue px-5 py-3 text-mono text-[10px] uppercase tracking-[0.16em] shadow-[0_18px_35px_rgba(7,87,200,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-ink"
              >
                See how we work <ArrowRight size={16} />
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/5 px-5 py-3 text-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm transition-all duration-200 hover:border-brand-sand hover:bg-brand-sand hover:text-brand-ink"
              >
                Connect with us <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="hero-card animate-rise relative w-full max-w-[440px] rounded-[32px] border border-white/15 bg-white/8 p-5 backdrop-blur-2xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-mono text-[10px] uppercase tracking-[0.18em] text-brand-sand">
                  Regional lens
                </span>
                <span className="text-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                  2026
                </span>
              </div>

              <div className="mb-6 flex items-center justify-center">
                <div className="relative flex h-38 w-38 items-center justify-center rounded-full border border-brand-sand/60 bg-[radial-gradient(circle_at_center,rgba(231,201,166,0.2),rgba(8,29,39,0.2)_55%,transparent_100%)]">
                  <div className="absolute inset-3 rounded-full border border-white/15" />
                  <div className="text-center">
                    <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                      coverage
                    </p>
                    <p className="mt-3 text-display text-4xl text-white">11</p>
                    <p className="mt-1 text-mono text-[8px] uppercase tracking-[0.18em] text-brand-sand">
                      markets
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-mono text-[10px] uppercase tracking-[0.16em] text-white/75">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <p className="text-white/60">Markets</p>
                  <p className="mt-3 text-lg normal-case tracking-[0.02em] text-white">
                    Sub-Saharan Africa & Middle East
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <p className="text-white/60">Execution</p>
                  <p className="mt-3 text-lg normal-case tracking-[0.02em] text-white">
                    Research to execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
          {[
            ["01", "Signal over noise"],
            ["02", "Local access, global lens"],
            ["03", "Execution without guesswork"],
          ].map(([index, label]) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
              <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-brand-sand">{index}</p>
              <p className="mt-3 text-base text-white/80">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
