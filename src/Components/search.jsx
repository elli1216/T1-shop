import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const navigate = useNavigate();
  
  useEffect(() => {
    const delay = setTimeout(() => {
      if(searchTerm) {
        navigate(`/search?s=${searchTerm}`);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, navigate]);

  const handleChange = ev => {
    setSearchTerm(ev.target.value);


  }

  return (
    <div className="search-container">
      <label htmlFor="search">Search</label>
      <input type="text" name="search" onChange={handleChange}/>
    </div>
  )
}

export default Search;
