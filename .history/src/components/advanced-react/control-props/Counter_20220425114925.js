import React, { useState } from "react";
import Count from "./Count";
import { CountProvider } from "./count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = ({ value = null, initialValue = 0, onChange }) => {
  const [count, setCount] = useState(initialValue);
  const isControlled = value != null && !!onChange;
  return (
    <CountProvider value={{}}>
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg ">
        <Decrement></Decrement>
        <Count></Count>
        <Increment></Increment>
      </div>
    </CountProvider>
  );
};

export default Counter;
