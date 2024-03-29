import React from 'react'
import AnimLetter from '../components/AnimLetter/AnimLetter'
import { AnimationSpace } from '../components/AnimLetter/AnimLetterStyle'
import BigBackgroundFont from '../components/BigFont/BigBackgroundFont'
import { ButtonAction } from '../components/Button/ButtonStyle'
import {
    ContactContainer,
    ContactContent,
    ContactWrapper,
} from '../components/Contact/ContactStyle'
import { Container, SectionFull, Title } from '../utils/style/GlobalSection'

/**
 * ContactPage
 * ! Idéé: Créer un anim letter pour des phrases et non pour chaque lettre permetrait de mieux lire le code ?
 * @returns La page contact
 */
export default function ContactPage() {
    return (
        <Container>
            <SectionFull>
                <BigBackgroundFont text="@" />
                <ContactContainer data-aos="fade-right">
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
                                Je suis disponible immédiatement pour tout type
                                de mission de développement web. N'hésitez pas à
                                me contacter.
                            </ContactContent>
                        </header>
                        <div>
                            <ButtonAction href="mailto:admin@davprocode.com">
                                Envoyer !
                            </ButtonAction>
                        </div>
                    </ContactWrapper>
                </ContactContainer>
            </SectionFull>
        </Container>
    )
}
