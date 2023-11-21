import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Homepage';
import Services from './pages/Services';
import Contact from './pages/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Services />
    <Contact />
  </React.StrictMode>
);

