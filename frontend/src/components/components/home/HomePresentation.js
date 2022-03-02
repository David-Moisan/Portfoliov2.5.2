import React from 'react'
import AnimLetter from '../../hooks/AnimLetter'
import Button from '../Button'
import ScrollDown from "../ScrollDown"

/**
 * Home Présentation
 * ! Refactoring: Mettre en cache l'animation ? via le Singleton Design Pattern
 * @returns le text de présentation animé + l'animation Three.js
 */
export default function HomePresentation() {
    return (
        <>
            <section className='home section-full' id='home-section'>
                <div className='home__block--text' data-aos="fade-right">
                    <h1 className='home__block--title' aria-label="Hi, I'm David, web developer">
                        <AnimLetter letter="H" />
                        <AnimLetter letter="i" />
                        <AnimLetter letter="," />
                        <br />
                        <AnimLetter letter="I" />
                        <AnimLetter letter="'" />
                        <AnimLetter letter="m" />
                        <span className='animation__space'></span>
                        <span className='animation__letter--color'>D</span>
                        <AnimLetter letter="a" />
                        <AnimLetter letter="v" />
                        <AnimLetter letter="i" />
                        <AnimLetter letter="d" />
                        <AnimLetter letter="," />
                        <br/>
                        <AnimLetter letter="w" />
                        <AnimLetter letter="e" />
                        <AnimLetter letter="b" />
                        <span className='animation__space'></span>
                        <AnimLetter letter="d" />
                        <AnimLetter letter="e" />
                        <AnimLetter letter="v" />
                        <AnimLetter letter="e" />
                        <AnimLetter letter="l" />
                        <AnimLetter letter="o" />
                        <AnimLetter letter="p" />
                        <AnimLetter letter="e" />
                        <AnimLetter letter="r" />
                    </h1>
                    <p className='home__subtitle'>Full Stack Developer</p>
                    <Button route="/contact" text="Contact me" />
                </div>
                <ScrollDown />
            </section>    
        </>
    )
}
