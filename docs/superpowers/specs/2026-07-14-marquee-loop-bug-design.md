# Design Spec: Marquee Loop Bug Fix

- **Date**: 2026-07-14
- **Status**: Approved
- **Author**: Antigravity

## Root Cause Analysis
The horizontal skills marquee uses a flex container with the `animate-marquee` class, which translates `-50%` of its own width. 

Currently, the flex container does not have a width utility (like `w-max`). Because of this:
1. The flex container's width defaults to `100%` of its parent (the viewport width, e.g., 1400px).
2. The CSS translation `-50%` translates the container by half of the viewport width (e.g., 700px), rather than half of the actual content width.
3. This causes the marquee to loop back to the start prematurely (after "Room DB"), hiding all subsequent skills (Firebase, Retrofit, Docker, Deployment, etc.).

## Proposed Changes
Add the `w-max` utility class (which maps to `width: max-content`) to the flex container in `src/components/Marquee.tsx`. This makes the container's width equal to the total width of all skill spans, so that translating `-50%` moves it by exactly one full set of marquee items.

```typescript
// src/components/Marquee.tsx
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform [animation-play-state:running] hover:[animation-play-state:paused]">
```

## Verification Plan
1. Apply the `w-max` class change in `src/components/Marquee.tsx`.
2. Run `rtk npm run build` to verify there are no compilation errors.
