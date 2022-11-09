import React from 'react';
import './App.css';
import Countries from './Countries/Countries'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>COVID Tracker</h1>
      </header>

      <section>
        <Countries />
      </section>

    </div>
  );
}

export default App;
