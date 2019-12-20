import React, { Component } from "react";

export default class StatsDetails extends Component {
  render() {
    return (
      <div className="stat-details">
        <div className="stat-details__title">{this.props.focused.name}</div>
        <div className="stat-details__data">{this.props.focused.data}</div>
        <div className="stat-details__description">
          {this.props.focused.description}
        </div>
      </div>
    );
  }
}
