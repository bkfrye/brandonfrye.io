import React, {Component} from 'react'
import GSAP from 'react-gsap-enhancer'
import DataAPI from '../api.js'
import Intro from './Intro'

class Home extends Component {

	constructor() {
		super()
		let data = DataAPI.content;

		this.state = {
			sshKey: data.ssh.key
		}
	}

	render() {
		return (<div>
			<section className="intro">
				<Intro/>
			</section>

			<div className="ssh">
				<pre>
          <code>{this.state.sshKey}</code>
        </pre>
			</div>
		</div>)
	}
}

export default GSAP()(Home)
