# css-prime

**css-prime** is an independent, MIT-licensed continuation of the archived [PrimeUIX](https://github.com/primefaces/primeuix) codebase, maintained by [Web Art Work](https://github.com/WebArtWork).

## Why this exists

PrimeUIX was the shared, framework-neutral foundation underneath PrimeNG, PrimeVue and PrimeReact. Its final open-source state was released under the MIT license before the upstream repository was archived and development moved elsewhere.

css-prime continues that final MIT-licensed foundation as open source, so it can keep serving as the framework-neutral styling/runtime engine behind [`ngx-prime`](https://github.com/WebArtWork/ngx-prime), and potentially future Vue and React integrations.

See [ROADMAP.md](./ROADMAP.md) for the current state of the project and what's planned.

## Packages

- `@wawjs/css-prime-forms`
- `@wawjs/css-prime-headless` (experimental, `0.1.0`)
- `@wawjs/css-prime-locale`
- `@wawjs/css-prime-mcp`
- `@wawjs/css-prime-motion`
- `@wawjs/css-prime-styled`
- `@wawjs/css-prime-styles`
- `@wawjs/css-prime-themes`
- `@wawjs/css-prime-utils`

## Installation

Install only the packages your integration needs. For example:

```bash
pnpm add @wawjs/css-prime-styled @wawjs/css-prime-styles @wawjs/css-prime-themes @wawjs/css-prime-utils
```

The first stable css-prime package set is `1.0.0`. The `headless` package remains
experimental at `0.1.0`. See [RELEASING.md](./RELEASING.md)
for the manual npm release process and [NOTICE.md](./NOTICE.md) for the PrimeUIX `0.7.0`
compatibility baseline.

## Attribution

css-prime is derived from the MIT-licensed PrimeUIX codebase. Original work is attributed to PrimeTek Informatics and the PrimeUIX contributors. See [NOTICE.md](./NOTICE.md) and [LICENSE](./LICENSE) for details.

css-prime is not affiliated with, sponsored by, or endorsed by PrimeTek Informatics, PrimeUI, or PrimeUIX.

## License

MIT — see [LICENSE](./LICENSE).
