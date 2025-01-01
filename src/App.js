import './css/App.css';
import { getCategories, getProducts } from './fetcher';
import React, { useEffect } from 'react';
import Category from './Components/category';

function App() {
  const [categories, setCategories] = React.useState({errorMessage: '', data: []});
  const [products, setProducts] = React.useState({errorMessage: '', data: []});

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
      <div key={result.id} className='product-list'>
        <div>{result.title}</div>
        <div>{result.price}</div>
      </div>
    ))
  }

  return (
    <>
      <div className='app-container'>
        <header className='header'>T1 Store</header>
        <section className='main-content'>
          <nav>
            {categories.errorMessage && <div>{categories.errorMessage}</div>}
            {categories.data && renderCategories()}
          </nav>
          <article>
            <h1>Products</h1>
            {products.errorMessage && <div>{products.errorMessage}</div>}
            {products && renderProducts()}
          </article>
        </section>
        <footer className='footer'>© 2024 T1 Store</footer>
      </div>
    </>
  );
}

export default App;
