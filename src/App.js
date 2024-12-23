import './css/App.css';
import React, { useEffect } from 'react';
import Category from './Components/category';

function App() {
  const [results, setResults] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then(response => response.json())
      .then(data => setResults(data));
  }, []);

  const renderCategories = () => {
    return results.map(result => (
      <Category key={result.id} id={result.id} title={result.title} />
    ))
  }

  return (
    <>
      <body>
        <header className='header'>T1 Store</header>
        <section className='main-content'>
          <nav>
            {results && renderCategories()}
          </nav>
          <article>
            Main content
          </article>
        </section>
        <footer className='footer'>© 2024 T1 Store</footer>
      </body>
    </>
  );
}

export default App;
