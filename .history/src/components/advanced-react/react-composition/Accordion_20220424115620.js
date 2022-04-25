import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToogle from "./useToggle";

const Accordion = ({ header }) => {
  const { value: show, handleToggle: handleToggleShow } = useToogle();
  return (
    <div>
      <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
        {header} header
      </AccordionHeader>
      <AccordionContent show={show}>Accordion content</AccordionContent>
    </div>
  );
};

export default Accordion;
