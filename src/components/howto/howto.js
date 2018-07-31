import React, { Component } from 'react';

import NavBar from '../navbar/navbar';
import Sidebar from './sidebar';
import HowToContent from './howtoContent';

export default class HowTo extends Component {
    render() {
         return [
            <NavBar />,
            <div className = 'howto-grid'>
                <HowToContent />
                <Sidebar />
            </div>
         ]
    }
}