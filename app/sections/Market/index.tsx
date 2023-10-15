import React from 'react';

import { MagnifyingGlassIcon } from '@/icons/outline';
import { StarIcon } from '@/icons/solid';
import Input from '@/components/Input';

function Market() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-3">
        <Input
          placeholder="Search"
          leftAccessory={<MagnifyingGlassIcon className="h-5 w-5" />}
        />
      </div>
      <ul className="flex items-center gap-2 bg-slate-200/50 dark:bg-slate-800/50 px-1 text-sm dark:text-slate-500">
        <li className="p-1 cursor-pointer">
          <StarIcon className="w-3 h-3" />
        </li>
        <li className="p-1 cursor-pointer text-sky-500 dark:text-white font-semibold">
          BTC
        </li>
        <li className="p-1">ETH</li>
        <li className="p-1">NEO</li>
        <li className="p-1">USTD</li>
        <li className="p-1">DAI</li>
      </ul>
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
            {Array(100)
              .fill(1)
              .map((_, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">
                    <div className="flex gap-1 items-center">
                      <StarIcon className="w-3 h-3 text-gray-500" /> ETH/BTC
                    </div>
                  </td>
                  <td className="px-4 py-2 text-right">0.00020255</td>
                  <td className="text-red-600 text-right px-4 py-2 ">-2.58%</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Market;
