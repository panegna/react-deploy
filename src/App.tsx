import { disconnect } from 'process';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Produit from './pages/Produit';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produit" element={<Produit />} />

      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
