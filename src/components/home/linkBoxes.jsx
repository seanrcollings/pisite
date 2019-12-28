import React from "react";

import LinkBox from "../linkBox";

export default function LinkBoxes() {
  const boxes = [
    {
      title: "Stats",
      subTitle: "Check Stats from the pi",
      text:
        "Information on what is on the the Pi or what it is doing are displayed here.",
      path: "/stats",
      linkName: "Navigate to Page"
    },
    {
      title: "How To",
      subTitle: "Instructions on how to set up a Pi web server",
      text:
        "A simple and quick instruction set on how to get a web server up and running on a Raspberry Pi 3 model A. (Mostly for my own documentation)",
      path: "/howto",
      linkName: "Navigate to Page"
    },
    {
      title: "Github",
      subTitle: "Check out the source code",
      text:
        "This is the Github repository for this site. You can download and mess with it if you'd like.",
      link: "https://github.com/seanrcollings/PiSite",
      linkName: "Go To Repository"
    }
  ];
  return (
    <div className="home__link-boxes">
      {boxes.map((data, index) => {
        return (
          <LinkBox className={"page-box"} key={index} {...data} id={index} />
        );
      })}
    </div>
  );
}
