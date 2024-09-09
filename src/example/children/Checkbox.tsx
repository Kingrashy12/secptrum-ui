import React, { useState } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";

const CheckBox = () => {
  const [check, setCheck] = useState(false);

  function onCheck() {
    setCheck(!check);
  }
  return <Checkbox checked={check} onCheck={onCheck} />;
};

export default CheckBox;
