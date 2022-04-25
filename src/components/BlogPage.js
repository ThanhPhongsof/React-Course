import React from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("search")); // Lấy thông tin tìm kiếm trên url
  return <div>Blog page</div>;
};

export default BlogPage;
