import React, { Component } from 'react';

import Logo from './logo';


export default class NavBar extends Component {
    render() {
         return (
            <div className = 'navbar'>
                <Logo />
                <a>Pi Stats</a>
                <a>How To</a>
            </div>
         )
    }
}