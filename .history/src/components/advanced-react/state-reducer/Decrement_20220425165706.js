import React from "react";
import useCounter from "./useCounter";

const Decrement = () => {
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
