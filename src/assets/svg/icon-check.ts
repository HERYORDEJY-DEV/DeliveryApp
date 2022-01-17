interface Props {
  fill?: string;
  stroke?: string;
}

export const iconCheck = (
  props?: Props,
): string => `<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke=${
  props?.stroke ?? '#6C0EE4'
} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;