import React, { Component } from 'react';

export default class LinkBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: false,
            linkStateClass: ''
        }
    }

    toggleLink() {
        if(this.state.linkStateClass === '') {
            this.setState({linkStateClass: 'package__link-show'})
        } else {
            this.setState({linkStateClass: ''})
        }
    }  

    toggleSize() {
        if(!this.state.expanded) {
            this.setState({expanded: true})
        } else {
            this.setState({expanded: false})
        }
    }

    render() {
        return (
            <div className = {`package ${this.state.expanded ? 'package__expand' : ''}`} id = {this.props.id} onMouseEnter = {() => this.toggleLink()} onMouseLeave = {() => this.toggleLink()} onClick = {() => this.toggleSize()}>
                <h2>{this.props.title}</h2>
                <p className = {`subtitle ${this.state.linkStateClass} ${this.state.expanded ? 'package__subtitle__expand' : ''}`} >{this.props.subTitle}</p>
                <div className = {`package__description ${this.state.expanded ? 'package__description__expand' : ''}`}>{this.props.text}</div>
                <a className = {`package__link ${this.state.linkStateClass} ${this.state.expanded ? 'package__link__expand' : ''}`}>Navigate To Page <i className="fas fa-caret-right"></i></a>
            </div>
        )
    }
}