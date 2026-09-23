export default function ChallengeSection() {
  return (
    <section
      id="challenge"
      className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="luxury-block rounded-[40px] p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
            <div className="animate-rise">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue">
                The investment reality
              </p>

              <h2 className="mt-6 text-display text-5xl leading-[0.9] tracking-[-0.05em] md:text-[5rem]">
                Strategy is easy.
                <br />
                <em>Execution is local.</em>
              </h2>

              <div className="mt-8 rounded-[28px] border border-brand-ink/10 bg-[#f4efe9] p-6 md:p-8">
                <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-brand-ink/60">
                  Where the risk actually sits
                </p>
                <p className="mt-5 text-xl leading-8 text-brand-ink/75 md:text-2xl">
                  Good deal logic is not enough in markets where channel access,
                  licensing nuance, and local trust determine whether a plan can
                  move at all.
                </p>
              </div>
            </div>

            <div className="animate-rise">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["01", "Incomplete market context"],
                  ["02", "Slow approvals and friction"],
                  ["03", "Misaligned local partners"],
                  ["04", "Execution blind spots"],
                ].map(([index, item]) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-brand-ink/10 bg-white/80 p-5 shadow-[0_18px_40px_rgba(6,31,40,0.04)]"
                  >
                    <p className="text-mono text-[9px] uppercase tracking-[0.16em] text-brand-blue">
                      {index}
                    </p>
                    <p className="mt-5 text-lg leading-7 text-brand-ink/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-xl text-lg leading-8 text-brand-ink/70">
                We help investors and founders cut through the noise, map the
                real operating environment, and turn complexity into a practical
                path to growth before it becomes a costly surprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
