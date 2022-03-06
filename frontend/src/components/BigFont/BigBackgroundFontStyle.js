import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const BigFont = styled.div`
    position: absolute;
    width: 90%;
    top: -13rem;
    font-size: 32rem;
    font-weight: bold;
    color: ${colors.bigFont};
    z-index: -1;

    @media only screen and (min-width: 425px) and (max-width: 1024px) {
        font-size: 10rem;
        top: 0;
        left: 1rem;
    }

    @media only screen and (max-width: 424px) {
        font-size: 8rem;
        top: 0;
        left: 1rem;
    }
`
