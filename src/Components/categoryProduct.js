import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const CategoryProduct = ({ id, title, image, price }) => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { addProduct } = cartContext;

  return (
    <article>
      <div className="col-1">
        <div className="category-product-title">
          <Link to={`/products/${id}`}>{title}</Link>
        </div>

        <figure>
          <div className="category-product-image-container">
            <img src={`/assets/images/${image}`} alt={title} width={`230rem`} />
          </div>
        </figure>
      </div>

      <aside>
        <div className="category-product-finance">
          <div className="category-product-finance-price">
            PHP {price}
          </div>
        </div>
        <div className="category-product-action">
          <button onClick={() => navigate(`/products/${id}`)} className="view-product-action-button">View Product</button>
          <button onClick={() => addProduct({id, title, price})} className="category-product-action-button">Add to Cart</button>
        </div>
      </aside>
    </article>
  );
}

export default CategoryProduct;