import React, { Component } from 'react';

export default class SidebarItem extends Component {
	render() {
		return (
			<li><a href={this.props.link}>{this.props.title}</a></li>
		)
	}
}