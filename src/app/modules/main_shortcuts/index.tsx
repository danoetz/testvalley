import Image from 'next/image';
import { useEffect, useState } from 'react';

import { IsBreakpoint } from '@/app/commons/helpers';
import { ShortcutProps } from '@/app/commons/types/shortcuts';
import { getMainShortcuts } from '@/app/services/shortcuts';

export default function MainShortcuts() {
  const [mainShortcuts, setMainShortcuts] = useState<ShortcutProps[]>([]);
  const isDesktop = IsBreakpoint();

  useEffect(() => {
    getMainShortcuts()
      .then((value) => {
        console.log(value.data);
        const dataRaw = value.data;
        if (Array.isArray(dataRaw)) {
          setMainShortcuts(dataRaw);
        } else {
          console.error('Invalid data format:', dataRaw);
        }
      })
      .catch((error) => {
        console.error('Error fetching banners:', error);
      });
  }, []);

  return (
    <section className='wrapper grid grid-cols-5 lg:grid-cols-10 gap-x-3 gap-y-6 lg:gap-0 px-5 lg:px-0 lg:mt-10 py-4 text-center justify-center'>
      {mainShortcuts.map((item, i) => {
        return (
          <a key={i} className='lg:mx-[18px]' href={item.linkUrl}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={isDesktop ? 62 : 48}
              height={isDesktop ? 62 : 48}
            />
            <span className='text-shortcut mt-2'>{item.title}</span>
          </a>
        );
      })}
    </section>
  );
}
