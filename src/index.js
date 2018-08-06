import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import './styles/main.css'
import NavBar from './layout';
import Home from './components/home/home';
import Stats from './components/stats/stats';

import HowTo from './components/howto/howto';
import history from './history';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={history}>
			<Switch>
				<NavBar>
                    <Route path='/' exact component={Home} />
                    <Route path='/stats' component={Stats} />
                    <Route path='/howto' component={HowTo} />
				</NavBar>
			</Switch>
		</Router>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
