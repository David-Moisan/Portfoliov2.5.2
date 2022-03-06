import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
`
export const HomeWrapper = styled.div`
    position: relative;
    font-size: 1.6rem;
    width: 100%;
    z-index: 25;
`
export const HomeTitle = styled.h1`
    font-family: 'Bakbak One', cursive;
    font-weight: 400;
    font-size: 8rem;
    line-height: 8.7rem;
    margin: 0;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 4rem;
        line-height: normal;
    }

    @media only screen and (max-width: 767px) {
        font-size: 2.4rem;
        line-height: normal;
    }
`

export const HomeSubtitle = styled.p`
    position: relative;
    font-weight: 300;
    letter-spacing: 4px;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    display: block;
    color: ${colors.gray};

    @media only screen and (max-width: 767px) {
        font-size: 1.2rem;
    }
`
