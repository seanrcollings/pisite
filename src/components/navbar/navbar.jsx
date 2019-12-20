import React, { useState } from "react";

import Logo from "./logo";
import NavBarItem from "./navbarItem";
import AnimateHeight from "react-animate-height";

export default function NavBar(props) {
  const [height, setHeight] = useState(0);

  const toggleNav = () => {
    height === 0 ? setHeight("auto") : setHeight(0);
  };

  return (
    <div className="navbar">
      <div className="navbar desktopNav">
        <Logo path="/" />
        <NavBarItem title="Pi Stats" path="/stats" reactRoute={true} />
        <NavBarItem title="How To" path="/howto" reactRoute={true} />
        {/* <NavBarItem title='Portfolio' path='/portfolio' reactRoute = {true}/> */}
        <NavBarItem
          title="Master Mind"
          path="http://mastermind.seanrcollings.com"
          reactRoute={false}
        />
      </div>
      <div className="mobileNav">
        <span onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </span>
        <AnimateHeight
          duration={300}
          height={height}
          className="mobileNav-links"
        >
          <div>
            <NavBarItem
              title="Home"
              path="/"
              reactRoute={true}
              toggleNav={toggleNav}
            />
            <NavBarItem
              title="Pi Stats"
              path="/stats"
              reactRoute={true}
              toggleNav={toggleNav}
            />
            <NavBarItem
              title="How To"
              path="/howto"
              reactRoute={true}
              toggleNav={toggleNav}
            />
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
}
