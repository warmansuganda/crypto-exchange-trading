import React, { useState } from 'react';
import Image from 'next/image';

import { ChevronDownIcon } from '@/icons/outline';
import Modal from '@/components/Modal';

function CoinSwitcher() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-2 flex gap-2 items-center hover:bg-sky-400/20 w-fit"
      >
        <Image src="/images/crypto/btc.svg" width={16} height={16} alt="btc" />
        <span>Bitcoin / U.S. Dollar</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      <Modal title="Search Crypto" show={show} onClose={() => setShow(false)}>
        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
        <div className="text-center text-[10px] p-2 text-gray-500 border-t border-gray-200 rounded-b dark:border-gray-600">
          Simply start typing while on the chart to pull up this search box
        </div>
      </Modal>
    </>
  );
}

export default CoinSwitcher;
