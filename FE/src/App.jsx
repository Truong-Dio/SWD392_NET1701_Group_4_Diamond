import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (    

<BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<Login />} />
    <Route path='/sign-up' element={<Register />} />
    <Route path='/about' element={<Product />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/listing/:listingId' element={<ProductList />} />
  </Routes>
</BrowserRouter>

   
  );
}

