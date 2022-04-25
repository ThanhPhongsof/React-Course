import React from "react";

const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div className="cursor-pointer header" onClick={handleToggleShow}>
      {children}
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
