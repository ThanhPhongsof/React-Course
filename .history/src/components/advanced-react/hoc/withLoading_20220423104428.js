import React, { useEffect, useState } from "react";

const withLoading = (Component) => {
  return (props) => {
    const [data, setData] = useState([1, 2, 3, 4, 5]);
    useEffect(()=> {
        async function fetchData() => {
            const response = await fetch(
    `https://hn.algolia.com/api/v1/search?query=react`
            );
        }
    });
    if (!data || data.length == 0) return <div>Loading...</div>;
    return <Component data={data} {...props}></Component>;
  };
};

export default withLoading;
