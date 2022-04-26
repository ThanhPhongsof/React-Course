import React, { useState } from "react";
import Count from "./components/advanced-react/performance/Count";

const App = () => {
  const [filter, setFilter] = useState("");

  const calculate = () => {
    setFilter("");
  };

  return (
    <div>
      <input
        type="text"
        className="p-3 border border-gray-300 rounded"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count onChange={() => calculate}></Count>
    </div>
  );
};

export default App;
