import React, { Component } from 'react';

import Logo from './logo';
import NavBarItem from './navbarItem';


export default class NavBar extends Component {
    render() {
         return (
            <div className = 'navbar'>
                <Logo path = '/'/>
                <NavBarItem title = 'Pi Stats' path = '/stats'/>
                <NavBarItem title = 'How To' path = '/howto'/>
            </div>
         )
    }
}