import React, { Component } from 'react';
import './App.css';
import Header from './pages/Header';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div> 
        <div className="App">
          <Header />
        </div>

        <div>
          <Login />
        </div>
        
      </div>

    );
  }
}
 
export default App;
