import React, { Component } from "react";

import SideBarItem from "./sidebarItem";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          {this.props.sidebarItems.map((item, index) => {
            return (
              <SideBarItem key={index} title={item.title} link={item.link} />
            );
          })}
        </ul>
      </div>
    );
  }
}
