import styled from 'styled-components'
import colors from './colors'

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    padding-left: 12rem;
    width: 95%;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        padding-left: 0;
    }
`

export const SectionFull = styled.section`
    min-height: 100vh;
    padding: 0 3.45rem;
    position: relative;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        padding: 0 1rem;
        min-height: 50vh;
    }
`

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
