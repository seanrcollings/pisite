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
            title: 'Community Service',
            link: '#service'
        },
        {
            title: 'Leadership',
            link: '#leadership'
        },
        {
            title: 'Unique Qualties',
            link: '#unique'
        },
        {
            title: 'Life Enrichment',
            link: '#life'
        },
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