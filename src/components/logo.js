import React, { Component } from 'react';

import logoBlack from '../img/logo.png';
import logoColor from '../img/logo-color.png';

export default class Logo extends Component {
    constructor(props) {
        super(props)


        this.state = {
            logoImage: logoBlack
        }
    }

    toggleHover = () => {
        if(this.state.logoImage === logoBlack) {
            this.setState({logoImage: logoColor})
        } else {
            this.setState({logoImage: logoBlack})
        }
    }

    render() {
         return (
            <a className = 'logo' onMouseEnter = {this.toggleHover} onMouseLeave = {this.toggleHover}>
                <img src = {this.state.logoImage} /> 
            </a>
         )
    }
}