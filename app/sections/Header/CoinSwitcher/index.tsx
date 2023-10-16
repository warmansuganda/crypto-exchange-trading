import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames';

import { ChevronDownIcon, MagnifyingGlassIcon } from '@/icons/outline';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { getMarketData } from '@/services/market';
import { MarketData } from '@/services/market/types';

function CoinSwitcher() {
  const [selected, setSelected] = useState<MarketData>();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<string>('');
  const { data: marketData, isLoading } = useQuery(
    ['getMarketData', 'btc'],
    () =>
      getMarketData({
        vs_currency: 'btc',
        per_page: 20,
        page: 1,
      }),
    {
      enabled: show,
    },
  );

  const currentMarket = useMemo(
    () => (!selected ? marketData?.[0] : selected),
    [selected, marketData],
  );

  if (isLoading)
    return (
      <div className="h-7 w-40 bg-gray-200 dark:bg-slate-700 animate-pulse rounded-full" />
    );

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-2 flex gap-2 items-center hover:bg-sky-400/20 w-fit"
      >
        <Image
          src={currentMarket?.image ?? ''}
          width={16}
          height={16}
          alt="btc"
        />
        <span>
          <span className="uppercase">{currentMarket?.symbol}</span> /
          <span className="ml-1">{currentMarket?.name}</span>
        </span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      <Modal title="Search Crypto" show={show} onClose={() => setShow(false)}>
        <div className="flex flex-col h-[calc(100vh-20rem)]">
          <div className="p-2">
            <Input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftAccessory={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          <hr className="dark:border-gray-600" />
          <div className="flex-auto h-0 overflow-y-auto">
            <table className="w-full text-xs">
              <thead className="sticky top-0 bg-white dark:bg-gray-700 z-10">
                <tr>
                  <th className="p-3 text-left">SYMBOL</th>
                  <th className="p-3 text-left">DESCRIPTION</th>
                  <th className="p-3 text-righ">LAST PRICE</th>
                  <th className="p-3 text-righ">CHANGE</th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-slate-800/50">
                {marketData?.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 hover:dark:bg-gray-600 cursor-pointer"
                    onClick={() => {
                      setShow(false);
                      setSelected(item);
                    }}
                  >
                    <td className="p-3 text-left uppercase">
                      <div className="flex items-center gap-2">
                        <div className="relative h-6 w-6 rounded-full overflow-hidden">
                          <Image src={item.image} fill alt="image" />
                        </div>
                        <span>{item.symbol}</span>
                      </div>
                    </td>
                    <td className="p-3 text-left">{item.name}</td>
                    <td className="p-3 text-right">{item.current_price}</td>
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
          <div className="text-center text-[10px] p-2 text-gray-500 border-t border-gray-200 rounded-b dark:border-gray-600">
            Simply start typing while on the chart to pull up this search box
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CoinSwitcher;
