import React from "react";

const Option = (props) => {
  return (
    <div className="flex items-center justify-between p-4 cursor-pointer option-item">
      {props.children}
    </div>
  );
};

export default Option;
