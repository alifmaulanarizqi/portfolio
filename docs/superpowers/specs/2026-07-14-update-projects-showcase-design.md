# Design Spec: Update Projects Showcase and Arunahub Mikro

- **Date**: 2026-07-14
- **Status**: Approved
- **Author**: Antigravity

## Objective
Update Section 4's header and description to better fit the Tech Lead profile and projects scope, rename "Arunahub" to "Arunahub Mikro", and add deployment information to the project details.

## Proposed Changes

### 1. Section 4 Header & Description (`src/components/Projects.tsx`)
- Headline: Change "Five apps, two stacks." to "Five projects, complete environments."
- Description: Change "Real apps shipped to real users..." to a description of the engineering work spanning client-side mobile applications to server-side, database, and containerized deployments.

```typescript
// src/components/Projects.tsx
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
            Five projects,{" "}
            <span className="italic text-ink-soft">
              complete&nbsp;environments
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

### 2. Arunahub Mikro Update (`src/lib/data.ts`)
- Rename project title to `"Arunahub Mikro"`.
- Update description to: `"A modern point-of-sale app for retail operators — built in Kotlin with Jetpack Compose and MVVM, with offline-first sync via Room Database and REST APIs. I also managed and maintained its full-stack containerized deployment using Docker."`
- Append `"Docker"` and `"Deployment"` tags to the project tag list.

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

## Verification Plan
1. Apply changes to `src/components/Projects.tsx` and `src/lib/data.ts`.
2. Run `rtk npm run build` to verify Next.js compiling/rendering.
