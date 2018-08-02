import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

import StatsItem from './statsItem';

class StatsTypes extends Component {

    constructor(props) {
        super(props)

        this.props.fetchStats();
    }

    render() {
        return (
            <div className='stats-types'>
                <div className='stats-types__title'>Data Types</div>
                <div className='stats-types__items'>
                    {
                        this.props.stats.map(stat => {
                            return <StatsItem key = {stat.id} title={stat.title} id = {stat.id}/>
                        })
                    }

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { stats } = state.stats
    return {
        stats
    }
}

export default connect(mapStateToProps, actions)(StatsTypes);