import React, { useState } from "react";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";
import lodash from "lodash";

// https://hn.algolia.com/api/v1/search?query=react

const HackerNewWithHook = () => {
  const [query, setQuery] = useState("react");
  const { data, setUrl, loading, errorMessage } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=''`,
    { hits: [] }
  );

  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 800);

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          defaultValue={query}
          placeholder="Typing your keyword..."
          onChange={handleUpdateQuery}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold rounded-md p-5 flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data?.hits?.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewWithHook;
