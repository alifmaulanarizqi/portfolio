# Marquee Speed Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Double the speed of the skills marquee.

**Architecture:** Change the Tailwind configuration keyframe animation speed for `marquee` from `40s` to `20s`.

**Tech Stack:** Tailwind CSS, Next.js.

## Global Constraints
- Always use `rtk` prefix for commands in `run_command`.

---

### Task 1: Update Tailwind Config

**Files:**
- Modify: `tailwind.config.ts`

**Interfaces:**
- Consumes: Tailwind config structure
- Produces: Updated marquee animation speed

- [x] **Step 1: Edit marquee animation duration**

Modify `tailwind.config.ts` to set the marquee animation duration to `20s`:

```typescript
      animation: {
        marquee: "marquee 20s linear infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
```

- [x] **Step 2: Run verification build**
Verify that Tailwind compiles and builds cleanly:
Run: `rtk npm run build`
Expected: Successful build completion.

- [x] **Step 3: Commit**
```bash
rtk git add tailwind.config.ts docs/
rtk git commit -m "feat: double marquee scrolling speed to 20s"
```
