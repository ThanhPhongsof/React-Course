import React from "react";
import { Dropdown } from "./components/advanced-react/inversion-of-control";

const options = [
  {
    title: "Frontend Developer",
    onClick: () => {},
  },
  {
    title: "Backend Developer",
    onClick: () => {},
  },
  {
    title: "Fullstack Developer",
    onClick: () => {},
  },
];

const onChangeInput = () => {};

const App = () => {
  return (
    <div>
      <Dropdown placeholder="Select your job"></Dropdown>
    </div>
  );
};

export default App;
