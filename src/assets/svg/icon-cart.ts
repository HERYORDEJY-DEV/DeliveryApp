interface Props {
  fill?: string;
  stroke?: string;
}

export const iconCart = (
  props?: Props,
): string => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.28571 4.16669H18.5714L17.1428 12.7381H5.71428L4.28571 4.16669Z" stroke=${
      props?.stroke ?? 'white'
    } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.14284 17.5C7.66883 17.5 8.09522 17.0736 8.09522 16.5476C8.09522 16.0216 7.66883 15.5952 7.14284 15.5952C6.61686 15.5952 6.19046 16.0216 6.19046 16.5476C6.19046 17.0736 6.61686 17.5 7.14284 17.5Z" stroke=${
      props?.stroke ?? 'white'
    } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.7143 17.5C16.2403 17.5 16.6667 17.0736 16.6667 16.5476C16.6667 16.0216 16.2403 15.5952 15.7143 15.5952C15.1883 15.5952 14.7619 16.0216 14.7619 16.5476C14.7619 17.0736 15.1883 17.5 15.7143 17.5Z" stroke=${
      props?.stroke ?? 'white'
    } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.2857 4.16669H1.42856" stroke=${
      props?.stroke ?? 'white'
    } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
