import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = ({ categories }) => {
  const renderCategories = () => {
      return categories.data.map(result => (
        <li key={result.id}><Link to={`/categories/${result.id}`}>{result.title}</Link></li>
      ))
    }

  return(
    <>
      <div className='app-container'>
        <header className='header'><img src='/assets/images/T1-Logo.jpg' alt='T1 Logo' /></header>
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
          <div className="footer-links">
            <Link className="home-link" to='/'>Home</Link>
            <Link to='/basket'>Basket</Link>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout;