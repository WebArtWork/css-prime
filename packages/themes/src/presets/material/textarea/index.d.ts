import type { StyleOptions } from '@wawjs/css-prime-styled';
import type { TextareaTokenSections } from '@wawjs/css-prime-themes/types/textarea';

export * from '@wawjs/css-prime-themes/types/textarea';

declare const root: TextareaTokenSections.Root;
declare const css: TextareaTokenSections.CSS;
declare const _default: {
    root: TextareaTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
