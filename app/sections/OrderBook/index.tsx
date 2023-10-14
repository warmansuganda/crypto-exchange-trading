import React from 'react';

import { ChevronDownIcon } from '@/icons/outline';

function OrderBook() {
  return (
    <div>
      <div className="flex justify-between items-center p-1">
        <div className="text-sm font-semibold">Order Book</div>
        <button className="text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-2 flex gap-2 items-center hover:bg-sky-400/20 w-fit">
          <span>0.1</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default OrderBook;
