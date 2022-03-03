import React from 'react'
import { AnimationLetter } from './AnimLetterStyle'

/**
 * AnimLetter
 * @param {string} letter
 * @returns une span qui est animée
 */
export default function AnimLetter({ letter }) {
    return <AnimationLetter>{letter}</AnimationLetter>
}
