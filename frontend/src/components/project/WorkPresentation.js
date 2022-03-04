import React from 'react'
import Button from '../Button/Button'
import AnimLetter from '../AnimLetter/AnimLetter'
import { Link } from 'react-router-dom'
import BigBackgroundFont from '../BigFont/BigBackgroundFont'
import { useFetch } from '../../utils/hooks'
import { CrossError, Spinner } from '../../utils/style/LoadingDataStyle'
import { SectionFull, Title } from '../../utils/style/GlobalSection'
import {
    WorkWrapper,
    WorkTitleContainer,
    WorkHeader,
    WorkDescription,
    WorkLink,
    WorkBtnContainer,
    MainProjectContainer,
    ProjectList,
    ProjectItem,
    ProjectContent,
    ProjectTitle,
    ProjectDescription,
    ProjectLink,
    ProjectLinkBtn,
    ProjectTechList,
    ProjectImage,
    ProjectImageLink,
    ProjectImageContainer,
    ProjectBlankLinkBtn,
} from './WorkStyle'
import { AnimationSpace } from '../AnimLetter/AnimLetterStyle'

/**
 * WorkPrésentation
 * @returns une liste des 4 derniers projet trié par ordre de sortie
 */
export default function WorkPresentation() {
    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/project/`
    )

    const project = data

    if (isLoading)
        return <Spinner className="fa fa-spinner" aria-hidden="true" />
    if (error) return <CrossError className="fa fa-times" aria-hidden="true" />

    return (
        <SectionFull>
            <BigBackgroundFont text="Work" />
            <WorkWrapper data-aos="fade-right">
                <WorkTitleContainer>
                    <WorkHeader>
                        <Title>
                            <AnimLetter letter="M" />
                            <AnimLetter letter="y" />
                            <AnimationSpace />
                            <AnimLetter letter="P" />
                            <AnimLetter letter="o" />
                            <AnimLetter letter="r" />
                            <AnimLetter letter="t" />
                            <AnimLetter letter="f" />
                            <AnimLetter letter="o" />
                            <AnimLetter letter="l" />
                            <AnimLetter letter="i" />
                            <AnimLetter letter="o" />
                        </Title>
                        <WorkDescription>
                            Here is a small gallery of projects that I carried
                            out during my retraining, or in my personal time.{' '}
                            <br />
                            Are you interested? go see{' '}
                            <WorkLink to="/project">my work</WorkLink>{' '}
                        </WorkDescription>
                    </WorkHeader>
                </WorkTitleContainer>
                <WorkBtnContainer>
                    <Button route="/project" text="See more !" />
                </WorkBtnContainer>
            </WorkWrapper>
            <MainProjectContainer>
                <ProjectList>
                    {project.slice(0, 4).map((project) => (
                        <ProjectItem key={project.id} data-aos="fade-left">
                            <ProjectContent>
                                <div>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDescription>
                                        <p>{project.description}</p>
                                    </ProjectDescription>
                                    <ProjectLink>
                                        <ProjectLinkBtn
                                            to={`/project/${project.id}`}
                                            className="project__detail--view"
                                        >
                                            Case study
                                        </ProjectLinkBtn>
                                        <ProjectBlankLinkBtn
                                            href={project.link}
                                            target="_blank"
                                            className="project__github--link"
                                        >
                                            {project.title ===
                                            'Open The Way - PC Game' ? (
                                                <i
                                                    className="fa fa-youtube fa-2x"
                                                    aria-hidden="true"
                                                ></i>
                                            ) : (
                                                <i className="fa fa-github fa-2x"></i>
                                            )}
                                        </ProjectBlankLinkBtn>
                                    </ProjectLink>
                                    <ProjectTechList>
                                        {project.languages.map(
                                            (lang, index) => (
                                                <li key={index}>{lang.name}</li>
                                            )
                                        )}
                                    </ProjectTechList>
                                </div>
                            </ProjectContent>
                            <ProjectImage>
                                <ProjectImageLink to={`/project/${project.id}`}>
                                    <ProjectImageContainer>
                                        <div className="project__image--wrapper">
                                            <img
                                                src={project.thumbnails}
                                                alt={project.title}
                                            />
                                        </div>
                                    </ProjectImageContainer>
                                </ProjectImageLink>
                            </ProjectImage>
                        </ProjectItem>
                    ))}
                </ProjectList>
            </MainProjectContainer>
        </SectionFull>
    )
}
