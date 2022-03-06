import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        
    }
`

export const Scroll = styled.div`
    position: absolute;
    right: 0.89rem;
    bottom: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 300;
    -webkit-box-direction: normal;
    z-index: 50;
    animation: ${bounce} 1s linear infinite;
    & > span {
        writing-mode: vertical-lr;
        text-orientation: mixed;
    }
    & > i {
        margin-top: 0.89rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        display: none;
    }
`
