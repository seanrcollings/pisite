import React, { Component } from 'react'

import LinkBox from '../linkBox';

export default class DownloadBoxes extends Component {
    render() {
        const boxes = [
            {
                title: 'NodeJS',
                subTitle: 'Server Used During Development',
                linkName: 'Go To Download',
                link: '',
                text: 'Node is a web server specifically used for projects while in development. It can be used for for production, but there are other alternatives. It also comes packaged with the Node Package Manager (npm) which all React projects use ',
                img: ''
            },
            {
                title: 'Python',
                subTitle: 'Programming Language used for fetching my Data',
                linkName: 'Go To Download',
                link: '',
                text: 'Since this projects was not large enough to have an entire dedicated backend, I fetch the data for the stats page using a simple python script that dumps the data into a JSON file. This process is automated using CronTab',
                img: ''
            },
            {
                title: 'Text Editor',
                subTitle: 'Best if they are geared towards programming',
                linkName: 'Go To Download',
                link: '',
                text: 'While any text editor will work, I would reccomend using something like Visual Studio Code or Sublime. I use VS Code for these projects and It is very effective in most capacities',
                img: ''
            },
            {
                title: 'Terminal Emulator',
                subTitle: 'Linux Terminal if on Windows',
                linkName: 'Go To Download',
                link: '',
                text: 'While not nessacary, having a terminal emulator if you\'re on Windows will makes many tasks surrounding this kind of project muche easier',
                img: ''
            },
            {
                title: 'Apache 2',
                subTitle: 'Server Used During Production',
                linkName: 'Go To Download',
                link: '',
                text: 'Apache allows for very easy serving of production style applications onto your home network or onto the web',
                img: ''
            }
        ]
        return (
            <div className = 'download-boxes'>
                <h2 className = 'downlaod-boxes__title' >Download Links</h2>
                {    
                    boxes.map(box => {
                        return <LinkBox className = 'download-box' key = {Math.floor(Math.random() * 1000)} {...box} />
                    })
                }
            </div>
        )
    }
}