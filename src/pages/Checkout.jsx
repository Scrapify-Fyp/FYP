import React from 'react';
import "./checkout.css";
import img from '../img/product.jpg';
import { NavLink } from 'react-router-dom';
function Checkout() {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h1>Scrapify</h1>
        <nav>
          <ul>
            <li><a href="#">Cart<i className="fa-solid fa-greater-than"></i></a></li>
            <li><a href="#">Information<i className="fa-solid fa-greater-than"></i></a></li>
            <li><a href="#">Shipping<i className="fa-solid fa-greater-than"></i></a></li>
            <li><a href="#">Payment</a></li>
          </ul>
        </nav>
        <h2>Contact Information</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <h2>Shipping Address</h2>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
          <label htmlFor="apt">Apt / Floor / Suite:</label>
          <input type="text" id="apt" name="apt" />
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />
          <label htmlFor="province">Province:</label>
          <input type="text" id="province" name="province" required />
          <label htmlFor="postalCode">Postal Code:</label>
          <input type="text" id="postalCode" name="postalCode" required />
          <label htmlFor="country">Country / Region:</label>
          <input type="text" id="country" name="country" required />
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
          <label htmlFor="saveInfo">
            <input type="checkbox" id="saveInfo" name="saveInfo" />
            Save this information for next time
          </label>
          <NavLink to={"/Cart"} ><button className='bttn'>Return to Cart</button></NavLink>  
          <NavLink to={"/Home"} ><button className='bttn'>Continue to Shipping</button></NavLink> 
        </form>
      </div>
      {/* Right Section */}
      <div className="right-section">
        <div className="product-info">
          <div className="product-image-container">
            <img src={img} alt="Product Image" className="product-image" />
            <div className="quantity-circle">3</div>
          </div>
          <div className="product-description">
            <p>Handi Crafts DIY Ideas</p>
          </div>
          <div className="product-price">
            <p>Price: $25</p>
          </div>
        </div>
        <div className="underline"></div>
        <div className="subtotal">
          Subtotal: <span className="subtotal-span"> $75 </span>
        </div>
        <div className="shipping">
          Shipping: <span className="shipping-span">will be calculated on the next step</span>
        </div>
        <div className="underline"></div>
        <div className="total">
          Total: <span className="subtotal-span"> $75 </span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
