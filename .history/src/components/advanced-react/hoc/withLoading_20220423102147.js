import React, { useState } from "react";

const withLoading = (Component) => {
  return (props) => {
    const [data, setData] = useState([]);
    if (!data || data.length == 0) return <div>Loading...</div>;
    return <Component {...props}></Component>;
  };
};

export default withLoading;
