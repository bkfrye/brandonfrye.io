import React, {Component} from 'react'
import DataAPI from '../api'


class SSH extends Component {

	constructor() {
		super()
		let data = DataAPI.content;

    this.state = {
      ssh: data.ssh
    }
	}

	render() {
		return (
      <div className="ssh">
        <pre>
          <code>{this.state.ssh.key} </code>
        </pre>
      </div>
		)
  }
}

export default SSH