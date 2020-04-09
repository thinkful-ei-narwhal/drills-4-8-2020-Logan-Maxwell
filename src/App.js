import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './state/state-drills.js';
import Bomb from './state/bomb.js';
import RouletteGun from './state/RouletteGun.js';
import Accordion from './state/Accordion';

function App() {
  return (
    <main className='app'>
      <HelloWorld />
      <Bomb />
      <RouletteGun />
      <Accordion />
    </main>
  );
}

export default App;
