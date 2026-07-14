# Add Marquee Skills Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add "Docker" and "Deployment" to the skills marquee list.

**Architecture:** Modify `marqueeItems` in `src/lib/data.ts`.

**Tech Stack:** TypeScript, Next.js.

## Global Constraints
- Always use `rtk` prefix for commands in `run_command`.

---

### Task 1: Update Marquee Items

**Files:**
- Modify: `src/lib/data.ts`

**Interfaces:**
- Consumes: `marqueeItems` array structure
- Produces: Updated `marqueeItems` containing "Docker" and "Deployment"

- [x] **Step 1: Add items to `marqueeItems` array**

In `src/lib/data.ts`, update the `marqueeItems` array:

```typescript
export const marqueeItems: string[] = [
  "Flutter",
  "Kotlin",
  "Jetpack Compose",
  "Bloc",
  "MVVM",
  "Clean Architecture",
  "Room DB",
  "Firebase",
  "Retrofit",
  "Dio",
  "WebSocket",
  "REST API",
  "Docker",
  "Deployment",
  "★",
];
```

- [x] **Step 2: Verify build**
Run Next.js build compilation:
Run: `rtk npm run build`
Expected: Successful build completion.

- [x] **Step 3: Commit**
```bash
rtk git add src/lib/data.ts docs/
rtk git commit -m "feat: add Docker and Deployment to horizontal skills marquee"
```
