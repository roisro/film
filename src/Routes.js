import React, {Component}  from'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './Home'
import Film from './Film'
import Actor from './Actor'

class Routes extends Component {
    render() {
        return (
            <Router>
                <App />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Home" component={Home} />
                        <Route path="/Film" component={Film} />
                        <Route path="/Actor" component={Actor} />
                    </Switch>
            </Router>
        )
    };
}

export default Routes