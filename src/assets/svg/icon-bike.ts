interface Props {
  fill?: string;
  stroke?: string;
}

export const iconBike = (
  props?: Props,
): string => `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2666 3.26667C13.8926 3.26667 14.4 2.75926 14.4 2.13333C14.4 1.50741 13.8926 1 13.2666 1C12.6407 1 12.1333 1.50741 12.1333 2.13333C12.1333 2.75926 12.6407 3.26667 13.2666 3.26667Z" stroke=${
  props?.stroke ?? '#2D0C57'
} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 15.7333V11.2L7.59998 8.93333L11 5.53333L13.2666 7.79999L15.5333 8.93333" stroke=${
  props?.stroke ?? '#2D0C57'
} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.19999 18C6.07776 18 7.59999 16.4777 7.59999 14.6C7.59999 12.7222 6.07776 11.2 4.19999 11.2C2.32222 11.2 0.799988 12.7222 0.799988 14.6C0.799988 16.4777 2.32222 18 4.19999 18Z" stroke=${
  props?.stroke ?? '#2D0C57'
} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8 18C19.6777 18 21.2 16.4777 21.2 14.6C21.2 12.7222 19.6777 11.2 17.8 11.2C15.9222 11.2 14.4 12.7222 14.4 14.6C14.4 16.4777 15.9222 18 17.8 18Z" stroke=${
  props?.stroke ?? '#2D0C57'
} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
