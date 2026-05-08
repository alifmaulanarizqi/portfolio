"use client";

import { motion } from "framer-motion";

export default function FarmerMock() {
  return (
    <div className="flex h-full flex-col bg-[#0f1410] text-bone">
      {/* App bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <button className="text-bone/70 text-[13px]">←</button>
        <div className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-bone/60">
          Plant Scan
        </div>
        <button className="text-bone/70 text-[13px]">⚙</button>
      </div>

      {/* Camera viewfinder */}
      <div className="relative mx-3 aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[#0e3624] via-[#1f4d2f] to-[#0e2418]">
        {/* leaf shape */}
        <svg
          viewBox="0 0 120 160"
          className="absolute inset-0 h-full w-full opacity-90"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5fbf6b" />
              <stop offset="100%" stopColor="#1f5e2c" />
            </linearGradient>
          </defs>
          <path
            d="M60 10 C 110 30, 120 90, 95 145 C 70 135, 35 130, 25 100 C 15 70, 25 30, 60 10 Z"
            fill="url(#leaf)"
          />
          <path
            d="M62 18 L 85 140"
            stroke="#0e3624"
            strokeWidth="1.5"
            fill="none"
          />
          {/* spots */}
          <circle cx="55" cy="60" r="4" fill="#a37132" opacity="0.85" />
          <circle cx="72" cy="85" r="3" fill="#a37132" opacity="0.85" />
          <circle cx="48" cy="100" r="2.5" fill="#a37132" opacity="0.7" />
        </svg>

        {/* Corner brackets */}
        {[
          "left-3 top-3",
          "right-3 top-3 rotate-90",
          "left-3 bottom-3 -rotate-90",
          "right-3 bottom-3 rotate-180",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute h-5 w-5 border-l-2 border-t-2 border-bone ${pos}`}
          />
        ))}

        {/* Scanning beam */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_12px_2px_rgba(232,74,44,0.7)]"
        />

        {/* Detection label */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-bone/90 px-2.5 py-1 text-[9px] font-medium text-ink"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Detecting…
        </motion.div>
      </div>

      {/* Result card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="mx-3 mt-3 rounded-2xl border border-bone/10 bg-bone/[0.06] p-3 backdrop-blur"
      >
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-[13px] italic">Rice Leaf Blast</h3>
          <span className="font-mono text-[9px] text-emerald-400">92%</span>
        </div>
        <p className="mt-1 text-[9px] leading-snug text-bone/65">
          Fungal infection. Apply tricyclazole fungicide and improve drainage.
        </p>
        <div className="mt-2.5 flex gap-1.5">
          <span className="rounded-full bg-bone/10 px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-wider text-bone/70">
            Severity · M
          </span>
          <span className="rounded-full bg-accent/20 px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-wider text-accent">
            Treatable
          </span>
        </div>
      </motion.div>

      <div className="flex-1" />

      {/* Action button */}
      <div className="px-3 pb-4">
        <button className="w-full rounded-full bg-accent py-2 text-center text-[10px] font-medium text-bone">
          See full report
        </button>
      </div>
    </div>
  );
}
