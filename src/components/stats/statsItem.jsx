import React, { Component } from "react";

export default class StatsItem extends Component {
  render() {
    const focused = this.props.focused;
    return (
      <div
        className={`stats-item ${
          focused === this.props.stat.id ? "stats-item-focused" : ""
        }`}
        onClick={() => this.props.setFocused(this.props.stat)}
      >
        <div
          className={`stats-item__title ${
            focused === this.props.stat.id ? "stats-item__title-focused" : ""
          }`}
        >
          {this.props.stat.name}
          <i
            className={`stats-item__icon ${
              focused === this.props.stat.id ? "stats-item__icon-focused" : ""
            } fas fa-caret-right`}
          ></i>
        </div>
      </div>
    );
  }
}
