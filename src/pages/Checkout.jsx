import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import img from "../img/product.jpg";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, selectCartItems } from "../redux/cart/cartSlice";
import { selectUser } from "../redux/user/userSlice";
import useAxiosRetry from "../hooks/RetryHook";

function Checkout() {
  const dispatch = useDispatch();
  const location  = useLocation();
  const [note, setNote] = useState("");
  console.log("🚀 ~ Checkout ~ orderNote:", note)
  const user = useSelector(selectUser);
  console.log("🚀 ~ Checkout ~ user:", user)
  const axios = useAxiosRetry();
  const navigate = useNavigate();
  
  
  const productFromRedux = useSelector(selectCartItems);
  // console.log("🚀 ~ Checkout ~ productFromRedux:", productFromRedux)
  const [cartProducts, setCartProducts] = useState(productFromRedux);
  console.log("🚀 ~ Checkout ~ cartProduct:", cartProducts);
  const [shipping, setShipping] = useState(5);
  const [subtotal, setSubtotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(""); 
  const [paymentpage, setPaymentpage] = useState(true); 
  const [storeres, setstoreres] = useState(); 
  const [selectmethod, setselectmethod] = useState(true); 
  

  
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
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    if(e.target.value=="online"){
      setselectmethod(false)
    }
    if(e.target.value=="cashOnDelivery"){
      setselectmethod(true);
    } if(e.target.value==""){
      setselectmethod(false);
    }
  };
  const handlecontinoueshipping=()=>{
    if(!selectmethod)
   {
    alert("Please enter payment details!")
   }
    else{


      navigate('/orderConfirmation', { state: { order: storeres } });

    }
  };
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardHolderName: "",
  });

  const handleChangepay = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    // console.log("cardDetails:" , cardDetails)
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // console.log("FormData:" , formData)
  };

  // const product = {
  //   name: "Handi Crafts DIY Ideas",
  //   price: 25,
  //   quantity: 3,
  //   image: img,
  // };

  useEffect(() => {
    const newSubtotal = cartProducts.reduce(
      (total, cartProduct) =>
        total + cartProduct.quantity * cartProduct.product.price,
      0
    );
    setSubtotal(newSubtotal);
    if (cartProducts.length <= 0) {
      setShipping(0);
      navigate('/');
    }


    console.log("Location:",location);  

    if (location.state && location.state.note) {
      setNote(location.state.note);
    }

    // console.log("note: " , note);


  }, [cartProducts , location.state]);






  const handleCheckout = async () => {
    const orderData = {
      userID: cartProducts[0]?.userId, // Replace with actual user ID
      products: cartProducts.map(cartProduct => ({
        productID: cartProduct.product._id,
        name: cartProduct.product.name,
        quantity: cartProduct.quantity,
        price: cartProduct.product.price,
        vendorID: cartProduct.product.vendorId,
        shopID: cartProduct.product.shopId
      })),
      shippingAddress: {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        apt: formData.apt,
        city: formData.city,
        province: formData.province,
        postalCode: formData.postalCode,
        country: formData.country,
        phone: formData.phone
      },
      note,
      subtotal,
      shipping,
      total: subtotal + shipping
    };
    // console.log("🚀 ~ handleCheckout ~ orderData:", orderData)

    try {
      const response = await axios.post('http://localhost:3002/orders', orderData);
      if (response.status === 201) {
        // history.push('/order-confirmation', { order: response.data });
        // console.log("response",response);
        setstoreres(response.data);
        setPaymentpage(false);
      } else {
        console.error('Failed to create order. Please try again.');
      }
    } catch (err) {
      console.error('An error occurred. Please try again.', err);
    }
  };

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
       {paymentpage? 
       (
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
          <h2
            style={{
              color: "#666",
              marginBottom: "20px",
              textAlign: "center",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
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

            <h2
              style={{
                color: "#666",
                marginBottom: "20px",
                textAlign: "center",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
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

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ flex: 1, marginRight: "10px" }}>
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
              </div>
              <div style={{ flex: 1 }}>
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
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ flex: 1, marginRight: "10px" }}>
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
              </div>
              <div style={{ flex: 1, marginRight: "10px" }}>
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
              </div>
              <div style={{ flex: 1 }}>
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
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ flex: 1, marginRight: "10px" }}>
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
              </div>
              <div style={{ flex: 1 }}>
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
              </div>
            </div>

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
              {/* <NavLink > */}
                <button
                  type="button"
                  onClick={handleCheckout}
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

            </div>
          </form>
        </div>
        ):( 
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
          <h2
            style={{
              color: "#666",
              marginBottom: "20px",
              textAlign: "center",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Payment Method
          </h2>
          <div style={{ marginBottom: "20px" }}>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">Select Payment Method</option>
              <option value="online">Pay Online (Stripe)</option>
              <option value="cashOnDelivery">Cash on Delivery</option>
            </select>
          </div>
          {paymentMethod === "online" && <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <label
        htmlFor="cardNumber"
        style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
      >
        Card Number
      </label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        value={cardDetails.cardNumber}
        onChange={handleChangepay}
        placeholder="Enter card number"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1, marginRight: "10px" }}>
          <label
            htmlFor="expiryDate"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={cardDetails.expiryDate}
            onChange={handleChangepay}
            placeholder="MM/YY"
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
            htmlFor="cvc"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            value={cardDetails.cvc}
            onChange={handleChangepay}
            placeholder="CVC"
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
        htmlFor="cardHolderName"
        style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
      >
        Cardholder Name
      </label>
      <input
        type="text"
        id="cardHolderName"
        name="cardHolderName"
        value={cardDetails.cardHolderName}
        onChange={handleChangepay}
        placeholder="Enter cardholder name"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
    </div>}
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
              {/* <NavLink > */}
                <button
                  type="button"
                  onClick={handlecontinoueshipping}
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

            </div>
        </div>
        )}

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
          <h3
            style={{
              color: "#333",
              marginBottom: "20px",
              textAlign: "center",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Order Summary
          </h3>
          {cartProducts.map((cartProduct) => (
            <div
              key={cartProduct?.product?.id}  
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
                <h3
                  style={{
                    color: "#333",
                    marginBottom: "5px",
                    fontFamily: "'Roboto', sans-serif", // Using Google Fonts' Roboto as an example
                    fontSize: "1.5em",
                    fontWeight: "bold",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                    letterSpacing: "0.5px",
                  }}
                >
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
      backgroundColor: "#f9f9f9",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    }}
  >
    <h3
      style={{
        color: "#333",
        marginBottom: "10px",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.3em",
        fontWeight: "bold",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
      }}
    >
      Order Note
    </h3>
    <p
      style={{
        color: "#666",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1em",
      }}
    >
      {note ? note : "No special instructions."}
    </p>
  </div>
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
            <span style={{ color: "#333" }}>${shipping + subtotal}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
