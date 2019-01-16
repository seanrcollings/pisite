import React, { Component } from 'react';

import Logo from './logo';
import NavBarItem from './navbarItem';


export default class NavBar extends Component {
	render() {
		return (
			<div className='navbar'>
				<Logo path='/' />
				<NavBarItem title='Pi Stats' path='/stats' reactRoute = {true}/>
				<NavBarItem title='How To' path='/howto' reactRoute = {true}/>
				<NavBarItem title='Portfolio' path='/portfolio' reactRoute = {true}/>
				<NavBarItem title='Master Mind' path='/mastermind/index.html' reactRoute = {false} />
			</div>
		)
	}
}