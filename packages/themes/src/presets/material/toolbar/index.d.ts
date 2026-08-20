import type { ToolbarTokenSections } from '@wawjs/css-prime-themes/types/toolbar';

export * from '@wawjs/css-prime-themes/types/toolbar';

declare const root: ToolbarTokenSections.Root;
declare const colorScheme: ToolbarTokenSections.ColorScheme;
declare const css: ToolbarTokenSections.CSS;
declare const _default: {
    root: ToolbarTokenSections.Root;
    colorScheme: ToolbarTokenSections.ColorScheme;
    css: string;
};

export { colorScheme, css, _default as default, root };
