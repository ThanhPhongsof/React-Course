import React from "react";

const Decrement = ({ handleDecrement }) => {
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
