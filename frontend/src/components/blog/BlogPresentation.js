import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import BigBackgroundFont from '../BigFont/BigBackgroundFont'
import ScrollDown from '../ScrollDown/ScrollDown'

/**
 * Blog Présentation
 * ! Features: mettre en place un sort pour le cas où il y aura plus d'articles (limit: 6)
 * @returns la liste des articles de blog sur la home page
 */
export default function BlogPresentation() {
    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/blog/`
    )

    const blogArticles = data

    if (isLoading)
        return <i className="fa fa-spinner spinner" aria-hidden="true"></i>
    if (error)
        return <i className="fa fa-times error-cross" aria-hidden="true"></i>

    return (
        <section className="blog section-full" id="blog">
            <BigBackgroundFont text="Blog" />
            <ScrollDown />
            <div className="blog__articles" data-aos="fade-up">
                {blogArticles &&
                    blogArticles.slice(0, 6).map((article) => (
                        <article
                            className="blog__post"
                            key={article.id}
                            style={{
                                borderTop: `2px solid ${blogArticles.map(
                                    (article) =>
                                        article.category.map(
                                            (category) => category.color
                                        )
                                )}`,
                            }}
                        >
                            <div
                                className="blog__post--category"
                                style={{
                                    color: `${blogArticles.map((article) =>
                                        article.category.map(
                                            (category) => category.color
                                        )
                                    )}`,
                                }}
                            >
                                {blogArticles.map((article) =>
                                    article.category.map(
                                        (category) => category.name
                                    )
                                )}
                            </div>
                            <div className="blog__post--content">
                                <div className="blog__post--title">
                                    <h5>
                                        <Link to={`/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h5>
                                </div>
                                <div className="blog__post--description">
                                    {article.description}
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
