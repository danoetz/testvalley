import React from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

interface DiscountIconProps extends Omit<ImageProps, 'src' | 'alt'> {
  className?: string;
}

export const DiscountIcon: React.FC<DiscountIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <Image
      src='/icons/discount.svg'
      alt='Search'
      width={28}
      height={28}
      className={clsx('relative', className)}
      {...rest}
    />
  );
};
