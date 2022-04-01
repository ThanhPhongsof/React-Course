import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import lodash from "lodash";

// https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const urlApi = `https://hn.algolia.com/api/v1/search?query=${query}`;
      const response = await axios.get(urlApi);
      setHits(response.data?.hits || []);
      setLoading((loading) => !loading);
    } catch (error) {
      setLoading((loading) => !loading);
      setErrorMessage(`The error happend ${error}`);
    }
  };
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 800);

  useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="border border-gray-200 p-5 block w-full rounded-md mb-5 transition-all focus:border-blue-400"
        defaultValue={query}
        placeholder="Typing your keyword..."
        onChange={handleUpdateQuery}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits?.map((item, index) => (
            <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
