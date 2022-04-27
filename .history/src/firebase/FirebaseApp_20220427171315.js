import { collection, getDocs, addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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

  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title: "",
      author: "",
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5">
        <form onSubmit={handleAddPost}>
          <div>
            <input
              type="text"
              name="title"
              className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              placeholder="Enter your title"
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              placeholder="Enter your author"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-semibold text-white bg-blue-500"
          >
            Add post
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseApp;
