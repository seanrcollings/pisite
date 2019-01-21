import React, { Component } from 'react';
import history from '../../history'

export default class NavBarItem extends Component {

	handlePush() {
		history.push(this.props.path)
		if (this.props.toggleNav !== undefined) {
			this.props.toggleNav()
		}
	}

	renderNavBarItem = () => {
		if(this.props.reactRoute) {
			return (
				<div className='navbar__item'>
					<a onClick={() => this.handlePush()}>{this.props.title}</a>
				</div>
			)
		} else {
			return (
				<div className='navbar__item'>
					<a href = {this.props.path}>{this.props.title}</a>
				</div>
			)
		}
	}

	render() {
		return (
			<div className='navbar__item'>
				{this.renderNavBarItem()}
			</div>
		)
	}
}