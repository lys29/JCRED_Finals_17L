import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from './pages/Title.jsx';
import Forgot from './pages/Forgot.jsx';
import Welcome from './pages/Welcome.jsx';
import Newa from './pages/Newa.jsx';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Forgot-Password" element={<Forgot />} />
        <Route path="/New-Account" element={<Newa />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
