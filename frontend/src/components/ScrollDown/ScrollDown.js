import React from 'react'
import { Scroll } from './ScrollDownStyle'

/**
 * ScrollDown
 * @returns le composants du scroll-down
 */
export default function ScrollDown() {
    return (
        <Scroll>
            <span>scroll</span>
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </Scroll>
    )
}
