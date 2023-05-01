/*@David-Moisan*/
/**refactoring 01/05/23 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../static/source/logo__minSize.png'
import { useMediaQuery } from 'react-responsive'
import {
    Container,
    TopNavbar,
    HomeLink,
    Menu,
    MobileIcons,
    ListSocialMedia,
    LinkSocialMedia,
} from './NavbarStyle'

/**
 * Navbar
 * @returns la navbar + le Menu
 */
export default function Navbar() {
    const isTablet = useMediaQuery({ maxWidth: 768 })

    return (
        <Container>
            <TopNavbar>
                <HomeLink to="/" title="Home">
                    <img rel="preload" src={Logo} alt="logo" />
                    <span>David</span>
                </HomeLink>
                <span>Full-stack Développeur</span>
            </TopNavbar>
            <Menu>
                <NavLink to="/project" title="Mes projets">
                    {isTablet ? (
                        <MobileIcons
                            className="fa fa-code"
                            aria-hidden="true"
                        ></MobileIcons>
                    ) : (
                        'Mes Projets'
                    )}
                </NavLink>
                <NavLink to="/about" title="À propos">
                    {isTablet ? (
                        <MobileIcons
                            className="fa fa-user"
                            aria-hidden="true"
                        ></MobileIcons>
                    ) : (
                        'À propos'
                    )}
                </NavLink>
                {isTablet ? (
                    <NavLink to="/" title="Accueil">
                        <MobileIcons
                            className="fa fa-home"
                            aria-hidden="true"
                        ></MobileIcons>
                    </NavLink>
                ) : null}
                <NavLink to="/blog" title="Articles de blog">
                    {isTablet ? (
                        <MobileIcons
                            className="fa fa-newspaper-o"
                            aria-hidden="true"
                        ></MobileIcons>
                    ) : (
                        'Blog'
                    )}
                </NavLink>
                <NavLink to="/contact" title="Me joindre">
                    {isTablet ? (
                        <MobileIcons
                            className="fa fa-paper-plane"
                            aria-hidden="true"
                        ></MobileIcons>
                    ) : (
                        'Contactez-moi'
                    )}
                </NavLink>
            </Menu>
            <ListSocialMedia>
                <li>
                    <LinkSocialMedia
                        href="https://github.com/David-Moisan"
                        target="_blank"
                    >
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </LinkSocialMedia>
                </li>
                <li>
                    <LinkSocialMedia
                        href="https://www.linkedin.com/in/david-moisan-6251331a5/"
                        target="_blank"
                    >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </LinkSocialMedia>
                </li>
                <li>
                    <LinkSocialMedia
                        href="https://twitter.com/phi__code"
                        target="_blank"
                    >
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </LinkSocialMedia>
                </li>
            </ListSocialMedia>
        </Container>
    )
}
