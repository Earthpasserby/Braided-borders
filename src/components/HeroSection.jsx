import { ArrowRight } from "lucide-react";

import { heroImageUrl, linkedInUrl } from "../data/siteContent";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="premium-hero relative overflow-hidden bg-[#0b202b] px-4 pb-10 pt-24 text-white md:px-12 md:pb-14 md:pt-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: `linear-gradient(125deg, rgba(7,22,31,0.14), rgba(7,22,31,0.24)), url('${heroImageUrl}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />
      <div className="hero-mesh absolute inset-0 opacity-40" />
      <div className="hero-orbit absolute left-1/2 top-1/2 hidden h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7c29a]/20 md:block" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(215,194,154,0.1),transparent_55%)] md:block" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-mono text-[9px] uppercase tracking-[0.16em] text-white/70 sm:gap-3 sm:text-[10px] sm:tracking-[0.2em]">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm">
            Local context for global capital
          </span>
          <span className="rounded-full border border-[#d7c29a]/40 bg-[#d7c29a]/10 px-3 py-2 text-[#d7c29a]">
            Africa & Middle East
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="max-w-[820px] animate-rise">
            <p className="mb-6 text-mono text-[10px] uppercase tracking-[0.22em] text-[#d7c29a]">
              Local context for global capital
            </p>
            <h1 className="hero-title text-[clamp(2.5rem,10vw,7rem)] leading-[0.9] tracking-[-0.05em] text-white md:leading-[0.82] md:tracking-[-0.06em]">
              De-risking Capital
              <span className="hero-italic mt-2 block text-[#d7c29a]">
                Across Africa and Middle East
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg md:mt-8 md:text-xl">
              Braided Borders helps investors and founders understand the
              market, identify the right partners, and turn regional complexity
              into a practical path to growth.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-4">
              <a
                href="#challenge"
                className="inline-flex items-center justify-center gap-4 rounded-full bg-[#d7c29a] px-5 py-3 text-mono text-[10px] uppercase tracking-[0.16em] text-[#0B132B] shadow-[0_18px_35px_rgba(215,194,154,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#0B132B]"
              >
                See how we work <ArrowRight size={16} />
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d7c29a]/60 bg-white/5 px-5 py-3 text-mono text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-200 hover:border-[#d7c29a] hover:bg-[#d7c29a] hover:text-[#0B132B]"
              >
                Connect with us <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="hero-card animate-rise relative w-full max-w-[440px] rounded-[26px] border border-white/15 bg-white/8 p-4 backdrop-blur-2xl sm:p-5 md:rounded-[32px]">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-mono text-[10px] uppercase tracking-[0.18em] text-[#d7c29a]">
                  Regional lens
                </span>
                <span className="text-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                  2026
                </span>
              </div>

              <div className="mb-6 flex items-center justify-center">
                <div className="relative flex h-38 w-38 items-center justify-center rounded-full border border-brand-blue/60 bg-[radial-gradient(circle_at_center,rgba(29,91,124,0.2),rgba(11,32,43,0.2)_55%,transparent_100%)]">
                  <div className="absolute inset-3 rounded-full border border-white/15" />
                  <div className="text-center">
                    <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                      coverage
                    </p>
                    <p className="hero-title-number mt-3 text-4xl text-white">
                      11
                    </p>
                    <p className="mt-1 text-mono text-[8px] uppercase tracking-[0.18em] text-[#d7c29a]">
                      markets
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-mono text-[10px] uppercase tracking-[0.16em] text-white/75">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <p className="text-white/60">Markets</p>
                  <p className="mt-3 text-base normal-case tracking-[0.02em] text-white sm:text-lg">
                    Sub-Saharan Africa & Middle East
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <p className="text-white/60">Execution</p>
                  <p className="mt-3 text-base normal-case tracking-[0.02em] text-white sm:text-lg">
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
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
            >
              <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-[#d7c29a]">
                {index}
              </p>
              <p className="mt-3 text-base text-white/80">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
