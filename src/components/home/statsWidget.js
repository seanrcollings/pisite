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
        <StatsDetails widgetStat = {this.props.stat} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  let stat = Object.values(state.stats.stats)[Math.floor(Math.random() * Object.values(state.stats.stats).length)]
  console.log(state)
  return {
    stat
  }
}

export default connect(mapStateToProps, actions)(StatsWidget);
