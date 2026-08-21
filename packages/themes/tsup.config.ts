import { globSync } from 'glob';
import { defineConfig } from 'tsup';

const isProduction = process.env.NODE_ENV === 'production';
const buildTarget = process.env.CSS_PRIME_BUILD_TARGET ?? 'esm';
const themeName = process.env.CSS_PRIME_THEME;
const themes: string[] = [];

const entry = globSync('src/**/index.ts').reduce((acc: Record<string, string>, file: string) => {
    const name = file
        .replace(/\\/g, '/')
        .replace(/^src\//, '')
        .replace(/\.ts$/, '');
    const themeName: string | undefined = name.startsWith('presets/') ? name.split('/')?.[1] : undefined;

    if (themeName && !themes.includes(themeName)) themes.push(themeName);

    acc[name.replace(/^presets\//, '')] = file;

    return acc;
}, {});

const esmConfig = {
    entry,
    format: ['esm'],
    outDir: 'dist',
    dts: {
        entry: ['src/index.ts']
    },
    external: [/^@wawjs\/css-prime-(.*)$/],
    minify: isProduction ? 'terser' : false,
    sourcemap: isProduction,
    splitting: false,
    clean: false,
    terserOptions: {
        mangle: {
            reserved: ['theme', 'style', 'css']
        }
    }
};

const tokensConfig = {
    entry: {
        index: 'tokens.ts'
    },
    format: ['esm'],
    outDir: 'tokens',
    dts: true,
    minify: isProduction ? 'terser' : false,
    sourcemap: isProduction,
    splitting: false,
    clean: false
};

const config = (() => {
    if (buildTarget === 'umd') {
        if (!themeName || !themes.includes(themeName)) {
            throw new Error(`Unknown css-prime theme: ${themeName ?? '(not specified)'}`);
        }

        const name = themeName.charAt(0).toUpperCase() + themeName.slice(1);
        const globalName = `CssPrime.Themes.${name}`;

        return {
            entry: {
                [themeName]: `src/presets/${themeName}/index.ts`
            },
            format: ['iife'],
            outDir: 'umd',
            globalName,
            minify: 'terser',
            watch: false,
            clean: false,
            terserOptions: {
                mangle: {
                    reserved: ['theme', 'style', 'css']
                }
            },
            outExtension: () => ({ js: `.js` }),
            esbuildOptions(options) {
                options.footer = {
                    // https://github.com/egoist/tsup/issues/710
                    js: `${globalName} = ${globalName}.default || ${globalName};`
                };
            }
        };
    }

    return buildTarget === 'tokens' ? tokensConfig : esmConfig;
})();

export default defineConfig(config);
