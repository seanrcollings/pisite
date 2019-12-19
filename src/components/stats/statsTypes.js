import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import StatsItem from "./statsItem";

class StatsTypes extends Component {
  componentDidMount() {
    this.props.fetchStats();
    setInterval(this.props.fetchStats, 30000);
  }

  sortDataTypes() {
    return Object.values(this.props.stats).sort((stat1, stat2) => {
      return stat1.id - stat2.id;
    });
  }

  renderDataTypes(stats) {
    return stats.map(stat => {
      return <StatsItem key={stat.id} title={stat.title} id={stat.id} />;
    });
  }

  render() {
    return [
      <div className="stats-types">
        <div className="stats-types__title">Data Types</div>
        <div className="stats-types__items">
          {this.renderDataTypes(this.sortDataTypes())}
          <div className="stats-types__empty"></div>
        </div>
      </div>,

      <div className="stats-types-mobile">
        <div className="stats-types-mobile__title">Data Types</div>
        <div className="stats-types-mobile__items">
          {this.renderDataTypes(this.sortDataTypes())}
          <div className="stats-types-mobile__empty"></div>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state) {
  const { stats } = state.stats;
  return {
    stats
  };
}

export default connect(mapStateToProps, actions)(StatsTypes);
