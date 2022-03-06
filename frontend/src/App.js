import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './utils/context/Layout'
import HomePage from './pages/HomePage'
import BlogListPage from './pages/BlogListPage'
import ProjectListPage from './pages/ProjectListPage'
import DetailProjectPage from './pages/DetailProjectPage'
import DetailBlogPostPage from './pages/DetailBlogPostPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import NotFound from './components/Error/NotFound'
import GlobalStyle from './utils/style/GlobalStyle'

export default class App extends Component {
    render() {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <GlobalStyle />
                    <Layout>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route
                                path="/project"
                                element={<ProjectListPage />}
                            />
                            <Route
                                path="/project/:id"
                                element={<DetailProjectPage />}
                            />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/blog" element={<BlogListPage />} />
                            <Route
                                path="/blog/:id"
                                element={<DetailBlogPostPage />}
                            />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </React.StrictMode>
        )
    }
}

const appDiv = document.getElementById('root')
render(<App />, appDiv)
