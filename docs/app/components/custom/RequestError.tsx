'use client';

import React from 'react';
import { Button, Stack } from 'secptrum-ui';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { loadShowCases } from '@/store/showcase';
import { BiSolidMessageSquareError } from 'react-icons/bi';

const RequestErr = () => {
  const dispatch = useAppDispatch();
  const showcaseState = useAppSelector((state) => state.showcases);
  const errMsg =
    typeof showcaseState.fetchError === 'string'
      ? showcaseState.fetchError
      : 'Error fetching showcases';

  return (
    <Stack spacing="lg">
      <BiSolidMessageSquareError color="red" size={80} />
      <p className="empty-list">{errMsg}</p>
      <Button radius="lg" onClick={() => dispatch(loadShowCases())}>
        Retry
      </Button>
    </Stack>
  );
};

export default RequestErr;
