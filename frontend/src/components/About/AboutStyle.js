import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const AboutContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`
export const AboutTextWrapper = styled.div`
    width: 40%;
    & > header {
        position: relative;
    }
`

export const AboutText = styled.p`
    position: relative;
    margin-bottom: 1.5rem;
    line-height: 1.5;
    font-size: 1.1rem;
`
export const SkillContainer = styled.div`
    width: 60%;
    flex: 1 1 auto;
    position: relative;
`

//Style appliqué sur le Composant ../Cloud;

export const Skill = styled.div`
    position: absolute;
    top: -32vh;
    left: 15%;
    color: ${colors.blueLight};
`
