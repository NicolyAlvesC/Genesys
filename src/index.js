import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Homepage';
import Services from './pages/Services';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Services />
  </React.StrictMode>
);

