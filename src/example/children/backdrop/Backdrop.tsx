import React, { useState } from "react";
import Backdrop from "../../../components/Backdrop/Backdrop";
import Button from "../../../components/Button/Button";
import CircleLoader from "../../../components/loaders/CircleLoader/CircleLoader";

const LoadingBackdrop = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <Backdrop open={open} onClose={() => setOpen(false)}>
          <CircleLoader />
        </Backdrop>
      ) : (
        <Button onClick={() => setOpen(true)}>Open Backdrop</Button>
      )}
    </>
  );
};

export default LoadingBackdrop;
