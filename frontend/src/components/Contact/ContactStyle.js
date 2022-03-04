import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        flex-direction: column;
    }
`

export const ContactWrapper = styled.div`
    width: 50%;
    padding-right: 5rem;
    & > header {
        position: relative;
    }

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        padding-right: 0;
        padding-bottom: 13vh;
    }
`

export const ContactContent = styled.p`
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
`

export const ContactForm = styled.div`
    width: 100%;
    padding-top: 5rem;
    display: block;
    position: relative;
`

export const ContactMapContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    right: 0;
`

export const ContactInfoContainer = styled.div`
    position: relative;
`

export const ContactMapInfo = styled.div`
    position: absolute;
    background: ${colors.background};
    top: 4rem;
    left: 5rem;
    z-index: 1000;
    width: 16.625rem;
    padding: 1.3125rem;
    color: ${colors.text};
    font-size: 1.1rem;
    font-weight: 300;

    & > span {
        font-size: 1rem;
    }

    & > span i {
        color: ${colors.yellow};
    }
`
export const MapImage = styled.img`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
