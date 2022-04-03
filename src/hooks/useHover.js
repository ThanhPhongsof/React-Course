import { useState, useRef, useEffect } from "react";

export default function useHover() {
  // mouseover --> mouseout
  const [hoverd, setHovered] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleMouseOver() {
      setHovered(true);
    }

    function handleMouseOut() {
      setHovered(false);
    }

    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return {
    hoverd,
    nodeRef,
  };
}
