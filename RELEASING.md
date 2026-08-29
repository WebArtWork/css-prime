# Releasing css-prime

css-prime packages are published manually to npm under the public `@wawjs` scope.
GitHub Actions is not used to publish releases. The monorepo uses npm workspaces
(not pnpm); `npm publish --workspaces` publishes every non-private package under
`packages/*` and automatically skips the private `playground` app.

## Version policy

The first stable release of the maintained css-prime package set is `1.0.0`.
The stable packages are versioned together by Changesets. `@wawjs/css-prime-headless`
is experimental and is released independently at `0.1.0`.

Before the first stable publish, set each stable package to `1.0.0`. Do not change
the version of a package that npm has already published; publish the next available
version instead.

## Release checklist

1. Confirm `npm whoami` identifies an account with publish access to `@wawjs`.
2. Create a changeset for the change: `npm run changeset`.
3. Apply the release versions and changelog: `npm run version:packages`.
4. Review and commit the generated version and changelog changes.
5. Dry-run the full gate and publish: `npm run publish:dry-run`.
6. Inspect each package with `npm pack --dry-run` from its package directory.
7. Publish for real: `npm run publish`.
8. Verify the package/version/tag on npm and create the matching Git tag and GitHub release notes.

For later prereleases of the experimental headless package, use an unused prerelease
version and publish only that package with `npm run publish:alpha`. npm versions are
immutable, so never reuse a published version number.

## First release prerequisites

- Record the exact upstream MIT baseline commit and create the `primeuix-mit-0.7.0` tag.
- Ensure package ownership of `@wawjs`.
- Complete the release checklist successfully.
- Include installation and compatibility notes in the release notes.
