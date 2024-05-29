// // import React, { useState,useEffect } from 'react';
// // import CartCSS from './Cart.module.css';
// // import img3 from '../img/products/D3.jpg';
// // import img4 from '../img/products/D5.jpg';
// // import img2 from '../img/products/D2.jpg';
// // import img1 from '../img/products/D1.jpg';
// // import removeIcon from '../img/delete-svgrepo-com.svg';
// // import Navbar from '../Components/Navbar';
// // import Footer from '../Components/Footer'
// // import { NavLink } from 'react-router-dom';
// // const productsData = [
// //   { id: 1, name: 'Advanced White AirPods', price: 2399, image: img1, removeIcon },
// //   { id: 2, name: 'Chic Puffer Jacket', price: 8999, image: img2, removeIcon },
// //   { id: 3, name: 'Trendy Thick Sole Sneakers', price: 4400, image: img3, removeIcon },
// //   { id: 4, name: 'Handmade Wall Hanging DIY kit', price: 3831, image: img4, removeIcon },
// // ];
// // // console.log(productsData);
// // export default function Cart() {
// //   const [quantities, setQuantities] = useState(
// //     productsData.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
// //   );

// //   const removeProduct = (productId) => {
// //     setQuantities((prevQuantities) => {
// //       const updatedQuantities = { ...prevQuantities };
// //       const removedProductIndex = productsData.findIndex((product) => product.id === productId);

// //       if (removedProductIndex !== -1) {
// //         delete updatedQuantities[productId];
// //         return updatedQuantities;
// //       }

// //       return prevQuantities;

// //     });
// //     console.log(productsData);
// //   };
// //   // useEffect(() => {
// //   //    if (removeProduct == null) {
// //   //     window.location.reload();
// //   //   }
// //   //   }, [removeProduct]);

// //   const increaseQuantity = (productId) => {
// //     setQuantities((prevQuantities) => ({
// //       ...prevQuantities,
// //       [productId]: prevQuantities[productId] + 1,
// //     }));
// //   };

// //   const decreaseQuantity = (productId) => {
// //     setQuantities((prevQuantities) => ({
// //       ...prevQuantities,
// //       [productId]: Math.max(0, prevQuantities[productId] - 1),
// //     }));
// //   };

// //   return (
// //     <>
// //       <div className="container" style={{width: "100%",margin:"0",padding:"0px",maxWidth:"100%"}} >
// //         <Navbar />
// //         <div className="cartpage">
// //           <section id={CartCSS.pageheader}>
// //             <h2>#Treat yo' self</h2>
// //             <p>It's an "ADD TO CART" kinda DAY!!</p>
// //           </section>

// //           <section id={CartCSS.cart} className={CartCSS.sectionp1}>
// //             <table width="100%">
// //               <thead>
// //                 <tr>
// //                   <td>Remove</td>
// //                   <td>Image</td>
// //                   <td>Product</td>
// //                   <td>Price</td>
// //                   <td>Quantity</td>
// //                   <td>SubTotal</td>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {productsData.map((product) => (
// //                   <tr key={product.id}>
// //                     <td>
// //                       <button
// //                         className={CartCSS.removeBtn}
// //                         onClick={() => removeProduct(product.id)}
// //                       >
// //                         <img className={CartCSS.removeBtn} src={product.removeIcon} alt="Remove" />
// //                       </button>
// //                     </td>
// //                     <td>
// //                       <img src={product.image} alt={product.name} />
// //                     </td>
// //                     <td>{product.name}</td>
// //                     <td>Rs. {product.price}</td>
// //                     <td>
// //                       <div>
// //                         <button
// //                           className={CartCSS.incdecbtn}
// //                           onClick={() => decreaseQuantity(product.id)}
// //                         >
// //                           -
// //                         </button>
// //                         <input
// //                           style={{ textAlign: 'center' }}
// //                           type="number"
// //                           value={quantities[product.id]}
// //                           readOnly
// //                         />
// //                         <button
// //                           className={CartCSS.incdecbtn}
// //                           onClick={() => increaseQuantity(product.id)}
// //                         >
// //                           +
// //                         </button>
// //                       </div>
// //                     </td>
// //                     <td>Rs. {product.price * quantities[product.id]}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </section>

// //           <section id={CartCSS.cartadd} className={CartCSS.sectionp1}>
// //             <div id={CartCSS.coupon}>
// //               <h3>Add Order Note</h3>
// //               <div className={`${CartCSS.inputBox} ${CartCSS.w100}`}>
// //                 <textarea placeholder="Any extra recommendations for your Order...."></textarea>
// //               </div>
// //             </div>

// //             <div id={CartCSS.subtotal}>
// //               <h3>Cart Totals</h3>
// //               <table>
// //                 <tr>
// //                   <td>Cart SubTotal</td>
// //                   <td>
// //                     Rs.{' '}
// //                     {Object.values(quantities).reduce(
// //                       (total, quantity, index) =>
// //                         total + quantity * productsData[index].price,
// //                       0
// //                     )}
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td>Shipping</td>
// //                   <td>Free</td>
// //                 </tr>
// //                 <tr>
// //                   <td>
// //                     <strong>Total</strong>
// //                   </td>
// //                   <td>
// //                     <strong>
// //                       Rs.{' '}
// //                       {Object.values(quantities).reduce(
// //                         (total, quantity, index) =>
// //                           total + quantity * productsData[index].price, 0
// //                       )}
// //                     </strong>
// //                   </td>
// //                 </tr>
// //               </table>
// //               <NavLink to={"/Checkout"}><button className={CartCSS.normal}>Proceed to Checkout</button></NavLink>
// //             </div>
// //           </section>
// //         </div>
// //         <Footer />
// //       </div>
// //     </>
// //   );
// // }

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, selectCartItems } from '../redux/cart/cartSlice';
// import { NavLink } from 'react-router-dom';
// import CartCSS from './Cart.module.css';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const productsFromRedux = useSelector(selectCartItems);
//   console.log("🚀 ~ Cart ~ productsFromRedux:", productsFromRedux)
//   const products = productsFromRedux[0]

//   const handleRemoveProduct = (productId) => {
//     dispatch(removeFromCart(productId));
//   };

//   return (
//     <>
//       <div className="container" style={{ width: '100%', margin: '0', padding: '0px', maxWidth: '100%' }}>
//         <Navbar />
//         <div className="cartpage">
//           {/* Your cart content */}
//           <section id={CartCSS.cart} className={CartCSS.sectionp1}>
//             <table width="100%">
//               <thead>
//                 <tr>
//                   <td>Remove</td>
//                   <td>Image</td>
//                   <td>Product</td>
//                   <td>Price</td>
//                   {/* Add more table headers if needed */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product) => (
//                   <tr key={product.id}>
//                     <td>
//                       <button className={CartCSS.removeBtn} onClick={() => handleRemoveProduct(product.id)}>
//                         <img className={CartCSS.removeBtn} src={product.removeIcon} alt="Remove" />
//                       </button>
//                     </td>
//                     <td>
//                       <img src={product.image} alt={product.name} />
//                     </td>
//                     <td>{product.name}</td>
//                     <td>Rs. {product.price}</td>
//                     {/* Render other product details */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </section>
//           {/* Other sections */}
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Cart;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, selectCartItems } from "../redux/cart/cartSlice";
// import { NavLink } from "react-router-dom";
// import CartCSS from "./Cart.module.css";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const productsFromRedux = useSelector(selectCartItems);
//   console.log("🚀 ~ Cart ~ productsFromRedux:", productsFromRedux);
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);

//   console.log("🚀 ~ Cart ~ products:", products);

//   useEffect(() => {
//     setTimeout(() => {
//       if (productsFromRedux && productsFromRedux.length > 0) {
//         setProducts(productsFromRedux);
//         setLoading(false);
//       } else {
//         setLoading(false);
//       }
//     }, 1000); // Simulate a delay of 1 second
//   }, [productsFromRedux]);

//   const handleRemoveProduct = (productId) => {
//     dispatch(removeFromCart(productId));
//   };

//   return (
//     <>
//       <div
//         className="container"
//         style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}
//       >
//         <Navbar />
//         <div className="cartpage">
//           {/* Your cart content */}
//           <section id={CartCSS.cart} className={CartCSS.sectionp1}>
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <>
//                 {products.length > 0 ? (
//                   <table width="100%">
//                     <thead>
//                       <tr>
//                         <td>Remove</td>
//                         <td>Image</td>
//                         <td>Product</td>
//                         <td>Price</td>
//                         {/* Add more table headers if needed */}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {products.map((product) => (
//                         <tr key={product.id}>
//                           <td>
//                             <button
//                               className={CartCSS.removeBtn}
//                               onClick={() => handleRemoveProduct(product.id)}
//                             >
//                               <img
//                                 className={CartCSS.removeBtn}
//                                 src={product.removeIcon}
//                                 alt="Remove"
//                               />
//                             </button>
//                           </td>
//                           <td>
//                             <img src={product.image} alt={product.name} />
//                           </td>
//                           <td>{product.name}</td>
//                           <td>Rs. {product.price}</td>
//                           {/* Render other product details */}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 ) : (
//                   <p>No products in your cart.</p>
//                 )}
//               </>
//             )}
//           </section>
//           {/* Other sections */}
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Cart;

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, selectCartItems } from '../redux/cart/cartSlice';
// import { NavLink } from 'react-router-dom';
// import CartCSS from './Cart.module.css';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(selectCartItems);
//   console.log("🚀 ~ Cart ~ cartItems:", cartItems)
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000); // Simulate a delay of 1 second
//   }, []);

//   const handleRemoveProduct = (productId) => {
//     dispatch(removeFromCart(productId));
//   };

//   return (
//     <>
//       <div className="container" style={{ width: '100%', margin: '0', padding: '0px', maxWidth: '100%' }}>
//         <Navbar />
//         <div className="cartpage">
//           {/* Your cart content */}
//           <section id={CartCSS.cart} className={CartCSS.sectionp1}>
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <>
//                 {cartItems.length > 0 ? (
//                   <table width="100%">
//                     <thead>
//                       <tr>
//                         <td>Remove</td>
//                         <td>Image</td>
//                         <td>Product</td>
//                         <td>Price</td>
//                         {/* Add more table headers if needed */}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cartItems.map((cartItem) => (
//                         <tr key={cartItem.product._id}>
//                           <td>
//                             <button className={CartCSS.removeBtn} onClick={() => handleRemoveProduct(cartItem.product._id)}>
//                               <img className={CartCSS.removeBtn} src={cartItem.product.removeIcon} alt="Remove" />
//                             </button>
//                           </td>
//                           <td>
//                             <img src={cartItem.product.imageURL[0]} alt={cartItem.product.name} />
//                           </td>
//                           <td>{cartItem.product.name}</td>
//                           <td>Rs. {cartItem.product.price}</td>
//                           {/* Render other product details */}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 ) : (
//                   <p>No products in your cart.</p>
//                 )}
//               </>
//             )}
//           </section>
//           {/* Other sections */}
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Cart;

import React, { useEffect } from "react";
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

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  console.log("🚀 ~ Cart ~ cartItems:", cartItems);

  useEffect(() => {
    // You can dispatch any actions here, if needed
  }, []);

  const handleRemoveProduct = (productId) => {
    dispatch(removeFromCart(productId));
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
            <div id={CartCSS.coupon}>
              <h3>Add Order Note</h3>
              <div className={`${CartCSS.inputBox} ${CartCSS.w100}`}>
                <textarea placeholder="Any extra recommendations for your Order...."></textarea>
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
              <NavLink to="/Checkout">
                <button className={CartCSS.normal}>Proceed to Checkout</button>
              </NavLink>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
