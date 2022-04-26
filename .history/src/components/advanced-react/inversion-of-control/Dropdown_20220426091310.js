import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow((show) => !show);
  };

  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer placehoder"
        onClick={handleToggleDropdown}
      >
        Please select an option
      </div>
      {show && (
        <div className="border border-gray-300 rounded options">
          {options &&
            options?.map((item) => (
              <div className="p-4 cursor-pointer option-item">{item.title}</div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
