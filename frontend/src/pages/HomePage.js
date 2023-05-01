import React, { Component } from 'react'
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
import HomeAnimation from '../components/Home/HomeAnimation'

/**
 * Home Page me permet d'afficher tous les componsants qui doivent être présent sur ma page d'accueil
 */
export default class HomePage extends Component {
    render() {
        return (
            <Container>
                <HomeAnimation />
                <SectionFull>
                    <HomeContainer>
                        <HomeWrapper data-aos="fade-down">
                            <HomeTitle>
                                <AnimLetter letter="S" />
                                <AnimLetter letter="a" />
                                <AnimLetter letter="l" />
                                <AnimLetter letter="u" />
                                <AnimLetter letter="t" />
                                <AnimLetter letter="," />
                                <br />
                                <AnimLetter letter="J" />
                                <AnimLetter letter="e" />
                                <AnimationSpace />
                                <AnimLetter letter="s" />
                                <AnimLetter letter="u" />
                                <AnimLetter letter="i" />
                                <AnimLetter letter="s" />
                                <AnimationSpace />
                                <ColorLetter>D</ColorLetter>
                                <AnimLetter letter="a" />
                                <AnimLetter letter="v" />
                                <AnimLetter letter="i" />
                                <AnimLetter letter="d" />
                                <AnimLetter letter="," />
                                <br />
                                <AnimLetter letter="d" />
                                <AnimLetter letter="é" />
                                <AnimLetter letter="v" />
                                <AnimLetter letter="e" />
                                <AnimLetter letter="l" />
                                <AnimLetter letter="o" />
                                <AnimLetter letter="p" />
                                <AnimLetter letter="p" />
                                <AnimLetter letter="e" />
                                <AnimLetter letter="u" />
                                <AnimLetter letter="r" />
                            </HomeTitle>
                            <HomeSubtitle>Développeur Full-stack</HomeSubtitle>
                            <Button route="/contact" text="Contactez-moi" />
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
