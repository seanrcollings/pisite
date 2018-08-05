import React, { Component } from 'react';

import StatsTypes from './statsTypes';
import StatsDetails from './statsDetails';

class StatsContent extends Component {
    render() {
        return [
            <div className='stats-content'>
                <StatsTypes />
                <StatsDetails />
            </div>,
            <div className='clip-path-stats'/>,
            <div className='clip-path-stats__border'/>,
            <div className='tip'>Data is automatically refreshed every minute or so. No need to reload the page!</div>
        ];
    }
}

export default StatsContent;