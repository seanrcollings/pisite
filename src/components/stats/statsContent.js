import React, { Component } from 'react';

import StatsTypes from './statsTypes';
import StatsDetails from './statsDetails';

class StatsContent extends Component {
    render() {
        return (
            <div className='stats-content'>
                <StatsTypes/>
                <StatsDetails title='Current Time' data='20:32:01' description="You're dumb if you don't know what current time means"/>

            </div>
        );
    }
}

export default StatsContent;