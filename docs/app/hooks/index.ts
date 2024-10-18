'use client';

import { usePathname } from 'next/navigation';

export const checkEnv = () => {
  if (typeof window === 'undefined') {
    return 'use client';
  }
};

export const useRouter = () => {
  const pathname = usePathname();

  return { pathname };
};
