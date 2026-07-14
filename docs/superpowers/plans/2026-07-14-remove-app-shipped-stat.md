# Remove Apps Shipped Stat Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the "APPS SHIPPED" statistic from the portfolio stats.

**Architecture:** Modify the `stats` array in `src/lib/data.ts`.

**Tech Stack:** TypeScript, Next.js.

## Global Constraints
- Always use `rtk` prefix for commands in `run_command`.

---

### Task 1: Update stats Array

**Files:**
- Modify: `src/lib/data.ts`

**Interfaces:**
- Consumes: `stats` array structure
- Produces: Updated `stats` array containing 3 objects (YRS EXPERIENCE, GPA, HONORS)

- [ ] **Step 1: Remove Apps Shipped object**

In `src/lib/data.ts`, update `stats` array:

```typescript
// src/lib/data.ts
export const stats: { label: string; value: string }[] = [
  { label: "YRS EXPERIENCE", value: "2+" },
  { label: "GPA", value: "3.88" },
  { label: "HONORS", value: "CUM LAUDE" },
];
```

- [ ] **Step 2: Run verification build**
Run: `rtk npm run build`
Expected: Successful build completion.

- [ ] **Step 3: Commit**
```bash
rtk git add src/lib/data.ts docs/
rtk git commit -m "feat: remove apps shipped stat card"
```
