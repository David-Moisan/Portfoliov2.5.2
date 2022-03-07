import React from 'react'
import Button from '../Button/Button'
import AnimLetter from '../AnimLetter/AnimLetter'
import BigBackgroundFont from '../BigFont/BigBackgroundFont'
import { useFetch } from '../../utils/hooks'
import { CrossError, Spinner } from '../../utils/style/LoadingDataStyle'
import { SectionFull, Title } from '../../utils/style/GlobalSection'
import {
    WorkWrapper,
    WorkHeader,
    WorkDescription,
    WorkLink,
    MainProjectContainer,
    ProjectWrapper,
    ProjectContent,
    ProjectDetail,
    ProjectDetailContainer,
    ProjectTitle,
    ProjectDescription,
    ProjectLink,
    ProjectLinkBtn,
    ProjectBlankLinkBtn,
    ProjectPreview,
    ProjectImageWrapper,
    ProjectTechList,
    ProjectTechTag,
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
            <WorkWrapper data-aos="fade-up">
                <div>
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
                </div>
                <div>
                    <Button route="/project" text="See more !" />
                </div>
            </WorkWrapper>
            <MainProjectContainer>
                {project.slice(0, 4).map((project) => (
                    <ProjectWrapper key={project.id}>
                        <ProjectContent data-aos="fade-up">
                            <ProjectDetail>
                                <ProjectDetailContainer>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDescription>
                                        {project.description}
                                    </ProjectDescription>
                                    <ProjectLink>
                                        <ProjectLinkBtn
                                            to={`/project/${project.id}`}
                                        >
                                            Case study
                                        </ProjectLinkBtn>
                                        <ProjectBlankLinkBtn
                                            href={project.link}
                                            target="_blank"
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
                                </ProjectDetailContainer>
                            </ProjectDetail>
                            <ProjectPreview>
                                <ProjectImageWrapper>
                                    <img
                                        src={project.thumbnails}
                                        alt={project.title}
                                    />
                                </ProjectImageWrapper>
                                <ProjectTechTag>
                                    <ProjectTechList>
                                        {project.languages.map(
                                            (lang, index) => (
                                                <li key={index}>{lang.name}</li>
                                            )
                                        )}
                                    </ProjectTechList>
                                </ProjectTechTag>
                            </ProjectPreview>
                        </ProjectContent>
                    </ProjectWrapper>
                ))}
            </MainProjectContainer>
        </SectionFull>
    )
}
