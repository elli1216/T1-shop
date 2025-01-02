import React from "react";

const CategoryProduct = ({ title, image, price, stock }) => {
  return (
    <article>
      <div className="col-1">
        <div className="category-product-title">
          {title}
        </div>

        <figure>
          <div className="category-product-image-container">
            <img src={`./assets/images/${image}`} alt={title} width={`230rem`} />
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
          <button className="view-product-action-button">View Product</button>
          <button className="category-product-action-button">Add to Cart</button>
        </div>
      </aside>
    </article>
  );
}

export default CategoryProduct;