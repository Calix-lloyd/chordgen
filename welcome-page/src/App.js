import React from 'react';
import './App.css';

function WelcomePage() {
  return (
    <div className="welcome-container">
      <h1>Welcome to My webpage</h1>
      <p>This is a simple welcome page built with React.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomePage/>
      </header>
    </div>
  );
}

export default App;
