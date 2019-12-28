import React from "react";

import StatsItem from "./statsItem";

export default function StatsTypes(props) {
  const sortDataTypes = () => {
    return Object.values(props.stats).sort((stat1, stat2) => {
      return stat1.id - stat2.id;
    });
  };

  const renderDataTypes = stats => {
    return stats.map(stat => {
      return (
        <StatsItem
          key={stat.id}
          stat={stat}
          focused={props.focused}
          setFocused={props.setFocused}
        />
      );
    });
  };

  return [
    <div className="stats-types" key="desktop">
      <div className="stats-types__title">Data Types</div>
      <div className="stats-types__items">
        {renderDataTypes(sortDataTypes())}
        <div className="stats-types__empty"></div>
      </div>
    </div>,

    <div className="stats-types-mobile" key="mobile">
      <div className="stats-types-mobile__title">Data Types</div>
      <div className="stats-types-mobile__items">
        {renderDataTypes(sortDataTypes())}
        <div className="stats-types-mobile__empty"></div>
      </div>
    </div>
  ];
}
