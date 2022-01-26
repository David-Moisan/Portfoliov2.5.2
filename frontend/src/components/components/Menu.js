import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from "react-responsive"
import useCursorHandler from '../hooks/useCursorHandler';

export default function Menu() {
    const isTablet = useMediaQuery({maxWidth: 768});
    const cursorHandlers = useCursorHandler();

    return (
        <nav className='navbar__menu'>
            <NavLink to="/project" title='My Project' {...cursorHandlers}>{isTablet ? <i className="fas fa-project-diagram mobile-icons"></i> : "Project" }</NavLink>
            <NavLink to="/about" title='About me' {...cursorHandlers}>{isTablet ? <i className="fas fa-user-circle mobile-icons"></i> : "About"}</NavLink>
            {isTablet ? <NavLink to='/' title='Home' {...cursorHandlers}><i className='fas fa-home mobile-icons'></i></NavLink> : null }
            <NavLink to="/blog" title='Blog Posts' {...cursorHandlers}>{isTablet ? <i className="fas fa-newspaper mobile-icons"></i> : "Blog"}</NavLink>
            <NavLink to="/contact" title='Contact me' {...cursorHandlers}>{isTablet ? <i className="fas fa-paper-plane mobile-icons"></i> :"Contact"}</NavLink>
        </nav>
    )
}
