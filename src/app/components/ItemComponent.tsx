import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { ItemCollection } from '@/app/commons/types/collections';

import { Star } from './icons/Star';

interface ItemComponentProps {
  item: ItemCollection;
}

export const ItemComponent: React.FC<ItemComponentProps> = ({ item }) => {
  return (
    <div className='flex flex-col h-[312px] justify-between'>
      <div className='flex flex-col h-full'>
        <Image
          src={item.imageUrl}
          width={174}
          height={174}
          alt={item.title}
          className='mb-3 rounded'
        />
        <span className='text-[15px] line-clamp-2'>{item.title}</span>
      </div>
      <div className='flex flex-col h-[100px] items-start'>
        <div className='flex flex-row items-center'>
          <span
            className={clsx(
              'text-orange text-lg',
              item.discountRate > 0 ? '' : 'hidden',
            )}
          >
            {item.discountRate}%
          </span>
          <span className='text-default-600 text-lg'>{item.finalPrice}</span>
          <span className='text-sm'>{item.symbol}</span>
        </div>
        <div
          className={clsx(
            'flex flex-row w-fit border',
            item.tagsOnDesc ? '' : 'hidden',
          )}
        >
          <span className='text-[10px] bg-[#f7f7f7]'>{item.tagsOnDesc[0]}</span>
        </div>
        <div className='flex flex-row'>
          <Star />
          <span className='text-xs'>{item.rating}</span>
        </div>
        <div
          className={clsx(
            'flex flex-row w-fit border px-[6px] py-1 gap-x-1',
            item.preface ? '' : 'hidden',
          )}
        >
          <Image
            src={item.prefaceIconUrl}
            width={14}
            height={14}
            alt={item.preface}
          />
          <span className='text-xs'>{item.preface}</span>
        </div>
      </div>
    </div>
  );
};
