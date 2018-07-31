import React, { Component } from 'react';

import StatsTypes from './statsTypes';
import StatsDetails from './statsDetails';

class StatsContent extends Component {
    render() {
        return (
            <div className='stats-content'>
                <StatsTypes/>
                <StatsDetails/>
            </div>
        );
    }
}

export default StatsContent;