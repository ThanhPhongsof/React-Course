import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 20) {
    errors.firstName = "Must be 20 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        {formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        {formik.errors.lastName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;