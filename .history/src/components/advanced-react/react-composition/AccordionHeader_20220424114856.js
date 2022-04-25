import React from "react";

const AccordionHeader = () => {
  return (
    <div className="header" onClick={handleToggle}>
      Accordion Header
      <span>+</span>
    </div>
  );
};

export default AccordionHeader;
