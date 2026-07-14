# Design Spec: Update Toolkit Section and Add Deployment Skills

- **Date**: 2026-07-14
- **Status**: Approved
- **Author**: Antigravity

## Objective
Update the Skills section header and description to cover the broader engineering stack (mobile + deployment), and add a dedicated "Deployment" skill group.

## Proposed Changes

### 1. Headline and Description (`src/components/Skills.tsx`)
- Headline: Change "The mobile stack I reach for first." to "The engineering stack I reach for."
- Description: Change "Two languages, two frameworks..." to a description covering languages, frameworks, architecture, and containerized deployment.

```typescript
// src/components/Skills.tsx
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
            The engineering stack I reach for{" "}
            <span className="italic text-ink-soft">first</span>
            <span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            A modern set of languages, frameworks, architectural standards, and
            containerized deployment tools that keep systems clean, reliable, and
            scalable.
          </p>
        </Reveal>
```

### 2. Skill Groups (`src/lib/data.ts`)
Add a new group called `"Deployment"` at the end of the `skillGroups` list.

```typescript
export const skillGroups: { group: string; items: string[] }[] = [
  // ... existing groups
  {
    group: "Deployment",
    items: ["Docker", "Containerization", "Web Deployment", "Staging & Production", "Maintenance"],
  },
];
```

## Verification Plan
1. Apply modifications to `src/components/Skills.tsx` and `src/lib/data.ts`.
2. Run `rtk npm run build` to verify clean build completion.
