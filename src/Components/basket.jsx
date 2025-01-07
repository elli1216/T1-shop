import React, { useContext, useState, useEffect } from "react";
import "../css/basket.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { removeProduct, clearBasket, incrementQty, decrementQty, getItems, } = useContext(CartContext);

  useEffect(() => {
    setCartItems(getItems());
  }, [getItems]);

  const renderCart = () => {
    if (cartItems.length > 0) {
      return cartItems.map((item, index) => {
        return (
          <div key={index} className="basket-item">
            <Link to={`./products/${item.id}`} className="item-name">{item.title}</Link>
            <div className="item-quantity">
              <h4 className="qty-number">{item.quantity}</h4>
              <div className="icons">
                <FontAwesomeIcon className="icon" onClick={() => setCartItems(incrementQty({id: item.id}))} icon="circle-plus" />
                <FontAwesomeIcon className="icon" onClick={() => setCartItems(decrementQty({id: item.id}))} icon="circle-minus" />
                <FontAwesomeIcon className="icon" onClick={() => setCartItems(removeProduct({id: item.id}))} icon="trash" />
              </div>
            </div>
            <div className="item-price">PHP {item.price.toFixed(2)}</div>
          </div>
        );
      });
    } else {
      return <div className="basket-item">No items in the basket</div>;
    }
  }

  const renderTotal = () => {
    const cartItems = getItems();
    
    const total = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);

    return total;
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
        <button onClick={() => setCartItems(clearBasket())}>Clear</button>
        <h3>Total: PHP{renderTotal()}</h3>
      </div>
    </div>
  );
}

export default Basket;