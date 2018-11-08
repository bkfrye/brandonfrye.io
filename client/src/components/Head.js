import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import screenshot from '../brandonfrye.jpg'

class Head extends Component {
	componentDidMount() {
		ReactGA.initialize('UA-61920224-1')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}
	render() {
		return (
			<Helmet>
				<title itemProp="name" lang="en">Brandon Frye - Front-end Developer and Designer</title>
				<link rel="canonical" href={window.location.href} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Brandon Frye - Front-end Developer and Designer" />
				<meta property="twitter:title" content="Brandon Frye - Front-end Developer and Designer" />
				<meta property="og:url" content={window.location.href} />
				<meta name="description" content="Brandon Frye is developer and designer with a passion for UX. Creating new web experiences for the modern web with web apps, mobile apps, and websites."/>
				<meta name="og:description" content="Brandon Frye is developer and designer with a passion for UX. Creating new web experiences for the modern web with web apps, mobile apps, and websites."/>
				<meta name="twitter:description" content="Brandon Frye is developer and designer with a passion for UX. Creating new web experiences for the modern web with web apps, mobile apps, and websites."/>
				<meta property="og:image" content={screenshot} />
				<meta property="twitter:image" content={screenshot} />
			</Helmet>
		)
	}
}

export default Head
