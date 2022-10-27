import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { StrictMode } from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

