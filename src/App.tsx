import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    </>
  );
}

export default App;
