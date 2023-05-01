import React from 'react'
import AnimLetter from '../AnimLetter/AnimLetter'
import BigBackgroundFont from '../BigFont/BigBackgroundFont'
import { SectionFull, Title } from '../../utils/style/GlobalSection'
import { AnimationSpace } from '../AnimLetter/AnimLetterStyle'
import {
    ContactContainer,
    ContactContent,
    ContactMapContainer,
    ContactMapInfo,
    ContactWrapper,
    MapImage,
} from './ContactStyle'
import { ButtonAction } from '../Button/ButtonStyle'
import Map from '../../../static/source/map.png'

/**
 * Contact
 * @returns l'ensemble du composant Contact
 */
export default function Contact() {
    return (
        <SectionFull>
            <ContactContainer>
                <BigBackgroundFont text="@" />
                <ContactWrapper>
                    <header>
                        <Title>
                            <AnimLetter letter="C" />
                            <AnimLetter letter="o" />
                            <AnimLetter letter="n" />
                            <AnimLetter letter="t" />
                            <AnimLetter letter="a" />
                            <AnimLetter letter="c" />
                            <AnimLetter letter="t" />
                        </Title>
                        <ContactContent>
                            Je suis disponible immédiatement pour tout type de
                            mission de développement web. N'hésitez pas à me
                            contacter.
                        </ContactContent>
                    </header>
                    <div>
                        <ButtonAction href="mailto:admin@davprocode.com">
                            Send !
                        </ButtonAction>
                    </div>
                </ContactWrapper>
                <ContactMapContainer data-aos="fade-up">
                    <div>
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
                    </div>
                </ContactMapContainer>
            </ContactContainer>
        </SectionFull>
    )
}
