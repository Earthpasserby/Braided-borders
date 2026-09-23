import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[32px] bg-brand-ink p-5 text-white shadow-[0_30px_70px_rgba(6,31,40,0.16)] sm:p-7 md:rounded-[40px] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(199,173,120,0.13),transparent_30%),linear-gradient(120deg,rgba(47,104,114,0.16),transparent_52%)]" />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-7">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-sand">
                Start with a conversation
              </p>
              <span className="text-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                Braided Borders / 03
              </span>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-16">
              <div>
                <h2 className="text-display max-w-3xl text-4xl leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-7xl">
                  A clearer view of the market
                  <br />
                  <em>starts here.</em>
                </h2>
                <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                  Tell us what you are assessing, building, or trying to solve.
                  We will bring the relevant regional context and be clear about
                  where we can help.
                </p>
              </div>

              <div className="rounded-[26px] border border-brand-sand/30 bg-white/[0.05] p-5 backdrop-blur-sm sm:p-6">
                <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-brand-sand">
                  Reach out
                </p>
                <a
                  href="mailto:hello@braidedborders.com"
                  className="mt-6 inline-flex items-center gap-3 text-mono text-xs uppercase tracking-[0.16em] text-white transition-colors hover:text-brand-sand"
                >
                  Start a conversation <ArrowRight size={17} />
                </a>
                <p className="mt-8 border-t border-white/10 pt-4 text-sm leading-7 text-white/65">
                  hello@braidedborders.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
