import type { StyleOptions } from '@wawjs/css-prime-styled';
import type { InputTextTokenSections } from '@wawjs/css-prime-themes/types/inputtext';

export * from '@wawjs/css-prime-themes/types/inputtext';

declare const root: InputTextTokenSections.Root;
declare const css: InputTextTokenSections.CSS;
declare const _default: {
    root: InputTextTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
