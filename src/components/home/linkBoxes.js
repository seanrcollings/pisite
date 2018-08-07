import React, { Component } from 'react';

import LinkBox from '../linkBox'

export default class LinkBoxes extends Component {
	render() {
		
		const boxes = [
			{
				title: 'Stats',
				subTitle: 'Check Stats from the pi',
				text: "Information on what is on the the Pi or what it is doing are displayed here, additionally any data gathered by sensors attached to the Pi's GPIO pins will also be displayed here.",
				path: '/stats',	
				linkName: 'Navigate to Page'
			},
			{
				title: 'How To',
				subTitle: 'Instructions on how to set up a Pi web server',
				text: "A simple and quick instruction set on how to get a web server up and running on a Raspberry Pi 3 model A. (Mostly for my own documentation)",
				path: '/howto',
				linkName: 'Navigate to Page'
			},
			{
				title: 'Github',
				subTitle: 'Check out the source code',
				text : "This is the github repository for this site. You can download and mess with it if you'd like. Check the README for directions on how to get it running on your own machine.",
				link: 'https://github.com/seanrcollings/PiSite',
				linkName: 'Go To Repository'
			}
		]
		return (
			<div id = 'link-boxes'>
				{
					boxes.map((data, index) => {
						return <LinkBox className = {'page-box'} key = {index} {...data} id = {index}/>
					})
				}  
			</div>
		 )
	}
}