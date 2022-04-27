import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");

  useEffect(() => {
    // 1. Get collection data (posts)
    getDocs(colRef)
      .then((snapshot) => {
        console.log(snapshot);
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5">
        <form>
          <div>
            <input
              type="text"
              name="title"
              className="p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              placeholder="Enter your title"
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              className="p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              placeholder="Enter your title"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirebaseApp;
