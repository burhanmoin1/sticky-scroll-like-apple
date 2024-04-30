import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeroSection from './HeroSection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeroSection />
  </React.StrictMode>
);
