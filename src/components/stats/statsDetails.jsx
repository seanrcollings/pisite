import React from "react";

export default function StatsDetails(props) {
  return (
    <div className="stat-details">
      <div className="stat-details__title">{props.focused.name}</div>
      <div className="stat-details__data">{props.focused.data}</div>
      <div className="stat-details__description">
        {props.focused.description}
      </div>
    </div>
  );
}
