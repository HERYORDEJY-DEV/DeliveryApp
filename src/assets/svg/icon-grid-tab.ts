interface Props {
  fill?: string;
  stroke?: string;
  isFocused: boolean;
}

export const iconGridTab = (props?: Props): string =>
  props?.isFocused
    ? `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 19H1V12H8V19Z" fill="#7203FF" fill-opacity="0.5" stroke="#7203FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19H12V12H19V19Z" fill="#7203FF" fill-opacity="0.5" stroke="#7203FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 8H12V1H19V8Z" fill="#7203FF" fill-opacity="0.5" stroke="#7203FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8H1V1H8V8Z" fill="#7203FF" fill-opacity="0.5" stroke="#7203FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    : `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1H1V8H8V1Z" stroke="#9586A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 1H12V8H19V1Z" stroke="#9586A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 12H12V19H19V12Z" stroke="#9586A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12H1V19H8V12Z" stroke="#9586A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
