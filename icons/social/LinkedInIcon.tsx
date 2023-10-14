import React from 'react';

import { IconProps } from '../types';

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2511_147)">
        <path
          d="M19.6676 3H4.32891C3.59414 3 3 3.58008 3 4.29727V19.6992C3 20.4164 3.59414 21 4.32891 21H19.6676C20.4023 21 21 20.4164 21 19.7027V4.29727C21 3.58008 20.4023 3 19.6676 3ZM8.34023 18.3387H5.66836V9.74648H8.34023V18.3387ZM7.0043 8.57578C6.14648 8.57578 5.45391 7.8832 5.45391 7.02891C5.45391 6.17461 6.14648 5.48203 7.0043 5.48203C7.85859 5.48203 8.55117 6.17461 8.55117 7.02891C8.55117 7.87969 7.85859 8.57578 7.0043 8.57578ZM18.3387 18.3387H15.6703V14.1621C15.6703 13.1672 15.6527 11.884 14.2816 11.884C12.893 11.884 12.682 12.9703 12.682 14.0918V18.3387H10.0172V9.74648H12.5766V10.9207H12.6117C12.9668 10.2457 13.8387 9.53203 15.1359 9.53203C17.8395 9.53203 18.3387 11.3109 18.3387 13.6242V18.3387V18.3387Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2511_147">
          <rect
            width="18"
            height="18"
            fill="currentColor"
            transform="translate(3 3)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedInIcon;
