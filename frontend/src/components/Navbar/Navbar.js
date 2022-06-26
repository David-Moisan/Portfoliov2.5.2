/*@David-Moisan*/
/**refactoring 02/03/22 */

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
    LanguageChangeContainer,
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
                <span>Web developer</span>
            </TopNavbar>
            <Menu>
                <NavLink to="/project" title="My Project">
                    {isTablet ? (
                        <MobileIcons
                            className="fa fa-code"
                            aria-hidden="true"
                        ></MobileIcons>
                    ) : (
                        'Project'
                    )}
                </NavLink>
                <NavLink to="/about" title="About me">
                    {isTablet ? (
                        <MobileIcons
                            className="fa fa-user"
                            aria-hidden="true"
                        ></MobileIcons>
                    ) : (
                        'About'
                    )}
                </NavLink>
                {isTablet ? (
                    <NavLink to="/" title="Home">
                        <MobileIcons
                            className="fa fa-home"
                            aria-hidden="true"
                        ></MobileIcons>
                    </NavLink>
                ) : null}
                <NavLink to="/blog" title="Blog Posts">
                    {isTablet ? (
                        <MobileIcons
                            className="fa fa-newspaper-o"
                            aria-hidden="true"
                        ></MobileIcons>
                    ) : (
                        'Blog'
                    )}
                </NavLink>
                <NavLink to="/contact" title="Contact me">
                    {isTablet ? (
                        <MobileIcons
                            className="fa fa-paper-plane"
                            aria-hidden="true"
                        ></MobileIcons>
                    ) : (
                        'Contact'
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
            </ListSocialMedia>
            {/* <LanguageChangeContainer>
                <select
                    className="custom-select"
                    value={props.language}
                    onChange={(e) => props.handleSetLanguage(e.target.value)}
                >
                    <option value="English">English</option>
                    <option value="Français">Français</option>
                </select>
            </LanguageChangeContainer> */}
        </Container>
    )
}
