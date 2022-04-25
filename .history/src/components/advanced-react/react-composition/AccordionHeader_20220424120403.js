import React from "react";

const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div className="cursor-pointer header" onClick={handleToggleShow}>
      <span>{children}</span>
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
