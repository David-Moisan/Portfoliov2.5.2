import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <nav className='navbar__menu'>
            <NavLink to="/project">Project</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}
