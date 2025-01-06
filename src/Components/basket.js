import React, { useContext } from "react";
import "../css/basket.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const Basket = () => {
  const navigate = useNavigate();
  const { removeProduct, clearBasket, incrementQty, decrementQty, getItems, } = useContext(CartContext);

  const renderCart = () => {
    const cartItems = getItems();

    if (cartItems.length > 0) {
      return cartItems.map((item, index) => {
        return (
          <div key={index} className="basket-item">
            <Link to={`./products/${item.id}`} className="item-name">{item.title}</Link>
            <div className="item-quantity">
              <h4 className="qty-number">{item.quantity}</h4>
              <div className="icons">
                <FontAwesomeIcon className="icon" onClick={() => incrementQty({id: item.id})} icon="circle-plus" />
                <FontAwesomeIcon className="icon" onClick={() => decrementQty({id: item.id})} icon="circle-minus" />
                <FontAwesomeIcon className="icon" onClick={() => removeProduct({id: item.id})} icon="trash" />
              </div>
            </div>
            <div className="item-price">PHP {item.price}</div>
          </div>
        );
      });
    } else {
      return <div className="basket-item">No items in the basket</div>;
    }
  }

  return (
    <div className="basket-container">
      <div className="row-1">
        <h1>Shopping basket</h1>
        <button onClick={() => navigate('/checkout')}>Checkout</button>
      </div>
      <div className="table-container">
        <div className="table-title">
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>
        <div className="line-div"></div>
        {renderCart()}
        <div className="line-div"></div>
      </div>
      <div className="row-3">
        <button onClick={() => clearBasket()}>Clear</button>
        <h3>Total:</h3>
      </div>
    </div>
  );
}

export default Basket;