import React from 'react'
import Navbar from '../components/Navbar'

export default function Layout(props) {
    return (
        <div className='page-inner'>
            <Navbar />
            {props.children}
        </div>
    )
}
