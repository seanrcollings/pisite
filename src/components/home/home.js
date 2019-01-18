import React, { Component } from 'react';

import backgroundImg from '../../img/blue-mobo.png'
import logo from '../../img/logo-color.png'
import LinkBoxes from './linkBoxes';

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
							It is a website, but instead of being hosted by servers somewhere out in the world, it is hosted on a Raspberry Pi 3A. 
							Apache is used to serve the files as needed.
                        </p>

						<p>
							After obtaining my Raspberry Pi at the end of the Pi course in my IT, I initially envisioned this as a simple, static
							website for me to mess around with. The task became quite difficult because I wanted to fetch data from the pi and put on 
							the site which can become quite a tedious process when working with static pages. After learning React, I now had the confidence
							to build the site in a more reactive manner.
                        </p>

						<p>
							The website now employs a React based frontend, with a python program that fetches the data from the Pi and writes to a 
							JSON file.
                        </p>
					</div>
                    <img src = {logo} />
                    <LinkBoxes />   
                </div> {/* CONTENT END */}
            </div> 
         )
    }
}