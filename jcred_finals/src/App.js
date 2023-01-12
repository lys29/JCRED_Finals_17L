import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from './pages/Title.jsx';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
