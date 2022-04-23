import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import Log from './Log';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Log />
  </React.StrictMode>
);
