import { collection } from "firebase/firestore";
import React from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");
  console.log(colRef);

  return <div>1</div>;
};

export default FirebaseApp;
