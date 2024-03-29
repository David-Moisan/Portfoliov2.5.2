import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import BigBackgroundFont from '../BigFont/BigBackgroundFont'
import ScrollDown from '../ScrollDown/ScrollDown'
import { SectionFull } from '../../utils/style/GlobalSection'
import {
    BlogWrapper,
    BlogPost,
    BlogCategory,
    BlogContent,
    BlogTitle,
    BlogFooter,
} from '../blog/BlogStyle'

/**
 * Blog Présentation
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
        <SectionFull>
            <BigBackgroundFont text="Blog" />
            <ScrollDown />
            <BlogWrapper data-aos="fade-up">
                {blogArticles &&
                    blogArticles.slice(0, 6).map((article) => (
                        <BlogPost
                            key={article.id}
                            style={{
                                borderTop:
                                    '2px solid' +
                                    article.category.map(
                                        (category) => category.color
                                    ),
                            }}
                        >
                            <BlogCategory
                                style={{
                                    color: article.category.map(
                                        (category) => category.color
                                    ),
                                }}
                            >
                                {article.category.map(
                                    (category) => category.name
                                )}
                            </BlogCategory>
                            <BlogContent>
                                <BlogTitle>
                                    <h5>
                                        <Link to={`/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h5>
                                </BlogTitle>
                                <div>{article.description}</div>
                            </BlogContent>
                        </BlogPost>
                    ))}
            </BlogWrapper>
            <BlogFooter>
                <Link to="/blog">Lire plus d'articles</Link>
            </BlogFooter>
        </SectionFull>
    )
}
