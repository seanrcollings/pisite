import React, { Component } from 'react';

import StatsTypes from './statsTypes';
import StatsDescription from './statsDescription';

class StatsContent extends Component {
    render() {
        return (
            <div className='stats-content'>
                <StatsTypes/>
                <StatsDescription/>
            </div>
        );
    }
}

export default StatsContent;