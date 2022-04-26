import React, { useState } from "react";
import { Dropdown } from "./components/advanced-react/inversion-of-control";

const options = [
  {
    title: "Frontend Developer",
  },
  {
    title: "Backend Developer",
  },
  {
    title: "Fullstack Developer",
  },
];

const App = () => {
  const [job, setJob] = useState("");
  const [filter, setFilter] = useState("");
  const handleSelectJob = (newJob) => {
    setJob(newJob);
  };

  const onChangeInput = () => {};

  return (
    <div>
      {/* <Dropdown
        options={options}
        placeholder="Please select your job"
        inputPlaceholder="Seach your job"
        onChangeInput={onChangeInput}
        visibleIconCheck
        visibleSearch
      ></Dropdown> */}
      <Dropdown
        placeholder={`${job || "Please select your job"}`}
        onClick={handleSelectJob}
        onChangeInput={() => setFilter(e.target.value)}
      >
        <div className="relative inline-block w-full max-w-[300px] rounded">
          <Dropdown.Search inputPlaceholder="Search your jobs"></Dropdown.Search>
          {options.map((option) => (
            <Dropdown.Option key={option.title}>
              <span>{option.title}</span>
              <Dropdown.IconCheck></Dropdown.IconCheck>
            </Dropdown.Option>
          ))}
        </div>
      </Dropdown>
    </div>
  );
};

export default App;
