import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    min-height: 100vh;
    width: 95%;

    @media only screen and (min-width: 320px) and (max-width: 959px) {
        flex-direction: column;
    }
`

export const ContactWrapper = styled.div`
    width: 50%;
    padding-right: 5rem;
    & > header {
        position: relative;
    }
    & + div {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        right: 0;
    }

    @media only screen and (min-width: 320px) and (max-width: 959px) {
        width: 100%;
        padding-right: 0;
    }
`

export const ContactContent = styled.p`
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    position: relative;
`

export const ContactMapContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 320px) and (max-width: 959px) {
        display: none;
    }
`

export const ContactMapInfo = styled.div`
    position: absolute;
    background: ${colors.background};
    border: 1px solid ${colors.yellow};
    box-shadow: 0px 8px 8px 0px #000;
    top: 50px;
    left: 5rem;
    z-index: 1000;
    width: 266px;
    padding: 21px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
