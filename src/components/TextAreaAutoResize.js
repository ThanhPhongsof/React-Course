import React, { useState, useRef, useEffect } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (e) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setText(e.target.value);
  };

  useEffect(() => {
    setTextAreaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5" style={{ minHeight: parentHeight }}>
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-400 resize-none leading-normal"
        placeholder="Please enter your content..."
        ref={textareaRef}
        value={text}
        style={{ height: textareaHeight }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
