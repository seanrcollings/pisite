import React, { Component } from "react";

import StatsTypes from "./statsTypes";
import StatsDetails from "./statsDetails";
import StatAPI from "../../statAPI";

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
      timer: null,
      failed: false,
      loading: true
    };
  }

  componentDidMount() {
    StatAPI.getAllStats(response => {
      if (response.status === 200) {
        this.setState({ stats: response.data, loading: false });
      } else {
        this.setState({
          focused: {
            data: "Data Fetch Failed :(",
            description:
              "For one reason or another, I wasn't able to communicate with the Raspberry Pi, likely because it is off. Please check back later, hopefully it's working by then."
          },
          failed: true,
          loading: false
        });
      }
    });
  }

  setFocused = stat => {
    if (!this.state.failed) {
      this.fetchStatData(stat);
      clearInterval(this.state.timer);
      this.setState({
        timer: setInterval(() => this.fetchStatData(stat), 10000)
      });
    }
  };

  fetchStatData = stat => {
    StatAPI.getStatData(stat.id, res => {
      this.setState({
        focused: { ...stat, data: res.data }
      });
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
          <div className="stats-content__scroll-tip">
            Scroll down to see more stats
          </div>
          <StatsDetails
            focused={this.state.focused}
            loading={this.state.loading}
          />
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
