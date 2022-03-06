import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const BlogWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 5rem;

    @media only screen and (min-width: 320px) and (max-width: 1200px) {
        padding: 0;

        & > article {
            width: 100%;
        }
    }
`
export const BlogPost = styled.article`
    margin-bottom: 2.5rem;
    width: 32%;
    position: relative;
    padding: 1.5rem 3rem 2.5rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background: linear-gradient(
        134deg,
        ${colors.background} 0%,
        ${colors.backgroundHover}
    );
    box-shadow: 5px 8px 13px 3px ${colors.boxShadow};
    border-bottom-right-radius: 13px;
    border-bottom-left-radius: 13px;
`
export const BlogCategory = styled.div`
    font-size: 0.89rem;
    text-transform: uppercase;
    letter-spacing: 0.19rem;
    border: 0;
    margin-bottom: 1rem;
    margin-top: 0.55rem;
    display: block;
`
export const BlogContent = styled.div`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    margin-top: 0.94rem;
    display: block;
    max-width: 100%;
    position: relative;
`

export const BlogTitle = styled.div`
    font-size: 1.6rem;
    margin-bottom: 0.55rem;
    & > h5 a {
        color: ${colors.text};
    }
    & > h5 a:hover {
        color: ${colors.yellow};
        transition: color 0.21s ease-in;
    }
`
export const BlogFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    font-size: 1.6rem;
    & > a {
        color: ${colors.blueLight};
    }

    & > a:hover {
        color: ${colors.blue};
        text-decoration: underline;
        transition: all 0.21s ease-in-out;
    }
`

//Pour la page Blog (liste de tous les articles de blog avec l'image de couverture)
export const BlogImgContainer = styled(Link)`
    width: 100%;
    height: 100%;

    & > img {
        max-width: 100%;
        object-fit: cover;
    }
`
