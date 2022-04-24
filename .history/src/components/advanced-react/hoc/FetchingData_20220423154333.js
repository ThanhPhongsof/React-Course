import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* {data.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </div>
  );
};

// Higher Order Component
export default withLoading(
  FetchingData,
  `https://hn.algolia.com/api/v1/search?query=react`
);
