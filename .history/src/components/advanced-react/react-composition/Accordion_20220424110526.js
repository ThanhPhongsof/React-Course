import React, { useState } from "react";

const Accordion = () => {
  const [show, setShow] = useState();
  const handleToggleShow = () => {
    setShow((show) => !show);
  };
  return (
    <div>
      <div className="header" onClick={handleToggleShow}>
        Accordion Header
        <span>+</span>
      </div>
      {show && <div className="content">Accordion content</div>}
    </div>
  );
};

export default Accordion;
