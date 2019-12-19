import React, { Component } from "react";
import ContentLinks from "./components/ContentPages/contentLinks";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>Whoops! Looks like that page doesn't exist!</h1>
        <h3>Think it should exist?</h3>
        <ContentLinks
          link="mailto:seanrcollings@gmail.com?subject=Pi Site Page not Found"
          title="Email Me"
          icon="fas fa-envelope"
          className="not-found-links"
        />
        <h2>OR</h2>
        <h3>Take me back to the site!</h3>
        <ContentLinks
          link="/"
          title="Home Page"
          icon="fas fa-home"
          className="not-found-links"
        />
      </div>
    );
  }
}

export default NotFound;
