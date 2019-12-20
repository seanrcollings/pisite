import React from "react";

export default function contentLinks(props) {
  return [
    <div className={`content-link ${props.className}`}>
      <a href={props.link}>
        <i class={`${props.icon} link-icon`}></i> | {props.title}
      </a>
    </div>,
    <div className={`content-link-mobile ${props.className}`}>
      <a href={props.link}>
        <i class={`${props.icon} link-icon`}></i>
      </a>
    </div>
  ];
}
