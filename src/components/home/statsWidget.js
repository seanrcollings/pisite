import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import StatsDetails from '../stats/statsDetails';

class StatsWidget extends Component {

  componentDidMount() {
    this.props.fetchStats();
  }

  render() {
    return (
      <div className='stats-widget'>
      <StatsDetails stat = {this.props.stat}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let stat = state.stats.stats[Math.floor(Math.random() * 10)]
  return {
    stat
  }
}

export default connect(mapStateToProps, actions)(StatsWidget);
