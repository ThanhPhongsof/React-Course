import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");

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
      title,
      author,
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemovePost = async (e) => {
    e.preventDefault();
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("success");
  };

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5 mb-10">
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            name="title"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="author"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-semibold text-white bg-blue-500 rounded-lg"
          >
            Add post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5 mb-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            name="postId"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your title"
            onChange={(e) => setPostId(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-semibold text-white bg-red-500 rounded-lg"
          >
            Remove post
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseApp;
