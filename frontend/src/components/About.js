import React from 'react'
import AnimLetter from './AnimLetter/AnimLetter'
import ScrollDown from './ScrollDown/ScrollDown'
import Cloud from './Cloud'
import { useMediaQuery } from 'react-responsive'

/**
 * About
 * @returns le composant About pour une présentation
 */
export default function About() {
    const isMobile = useMediaQuery({ maxWidth: 450 })
    return (
        <section className="about section-full" id="about">
            <ScrollDown />
            <div className="about__block--text" data-aos="fade-right">
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
                <div className="skill-zone" data-aos="fade-left">
                    <Cloud />
                </div>
            )}
        </section>
    )
}
