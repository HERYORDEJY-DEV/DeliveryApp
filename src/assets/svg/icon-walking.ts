interface Props {
  fill?: string | null | boolean;
  stroke?: string | null | boolean;
}

export const iconWalking = (
  props?: Props,
): string => `<svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.86807 3.34722C7.51624 3.34722 8.04168 2.82178 8.04168 2.17361C8.04168 1.52544 7.51624 1 6.86807 1C6.2199 1 5.69446 1.52544 5.69446 2.17361C5.69446 2.82178 6.2199 3.34722 6.86807 3.34722Z" stroke=${
  props?.stroke ?? '#2D0C57'
} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.21528 19.7778L8.21689 16.7826C8.10166 16.4369 7.90752 16.1228 7.64986 15.8651L4.52083 12.7361M4.52083 12.7361L5.69444 6.86804M4.52083 12.7361L1 19.7778M5.69444 6.86804L8.94594 10.1195C9.12433 10.2979 9.33032 10.4464 9.55597 10.5592L11.5625 11.5625M5.69444 6.86804L2.8437 8.76854C2.4094 9.05807 2.084 9.48411 1.91894 9.97929L1 12.7361" stroke=${
  props?.stroke ?? '#2D0C57'
} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
