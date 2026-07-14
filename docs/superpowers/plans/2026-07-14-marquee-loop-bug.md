# Marquee Loop Bug Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the marquee looping issue so all skills scroll into view.

**Architecture:** Add `w-max` class to the flex container in `src/components/Marquee.tsx`.

**Tech Stack:** React, Tailwind CSS.

## Global Constraints
- Always use `rtk` prefix for commands in `run_command`.

---

### Task 1: Add w-max Utility Class

**Files:**
- Modify: `src/components/Marquee.tsx`

**Interfaces:**
- Consumes: Flex container layout in Marquee component
- Produces: Flex container with `w-max` width constraint

- [x] **Step 1: Edit `src/components/Marquee.tsx`**

Update the flex container class list to include `w-max`:

```typescript
// src/components/Marquee.tsx
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform [animation-play-state:running] hover:[animation-play-state:paused]">
```

- [x] **Step 2: Run verification build**
Run: `rtk npm run build`
Expected: Successful build completion.

- [x] **Step 3: Commit**
```bash
rtk git add src/components/Marquee.tsx docs/
rtk git commit -m "fix: resolve early marquee loop cutoff by adding w-max utility"
```
