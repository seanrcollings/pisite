import React from "react";

export default function Content(props) {
  return (
    <div className="content-grid__content">
      <div className="content-grid__wrapper">{props.children}</div>
    </div>
  );
}
