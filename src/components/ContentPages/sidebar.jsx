import React from "react";

import SideBarItem from "./sidebarItem";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul>
        {props.sidebarItems.map((item, index) => {
          return (
            <SideBarItem key={index} title={item.title} link={item.link} />
          );
        })}
      </ul>
    </div>
  );
}
