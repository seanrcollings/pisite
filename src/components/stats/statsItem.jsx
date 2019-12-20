import React, { Component } from "react";

export default class StatsItem extends Component {
  handleDetailSwap() {
    this.props.swapDescription(this.props.id);
  }

  render() {
    const focusedID = this.props.focused;
    const id = this.props.id;
    return (
      <div
        className={`stats-item ${focusedID === id ? "stats-item-focused" : ""}`}
        onClick={() => this.handleDetailSwap()}
      >
        <div
          className={`stats-item__title ${
            focusedID === id ? "stats-item__title-focused" : ""
          }`}
        >
          {this.props.title}
          <i
            className={`stats-item__icon ${
              focusedID === id ? "stats-item__icon-focused" : ""
            } fas fa-caret-right`}
          ></i>
        </div>
      </div>
    );
  }
}