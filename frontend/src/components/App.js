import React, { Component } from 'react'
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './hooks/Layout'
import HomePage from './pages/HomePage'
import BlogListPage from './components/blog/BlogListPage'
import ProjectListPage from './components/project/ProjectListPage'
import DetailProjectPage from './components/project/DetailProjectPage'
import DetailBlogPostPage from './components/blog/DetailBlogPostPage'
import AboutPage from './components/about/AboutPage'
import ContactPage from './components/contact/ContactPage'


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/project" element={<ProjectListPage/>} />
                        <Route path="/project/:id" element={<DetailProjectPage/>} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/blog" element={<BlogListPage />} />
                        <Route path="/blog/:id" element={<DetailBlogPostPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        )
    }
}

const appDiv = document.getElementById("root")
render(<App/>, appDiv)
