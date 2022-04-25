import React from "react";

const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div
      className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer header"
      onClick={handleToggleShow}
    >
      <span>{children}</span>
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
