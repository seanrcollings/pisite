import React, { Component } from 'react';

class ContentLinks extends Component {
    render() {
    return [
      <div className='content-link'>
        <a href = {this.props.link}><i class={`${this.props.icon} link-icon`}></i> | {this.props.title}</a>
      </div>,
      <div className='content-link-mobile'>
        <a href = {this.props.link}><i class={`${this.props.icon} link-icon`}></i></a>
      </div>
    ];
  }
}

export default ContentLinks;