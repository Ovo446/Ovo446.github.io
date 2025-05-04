import React from 'react';
import QuoteDisplay from './components/QuoteDisplay';
import './style.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <span className="logo">🍊</span>
        <h1>ClassicSpark</h1>
      </header>
      <QuoteDisplay />
    </div>
  );
}

export default App;
