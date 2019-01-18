import React, { Component, Children } from 'react';

export default class Content extends Component {

	render() {
		return (
		<div className='content-grid__content'>
			<div className='content-grid__wrapper'>
            		{this.props.children}
			</div>
		</div>
		)
	}
}
