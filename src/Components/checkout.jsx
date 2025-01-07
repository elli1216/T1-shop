import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/checkout.css';

const Checkout = () => {
  const [form, setForm] = useState({name: '', email: '', shippingAddress: ''});
  const navigate = useNavigate();

  const errors = {
    name: form.name.length === 0,
    email: form.email.length === 0,
    shippingAddress: form.shippingAddress.length === 0
  };
  const disabled = Object.keys(errors).some(x => errors[x]);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };

  const handleSubmit = (ev) => {
    if(disabled) {
      ev.preventDefault();
      return;
    };
    navigate('/confirmOrder');
  };

  return (
    <form onSubmit={handleSubmit} className='checkout-container'>
      <div className="checkout-header">
        <h1>Shipping Checkout</h1>
      </div>
      <div className="details">
        <div className="details-title">
          <h4>Your Details</h4>
          <div className="line-div"></div>
        </div>
        <div className="details-form">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" name="name" onChange={handleChange} placeholder='John Smith Doe'/>
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" onChange={handleChange} placeholder='johndoe@gmail.com'/>
        </div>
      </div>
      <div className="address-details">
        <div className="title">
          <h4>Address Details</h4>
          <div className="line-div"></div>
        </div>
        <div className="address-form">
          <div className="checkbox-container">
            <label htmlFor="checkBox">Copy to Shipping</label>
            <input type="checkbox" id="checkBox" name="checkBox" />
          </div>
          <div className="address-inputs">
            <label htmlFor="billingAddress">Billing Address</label>
            <input type="text" id="billingAddress" name="billingAddress" />
            <label htmlFor="shippingAddress">Shipping Address*</label>
            <input type="text" id="shippingAddress" name="shippingAddress" placeholder='123 New York Ave'/>
          </div>
          <div className="buttons">
            <button>Cancel</button>
            <button disabled={disabled}>Confirm Order</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Checkout