# Update Projects Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename Arunahub, add deployment info to its description, and update Section 4's header/description.

**Architecture:** Modify `src/lib/data.ts` (Arunahub Mikro project object) and `src/components/Projects.tsx` (headline & paragraph).

**Tech Stack:** React, Next.js, Tailwind CSS, TypeScript.

## Global Constraints
- Always use `rtk` prefix for commands in `run_command`.

---

### Task 1: Update Projects Component (Projects.tsx)

**Files:**
- Modify: `src/components/Projects.tsx`

**Interfaces:**
- Consumes: UI rendering structure for projects section
- Produces: Updated header and description text in projects section

- [x] **Step 1: Edit Section 4 headline and paragraph**

Update the header text in `src/components/Projects.tsx`:

```typescript
// src/components/Projects.tsx
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
            Five projects,{" "}
            <span className="italic text-ink-soft">
              complete environments
            </span>
            <span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            A breakdown of my engineering work — ranging from client-side mobile
            applications to server-side, database, and containerized deployments.
            Hover any phone to peek inside.
          </p>
        </Reveal>
```

- [x] **Step 2: Commit**
```bash
rtk git add src/components/Projects.tsx
rtk git commit -m "feat: update Section 4 header and description to focus on projects and environments"
```

---

### Task 2: Update Arunahub Showcase (data.ts)

**Files:**
- Modify: `src/lib/data.ts`

**Interfaces:**
- Consumes: Project data structure
- Produces: Renamed and updated Arunahub Mikro project details

- [x] **Step 1: Edit project details for Arunahub Mikro**

In `src/lib/data.ts`, update the first project in the `projects` list:

```typescript
export const projects: Project[] = [
  {
    number: "01",
    title: "Arunahub Mikro",
    org: "PT AIG Nusa Hub",
    year: "2025 — present",
    description:
      "A modern point-of-sale app for retail operators — built in Kotlin with Jetpack Compose and MVVM, with offline-first sync via Room Database and REST APIs. I also managed and maintained its full-stack containerized deployment using Docker.",
    tags: ["Kotlin", "Compose", "MVVM", "Room", "Offline", "WebView", "Docker", "Deployment"],
    mock: "pos",
    theme: "light",
    images: [
      "/projects/pos-1.png",
      "/projects/pos-2.png",
      "/projects/pos-3.png",
      "/projects/pos-4.png",
    ],
  },
  // ...
];
```

- [x] **Step 2: Run verification build**
Run: `rtk npm run build`
Expected: Successful build completion.

- [x] **Step 3: Commit**
```bash
rtk git add src/lib/data.ts docs/
rtk git commit -m "feat: rename Arunahub to Arunahub Mikro and add deployment details"
```
