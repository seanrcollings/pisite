import React from "react";

export default function SidebarItem(props) {
  return (
    <a href={props.link}>
      <li>{props.title}</li>
    </a>
  );
}
