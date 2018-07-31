import React, { Component } from 'react';

import StatsItem from './statsItem';

class StatsTypes extends Component {
    render() {
        return (
            <div className='stats-content-types'>
                <div className='stats-content-types__title'>Stat Types</div>
                <div className='stats-content-types__items'>
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                </div>
            </div>
        );
    }
}

export default StatsTypes;