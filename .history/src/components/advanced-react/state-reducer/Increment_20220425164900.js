import React from "react";
import useCounter from "./useCounter";

const Increment = () => {
  const { handleIncrement  } = useCounter();
  return (
    <button className="flex items-center justify-center p-5 increment bg-slate-200" onClick={handleIncrement}>Increment</button>
      +
    </button>
  );
};

export default Increment;