import React from "react";
import { getProductById } from "../fetcher";
import { useParams } from "react-router-dom";
import "../css/productDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = React.useState({ errorMessage: '', data: {} });
  const { productId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    }
    fetchData();
  }, [productId]);

  return (
    <article>
      <div className="col-1">
        <div className="category-product-title">
          {product.data.title}
        </div>

        <figure>
          <div className="category-product-image-container">
            <img src={`./assets/images/${product.data.image}`} alt={product.data.title} width={`230rem`} />
          </div>
        </figure>
      </div>

      <aside>
        <div className="category-product-finance">
          <div className="category-product-finance-price">
            PHP {product.data.price}
          </div>
          <div className="category-product-finance-stock">
            Stock: {product.data.stock}
          </div>
        </div>
        <div className="category-product-action">
          <button className="category-product-action-button">Add to Cart</button>
        </div>
      </aside>
    </article>
  )
}

export default ProductDetail;