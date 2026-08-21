import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const tsupCli = path.join(path.dirname(require.resolve('tsup')), 'cli-default.js');

for (const theme of ['aura', 'lara', 'material', 'nora']) {
    execFileSync(process.execPath, [tsupCli], {
        env: {
            ...process.env,
            CSS_PRIME_BUILD_TARGET: 'umd',
            CSS_PRIME_THEME: theme
        },
        stdio: 'inherit'
    });
}
