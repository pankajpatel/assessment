import React, { Component } from 'react';
import logo from '../../../img/hotel-search.svg';

class Header extends Component {
  render() {
    return (
        <header className="header">
        	<div className="container">
	          <img src={logo} className="logo" alt="logo" />
	          <h2>Hotel Directory</h2>
          	</div>
        </header>
    );
  }
}

export default Header;
