# Design Spec: Add Docker and Deployment to Skills Marquee

- **Date**: 2026-07-14
- **Status**: Approved
- **Author**: Antigravity

## Objective
Add "Docker" and "Deployment" skills to the horizontal scrolling marquee items.

## Proposed Changes
Modify `marqueeItems` in `src/lib/data.ts` to include `"Docker"` and `"Deployment"` before the star (`"★"`).

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

## Verification Plan
1. Apply the array modification.
2. Run `rtk npm run build` to verify that there are no syntax or typescript compilation errors.
