import React from 'react';
import './App.css';
import ApiTest from './components/ApiTest';
import UserTest from './components/UserTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeWiseAI - AI-Powered Code Review Portal</h1>
        <p>Testing Frontend-Backend-MongoDB Connection</p>
      </header>
      <main>
        <ApiTest />
        <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />
        <UserTest />
      </main>
    </div>
  );
}

export default App;
