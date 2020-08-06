import React from 'react';
import './App.css';
import { AppHeader } from './header.js';
import { NameFilter } from './NameFilter.js';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <NameFilter />
    </div>
  );
}

export default App;