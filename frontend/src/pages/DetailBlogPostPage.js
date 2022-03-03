import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks'

/**
 * Pour chaque post cette page détails l'ensemble de l'article de blog
 * @returns
 */
export default function DetailBlogPostPage() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/blog/${id}/`
    )

    if (isLoading)
        return <i className="fa fa-spinner spinner" aria-hidden="true"></i>
    if (error)
        return <i className="fa fa-times error-cross" aria-hidden="true"></i>

    /**
     * createBlog fonction qui permet récupérer l'ensemble du text du summernote django
     * @returns _html le content de l'article de blog
     */
    const createBlog = () => {
        return {
            __html: blog.content,
        }
    }

    return (
        <section className="detail__blog full-page">
            <header>
                <div className="detail__blog--back">
                    <Link to="/">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        Back
                    </Link>
                </div>
            </header>
            <main className="detail__blog--wrapper">
                <section>
                    <div
                        className="detail__blog--title"
                        style={{
                            borderTop:
                                '2px solid' +
                                blog.category.map((item) => item.color),
                        }}
                    >
                        <h1>{blog.title}</h1>
                        <div
                            className="detail__blog--category"
                            style={{
                                color: blog.category.map((item) => item.color),
                            }}
                        >
                            {blog.category.map((item) => item.name)}
                        </div>
                    </div>
                </section>
                <section className="blog__info">
                    <aside
                        className="blog__content"
                        dangerouslySetInnerHTML={createBlog()}
                    />
                    <div className="blog__thumbnails">
                        <img src={blog.thumbnails} alt={blog.title} />
                    </div>
                </section>
            </main>
        </section>
    )
}
