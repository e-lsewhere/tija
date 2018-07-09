import React, { Component } from 'react';
import Logo from './components/Logo/Logo.js';
import StartButton from './components/StartButton/StartButton.js';
import Timer from './components/Timer/Timer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <StartButton />
        <Timer />
      </div>
    );
  }
}

export default App;
