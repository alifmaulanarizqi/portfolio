import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel index="05" title="Toolkit" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
            The mobile stack I reach for{" "}
            <span className="italic text-ink-soft">first</span>
            <span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Two languages, two frameworks, and a tight set of architecture and
            networking tools that keep apps clean, fast, and reliable.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10 md:mt-20">
          {skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={0.04 * i}>
              <div className="grid grid-cols-12 items-baseline gap-6 border-t border-rule pt-6">
                <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl italic text-ink md:text-3xl">
                    {group.group}
                  </h3>
                </div>
                <ul className="col-span-12 flex flex-wrap gap-2 md:col-span-9">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group/chip relative cursor-default rounded-full border border-ink/15 bg-bone-soft/40 px-4 py-2 text-[13px] text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-bone hover:shadow-md"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
