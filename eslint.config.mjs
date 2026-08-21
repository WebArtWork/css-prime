import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint';

export default tseslint.config([
    {
        ignores: ['**/dist/**', '**/node_modules/**', '**/umd/**', '**/tokens/**']
    },
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'error'
        }
    },
    {
        files: ['**/__tests__/**/*', '**/*.test.*'],
        extends: [jest.configs['flat/recommended']],
        rules: {}
    },
    {
        files: ['**/*.{ts,mts,d.ts}'],
        extends: [eslint.configs.recommended, tseslint.configs.recommended, prettierConfig],
        rules: {
            'no-console': 'error',
            'no-debugger': 'error',
            'no-fallthrough': 'off',
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                { blankLine: 'any', prev: ['case', 'default'], next: 'break' },
                { blankLine: 'any', prev: 'case', next: 'case' },
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: 'block', next: '*' },
                { blankLine: 'always', prev: '*', next: 'block' },
                { blankLine: 'always', prev: 'block-like', next: '*' },
                { blankLine: 'always', prev: '*', next: 'block-like' },
                { blankLine: 'always', prev: ['import'], next: ['const', 'let', 'var'] }
            ]
        }
    },
    {
        files: ['**/*.{js,mjs}'],
        extends: [eslint.configs.recommended, prettierConfig],
        languageOptions: {
            globals: {
                process: 'readonly'
            }
        },
        rules: {
            'no-console': 'error',
            'no-debugger': 'error',
            'no-fallthrough': 'off',
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
                { blankLine: 'any', prev: ['case', 'default'], next: 'break' },
                { blankLine: 'any', prev: 'case', next: 'case' },
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: 'block', next: '*' },
                { blankLine: 'always', prev: '*', next: 'block' },
                { blankLine: 'always', prev: 'block-like', next: '*' },
                { blankLine: 'always', prev: '*', next: 'block-like' },
                { blankLine: 'always', prev: ['import'], next: ['const', 'let', 'var'] }
            ]
        }
    }
]);
