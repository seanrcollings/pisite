# Pi Site 
[![logo](https://www.raspberrypi.org/app/uploads/2017/06/Powered-by-Raspberry-Pi-Logo_Outline-Colour-Screen-500x153.png)](http://pisite.zapto.org) 

[![Build Status](https://travis-ci.org/seanrcollings/PiSite.svg?branch=master)](https://travis-ci.org/seanrcollings/)

A simple website hosted by a Raspberry Pi 3 that:  
  - Polls data from the Pi
  - Hosts My Sterling Scholar Portfolio
  - Hosts a React-based Mastermind game

> After obtaining my Raspberry Pi at the end of the Pi course in my IT class, I initially envisioned this as a simple, static
> website for me to mess around with. The task became quite difficult because I wanted to fetch data from the pi and put on 
> the site which can become quite a tedious process when working with static pages. After learning React, I now had the 
> confidence to build the site in a more reactive manner.

### How does it work? 

I used a number of helpful tools to build this site: 

* [React](https://reactjs.org/) - A Javascript library/framework for building the frontend
* [node.js](https://nodejs.org/en/) - Builds the development enviorment
* [SCSS](https://sass-lang.com/) - CSS extension
* [Apache](https://httpd.apache.org/) - Web Server to host the site
* [Redux](https://redux.js.org/basics/usage-with-react) - Container for global state
* [Flask](http://flask.pocoo.org/) - Python Microframework for the backend
* [SQLite](https://www.sqlite.org/index.html) - Lightweight SQL database engine

### Installation 
Start up a Development Enviroment
```
git clone https://github.com/seanrcollings/PiSite.git
npm install
npm start
```
And when you're ready to move to Production
```
npm build
```
Feel free to download the source code and mess around with it yourself!

### Database Creation

- To create Database, run databaseCreation.py and migrate.py
- To add new migrations, add a new one in database/migrations with a higher value than any of the previous