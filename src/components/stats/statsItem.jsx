import React from "react";

export default function StatsItem(props) {
  const focused = props.focused;
  return (
    <div
      className={`stats-item ${
        focused === props.stat.id ? "stats-item-focused" : ""
      }`}
      onClick={() => props.setFocused(props.stat)}
    >
      <div
        className={`stats-item__title ${
          focused === props.stat.id ? "stats-item__title-focused" : ""
        }`}
      >
        {props.stat.name}
        <i
          className={`stats-item__icon ${
            focused === props.stat.id ? "stats-item__icon-focused" : ""
          } fas fa-caret-right`}
        ></i>
      </div>
    </div>
  );
}
