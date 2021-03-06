import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const DropDown = () => {
  const { show, handleShow, nodeRef } = useClickOutSide();

  return (
    <div className="relative w-full max-w-[400px]" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={handleShow}
      >
        Selected
      </div>
      {show && (
        <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">AngularJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
