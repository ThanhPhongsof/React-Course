import React from "react";

const AccordionHeader = ({ show, handleToggleShow }) => {
  return (
    <div className="header" onClick={handleToggleShow}>
      Accordion Header
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;
