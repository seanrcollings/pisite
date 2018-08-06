import React, { Component } from 'react';

import NavBar from './components/navbar/navbar';

class Layout extends Component {
    render() {
        return (
            <div className='layout-grid'>
                <NavBar/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;