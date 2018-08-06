import React, { Component } from 'react';

import StatsTypes from './statsTypes';
import StatsDetails from './statsDetails';
import NavBar from '../navbar/navbar';

class StatsContent extends Component {
	render() {
		return [
            <NavBar/>,
            <div className='stats-grid'>
                <div className='stats-content'>
                    <StatsTypes />
                    <StatsDetails />
                    <div className='stats-content__tip'>Data is automatically refreshed every minute or so. No need to reload the page!</div>
                </div>,
                <div className='clip-path-stats'/>,
                <div className='clip-path-stats__border'/>,
            </div>
		];
	}
}

export default StatsContent;