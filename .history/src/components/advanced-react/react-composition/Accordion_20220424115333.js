import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToogle from "./useToggle";

const Accordion = () => {
  const { value: show, handleToggle: handleToggleShow } = useToogle();
  return (
    <div>
      <AccordionHeader
        show={show}
        handleToggleShow={handleToggleShow}
      ></AccordionHeader>
      <AccordionContent show={show}></AccordionContent>
    </div>
  );
};

export default Accordion;
