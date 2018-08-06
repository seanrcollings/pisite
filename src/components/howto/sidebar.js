import React, { Component } from 'react';

import SideBarItem from './sidebarItem';

export default class Sidebar extends Component {
	render() {

		const sidebarItems = [
			{
				title: 'Installation',
				link: '#installation'
			},
			{
				title: 'Development',
				link: '#development'
			},
			{
				title: 'Starting from Scratch',
				link: '#scratch'
			},
			{
				title: 'Production',
				link: '#production'
			},
			{
				title: 'Sidebar 4',
				link: '#'
			},
			{
				title: 'Back to the Top',
				link: '#'
			},
		]
		return (
			<div className='sidebar'>
				<ul>
					{
						sidebarItems.map((item, index) => {
							return <SideBarItem key={index} title={item.title} link={item.link} />
						})
					}
				</ul>
			</div>
		)
	}
}