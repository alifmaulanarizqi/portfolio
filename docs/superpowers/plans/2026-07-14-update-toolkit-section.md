# Update Toolkit Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the Toolkit (Skills) section to reflect the Tech Lead profile and add a "Deployment" group.

**Architecture:** Modify `src/components/Skills.tsx` (header & text) and `src/lib/data.ts` (`skillGroups` array).

**Tech Stack:** React, Next.js, Tailwind CSS, TypeScript.

## Global Constraints
- Always use `rtk` prefix for commands in `run_command`.

---

### Task 1: Update Skills Component (Skills.tsx)

**Files:**
- Modify: `src/components/Skills.tsx`

**Interfaces:**
- Consumes: UI rendering structure for skills section
- Produces: Updated header and description text in skills section

- [ ] **Step 1: Edit Section 5 headline and description**

In `src/components/Skills.tsx`, update the headline and paragraph text:

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

- [ ] **Step 2: Commit**
```bash
rtk git add src/components/Skills.tsx
rtk git commit -m "feat: update Section 5 header and description to focus on engineering stack"
```

---

### Task 2: Add Deployment to skillGroups (data.ts)

**Files:**
- Modify: `src/lib/data.ts`

**Interfaces:**
- Consumes: `skillGroups` array structure
- Produces: Updated `skillGroups` list containing the new Deployment group

- [ ] **Step 1: Edit `skillGroups` array**

In `src/lib/data.ts`, append the `"Deployment"` group:

```typescript
export const skillGroups: { group: string; items: string[] }[] = [
  // ... existing groups
  {
    group: "Deployment",
    items: ["Docker", "Containerization", "Web Deployment", "Staging & Production", "Maintenance"],
  },
];
```

- [ ] **Step 2: Run verification build**
Run: `rtk npm run build`
Expected: Successful build completion.

- [ ] **Step 3: Commit**
```bash
rtk git add src/lib/data.ts docs/
rtk git commit -m "feat: add Deployment to skillGroups in data.ts"
```
