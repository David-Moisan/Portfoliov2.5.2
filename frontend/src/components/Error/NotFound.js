import React from 'react'
import { SectionFull } from '../../utils/style/GlobalSection'
import { ErrorContainer, ErrorImg, ErrorTitle } from './ErrorStyle'
import Badge from '../../../static/source/Badge.png'

export default function NotFound() {
    return (
        <SectionFull>
            <ErrorContainer>
                <ErrorTitle>Que faites-vous ici ?</ErrorTitle>
                <ErrorImg src={Badge} alt="404Error" />
            </ErrorContainer>
        </SectionFull>
    )
}
