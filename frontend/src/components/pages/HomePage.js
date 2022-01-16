import React, { Component } from 'react'
import HomePresentation from '../components/home/HomePresentation'
import Project from "../components/Project"

export default class HomePage extends Component {
    render() {
        return (
            <div className='full-page'>    
                <HomePresentation />
                {/* HomeAnimation */}
                <Project />
            </div>
        )
    }
}
