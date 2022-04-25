import React from "react";
import { useCount } from "./count-context";

const Count = () => {
  const { count } = useCount();
  return (
    <span className="flex items-center justify-center flex-1 text-3xl font-medium text-white bg-blue-400">
      {count}
    </span>
  );
};

export default Count;
