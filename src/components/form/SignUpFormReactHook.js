import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const SignUpFormReactHook = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
          {...register("firstName")}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="lastName">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
        />
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

export default SignUpFormReactHook;
