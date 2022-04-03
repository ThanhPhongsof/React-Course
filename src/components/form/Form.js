import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });

  const handleInputChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type == "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-100 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-100 rounded-lg"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>
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
