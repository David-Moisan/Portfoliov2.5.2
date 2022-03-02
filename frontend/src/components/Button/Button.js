import React from 'react'
import { ButtonStyled } from './ButtonStyle'

/**
 * Button
 * @param {string} route
 * @param {string} text
 * @returns un boutton avec une route et un text en props
 */
export default function Button({ route, text }) {
    return (
        <ButtonStyled type="button" to={route}>
            {text}
        </ButtonStyled>
    )
}
