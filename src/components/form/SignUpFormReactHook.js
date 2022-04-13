import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as Yup from "yup";

const endpointAPI = `https://hn.algolia.com/api/v1/search?query=react`;

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please fill out this field")
    .max(10, "Must be 10 characters or less"),
  lastName: Yup.string()
    .required("Please fill out this field")
    .max(10, "Must be 10 characters or less"),
  email: Yup.string(),
});

const SignUpFormReactHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
    setFocus,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const watchShowAge = watch("showAge", false);
  const onSubmit = async (values) => {
    if (isValid) {
      console.log("send data");
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
    // const response = await axios.get(endpointAPI);
    // return response.data;

    // return new Promise((resolver) => {
    //   setTimeout(() => {
    //     resolver();
    //     console.log(values);
    //   }, 2000);
    // });
  };

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
          {...register("firstName")}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
          {...register("lastName")}
        />
        {errors?.lastName && (
          <div className="text-red-500 text-sm">{errors.lastName.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Email address</label>
        <MyInput
          name="email"
          id="email"
          placeholder="Enter your email address"
          control={control}
        ></MyInput>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="number"
            name=""
            id=""
            placeholder="Please enter your age"
          />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-4 border-white border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-100 focus-visible:outline-none"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormReactHook;
