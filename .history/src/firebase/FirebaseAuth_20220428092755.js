import React, { Fragment, useState } from "react";
import {
  createUserWithEmailAndPassword,
  SignInWithPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";

const FirebaseAuth = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const [userInfo, setUserInfo] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUserInfo(currentUser);
    else setUserInfo("");
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      // credentials
      const cred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("create user successfully");

      await updateProfile(auth.currentUser, {
        displayName: "Phong",
      });
      setUserInfo(cred);

      const userRef = collection(db, "users");
      addDoc(userRef, {
        id: cred.user.uid,
        email: values.email,
        password: values.password,
        displayName: userInfo?.displayName,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = (e) => {
    signOut(auth);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const cred = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setUserInfo(cred);
      console.log("Login successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5 mb-10">
        <form onSubmit={handleCreateUser}>
          <input
            type="text"
            name="email"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="password"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-semibold text-white bg-blue-500 rounded-lg"
          >
            SignUp
          </button>
        </form>
        <div className="flex items-center mt-10 gap-x-5">
          <span>{userInfo?.displayName}</span>
          <button
            type="submit"
            className="p-3 text-sm font-medium text-white bg-gray-500 rounded-lg"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      </div>
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5 mb-10">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="password"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-semibold text-white bg-green-500 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default FirebaseAuth;
