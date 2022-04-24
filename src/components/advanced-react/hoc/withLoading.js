import _ from "lodash";
import React, { useEffect, useState } from "react";

const withLoading = (Component, url) => {
  return (props) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.hits);
      }
      fetchData();
    }, []);
    if (!news || news.length == 0) return <div>Loading...</div>;
    return <Component data={news} {...props}></Component>;
  };
};

export default withLoading;
