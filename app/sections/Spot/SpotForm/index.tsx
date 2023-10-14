import React from 'react';

import Input from '@/components/Input';
import { SpotFormProps } from './types';
import Button from '@/components/Button';

function SpotForm({ type }: SpotFormProps) {
  return (
    <form>
      <div className="space-y-3">
        <Input rightAccessory="BTC" />
        <Input rightAccessory="ETH" />
      </div>
      <div className="mt-3 mb-4">
        {[25, 50, 75, 100].map((item) => (
          <span
            key={item}
            className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            {item}%
          </span>
        ))}
      </div>
      <div className="text-xs">
        <p>
          Available: <span>0 BTC = 0 USD</span>
        </p>
        <p>
          Volume: <span>0 BTC = 0 USD</span>
        </p>
        <p>
          Margin: <span>0 BTC = 0 USD</span>
        </p>
        <p>
          Fee: <span>0 BTC = 0 USD</span>
        </p>
      </div>
      <Button variant={type === 'buy' ? 'green' : 'red'} className="capitalize">
        {type}
      </Button>
    </form>
  );
}

export default SpotForm;
