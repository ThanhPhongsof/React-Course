import React from "react";

const Counter = () => {
  return (
    <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg ">
      <button className="flex items-center justify-center p-5 decrement bg-slate-200">
        -
      </button>
      <span className="flex items-center justify-center flex-1 text-3xl font-medium text-white bg-blue-200">
        0
      </span>
      <button className="flex items-center justify-center p-5 increment bg-slate-200">
        +
      </button>
    </div>
  );
};

export default Counter;
