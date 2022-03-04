import React, { Component } from 'react'
import TagCloud from 'TagCloud'
import { Skill } from './AboutStyle'

/**
 * Cloud
 * return l'animation de la section About
 */
export default class Cloud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: {
                radius: 233,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                direction: 135,
                keep: true,
            },
            texts: [
                'HTML',
                'CSS',
                'Javascript',
                'PHP',
                'Symfony',
                'Twig',
                'Three.js',
                'React',
                'Python',
                'Django',
                '3D',
                'Blender',
                'C#',
                'Unity',
                'Rest API',
                'MySQL',
                'GLSL',
                'VSCode',
                'Git',
                'Leaflet.js',
                'Chart.js',
                'npm',
                'webpack',
                'babel',
                'firebase',
            ],
        }
    }

    componentDidMount() {
        const skill = document.getElementById('skill')
        TagCloud(skill, this.state.texts, this.state.options)
    }

    render() {
        return <Skill id="skill" />
    }
}
