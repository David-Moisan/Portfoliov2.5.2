import React, { Component } from 'react'
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './hooks/Layout'
import HomePage from './pages/HomePage'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import ProjectListPage from './components/project/ProjectListPage'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/project" element={<ProjectListPage/>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        )
    }
}

const appDiv = document.getElementById("root")
render(<App/>, appDiv)
