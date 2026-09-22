export default function ChallengeSection() {
  return (
    <section
      id="challenge"
      className="relative overflow-hidden border-b border-brand-ink/15 bg-[radial-gradient(circle_at_top_left,rgba(231,201,166,0.18),transparent_30%)] px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-[0.65fr_1.35fr] md:gap-28">
        <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
          The investor challenge
        </p>

        <div className="animate-rise">
          <h2 className="text-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Distance changes
            <br />
            <em>the details.</em>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-ink/70">
            A strong deck rarely answers the practical questions that come up
            on the ground. Who actually buys? Which approvals matter? Which
            partner can open the next door? We help investment teams answer
            those questions before they become expensive surprises.
          </p>

          <div className="mt-10 grid gap-5 border-t border-brand-ink/15 pt-5 text-mono text-[10px] uppercase tracking-[0.14em] sm:grid-cols-3">
            <span className="rounded-full border border-brand-ink/10 bg-white px-3 py-3 text-center shadow-sm">
              Incomplete market context
            </span>
            <span className="rounded-full border border-brand-ink/10 bg-white px-3 py-3 text-center shadow-sm">
              Regulatory friction
            </span>
            <span className="rounded-full border border-brand-ink/10 bg-white px-3 py-3 text-center shadow-sm">
              Hard-to-find local partners
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
