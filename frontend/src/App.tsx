import React from 'react';
import './App.css';
import ApiTest from './components/ApiTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeWiseAI - AI-Powered Code Review Portal</h1>
        <p>Testing Frontend-Backend Connection</p>
      </header>
      <main>
        <ApiTest />
      </main>
    </div>
  );
}

export default App;
