import React from "react";
import { AccordionProvider } from "./accordion-context";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToogle from "./useToggle";

const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <div className="mb-5">
        <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
          {header}
        </AccordionHeader>
        <AccordionContent show={show}>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
