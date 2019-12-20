import React, { Component } from "react";

import StatsTypes from "./statsTypes";
import StatsDetails from "./statsDetails";
import statAPI from "../../statAPI";

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      focused: null
    };
  }

  componentDidMount() {
    statAPI.get("/stats", result => {
      this.setState({ stats: result.data });
    });
  }

  render() {
    return (
      <div className="stats-grid">
        <div className="stats-content">
          <StatsTypes stats={this.state.stats} />
          <StatsDetails />
          <div className="stats-content__scroll-tip">
            Scroll down to see more stats
          </div>
          <div className="stats-content__tip">
            Data is automatically refreshed every minute or so. No need to
            reload the page!
          </div>
        </div>
        <div className="clip-path-stats" />
        <div className="clip-path-stats__border" />
      </div>
    );
  }
}
