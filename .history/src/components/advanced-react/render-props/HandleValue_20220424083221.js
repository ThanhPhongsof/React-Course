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
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typing your keyword..."
        className="border max-w-[500px] p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
      />
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <span className="text-3xl font-bold text-blue-500">{value}</span>;
};

// export default HandleValue;
export default Input;
