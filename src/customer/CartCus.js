import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

const CartCus = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(0);
  const [payMethod, setPayMethod] = useState(0); 

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const handleCheckout = async () => {
    const orderData = {
      orderID: "string",
      orderStatus: 0,
      dateOrdered: new Date().toISOString(),
      dateReceived: new Date().toISOString(),
      totalPrice: totalPrice,
      customerID: "C001", 
      employeeAssignID: "S002", 
      payMethod: payMethod
    };

    try {
      const response = await axios.post(
        "https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Orders/Create",
        orderData
      );
      console.log(response.data);
      alert("Order created successfully!");
      setCartItems([]); 
      navigate('/diamondlist');
    } catch (error) {
      console.error("There was an error creating the order!", error);
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.diamondID}>
            <img src={item.imageURL} alt={item.description} width="50" />
            <span>{item.description}</span>
            <span>{item.price} USD</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <h3>Total: {totalPrice} USD</h3>
      </div>
      <div className="payment-method">
        <label htmlFor="payMethod">Payment Method: </label>
        <select
          id="payMethod"
          value={payMethod}
          onChange={(e) => setPayMethod(parseInt(e.target.value))}
        >
          <option value={0}>Cash</option>
          <option value={1}>Online</option>
        </select>
      </div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartCus;
