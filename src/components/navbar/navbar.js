import React, { Component } from 'react';

import Logo from './logo';
import NavBarItem from './navbarItem';


export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			class: 'hidden'
		}
	}

	toggleNav = () => {
		if (this.state.class === 'hidden') {
			this.setState({class: 'show'})
		} else {
			this.setState({class: 'hidden'})
		}
	}

	render() {
		return (
			<div className='navbar'>
				<div className='navbar desktopNav'>
					<Logo path='/' />
					<NavBarItem title='Pi Stats' path='/stats' reactRoute = {true}/>
					<NavBarItem title='How To' path='/howto' reactRoute = {true}/>
					<NavBarItem title='Portfolio' path='/portfolio' reactRoute = {true}/>
					<NavBarItem title='Master Mind' path='/mastermind/index.html' reactRoute = {false}/>
				</div>
				<div className='mobileNav'>
					<a onClick = {this.toggleNav}><i class="fas fa-bars"></i></a>
					<div className={`mobileNav-links-${this.state.class}`}>
						<NavBarItem title='Home' path='/' reactRoute = {true}/>
						<NavBarItem title='Pi Stats' path='/stats' reactRoute = {true}/>
						<NavBarItem title='How To' path='/howto' reactRoute = {true}/>
						<NavBarItem title='Portfolio' path='/portfolio' reactRoute = {true}/>
					</div>
				</div>
			</div>
		)
	}
}