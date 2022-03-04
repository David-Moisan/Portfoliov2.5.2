import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const DetailProjectPageHeader = styled.header`
    width: 100%;
`

export const BackBtn = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.25rem;
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

export const DetailProjectWrapper = styled.main`
    margin-top: 3.13rem;
    margin-bottom: 6.26rem;
    min-height: calc(100vh - 7.81rem);
    padding: 1.25rem;
    border-radius: 10px;
    background: ${colors.backgroundHover};
`

export const CaseProjectHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 3.13rem;
`
export const CaseProjectTitle = styled.h1`
    font-size: 3rem;
    line-height: 4.38rem;
    margin-bottom: 1.25rem;
`
export const CaseProjectDate = styled.p`
    color: ${colors.gray};
    font-size: 1.1rem;
    font-weight: 300;
`
export const CaseProjectLink = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    & > a {
        color: ${colors.text};
        cursor: pointer;
        padding: 0.89rem;
        margin: 0;
    }
`
export const CaseProjectInfo = styled.section`
    margin-bottom: 4.38rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
`
//Le content nécessite plusieurs règles de style sans pouvoir accéder directement
// via le styled-components donc faire un fichier indépendant CSS

export const CaseProjectImage = styled.div`
    width: 100%;
    margin: 0.89rem 0;
    position: relative;

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
