import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks'
import {
    Spinner,
    CrossError,
    ErrorWrapper,
} from '../utils/style/LoadingDataStyle'
import { Container, SectionFull } from '../utils/style/GlobalSection'
import {
    BackBtn,
    DetailHeader,
    DetailWrapper,
    DetailLink,
    DetailInfo,
    DetailImage,
    DetailContent,
    DetailImageWrapper,
} from '../components/DetailsTopic/DetailAllTopic'

/**
 * Pour chaque projet cette page détails l'ensemble du projet
 * @returns
 */
export default function DetailProjectPage() {
    const { id } = useParams()

    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/project/${id}/`
    )

    const project = data

    if (isLoading)
        return <Spinner className="fa fa-spinner" aria-hidden="true" />
    if (error)
        return (
            <SectionFull>
                <ErrorWrapper>
                    <div>This project don't exist !</div>
                    <CrossError className="fa fa-times" aria-hidden="true" />
                </ErrorWrapper>
            </SectionFull>
        )

    /**
     * createProject fonction qui permet récupérer l'ensemble du text du summernote django
     * @returns _html le content du projet
     */
    const createProject = () => {
        return {
            __html: project.content,
        }
    }

    return (
        <Container>
            <SectionFull>
                <BackBtn>
                    <Link to="/project">Back</Link>
                </BackBtn>
                <DetailWrapper>
                    <DetailContent>
                        <DetailHeader>
                            <h1>{project.title}</h1>
                            <DetailLink>
                                <a target="_blank" href={project.link}>
                                    <i
                                        className="fa fa-github fa-2x"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </DetailLink>
                        </DetailHeader>
                        <DetailInfo>
                            <div
                                className="detail__content"
                                dangerouslySetInnerHTML={createProject()}
                            />
                            <DetailImage>
                                <DetailImageWrapper>
                                    <img
                                        src={project.thumbnails}
                                        alt={project.title}
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
