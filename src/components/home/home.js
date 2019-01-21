import React, { Component } from 'react';

import backgroundImg from '../../img/blue-mobo.png'
import LinkBoxes from './linkBoxes';
import StatsWidget from './statsWidget'

export default class Home extends Component {

    render() {
        return (
            <div className = 'home'>
                <div className = 'home__title'>
                    <h1>Welcome to our Pi Site</h1>
                    <img src = {backgroundImg} alt = 'backgroung'/>
                </div>
				<div className='home__content'>
                    <div className='home__description'>
						<h2>What is a Pi Site?</h2>

						<p>
							It is a website, but instead of being hosted by servers somewhere out in the world, it is hosted on a Raspberry Pi 3A on my home network! 
							Apache is used to serve the files as needed.
                        </p>

                        <h3>How's it work?</h3>
                        <p>
							The website employs a React-built frontend. On the backend, a <a href='https://github.com/seanrcollings/PiSite/blob/master/src/dataFetcher.py'>Python</a> program 
                            polls the Raspberry Pi for the data seen on the Stats page and writes it to a JSON data file that the frontend can then interface with. It uses axios to grab the 
                            data from the JSON file, and then it gets stored in Redux's global state.
                        </p>
                        <h3>What's it For?</h3>
                        <p>
                            This was my final project for a web development boot camp, called Code To Success(CTS), that I took in the summer of 2018, although I have expanded upon it quite 
                            a bit since then. You can see the certificate for CTS, along with several other programs, <a href='/portfolio#certs'>here</a>. 
                        </p>
					</div>
                    <LinkBoxes />
                    <div className='home__widget'>
                        <StatsWidget /> 
                        <span className = 'home__widget-text'>Here's a sneak peak of what you'll see on the <a href='/stats' >Stats</a> page!</span>  
                    </div>
                </div> {/* CONTENT END */}
            </div> 
         )
    }
}