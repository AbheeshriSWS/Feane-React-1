import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './style.css';

import { HashRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
  <App />
</HashRouter>
);