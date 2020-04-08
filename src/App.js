import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './state/state-drills.js';
import Bomb from './state/bomb.js';

function App() {
  return (
<main className='app'>
    <HelloWorld />
    <Bomb />
</main>
  );
}

export default App;
