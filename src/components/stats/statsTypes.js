import React, { Component } from 'react';

import StatsItem from './statsItem';

class StatsTypes extends Component {
    render() {
        return (
            <div className='stats-types'>
                <div className='stats-types__title'>Stat Types</div>
                <div className='stats-types__items'>
                    <StatsItem title='Current Time' callback={(event) => this.props.callback(event)}/>
                    {/* <StatsItem title='Uptime'/>
                    <StatsItem title='Users'/>
                    <StatsItem title='Average Load'/> */}
                </div>
            </div>
        );
    }
}

export default StatsTypes;