import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 character or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 character or less")
          .required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the therms and conditions"
        ),
      })}
      onSubmit={(values, actions) => {
        actions.resetForm({
          firstName: "",
          lastName: "",
          email: "",
          intro: "",
          job: "",
          terms: false,
        });
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="FirstName"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
            ></MyInput>
            <MyInput
              label="LastName"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
            ></MyInput>
            <MyInput
              label="Email address"
              id="email"
              name="email"
              placeholder="Enter your email address"
              type="email"
            ></MyInput>
            <MyTextArea
              label="Intro"
              id="intro"
              name="intro"
              placeholder="Introduce yourself.."
            ></MyTextArea>
            <MySelectBox label="Select your job" id="job" name="job">
              <option value="">Select...</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">FullStack Developer</option>
            </MySelectBox>
            <MyCheckBox id="terms" name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckBox>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        type="text"
        name="job"
        className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
        {...props}
        {...field}
      ></select>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-4 rounded-md border border-gray-100"
          {...props}
          {...field}
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
