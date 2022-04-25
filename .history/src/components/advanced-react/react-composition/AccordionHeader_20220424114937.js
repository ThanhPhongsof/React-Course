import React from "react";

const AccordionHeader = ({ handleToggle }) => {
  return (
    <div className="header" onClick={handleToggle}>
      Accordion Header
      <span>+</span>
    </div>
  );
};

export default AccordionHeader;
