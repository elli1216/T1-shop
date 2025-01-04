import './css/App.css';
import { getCategories } from './fetcher';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/layout';
import ProductDetail from './Components/productDetail';
import Checkout from './Components/checkout';
import Basket from './Components/basket';
import Category from './Components/category';
import Home from './Components/home';

function App() {
  const [categories, setCategories] = React.useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout categories={categories}/>}>
          <Route index element={<Home/>}/>
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/categories/:categoryId' element={<Category />} />
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
