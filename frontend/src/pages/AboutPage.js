import React from 'react'
import { useMediaQuery } from 'react-responsive'
import ScrollDown from '../components/ScrollDown/ScrollDown'
import AnimLetter from '../components/AnimLetter/AnimLetter'
import Cloud from '../components/Cloud'

/**
 * AboutPage
 * @returns le paragraphe de présentation + l'animation Cloud = desktop ? true : null
 */
export default function AboutPage() {
    const isMobile = useMediaQuery({ maxWidth: 450 })
    return (
        <section className="about-page section-full" id="about">
            <ScrollDown />
            <div className="about-page__text" data-aos="fade-right">
                <header>
                    <h2 className="header__title">
                        <AnimLetter letter="M" />
                        <AnimLetter letter="y" />
                        <span className="animation__space"></span>
                        <AnimLetter letter="S" />
                        <AnimLetter letter="t" />
                        <AnimLetter letter="o" />
                        <AnimLetter letter="r" />
                        <AnimLetter letter="y" />
                    </h2>
                    <p>
                        After a career in the French Army as a parachutist, I
                        decided to retrain in the field of web development in
                        2020. I therefore resumed my studies with the WIS
                        Toulouse school to validate a BTS Web and mobile web
                        development as well as a Digital Project Manager
                        license. Unfortunately, I did not find a work-study
                        program to continue my studies in master's degree in
                        computer engineering.
                    </p>
                    <p>
                        Since I discovered IT development, I have never stopped
                        learning every day, driven by curiosity and a growing
                        passion.
                    </p>
                </header>
            </div>
            {isMobile ? null : (
                <div className="about-page__skill" data-aos="fade-left">
                    <Cloud />
                </div>
            )}
        </section>
    )
}
