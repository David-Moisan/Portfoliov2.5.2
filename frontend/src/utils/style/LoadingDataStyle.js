import styled from 'styled-components'
import colors from './colors'

export const Spinner = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    font-size: 3rem;
    color: ${colors.blueLight};
`

export const ErrorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: center;
    min-height: 100vh;
    text-align: center;
    text-align: center;
`

export const CrossError = styled.i`
    font-size: 2rem;
    color: ${colors.red};
`
