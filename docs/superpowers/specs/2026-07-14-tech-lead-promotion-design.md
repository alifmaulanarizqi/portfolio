# Design Spec: PT AIG Nusa Hub Tech Lead Promotion Update

- **Date**: 2026-07-14
- **Status**: Approved
- **Author**: Antigravity

## Objective
Update the portfolio website to reflect the user's recent promotion to Tech Lead at PT AIG Nusa Hub (effective July 2026). This includes updating the main job title, profile summary, and experience timeline.

## Proposed Changes

### 1. Main Profile Info (`src/lib/data.ts`)
- Update `profile.title` to `"Tech Lead / Mobile Developer"`.
- Revise `profile.summary` to incorporate leadership, Docker deployment, and overall engineering oversight alongside hands-on development.

```typescript
export const profile = {
  // ...
  title: "Tech Lead / Mobile Developer",
  // ...
  summary:
    "Tech Lead and Mobile Developer with hands-on experience spanning Android (Kotlin), Flutter, and full-stack deployments. I design robust mobile architectures, run code reviews, and mentor engineers on tech selection. Additionally, I manage containerized web deployments (frontend, backend, database) using Docker and maintain high-reliability staging and production systems.",
} as const;
```

### 2. Experience Timeline (`src/lib/data.ts`)
Split the existing "PT AIG Nusa Hub" experience entry into two distinct entries representing the promotion:

1. **Tech Lead** (Jul 2026 — Present):
   - Leading and mentoring the developer team to build and scale web and mobile applications.
   - Orchestrating and deploying containerized web applications (frontend, backend, database) using Docker.
   - Maintaining deployments and staging/production systems for reliability and uptime.
   - Conducting code reviews and providing strategic guidance to team members on technology selection.
   - Continuing hands-on mobile application development to ship high-quality features.
2. **Android Developer** (Dec 2025 — Jul 2026):
   - Keep existing bullets for POS, Room DB offline mode, WebView, and shared components.

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

## Verification Plan
1. Make the code changes.
2. Run the Next.js development server or compile check to ensure no TypeScript compilation or styling issues occur.
3. Verify visually/logically that the timeline and headers render correctly.
