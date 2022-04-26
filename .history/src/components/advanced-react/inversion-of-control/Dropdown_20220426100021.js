import React, { useState } from "react";

const Dropdown = ({ options, placeholder = "Please select an option" }) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow((show) => !show);
  };

  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer placeholder"
        onClick={handleToggleDropdown}
      >
        {placeholder}
      </div>
    </div>
  );
};

export default Dropdown;
