import React, { Component } from 'react';

class StatsItem extends Component {
    

    render() {
        return (
            <div className='stats-item' onClick={() => console.log('trying to handle click')}>
                <div className='stats-item__title'>Uptime <i className="stats-item__icon fas fa-caret-right"></i></div>
            </div>
        );
    }
}

export default StatsItem;