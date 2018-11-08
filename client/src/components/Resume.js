import React, {Component} from 'react'
import PDF from 'react-pdf-js'
import file from '../brandon_frye_resume.pdf'

class Resume extends Component {
	render() {
		return (<div className="resume">
			<PDF file={file} fillWidth="fillWidth" fillHeight="fillHeight"/>
		</div>)
	}
}

export default Resume
