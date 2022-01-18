import React, { useEffect, useState } from "react";
import { loadBlogPostFromAPI } from "./api/http";
import ListBlogPost from "./components/ListBlogPost";

export default function BlogListPage() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadBlogPostFromAPI()
      .then((blog) => {
        setBlog(blog);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <i className="fas fa-spinner spinner"></i>;
  if (error) return <i className="fas fa-times error-cross"></i>;

  return (
    <div>
      <ListBlogPost blog={blog}/>
    </div>
  );
}
