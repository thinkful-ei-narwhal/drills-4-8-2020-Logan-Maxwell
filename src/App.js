import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './state/state-drills.js';
import Bomb from './state/bomb.js';
import RouletteGun from './state/RouletteGun.js';

function App() {
  return (
    <main className='app'>
      <HelloWorld />
      <Bomb />
      <RouletteGun />
    </main>
  );
}

export default App;
