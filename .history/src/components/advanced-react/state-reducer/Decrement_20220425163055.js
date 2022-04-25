import React from "react";
import { useCount } from "./count-context";

const Decrement = () => {
  return (
    <button className="flex items-center justify-center p-5 decrement bg-slate-200">
      -
    </button>
  );
};

export default Decrement;
