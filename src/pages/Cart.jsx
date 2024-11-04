import React, { useEffect, useState } from "react";
import { useLocation ,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, selectCartItems } from "../redux/cart/cartSlice";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CartCSS from "./Cart.module.css";
import { NavLink } from "react-router-dom";
import removeIcon from "../img/delete-svgrepo-com.svg";
// import { Button } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // console.log("🚀 ~ Cart ~ cartItems:", cartItems);
  const [orderNote, setOrderNote] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // You can dispatch any actions here, if needed
  }, []);

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const handleOrderNoteChange = (event) => {
    setOrderNote(event.target.value);
    // console.log(orderNote);
  };
  const handleCheckout = () => {
    if(cartItems.length <= 0 )
      {
        toast.warn("Add something in the cart!" ,{
          autoClose:1500  
        })
        navigate('/');
        return;
      }
    navigate("/checkout", { state: { note: orderNote } });
  };
  return (
    <>
      <div
        className="container"
        style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}
      >
        <Navbar />
        <div className="cartpage">
          <section id={CartCSS.pageheader}>
            <h2>#Treat yo' self</h2>
            <p>It's an "ADD TO CART" kinda DAY!!</p>
          </section>

          <section id={CartCSS.cart} className={CartCSS.sectionp1}>
            <table width="100%">
              <thead>
                <tr>
                  <td>Remove</td>
                  <td>Image</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Total</td>

                  {/* Add more table headers if needed */}
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => (
                  <tr key={cartItem.product._id}>
                    <td>
                      {/* <button
                        className={CartCSS.removeBtn}
                        src={removeIcon}
                        onClick={() =>
                          handleRemoveProduct(cartItem.product._id)
                        }
                      >
                        Remove
                      </button> */}
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleRemoveProduct(cartItem.product._id);
                        }}
                      />
                    </td>
                    <td>
                      <img
                        src={cartItem.product.imageURL[0]}
                        alt={cartItem.product.name}
                      />
                    </td>
                    <td>{cartItem.product.name}</td>
                    <td>Rs. {cartItem.product.price}</td>
                    {/* Render other product details */}
                    <td>{cartItem.quantity}</td>
                    <td>Rs. {cartItem.product.price * cartItem.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section id={CartCSS.cartadd} className={CartCSS.sectionp1}>
            {/* <div id={CartCSS.coupon}>
              <h3>Add Order Note</h3>
              <div className={`${CartCSS.inputBox} ${CartCSS.w100}`}>
                <textarea placeholder="Any extra recommendations for your Order...."></textarea>
              </div>
            </div> */}
            <div id={CartCSS.coupon}>
              <h3 style={{ color: "#333", marginBottom: "10px" }}>
                Add Order Note
              </h3>
              <div className={`${CartCSS.inputBox} ${CartCSS.w100}`}>
                <textarea
                  placeholder="Any extra recommendations for your Order...."
                  value={orderNote}
                  onChange={handleOrderNoteChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "1em",
                  }}
                ></textarea>
              </div>
            </div>

            <div id={CartCSS.subtotal}>
              <h3>Cart Totals</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Cart SubTotal</td>
                    <td>
                      Rs.{" "}
                      {cartItems.reduce(
                        (total, cartItem) => total + cartItem.product.price,
                        0
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td>
                      <strong>
                        Rs.{" "}
                        {/* {cartItems.reduce(
                          (total, cartItem) => total + cartItem.product.price,
                          0
                        )} */}
                        {cartItems.reduce(
                          (total, cartItem) =>
                            total + cartItem.product.price * cartItem.quantity,
                          0
                        )}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <NavLink
                to={{
                  pathname: "/Checkout",
                  state: {
                    note: orderNote,
                  },
                }}
              >
                <button className={CartCSS.normal}>Proceed to Checkout</button>
              </NavLink> */}
              <button className={CartCSS.normal} onClick={handleCheckout}>
        Proceed to Checkout
      </button>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
