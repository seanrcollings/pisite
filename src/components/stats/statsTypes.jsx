import React, { Component } from "react";

import StatsItem from "./statsItem";

export default class StatsTypes extends Component {
  sortDataTypes() {
    return Object.values(this.props.stats).sort((stat1, stat2) => {
      return stat1.id - stat2.id;
    });
  }

  renderDataTypes(stats) {
    return stats.map(stat => {
      return <StatsItem key={stat.id} title={stat.name} id={stat.id} />;
    });
  }

  render() {
    return [
      <div className="stats-types" key="desktop">
        <div className="stats-types__title">Data Types</div>
        <div className="stats-types__items">
          {this.renderDataTypes(this.sortDataTypes())}
          <div className="stats-types__empty"></div>
        </div>
      </div>,

      <div className="stats-types-mobile" key="mobile">
        <div className="stats-types-mobile__title">Data Types</div>
        <div className="stats-types-mobile__items">
          {this.renderDataTypes(this.sortDataTypes())}
          <div className="stats-types-mobile__empty"></div>
        </div>
      </div>
    ];
  }
}
