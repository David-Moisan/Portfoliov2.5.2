import React from 'react'
import { Link } from 'react-router-dom'
import { Container, SectionFull } from '../../../utils/style/GlobalSection'
import BigBackgroundFont from '../../BigFont/BigBackgroundFont'
import {
    BlogCategory,
    BlogContent,
    BlogImgContainer,
    BlogPost,
    BlogTitle,
    BlogWrapper,
} from '../BlogStyle'

/**
 * ListBlogPost
 * @param {Array} props
 * @returns l'ensemble des articles de blog
 */
export default function ListBlogPost(props) {
    return (
        <Container>
            <SectionFull>
                <BigBackgroundFont text="Blog" />
                <BlogWrapper>
                    {props.blog.map((blog) => (
                        <BlogPost
                            key={blog.id}
                            style={{
                                borderTop:
                                    '2px solid' +
                                    blog.category.map((item) => item.color),
                            }}
                        >
                            <BlogCategory
                                style={{
                                    color: blog.category.map(
                                        (item) => item.color
                                    ),
                                }}
                            >
                                {blog.category.map((item) => item.name)}
                            </BlogCategory>
                            <BlogContent>
                                <BlogTitle>
                                    <h5>
                                        <Link to={`/blog/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h5>
                                </BlogTitle>
                                <div className="blog__post--content">
                                    {blog.description}
                                </div>
                                <BlogImgContainer
                                    to={`/blog/${blog.slug}`}
                                    className="blog__post--thumbnails"
                                >
                                    <img
                                        src={blog.thumbnails}
                                        alt={blog.title}
                                    />
                                </BlogImgContainer>
                            </BlogContent>
                        </BlogPost>
                    ))}
                </BlogWrapper>
            </SectionFull>
        </Container>
    )
}
