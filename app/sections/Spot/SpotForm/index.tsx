'use client';
import React, { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/Input';
import { SpotFormInput, SpotFormProps } from './types';
import Button from '@/components/Button';
import useSocket from '@/hooks/useSocket';
import Progress from '@/components/Progress';

function SpotForm({ type }: SpotFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SpotFormInput>();
  const { sendMessage } = useSocket();

  const available = 60;
  const price = watch('price');
  const amount = watch('amount');

  const total = useMemo(() => {
    return (price ?? 0) * (amount ?? 0);
  }, [amount, price]);

  const percentage = useMemo(() => {
    if (total > 0) {
      return (total / available) * 100;
    }
    return 0;
  }, [total]);

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
      <div className="flex justify-between text-xs mb-1">
        <div className="dark:text-slate-500">Avlb</div>
        <div>{available} BTC</div>
      </div>
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
        <Progress value={percentage} />
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
