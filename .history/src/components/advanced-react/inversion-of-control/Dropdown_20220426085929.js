import React from "react";

const Dropdown = () => {
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer placehoder">
        Please select an option
      </div>
      <div className="border border-gray-300 rounded options">
        <div className="p-4 cursor-pointer option-item">Frontend</div>
      </div>
    </div>
  );
};

export default Dropdown;
