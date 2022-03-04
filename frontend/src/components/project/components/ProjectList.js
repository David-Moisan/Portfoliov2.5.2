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
    AllProjectList,
    AllProjectItem,
    AllProjectContent,
    AllProjectTitle,
    AllProjectDescription,
    AllProjectBtn,
    AllProjectLink,
    AllProjectLinkGitHub,
    AllProjectTechList,
    AllProjectImageContainer,
    AllProjectImgWrapper,
} from './ProjectListStyle'

/**
 * ProjectList
 * @param {Array} props
 * @returns l'ensemble des projets sous forme de liste
 */
export default function ProjectList(props) {
    return (
        <Container>
            <SectionFull>
                <Title>
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
                <AllProjectList>
                    {props.project.map((project, index) => (
                        <AllProjectItem key={index} id={project.id}>
                            <AllProjectContent>
                                <AllProjectTitle>
                                    {project.title}
                                </AllProjectTitle>
                                <AllProjectDescription>
                                    {project.description}
                                </AllProjectDescription>
                                <AllProjectBtn>
                                    <AllProjectLink
                                        to={`/project/${project.id}`}
                                    >
                                        Case study
                                    </AllProjectLink>

                                    <AllProjectLinkGitHub
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
                                    </AllProjectLinkGitHub>
                                </AllProjectBtn>
                                <AllProjectTechList>
                                    {project.languages.map((lang, index) => (
                                        <li key={index}>{lang.name}</li>
                                    ))}
                                </AllProjectTechList>
                            </AllProjectContent>
                            <AllProjectImageContainer>
                                <Link
                                    to={`/project/${project.id}`}
                                    className="all-projects__detail--view"
                                >
                                    <AllProjectImgWrapper>
                                        <img
                                            src={project.thumbnails}
                                            alt={project.title}
                                        />
                                    </AllProjectImgWrapper>
                                </Link>
                            </AllProjectImageContainer>
                        </AllProjectItem>
                    ))}
                </AllProjectList>
            </SectionFull>
        </Container>
    )
}
