import React, { Component } from 'react';

import StatsTypes from './statsTypes';
import StatsDetails from './statsDetails';

class StatsContent extends Component {
    changeDescription(title) {

    }

    render() {
        return [
            <div className='stats-content'>
                <StatsTypes callback={(event) => this.changeDescription(event)}/>
                <StatsDetails title='Current Time' data='20:32:01' description="You're dumb if you don't know what current time means"/>
            </div>,
            <div className='clip-path'/>,
            <div className='clip-path__border'/>
        ];
    }
}

export default StatsContent;