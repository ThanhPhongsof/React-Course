import React from "react";

const AccordionContent = ({ show, children }) => {
  return (
    <>
      show && <div className="content">{children}</div>;
    </>
  );
};

export default AccordionContent;
