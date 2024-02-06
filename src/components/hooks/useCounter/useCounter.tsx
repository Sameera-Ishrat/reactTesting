import React, { useState } from "react";
import {UseCounterProps} from "./UseCounter.types";

export const useCounter = ({initialCount = 0}: UseCounterProps) => {
  const [count, setCount] = useState(initialCount);
  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementCounter = () => {
    if (count <= 0) return;
    setCount((prevCount) => prevCount - 1);
  };
  return {count , incrementCounter, decrementCounter};
};
