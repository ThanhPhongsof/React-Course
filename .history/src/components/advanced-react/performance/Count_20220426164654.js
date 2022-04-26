import React, { useRef, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);

  return (
    <div>
      <div className="count">Count: {count}</div>
      <div className="renderRef">RenderRef: {renderRef.current++}</div>
      <button
        className="p-3 text-white bg-blue-400 rounded-lg"
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Count;
