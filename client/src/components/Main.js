import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Resume from './Resume'

const Main = () => (<main>
	<Switch>
		<Route exact path='/' component={Home}/>
		<Route path='/resume' component={Resume}/>
	</Switch>
</main>)

export default Main
