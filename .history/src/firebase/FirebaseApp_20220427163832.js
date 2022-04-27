import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");

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
      console.log(posts);
    });
  }, []);

  return (
    <div>
      <div>1</div>
    </div>
  );
};

export default FirebaseApp;
