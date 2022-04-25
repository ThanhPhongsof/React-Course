import React, { useState } from "react";

// const HandleValue = () => {
//   const [value, setValue] = useState("");
//   return (
//     <div>
//       <Input value={value} setValue={setValue}></Input>
//       <DisplayValue value={value}></DisplayValue>
//     </div>
//   );
// };

const Input = ({ value, setValue } = {}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
    />
  );
};

const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};

// export default HandleValue;
export default Input;
