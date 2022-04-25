import React, { useState } from "react";
import useToogle from "./useToggle";

const Edittable = () => {
  const { value: edit, handleToggle: handleToggleEdit } = useToogle();
  return (
    <div>
      {edit && (
        <input type="text" className="border" placeholder="keyword...." />
      )}
      <button onClick={handleToggleEdit}>Open Edit</button>
    </div>
  );
};

export default Edittable;
