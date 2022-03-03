import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'

const jelloBounce = keyframes`
0% {
    transform: scale3d(1, 1, 1);
}

30% {
    transform: scale3d(1.25, 0.75, 1);
}

40% {
    transform: scale3d(0.75, 1.25, 1);
}

50% {
    transform: scale3d(1.15, 0.85, 1);
}

65% {
    transform: scale3d(0.95, 1.05, 1);
}

75% {
    transform: scale3d(1.05, 0.95, 1);
}

100% {
    transform: scale3d(1, 1, 1);
}
`

export const AnimationLetter = styled.span`
    display: inline-block;
    transition: all 0.21s ease-out;
    &:hover {
        color: ${colors.blueLight};
        transition: color 0.21s ease-in-out;
        animation: ${jelloBounce} 0.8s ease-in-out both;
    }
`
export const AnimationSpace = styled.span`
    margin: 1rem;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        margin: 0.55rem;
    }
`

export const ColorLetter = styled.span`
    color: ${colors.yellow};
`
