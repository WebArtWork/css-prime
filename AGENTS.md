# css-prime contributor guidance

## Repository

- This is a pnpm workspace. Use `pnpm`; do not add npm or yarn lockfiles.
- Packages live in `packages/*`. Keep the project framework-neutral.
- Use Node 24 LTS for installs, checks, builds, and releases.

## Before submitting a change

Run:

```bash
pnpm release:check
```

This runs linting, formatting, type checking, tests, and the production build.

## Packages and releases

- Published packages use the public `@wawjs/css-prime-*` namespace.
- The stable package set is released as `1.0.0` and versioned together with Changesets.
- `@wawjs/css-prime-headless` is experimental and starts at `0.1.0`.
- Publishing is manual; do not add GitHub Actions publishing without explicit approval.
- Follow [RELEASING.md](./RELEASING.md) for versioning and npm publication.

## Attribution and branding

- Keep css-prime / Web Art Work as the current project identity.
- Preserve required MIT attribution to PrimeTek and PrimeUIX as historical attribution.
- Do not present css-prime as affiliated with or endorsed by PrimeTek, PrimeUI, or PrimeUIX.
