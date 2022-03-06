import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

export const WorkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div:first-child {
        max-width: 40rem;
    }

    & > div:last-child {
        flex: 1 0 auto;
        display: flex;
        justify-content: flex-end;
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    }
`

export const WorkHeader = styled.header`
    position: relative;
`

export const WorkDescription = styled.p`
    position: relative;
    margin-bottom: 1.5rem;
`

export const WorkLink = styled(Link)`
    color: ${colors.yellow};
    &:hover {
        color: ${colors.red};
        transition: color 0.21s ease-out;
    }
`
export const MainProjectContainer = styled.section`
    margin-bottom: 100px;
`

export const ProjectWrapper = styled.section`
    margin: 80px 0px;
`

export const ProjectContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 170px 1fr;
    grid-template-rows: 1fr;
    align-items: center;
`

export const ProjectDetail = styled.div`
    padding: 50px;
    background: linear-gradient(
        134deg,
        ${colors.background} 0%,
        ${colors.backgroundHover}
    );
    box-shadow: 0px 5px 10px ${colors.boxShadow};
    border-radius: 10px;
    min-height: 350px;
    grid-area: 1 / 1 / auto / 3;

    @media (max-width: 1000px) {
        min-height: unset;
        grid-column: 1 / 4;
        grid-row: unset;
        padding: 30px;
    }
`

export const ProjectDetailContainer = styled.div`
    width: 75%;

    @media (max-width: 1000px) {
        width: 100%;
    }
`

export const ProjectTitle = styled.h2`
    color: ${colors.yellow};
    font-size: clamp(24px, 5vw, 28px);
    line-height: 140%;
    margin-bottom: 25px;
`

export const ProjectDescription = styled.p`
    line-height: 170%;
    min-height: 250px;
    color: ${colors.text};
    font-size: 1.1rem;

    @media (max-width: 1000px) {
        min-height: unset;
    }
`

export const ProjectLink = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px 0px;

    & > a {
        margin-right: 10px;
    }
`

export const ProjectLinkBtn = styled(Link)`
    background: linear-gradient(134deg, ${colors.blueLight} 0%, ${colors.blue});
    color: ${colors.text};
    border: none;
    cursor: pointer;
    transition: all 0.21s ease 0s;
    width: auto;
    height: auto;
    font-size: 1.1rem;
    margin: 0px;
    padding: 13px;
    border-radius: 8px;

    &:hover {
        background: linear-gradient(134deg, ${colors.yellow} 0%, ${colors.red});
        transition: all 0.21s ease 0s;
    }
`

/**
 * Button qui n'as pas besoin du Link react-router-dom
 */

export const ProjectBlankLinkBtn = styled.a`
    background: linear-gradient(134deg, ${colors.blueLight} 0%, ${colors.blue});
    color: ${colors.text};
    border: none;
    cursor: pointer;
    display: inline-block;
    padding: 13px;
    border-radius: 50%;
    text-align: center;
    padding: 0.89rem;
    line-height: 0;
    margin: 0;
    transition: all 0.21s ease 0s;
    &:hover {
        background: linear-gradient(134deg, ${colors.yellow} 0%, ${colors.red});
        transition: all 0.21s ease 0s;
    }
`

//Image

export const ProjectPreview = styled.div`
    grid-area: 1 / 2 / auto / 4;
    position: relative;
    right: -21px;
    background-color: ${colors.backgroundHover};

    & > img {
        border-radius: 10px;
    }

    @media (max-width: 1000px) {
        right: 0px;
        grid-column: 1 / 4;
        margin-bottom: 21px;
    }
`

export const ProjectImageWrapper = styled.div`
    position: relative;
    padding-top: 56.25%;
    border-radius: 10px;

    & > img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        border: 0px;
    }
`

export const ProjectTechTag = styled.div`
    margin: 10px;
    color: ${colors.blueLight};
    display: flex;

    @media (max-width: 1000px) {
        display: none;
    }
`

export const ProjectTechList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    &:nth-of-type(2n + 1) {
        margin: 15px 0px 5px 21px;
        justify-content: flex-end;
    }
    & > li {
        color: ${colors.blueLight};
        margin: 0px 20px 5px 0px;
        font-weight: 200;
        white-space: nowrap;
    }
`
