import './css/App.css';
import { getCategories, getProducts } from './fetcher';
import React, { useEffect } from 'react';
import Category from './Components/category';
import CategoryProduct from './Components/categoryProduct';

function App() {
  const [categories, setCategories] = React.useState({ errorMessage: '', data: [] });
  const [products, setProducts] = React.useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, []);

  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();
  }

  const renderCategories = () => {
    return categories.data.map(result => (
      <Category key={result.id} id={result.id} title={result.title} onCategoryClick={() => handleCategoryClick(result.id)} />
    ))
  }

  const renderProducts = () => {
    return products.data.map(result => (
      <CategoryProduct key={result.id} {...result}>{result.title}</CategoryProduct>
    ))
  }

  return (
    <>
      <div className='app-container'>
        <header className='header'><img src='./assets/images/T1-Logo.jpg' alt='T1 Logo' /></header>
        <section className='main-content'>
          <nav>
            {categories.errorMessage && <div>{categories.errorMessage}</div>}
            {categories.data && renderCategories()}
          </nav>
          <main>
            <h1>Products</h1>
            <div className='products'>
              {products.errorMessage && <div>{products.errorMessage}</div>}
              {products && renderProducts()}
            </div>
          </main>
        </section>
        <footer className='footer'>© 2024 T1 Store</footer>
      </div>
    </>
  );
}

export default App;
