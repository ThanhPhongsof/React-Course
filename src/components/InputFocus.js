import React, { useRef, useEffect } from "react";

const InputFocus = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);
  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border border-gray-200 focus:border-blue-200"
      />
    </div>
  );
};

export default InputFocus;
