import React from "react";
import { getProductById } from "../fetcher";
import { useParams } from "react-router-dom";

const ProductDetail = ({ title, image, price, stock }) => {
  const [product, setProduct] = React.useState({ errorMessage: '', data: [] });
  const { productId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    }
    fetchData();
  }, [productId]);

  return(
    <div>Product Detail id:{productId} title:{product.data.title}</div>
  )
}

export default ProductDetail;