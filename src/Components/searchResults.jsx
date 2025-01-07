import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getProductsByQuery } from '../fetcher';
import CategoryProduct from './categoryProduct';

const SearchResults = () => {
  const [products, setProducts] = React.useState({ errorMessage: '', data: [] });
  const [searchParams] = useSearchParams();
  const query = searchParams.get('s');

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductsByQuery(query);
      setProducts(responseObject);
    }
    fetchData();
  }, [query]);

  const renderProducts = () => {
    return products.data.map(result => (
      <CategoryProduct key={result.id} {...result}>{result.title}</CategoryProduct>
    ))
  }

  return (
    <div>
      {products.errorMessage && <div>{products.errorMessage}</div>}
      {products && renderProducts()}
    </div>
  )
}

export default SearchResults