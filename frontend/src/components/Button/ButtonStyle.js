import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

export const ButtonStyled = styled(Link)`
    background-color: ${colors.background};
    color: ${colors.blueLight};
    font-size: 1.1rem;
    text-align: center;
    letter-spacing: 4px;
    margin-top: 1.1rem;
    padding: 0.89rem;
    position: relative;
    width: 100%;
    max-width: 16rem;
    height: 3.4375rem;
    display: inline-block;
    border: 1px solid ${colors.blueLight};
    box-shadow: 5px 8px 13px 3px ${colors.boxShadow};
    transition: color 0.21s ease-in-out;
    &:hover {
        color: ${colors.text};
        background: linear-gradient(
            134deg,
            ${colors.blueLight} 0%,
            ${colors.blue}
        );
        transition: all 0.21s ease-in-out;
    }
`
