import React, {Component} from 'react'
import DataAPI from '../api'


class SSH extends Component {

	constructor() {
		super()
		let data = DataAPI.content;

		this.state = {
			title: data.intro.title,
			copy: data.intro.copy
		}
	}
	render() {
		return (
      <div className="ssh">
        <pre>
          <code>{this.state.sshKey}</code>
        </pre>
      </div>
		)
  }
}

export default SSH