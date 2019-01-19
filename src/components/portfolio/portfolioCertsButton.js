import React, { Component } from 'react';

class PortfolioCertsButton extends Component {
  render() {
    return (
      <div>
        <button 
          className = {`certs-buttons-button certs-buttons-button${this.props.selected === true ? '-selected':'-notselected'}`} 
          onClick = {() => this.props.swapSelected(this.props.certKey)}
        >
          {this.props.title}
        </button> 
      </div>
    );
  }
}

export default PortfolioCertsButton;