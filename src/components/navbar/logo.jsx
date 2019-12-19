import React, { useState } from "react";

import logoBlack from "../../img/logo.png";
import logoColor from "../../img/logo-color.png";

import history from "../../history";

export default function Logo(props) {
  const [logo, setLogo] = useState(logoBlack);

  const toggleHover = () => {
    logo === logoBlack ? setLogo(logoColor) : setLogo(logoBlack);
  };

  return (
    <span
      onClick={() => history.push(props.path)}
      className="logo navbar__item"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img src={logo} alt="logo" />
    </span>
  );
}
