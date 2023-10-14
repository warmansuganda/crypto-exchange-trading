import React from 'react';

import { IconProps } from '../types';

function ChatBubbleOvalLeftPlusIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 12C21 16.556 16.97 20.25 12 20.25C11.1372 20.251 10.278 20.1377 9.445 19.913C8.27076 20.7389 6.83833 21.1141 5.41 20.97C5.25119 20.9547 5.09307 20.933 4.936 20.905C5.42887 20.3241 5.76547 19.6272 5.914 18.88C6.004 18.423 5.781 17.979 5.447 17.654C3.93 16.178 3 14.189 3 12C3 7.444 7.03 3.75 12 3.75C16.97 3.75 21 7.444 21 12Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 9C12 11.3431 12 15 12 15M15 12C15 12 11.3431 12 9 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ChatBubbleOvalLeftPlusIcon;
