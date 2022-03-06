import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    BackBtn,
    DetailHeader,
    DetailImage,
    DetailInfo,
    DetailPageHeader,
    DetailTitle,
    DetailWrapper,
} from '../components/DetailsTopic/DetailAllTopic'
import { useFetch } from '../utils/hooks'
import { Container, SectionFull } from '../utils/style/GlobalSection'
import {
    CrossError,
    ErrorWrapper,
    Spinner,
} from '../utils/style/LoadingDataStyle'

/**
 * Pour chaque post cette page détails l'ensemble de l'article de blog
 * @returns
 */
export default function DetailBlogPostPage() {
    /**
     * Récupère le slug via l'API Django
     */
    const { id } = useParams()

    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/blog/${id}`
    )

    const blog = data

    if (isLoading)
        return <Spinner className="fa fa-spinner" aria-hidden="true" />
    if (error)
        return (
            <SectionFull>
                <ErrorWrapper>
                    <div>This article don't exist !</div>
                    <CrossError className="fa fa-times" aria-hidden="true" />
                </ErrorWrapper>
            </SectionFull>
        )

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
        <Container>
            <SectionFull>
                <DetailPageHeader>
                    <BackBtn>
                        <Link to="/">Back</Link>
                    </BackBtn>
                </DetailPageHeader>
                <DetailWrapper>
                    <DetailHeader>
                        <DetailTitle>
                            <h1>{blog.title}</h1>
                            <div
                                className="detail__blog--category"
                                style={{
                                    color: blog.category.map(
                                        (item) => item.color
                                    ),
                                }}
                            >
                                {blog.category.map((item) => item.name)}
                            </div>
                        </DetailTitle>
                    </DetailHeader>
                    <DetailInfo>
                        <aside
                            className="blog__content"
                            dangerouslySetInnerHTML={createBlog()}
                        />
                        <DetailImage>
                            <img src={blog.thumbnails} alt={blog.title} />
                        </DetailImage>
                    </DetailInfo>
                </DetailWrapper>
            </SectionFull>
        </Container>
    )
}
