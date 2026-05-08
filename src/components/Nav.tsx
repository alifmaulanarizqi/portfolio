"use client";

import { useEffect, useState } from "react";
import { sections, profile } from "@/lib/data";

function useWIBClock() {
  const [time, setTime] = useState<string>(() => formatJakarta(new Date()));
  useEffect(() => {
    const id = window.setInterval(() => setTime(formatJakarta(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

function formatJakarta(d: Date) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    }).format(d);
  } catch {
    return d.toISOString().slice(11, 19);
  }
}

export default function Nav() {
  const time = useWIBClock();
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-rule bg-bone/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
        >
          <span className="text-accent">★</span>{" "}
          <span className="text-ink">{profile.initials}</span>
          <span className="hidden text-ink-mute sm:inline">
            {" "}
            — {profile.title}
          </span>
        </a>

        <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.22em] md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex items-baseline gap-2 text-ink-mute transition-colors hover:text-ink"
            >
              <span className="tabular-nums text-ink-mute group-hover:text-accent">
                {s.index}
              </span>
              <span>{s.title}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          <span className="hidden md:inline">Jakarta</span>
          <span className="rounded-full border border-rule bg-bone-soft/60 px-2.5 py-1 tabular-nums text-ink backdrop-blur">
            {time}
          </span>
        </div>
      </div>
    </header>
  );
}
