import React, { useState } from "react";

const Accordion = () => {
  const [show, setShow] = useState();
  const handleToggleShow = () => {
    setShow((show) => !show);
  };
  return (
    <div>
      <div className="header">
        Accordion Header
        <span>+</span>
      </div>
      <div className="content">Accordion content</div>
    </div>
  );
};

export default Accordion;
