import { cn } from "@/lib/cn";

export default function SectionLabel({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-mute",
        className,
      )}
    >
      <span className="text-accent">¶</span>
      <span>{index}</span>
      <span className="h-px w-10 bg-rule" />
      <span className="text-ink">{title}</span>
    </div>
  );
}
