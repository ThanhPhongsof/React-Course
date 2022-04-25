import React from "react";

const Increment = ({ handleIncrement }) => {
  return (
    <button
      className="flex items-center justify-center p-5 increment bg-slate-200"
      onClick={handleIncrement}
    >
      +
    </button>
  );
};

export default Increment;
