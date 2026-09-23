export default function ChallengeSection() {
  return (
    <section
      id="challenge"
      className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="luxury-block rounded-[40px] p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div className="flex flex-col justify-between">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                The investor challenge
              </p>

              <div className="mt-8 rounded-[28px] border border-brand-ink/10 bg-[#f3eee8] p-6 md:p-8">
                <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-brand-ink/60">
                  Where the gap shows up
                </p>
                <p className="mt-6 text-display text-4xl leading-[1] text-brand-ink md:text-[3rem]">
                  Great strategy.
                  <br />
                  <em>Weak local signal.</em>
                </p>
              </div>
            </div>

            <div className="animate-rise pt-2">
              <h2 className="text-display text-5xl leading-[0.9] tracking-[-0.04em] md:text-[5.2rem]">
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

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  "Incomplete market context",
                  "Regulatory friction",
                  "Hard-to-find local partners",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-brand-ink/10 bg-white px-3 py-4 text-center text-mono text-[10px] uppercase tracking-[0.14em] text-brand-ink/75 shadow-[0_15px_35px_rgba(6,31,40,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
