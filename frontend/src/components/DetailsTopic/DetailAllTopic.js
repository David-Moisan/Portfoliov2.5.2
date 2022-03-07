import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const DetailWrapper = styled.main`
    margin-top: 3.13rem;
    margin-bottom: 6.26rem;
    min-height: calc(100vh - 7.81rem);
    padding: 1.25rem;
    border-radius: 10px;
    background: ${colors.backgroundHover};

    @media (max-width: 768px) {
        margin-top: 50px;
    }
`
export const DetailContent = styled.section`
    margin-top: 6.26rem;
    margin-bottom: 6.26rem;
    position: relative;

    & > div {
        margin-bottom: 50px;
    }
`

export const DetailHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    & > h1 {
        margin: 0px;
        line-height: 70px;
        font-size: 1.8rem;
    }
`

export const DetailLink = styled.div`
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

export const DetailInfo = styled.section`
    margin-bottom: 4.38rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }

    @media (min-width: 960px) and (max-width: 1000px) {
        grid-template-columns: 0.6fr 1fr;
    }
`

//Le content nécessite plusieurs règles de style sans pouvoir accéder directement
// via le styled-components donc faire un fichier indépendant CSS

export const DetailImage = styled.div`
    width: 100%;
    margin: 0.89rem 0;
`

export const DetailImageWrapper = styled.div`
    position: relative;
    padding-top: 56.25%;
    background-color: linear-gradient(
        134deg,
        ${colors.background} 0%,
        ${colors.backgroundHover}
    );
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
