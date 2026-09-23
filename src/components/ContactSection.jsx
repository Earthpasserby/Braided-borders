import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="luxury-block rounded-[40px] p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                Start with a conversation
              </p>
              <h2 className="text-display mt-5 max-w-3xl text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl">
                A clearer view of the market
                <br />
                <em>starts here.</em>
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-brand-ink/70">
                Tell us what you are assessing, building, or trying to solve. We
                will bring the relevant regional context and be clear about
                where we can help.
              </p>
            </div>

            <div className="rounded-[28px] border border-brand-ink/10 bg-[#0b1d28] p-6 text-white">
              <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-brand-sand">
                Reach out
              </p>
              <a
                href="mailto:hello@braidedborders.com"
                className="mt-6 inline-flex items-center gap-3 text-mono text-xs uppercase tracking-[0.16em] text-white transition-colors hover:text-brand-sand"
              >
                Start a conversation <ArrowRight size={17} />
              </a>
              <p className="mt-8 text-sm leading-7 text-white/70">
                hello@braidedborders.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
