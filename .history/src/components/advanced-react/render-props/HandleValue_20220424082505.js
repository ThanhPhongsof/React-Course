import React, { useState } from "react";

const HandleValue = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <DisplayValue value={value}></DisplayValue>
    </div>
  );
};

const Input = ({ value, setValue } = {}) => {
  return (
    <input
      type="text"
      name=""
      id=""
      onChange={(value) => setValue(value)}
      className="border border-gray-500"
    />
  );
};

const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};

export default HandleValue;
