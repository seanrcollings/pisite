import React, { Component } from 'react';

import Sidebar from './sidebar';
import HowToContent from './howtoContent'



export default class HowTo extends Component {

    render() {
         return (
            <div className = 'howto-grid'>
                {/* <DownloadBoxes />  Unessacary Component, remove later */}
                <HowToContent />
                <Sidebar />
                <div className = 'clip-path-howto'></div>
                <div className = 'clip-path-howto__border'></div>
                <a href = '#title' className = 'howto-grid__back-to-top'>Back To Top</a>
            </div>
        )
    }
}