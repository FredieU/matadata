import React from 'react';
import LinkedInBadge from './components/LinkedInBadge';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Under construction...coming soon!</h4>
        <small>In the meantime, check out my social links.</small>
        <LinkedInBadge bgColour="light" layout="horizontal" size="large" />
      </header>
    </div>
  );
}
