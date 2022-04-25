import React from "react";

const Decrement = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center p-5 decrement bg-slate-200"
      onClick={onClick}
    >
      -
    </button>
  );
};

export default Decrement;
