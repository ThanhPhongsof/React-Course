import React from "react";

const AccordionContent = ({ show, children }) => {
  return (
    <>
      {show && (
        <div className="p-4 border border-gray-200 rounded-lg content">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionContent;
