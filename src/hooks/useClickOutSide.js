import { useState, useEffect, useRef } from "react";

export default function useClickOutSide(dom = "button") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  const handleShow = () => {
    setShow((show) => !show);
  };

  console.log(show);

  useEffect(() => {
    function handleClickOutDropDown(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutDropDown);
    return () => {
      document.removeEventListener("click", handleClickOutDropDown);
    };
  });

  return {
    show,
    handleShow,
    nodeRef,
  };
}
