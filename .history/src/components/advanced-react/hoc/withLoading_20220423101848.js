import { useState } from "react";

const withLoading = (Component) => {
  const [data, setData] = useState([]);

  return (props) => {
    return <Component {...props}></Component>;
  };
};

export default withLoading;
