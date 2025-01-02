import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductDetail from './Components/productDetail';
import Checkout from './Components/checkout';
import Basket from './Components/basket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/basket' element={<Basket />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
