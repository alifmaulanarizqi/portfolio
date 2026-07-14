# Update Working Principle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the profile's working principle (pullQuote).

**Architecture:** Modify `profile.pullQuote` in `src/lib/data.ts`.

**Tech Stack:** TypeScript, Next.js.

## Global Constraints
- Always use `rtk` prefix for commands in `run_command`.

---

### Task 1: Update pullQuote in data.ts

**Files:**
- Modify: `src/lib/data.ts`

**Interfaces:**
- Consumes: Profile data structure
- Produces: Updated working principle pullQuote

- [ ] **Step 1: Edit `profile.pullQuote`**

In `src/lib/data.ts`, update `pullQuote` value:

```typescript
// src/lib/data.ts
export const profile = {
  // ...
  pullQuote:
    "Clean code is just the start; true engineering is building software that lasts and a team that grows.",
} as const;
```

- [ ] **Step 2: Run verification build**
Run: `rtk npm run build`
Expected: Successful build completion.

- [ ] **Step 3: Commit**
```bash
rtk git add src/lib/data.ts docs/
rtk git commit -m "feat: update working principle pullQuote to Option 1"
```
