import React from 'react'
import { useMediaQuery } from 'react-responsive'
import AnimLetter from '../components/AnimLetter/AnimLetter'
import Cloud from '../components/About/Cloud'
import { Container, SectionFull, Title } from '../utils/style/GlobalSection'
import {
    AboutContainer,
    AboutTextWrapper,
    AboutText,
    SkillContainer,
} from '../components/About/AboutStyle'
import { AnimationSpace } from '../components/AnimLetter/AnimLetterStyle'

/**
 * AboutPage
 * @returns le paragraphe de présentation + l'animation Cloud = desktop ? true : null
 */
export default function AboutPage() {
    const isMobile = useMediaQuery({ maxWidth: 450 })
    return (
        <Container>
            <SectionFull>
                <AboutContainer>
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
                                After a career in the French Army as a
                                parachutist, I decided to retrain in the field
                                of web development in 2020. I therefore resumed
                                my studies with the WIS Toulouse school to
                                validate a BTS Web and mobile web development as
                                well as a Digital Project Manager license.
                                Unfortunately, I did not find a work-study
                                program to continue my studies in master's
                                degree in computer engineering.
                            </AboutText>
                            <AboutText>
                                Since I discovered IT development, I have never
                                stopped learning every day, driven by curiosity
                                and a growing passion.
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
        </Container>
    )
}
