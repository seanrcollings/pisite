import React, { Component } from 'react';

import StatsContent from './statsContent';

class Stats extends Component {
    render() {
        return [
            <div className='stats-grid'>
                <StatsContent/>
            </div>
        ];
    }
}

export default Stats;