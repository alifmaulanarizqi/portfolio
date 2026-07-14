# Design Spec: Remove Apps Shipped Statistic

- **Date**: 2026-07-14
- **Status**: Approved
- **Author**: Antigravity

## Objective
Remove the "APPS SHIPPED" stat card from the portfolio.

## Proposed Changes
Modify the `stats` array in `src/lib/data.ts` to exclude the `"APPS SHIPPED"` object.

```typescript
export const stats: { label: string; value: string }[] = [
  { label: "YRS EXPERIENCE", value: "2+" },
  { label: "GPA", value: "3.88" },
  { label: "HONORS", value: "CUM LAUDE" },
];
```

## Verification Plan
1. Apply the configuration change.
2. Run `rtk npm run build` to verify there are no compilation or runtime errors.
