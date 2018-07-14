import React, { Component } from 'react';
import '../App.css';
import logo from '../images/BMW.png';

class Header extends Component {
  render() {
    return (      
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <h1 className="App-title">WELCOME TO CARMART.COM</h1>
        </header>
      </div>
    );
  }
}
  
export default Header;
