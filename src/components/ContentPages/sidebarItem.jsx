import React, { Component } from "react";

export default class SidebarItem extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <li>{this.props.title}</li>
      </a>
    );
  }
}
