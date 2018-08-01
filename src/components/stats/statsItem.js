import React, { Component } from 'react';

class StatsItem extends Component {
    render() {
        return (
            <div className='stats-item' onClick={() => this.props.callback(this.props.title)}>
                <div className='stats-item__title'>{this.props.title}<i className="stats-item__icon fas fa-caret-right"></i></div>
            </div>
        );
    }
}

export default StatsItem;