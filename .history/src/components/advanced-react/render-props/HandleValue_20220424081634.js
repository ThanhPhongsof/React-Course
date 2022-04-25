import React, { useState } from "react";

const HandleValue = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <DisplayValue value={value}></DisplayValue>
    </div>
  );
};

const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};

export default HandleValue;
