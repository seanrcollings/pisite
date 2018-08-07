import React, { Component } from 'react';

import Sidebar from './sidebar';
import HowToContent from './howtoContent';
import DownloadBoxes from './downloadBoxes';

export default class HowTo extends Component {
    render() {
         return (
            <div className = 'howto-grid'>
                {/* <DownloadBoxes /> These make the page more messy at different sizes*/} 
                <HowToContent />
                <Sidebar />
                <div className = 'clip-path-howto'></div>
                <div className = 'clip-path-howto__border'></div>
                <button href = '#' className = 'howto-grid__back-to-top'>Back To Top</button>
            </div>
        )
    }
}