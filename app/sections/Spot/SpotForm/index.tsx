'use client';
import React, { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/Input';
import { SpotFormInput, SpotFormProps } from './types';
import Button from '@/components/Button';
import useSocket from '@/hooks/useSocket';

function SpotForm({ type }: SpotFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SpotFormInput>();
  const { sendMessage } = useSocket();

  const price = watch('price');
  const amount = watch('amount');
  const total = useMemo(() => {
    return (price ?? 0) * (amount ?? 0);
  }, [amount, price]);

  const onSubmit: SubmitHandler<SpotFormInput> = (data) => {
    sendMessage(
      JSON.stringify({
        type,
        data: { ...data, total },
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3">
        <Input
          type="number"
          rightAccessory="BTC"
          placeholder="Price"
          aria-invalid={errors.price ? 'true' : 'false'}
          {...register('price', { required: true })}
        />
        <Input
          type="number"
          rightAccessory="ETH"
          placeholder="Amount"
          aria-invalid={errors.amount ? 'true' : 'false'}
          {...register('amount', { required: true })}
        />
      </div>
      <div className="mt-2 mb-4">
        {[25, 50, 75, 100].map((item) => (
          <span
            key={item}
            className="bg-gray-100 text-gray-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            {item}%
          </span>
        ))}
      </div>
      <div>
        <Input
          type="number"
          readOnly
          value={total > 0 ? total : undefined}
          rightAccessory="BTC"
          placeholder="Total"
        />
      </div>
      <Button
        variant={type === 'buy' ? 'green' : 'red'}
        className="capitalize mt-3"
      >
        {type}
      </Button>
    </form>
  );
}

export default SpotForm;
