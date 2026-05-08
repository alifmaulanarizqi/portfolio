"use client";

import { motion } from "framer-motion";

const messages = [
  { from: "them", text: "Hey, deploy build sudah ready 🚀", time: "09:38" },
  { from: "me", text: "Mantap. Saya tes integrasi WS dulu ya.", time: "09:39" },
  { from: "them", text: "Sip. QA juga lagi run regression.", time: "09:40" },
];

export default function SuperappMock() {
  return (
    <div className="flex h-full flex-col bg-[#fafafa] text-ink">
      {/* App bar */}
      <div className="flex items-center gap-3 border-b border-black/5 bg-white px-4 py-2.5">
        <button className="text-ink/70">←</button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-[12px] font-semibold text-accent">
          QA
        </div>
        <div className="flex-1">
          <div className="text-[12px] font-semibold leading-none">QA Team</div>
          <div className="mt-1 flex items-center gap-1 text-[9px] text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>online · WebSocket</span>
          </div>
        </div>
        <button className="text-ink/40">⋯</button>
      </div>

      {/* Date pill */}
      <div className="flex justify-center py-3">
        <span className="rounded-full bg-black/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-ink/50">
          Today
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-2 overflow-hidden px-3">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.25 }}
            className={
              "flex " + (m.from === "me" ? "justify-end" : "justify-start")
            }
          >
            <div
              className={
                "max-w-[78%] rounded-2xl px-3 py-2 text-[10.5px] leading-snug shadow-sm " +
                (m.from === "me"
                  ? "rounded-br-md bg-accent text-bone"
                  : "rounded-bl-md bg-white text-ink")
              }
            >
              {m.text}
              <div
                className={
                  "mt-1 text-right font-mono text-[7.5px] " +
                  (m.from === "me" ? "text-bone/70" : "text-ink/40")
                }
              >
                {m.time}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-start"
        >
          <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-3 py-2.5 shadow-sm">
            {[0, 0.15, 0.3].map((d, i) => (
              <motion.span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-ink/40"
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: d,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Input bar */}
      <div className="border-t border-black/5 bg-white px-3 py-2.5">
        <div className="flex items-center gap-2 rounded-full bg-black/[0.04] px-3 py-1.5">
          <span className="text-[14px] text-ink/30">+</span>
          <span className="flex-1 text-[10px] text-ink/40">Type a message…</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] text-bone">
            ↑
          </span>
        </div>
      </div>
    </div>
  );
}
