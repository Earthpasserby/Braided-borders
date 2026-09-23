export default function ChallengeSection() {
  return (
    <section
      id="challenge"
      className="relative overflow-hidden bg-[#e9efee] px-4 py-16 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[32px] bg-[#102f39] p-5 text-white shadow-[0_30px_70px_rgba(6,31,40,0.16)] sm:p-7 md:rounded-[40px] md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,173,120,0.16),transparent_28%),linear-gradient(135deg,rgba(47,104,114,0.18),transparent_52%)]" />

          <div className="relative">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
            <div className="animate-rise">
              <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-brand-sand">
                The investment reality
              </p>

              <h2 className="text-display mt-6 text-4xl leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-[5rem]">
                Strategy is easy.
                <br />
                <em className="text-brand-sand">Execution is local.</em>
              </h2>

              <div className="mt-8 rounded-[26px] border border-white/10 bg-[#0b202b]/80 p-5 md:p-7">
                <p className="text-mono text-[10px] uppercase tracking-[0.18em] text-brand-sand">
                  Where the risk actually sits
                </p>
                <p className="mt-5 text-lg leading-8 text-white/75 md:text-2xl">
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
                    className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_18px_40px_rgba(6,31,40,0.12)] transition-colors hover:border-brand-sand/40 hover:bg-white/[0.08]"
                  >
                    <p className="text-mono text-[9px] uppercase tracking-[0.16em] text-brand-sand">
                      {index}
                    </p>
                    <p className="mt-5 text-lg leading-7 text-white/85">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
                We help investors and founders cut through the noise, map the
                real operating environment, and turn complexity into a practical
                path to growth before it becomes a costly surprise.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
