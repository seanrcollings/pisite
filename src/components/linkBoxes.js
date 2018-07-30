import React, { Component } from 'react';

import LinkBox from './linkBox'

export default class LinkBoxes extends Component {
    render() {
        
        const boxes = [
            {
                title: 'Stats',
                subTitle: 'Check Stats from the pi',
                text: "Information on what is on the the Pi or what it is doing are displayed here, additionally any data gathered by sensors attached to the Pi's GPIO pins will also be displayed here."
            },
            {
                title: 'How To',
                subTitle: 'Instructions on how to set up a Pi web server',
                text: "A simple and quick instruction set on how to get a web server up and running on a Raspberry Pi 3 model A. (Mostly for my own documentation)"
            }
        ]
        return (
            <div id = 'link-boxes'>
                {
                    boxes.map((data, index) => {
                        return <LinkBox key = {index} title = {data.title} subTitle = {data.subTitle} text = {data.text}/>
                    })
                }  
            </div>
         )
    }
}