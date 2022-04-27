import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");
  console.log(colRef);

  useEffect(() => {
    // 1. Get collection data (posts)
    getDocs(colRef).then((snapshot) => {
      console.log(snapshot);
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
  }, []);

  return (
    <div>
      <div>1</div>
    </div>
  );
};

export default FirebaseApp;
