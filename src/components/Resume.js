import React, { Component } from 'react'
import { Document, Page } from 'react-pdf/build/entry.webpack'
import PDF from '../brandon_frye_resume.pdf'

class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages })
    }

    render() {
        const { pageNumber, numPages } = this.state

        return (
            <div className="resume">
                <Document file={ PDF } onLoadSuccess={ this.onDocumentLoad }>
                    <Page pageNumber={ pageNumber } />
                </Document>
                <p className="page-num">{ pageNumber } of { numPages }</p>
            </div>
        )
    }
}

export default Resume
