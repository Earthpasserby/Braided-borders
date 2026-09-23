export default function ChallengeSection() {
  return (
    <section
      id="challenge"
      className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="section-shell rounded-[32px] p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.6fr_1.4fr] md:gap-16">
            <div className="flex flex-col justify-between">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                The investor challenge
              </p>
              <div className="mt-8 rounded-[24px] border border-brand-ink/10 bg-[#f5efe8] p-6">
                <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-brand-ink/60">
                  Where the gap shows up
                </p>
                <p className="mt-6 text-display text-4xl leading-[1] text-brand-ink">
                  Great strategy.
                  <br />
                  <em>Weak local signal.</em>
                </p>
              </div>
            </div>

            <div className="animate-rise">
              <h2 className="text-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Distance changes
                <br />
                <em>the details.</em>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-ink/70">
                A strong deck rarely answers the practical questions that come up
                on the ground. Who truly buys? Which approvals matter? Which
                partner can open the next door? We help investment teams answer
                those questions before they become expensive surprises.
              </p>

              <div className="mt-10 grid gap-4 text-mono text-[10px] uppercase tracking-[0.14em] sm:grid-cols-3">
                <span className="signal-card rounded-2xl border border-brand-ink/10 bg-white px-3 py-4 text-center shadow-sm">
                  Incomplete market context
                </span>
                <span className="signal-card rounded-2xl border border-brand-ink/10 bg-white px-3 py-4 text-center shadow-sm">
                  Regulatory friction
                </span>
                <span className="signal-card rounded-2xl border border-brand-ink/10 bg-white px-3 py-4 text-center shadow-sm">
                  Hard-to-find local partners
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
