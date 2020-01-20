import React from "react";
import loading from "../../img/loading.gif";

export default function StatsDetails(props) {
  if (props.loading) {
    return (
      <div className="stat-details">
        <img src={loading} />
      </div>
    );
  } else {
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
}
