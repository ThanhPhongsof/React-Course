import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToogle from "./useToggle";

const Accordion = () => {
  const { value, handleToggle } = useToogle();
  return (
    <div>
      <AccordionHeader handleToggle={handleToggle}></AccordionHeader>
      <AccordionContent value={value}></AccordionContent>
    </div>
  );
};

export default Accordion;
