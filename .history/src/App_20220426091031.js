import React from "react";
import Dropdown from "./components/advanced-react/inversion-of-control/Dropdown";

const options = [
  {
    title: "Frontend Developer",
    onClick: () => {},
  },
];

const App = () => {
  return (
    <div>
      <Dropdown options={options}></Dropdown>
    </div>
  );
};

export default App;
