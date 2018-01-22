import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Resume from './Resume'
import Viget from './coverLetter/Viget'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/viget-cover-letter' component={Viget}/>
        </Switch>
    </main>
)

export default Main
