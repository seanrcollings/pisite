import React, { Component } from 'react';
import Content from '../ContentPages/content';

export default class PortfolioContent extends Component {

	render() {
		return (
			<Content>
				<div className='content-grid__content'>
					<div className='content-grid__wrapper'>
						<div className='intro'>
							<h1 id='title'>Portfolio</h1>
						</div>
						<div className='achievments-contaner'>
							<h2 id='achievments'>Achivments / Activities</h2>
							<ul>
								<li>Bridgerland IT STEM: Comprehensive course covering a multitude of IT related concepts such as:</li>
								<ul>
									<li>PC Pro: Course outlining many of the fundamentals computer and electronic devices management</li>
									<li>Networking Pro: Comprehensive course all about computer networking</li>
									<li>Web Essentials: Course that covered the basics of web design</li>
									<li>Linux Essentials: Course that taught all about the Linux terminal and how to use it</li>
								</ul>
								<li>Computer Programming Classes: Class offered by the high school that taught all about programming fundamentals</li>
								<li>Code to Success: Nine week summer boot camp about web development primarily using the React framework</li>
								<li><a href='https://github.com/seanrcollings/PiSite'>Raspberry Pi Site:</a> A website hosted by my raspberry pi that polls and displays data about the Pi</li>
								<li><a href='https://github.com/seanrcollings/mastermind'>Mastermind React Game</a>: A version of the Mastermind game that I build using React.</li>
								<li>MTA Software Development Certification: A test certifying me as knowledgeable in the fundamentals of software development</li>
							</ul>
						</div>
					</div>
				</div>
			</Content>
		)
	}
}