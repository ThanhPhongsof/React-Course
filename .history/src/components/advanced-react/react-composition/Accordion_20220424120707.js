import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToogle from "./useToggle";

const Accordion = ({ header, children }) => {
  const { value: show, handleToggle: handleToggleShow } = useToogle();
  return (
    <div className="mb-5">
      <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
        {header}
      </AccordionHeader>
      <AccordionContent show={show}>{children}</AccordionContent>
    </div>
  );
};

export default Accordion;
