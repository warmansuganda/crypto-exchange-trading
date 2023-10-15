'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames';

import { ChevronDownIcon } from '@/icons/outline';
import StockChart from './StockChart';
import useDimensions from '@/hooks/useDimensions';
import Spinner from '@/components/Spinner';
import { getStockData } from '@/services/market';
import { MarketDataset } from '@/services/market/types';
import useInterval from '@/hooks/useInterval';
import { MARKET_DATASET } from '@/constants/market';
import Switch from '@/components/Switch';

function TradingChart() {
  const [dataset, setDataset] = useState<MarketDataset>('MINUTES');
  const [updating, setUpdating] = useState(true);
  const [length, setLength] = useState(500);
  const [chartRef, dimension] = useDimensions();
  const { data, isLoading } = useQuery(['getMarketData', dataset], () =>
    getStockData(dataset),
  );

  useInterval(() => {
    if (data && updating) {
      const newLength = length + 1;
      setLength(newLength > data.length ? 500 : newLength);
    }
  }, 1000);

  return (
    <div className="flex flex-col h-full">
      <div className="p-1 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="divide-x divide-gray-200 dark:divide-gray-700 flex gap-2 items-center">
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
          <div className="pl-2 flex gap-2 items-center">
            {MARKET_DATASET.map((item) => (
              <button
                key={item}
                className={classNames(
                  'text-xs rounded px-2 py-1 hover:bg-gray-100 hover:dark:bg-slate-800',
                  item === dataset && 'text-sky-500',
                )}
                onClick={() => setDataset(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center pr-2">
          <Switch
            label="Live"
            checked={updating}
            onChange={(e) => setUpdating(e.target.checked)}
          />
        </div>
      </div>
      <div ref={chartRef} className="h-full relative">
        {!isLoading ? (
          <StockChart
            data={data?.slice(0, length + 1)}
            width={dimension.width}
            height={dimension.height}
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default TradingChart;
