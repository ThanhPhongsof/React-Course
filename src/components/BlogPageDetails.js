import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogPageDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      Blog detail
      <button
        onClick={() => navigate("/blog")}
        className="p-3 ml-2 text-white bg-blue-300 rounded-sm"
      >
        Navigate to BlogPage
      </button>
    </div>
  );
};

export default BlogPageDetails;
