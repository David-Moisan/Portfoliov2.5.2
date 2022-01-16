import React from 'react'
import BigBackgroundFont from '../hooks/BigBackgroundFont'
import ScrollDown from './ScrollDown'
import { Link } from 'react-router-dom'

export default function Blog() {
    return (
        <section className='blog section-full' id='blog'>
            <BigBackgroundFont text="Blog"/>
            <ScrollDown />
            {/* ListBlogPost */}
            <footer className='blog__footer'>
                <Link to="/blog" className='blog__footer--link'>
                    Read more articles
                </Link>
            </footer>
        </section>
    )
}
