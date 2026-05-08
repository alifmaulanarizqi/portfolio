"use client";

import { motion } from "framer-motion";

export default function LMSMock() {
  return (
    <div className="flex h-full flex-col bg-[#0c0c12] text-bone">
      {/* App bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <button className="text-bone/70 text-[13px]">←</button>
        <div className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-bone/50">
          Module 03
        </div>
        <button className="text-bone/70 text-[13px]">⋯</button>
      </div>

      {/* Video player */}
      <div className="relative mx-3 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-[#1d1d28] via-[#2a2230] to-[#1a1a22]">
        {/* gridish pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(232,74,44,0.55), transparent 50%), radial-gradient(circle at 80% 70%, rgba(120,80,200,0.45), transparent 55%)",
          }}
        />
        {/* Play button */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bone/95 text-ink shadow-xl"
        >
          <span className="ml-0.5 text-[14px]">▶</span>
        </motion.button>
        {/* Progress */}
        <div className="absolute bottom-2 left-2 right-2">
          <div className="flex items-center gap-2 text-[8px] text-bone/80">
            <span>03:42</span>
            <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-bone/15">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "62%" }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute inset-y-0 left-0 rounded-full bg-accent"
              />
            </div>
            <span>06:01</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h3 className="font-display text-[15px] italic leading-tight">
          Clean Architecture in Flutter
        </h3>
        <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.16em] text-bone/40">
          Lesson 03 of 12 · 6 min
        </p>
      </div>

      {/* Course list */}
      <div className="mt-3 flex-1 space-y-1.5 overflow-hidden px-3">
        {[
          { num: "01", title: "Layers & Boundaries", done: true },
          { num: "02", title: "Bloc Patterns", done: true },
          { num: "03", title: "Use Cases & Repos", active: true },
          { num: "04", title: "Testing the Domain", done: false },
        ].map((c) => (
          <div
            key={c.num}
            className={
              "flex items-center gap-3 rounded-lg px-2.5 py-2 " +
              (c.active ? "bg-accent/15" : "bg-bone/[0.04]")
            }
          >
            <span
              className={
                "flex h-5 w-5 items-center justify-center rounded-full font-mono text-[8px] " +
                (c.done
                  ? "bg-emerald-500/30 text-emerald-300"
                  : c.active
                    ? "bg-accent text-bone"
                    : "bg-bone/10 text-bone/50")
              }
            >
              {c.done ? "✓" : c.num}
            </span>
            <span
              className={
                "flex-1 text-[10px] " +
                (c.active ? "text-bone" : "text-bone/70")
              }
            >
              {c.title}
            </span>
            {c.active && (
              <span className="font-mono text-[8px] text-accent">▶</span>
            )}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="px-3 pb-4 pt-2">
        <button className="w-full rounded-full bg-accent py-2 text-center text-[10px] font-medium text-bone">
          Continue lesson
        </button>
      </div>
    </div>
  );
}
