import React, { useState } from "react";

const Accordion = () => {
  const [show, setShow] = useState();
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
