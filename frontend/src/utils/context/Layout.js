import React, { Component } from 'react'
import Loading from '../../components/Loading'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'

const PageInner = styled.div`
    height: 100%;
    width: 100%;
`

export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: true }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 5000)
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        return (
            <PageInner>
                <Navbar />
                {this.props.children}
            </PageInner>
        )
    }
}
