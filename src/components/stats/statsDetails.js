import React, { Component } from 'react';

class StatsDetails extends Component {
    render() {
        return (
            <div className='stat-details'>
                <div className='stat-details__title'>Uptime</div>
                <div className='stat-details__data'>38 min</div>
                <div className='stat-details__description'>DESCRIPTION OF UPTIME</div>
            </div>
        );
    }
}

export default StatsDetails;