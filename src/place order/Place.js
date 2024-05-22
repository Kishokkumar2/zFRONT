import React, { useState, useEffect, useContext } from 'react';
import './Place.css';
import { StoreContext } from '../Menu/CONTEXT/StoreContext';
import axios from 'axios'
import { toast } from 'react-toastify';
const Place = () => {
  const { getTotal, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    toast.success("Thankyou for Ordering")
  }

  const loadcartdata = () => {
    if (cartItems && Array.isArray(food_list)) {
      return food_list.map(item => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={item._id}>
              <p>{item.name} - Quantity: {cartItems[item._id]}</p>
            </div>
          );
        }
        return null;
      });
    }
    return <p>No items in cart</p>;
  };

  return (
    <div className='container'>
      <form  className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Information</p>
          <div className='multi-field'>
            <input name="firstName" required onChange={onchange} value={data.firstName} type="text" placeholder='First name' />
            <input name="lastName" required onChange={onchange} value={data.lastName} type="text" placeholder='Last name' />
          </div>
          <input name="email"  required onChange={onchange} value={data.email} type='email' placeholder='Email address' />
          <input name="street" required onChange={onchange} value={data.street} type='text' placeholder='Street' />
          <div className='multi-field'>
            <input name="city" required onChange={onchange} value={data.city} type="text" placeholder='City' />
            <input name="state" required onChange={onchange} value={data.state} type="text" placeholder='State' />
          </div>
          <div className='multi-field'>
            <input name="zipcode" required onChange={onchange} value={data.zipcode} type="Number" placeholder='Pincode' />
            <input name="country" required onChange={onchange} value={data.country} type="text" placeholder='Country' />
          </div>
          <input name="phone"required  onChange={onchange} value={data.phone} type='text' placeholder='Phone' />
        </div>
        <div className='place-order-right'>
          <div className='cart5'>
            <h2>Cart Totals</h2>
            <div>
              <div className='cart6'>
                <p>Sub Total</p>
                <p>{getTotal()}</p>
              </div>
              <hr />
              <div className='cart6'>
                <p>Delivery Fee</p>
                <p>{25}</p>
              </div>
              <hr />
              <div className='cart6'>
                <b>Total</b>
                <b>{getTotal() + 25}</b>
              </div>
            </div>
            <button onClick={placeOrder}>PROCEED TO PAYMENT</button>
          </div>
          <div>
            <h3>Cart Items</h3>
            {loadcartdata()}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Place;
