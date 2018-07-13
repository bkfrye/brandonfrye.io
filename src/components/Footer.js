import React, {Component} from 'react'
import Obfuscate from 'react-obfuscate'

class Footer extends Component {
	constructor() {
		super()

		const days = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			]

		let d = new Date(),
			dayName = days[d.getDay()]

		this.state = {
			date: dayName
		}
	}

	render() {
		return (
      <div>
				<div className="footer-info">
					<div className="email">
						<Obfuscate email="brandonkfrye@gmail.com" headers={{
								subject: 'Request from brandonfrye.io'
							}}/>
					</div>
					<div className="today-msg">Happy {this.state.date}!</div>
				</div>

				<div className="footer-bar">
					<div className="footer-bar-item"></div>
					<div className="footer-bar-item"></div>
					<div className="footer-bar-item"></div>
				</div>
			</div>
    )
	}
}

export default(Footer)