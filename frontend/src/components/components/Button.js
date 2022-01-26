import React from 'react'
import { Link } from 'react-router-dom'
import useCursorHandler from '../hooks/useCursorHandler'

export default function Button({ route, text }) {

    const cursorHandlers = useCursorHandler();

    return (
        <Link 
            className='button' 
            type='button' 
            to={route} 
            {...cursorHandlers}
        >
            {text}
        </Link>
    )
}
