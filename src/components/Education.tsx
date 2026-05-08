import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel index="06" title="Education" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
            Where I learnt to{" "}
            <span className="italic text-ink-soft">build</span>.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0 md:mt-24">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={0.05 * i}>
              <article className="grid grid-cols-12 gap-6 border-t border-rule py-10 md:py-14">
                <div className="col-span-12 md:col-span-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                    {edu.period}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-3xl leading-tight text-ink md:text-5xl">
                    {edu.school}
                  </h3>
                  <p className="mt-3 font-display text-xl italic text-ink-soft md:text-2xl">
                    {edu.degree}
                  </p>
                  <ul className="mt-6 space-y-3 text-ink-soft">
                    {edu.notes.map((n, j) => (
                      <li
                        key={j}
                        className="flex gap-3 leading-relaxed text-[17px] md:text-lg"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.65em] block h-1 w-3 shrink-0 bg-accent"
                        />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
