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
                    <AnimLetter letter="T" />
                    <AnimLetter letter="o" />
                    <AnimLetter letter="u" />
                    <AnimLetter letter="s" />
                    <AnimationSpace />
                    <AnimLetter letter="l" />
                    <AnimLetter letter="e" />
                    <AnimLetter letter="s" />
                    <AnimationSpace />
                    <AnimLetter letter="p" />
                    <AnimLetter letter="r" />
                    <AnimLetter letter="o" />
                    <AnimLetter letter="j" />
                    <AnimLetter letter="e" />
                    <AnimLetter letter="t" />
                    <AnimLetter letter="s" />
                </Title>
                <MainProjectContainer>
                    {props.project.map((project) => (
                        <ProjectWrapper key={project.id}>
                            <ProjectContent>
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
                                                Voir détails
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
                                                    <li key={index}>
                                                        {lang.name}
                                                    </li>
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
        </Container>
    )
}
