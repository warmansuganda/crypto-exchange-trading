'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

import { ArrowDownIcon, ChevronDownIcon } from '@/icons/outline';
import Dropdown from '@/components/Dropdown';
import useSocket from '@/hooks/useSocket';
import { OrderBookData } from '@/services/orderBook/types';

function OrderBook() {
  const [selected, setSelected] = useState<number>(1);
  const [buy, setBuy] = useState<OrderBookData[]>([]);
  const [sell, setSell] = useState<OrderBookData[]>([]);
  useSocket({
    onMessage: (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'buy') {
          setBuy((prev) => [...prev, data.data]);
        } else if (data.type === 'sell') {
          setSell((prev) => [...prev, data.data]);
        }
      } catch (error) {}
    },
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-1">
        <div className="text-sm font-semibold">Order Book</div>
        <Dropdown
          placement="bottom-end"
          offsetOptions={5}
          overlay={
            <ul className="bg-white w-16 rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300">
              {[100, 10, 1, 0.1, 0.01].map((item, index) => (
                <li
                  key={index}
                  className={classNames(
                    'py-1 px-2 cursor-pointer hover:text-sky-500 text-sm text-center',
                    item === selected && 'text-sky-500',
                  )}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          }
        >
          <button className="text-xs w-16 leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-2 flex gap-2 items-center justify-between hover:bg-sky-400/20">
            <span className="flex-1 text-center">{selected}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </Dropdown>
      </div>
      <div className="flex-[1_1_auto] h-0 overflow-y-auto">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-white dark:bg-slate-900">
            <tr>
              <th className="font-normal text-slate-500 px-4 py-2 text-left">
                Price(USDT)
              </th>
              <th className="font-normal text-slate-500 px-4 py-2 text-right">
                Amount(BTC)
              </th>
              <th className="font-normal text-slate-500 px-4 py-2 text-right">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-slate-800/50">
            {sell.map((item, index) => (
              <tr
                key={index}
                className="bg-gradient-to-l from-red-600/10 to-transparent"
              >
                <td className="text-red-600 px-4 py-2">{item.price}</td>
                <td className="px-4 py-2 text-right">{item.amount}</td>
                <td className="text-right px-4 py-2 ">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-1 items-center text-red-600 bg-slate-200/50 dark:bg-slate-800/50 p-2 font-bold">
        <ArrowDownIcon className="w-5 h-5" />
        <span>16,000</span>
      </div>
      <div className="flex-[1_1_auto] h-0 overflow-y-auto">
        <table className="w-full text-xs">
          <tbody className="divide-y dark:divide-slate-800/50">
            {buy.map((item, index) => (
              <tr
                key={index}
                className="bg-gradient-to-l from-green-600/10 to-transparent"
              >
                <td className="text-green-600 px-4 py-2">{item.price}</td>
                <td className="px-4 py-2 text-right">{item.amount}</td>
                <td className="text-right px-4 py-2 ">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderBook;
