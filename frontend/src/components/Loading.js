import React from 'react'
import ReactLoading from 'react-loading'
import Logo from '../../static/source/logo__minSize.png'
import styled, { keyframes } from 'styled-components'
import colors from '../utils/style/colors'

const FlowAnimation = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(144px);
    transition: transform 0.21s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  100% {
    transform: translateY(3px);
    transition: transform 0.21s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`

const LoadinWrapper = styled.div`
    background: linear-gradient(134deg, ${colors.background} 0%, #000);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

    & > img {
        animation: ${FlowAnimation} 1s 0.21s;
        width: 6rem;
        height: 6rem;
    }
`

/**
 * It returns a div with a logo and a loading animation.
 * @returns A React component.
 */
const Loading = () => {
    return (
        <LoadinWrapper>
            <img src={Logo} alt="logo" />
            <ReactLoading type="bubbles" color="#ffffff" />
        </LoadinWrapper>
    )
}

export default Loading
