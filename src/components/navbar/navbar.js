import React, { Component } from 'react';

import Logo from './logo';
import NavBarItem from './navbarItem';
import AnimateHeight from 'react-animate-height';


export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			height: 0
		}
	}

	toggleNav = () => {
		if (this.state.height === 0) {
			this.setState({height: 'auto'})
		} else {
			this.setState({height: 0})
		}
	}

	render() {
		return (
			<div className='navbar'>
				<div className='navbar desktopNav'>
					<Logo path='/' />
					<NavBarItem title='Pi Stats' path='/stats' reactRoute = {true}/>
					<NavBarItem title='How To' path='/howto' reactRoute = {true}/>
					{/* <NavBarItem title='Portfolio' path='/portfolio' reactRoute = {true}/> */}
					<NavBarItem title='Master Mind' path='http://mastermind.seanrcollings.com' reactRoute = {false}/>
				</div>
				<div className='mobileNav'>
					<a onClick = {this.toggleNav}><i className="fas fa-bars"></i></a>
					<AnimateHeight duration = {300} height={this.state.height} className='mobileNav-links'> 
						<div >
							<NavBarItem title='Home' path='/' reactRoute = {true} toggleNav = {this.toggleNav}/>
							<NavBarItem title='Pi Stats' path='/stats' reactRoute = {true} toggleNav = {this.toggleNav}/>
							<NavBarItem title='How To' path='/howto' reactRoute = {true} toggleNav = {this.toggleNav}/>
							{/* <NavBarItem title='Portfolio' path='/portfolio' reactRoute = {true} toggleNav = {this.toggleNav}/> */}
						</div>
					</AnimateHeight>
					</div>
				</div>
		)
	}
}