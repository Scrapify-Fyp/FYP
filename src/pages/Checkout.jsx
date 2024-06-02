// import React from 'react';
// import "./checkout.css";
// import img from '../img/product.jpg';
// import { NavLink } from 'react-router-dom';
// function Checkout() {
//   return (
//     <div className="container">
//       {/* Left Section */}
//       <div className="left-section">
//         <h1>Scrapify</h1>
//         <nav>
//           <ul>
//             <li><a href="#">Cart<i className="fa-solid fa-greater-than"></i></a></li>
//             <li><a href="#">Information<i className="fa-solid fa-greater-than"></i></a></li>
//             <li><a href="#">Shipping<i className="fa-solid fa-greater-than"></i></a></li>
//             <li><a href="#">Payment</a></li>
//           </ul>
//         </nav>
//         <h2>Contact Information</h2>
//         <form>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" required />
//           <h2>Shipping Address</h2>
//           <label htmlFor="firstName">First Name:</label>
//           <input type="text" id="firstName" name="firstName" required />
//           <label htmlFor="lastName">Last Name:</label>
//           <input type="text" id="lastName" name="lastName" required />
//           <label htmlFor="address">Address:</label>
//           <input type="text" id="address" name="address" required />
//           <label htmlFor="apt">Apt / Floor / Suite:</label>
//           <input type="text" id="apt" name="apt" />
//           <label htmlFor="city">City:</label>
//           <input type="text" id="city" name="city" required />
//           <label htmlFor="province">Province:</label>
//           <input type="text" id="province" name="province" required />
//           <label htmlFor="postalCode">Postal Code:</label>
//           <input type="text" id="postalCode" name="postalCode" required />
//           <label htmlFor="country">Country / Region:</label>
//           <input type="text" id="country" name="country" required />
//           <label htmlFor="phone">Phone Number:</label>
//           <input type="tel" id="phone" name="phone" required />
//           <label htmlFor="saveInfo">
//             <input type="checkbox" id="saveInfo" name="saveInfo" />
//             Save this information for next time
//           </label>
//           <NavLink to={"/Cart"} ><button className='bttn'>Return to Cart</button></NavLink>
//           <NavLink to={"/Home"} ><button className='bttn'>Continue to Shipping</button></NavLink>
//         </form>
//       </div>
//       {/* Right Section */}
//       <div className="right-section">
//         <div className="product-info">
//           <div className="product-image-container">
//             <img src={img} alt="Product Image" className="product-image" />
//             <div className="quantity-circle">3</div>
//           </div>
//           <div className="product-description">
//             <p>Handi Crafts DIY Ideas</p>
//           </div>
//           <div className="product-price">
//             <p>Price: $25</p>
//           </div>
//         </div>
//         <div className="underline"></div>
//         <div className="subtotal">
//           Subtotal: <span className="subtotal-span"> $75 </span>
//         </div>
//         <div className="shipping">
//           Shipping: <span className="shipping-span">will be calculated on the next step</span>
//         </div>
//         <div className="underline"></div>
//         <div className="total">
//           Total: <span className="subtotal-span"> $75 </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../img/product.jpg";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../redux/cart/cartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const productFromRedux = useSelector(selectCartItems);
  // console.log("🚀 ~ Checkout ~ productFromRedux:", productFromRedux)
  const [cartProducts, setCartProducts] = useState(productFromRedux);
  console.log("🚀 ~ Checkout ~ cartProduct:", cartProducts);
  const [shipping, setShipping] = useState(5);
  const [subtotal , setSubtotal] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apt: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    phone: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const product = {
    name: "Handi Crafts DIY Ideas",
    price: 25,
    quantity: 3,
    image: img,
  };

  useEffect(() => {
    const newSubtotal = cartProducts.reduce(
      (total, cartProduct) =>
        total + cartProduct.quantity * cartProduct.product.price,
      0
    );
    setSubtotal(newSubtotal);
  }, [cartProducts]);

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f4",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: 2,
            marginRight: "20px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#666", marginBottom: "20px" }}>
            Contact Information
          </h2>
          <form>
            <label
              htmlFor="email"
              style={{
                display: "block",
                margin: "10px 0 5px",
                fontWeight: "bold",
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <h2 style={{ color: "#666", marginBottom: "20px" }}>
              Shipping Address
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ flex: 1, marginRight: "10px" }}>
                <label
                  htmlFor="firstName"
                  style={{
                    display: "block",
                    margin: "10px 0 5px",
                    fontWeight: "bold",
                  }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  htmlFor="lastName"
                  style={{
                    display: "block",
                    margin: "10px 0 5px",
                    fontWeight: "bold",
                  }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>

            <label
              htmlFor="address"
              style={{
                display: "block",
                margin: "10px 0 5px",
                fontWeight: "bold",
              }}
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <label
              htmlFor="apt"
              style={{
                display: "block",
                margin: "10px 0 5px",
                fontWeight: "bold",
              }}
            >
              Apt / Floor / Suite
            </label>
            <input
              type="text"
              id="apt"
              name="apt"
              value={formData.apt}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <label
              htmlFor="city"
              style={{
                display: "block",
                margin: "10px 0 5px",
                fontWeight: "bold",
              }}
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <label
              htmlFor="province"
              style={{
                display: "block",
                margin: "10px 0 5px",
                fontWeight: "bold",
              }}
            >
              Province
            </label>
            <input
              type="text"
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <label
              htmlFor="postalCode"
              style={{
                display: "block",
                margin: "10px 0 5px",
                fontWeight: "bold",
              }}
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <label
              htmlFor="country"
              style={{
                display: "block",
                margin: "10px 0 5px",
                fontWeight: "bold",
              }}
            >
              Country / Region
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <label
              htmlFor="phone"
              style={{
                display: "block",
                margin: "10px 0 5px",
                fontWeight: "bold",
              }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <label
              htmlFor="saveInfo"
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
                style={{ marginRight: "10px" }}
              />
              Save this information for next time
            </label>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <NavLink to="/Cart">
                <button
                  type="button"
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                >
                  Return to Cart
                </button>
              </NavLink>
              <NavLink to="/OrderSummary">
                <button
                  type="button"
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                >
                  Continue to Shipping
                </button>
              </NavLink>
            </div>
          </form>
        </div>

        {/* Right Section */}
        {/* <div
          style={{
            flex: 1,
            marginLeft: "20px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#333", marginBottom: "20px" }}>Order Summary</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={product.image}
              alt="Product"
              style={{ width: "100px", height: "100px", marginRight: "20px" }}
            />
            <div>
              <h3 style={{ color: "#333", marginBottom: "5px" }}>
                {product.name}
              </h3>
              <p style={{ color: "#666", marginBottom: "5px" }}>
                Quantity: {product.quantity}
              </p>
              <p style={{ color: "#666" }}>Price: ${product.price}</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#666" }}>Subtotal</span>
            <span style={{ color: "#333" }}>${subtotal}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#666" }}>Shipping</span>
            <span style={{ color: "#333" }}>Free</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#666" }}>Total</span>
            <span style={{ color: "#333" }}>${subtotal}</span>
          </div>
        </div> */}
        <div
          style={{
            flex: 1,
            marginLeft: "20px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#333", marginBottom: "20px" }}>Order Summary</h2>
          {cartProducts.map((cartProduct) => (
            <div
              key={cartProduct?.product?.id} // Assuming each product has a unique ID
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={cartProduct?.product?.imageURL}
                alt={cartProduct?.product?.name}
                style={{ width: "100px", height: "100px", marginRight: "20px" }}
              />
              <div>
                <h3 style={{ color: "#333", marginBottom: "5px" }}>
                  {cartProduct?.product?.name}
                </h3>
                <p style={{ color: "#666", marginBottom: "5px" }}>
                  Quantity: {cartProduct?.quantity}
                </p>
                <p style={{ color: "#666" }}>
                  Price: ${cartProduct?.product?.price}
                </p>
              </div>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#666" }}>Subtotal</span>
            <span style={{ color: "#333" }}>
              {/* ${cartProducts.reduce((total, cartProduct) => total + cartProduct.quantity * cartProduct.product.price, 0)} */}
              ${subtotal}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#666" }}>Shipping</span>
            <span style={{ color: "#333" }}>{shipping}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#666" }}>Total</span>
            <span style={{ color: "#333" }}>
              $
              {shipping + subtotal}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;

//
