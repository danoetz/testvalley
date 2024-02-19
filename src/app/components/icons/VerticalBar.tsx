import React from 'react';
import Image from 'next/image';

export const VerticalBar = () => {
  return (
    <Image
      src='/icons/vertical-bar.svg'
      alt='Vertical Bar'
      width={1}
      height={14}
      className={'relative'}
    />
  );
};
