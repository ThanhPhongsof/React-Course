import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* {data.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
      loading
    </div>
  );
};

export default withLoading(FetchingData);
