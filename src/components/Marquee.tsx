import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-rule bg-bone-soft/50 py-6">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform [animation-play-state:running] hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center font-display text-3xl italic text-ink md:text-5xl"
          >
            {item}
            <span className="ml-8 inline-block text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
