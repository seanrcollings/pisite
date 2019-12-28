import React, { Component } from "react";
import StatsDetails from "../stats/statsDetails";
import statAPI from "../../statAPI";

export default class StatsWidget extends Component {
  state = {
    stat: {
      name: "",
      data: "Loading...",
      description: "...."
    }
  };
  componentDidMount() {
    statAPI.getStat(Math.ceil(Math.random() * 9)).then(res => {
      const stat = res.data;
      statAPI.getStatData(stat.id).then(res => {
        this.setState({
          stat: {
            name: stat.name,
            description: stat.description,
            data: res.data
          }
        });
      });
    });
  }

  render() {
    return (
      <div className="stats-widget">
        <StatsDetails focused={this.state.stat} />
      </div>
    );
  }
}
