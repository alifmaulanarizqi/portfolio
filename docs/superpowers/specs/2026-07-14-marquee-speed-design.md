# Design Spec: Marquee Speed Adjustment

- **Date**: 2026-07-14
- **Status**: Approved
- **Author**: Antigravity

## Objective
Increase the scrolling speed of the horizontal skills marquee on the portfolio website.

## Proposed Changes
Modify the animation duration of the `marquee` class in `tailwind.config.ts` from `40s` to `20s`.

```typescript
      animation: {
        marquee: "marquee 20s linear infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
```

## Verification Plan
1. Apply the configuration change.
2. Run `rtk npm run build` to verify there are no configuration or build issues.
