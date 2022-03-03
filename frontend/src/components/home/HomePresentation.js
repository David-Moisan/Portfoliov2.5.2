import React from 'react'
import AnimLetter from '../AnimLetter/AnimLetter'
import { AnimationSpace, ColorLetter } from '../AnimLetter/AnimLetterStyle'
import Button from '../Button/Button'
import ScrollDown from '../ScrollDown/ScrollDown'
import { SectionFull } from '../../utils/style/SectionFull'
import {
    HomeContainer,
    HomeWrapper,
    HomeTitle,
    HomeSubtitle,
} from './HomeStyle'

/**
 * Home Présentation
 * ! Refactoring: Mettre en cache l'animation ? via le Singleton Design Pattern
 * @returns le text de présentation animé + l'animation Three.js
 */
export default function HomePresentation() {
    return (
        <SectionFull>
            <HomeContainer>
                <HomeWrapper data-aos="fade-right">
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
    )
}
