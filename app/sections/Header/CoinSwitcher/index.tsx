import React from 'react';
import Image from 'next/image';

import { ChevronDownIcon } from '@/icons/outline';

function CoinSwitcher() {
  return (
    <button className="text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-2 flex gap-2 items-center hover:bg-sky-400/20 w-fit">
      <Image src="/images/crypto/btc.svg" width={16} height={16} alt="btc" />
      <span>Bitcoin / U.S. Dollar</span>
      <ChevronDownIcon className="w-4 h-4" />
    </button>
  );
}

export default CoinSwitcher;
