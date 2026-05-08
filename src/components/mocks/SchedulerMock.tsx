"use client";

import { motion } from "framer-motion";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const dates = [
  [null, null, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, null, null, null],
];
const TODAY = 16;

export default function SchedulerMock() {
  return (
    <div className="flex h-full flex-col bg-bone text-ink">
      {/* App bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <div className="font-display text-[14px] italic leading-none">
            October
          </div>
          <div className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.2em] text-ink/50">
            UII · Class Schedule
          </div>
        </div>
        <button className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/20 text-[12px] text-ink/70">
          +
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 px-3 pt-1 font-mono text-[8.5px] uppercase tracking-wider text-ink/40">
        {days.map((d, i) => (
          <div key={i} className="text-center">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="px-3 pt-1">
        {dates.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7">
            {week.map((d, di) => {
              const isToday = d === TODAY;
              const hasEvent = d === 17 || d === 22 || d === 28;
              return (
                <div
                  key={di}
                  className="relative flex h-7 items-center justify-center"
                >
                  {d && (
                    <span
                      className={
                        "flex h-6 w-6 items-center justify-center rounded-full text-[10px] " +
                        (isToday
                          ? "bg-accent font-semibold text-bone"
                          : "text-ink/80")
                      }
                    >
                      {d}
                    </span>
                  )}
                  {hasEvent && !isToday && (
                    <span className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-accent" />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Push notification */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-3 mt-2 flex items-start gap-2.5 rounded-2xl bg-ink/95 p-2.5 text-bone shadow-lg"
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent text-[12px]">
          🔔
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[8px] uppercase tracking-wider text-bone/50">
              UII · now
            </span>
            <span className="font-mono text-[8px] text-bone/50">10:55</span>
          </div>
          <div className="mt-0.5 text-[10px] font-medium leading-tight">
            Software Engineering — Room E.302
          </div>
          <div className="text-[9px] text-bone/60">Starts in 5 minutes</div>
        </div>
      </motion.div>

      {/* Today's classes */}
      <div className="mt-3 px-3">
        <h4 className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-ink/50">
          Today · 16 Oct
        </h4>
        <div className="mt-2 space-y-1.5">
          {[
            { time: "11:00", title: "Software Engineering", room: "E.302" },
            { time: "13:30", title: "Mobile Computing", room: "Lab 4" },
          ].map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/60 px-2.5 py-1.5"
            >
              <span className="font-mono text-[9.5px] tabular-nums text-ink/80">
                {c.time}
              </span>
              <span className="block h-7 w-[2px] rounded-full bg-accent" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[10px] font-medium">
                  {c.title}
                </div>
                <div className="font-mono text-[8.5px] text-ink/50">
                  {c.room}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1" />
    </div>
  );
}
