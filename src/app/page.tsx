'use client';

import Image from 'next/image';

export default function Page() {
  return (
    <main className='flex max-h-full w-full flex-col items-center justify-between p-24'>
      <Image
        className='relative dark:drop-shadow-[0_0_0.3rem_#00000070] dark:invert'
        src='/next.svg'
        alt='Next.js Logo'
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
