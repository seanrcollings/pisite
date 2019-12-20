import React, { Component } from "react";
import StatsDetails from "../stats/statsDetails";

export default class StatsWidget extends Component {
  componentDidMount() {
    this.props.fetchStats();
  }

  render() {
    return (
      <div className="stats-widget">
        <StatsDetails widgetStat={this.props.stat} />
      </div>
    );
  }
}
