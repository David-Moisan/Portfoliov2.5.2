import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    BackBtn,
    DetailContent,
    DetailHeader,
    DetailImage,
    DetailImageWrapper,
    DetailInfo,
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
                    <div>Cet article n'existe pas !</div>
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
                <BackBtn>
                    <Link to="/blog">Retour</Link>
                </BackBtn>
                <DetailWrapper>
                    <DetailContent>
                        <DetailHeader>
                            <h1>{blog.title}</h1>
                            {blog.category.map((item) => (
                                <div style={{ color: item.color }}>
                                    {item.name}
                                </div>
                            ))}
                        </DetailHeader>
                        <DetailInfo>
                            <div
                                className="detail__content"
                                dangerouslySetInnerHTML={createBlog()}
                            />
                            <DetailImage>
                                <DetailImageWrapper>
                                    <img
                                        src={blog.thumbnails}
                                        alt={blog.title}
                                    />
                                </DetailImageWrapper>
                            </DetailImage>
                        </DetailInfo>
                    </DetailContent>
                </DetailWrapper>
            </SectionFull>
        </Container>
    )
}
