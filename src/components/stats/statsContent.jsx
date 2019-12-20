import React, { Component } from "react";

import StatsTypes from "./statsTypes";
import StatsDetails from "./statsDetails";
import statAPI from "../../statAPI";

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      focused: {
        id: null,
        name: "",
        data: "No Stat Selected",
        description: "Please Select a Stat to See it's Data"
      },
      timer: null
    };
  }

  componentDidMount() {
    statAPI.get("/stats").then(res => {
      this.setState({ stats: res.data });
    });
  }

  setFocused = stat => {
    this.fetchStatData(stat);
    clearInterval(this.state.interval);
    this.setState({
      timer: setInterval(() => this.fetchStatData(stat), 10000)
    });
  };

  fetchStatData = stat => {
    console.log("fetching data...");
    statAPI.get(`/stats/${stat.id}/data`).then(res => {
      this.setState({ focused: { ...stat, data: res.data } });
    });
  };

  render() {
    return (
      <div className="stats-grid">
        <div className="stats-content">
          <StatsTypes
            stats={this.state.stats}
            focused={this.state.focused.id}
            setFocused={this.setFocused}
          />
          <StatsDetails focused={this.state.focused} />
          <div className="stats-content__scroll-tip">
            Scroll down to see more stats
          </div>
          <div className="stats-content__tip">
            Data is automatically refreshed every ten seconds or so. No need to
            reload the page!
          </div>
        </div>
        <div className="clip-path-stats" />
        <div className="clip-path-stats__border" />
      </div>
    );
  }
}
