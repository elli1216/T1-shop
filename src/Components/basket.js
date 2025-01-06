import React from "react";
import "../css/basket.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';

const Basket = () => {
  return(
    <div className="basket-container">
      <div className="row-1">
        <h1>Shopping basket</h1>
        <button>Checkout</button>
      </div>
      <div className="table-container">
        <div className="table-title">
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>
        <div className="line-div"></div>
        <div className="basket-item">
          <div className="item-name">T1 Players T-Shirt - Faker</div>
          <div className="item-quantity">
            <h4 className="qty-number">1</h4>
            <div className="icons">
              <FontAwesomeIcon className="icon" icon="circle-plus" />
              <FontAwesomeIcon className="icon" icon="circle-minus" />
              <FontAwesomeIcon className="icon" icon="trash" />
            </div>
          </div>
          <div className="item-price">PHP 2303.69</div>
        </div>
        <div className="line-div"></div>
      </div>
      <div className="row-3">
        <button>Clear</button>
        <h3>Total:</h3>
      </div>
    </div>
  );
}

export default Basket;