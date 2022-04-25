import React from "react";

const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div className="header" onClick={handleToggleShow}>
      {children}
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
