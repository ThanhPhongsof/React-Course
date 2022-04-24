import React, { useState } from "react";

const withLoading = (Component) => {
  return (props) => {
    const [data, setData] = useState([]);
    return <Component {...props}></Component>;
  };
};

export default withLoading;
