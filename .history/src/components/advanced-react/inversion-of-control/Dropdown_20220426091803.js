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
      {show && (
        <div className="border border-gray-300 rounded options">
          <input type="text" placeholder="Seach your job" className="p-4" />
          {options &&
            options?.map((item) => (
              <div
                key={item.title}
                className="p-4 cursor-pointer option-item"
                onClick={item.onClick}
              >
                {item.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
