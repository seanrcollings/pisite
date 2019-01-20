import React, { Component } from 'react';
import Content from '../ContentPages/content';

import npmInstallImage from '../../img/npminstall.png';
import npmStartImage from '../../img/npmstart.png';
import sshImage from '../../img/ssh.png';
import apacheImage from '../../img/apacheinstall.png'


export default class HowToContent extends Component {

	render() {
		return (
			<Content>
				<div className = 'intro'>
					<h1 id = 'title'>How to Make a Raspberry Pi Web Server</h1>
				</div>

				<div className = 'install-container'>
					<h2 id='installation'>What you need to install</h2>
					<ul>
						<li><a href = 'https://nodejs.org/en/download/'>Node Server</a></li>
						<li><a href ='https://www.python.org/'>Python</a></li>
						<li><a href = 'https://code.visualstudio.com/'>Text Editor (Visual Studio Reccomended)</a></li>
						<li><a href = 'https://www.cygwin.com/'>If on Windows, install some sort of Linux terminal emulator (Cygwin, Git Bash, Cmder)</a></li>
						<li><a href = 'https://httpd.apache.org/download.cgi#apache24'>Apache Web Server (On the Pi)</a></li>
					</ul>
				</div>

				<div className = 'development-container'>
					<h2 id='development'>Setting up the Development Enviorment</h2>
					<p className = 'content-grid__paragraph'>
						First off, run <code>git clone https://github.com/ seanrcollings/PiSite</code> to pull down the repository, or go 
						the <a href = 'https://github.com/seanrcollings/PiSite'>GitHub page</a> and download it manually. Now cd into the PiSite directory and
						run <code>npm install</code> (The Node Package Manager should have come with the node server). This command will install all the
						dependancies that the Site requires. Now run <code>npm start</code> and the devlopment server should start itself.
					</p>

					<div className = 'img-container'>
						<img src={npmInstallImage} alt = 'npminstall'/>
						<h5 className = 'img-container__sub'>Output should look something like this</h5>
					</div>

					<p className = 'content-grid__paragraph'>
						With that done, the console should display output similar to that of below. If that's the case, everything is set up correctly and you can view the Site by 
						pasting <code>localhost:3000</code> into your browser! You are now ready to edit and change things as you like and the server will auto update for you.
					</p>

					<div className = 'img-container'>
						<img src={npmStartImage} alt = 'npmstart'/>
						<h5 className = 'img-container__sub'>This is how the Git bash displays it, others may looks slightly different</h5>
					</div>
					
					<section>
						<h4 id = 'scratch'>Starting from Scratch</h4>
						<p className = 'content-grid__paragraph'>
							Keep in mind that the above instructions are just if you want to use my app for your Raspberry Pi. It will work just as well to create your own website from scratch.
							If you want to do that, I would reccomend referencing <a href = 'https://github.com/facebook/create-react-app'>Facebook's instructions </a> on how to start up your 
							own app.
						</p>
					</section>

					<hr/>
				</div>

				<div className = 'production-container'>
					<h2 id='production'>Setting up the Production Enviroment</h2>
					<p className = 'content-grid__paragraph'>
						With the development version now running, we can transition it to a production enviroment on the Raspberry Pi itself. I am going to be SSHing into my Pi and just
						interacting with it through the command line, but you could do many of these actions in the Pi's actual interface.
					</p>
					
					<section>
						<h4 id = 'ssh'>Remotely Connecting To Your Pi Through SSH</h4>
						<p className = 'content-grid__paragraph'>Open a new command prompt and type in this command: </p>
						<div className = 'img-container'>
							<img src={sshImage} alt = 'ssh'/>
							<h5 className = 'img-container__sub'>Replace <em> 192.164.0.4 </em> wih your Pi's IP or hostname</h5>
						</div>
						<p className = 'content-grid__paragraph'>
							Your's will likely ask for the user account's password. When you enter it in, you will be logged into you Pi remotely. Now you have full access to the Pi's shell
							and can interact with it in any way that you could if you actually had the Pi infront of you.
						</p>
					</section>

					<section>
						<h4 id = 'apache'>Installing Apache</h4>
						<p className = 'content-grid__paragraph'>
							The first thing you need to do in the Pi, is install Apache. Apache is an open source HTTP server that lets you serve the pages of your website out onto the 
							internet. To install Apache 2.4, run the following command: 
						</p>
						<div className = 'img-container'>
							<img src={apacheImage} alt = 'apache'/>
							<h5 className = 'img-container__sub'>Type Y until you get back to the command prompt</h5>
						</div>
						<p className = 'content-grid__paragraph'>
							With that, you are pretty much ready to serve webpages from your Pi! To test if it's working, move into Apache's default location for serving 
							files: <code>/var/www/html/</code> and create an index.html with some simple content. Now open a browser and type your Pi's IP adress into the url bar. It should
							display whatever content you put in that file.
						</p>
					</section>
				</div>
			</Content>
		)
	}
}