import React from "react";

const Counter = () => {
  return (
    <div className="flex w-full max-w-[200px] mx-auto my-5 border-gray-300 rounded-lg ">
      <button className="flex items-center justify-center p-3 decrement">
        -
      </button>
      <span>0</span>
      <button className="flex items-center justify-center p-3 increment">
        +
      </button>
    </div>
  );
};

export default Counter;
