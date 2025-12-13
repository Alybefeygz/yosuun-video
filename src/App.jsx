import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroAnimation from './HeroAnimation';
import Poster from './Poster';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroAnimation />} />
        <Route path="/poster" element={<Poster />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
