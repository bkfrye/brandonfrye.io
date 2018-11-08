import React, {Component} from 'react'
import GSAP from 'react-gsap-enhancer'
import Intro from './Intro'
import SSH from './SSH'

class Home extends Component {

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
