import React, { Component } from 'react';
import Content from '../ContentPages/content';

import seanCollings from '../../img/SeanCollings.png'

export default class PortfolioContent extends Component {
	render() {
		return (
			<Content>
				<div className='intro'>
					<h1 id='title'>Portfolio</h1>
					<div className='intro-blurb'>
						<img src = {seanCollings} alt='Sean Collings'/>
						<ul>
							<li>Sean Collings</li>
							<li>Ridgeline's Sterling Scholar Representative for Computer Technology</li>
							<li>Aspring Computer Programmer</li>
						</ul>
					</div>
				</div>


				<div id='achievments'>
					<h2>Achievements / Activities</h2>
					<ul>
						<li>Bridgerland IT STEM: Comprehensive course covering a multitude of IT related concepts such as:</li>
						<ul>
							<li>PC Pro: Course outlining many of the fundamentals of computer and electronic devices management</li>
							<li>Networking Pro: Comprehensive course all about computer networking</li>
							<li>Web Essentials: Course that covered the basics of web design</li>
							<li>Linux Essentials: Course that taught all about the Linux terminal and how to use it</li>
						</ul>
						<li>Computer Programming Classes: Classes offered by the high school that taught all about programming fundamentals</li>
						<li>Code to Success: Nine week summer boot camp about web development primarily using the React framework</li>
						<li><a href='https://github.com/seanrcollings/PiSite'>Raspberry Pi Site:</a> A website hosted by my raspberry pi that polls and displays data about the Pi(You're looking at the final product right now)</li>
						<li><a href='https://github.com/seanrcollings/mastermind'>Mastermind React Game</a>: A version of the Mastermind game that I build using React.</li>
						<li>MTA Software Development Certification: A test certifying me as knowledgeable in the fundamentals of software development</li>
					</ul>
					<div className='achievments-description description'>
						<h3 className = 'descriptiopn-title'>Achievements Description</h3>
						<p>Since the beginning of the 2017-18 school year, I have participated in an IT certification course through Bridgerland Technical college. The class&mdash;overseen by Bonnie Campbell at Bridgerland and John Petersen at Ridgeline&mdash;took us through a series of courses related to the IT and computer technology fields. The program is held after school until 4:15 which amounts to five hours a week minimum working on the courses in the program.</p>
						<p>The courses that I&rsquo;ve taken through this program are PC Pro, Networking Pro, Raspberry Pi, Python, Web Essentials, Linux Essentials, and Mac Essentials. Personally, I enjoyed Networking the most. It was the most in depth course on a single topic and helped me learn a lot about how networks function and the complexities of communication between disparate devices. Last year, I completed all the course work that had been prepared in much less time than expected, enabling me to finish at the top of my class.</p>
						<p>The environment enabled me to learn more in a much shorter time than I would have been able to on my own. With the recommendation of my instructors, I also participated in a web development boot camp during the summer. With their help. I obtained the MTA Software Fundamentals Certification and hope to gain several CompTIA certifications before leaving high school.</p>
						<p>I&rsquo;m incredibly grateful for the opportunities participating in this program has given me. Before beginning the program, when someone asked me what I wanted to do when I grew up, the response would always be the same. &ldquo;I don&rsquo;t know.&rdquo; Ideas bounced inside my head about what to do with my life, but none ever grew into anything more than that. I had an interest in computers and technology, much of which grew from an admiration for my brother, but at that time I would never say that it was a field I would go into. However, this program has given me a solid foundation of reasoning and knowledge to start my path towards a career in technology.</p>
						<p>It showed me what I am capable of when I set my mind towards something and fight for it with the utmost passion and interest. I feel more confident in myself and my future than I ever have in the past. I feel truly lucky that I was given the chance to participate in something so life-changing.</p>
						<p>The class also has taught me a lot about people. While most were diligent and willing to do their work, plenty had difficulty remaining focused throughout the majority of the course. The coursework is paced by the individual so one can do really well and excel or do nothing at all. It showed me that I would have to deal with these kinds of people throughout my life and taught me that I didn&rsquo;t want to be one of them. No matter what, I always want to put 100% into what I do.</p> 
					</div>
				</div>


				<div id ='service'>
					<h2>Community Service</h2>
					<ul>
						<li>Restoration of several Millville City welcome signs</li>
						<li>Plowing snow covered driveways</li>
						<li>Cleaning trash cans</li>
						<li>Helping elderly couples move</li>
						<li>Helping clean up after Summer festival</li>
					</ul>
					<div className='service-description description'>
						<h3 className = 'descriptiopn-title'>Community Service Description</h3>
						<p>A couple years ago, a good friend of mine needed help with his Eagle Scout project, and with some reluctance, I ended up assisting. For his project, he set out to restore several of the welcome signs into Millville City. This included taking the signs apart, reinforcing the wood, and restaining the signs.</p>
						<p>My father is a carpenter. After many years of helping him with various projects, I&rsquo;ve picked a few skills in carpentry. Because of that, I was able to offer more help and advice on my friend&rsquo;s project than I normally would have been able to. I brought tools and assisted in the dismantling of the signs. I had done a lot of staining in the past, and helped in that as well. It took us more than entire day to complete the project, but afterwards I was happy that I participated.</p>
						<p>The was one of the best community acts that I ever participated in. During many of them, people seemed unwilling or hesitant to help. It appeared that they had come simply because it was expected of them as part of the scouting troop. However, during this one we all remained positive and motivated through the entire project. We cracked jokes, we laughed, and overall it was a fun time. Unfortunately, before this project, I was more often than not in the group of people that dragged their feet during community service. Helping my friend with his Eagle Scout showed me how fun and fulfilling community service could be. From that point on, whenever service was brought up as a scouting activity, I was all for it.</p>
					</div>
				</div>

				<div id='leadership'>
					<h2>Leadership</h2>
					<ul>
						<li>Guiding my programming class through Object Oriented Programming</li>
						<li>Helping others in Code To Success</li>
						<li>Leading my group for the Code to Success final project</li>
					</ul>
					<div className='leadership-description description'>
						<h3>Leadership Description</h3>
						<p>While I have found that I generally prefer roles that let me work directly with the product rather than a managerial one, I have had a few chances to guide people through hard concepts or topics.</p>
						<p>I took a Python programming class during Sophomore year. The class taught me a lot, but I already knew much of the basics of programming through my own learning and through teaching sessions I had with my brother before and during the class. In one of these lessons with my brother, he taught me about object oriented programming (OOP) and its uses and benefits. After this, I started developing a simple <a href="https://github.com/seanrcollings/Text-Based-Adventure-Game)">text-based adventure game </a>using an object oriented approach. While I didn&rsquo;t get very far in completing the game, it served as an effective way to teach myself all the ins and outs of Object Oriented Programming (OOP) in Python. During this class, I was given the opportunity to teach my classmates about OOP.</p>
						<p>As we neared the end of the trimester, I noticed that we never went over OOP in my programming class. I brought it up with the teacher and he told me that he had no intention of teaching OOP that year. This was the first year that he had taught the class and had only been given the summer before school started to learn anything more than the basics of programming. To my surprise, he offered me a chance to teach the class about OOP. Generally, I wouldn&rsquo;t have accepted the invitation, but I decided it would be a good experience and accepted. With the help of a few friends that I tutored on OOP, I spent a week preparing a simple lesson on classes. For the short lecture, I wrote simple Car and ElectricCar classes that I used to explain the three basic pillars of OOP: encapsulation, inheritance, and polymorphism. Throughout the lecture, people asked questions and they all seemed very engaged.</p>
						<p>After the lesson, the teacher thanked me. He appeared very appreciative of the help. After the lesson, he placed us in groups for our final project, which turned out to be a text-based adventure game. Much to my surprise, my group elected me to lead the rest of the group in construction of this game. At the end of the year, we were one of the few groups with both a finished product, and one that worked well and could be expanded upon easily.</p>
						<p>These experiences taught me that sharing my knowledge and expertise isn&rsquo;t always as scary as I thought it was. Before, if someone needed help with something, even if I knew exactly what the problem was, I often kept my mouth shut. Now, I always strive to help and guide those I can.</p>
					</div>
				</div>
			
				<div id='unique' className='description'>
					<h3 className = 'descriptiopn-title'>Unique Qualities</h3>
					<p>A major thing that has allowed me to excel in many of the things mentioned above is my work ethic, instilled by my father at a young age. To this day, I remain motivated and keep working even through tough or stressful situations. Although my IT Stem class certainly began to drag at some points, I continued to diligently use my class time wisely and exceeded the expectations of my instructor. This cycle repeated during a web development course that I took over the summer. While many of the students fell by the wayside and began to work less and less, some of them never even actually completing the course, I was able to stick it out to the end and learned a lot from it. As a result of my diligence, I was able to build a very ambitious final project for the course. I built a small website hosted by a Raspberry Pi Microcomputer that gathers data about the Pi, like internal temperature and processes currently running and displays it up on the website. Go to <a href="http://pisite.zapto.org">pisite.zapto.org</a> to see the site.</p>
					<p>Because of the plethora of opportunities provided to me, I&rsquo;ve been able to learn much more than the typical person interested in this field before leaving high school. Post high school, I plan to pursue a degree in Computer Science at USU. My brother, who obtained that degree, told me that many of the people in the early classes knew much less than I do. Of course, there is nothing wrong with this, but it will give me a leg up on the competition early in my college career. This should lead to more opportunities in the future. While I do not know some things to incredible depth, I know a good amount about many things: Networking, PC management and building, Linux, Programming, and web development are all areas I&rsquo;ve dipped my toes into. Thus, I have a broad understanding of many categories, which will help me decide what area I eventually want to pursue.</p>
				</div>

				<div id='life' className='description'>
					<h3 className = 'descriptiopn-title'>Life Enrichment</h3>
					<p>For much of my life, I&rsquo;ve focused on generating a good income for me and a potential future family. However, over time I have found that a big reason that I keep pursuing computer technology is because I genuinely enjoy it. Whenever I program something that works and does something interesting, I feel a huge amount of satisfaction well up within me. That same feeling comes whenever I help someone with hardware or software problem. Because I have become fairly knowledgeable in the field, I can extend my help out towards others and feel satisfied when my assistance does genuinely help them.</p>
					<p>Often when I&rsquo;m nervous&mdash;as I&rsquo;m sure is true with many people&mdash;I begin to shake and perform worse overall. However, when I&rsquo;m working on computer parts, like doing a PC teardown in my IT class, the opposite seems to happen. My hands became steady and my focus increases. I excel under the pressure and do an excellent teardown and rebuild of the PC. Such experiences show that I have confidence to work effectively with computers, even in tough situations.</p>
					<p>Additionally, the community around programming or computers in general is one of the most helpful and expansive I&rsquo;ve ever been a part of. No matter your problem, there is almost always someone out there willing and able to help you. This gives a great sense of community and is one that I am proud to share in. I hope to continue to grow and develop in these extremely helpful communities as I grow in the field.</p>
				</div>
			</Content>
		)
	}
}