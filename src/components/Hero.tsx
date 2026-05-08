"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import MagneticLink from "./MagneticLink";
import { profile } from "@/lib/data";

const lineVariants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.1, duration: 0.7 },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32"
    >
      {/* Decorative spinning asterisk */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-24 hidden font-display text-accent/80 md:right-2 md:top-32 md:block lg:right-6"
      >
        <span className="spin-slow inline-block text-[100px] leading-none lg:text-[140px]">
          *
        </span>
      </div>

      <div className="mx-auto max-w-[1400px]">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute md:mb-14"
        >
          <span className="text-accent">¶</span>
          <span>01</span>
          <span className="h-px w-10 bg-rule" />
          <span className="text-ink">Manifesto</span>
          <span className="ml-auto hidden md:inline">
            Portfolio · MMXXVI · Vol. 02
          </span>
        </motion.div>

        {/* Headline + content */}
        <div className="max-w-5xl">
          <h1 className="font-display font-light leading-[0.92] tracking-[-0.02em] text-ink">
            {[
              { text: "Native", italic: false },
              { text: "& cross-platform", italic: true },
              { text: "mobile dev.", italic: false, accent: true },
            ].map((row, i) => (
              <span
                key={i}
                className="block overflow-hidden py-1 text-[14vw] leading-[0.95] sm:text-[12vw] lg:text-[9rem]"
              >
                <motion.span
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  custom={i}
                  className={"block " + (row.italic ? "italic" : "")}
                >
                  {row.text}
                  {row.accent && (
                    <span className="ml-1 inline-block align-top text-accent">
                      .
                    </span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="show"
            custom={0}
            className="mt-8 max-w-xl font-display text-xl italic leading-snug text-ink-soft md:text-2xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticLink
              href="#work"
              className="rounded-full border border-ink bg-ink px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors hover:bg-accent hover:border-accent"
            >
              View work
              <ArrowDownRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </MagneticLink>
            <MagneticLink
              href="#contact"
              className="rounded-full border border-ink/30 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink/5"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </MagneticLink>
          </motion.div>
        </div>

        {/* Bottom info strip */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-16 grid grid-cols-2 gap-y-4 border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute md:mt-20 md:grid-cols-4"
        >
          <div>
            <div className="text-ink-mute/60">Currently</div>
            <div className="mt-1 text-ink">PT AIG Nusa Hub</div>
          </div>
          <div>
            <div className="text-ink-mute/60">Based in</div>
            <div className="mt-1 text-ink">{profile.location}</div>
          </div>
          <div>
            <div className="text-ink-mute/60">Stack</div>
            <div className="mt-1 text-ink">Kotlin · Flutter · Compose</div>
          </div>
          <div>
            <div className="text-ink-mute/60">Status</div>
            <div className="mt-1 flex items-center gap-2 text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
