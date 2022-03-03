import React from 'react'
import AnimLetter from '../AnimLetter/AnimLetter'
import BigBackgroundFont from '../BigFont/BigBackgroundFont'
import Button from '../Button/Button'
import { SectionFull } from '../../utils/style/SectionFull'
import { AnimationSpace } from '../AnimLetter/AnimLetterStyle'
import {
    ContactContainer,
    ContactWrapper,
    ContactTitle,
    ContactContent,
    ContactForm,
    ContactMapContainer,
    ContactInfoContainer,
    ContactMapInfo,
    MapImage,
} from './ContactStyle'
import Map from '../../../static/source/map.png'

/**
 * Contact
 * ! Refactoring: Rassembler le fichier Map et Contact
 * @returns l'ensemble du composant Contact
 */
export default function Contact() {
    return (
        <SectionFull>
            <ContactContainer>
                <BigBackgroundFont text="@" />
                <ContactWrapper>
                    <header>
                        <ContactTitle>
                            <AnimLetter letter="C" />
                            <AnimLetter letter="o" />
                            <AnimLetter letter="n" />
                            <AnimLetter letter="t" />
                            <AnimLetter letter="a" />
                            <AnimLetter letter="c" />
                            <AnimLetter letter="t" />
                            <AnimationSpace />
                            <AnimLetter letter="m" />
                            <AnimLetter letter="e" />
                        </ContactTitle>
                        <ContactContent>
                            I'm available immediately for any kind of web
                            development || full stack mission. Do not hesitate
                            to contact me via this contact form.
                        </ContactContent>
                    </header>
                    <ContactForm>
                        <Button
                            route="mailto:admin@davprocode.com"
                            text="Send !"
                        ></Button>
                    </ContactForm>
                </ContactWrapper>
                <ContactMapContainer data-aos="fade-left">
                    <ContactInfoContainer>
                        <ContactMapInfo>
                            David Moisan
                            <br />
                            Toulouse, France
                            <br />
                            <br />
                            <span>
                                <i
                                    className="fa fa-envelope"
                                    aria-hidden="true"
                                ></i>{' '}
                                : admin@davprocode.com
                            </span>
                        </ContactMapInfo>
                        <MapImage src={Map} alt="ma position" />
                    </ContactInfoContainer>
                </ContactMapContainer>
            </ContactContainer>
        </SectionFull>
    )
}
