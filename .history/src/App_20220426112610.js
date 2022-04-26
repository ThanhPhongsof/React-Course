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
  const handleSelectJob = (newJob) => {
    setJob(newJob);
  };

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
        placeholder={`${job} || 'Please select your job'`}
        onClick={handleSelectJob}
      >
        <div className="relative inline-block w-full max-w-[300px] rounded">
          {options.map((option) => (
            <Dropdown.Option key={option.title}>{option.title}</Dropdown.Option>
          ))}
        </div>
      </Dropdown>
    </div>
  );
};

export default App;
