import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

export const Container = styled.menu`
    background: ${colors.background};
    bottom: 0;
    box-shadow: 5px 8px 13px 3px ${colors.boxShadow};
    height: 100%;
    left: 0;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    right: auto;
    width: 13rem;
    z-index: 1000;

    @media (min-width: 320px) and (max-width: 769px) {
        width: 100%;
        height: 4.5rem;
        background: ${colors.backgroundHover};
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 93%;
        z-index: 1000;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: none;
    }
`

export const TopNavbar = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
    width: 100%;
    & > span {
        font-size: 1.1rem;
        color: ${colors.gray};
        margin-top: 1rem;
    }
    @media (min-width: 320px) and (max-width: 769px) {
        display: none;
    }
`

export const HomeLink = styled(Link)`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > span {
        font-family: 'Bakbak One', cursive;
        font-size: 2rem;
        color: ${colors.text};
        margin-top: 0.21rem;
    }
    & > img {
        height: auto;
        width: 6rem;
    }
`

export const Menu = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid ${colors.gray};
    & > a {
        text-align: center;
        display: block;
        width: 100%;
        font-size: 1.6rem;
        font-weight: bold;
        color: ${colors.text};
        line-height: 5rem;
        border-bottom: 1px solid ${colors.gray};
        transition: all 0.21s ease-in;
    }
    & > a:hover {
        background: linear-gradient(
            134deg,
            ${colors.background} 0%,
            ${colors.backgroundHover}
        );
        color: ${colors.blueLight};
        transition: all 0.21s ease-out;
    }

    @media (min-width: 320px) and (max-width: 769px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-top: 0;
        & > a {
            font-size: 1.1rem;
            border-bottom: 0;
            margin: 0.34rem;
            font-weight: normal;
        }
    }
`

export const MobileIcons = styled.i`
    font-size: 1.6rem;
    &:hover {
        color: ${colors.blueLight};
        transition: color 0.21s ease-in-out;
    }
`

export const ListSocialMedia = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;

    @media (min-width: 320px) and (max-width: 769px) {
        display: none;
    }
`

export const LinkSocialMedia = styled.a`
    padding: 0.21rem 0.55rem;
    & > i {
        color: ${colors.text};
        font-size: 2rem;
        margin-top: 1rem;
    }
    & > i:hover {
        color: ${colors.blueLight};
        transition: 0.21s ease-in-out;
    }
`
