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

  componentDidMount() {
    console.log(this.state.ssh.key)
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