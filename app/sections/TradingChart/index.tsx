'use client';

import Image from 'next/image';
import React from 'react';

import { ChevronDownIcon } from '@/icons/outline';
import StockChart from './StockChart';
import useDimensions from '@/hooks/useDimensions';

function TradingChart() {
  const [chartRef, dimension] = useDimensions();
  return (
    <div className="flex flex-col h-full">
      <div className="p-1 border-b border-gray-200 dark:border-gray-700">
        <button className="text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-2 flex gap-2 items-center hover:bg-sky-400/20 w-fit">
          <Image
            src="/images/crypto/btc.svg"
            width={16}
            height={16}
            alt="btc"
          />
          <span>Bitcoin / U.S. Dollar</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>
      <div ref={chartRef} className="h-full relative">
        <StockChart width={dimension.width} height={dimension.height} />
      </div>
    </div>
  );
}

export default TradingChart;
