import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/secure-wifi-qr/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
