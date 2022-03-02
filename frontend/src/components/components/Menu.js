import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from "react-responsive"

/**
 * Menu
 * @returns l'ensemble des liens pour naviguer sur le site 
 */
export default function Menu() {
    const isTablet = useMediaQuery({maxWidth: 768});

    return (
        <nav className='navbar__menu'>
            <NavLink to="/project" title='My Project'>{isTablet ? <i className="fa fa-code mobile-icons" aria-hidden="true"></i> : "Project" }</NavLink>
            <NavLink to="/about" title='About me'>{isTablet ? <i className="fa fa-user mobile-icons" aria-hidden="true"></i> : "About"}</NavLink>
            {isTablet ? <NavLink to='/' title='Home'><i className='fa fa-home mobile-icons' aria-hidden="true"></i></NavLink> : null }
            <NavLink to="/blog" title='Blog Posts'>{isTablet ? <i className="fa fa-newspaper-o mobile-icons" aria-hidden="true"></i> : "Blog"}</NavLink>
            <NavLink to="/contact" title='Contact me'>{isTablet ? <i className="fa fa-paper-plane mobile-icons" aria-hidden="true"></i> :"Contact"}</NavLink>
        </nav>
    )
}
