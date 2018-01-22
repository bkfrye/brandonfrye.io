import React, {Component} from 'react'

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
                <div className="today-msg">Happy {this.state.date}!</div>

    			<div className="footer-bar">
    				<div className="footer-bar-item"></div>
    				<div className="footer-bar-item"></div>
    				<div className="footer-bar-item"></div>
    			</div>
    		</div>
        )
	}

}

export default (Footer)
