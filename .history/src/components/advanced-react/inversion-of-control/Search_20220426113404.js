import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = ({ inputPlaceholder, onChangeInput }) => {
  const context = useDropdown();
  console.log(context);
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
