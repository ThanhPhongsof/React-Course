import React from "react";

const AccordionContent = ({ show }) => {
  return show && <div className="content">Accordion content</div>;
};

export default AccordionContent;
