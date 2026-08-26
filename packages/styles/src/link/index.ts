export const style = /*css*/ `
    .p-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        background: transparent;
        border: 0;
        padding: 0;
        color: dt('button.link.color');
        text-decoration: none;
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition: color dt('button.transition.duration');
    }

    .p-link:not(.p-disabled):hover {
        color: dt('button.link.hover.color');
        text-decoration: underline;
    }

    .p-link:not(.p-disabled):active {
        color: dt('button.link.active.color');
    }

    .p-link:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-link.p-disabled {
        opacity: dt('disabled.opacity');
        cursor: default;
        pointer-events: none;
    }

    .p-link-icon-right {
        order: 1;
    }

    .p-link-icon-right:dir(rtl) {
        order: -1;
    }
`;
