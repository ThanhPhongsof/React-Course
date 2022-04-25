import React from "react";

const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div
      className="p-4 border border-gray-200 cursor-pointer header"
      onClick={handleToggleShow}
    >
      <span>{children}</span>
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
