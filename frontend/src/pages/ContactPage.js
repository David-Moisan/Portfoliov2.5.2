import React from 'react'
import AnimLetter from '../components/AnimLetter'
import BigBackgroundFont from '../components/BigFont/BigBackgroundFont'
import Button from '../components/Button/Button'

/**
 * ContactPage
 * ! Idéé: Créer un anim letter pour des phrases et non pour chaque lettre permetrait de mieux lire le code ?
 * @returns La page contact
 */
export default function ContactPage() {
    return (
        <>
            <BigBackgroundFont text="@" />
            <section
                className="contact-page section-full"
                id="contact"
                data-aos="fade-right"
            >
                <div className="contact-page__text">
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
                            development || full stack mission. Do not hesitate
                            to contact me via this contact form.
                        </p>
                    </header>
                    <div className="contact__form">
                        <Button
                            route="mailto:admin@davprocode.com"
                            text="Send !"
                        ></Button>
                    </div>
                </div>
            </section>
        </>
    )
}
