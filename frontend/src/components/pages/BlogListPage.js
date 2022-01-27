import React, { useEffect, useState } from "react";
import { loadBlogPostFromAPI } from "../components/blog/api/http";
import ListBlogPost from "../components/blog/components/ListBlogPost";

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

  if (loading) return <i className="fa fa-spinner spinner" aria-hidden="true"></i>;
  if (error) return <i className="fa fa-times error-cross" aria-hidden="true"></i>;

  return (
    <div>
      <ListBlogPost blog={blog}/>
    </div>
  );
}
