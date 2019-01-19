import React, { Component } from 'react';

import PortfolioCertsButton from './portfolioCertsButton';

import cts from '../../img/certs/cts.png';
import netPro from '../../img/certs/netPro.png';
import pcPro from '../../img/certs/pcPro.png';
import mta from '../../img/certs/mta.png'; 

class PortfolioCerts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      certs: {
        netPro: {
          name: 'Net Pro',
          img: netPro,
          description: '',
          alt: 'Net Pro'
        },
        pcPro: {
          name: 'PC Pro',
          img: pcPro,
          description: '',
          alt: 'PC Pro'
        },
        cts: {
          name: 'Code To Success',
          img: cts,
          description: '',
          alt: 'cts'
        },
        mta: {
          name: 'MTA',
          img: mta,
          description: '',
          alt: 'MTA'
        },
      },
      selected: 'netPro'
    }
  }

  swapSelected = (selected) => {
    this.setState({selected})
  }

  renderButtons() {
    return Object.keys(this.state.certs).map((cert) => {
      return (
        <PortfolioCertsButton 
          title = {this.state.certs[cert].name} 
          certKey = {cert} 
          key = {this.state.certs[cert].alt} 
          swapSelected = {this.swapSelected} 
          selected = {this.state.selected === String(cert) ? true : false}
        />
        )
    })
  }

  render() {
    return (
      <div>
        <div className = 'certs-buttons'>
          {this.renderButtons()}
        </div>
        <img 
          className='certs-img'
          src={this.state.certs[this.state.selected].img} 
          alt={this.state.certs[this.state.selected].alt}
        />
      </div>
    );
  }
}

export default PortfolioCerts;