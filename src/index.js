import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import './styles/main.css'

// import NavBar from './components/navbar/navbar';
import Home from './components/home';
import Stats from './components/stats/stats';

import history from './history';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history = {history}>
        <Switch>
            {/* <NavBar> */}
                <Route path ='/' exact component={Home} />
                <Route path ='/stats' component={Stats}/>
                <Route path ='/howto' />
            {/* </NavBar> */}
        </Switch>
    </Router>

    , document.getElementById('root'));
registerServiceWorker();
