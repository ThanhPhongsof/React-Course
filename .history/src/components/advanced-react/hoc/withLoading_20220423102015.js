import React, { useState } from "react";

const WithLoading = (Component) => {
  const [data, setData] = useState([]);

  return (props) => {
    return <Component {...props}></Component>;
  };
};

export default WithLoading;
