import React from 'react'
import AnimLetter from '../AnimLetter/AnimLetter'
import ScrollDown from '../ScrollDown/ScrollDown'
import Cloud from './Cloud'
import { useMediaQuery } from 'react-responsive'
import { SectionFull, Title } from '../../utils/style/GlobalSection'
import {
    AboutContainer,
    AboutTextWrapper,
    AboutText,
    SkillContainer,
} from './AboutStyle'
import { AnimationSpace } from '../AnimLetter/AnimLetterStyle'

/**
 * About
 * @returns le composant About pour une présentation
 */
export default function About() {
    const isMobile = useMediaQuery({ maxWidth: 450 })
    return (
        <SectionFull>
            <AboutContainer>
                <ScrollDown />
                <AboutTextWrapper data-aos="fade-up">
                    <header>
                        <Title>
                            <AnimLetter letter="À" />
                            <AnimationSpace />
                            <AnimLetter letter="P" />
                            <AnimLetter letter="r" />
                            <AnimLetter letter="o" />
                            <AnimLetter letter="p" />
                            <AnimLetter letter="o" />
                            <AnimLetter letter="s" />
                        </Title>
                        <AboutText>
                            Après une carrière dans l'armée française en tant
                            que parachutiste, j'ai décidé de me reconvertir dans
                            le domaine du développement web en 2020. J'ai donc
                            repris mes études avec l'école WIS de Toulouse pour
                            valider un BTS DWWM ainsi qu'une Licence Chef de
                            Projet. J'ai commencé un Master en Ingénierie
                            Informatique en 2022 pour une alternance de deux
                            ans, après avoir trouvé une alternance dans le
                            secteur bancaire, j'ai eu une proposition de CDI
                            dans le domaine de l'Assurance, que j'ai
                            immédiatement accepté. En effet, vivre de ma passion
                            était mon objectif depuis le début de ma
                            reconversion. J'ai donc arrêté mon Master en cours
                            de première année sans le valider. Et c'est donc
                            dans le domaine de l'assurance que je reprends les
                            armes, mais cette fois assis sur une chaise de
                            bureau afin de gérer les flux EDI d'une entreprise
                            qui génère des millions de chiffre d'affaires. Me
                            voilà enfin Développeur Web full stack dans une
                            technologie que je privilégie comme PHP.
                        </AboutText>
                        <AboutText>
                            Depuis que j'ai découvert le développement
                            informatique, je n'ai jamais cessé d'apprendre
                            chaque jour, poussé par la curiosité et une passion
                            grandissante.
                        </AboutText>
                    </header>
                </AboutTextWrapper>
                {isMobile ? null : (
                    <SkillContainer data-aos="fade-down">
                        <Cloud />
                    </SkillContainer>
                )}
            </AboutContainer>
        </SectionFull>
    )
}
