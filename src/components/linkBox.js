import React, { Component } from 'react';

export default class LinkBox extends Component {
    render() {
        return (
            <div className = 'package'>
                <h2>{this.props.title}</h2>
                <p>{this.props.subTitle}</p>
                <div className = 'package__description'>{this.props.text}</div>
                <a>Navigate To Page <i className="fas fa-caret-right"></i></a>
            </div>
        )
    }
}