import React, { useState } from "react";
import useToogle from "./useToggle";

const Accordion = () => {
  const { value, handleToggle } = useToogle();
  return (
    <div>
      <div className="header" onClick={handleToggle}>
        Accordion Header
        <span>+</span>
      </div>
      {value && <div className="content">Accordion content</div>}
    </div>
  );
};

export default Accordion;
