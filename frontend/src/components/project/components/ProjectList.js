import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    SectionFull,
    Title,
} from '../../../utils/style/GlobalSection'
import AnimLetter from '../../AnimLetter/AnimLetter'
import { AnimationSpace } from '../../AnimLetter/AnimLetterStyle'
import {
    MainProjectContainer,
    ProjectBlankLinkBtn,
    ProjectContent,
    ProjectDescription,
    ProjectDetail,
    ProjectDetailContainer,
    ProjectImageWrapper,
    ProjectLink,
    ProjectLinkBtn,
    ProjectPreview,
    ProjectTechList,
    ProjectTechTag,
    ProjectTitle,
    ProjectWrapper,
} from '../WorkStyle'

/**
 * ProjectList
 * @param {Array} props
 * @returns l'ensemble des projets sous forme de liste
 */
export default function ProjectList(props) {
    return (
        <Container>
            <SectionFull>
                <Title style={{ textAlign: 'center' }}>
                    <AnimLetter letter="A" />
                    <AnimLetter letter="l" />
                    <AnimLetter letter="l" />
                    <AnimationSpace />
                    <AnimLetter letter="p" />
                    <AnimLetter letter="r" />
                    <AnimLetter letter="o" />
                    <AnimLetter letter="j" />
                    <AnimLetter letter="e" />
                    <AnimLetter letter="c" />
                    <AnimLetter letter="t" />
                    <AnimLetter letter="s" />
                </Title>
                <MainProjectContainer>
                    {props.project.map((project, index) => (
                        <ProjectWrapper>
                            <ProjectContent key={index} id={project.id}>
                                <ProjectDetail>
                                    <ProjectDetailContainer>
                                        <ProjectTitle>
                                            {project.title}
                                        </ProjectTitle>
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
                            </ProjectContent>
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
                        </ProjectWrapper>
                    ))}
                </MainProjectContainer>
            </SectionFull>
        </Container>
    )
}
