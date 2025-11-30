// src/App.tsx
import React from 'react';
import Desktop from './components/Desktop/Desktop';
import './components/styles/Desktop.css';

const App: React.FC = () => {
  return (
    <div className="app-background">
      <Desktop />
    </div>
  );
};

export default App;
