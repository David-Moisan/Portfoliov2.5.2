import React, { Component } from 'react'
import Animation from '../components/Home/Animation'
import Project from '../components/project/Project'
import About from '../components/About/About'
import Blog from '../components/blog/Blog'
import Contact from '../components/Contact/Contact'
import { Container, SectionFull } from '../utils/style/GlobalSection'
import {
    HomeContainer,
    HomeSubtitle,
    HomeTitle,
    HomeWrapper,
} from '../components/Home/HomeStyle'
import AnimLetter from '../components/AnimLetter/AnimLetter'
import {
    AnimationSpace,
    ColorLetter,
} from '../components/AnimLetter/AnimLetterStyle'
import Button from '../components/Button/Button'
import ScrollDown from '../components/ScrollDown/ScrollDown'

/**
 * ! Refactoring: Mettre en cache l'animation ? via le Singleton Design Pattern
 * Home Page me permet d'afficher tous les componsants qui doivent être présent sur ma page d'accueil
 */
export default class HomePage extends Component {
    render() {
        return (
            <Container>
                {/* <Animation /> */}
                <SectionFull>
                    <HomeContainer>
                        {/* data-aos="fade-right" */}
                        <HomeWrapper>
                            <HomeTitle>
                                <AnimLetter letter="H" />
                                <AnimLetter letter="i" />
                                <AnimLetter letter="," />
                                <br />
                                <AnimLetter letter="I" />
                                <AnimLetter letter="'" />
                                <AnimLetter letter="m" />
                                <AnimationSpace />
                                <ColorLetter>D</ColorLetter>
                                <AnimLetter letter="a" />
                                <AnimLetter letter="v" />
                                <AnimLetter letter="i" />
                                <AnimLetter letter="d" />
                                <AnimLetter letter="," />
                                <br />
                                <AnimLetter letter="w" />
                                <AnimLetter letter="e" />
                                <AnimLetter letter="b" />
                                <AnimationSpace />
                                <AnimLetter letter="d" />
                                <AnimLetter letter="e" />
                                <AnimLetter letter="v" />
                                <AnimLetter letter="e" />
                                <AnimLetter letter="l" />
                                <AnimLetter letter="o" />
                                <AnimLetter letter="p" />
                                <AnimLetter letter="e" />
                                <AnimLetter letter="r" />
                            </HomeTitle>
                            <HomeSubtitle>Full Stack Developer</HomeSubtitle>
                            <Button route="/contact" text="Contact me" />
                        </HomeWrapper>
                        <ScrollDown />
                    </HomeContainer>
                </SectionFull>
                <Project />
                <About />
                <Blog />
                <Contact />
            </Container>
        )
    }
}
