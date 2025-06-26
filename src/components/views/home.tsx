'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';

export function TokensInputs() {
  const [usdtAmount, setUsdtAmount] = useState('');
  const [hdknAmount] = useState('0.00');

  return (
    <>
      <div className='space-y-3'>
        <label className='text-sm text-zinc-300 font-medium'>
          You Pay (USDT)
        </label>
        <div className='relative'>
          <Input
            type='number'
            placeholder='0.0'
            value={usdtAmount}
            onChange={(e) => setUsdtAmount(e.target.value)}
            className='bg-black/40 border-zinc-700/50 text-white text-lg font-semibold h-14 pr-16 focus:border-emerald-500/50 focus:ring-emerald-500/20'
          />
          <div className='absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400 text-sm font-medium'>
            USDT
          </div>
        </div>
      </div>
      <div className='space-y-3'>
        <label className='text-sm text-zinc-300 font-medium'>You Receive</label>
        <div className='relative'>
          <Input
            type='text'
            value={hdknAmount}
            readOnly
            className='bg-emerald-500/10 border-emerald-500/30 text-emerald-400 text-lg font-semibold h-14 pr-16'
          />
          <div className='absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-400 text-sm font-medium'>
            HDKN
          </div>
        </div>
      </div>
    </>
  );
}
