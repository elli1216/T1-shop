import React from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../fetcher";
import { useEffect } from "react";
import CategoryProduct from "./categoryProduct";

const Category = () => {
  const [products, setProducts] = React.useState({ errorMessage: '', data: [] });
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProducts(categoryId);
      setProducts(responseObject);
    }
    fetchData();
  }, [categoryId]);

  const renderProducts = () => {
    return products.data.map(result => (
      <CategoryProduct key={result.id} {...result}>{result.title}</CategoryProduct>
    ))
  }

  return (
    <div>
      <div className='products'>
        {products.errorMessage && <div>{products.errorMessage}</div>}
        {products && renderProducts()}
      </div>
    </div>
  );
}

export default Category;