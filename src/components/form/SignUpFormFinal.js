import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
        terms: Yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
      autoComplete="off"
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-4">
          <label htmlFor="firstName">Firstname</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="lastName">Lastname</label>
          <Field
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="email">Email address</label>
          <Field
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="intro">Intro</label>
          <Field
            type="text"
            name="intro"
            placeholder="Introduce yourself..."
            className="p-4 rounded-md border border-gray-100 focus-visible:outline-none h-[150px] resize-none"
            as="textarea"
          />
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="job">Select your job</label>
          <Field
            type="text"
            name="job"
            placeholder="Introduce yourself..."
            className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
            as="select"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">FullStack Developer</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <Field
            type="checkbox"
            name="terms"
            className="p-4 rounded-md border border-gray-100"
          />
          <p>I accept the terms and conditions</p>
          <div className="text-sm text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormFinal;
