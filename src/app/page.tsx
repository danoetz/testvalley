'use client';

import Image from 'next/image';

import Banner from '@/app/modules/banner/index';

export default function Page() {
  return (
    <main className='flex flex-col wrapper mx-auto justify-between gap-10'>
      <Banner />
      <div className='flex flex-col items-center px-24 gap-10'>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#00000070] dark:invert'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
        <div className='h-[1000px]'></div>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#00000070] dark:invert'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
