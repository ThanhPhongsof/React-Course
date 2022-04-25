import React from "react";
import { useCount } from "./count-context";

const Decrement = () => {
  const { handleDecrement } = useCount();
  return (
    <button
      className="flex items-center justify-center p-5 decrement bg-slate-200"
      onClick={handleDecrement}
    >
      -
    </button>
  );
};

export default Decrement;
