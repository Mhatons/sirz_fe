export const PersonIcon = () => (
    <svg width="54" height="54" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 31.5C48.7655 31.5 54.25 26.0155 54.25 19.25C54.25 12.4845 48.7655 7 42 7C35.2345 7 29.75 12.4845 29.75 19.25C29.75 26.0155 35.2345 31.5 42 31.5Z" fill="#F29254" stroke="#F29254" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 71.75C7 56.2852 21.1033 43.75 38.5 43.75" stroke="#F29254" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M55.7375 49C52.017 49 49 52.5158 49 56.8505C49 64.7028 56.9625 71.8393 61.25 73.5C65.5375 71.8393 73.5 64.7028 73.5 56.8505C73.5 52.5175 70.483 49 66.7625 49C64.484 49 62.4698 50.3178 61.25 52.3355C60.0302 50.3178 58.016 49 55.7375 49Z" fill="#F29254" stroke="#F29254" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );

  export const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
  
  export const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
      <circle cx="12" cy="12" r="12" fill="green" />
      <path d="M9 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
  
  export const Spinner = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25">
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="white"
        stroke-width="4"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray="31.4 31.4"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  
  )
  
  export const HamBurger = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38">
      <rect x="3" y="6" width="18" height="2" fill="black" />
      <rect x="3" y="11" width="18" height="2" fill="black" />
      <rect x="3" y="16" width="18" height="2" fill="black" />
    </svg>
  )
  
  export const RequiredIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="7" height="7" fill="red">
      <path d="M25 2c1.1 0 2 .9 2 2v16.5l13.3-7.7c1-.6 2.3-.2 2.9.9s.2 2.3-.9 2.9L29 25l13.3 7.7c1 .6 1.4 1.9.9 2.9-.6 1-1.9 1.4-2.9.9L27 31.5V48c0 1.1-.9 2-2 2s-2-.9-2-2V31.5l-13.3 7.7c-1 .6-2.3.2-2.9-.9-.6-1-.2-2.3.9-2.9L21 25l-13.3-7.7c-1-.6-1.4-1.9-.9-2.9s1.9-1.4 2.9-.9L23 20.5V4c0-1.1.9-2 2-2z" />
    </svg>
  )