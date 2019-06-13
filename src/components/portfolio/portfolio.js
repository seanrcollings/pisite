import React, { Component } from 'react';
import Sidebar from '../ContentPages/sidebar';
import PortfolioContent from './portfolioContent';

class Portfolio extends Component {
    sidebarItems = [
        {
            title: 'Achievments',
            link: '#achievments'
        },
        {
            title: 'Bridgerland Education',
            link: '#bridgerland'
        },
        {
            title: 'Certifications',
            link: '#certs'
        }
    ]

    render() {
        return (
            <div>
                <div className = 'content-grid'>
                    <PortfolioContent/>
                    <Sidebar sidebarItems = {this.sidebarItems}/>
                    <div className = 'clip-path-content'></div>
                    <div className = 'clip-path-content__border'></div>
                    <a href = '#title' className = 'content-grid__back-to-top'>Back To Top</a>
                </div>
            </div>
        );
    }
}

export default Portfolio;