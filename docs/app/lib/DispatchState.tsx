import { useAppDispatch } from '@/hooks/store';
import { getPageContents } from '@/store/contentBar';
import React, { useEffect } from 'react';

const DispatchState = ({
  children,
  pathname,
}: {
  children: React.ReactNode;
  pathname: string;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPageContents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return <>{children}</>;
};

export default DispatchState;
