import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { profile, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel index="02" title="About" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-12 md:gap-20">
          <Reveal className="md:col-span-7" delay={0.05}>
            <p className="drop-cap font-display text-2xl leading-[1.4] text-ink md:text-[28px]">
              {profile.summary}
            </p>
          </Reveal>

          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <figure className="border-l-2 border-accent pl-6">
                <blockquote className="font-display text-3xl italic leading-snug text-ink md:text-4xl">
                  &ldquo;{profile.pullQuote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  — A working principle.
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.25}>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rule pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                      {s.label}
                    </dt>
                    <dd className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
