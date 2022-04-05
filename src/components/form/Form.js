import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });

  // const handleInputChange = (e) => {
  //   const type = e.target.type;
  //   setValues({
  //     ...values,
  //     [e.target.name]: type == "checkbox" ? e.target.checked : e.target.value,
  //   });
  // };

  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });

  const [nameError, setNameError] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname == "") {
      setNameError("Your fullname is empty");
    }
  };
  console.log(values);

  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-100 rounded-lg"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {nameError}
        </div>
        <input
          type="text"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-100 rounded-lg"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>
      {/* Message: {message}
      <textarea
        className="w-full max-w-[300px] p-5 border border-gray-100 rounded-lg"
        placeholder="Enter your message"
        name="message"
        onChange={handleTextAreaChange}
      ></textarea>
      Country: {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">VietNam</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
