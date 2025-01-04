import './css/App.css';
import { getCategories, getProducts } from './fetcher';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <li key={result.id}><Link to={`categories/${result.id}`}>{result.title}</Link></li>
    ))
  }

  return (
    <>
      <div className='app-container'>
        <header className='header'><img src='./assets/images/T1-Logo.jpg' alt='T1 Logo' /></header>
        <section className='main-content'>
          <nav>
            {categories.errorMessage && <div>{categories.errorMessage}</div>}
            <ul>
              {categories.data && renderCategories()}
            </ul>
          </nav>
          <main>
            <h1>Welcome</h1>
          </main>
        </section>
        <footer className='footer'>© 2024 T1 Store</footer>
      </div>
    </>
  );
}

export default App;
