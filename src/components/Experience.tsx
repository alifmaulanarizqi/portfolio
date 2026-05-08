import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel index="03" title="Experience" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
            A short ledger of{" "}
            <span className="italic text-accent">work</span>.
          </h2>
        </Reveal>

        <ol className="mt-16 md:mt-24">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${i}`} delay={0.04 * i}>
              <li className="grid grid-cols-12 gap-6 border-t border-rule py-10 md:py-14">
                {/* year column */}
                <div className="col-span-12 md:col-span-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                    {exp.start}
                    {exp.end && exp.end !== exp.start ? ` — ${exp.end}` : ""}
                  </span>
                </div>

                {/* main column */}
                <div className="col-span-12 md:col-span-7">
                  <h3 className="font-display text-3xl leading-tight text-ink md:text-5xl">
                    {exp.company}
                  </h3>
                  <p className="mt-3 font-display text-xl italic text-ink-soft md:text-2xl">
                    {exp.role}{" "}
                    <span className="not-italic text-ink-mute">
                      / {exp.type}
                    </span>
                  </p>
                  <ul className="mt-6 space-y-3 text-ink-soft">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3 leading-relaxed text-[17px] md:text-lg"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.65em] block h-1 w-3 shrink-0 bg-accent"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* meta column */}
                <div className="col-span-12 flex items-start justify-end md:col-span-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink">
                    {exp.period}
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
