import styled from 'styled-components'
import colors from '../../../utils/style/colors'
import { Link } from 'react-router-dom'

export const AllProjectList = styled.ul`
    padding: 0;
    margin: 0 0 3.25rem 0;
`
export const AllProjectItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 14.55rem 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    margin-bottom: 3.45rem;
`
export const AllProjectContent = styled.div`
    padding: 3.45rem;
    background: linear-gradient(
        134deg,
        ${colors.background} 0%,
        ${colors.backgroundHover}
    );
    box-shadow: 5px 8px 13px 3px ${colors.boxShadow};
    border-radius: 10px;
    min-height: 22.19rem;
    grid-area: 1 / 1 / auto / 3;
    width: 75%;
`

export const AllProjectTitle = styled.h2`
    margin-bottom: 1.31rem;
    color: ${colors.yellow};
`
export const AllProjectDescription = styled.div`
    line-height: 233%;
    min-height: 13rem;
    font-size: 1.1rem;
`
export const AllProjectBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.31rem 0 0;
    & > a {
        color: ${colors.text};
        border: none;
        background: linear-gradient(
            134deg,
            ${colors.blue} 0%,
            ${colors.blueLight}
        );
    }
    & > a:hover {
        background: linear-gradient(134deg, ${colors.yellow} 0%, ${colors.red});
        transition: all 0.21s ease-in;
    }
`

export const AllProjectLink = styled(Link)`
    width: auto;
    height: auto;
    font-size: 1.1rem;
    margin: 0;
    padding: 0.89rem;
    border-radius: 8px;
`

export const AllProjectLinkGitHub = styled.a`
    border-radius: 50%;
    text-align: center;
    padding: 0.89rem;
    line-height: 0;
    margin: 0;
    display: inline-block;
`

export const AllProjectTechList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 1.55rem 0 0.63rem;
    padding: 0;

    & > li {
        margin: 0 1.25rem 0.312rem 0;
        color: ${colors.blueLight};
        font-weight: 200;
        white-space: nowrap;
    }
`
export const AllProjectImageContainer = styled.div`
    grid-area: 1 / 2 / auto / 4;
    position: relative;
    right: -5rem;

    & > a {
        width: 100%;
        height: 100%;
    }
`

export const AllProjectImgWrapper = styled.div`
    position: relative;
    padding-top: 55.21%;
    background-color: transparent;
    border-radius: 8px;

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(1) blur(1px);
    }

    & > img:hover {
        filter: grayscale(0) blur(0);
        transition: all 0.21s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
`
