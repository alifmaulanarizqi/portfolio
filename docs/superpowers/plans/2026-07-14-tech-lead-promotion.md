# PT AIG Nusa Hub Tech Lead Promotion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the portfolio to reflect the user's promotion to Tech Lead at PT AIG Nusa Hub.

**Architecture:** Split the PT AIG Nusa Hub experience block into two entries (Tech Lead and Android Developer) and update the main profile title/summary in `src/lib/data.ts`.

**Tech Stack:** Next.js, React, TailwindCSS, TypeScript.

## Global Constraints
- Always use `rtk` prefix for commands in `run_command`.
- Keep the website styling and formatting unchanged.
- Ensure reverse chronological ordering of experiences.

---

### Task 1: Update Profile Details (Title and Summary)

**Files:**
- Modify: `src/lib/data.ts:24-43`

**Interfaces:**
- Consumes: Profile data structure
- Produces: Updated profile title and summary

- [x] **Step 1: Edit `profile.title` and `profile.summary`**

Modify `src/lib/data.ts` to update `profile.title` and `profile.summary`:

```typescript
export const profile = {
  name: "Alif Maulana Rizqi",
  initials: "AMR",
  title: "Tech Lead / Mobile Developer",
  location: "Indramayu, West Java",
  email: "alifmaulana312@gmail.com",
  phone: "+62 813-2130-3346",
  phoneRaw: "+6281321303346",
  linkedin: "https://www.linkedin.com/in/alif-maulana-rizqi/",
  linkedinHandle: "alif-maulana-rizqi",
  github: "https://github.com/alifmaulanarizqi",
  githubHandle: "alifmaulanarizqi",
  tagline:
    "Two years shipping Android (Kotlin) and Flutter apps with clean architecture, careful state management, and an obsession for reliability.",
  summary:
    "Tech Lead and Mobile Developer with hands-on experience spanning Android (Kotlin), Flutter, and full-stack deployments. I design robust mobile architectures, run code reviews, and mentor engineers on tech selection. Additionally, I manage containerized web deployments (frontend, backend, database) using Docker and maintain high-reliability staging and production systems.",
  pullQuote:
    "Native + cross-platform. One developer, two stacks, the same standard.",
} as const;
```

- [x] **Step 2: Verify changes visually in code**
Verify that the `profile` object compiles correctly and compiles without issues.

- [x] **Step 3: Commit**
```bash
rtk git add src/lib/data.ts
rtk git commit -m "chore: update profile title and summary for Tech Lead promotion"
```

---

### Task 2: Split and Add Experience Entries

**Files:**
- Modify: `src/lib/data.ts:67-82`

**Interfaces:**
- Consumes: Updated profile details
- Produces: New `experiences` array with two separate PT AIG Nusa Hub entries

- [x] **Step 1: Modify `experiences` array**

In `src/lib/data.ts`, split the `PT AIG Nusa Hub` experience block into two:

```typescript
export const experiences: Experience[] = [
  {
    company: "PT AIG Nusa Hub",
    role: "Tech Lead",
    type: "Full-Time",
    period: "Jul 2026 — Present",
    start: "2026",
    end: "now",
    bullets: [
      "Leading and mentoring the developer team to build and scale web and mobile applications.",
      "Orchestrating and deploying containerized web applications (frontend, backend, database) using Docker.",
      "Maintaining deployments and staging/production systems for reliability and uptime.",
      "Conducting code reviews and providing strategic guidance to team members on technology selection.",
      "Continuing hands-on mobile application development to ship high-quality features.",
    ],
  },
  {
    company: "PT AIG Nusa Hub",
    role: "Android Developer",
    type: "Full-Time",
    period: "Dec 2025 — Jul 2026",
    start: "2025",
    end: "2026",
    bullets: [
      "Building a POS application in Kotlin with Jetpack Compose and MVVM clean architecture.",
      "Implemented offline mode with Room Database so the app keeps running without the network.",
      "Embedded the company web portal via WebView and integrated REST APIs end-to-end.",
      "Authoring reusable UI components and shared modules for the team.",
    ],
  },
  // ... rest of experiences
];
```

- [x] **Step 2: Verify formatting and syntax**
Ensure that there are no trailing or missing commas in the `experiences` array and that types match `Experience[]`.

- [x] **Step 3: Commit**
```bash
rtk git add src/lib/data.ts
rtk git commit -m "feat: split PT AIG Nusa Hub experience into Tech Lead and Android Developer roles"
```

---

### Task 3: Build Verification

**Files:**
- None (verify compilation and local server)

- [x] **Step 1: Check typescript compile**
Run the typescript compiler or Next.js build command to verify that no TS compilation errors were introduced.

Run: `rtk npm run build`
Expected: Successful build completion without errors.

- [x] **Step 2: Commit**
```bash
rtk git add docs/
rtk git commit -m "docs: add design and implementation plan docs"
```
