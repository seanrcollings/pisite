import React, { Component } from 'react';

import SideBarItem from './sidebarItem';

export default class Sidebar extends Component {
	render() {

		const sidebarItems = [
			{
				title: 'Sidebar 1',
				link: '#heading1'
			},
			{
				title: 'Sidebar 2',
				link: '#'
			},
			{
				title: 'Sidebar 3',
				link: '#'
			},
			{
				title: 'Sidebar 4',
				link: '#'
			},
			{
				title: 'Sidebar 4',
				link: '#'
			},
			{
				title: 'Sidebar 4',
				link: '#'
			},
			{
				title: 'Sidebar 4',
				link: '#'
			},
			{
				title: 'Sidebar 4',
				link: '#'
			},
			{
				title: 'Sidebar 4',
				link: '#'
			},
			{
				title: 'Sidebar 4',
				link: '#'
			},
			{
				title: 'Sidebar 4',
				link: '#'
			},
		]
		return (
			<div className='howto-grid__sidebar'>
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