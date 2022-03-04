import React from 'react'
import AnimLetter from '../AnimLetter/AnimLetter'
import ScrollDown from '../ScrollDown/ScrollDown'
import Cloud from './Cloud'
import { useMediaQuery } from 'react-responsive'
import { SectionFull, Title } from '../../utils/style/GlobalSection'
import {
    AboutContainer,
    AboutTextWrapper,
    AboutText,
    SkillContainer,
} from './AboutStyle'
import { AnimationSpace } from '../AnimLetter/AnimLetterStyle'

/**
 * About
 * @returns le composant About pour une présentation
 */
export default function About() {
    const isMobile = useMediaQuery({ maxWidth: 450 })
    return (
        <SectionFull>
            <AboutContainer>
                <ScrollDown />
                <AboutTextWrapper data-aos="fade-right">
                    <header>
                        <Title>
                            <AnimLetter letter="M" />
                            <AnimLetter letter="y" />
                            <AnimationSpace />
                            <AnimLetter letter="S" />
                            <AnimLetter letter="t" />
                            <AnimLetter letter="o" />
                            <AnimLetter letter="r" />
                            <AnimLetter letter="y" />
                        </Title>
                        <AboutText>
                            After a career in the French Army as a parachutist,
                            I decided to retrain in the field of web development
                            in 2020. I therefore resumed my studies with the WIS
                            Toulouse school to validate a BTS Web and mobile web
                            development as well as a Digital Project Manager
                            license. Unfortunately, I did not find a work-study
                            program to continue my studies in master's degree in
                            computer engineering.
                        </AboutText>
                        <AboutText>
                            Since I discovered IT development, I have never
                            stopped learning every day, driven by curiosity and
                            a growing passion.
                        </AboutText>
                    </header>
                </AboutTextWrapper>
                {isMobile ? null : (
                    <SkillContainer data-aos="fade-left">
                        <Cloud />
                    </SkillContainer>
                )}
            </AboutContainer>
        </SectionFull>
    )
}
