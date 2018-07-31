import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import './styles/main.css'

// import NavBar from './components/navbar/navbar';
import Home from './components/home';
import HowTo from './components/howto/howto';
import history from './history';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history = {history}>
        <Switch>
            {/* <NavBar> */}
                <Route path ='/' exact component={Home} />
                <Route path ='/stats' />
                <Route path ='/howto' component={HowTo}/>
            {/* </NavBar> */}
        </Switch>
    </Router>

    , document.getElementById('root'));
registerServiceWorker();
