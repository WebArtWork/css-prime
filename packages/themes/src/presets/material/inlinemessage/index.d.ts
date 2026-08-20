import type { InlineMessageTokenSections } from '@wawjs/css-prime-themes/types/inlinemessage';

export * from '@wawjs/css-prime-themes/types/inlinemessage';

declare const root: InlineMessageTokenSections.Root;
declare const text: InlineMessageTokenSections.Text;
declare const icon: InlineMessageTokenSections.Icon;
declare const colorScheme: InlineMessageTokenSections.ColorScheme;
declare const css: InlineMessageTokenSections.CSS;
declare const _default: {
    root: InlineMessageTokenSections.Root;
    text: InlineMessageTokenSections.Text;
    icon: InlineMessageTokenSections.Icon;
    colorScheme: InlineMessageTokenSections.ColorScheme;
    css: string;
};

export { colorScheme, css, _default as default, icon, root, text };
