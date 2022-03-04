import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks'
import { Spinner, CrossError } from '../utils/style/LoadingDataStyle'
import { Container, SectionFull } from '../utils/style/GlobalSection'
import {
    DetailProjectPageHeader,
    BackBtn,
    DetailProjectWrapper,
    CaseProjectHeader,
    CaseProjectTitle,
    CaseProjectDate,
    CaseProjectLink,
    CaseProjectInfo,
    CaseProjectImage,
} from '../components/project/DetailProjectStyle'

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
        return <Spinner className="fa fa-spinner spinner" aria-hidden="true" />
    if (error)
        return (
            <CrossError
                className="fa fa-times error-cross"
                aria-hidden="true"
            />
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
                <DetailProjectPageHeader>
                    <BackBtn>
                        <Link to="/">Back</Link>
                    </BackBtn>
                </DetailProjectPageHeader>
                <DetailProjectWrapper>
                    <CaseProjectHeader>
                        <CaseProjectTitle>{project.title}</CaseProjectTitle>
                        <CaseProjectDate>
                            {project.day} - {project.month}
                        </CaseProjectDate>
                        <CaseProjectLink>
                            <a target="_blank" href={project.link}>
                                <i
                                    className="fa fa-github fa-2x"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </CaseProjectLink>
                    </CaseProjectHeader>
                    <CaseProjectInfo>
                        <div
                            className="case__content"
                            dangerouslySetInnerHTML={createProject()}
                        />
                        <CaseProjectImage>
                            <img src={project.thumbnails} alt={project.title} />
                        </CaseProjectImage>
                    </CaseProjectInfo>
                </DetailProjectWrapper>
            </SectionFull>
        </Container>
    )
}
