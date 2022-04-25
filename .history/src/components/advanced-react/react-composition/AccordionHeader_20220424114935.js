import React from "react";
import useToogle from "./useToggle";

const AccordionHeader = ({ handleToggle }) => {
  return (
    <div className="header" onClick={handleToggle}>
      Accordion Header
      <span>+</span>
    </div>
  );
};

export default AccordionHeader;
