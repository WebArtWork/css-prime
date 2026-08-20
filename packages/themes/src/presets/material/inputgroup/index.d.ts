import type { StyleOptions } from '@wawjs/css-prime-styled';
import type { InputGroupTokenSections } from '@wawjs/css-prime-themes/types/inputgroup';

export * from '@wawjs/css-prime-themes/types/inputgroup';

declare const addon: InputGroupTokenSections.Addon;
declare const css: InputGroupTokenSections.CSS;
declare const _default: {
    addon: InputGroupTokenSections.Addon;
    css: (options: StyleOptions) => string;
};

export { addon, css, _default as default };
