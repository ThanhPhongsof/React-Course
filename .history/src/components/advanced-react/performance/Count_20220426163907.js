import React, { useRef, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);

  return (
    <div>
      <div className="count">{count}</div>
      <div className="renderRef">{renderRef.current++}</div>
    </div>
  );
};

export default Count;
