import React, { Component } from 'react'
import HomePresentation from '../components/home/HomePresentation'
import Animation from '../components/home/Animation'
import Project from '../components/project/Project'
import About from '../components/About'
import Blog from '../components/blog/Blog'
import Contact from '../components/Contact'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    min-height: 100vh;
    padding-left: 13rem;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        padding-left: 0;
    }
`

/**
 * Home Page me permet d'afficher tous les componsants qui doivent être présent sur ma page d'accueil
 */
export default class HomePage extends Component {
    render() {
        return (
            <Container>
                <HomePresentation />
                {/* <Animation /> */}
                <Project />
                <About />
                <Blog />
                <Contact />
            </Container>
        )
    }
}
