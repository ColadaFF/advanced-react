import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const ButtonCounter = () => {
  const [state, setState] = useState(0);
  const incrementCounter = () => {
    setState(state + 1);
  };
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={incrementCounter}
    >
      Click Here! {state}
    </Button>
  );
};

export default ButtonCounter;
