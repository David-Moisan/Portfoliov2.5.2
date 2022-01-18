import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";

export default function ListBlogPost(props) {
  return (
    <section className="blog section-full" id="blog-all">
      <div className="page-blog__container">
        <div className="page-blog__header">
          <div className="widget widget__categories">
            <h6>Categories</h6>
            <ul></ul>
          </div>
          <br />
        </div>
        <div className="blog__articles">
          <div className="posts">
            <div className="blog__articles" data-columns="3">
              {props.blog.map((blog, index) => (
                <article
                  className="blog__post"
                  key={index}
                  style={{
                    borderTop:
                      "2px solid" + blog.category.map((item) => item.color),
                  }}
                >
                    <div
                      className="blog__post--category"
                      style={{ color: blog.category.map((item) => item.color) }}
                    >
                      {blog.category.map((item) => item.name)}
                    </div>
                    <div className="blog__post--content">
                      <div className="blog__post--title">
                        <h5>
                          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                        </h5>
                      </div>
                      <div className="blog__post--content">{blog.description}</div>
                      <Link to={`/blog/${blog.slug}`} className="blog__post--thumbnails">
                        <img src={blog.thumbnails} alt={blog.title} />
                      </Link>
                    </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
