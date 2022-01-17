interface Props {
  fill?: string;
  stroke?: string;
  isFocused: boolean;
}

export const iconCartTab = (props?: Props): string =>
  props?.isFocused
    ? `<svg width="24" height="20" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.14288 1H22.2857L20.5715 11.2857H6.85717L5.14288 1Z" fill="#7203FF" fill-opacity="0.5" stroke="#7203FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.57145 16.9999C9.20263 16.9999 9.7143 16.4883 9.7143 15.8571C9.7143 15.2259 9.20263 14.7142 8.57145 14.7142C7.94026 14.7142 7.42859 15.2259 7.42859 15.8571C7.42859 16.4883 7.94026 16.9999 8.57145 16.9999Z" fill="#7203FF" fill-opacity="0.5" stroke="#7203FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.8572 16.9999C19.4883 16.9999 20 16.4883 20 15.8571C20 15.2259 19.4883 14.7142 18.8572 14.7142C18.226 14.7142 17.7143 15.2259 17.7143 15.8571C17.7143 16.4883 18.226 16.9999 18.8572 16.9999Z" fill="#7203FF" fill-opacity="0.5" stroke="#7203FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.14287 1H1.71429H5.14287Z" fill="#7203FF" fill-opacity="0.5"/>
<path d="M5.14287 1H1.71429" stroke="#7203FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    : `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.14282 1H22.2857L20.5714 11.2857H6.85711L5.14282 1Z" stroke="#9586A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.57145 16.9999C9.20263 16.9999 9.7143 16.4883 9.7143 15.8571C9.7143 15.2259 9.20263 14.7142 8.57145 14.7142C7.94026 14.7142 7.42859 15.2259 7.42859 15.8571C7.42859 16.4883 7.94026 16.9999 8.57145 16.9999Z" stroke="#9586A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.8571 16.9999C19.4883 16.9999 19.9999 16.4883 19.9999 15.8571C19.9999 15.2259 19.4883 14.7142 18.8571 14.7142C18.2259 14.7142 17.7142 15.2259 17.7142 15.8571C17.7142 16.4883 18.2259 16.9999 18.8571 16.9999Z" stroke="#9586A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.1428 1H1.71423" stroke="#9586A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
