import React from 'react';
import { Backdrop, CircularProgress } from 'secptrum-ui';

const RequestLoader = ({ loading }: { loading: boolean }) => {
  return (
    <Backdrop centerContent open={loading} onClose={() => {}}>
      <CircularProgress />
    </Backdrop>
  );
};

export default RequestLoader;
