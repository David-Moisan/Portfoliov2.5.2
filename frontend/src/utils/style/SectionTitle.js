import styled from 'styled-components'
import colors from './colors'

export const Title = styled.h1`
    font-family: 'Bakbak One', cursive;
    font-size: 4.8rem;
    line-height: 6.7rem;
    margin-top: 0;
    margin-bottom: 1.1rem;
    color: ${colors.blueLight};

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        font-size: 3.55rem;
        line-height: normal;
    }

    @media only screen and (max-width: 320px) {
        font-size: 2.89rem;
    }
`
