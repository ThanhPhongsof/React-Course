import React, { useEffect, useState } from "react";

const withLoading = (Component) => {
  return (props) => {
    const [news, setNews] = useState([1, 2, 3, 4, 5]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/search?query=react`
        );
        const data = await response.json();
        console.log(data);
      }
    }, []);
    // if (!news || news.length == 0) return <div>Loading...</div>;
    return <Component data={news} {...props}></Component>;
  };
};

export default withLoading;
