import React, {Component} from 'react'
import GSAP from 'react-gsap-enhancer'
import DataAPI from '../api.js'
import Intro from './Intro'
import SSH from './SSH'

class Home extends Component {

	constructor() {
		super()
		let data = DataAPI.content;

		this.state = {
			sshKey: data.ssh.key
		}
	}

	render() {
		return (
      <div>
				<Intro/>
        <SSH />
  		</div>
    )
	}
}

export default GSAP()(Home)
