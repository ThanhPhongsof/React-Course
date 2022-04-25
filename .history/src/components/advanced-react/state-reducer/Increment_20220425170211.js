import React from "react";

const Increment = ({ onClick, ...props }) => {
  return (
    <button
      className="flex items-center justify-center p-5 increment bg-slate-200"
      onClick={onClick}
      {...props}
    >
      +
    </button>
  );
};

export default Increment;
