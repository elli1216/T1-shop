import './css/App.css';
import React, { useEffect } from 'react';
import Category from './Components/category';

function App() {
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const handleCategoryClick = id => {
    fetch('http://localhost:3001/products?categoryId=' + id)
      .then(response => response.json())
      .then(data => setProducts(data));
  }

  const renderCategories = () => {
    return categories.map(result => (
      <Category key={result.id} id={result.id} title={result.title} onCategoryClick={() => handleCategoryClick(result.id)} />
    ))
  }

  const renderProducts = () => {
    return products.map(result => (
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
            {categories && renderCategories()}
          </nav>
          <article>
            <h1>Products</h1>
            {products && renderProducts()}
          </article>
        </section>
        <footer className='footer'>© 2024 T1 Store</footer>
      </div>
    </>
  );
}

export default App;
