import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({
  options,
  placeholder = "Please select an option",
  children,
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow((show) => !show);
  };

  return (
    <DropdownProvider>
      <div className="relative inline-block w-full max-w-[300px]">
        <div
          className="flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer placeholder"
          onClick={handleToggleDropdown}
        >
          {placeholder}
        </div>
        {children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
