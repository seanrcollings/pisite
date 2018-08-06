import React, { Component } from 'react';

import logoBlack from '../../img/logo.png';
import logoColor from '../../img/logo-color.png';

import history from '../../history'

export default class Logo extends Component {
	constructor(props) {
		super(props)


		this.state = {
			logoImage: logoBlack
		}
	}

	handlePush() {
		history.push(this.props.path)
	}

	toggleHover = () => {
		if (this.state.logoImage === logoBlack) {
			this.setState({ logoImage: logoColor })
		} else {
			this.setState({ logoImage: logoBlack })
		}
	}

	render() {
		return (
			<a onClick={() => this.handlePush()} className='logo' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
				<img src={this.state.logoImage} alt='logo' />
			</a>
		)
	}
}