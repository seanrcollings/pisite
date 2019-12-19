import React from "react";
import history from "../../history";

export default function NavBarItem(props) {
  const handlePush = () => {
    history.push(props.path);
    if (props.toggleNav !== undefined) {
      props.toggleNav();
    }
  };

  const renderNavBarItem = () => {
    return props.reactRoute ? (
      <span onClick={() => handlePush()}>{props.title}</span>
    ) : (
      <a href={props.path}>{props.title}</a>
    );
  };

  return <div className="navbar__item">{renderNavBarItem()}</div>;
}
