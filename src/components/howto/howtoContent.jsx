import React, { Component } from "react";
import Content from "../ContentPages/content";

import npmInstallImage from "../../img/npminstall.png";
import npmStartImage from "../../img/npmstart.png";
import sshImage from "../../img/ssh.png";
import apacheImage from "../../img/apacheinstall.png";

export default class HowToContent extends Component {
  render() {
    return (
      <Content>
        <div className="intro">
          <h1 id="title">How to Make a Raspberry Pi Web Server</h1>
        </div>
        <h2>
          NOTE: This guide is horrendously out of date with the state of the
          project. I hope to update it soon, but just know that it will not
          result in the same setup as the site is currently using
        </h2>
        <div className="install-container">
          <h2 id="installation">What you need to install</h2>
          <ul>
            <li>
              <a href="https://nodejs.org/en/download/">Node Server</a>
            </li>
            <li>
              <a href="https://www.python.org/">Python Programming Language</a>
            </li>
            <li>
              <a href="https://www.cygwin.com/">
                If on Windows, install some sort of Linux terminal emulator
                (Cygwin, Git Bash, Cmder)
              </a>
            </li>
            <li>
              <a href="https://httpd.apache.org/download.cgi#apache24">
                Apache Web Server (On the Pi)
              </a>
            </li>
            <li>
              <a href="http://flask.pocoo.org/">Flask Backend</a>
            </li>
          </ul>
        </div>

        <div className="scratch-contaner">
          <h2 id="scratch">Starting from Scratch</h2>
          <p className="content-grid__paragraph">
            Keep in mind that the instructions below are just if you want to use
            my app for your Raspberry Pi. It will work just as well to create
            your own website from scratch. If you want to do that, I would
            reccomend referencing{" "}
            <a href="https://github.com/facebook/create-react-app">
              Facebook's instructions{" "}
            </a>{" "}
            on how to start up your own app. You can jump to the{" "}
            <a href="#production">production</a> if you're deploying your own
            app.
          </p>
        </div>

        <div className="development-container">
          <h2 id="development">Setting up the Development Enviorment</h2>
          <p className="content-grid__paragraph">
            First off, run{" "}
            <code>git clone https://github.com/seanrcollings/PiSite</code> to
            pull down the repository, or go the{" "}
            <a href="https://github.com/seanrcollings/PiSite">GitHub page</a>{" "}
            and download it manually. Now cd into the PiSite directory and run{" "}
            <code>npm install</code> (The Node Package Manager should have come
            with the node server). This command will install all the
            dependancies that the Site requires. Running <code>npm start</code>{" "}
            will start of the development server which has tons of cool features
            like live page updating!
          </p>

          <div className="img-container">
            <img src={npmInstallImage} alt="npminstall" />
            <h5 className="img-container__sub">
              Output should look something like this
            </h5>
          </div>

          <p className="content-grid__paragraph">
            With that done, the console should display output similar to that of
            below. If that's the case, everything is set up correctly and you
            can view the Site by pasting <code>localhost:3000</code> into your
            browser! You are now ready to edit and change things as you like and
            the server will auto update for you. When you're finished changing
            things, run <code>npm build</code> and the development files will
            compile into their static version, ready for deployment.
          </p>

          <div className="img-container">
            <img src={npmStartImage} alt="npmstart" />
            <h5 className="img-container__sub">
              This is how the Git bash displays it, others may looks slightly
              different
            </h5>
          </div>
          <hr />
        </div>

        <div className="production-container">
          <h2 id="production">Setting up the Production Enviroment</h2>
          <p className="content-grid__paragraph">
            With the development version now running, we can transition it to a
            production enviroment on the Raspberry Pi itself. I am going to be
            SSHing into my Pi and just interacting with it through the command
            line, but you could do many of these actions in the Pi's actual
            interface.
          </p>

          <section>
            <h4 id="ssh">Remotely Connecting To Your Pi Through SSH</h4>
            <p className="content-grid__paragraph">
              Open a new terminal session and type in this command:{" "}
            </p>
            <div className="img-container">
              <img src={sshImage} alt="ssh" />
              <h5 className="img-container__sub">
                Replace <em> 192.164.0.4 </em> wih your Pi's IP or hostname
              </h5>
            </div>
            <p className="content-grid__paragraph">
              Your's will likely ask for the user account's password. When you
              enter it in, you will be logged into you Pi remotely. Now you have
              full access to the Pi's shell and can interact with it in any way
              that you could if you actually had the Pi infront of you. I find
              this an easier way to deal with the Pi because I don't have an
              entire other setup to attatch to the Pi and I would end up doing
              most of this from the terminal either way.
            </p>
          </section>

          <section>
            <h4 id="apache">Installing Apache</h4>
            <p className="content-grid__paragraph">
              The first thing you need to do in the Pi, is install Apache or an
              equivalent. Apache is an open source HTTP server that lets you
              serve the pages of your website out onto the internet. To install
              Apache 2.4, run the following command:
            </p>
            <div className="img-container">
              <img src={apacheImage} alt="apache" />
              <h5 className="img-container__sub">
                Type Y until you get back to the command prompt
              </h5>
            </div>
            <p className="content-grid__paragraph">
              With that, you are pretty much ready to serve webpages from your
              Pi! To test if it's working, move into Apache's default location
              for serving files: <code>/var/www/html/</code> and create an
              index.html with some simple content. Now open a browser and type
              your Pi's IP adress into the url bar. It should display whatever
              content you put in that file. If you're using my project as a
              base, you will also need to install{" "}
              <a href="http://flask.pocoo.org/">Flask</a> (a Python backend
              framework) to get the pages serving correctly. I reccomend
              referencing the Flask website's instructions on how to do that.
            </p>
          </section>
        </div>
      </Content>
    );
  }
}
