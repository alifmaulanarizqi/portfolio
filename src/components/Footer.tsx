import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule px-6 py-10 md:px-10 md:py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="text-accent">★</span>
          <span>
            © {year} {profile.name}
          </span>
        </div>
        <div className="hidden md:block">
          Made with care in <span className="text-ink">{profile.location}</span>
        </div>
        <a
          href="#top"
          className="group flex items-center gap-2 text-ink-mute transition-colors hover:text-ink"
        >
          <span>Back to top</span>
          <span className="inline-block transition-transform group-hover:-translate-y-0.5">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}
