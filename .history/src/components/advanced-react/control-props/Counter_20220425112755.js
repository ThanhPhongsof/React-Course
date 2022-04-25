import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = () => {
  return (
    <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg ">
      <Decrement></Decrement>
      <span className="flex items-center justify-center flex-1 text-3xl font-medium text-white bg-blue-400">
        0
      </span>
      <Increment></Increment>
    </div>
  );
};

export default Counter;
