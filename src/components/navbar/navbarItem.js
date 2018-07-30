import React, { Component } from 'react';
import history from '../../history'

export default class NavBarItem extends Component {
    
    handlePush() {
        history.push(this.props.path)
    }

    render() {
         return (
            <div className = 'navbar__item'>
                <a onClick = {() => this.handlePush()}>{this.props.title}</a>
            </div>
         )
    }
}