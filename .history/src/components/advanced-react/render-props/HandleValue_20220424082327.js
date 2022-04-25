import React, { useState } from "react";

const HandleValue = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setValue(e.target.value)}
        className="border border-gray-500"
      />
      <DisplayValue value={value}></DisplayValue>
    </div>
  );
};

const Input = ({ value, setValue } = {}) => {
  const DisplayValue = ({ value }) => {
    return <span>{value}</span>;
  };
};

const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};

export default HandleValue;
