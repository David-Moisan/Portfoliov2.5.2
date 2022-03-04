import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

export const WorkWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`
export const WorkTitleContainer = styled.div`
    max-width: 40rem;
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

export const WorkBtnContainer = styled.div`
    display: flex;
    flex: 1 0 auto;
    justify-content: flex-end;
`
export const MainProjectContainer = styled.section`
    margin: 0px auto;
    padding: 100px 0px;
    max-width: 1000px;
`

export const ProjectList = styled.ul`
    margin: 80px 0px;
    & > a {
        position: relative;
        z-index: 1;
    }
`

export const ProjectItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 170px 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    margin: 80px 0px;
`

export const ProjectContent = styled.div`
    padding: 50px;
    background: ${colors.backgroundHover};
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.95);
    border-radius: 10px;
    min-height: 350px;
    grid-area: 1 / 1 / auto / 3;
    & > div {
        width: 75%;
    }
`

export const ProjectTitle = styled.h2`
    color: ${colors.yellow};
    font-size: clamp(24px, 5vw, 28px);
    line-height: 1.1;
    margin-bottom: 25px;
`

export const ProjectDescription = styled.div`
    line-height: 170%;
    min-height: 250px;
    color: ${colors.text};
    font-size: 1.1rem;
`

export const ProjectLink = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px 0px;
`

export const ProjectLinkBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px;
    color: ${colors.text};
    cursor: pointer;
    background: linear-gradient(134deg, ${colors.blueLight} 0%, ${colors.blue});
    &:hover {
        background: linear-gradient(134deg, ${colors.yellow} 0%, ${colors.red});
        transition: all 0.21s ease-in-out;
    }
    &.project__detail--view {
        width: auto;
        height: auto;
        font-size: 1.1rem;
        margin: 0;
        padding: 0.89rem;
        border-radius: 8px;
        margin-right: 10px;
    }
    &.project__github--link {
        border-radius: 50%;
        text-align: center;
        padding: 0.89rem;
        line-height: 0;
        margin: 0;
        display: inline-block;
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

export const ProjectImage = styled.div`
    grid-area: 1 / 2 / auto / 4;
    position: relative;
    right: -20px;
`

export const ProjectImageLink = styled(Link)`
    position: relative;
    padding-top: 56.25%;
    border-radius: 8px;
    background-color: ${colors.backgroundHover};
`

export const ProjectImageContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 8px;
`
