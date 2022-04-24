import React, { useState } from "react";

const withLoading = (Component) => {
  return (props) => {
    const [data, setData] = useState([]);
    if (!data || data.length == 0) return <div>Loading...</div>;
    return <Component data={data} {...props}></Component>;
  };
};

export default withLoading;
