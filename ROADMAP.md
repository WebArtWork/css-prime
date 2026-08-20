# css-prime Roadmap

css-prime is an independent MIT-licensed continuation of the archived PrimeUIX codebase, maintained by Web Art Work.

The immediate goal is to make css-prime a clean, legally clear, maintainable framework-neutral foundation for `ngx-prime`, while keeping the door open for future Vue and React integrations.

## Starting point

- Forked from the final open-source PrimeUIX repository state.
- Upstream package version at fork: `0.7.0`.
- Upstream repository is archived.
- Existing code is MIT licensed.
- Current packages include:
  - `forms`
  - `headless`
  - `locale`
  - `mcp`
  - `motion`
  - `styled`
  - `styles`
  - `themes`
  - `utils`
- The original repository also contains Angular, Vue and React development integrations/submodules.

---

## Phase 0 — Freeze and verify the MIT baseline

Before changing architecture or publishing anything:

- [ ] Record the exact upstream commit SHA used for the fork.
- [ ] Add a permanent tag for the original MIT baseline.
- [ ] Verify that all source code and assets copied into this repository come from the MIT-licensed PrimeUIX repository state.
- [ ] Confirm that no PrimeUI/private/commercial source has been introduced.
- [ ] Preserve Git history where practical so original authorship remains traceable.
- [ ] Document the upstream repository and baseline version in `NOTICE.md`.

Suggested baseline tag:

`primeuix-mit-0.7.0`

---

## Phase 1 — License and attribution cleanup

The project should be unambiguously MIT licensed while preserving required upstream attribution.

- [ ] Keep the original PrimeTek copyright notice required by MIT.
- [ ] Add Web Art Work copyright for modifications and ongoing development.
- [ ] Keep the standard MIT license text unchanged apart from valid copyright notices.
- [ ] Add `NOTICE.md` explaining:
  - css-prime is derived from the MIT-licensed PrimeUIX codebase.
  - original work remains attributed to PrimeTek and contributors.
  - css-prime is independent and maintained by Web Art Work.
  - PrimeUIX, PrimeUI, PrimeTek and related trademarks belong to their respective owners.
  - css-prime is not affiliated with, sponsored by or endorsed by PrimeTek.
- [ ] Audit package-level license files/notices so published npm packages contain the required license information.
- [ ] Audit third-party bundled/generated assets for separate license requirements.

---

## Phase 2 — Full rebrand to css-prime / Web Art Work

The fork currently still contains upstream PrimeUIX identity in README, package metadata and tooling.

- [ ] Replace the archived PrimeUIX README with a css-prime README.
- [ ] Explain why the project exists: continue the final MIT-licensed shared Prime ecosystem foundation as open source.
- [ ] Update root `package.json`:
  - project name
  - author/maintainer
  - description
  - repository URL
  - bugs URL
  - homepage
- [ ] Update metadata in every package.
- [ ] Remove PrimeTek/PrimeUIX branding when it is being used as the current project identity.
- [ ] Preserve PrimeUIX references only where needed for historical attribution, migration notes or trademark notices.
- [ ] Update issue templates, workflows, docs, examples and package READMEs.
- [ ] Remove or replace upstream logos, favicons, badges and social preview assets.
- [ ] Search repository-wide for:
  - `PrimeUIX`
  - `PrimeUI`
  - `PrimeTek`
  - `primefaces/primeuix`
  - `primeuix.org`
  - `primeuix.dev`
- [ ] Review every remaining occurrence manually rather than mass-replacing historical/legal references.

---

## Phase 3 — Define the npm package namespace

Do not publish new work under the existing `@primeuix/*` namespace.

Recommended css-prime package naming:

- `@wawjs/css-prime-forms`
- `@wawjs/css-prime-headless`
- `@wawjs/css-prime-locale`
- `@wawjs/css-prime-mcp`
- `@wawjs/css-prime-motion`
- `@wawjs/css-prime-styled`
- `@wawjs/css-prime-styles`
- `@wawjs/css-prime-themes`
- `@wawjs/css-prime-utils`

Tasks:

- [ ] Confirm the final naming convention before the first npm release.
- [ ] Rename package metadata from `@primeuix/*` to the chosen `@wawjs/*` names.
- [ ] Update internal workspace dependencies/imports.
- [ ] Update package exports and generated metadata.
- [ ] Rename CLI/bin commands such as MCP commands where required.
- [ ] Ensure no published package accidentally claims to be an official PrimeUIX package.
- [ ] Keep API compatibility where practical even if npm package names change.

---

## Phase 4 — Repository and tooling cleanup

The fork currently inherits a large amount of upstream monorepo tooling. Audit it instead of preserving everything automatically.

### pnpm / Node

- [ ] Choose and pin one pnpm version using `packageManager`.
- [ ] Remove the separate root `pnpm` devDependency unless there is a proven reason to keep it.
- [ ] Add/verify a sensible Node.js `engines` requirement.
- [ ] Regenerate the lockfile after dependency cleanup.

### Scripts

Audit every root script and keep only workflows we actually use.

- [ ] Keep clear build commands per package.
- [ ] Keep `lint`, `lint:fix`, `format`, `format:check`, `type:check`, `test`.
- [ ] Keep release scripts only after the npm publishing strategy is finalized.
- [ ] Review/remove legacy `setup`, framework setup and global-link scripts if they are not needed.
- [ ] Do not use a `clean` script that deletes `pnpm-lock.yaml` during normal development.
- [ ] Review Angular/Vue/React development scripts after deciding the submodule strategy.

### Dependencies

- [ ] Audit every root devDependency and prove where it is used.
- [ ] Remove unused tooling.
- [ ] Upgrade dependencies only where required for maintenance/security/tool compatibility.
- [ ] Keep changes focused; do not perform an uncontrolled dependency sweep.

---

## Phase 5 — Fix linting, formatting, typing and tests

Before feature development, establish a clean baseline.

- [ ] Make `pnpm lint` pass.
- [ ] Make `pnpm format:check` pass.
- [ ] Make `pnpm type:check` pass.
- [ ] Make unit tests pass.
- [ ] Fix lint rules/configuration rather than disabling useful rules globally.
- [ ] Remove stale generated files from lint/type-check scopes where appropriate.
- [ ] Review Jest configuration and update only where needed.
- [ ] Verify Husky, commitlint and lint-staged are actually useful; remove dead hooks/config if not.
- [ ] Keep Changesets if we use it for independent package versioning/releases.

---

## Phase 6 — Build every package independently

The repository should have a clear green build matrix.

Validate at least:

- [ ] `forms`
- [ ] `headless`
- [ ] `locale`
- [ ] `mcp`
- [ ] `motion`
- [ ] `styled`
- [ ] `styles`
- [ ] `themes`
- [ ] `utils`

For each package:

- [ ] build succeeds
- [ ] type declarations are generated correctly
- [ ] exports resolve correctly
- [ ] package tarball contains only intended files
- [ ] license/README/NOTICE are included where appropriate
- [ ] package can be imported from a clean external test project

Add CI that runs build, lint, formatting, type checking and tests on pull requests.

---

## Phase 7 — Decide what to do with Angular / Vue / React submodules

The original PrimeUIX repository references PrimeNG, PrimeVue and PrimeReact because PrimeUIX was the shared foundation for all three libraries.

Those upstream repositories are now archived, so css-prime should not rely blindly on them for future development.

### Immediate priority

- [ ] Audit whether the submodules are required to build or test css-prime packages.
- [ ] Remove submodules that are only historical/development baggage and not needed by css-prime.
- [ ] Do not make css-prime releases depend on archived upstream repositories.

### Angular

- [ ] Integrate/test against `WebArtWork/ngx-prime` instead of archived PrimeNG where useful.
- [ ] Keep css-prime framework-neutral; Angular-specific code belongs in ngx-prime.

### Vue / React

- [ ] Do not start maintaining Vue/React component forks yet.
- [ ] Keep architecture generic enough that future MIT continuations can consume css-prime.
- [ ] Revisit after css-prime + ngx-prime are stable.

---

## Phase 8 — Integrate css-prime with ngx-prime

This is the main short-term reason css-prime exists.

ngx-prime currently relies on the PrimeUIX ecosystem for shared styling/runtime packages such as styled, styles, themes, utils and motion.

- [ ] Map every `@primeuix/*` dependency used by ngx-prime.
- [ ] Publish css-prime prerelease packages under `@wawjs/*`.
- [ ] Replace ngx-prime `@primeuix/*` dependencies with css-prime packages.
- [ ] Update pnpm workspace catalogs in ngx-prime.
- [ ] Build ngx-prime against css-prime only.
- [ ] Run ngx-prime library, themes, showcase, docs and tests.
- [ ] Verify there are no unintended runtime dependencies on `@primeuix/*` left in published ngx-prime packages.
- [ ] Document the relationship clearly:

`css-prime` → framework-neutral shared engine

`ngx-prime` → Angular component library

---

## Phase 9 — First public release

Do not publish `latest` until the renamed package set is validated through prereleases.

Suggested flow:

1. local workspace validation
2. npm alpha release
3. integrate alpha into ngx-prime
4. fix package/export issues
5. beta release
6. real-world ngx-prime testing
7. stable release

Tasks:

- [ ] Decide initial css-prime version strategy.
- [ ] Configure Changesets/release automation for the new package names.
- [ ] Configure npm provenance/CI publishing where practical.
- [ ] Verify package ownership under the `@wawjs` npm scope.
- [ ] Add changelog/release notes.
- [ ] Publish installation documentation.
- [ ] Add compatibility information showing the upstream PrimeUIX baseline.

A possible first fork release could be `0.8.0` or `1.0.0`; decide only after the package namespace and compatibility policy are finalized.

---

## Phase 10 — Maintenance after stabilization

Once css-prime and ngx-prime are stable:

- [ ] Fix bugs found through ngx-prime usage.
- [ ] Keep dependencies and tooling current.
- [ ] Maintain Node/browser compatibility policy.
- [ ] Improve tests around shared styling/token utilities.
- [ ] Expand documentation for package APIs.
- [ ] Accept community contributions.
- [ ] Evaluate whether `forms`, `headless`, `locale` and `mcp` should all remain first-class packages.
- [ ] Consider framework-neutral improvements that benefit Angular, Vue and React consumers equally.

---

## Later possibilities

Only after css-prime + ngx-prime are healthy:

- Continue an MIT-based Vue component library using css-prime.
- Continue an MIT-based React component library using css-prime.
- Expand the MCP package so AI coding tools understand css-prime and ngx-prime APIs directly.
- Create shared documentation/tooling for the Web Art Work open-source UI ecosystem.

These are deliberately **not** immediate priorities.

---

## Definition of done for the initial css-prime foundation

The first foundation milestone is complete when:

- [ ] Repository branding is fully css-prime / Web Art Work.
- [ ] MIT licensing and upstream attribution are clear.
- [ ] `NOTICE.md` exists.
- [ ] Package names are moved away from `@primeuix/*`.
- [ ] Root scripts/dependencies are audited and simplified.
- [ ] Lint passes.
- [ ] Formatting passes.
- [ ] Type checking passes.
- [ ] Tests pass.
- [ ] Every publishable package builds successfully.
- [ ] CI validates the repository.
- [ ] css-prime prerelease packages are published under `@wawjs/*`.
- [ ] ngx-prime builds successfully using css-prime instead of PrimeUIX packages.
- [ ] No PrimeTek branding is used as css-prime's current identity.
- [ ] Required historical attribution and trademark notices remain intact.

At that point css-prime can become the maintained MIT-licensed shared foundation underneath ngx-prime.
