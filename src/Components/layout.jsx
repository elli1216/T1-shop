import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';

const Layout = ({ categories }) => {
  const renderCategories = () => {
      return categories.data.map(result => (
        <li key={result.id}><Link to={`/categories/${result.id}`}>{result.title}</Link></li>
      ))
    }

  return(
    <>
      <div className='app-container'>
        <header className='header'>
          <Link to='/'><h1><FontAwesomeIcon className="icon" icon="home" color="white"/></h1></Link>
          <img src='/assets/images/T1-Logo.jpg' alt='T1 Logo' />
          <Link to='/basket'><FontAwesomeIcon className="icon" icon="shopping-cart" color="white"/></Link>
        </header>
        <section className='main-content'>
          <nav>
            {categories.errorMessage && <div>{categories.errorMessage}</div>}
            <ul className='category-list'>
              {categories.data && renderCategories()}
            </ul>
          </nav>
          <main>
            <Outlet />
          </main>
        </section>
        <footer className='footer'>
          <p>&copy; 2021 T1 Store</p>
        </footer>
      </div>
    </>
  )
}

export default Layout;