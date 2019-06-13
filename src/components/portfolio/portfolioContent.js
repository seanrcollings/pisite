import React, { Component } from 'react';
import Content from '../ContentPages/content';
import PortfolioCerts from './portfolioCerts';
import ContentLinks from '../ContentPages/contentLinks';

import seanCollings from '../../img/SeanCollings.png';

export default class PortfolioContent extends Component {
	render() {
		return (
			<Content>
				<div className='intro'>
					<h1 id='title'>Portfolio</h1>
					<div className='intro-blurb'>
						<img src = {seanCollings} alt='Sean Collings' className='intro-blurb-photo'/>
						<ul>
							<li>Sean Collings</li>
							<li>Ridgeline's Sterling Scholar Representative for Computer Technology</li>
							<li>Aspring Computer Programmer</li>
						</ul>
						<div className ='intro-links'>
							<ContentLinks link='https://github.com/seanrcollings' title='GitHub' icon='fab fa-github'/>
							<ContentLinks link='#certs' title='Certifications' icon='fas fa-file'/>
							<ContentLinks link='mailto:seanrcollings@gmail.com?subject=Pi Site Email' title='Email Me' icon='fas fa-envelope'/>
						</div>
					</div>
				</div>

				<div id='achievments'>
					<h2>Achievements / Activities</h2>
					<ul>
						<li><span className='achievments-title'>Bridgerland IT STEM:</span> Comprehensive course covering a multitude of IT related concepts such as:</li>
						<ul>
							<li><span className='achievments-title'>PC Pro:</span> Course outlining many of the fundamentals of computer and electronic devices management</li>
							<li><span className='achievments-title'>Networking Pro:</span> Comprehensive course all about computer networking</li>
							<li><span className='achievments-title'>Web Essentials:</span> Course that covered the basics of web design/development</li>
							<li><span className='achievments-title'>Linux Essentials:</span> Course that taught all about the Linux terminal and how to use it</li>
							<li><span className='achievments-title'>Raspberry Pi:</span> Course using the GPIO board on a Rasbperry Pi 3. The Pi I obtained for completing that course is not hosting this site</li>
							<li><span className='achievments-title'>Cyber Security</span> Course teaching about ethical hacking and different security software. Used Kali Linux for many of the lessons</li>
							<li><span className='achievments-title'>Mac Essentials:</span> Short course teaching the ins and outs of the Mac Operating System</li>
						</ul>
						<li><span className='achievments-title'>Computer Programming Classes:</span> Classes offered by the high school that taught all about programming fundamentals</li>
						<li><span className='achievments-title'>Code to Success:</span> Nine week summer boot camp about web development primarily using the React framework</li>
						<li><span className='achievments-title'><a href='https://github.com/seanrcollings/PiSite'>Raspberry Pi Site</a>:</span> A website hosted by my raspberry pi that polls and displays data about the Pi(You're looking at the final product right now)</li>
						<li><span className='achievments-title'><a href='https://github.com/seanrcollings/mastermind'>Mastermind React Game</a>:</span> A version of the Mastermind game that I build using React.</li>
						<li><span className='achievments-title'><a href='https://moonshiver.herokuapp.com/'>Moonshiver Website</a>:</span> I'm currently developing a website for my high school's student film festival.</li>
						<li><span className='achievments-title'>MTA Software Development Certification:</span> A test certifying me as knowledgeable in the fundamentals of software development</li>
						<li><span className='achievments-title'>CompTIA A+ Certification:</span> Certifies the recipient’s knowledge in a wide variety of IT related subjects. Some of these are: software troubleshooting, hardware, networking, operating systems, and security.  </li>
					</ul>
					<div className='achievments-description description'>
						<h3 className = 'descriptiopn-title' id='bridgerland'>Bridgerland Education</h3>
						<p>Since the beginning of the 2017-18 school year, I have participated in an IT certification course through Bridgerland Technical college. The class&mdash;overseen by Bonnie Campbell at Bridgerland and John Petersen at Ridgeline&mdash;took us through a series of courses related to the IT and computer technology fields. The program is held after school until 4:15 which amounts to five hours a week minimum working on the courses in the program.</p>
						<p>The courses that I&rsquo;ve taken through this program are PC Pro, Networking Pro, Raspberry Pi, Python, Web Essentials, Linux Essentials, and Mac Essentials. Personally, I enjoyed Networking the most. It was the most in depth course on a single topic and helped me learn a lot about how networks function and the complexities of communication between disparate devices. Last year, I completed all the course work that had been prepared in much less time than expected, enabling me to finish at the top of my class.</p>
						<p>The environment enabled me to learn more in a much shorter time than I would have been able to on my own. With the recommendation of my instructors, I also participated in a web development boot camp during the summer. With their help. I obtained the MTA Software Fundamentals Certification and hope to gain several CompTIA certifications before leaving high school.</p>
						<p>I&rsquo;m incredibly grateful for the opportunities participating in this program has given me. Before beginning the program, when someone asked me what I wanted to do when I grew up, the response would always be the same. &ldquo;I don&rsquo;t know.&rdquo; Ideas bounced inside my head about what to do with my life, but none ever grew into anything more than that. I had an interest in computers and technology, much of which grew from an admiration for my brother, but at that time I would never say that it was a field I would go into. However, this program has given me a solid foundation of reasoning and knowledge to start my path towards a career in technology.</p>
						<p>It showed me what I am capable of when I set my mind towards something and fight for it with the utmost passion and interest. I feel more confident in myself and my future than I ever have in the past. I feel truly lucky that I was given the chance to participate in something so life-changing.</p>
						<p>The class also has taught me a lot about people. While most were diligent and willing to do their work, plenty had difficulty remaining focused throughout the majority of the course. The coursework is paced by the individual so one can do really well and excel or do nothing at all. It showed me that I would have to deal with these kinds of people throughout my life and taught me that I didn&rsquo;t want to be one of them. No matter what, I always want to put 100% into what I do.</p> 
					</div>
				</div>
				
				<div id='certs' className='certs'>
					<h2 className='description-title'>Certifications</h2>
					<PortfolioCerts/>
				</div>

			</Content>
		)
	}
}