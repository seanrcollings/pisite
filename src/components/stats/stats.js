import React, { Component } from 'react';

import NavBar from '../navbar/navbar';
import StatsContent from './statsContent';

class Stats extends Component {
    render() {
        return [
            <NavBar/>,
            <div className='stats-grid'>
                <StatsContent/>
            </div>
        ];
    }
}

export default Stats;