import React, { Component } from 'react';

class StatsDetails extends Component {
    render() {
        return (
            <div className='stat-details'>
                <div className='stat-details__title'>{this.props.title}</div>
                <div className='stat-details__data'>{this.props.data}</div>
                <div className='stat-details__description'>{this.props.description}</div>
            </div>
        );
    }
}

export default StatsDetails;