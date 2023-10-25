import React from 'react';
// import { styled } from '@mui/system';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';


import Header from './components/all/Header';
import Footer from './components/all/Footer';

import Contact from './pages/ContactPage';

import Home from './pages/HomePage';
import Product from './pages/ProductPage';
import Packing from './pages/PackingPage';

import ProductDetails from './components/product/ProductDetails'
import PackingDetails from './components/packing/PackingDetails';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/packing" element={<Packing />} />
          <Route path="/product/:itemNumber" element={<ProductDetails />} />
          <Route path="/packing/:packingId" element={<PackingDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;