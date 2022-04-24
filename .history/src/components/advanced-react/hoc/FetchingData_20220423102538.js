import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  console.log(data);
  return <div>data</div>;
};

export default withLoading(FetchingData);
