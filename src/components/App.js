import React, { Component } from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 700)
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return null
        }

        return (
            <div>
                <Head />
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}


export default App
