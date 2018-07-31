import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

export default class LinkBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 0,
            linkStateClass: ''
        }
    }

    toggleLink() {
        if(this.state.linkStateClass === '') {
            this.setState({linkStateClass: 'link-box__link-show'})
        } else {
            this.setState({linkStateClass: ''})
        }
    }  

    toggleHeight() {
        if(this.state.height === 0) {
            this.setState({height: '200px'})
        } else {
            this.setState({height: 0})
        }
    }

    render() {
        return (
            <div onClick = {() => this.toggleHeight()}className = 'link-box' onMouseEnter = {() => this.toggleLink()} onMouseLeave = {() => this.toggleLink()}>
                <h2 className = 'link-box__title'>
                    {this.props.title} <i className="fas fa-caret-down"></i>
                </h2>
                <p className = 'link-box__subtitle' >
                    {this.props.subTitle}
                </p>
                <AnimateHeight duration = {300} height = {this.state.height}>
                    <div className = 'link-box__description'>
                        {this.props.text}
                    </div>
                </AnimateHeight>
                <a className = {`link-box__link ${this.state.linkStateClass}`}>
                    Navigate To Page <i className="fas fa-caret-right"></i>
                </a>
            </div>
        )
    }
}