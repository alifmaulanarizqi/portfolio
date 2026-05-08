"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  statusTime?: string;
};

export default function PhoneFrame({
  children,
  className,
  tilt = false,
  statusTime = "9:41",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width;
    const cy = (e.clientY - r.top) / r.height;
    rx.set((0.5 - cy) * 10);
    ry.set((cx - 0.5) * 10);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className={cn("[perspective:1400px]", className)}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={
          tilt
            ? {
                rotateX: srx,
                rotateY: sry,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        className="relative mx-auto aspect-[9/19] w-full max-w-[300px] rounded-[42px] border-[10px] border-ink bg-ink shadow-[0_30px_60px_-20px_rgba(22,20,15,0.35),0_10px_30px_-10px_rgba(22,20,15,0.25)]"
      >
        {/* Notch / Dynamic Island */}
        <div className="absolute left-1/2 top-1.5 z-30 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-ink" />

        {/* Screen */}
        <div className="absolute inset-0 overflow-hidden rounded-[32px]">
          {/* Status bar */}
          <div className="absolute left-0 right-0 top-0 z-20 flex h-9 items-center justify-between px-6 pt-1 font-mono text-[11px] font-semibold tracking-tight">
            <span>{statusTime}</span>
            <span className="flex items-center gap-1.5">
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </span>
          </div>

          {/* Content */}
          <div className="absolute inset-0 pt-9">{children}</div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 z-20 h-[5px] w-[110px] -translate-x-1/2 rounded-full bg-ink/30" />

        {/* Side buttons */}
        <span className="absolute -left-[14px] top-[88px] h-7 w-1 rounded-l-sm bg-ink" />
        <span className="absolute -left-[14px] top-[130px] h-12 w-1 rounded-l-sm bg-ink" />
        <span className="absolute -left-[14px] top-[185px] h-12 w-1 rounded-l-sm bg-ink" />
        <span className="absolute -right-[14px] top-[120px] h-20 w-1 rounded-r-sm bg-ink" />
      </motion.div>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="14" height="9" viewBox="0 0 14 9" fill="currentColor">
      <rect x="0" y="6" width="2" height="3" rx="0.5" />
      <rect x="3.5" y="4" width="2" height="5" rx="0.5" />
      <rect x="7" y="2" width="2" height="7" rx="0.5" />
      <rect x="10.5" y="0" width="2" height="9" rx="0.5" />
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg width="13" height="9" viewBox="0 0 13 9" fill="currentColor">
      <path d="M6.5 0C4 0 1.7 0.9 0 2.4l1.4 1.5C2.7 2.7 4.5 2 6.5 2s3.8 0.7 5.1 1.9L13 2.4C11.3 0.9 9 0 6.5 0z" />
      <path d="M6.5 3.4c-1.5 0-2.9 0.5-4 1.5l1.4 1.5c0.7-0.6 1.6-1 2.6-1s1.9 0.4 2.6 1l1.4-1.5c-1.1-1-2.5-1.5-4-1.5z" />
      <circle cx="6.5" cy="7.5" r="1.5" />
    </svg>
  );
}
function BatteryIcon() {
  return (
    <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
      <rect
        x="0.5"
        y="0.5"
        width="18"
        height="10"
        rx="2.5"
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <rect x="2" y="2" width="13" height="7" rx="1.2" fill="currentColor" />
      <rect x="20" y="3.5" width="1.5" height="4" rx="0.7" fill="currentColor" />
    </svg>
  );
}
