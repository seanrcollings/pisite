import React, { Component } from 'react';

import Sidebar from '../ContentPages/sidebar';
import HowToContent from './howtoContent'



export default class HowTo extends Component {
    sidebarItems = [
        {
            title: 'Project Overview',
            link: '#introduction'
        },
        {
            title: 'Installation',
            link: '#installation'
        },
        {
            title: 'Starting from Scratch',
            link: '#scratch'
        },
        {
            title: 'Development',
            link: '#development'
        },
        {
            title: 'Production',
            link: '#production'
        },
        {
            title: 'SSHing Into Your Pi',
            link: '#ssh'
        },
        {
            title: 'Installing Apache',
            link: '#apache'
        },
        
    ]
    render() {
         return (
            <div className = 'content-grid'>
                <HowToContent />
                <Sidebar sidebarItems = {this.sidebarItems}/>
                <div className = 'clip-path-content'></div>
                <div className = 'clip-path-content__border'></div>
                <a href = '#title' className = 'content-grid__back-to-top'>Back To Top</a>
            </div>
        )
    }
}