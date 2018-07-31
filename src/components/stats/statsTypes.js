import React, { Component } from 'react';

import StatsItem from './statsItem';

class StatsTypes extends Component {
    render() {
        return (
            <div className='stats-types'>
                <div className='stats-types__title'>Stat Types</div>
                <div className='stats-types__items'>
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