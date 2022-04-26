import React from "react";

const Search = ({ inputPlaceholder, onChangeInput }) => {
  return (
    <div className="p-2">
      <input
        type="text"
        placeholder={inputPlaceholder}
        className="w-full p-4 border border-gray-200 rounded outline-none"
        onChange={onChangeInput}
      />
    </div>
  );
};

export default Search;
