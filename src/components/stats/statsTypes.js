import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

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
                    <a onClick = {() => this.props.fetchStats('Current Time')}>Click Me!</a>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(StatsTypes);