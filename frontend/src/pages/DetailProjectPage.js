import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks'
import { Spinner, CrossError } from '../utils/style/LoadingDataStyle'
import { Container, SectionFull } from '../utils/style/GlobalSection'
import {
    DetailPageHeader,
    BackBtn,
    DetailHeader,
    DetailTitle,
    DetailDate,
    DetailWrapper,
    DetailLink,
    DetailInfo,
    DetailImage,
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
    if (error) return <CrossError className="fa fa-times" aria-hidden="true" />

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
                <DetailPageHeader>
                    <BackBtn>
                        <Link to="/">Back</Link>
                    </BackBtn>
                </DetailPageHeader>
                <DetailWrapper>
                    <DetailHeader>
                        <DetailTitle>{project.title}</DetailTitle>
                        <DetailDate>
                            {project.day} - {project.month}
                        </DetailDate>
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
                            className="case__content"
                            dangerouslySetInnerHTML={createProject()}
                        />
                        <DetailImage>
                            <img src={project.thumbnails} alt={project.title} />
                        </DetailImage>
                    </DetailInfo>
                </DetailWrapper>
            </SectionFull>
        </Container>
    )
}
