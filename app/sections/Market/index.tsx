'use client';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames';

import { MagnifyingGlassIcon } from '@/icons/outline';
import { StarIcon } from '@/icons/solid';
import Input from '@/components/Input';
import { getSupportedCurrencies } from '@/services/simple';
import { getMarketData } from '@/services/market';

function Market() {
  const [search, setSearch] = useState<string>('');
  const [selected, setSelected] = useState<string>();
  const { data: supportedCurrenciesData } = useQuery(
    ['getSupportedCurrencies'],
    () => getSupportedCurrencies(),
  );

  useEffect(() => {
    if (supportedCurrenciesData?.length)
      setSelected(supportedCurrenciesData[0]);
  }, [supportedCurrenciesData]);

  const { data: marketData } = useQuery(
    ['getMarketData', selected],
    () =>
      getMarketData({
        vs_currency: selected as string,
        per_page: 20,
        page: 1,
      }),
    {
      enabled: !!selected,
    },
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-3">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftAccessory={<MagnifyingGlassIcon className="h-5 w-5" />}
        />
      </div>
      <div className="h-8 flex gap-2 items-center bg-slate-200/50 dark:bg-slate-800/50 px-1 text-sm dark:text-slate-500">
        <div
          className={classNames(
            'p-1 cursor-pointer',
            !selected && 'text-sky-500',
          )}
          onClick={() => setSelected('bookmark')}
        >
          <StarIcon className="w-3 h-3" />
        </div>
        <ul className="flex flex-auto w-0 gap-2 overflow-x-auto">
          {supportedCurrenciesData?.map((item) => (
            <li
              key={item}
              className={classNames(
                'p-1 cursor-pointer uppercase',
                selected === item && 'text-sky-500 font-semibold',
              )}
              onClick={() => setSelected(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-[1_1_auto] h-0 overflow-y-auto">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-white dark:bg-slate-900">
            <tr>
              <th className="font-normal text-slate-500 px-4 py-2 text-left">
                Pairs
              </th>
              <th className="font-normal text-slate-500 px-4 py-2 text-right">
                Last Price
              </th>
              <th className="font-normal text-slate-500 px-4 py-2 text-right">
                Change
              </th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-slate-800/50">
            {marketData
              ?.filter((item) => {
                let searching = true;
                if (search) searching = item.symbol.includes(search);
                return item.symbol !== selected && searching;
              })
              .map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2">
                    <div className="flex gap-1 items-center uppercase">
                      <StarIcon className="w-3 h-3 text-gray-500" />
                      <span>
                        {item.symbol}/{selected}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-right">{item.current_price}</td>
                  <td
                    className={classNames(
                      'text-right px-4 py-2',
                      item.price_change_percentage_24h < 0
                        ? 'text-red-600'
                        : 'text-green-600',
                    )}
                  >
                    {item.price_change_percentage_24h}%
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Market;
