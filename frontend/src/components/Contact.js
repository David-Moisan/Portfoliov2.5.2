import React from 'react'
import Map from './Map'
import AnimLetter from './AnimLetter'
import BigBackgroundFont from './BigBackgroundFont'
import Button from './Button/Button'

/**
 * Contact
 * ! Refactoring: Rassembler le fichier Map et Contact
 * @returns l'ensemble du composant Contact
 */
export default function Contact() {
    return (
        <section className="contact section-full" id="contact">
            <BigBackgroundFont text="@" />
            <div className="contact__block--text">
                <header>
                    <h2 className="header__title">
                        <AnimLetter letter="C" />
                        <AnimLetter letter="o" />
                        <AnimLetter letter="n" />
                        <AnimLetter letter="t" />
                        <AnimLetter letter="a" />
                        <AnimLetter letter="c" />
                        <AnimLetter letter="t" />
                        <span className="animation__space"></span>
                        <AnimLetter letter="m" />
                        <AnimLetter letter="e" />
                    </h2>
                    <p>
                        I'm available immediately for any kind of web
                        development || full stack mission. Do not hesitate to
                        contact me via this contact form.
                    </p>
                </header>
                <div className="contact__form">
                    <Button
                        route="mailto:admin@davprocode.com"
                        text="Send !"
                    ></Button>
                </div>
            </div>
            <div className="contact__map" data-aos="fade-left">
                <Map />
            </div>
        </section>
    )
}
