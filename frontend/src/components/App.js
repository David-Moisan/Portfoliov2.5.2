import React, { Component } from 'react'
import { render } from "react-dom"

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Test of React</h1>
            </div>
        )
    }
}

const appDiv = document.getElementById("root")
render(<App/>, appDiv)
