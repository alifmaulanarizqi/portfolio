# Design Spec: Update Working Principle

- **Date**: 2026-07-14
- **Status**: Approved
- **Author**: Antigravity

## Objective
Update the profile pull quote/working principle on the portfolio website to reflect the user's leadership values as a Tech Lead.

## Proposed Changes
Modify `profile.pullQuote` in `src/lib/data.ts` to:
`"Clean code is just the start; true engineering is building software that lasts and a team that grows."`

```typescript
export const profile = {
  // ...
  pullQuote:
    "Clean code is just the start; true engineering is building software that lasts and a team that grows.",
} as const;
```

## Verification Plan
1. Apply the configuration change.
2. Run `rtk npm run build` to verify there are no compilation or layout build issues.
