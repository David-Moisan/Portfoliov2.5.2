import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BigBackgroundFont from '../BigBackgroundFont'
import ScrollDown from '../ScrollDown/ScrollDown'
import { loadBlogPostFromAPI } from './api/http'

/**
 * Blog Présentation
 * ! Features: mettre en place un sort pour le cas où il y aura plus d'articles (limit: 6)
 * @returns la liste des articles de blog sur la home page
 */
export default function BlogPresentation() {
    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        loadBlogPostFromAPI()
            .then((blog) => {
                setBlog(blog)
            })
            .catch((error) => {
                console.error('Error fetching data : ', error)
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading)
        return <i className="fa fa-spinner spinner" aria-hidden="true"></i>
    if (error)
        return <i className="fa fa-times error-cross" aria-hidden="true"></i>

    return (
        <section className="blog section-full" id="blog">
            <BigBackgroundFont text="Blog" />
            <ScrollDown />
            <div className="blog__articles" data-aos="fade-up">
                {blog.slice(0, 6).map((blog) => (
                    <article
                        className="blog__post"
                        key={blog.id}
                        style={{
                            borderTop:
                                '2px solid' +
                                blog.category.map((item) => item.color),
                        }}
                    >
                        <div
                            className="blog__post--category"
                            style={{
                                color: blog.category.map((item) => item.color),
                            }}
                        >
                            {blog.category.map((item) => item.name)}
                        </div>
                        <div className="blog__post--content">
                            <div className="blog__post--title">
                                <h5>
                                    <Link to={`/blog/${blog.slug}`}>
                                        {blog.title}
                                    </Link>
                                </h5>
                            </div>
                            <div className="blog__post--description">
                                {blog.description}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <footer className="blog__footer">
                <Link to="/blog" className="blog__footer--link">
                    Read more articles
                </Link>
            </footer>
        </section>
    )
}
