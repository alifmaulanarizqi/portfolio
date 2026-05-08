"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import PhoneFrame from "./mocks/PhoneFrame";
import { MOCKS } from "./mocks";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/cn";

const backdrops = [
  "bg-[radial-gradient(circle_at_20%_15%,rgba(232,74,44,0.18),transparent_55%),linear-gradient(135deg,#f0e9dc,#e7dfd0)]",
  "bg-[radial-gradient(circle_at_80%_30%,rgba(232,74,44,0.22),transparent_55%),linear-gradient(135deg,#16140f,#2a2620)]",
  "bg-[repeating-linear-gradient(45deg,rgba(22,20,15,0.06)_0_2px,transparent_2px_14px),linear-gradient(135deg,#f5e8c7,#e7dfd0)]",
  "bg-[radial-gradient(circle_at_70%_70%,rgba(232,74,44,0.4),transparent_55%),linear-gradient(135deg,#16140f,#3d362f)]",
  "bg-[radial-gradient(circle_at_30%_85%,rgba(232,74,44,0.18),transparent_55%),linear-gradient(135deg,#f0e9dc,#e7dfd0)]",
];

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel index="04" title="Selected Work" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
            Five apps,{" "}
            <span className="italic text-ink-soft">
              two&nbsp;stacks
            </span>
            <span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Real apps shipped to real users — covering point-of-sale, learning,
            real-time messaging, AI, and scheduling. Hover any phone to peek
            inside.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.number} delay={0.05 * (i % 3)}>
              <ProjectRow
                project={p}
                index={i}
                backdrop={backdrops[i % backdrops.length]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  backdrop,
}: {
  project: Project;
  index: number;
  backdrop: string;
}) {
  const Mock = MOCKS[project.mock];
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      data-cursor="hover"
      className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      {/* Phone showcase block */}
      <div className={cn("lg:col-span-7", isReversed && "lg:order-2")}>
        <div
          className={cn(
            "relative isolate overflow-hidden rounded-[36px] border border-rule px-6 py-12 md:px-12 md:py-16",
            backdrop,
          )}
        >
          {/* Number badge */}
          <span
            className={cn(
              "absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.22em] md:left-8 md:top-8",
              project.theme === "dark" ? "text-bone/60" : "text-ink/60",
            )}
          >
            № {project.number}
          </span>

          {/* Org tag */}
          <span
            className={cn(
              "absolute right-6 top-6 font-mono text-[11px] uppercase tracking-[0.22em] md:right-8 md:top-8",
              project.theme === "dark" ? "text-bone/60" : "text-ink/60",
            )}
          >
            {project.org}
          </span>

          {/* Floating tags around phone */}
          <FloatingTags
            tags={project.tags.slice(0, 3)}
            theme={project.theme}
          />

          {/* The phone(s) */}
          {project.images && project.images.length > 0 ? (
            <ScreenshotShowcase
              images={project.images}
              title={project.title}
              aspect={project.imageAspect}
            />
          ) : (
            <motion.div
              whileHover={{ y: -8, rotate: -1.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative z-10 mx-auto max-w-[260px]"
            >
              <PhoneFrame>
                <Mock />
              </PhoneFrame>
            </motion.div>
          )}

          {/* Bottom title overlay */}
          <div className="relative z-10 mt-8 text-center md:hidden">
            <h3
              className={cn(
                "font-display text-3xl italic leading-tight",
                project.theme === "dark" ? "text-bone" : "text-ink",
              )}
            >
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Info column */}
      <div className={cn("lg:col-span-5", isReversed && "lg:order-1")}>
        <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          <span>{project.year}</span>
          <span>App {project.number} / 05</span>
        </div>

        <h3 className="mt-5 font-display text-4xl leading-tight text-ink md:text-6xl">
          {project.title}
        </h3>

        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft md:text-lg">
          {project.description}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-rule bg-bone-soft/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          <span className="h-px flex-1 bg-rule" />
          <span className="flex items-center gap-1.5 text-ink">
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            Case study soon
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function ScreenshotShowcase({
  images,
  title,
  aspect = "9/19",
}: {
  images: string[];
  title: string;
  aspect?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <div
      className="relative z-10 mx-auto w-[200px] md:w-[240px]"
      style={{ aspectRatio: aspect }}
    >
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 h-full w-full select-none rounded-[28px] object-contain drop-shadow-[0_30px_50px_rgba(22,20,15,0.4)]"
        />
      </AnimatePresence>
    </div>
  );
}

function FloatingTags({
  tags,
  theme,
}: {
  tags: string[];
  theme: "light" | "dark";
}) {
  const positions = [
    "left-3 top-20 md:left-8 md:top-24",
    "right-3 top-32 md:right-10 md:top-40",
    "left-6 bottom-16 md:left-14 md:bottom-24",
  ];
  return (
    <>
      {tags.map((t, i) => (
        <motion.span
          key={t}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className={cn(
            "pointer-events-none absolute z-[5] hidden rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur-sm md:inline-flex",
            positions[i],
            theme === "dark"
              ? "border-bone/30 bg-bone/10 text-bone"
              : "border-ink/20 bg-bone/80 text-ink",
          )}
        >
          {t}
        </motion.span>
      ))}
    </>
  );
}
