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
                                After a career in the French army as a
                                paratrooper, I decided to convert to the field
                                of web development in 2020. So I resumed my
                                studies with the WIS school in Toulouse to
                                validate a BTS DWWM as well as a Project Manager
                                License. I started a Master's degree in Computer
                                Engineering in 2022 for a two-year work-study
                                period, after having found a work-study program
                                in the banking sector, I had a proposal for a
                                permanent contract in the field of Insurance,
                                which I immediately accepted. Indeed, living
                                from my passion was my goal since the beginning
                                of my retraining. So I stopped my Master in the
                                course of the first year without validating it.
                                And it's therefore in the field of insurance
                                that I take up arms again, but this time sitting
                                on an office chair in order to manage the EDI
                                flows of a company wich generates millions in
                                turnover. Here I'm finally full stack Web
                                Developer in a technology that I particularity
                                like PHP.
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
