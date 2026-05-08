"use client";

import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Phone,
  Copy,
  Check,
  Github,
} from "lucide-react";
import { useState } from "react";
import MagneticLink from "./MagneticLink";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel index="07" title="Contact" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-10 font-display text-[14vw] leading-[0.92] tracking-tight text-ink md:text-[10rem]">
            Let&rsquo;s ship <br />
            <span className="italic text-ink-soft">
              something{" "}
              <span className="text-accent not-italic">mobile</span>
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <Reveal delay={0.05}>
              <p className="max-w-xl font-display text-2xl italic leading-snug text-ink-soft md:text-3xl">
                I&rsquo;m open to mobile-engineering roles, freelance Flutter
                or Android projects, and coffee-fuelled chats about clean
                architecture.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <MagneticLink
                  href={`mailto:${profile.email}`}
                  className="rounded-full border border-ink bg-ink px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors hover:bg-accent hover:border-accent"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Send an email
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </MagneticLink>
                <MagneticLink
                  onClick={onCopy}
                  className="rounded-full border border-ink/30 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink/5"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" strokeWidth={1.5} />
                      Copy email
                    </>
                  )}
                </MagneticLink>
              </div>
            </Reveal>
          </div>

          <Reveal className="md:col-span-5" delay={0.15}>
            <ul className="space-y-0 border-t border-rule">
              <ContactRow
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                icon={<Mail className="h-4 w-4" strokeWidth={1.5} />}
              />
              <ContactRow
                label="GitHub"
                value={`@${profile.githubHandle}`}
                href={profile.github}
                external
                icon={<Github className="h-4 w-4" strokeWidth={1.5} />}
              />
              <ContactRow
                label="LinkedIn"
                value={`/in/${profile.linkedinHandle}`}
                href={profile.linkedin}
                external
                icon={<Linkedin className="h-4 w-4" strokeWidth={1.5} />}
              />
              <ContactRow
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phoneRaw}`}
                icon={<Phone className="h-4 w-4" strokeWidth={1.5} />}
              />
            </ul>

            <p className="mt-12 font-display text-3xl italic text-ink md:text-4xl">
              — Alif.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
  icon,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <li className="border-b border-rule">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex items-center justify-between py-5 transition-colors"
      >
        <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          {icon}
          {label}
        </span>
        <span className="flex items-center gap-3 text-lg text-ink transition-colors group-hover:text-accent md:text-xl">
          <span className="font-display italic">{value}</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        </span>
      </a>
    </li>
  );
}
