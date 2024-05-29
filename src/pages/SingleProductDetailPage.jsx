// import React, { useEffect, useState } from "react";
// import prod01Full from "../img/prod-01-full.jpg";
// import prod01Full02 from "../img/prod-01-full (02).jpg";
// import prod01Full03 from "../img/prod-01-full (03).jpg";
// import prod01Full04 from "../img/prod-01-full (04).jpg";
// import Youmaylike from "../Components/product listing/Youmaylike";
// import "./shop.css";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { useLocation } from "react-router-dom";

// const SingleProductDetailPage = (props) => {
//   const location = useLocation();
//   const data = location.state;
//   const [product, setProduct] = useState(data);
//   const maxQuantity = product?.stockQuantity;
//   // console.log("🚀 ~ SingleProductDetailPage ~ product:", product);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
//   const [quantity, setQuantity] = useState(1);

//   const handleIncreaseQuantity = () => {
//     // setQuantity(quantity + 1);
//     if (quantity < maxQuantity) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };
//   const handleSmallImageClick = (src) => {
//     document.getElementById("mainImg").src = src;
//   };

//   const redirectToProductDetail = () => {
//     window.location.href = "/ProductDetail";
//   };

//   const products = document.querySelectorAll(".pro");
//   products.forEach((product) => {
//     product.addEventListener("click", redirectToProductDetail);
//   });

//   const handleMouseMove = (event) => {
//     const rect = event.target.getBoundingClientRect();
//     const offsetX = event.clientX - rect.left;
//     const offsetY = event.clientY - rect.top;

//     const magnifier = document.getElementById("magnifier");
//     const mainImg = document.getElementById("mainImg");

//     magnifier.style.left = `${event.clientX - magnifier.offsetWidth / 2}px`;
//     magnifier.style.top = `${event.clientY - magnifier.offsetHeight / 2}px`;

//     const scale = 3;
//     const transformOriginX = (offsetX / rect.width) * 100 + "%";
//     const transformOriginY = (offsetY / rect.height) * 100 + "%";
//     mainImg.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
//     mainImg.style.transform = `scale(${scale})`;

//     magnifier.style.display = "block";
//   };

//   const handleMouseLeave = () => {
//     const magnifier = document.getElementById("magnifier");
//     const mainImg = document.getElementById("mainImg");

//     magnifier.style.display = "none";
//     mainImg.style.transform = "scale(1)";
//   };

//   return (
//     <>
//       <div
//         className="container"
//         style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}
//       >
//         <Navbar />
//         <section id="pro-details" className="section-p1">
//           <div id="pro-details">
//             <div className="single-pro-img">
//               <div className="small-img-grp">
//                 <div className="small-img-col">
//                   <img
//                     src={product?.imageURL}
//                     width="100%"
//                     className="small-img"
//                     alt=""
//                     onClick={() => handleSmallImageClick(product?.imageURL)}
//                   />
//                 </div>
//                 <div className="small-img-col">
//                   <img
//                     src={product?.imageURL}
//                     width="100%"
//                     className="small-img"
//                     alt=""
//                     onClick={() => handleSmallImageClick(product?.imageURL)}
//                   />
//                 </div>
//                 <div className="small-img-col">
//                   <img
//                     src={product?.imageURL}
//                     width="100%"
//                     className="small-img"
//                     alt=""
//                     onClick={() => handleSmallImageClick(product?.imageURL)}
//                   />
//                 </div>
//                 <div className="small-img-col">
//                   <img
//                     src={product?.imageURL}
//                     width="100%"
//                     className="small-img"
//                     alt=""
//                     onClick={() => handleSmallImageClick(product?.imageURL)}
//                   />
//                 </div>
//               </div>
//               <div
//                 id="mainImgContainer"
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <img
//                   src={product?.imageURL}
//                   width="100%"
//                   height="auto"
//                   id="mainImg"
//                   alt="Main Image"
//                 />
//               </div>
//               <div id="magnifier"></div>
//             </div>
//           </div>

//           <div className="single-pro-details">
//             <h6> {product?.brand} </h6>
//             <h4>{product?.name}</h4>
//             <h2> Rs. {product?.price}</h2>
//             <div className="siz-options">
//               <div className="size-item">
//                 <input
//                   type="radio"
//                   id="S"
//                   name="options"
//                   className="option-select"
//                   value=""
//                 />
//                 <label htmlFor="S" className="edit-size-checked">
//                   S
//                 </label>
//               </div>
//               <div className="size-item">
//                 <input
//                   type="radio"
//                   id="M"
//                   name="options"
//                   className="option-select"
//                   value=""
//                 />
//                 <label htmlFor="M" className="edit-size-checked">
//                   M
//                 </label>
//               </div>
//               <div className="size-item">
//                 <input
//                   type="radio"
//                   id="L"
//                   name="options"
//                   className="option-select"
//                   value=""
//                 />
//                 <label htmlFor="L" className="edit-size-checked">
//                   L
//                 </label>
//               </div>
//               <div className="size-item">
//                 <input
//                   type="radio"
//                   id="XL"
//                   name="options"
//                   className="option-select"
//                   value=""
//                 />
//                 <label htmlFor="XL" className="edit-size-checked">
//                   XL
//                 </label>
//               </div>
//             </div>
//             <button
//               className="quantity-button"
//               onClick={handleDecreaseQuantity}
//             >
//               -
//             </button>
//             <input className="quantity" value={quantity} />
//             <button
//               className="quantity-button"
//               onClick={handleIncreaseQuantity}
//             >
//               +
//             </button>
//             <button className="normal">Add to Cart</button>
//             <button className="normal">Contract</button>
//             <h4>Product Details</h4>
//             <span>
//               {product?.description}
//               <br />
//               <strong>Material: </strong> {product?.description} <br />
//               <strong>Rating: </strong> {product?.rating} <br />
//               <strong>Color: </strong> {product?.color}
//             </span>
//           </div>
//         </section>
//         <Youmaylike />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default SingleProductDetailPage;

// import React, { useEffect, useState } from "react";
// import prod01Full from "../img/prod-01-full.jpg";
// import prod01Full02 from "../img/prod-01-full (02).jpg";
// import prod01Full03 from "../img/prod-01-full (03).jpg";
// import prod01Full04 from "../img/prod-01-full (04).jpg";
// import Youmaylike from "../Components/product listing/Youmaylike";
// import "./shop.css";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { useLocation } from "react-router-dom";

// const SingleProductDetailPage = (props) => {
//   const location = useLocation();
//   // const history = useHistory();
//   const data = location.state;
//   const [product, setProduct] = useState(data);
//   const maxQuantity = product?.stockQuantity;
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState(product?.color || "");

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   const handleIncreaseQuantity = () => {
//     if (quantity < maxQuantity) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleSmallImageClick = (src) => {
//     document.getElementById("mainImg").src = src;
//   };

//   const handleMouseMove = (event) => {
//     const rect = event.target.getBoundingClientRect();
//     const offsetX = event.clientX - rect.left;
//     const offsetY = event.clientY - rect.top;

//     const magnifier = document.getElementById("magnifier");
//     const mainImg = document.getElementById("mainImg");

//     magnifier.style.left = `${event.clientX - magnifier.offsetWidth / 2}px`;
//     magnifier.style.top = `${event.clientY - magnifier.offsetHeight / 2}px`;

//     const scale = 3;
//     const transformOriginX = (offsetX / rect.width) * 100 + "%";
//     const transformOriginY = (offsetY / rect.height) * 100 + "%";
//     mainImg.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
//     mainImg.style.transform = `scale(${scale})`;

//     magnifier.style.display = "block";
//   };

//   const handleMouseLeave = () => {
//     const magnifier = document.getElementById("magnifier");
//     const mainImg = document.getElementById("mainImg");

//     magnifier.style.display = "none";
//     mainImg.style.transform = "scale(1)";
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const cartData = {
//       product,
//       quantity,
//       selectedSize,
//       selectedColor,
//     };
//     // history.push("/cart", { cartData });
//   };

//   return (
//     <>
//       <div
//         className="container"
//         style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}
//       >
//         <Navbar />
//         <section id="pro-details" className="section-p1">
//           <div id="pro-details">
//             <div className="single-pro-img">
//               <div className="small-img-grp">
//                 {[product?.imageURL, prod01Full, prod01Full02, prod01Full03, prod01Full04].map((imgSrc, index) => (
//                   <div className="small-img-col" key={index}>
//                     <img
//                       src={imgSrc}
//                       width="100%"
//                       className="small-img"
//                       alt=""
//                       onClick={() => handleSmallImageClick(imgSrc)}
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div
//                 id="mainImgContainer"
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <img
//                   src={product?.imageURL}
//                   width="100%"
//                   height="auto"
//                   id="mainImg"
//                   alt="Main Image"
//                 />
//               </div>
//               <div id="magnifier"></div>
//             </div>
//           </div>

//           <div className="single-pro-details">
//             <h6>{product?.brand}</h6>
//             <h4>{product?.name}</h4>
//             <h2>Rs. {product?.price}</h2>
//             <form onSubmit={handleFormSubmit}>
//               <div className="siz-options">
//                 {['S', 'M', 'L', 'XL'].map((size) => (
//                   <div className="size-item" key={size}>
//                     <input
//                       type="radio"
//                       id={size}
//                       name="size"
//                       className="option-select"
//                       value={size}
//                       checked={selectedSize === size}
//                       onChange={(e) => setSelectedSize(e.target.value)}
//                     />
//                     <label htmlFor={size} className="edit-size-checked">
//                       {size}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//               <div className="color-options">
//                 <label htmlFor="color">Color: </label>
//                 <select
//                   id="color"
//                   name="color"
//                   value={selectedColor}
//                   onChange={(e) => setSelectedColor(e.target.value)}
//                 >
//                   <option value={product?.color}>{product?.color}</option>
//                   {/* Add other color options here if available */}
//                 </select>
//               </div>
//               <div className="quantity-wrapper">
//                 <button
//                   type="button"
//                   className="quantity-button"
//                   onClick={handleDecreaseQuantity}
//                 >
//                   -
//                 </button>
//                 <input className="quantity" value={quantity} readOnly />
//                 <button
//                   type="button"
//                   className="quantity-button"
//                   onClick={handleIncreaseQuantity}
//                 >
//                   +
//                 </button>
//               </div>
//               <button type="submit" className="normal">Add to Cart</button>
//             </form>
//             <h4>Product Details</h4>
//             <span>
//               {product?.description}
//               <br />
//               <strong>Material: </strong> {product?.material} <br />
//               <strong>Rating: </strong> {product?.rating} <br />
//               <strong>Color: </strong> {product?.color}
//             </span>
//           </div>
//         </section>
//         <Youmaylike />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default SingleProductDetailPage;

import React, { useEffect, useState } from "react";
import prod01Full from "../img/prod-01-full.jpg";
import prod01Full02 from "../img/prod-01-full (02).jpg";
import prod01Full03 from "../img/prod-01-full (03).jpg";
import prod01Full04 from "../img/prod-01-full (04).jpg";
import Youmaylike from "../Components/product listing/Youmaylike";
import "./shop.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { selectUser } from "../redux/user/userSlice";
import { toast } from "react-toastify";

const SingleProductDetailPage = (props) => {
  const dispath = useDispatch();
  const user  =  useSelector(selectUser);
  const location = useLocation();
  // const history = useHistory();
  const data = location.state;
  const [product, setProduct] = useState(data);
  const maxQuantity = product?.stockQuantity;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleIncreaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSmallImageClick = (src) => {
    document.getElementById("mainImg").src = src;
  };

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const magnifier = document.getElementById("magnifier");
    const mainImg = document.getElementById("mainImg");

    magnifier.style.left = `${event.clientX - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${event.clientY - magnifier.offsetHeight / 2}px`;

    const scale = 3;
    const transformOriginX = (offsetX / rect.width) * 100 + "%";
    const transformOriginY = (offsetY / rect.height) * 100 + "%";
    mainImg.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
    mainImg.style.transform = `scale(${scale})`;

    magnifier.style.display = "block";
  };

  const handleMouseLeave = () => {
    const magnifier = document.getElementById("magnifier");
    const mainImg = document.getElementById("mainImg");

    magnifier.style.display = "none";
    mainImg.style.transform = "scale(1)";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cartData = {
      product,
      quantity,
      selectedSize,
      userId: user.id,
    };
    // console.log("🚀 ~ handleFormSubmit ~ cartData:", cartData);
    if(user.id === product.vendorId)
      {
        // alert("You can't add your own product to cart");
        toast.error("You can't add your own product to cart" , {
          autoClose: 1500
        })
        return;
      }
    dispath(addToCart(cartData));

    // history.push("/cart", { cartData });
  };

  const handleContract = () => {
    console.log("contract");
  };

  return (
    <>
      <div
        className="container"
        style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}
      >
        <Navbar />
        <section id="pro-details" className="section-p1">
          <div id="pro-details">
            <div className="single-pro-img">
              <div className="small-img-grp">
                {[
                  product?.imageURL,
                  prod01Full,
                  prod01Full02,
                  prod01Full03,
                  prod01Full04,
                ].map((imgSrc, index) => (
                  <div className="small-img-col" key={index}>
                    <img
                      src={imgSrc}
                      width="100%"
                      className="small-img"
                      alt=""
                      onClick={() => handleSmallImageClick(imgSrc)}
                    />
                  </div>
                ))}
              </div>
              <div
                id="mainImgContainer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={product?.imageURL}
                  width="100%"
                  height="auto"
                  id="mainImg"
                  alt="Main Image"
                />
              </div>
              <div id="magnifier"></div>
            </div>
          </div>

          <div className="single-pro-details">
            <h6>{product?.brand}</h6>
            <h4>{product?.name}</h4>
            <h2>Rs. {product?.price}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="siz-options">
                {["S", "M", "L", "XL"].map((size) => (
                  <div className="size-item" key={size}>
                    <input
                      type="radio"
                      id={size}
                      name="size"
                      className="option-select"
                      value={size}
                      checked={selectedSize === size}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    />
                    <label htmlFor={size} className="edit-size-checked">
                      {size}
                    </label>
                  </div>
                ))}
              </div>
              <div className="quantity-wrapper">
                <button
                  type="button"
                  className="quantity-button"
                  onClick={handleDecreaseQuantity}
                >
                  -
                </button>
                <input className="quantity" value={quantity} readOnly />
                <button
                  type="button"
                  className="quantity-button"
                  onClick={handleIncreaseQuantity}
                >
                  +
                </button>
                <button type="submit" className="normal">
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={handleContract}
                  className="normal"
                >
                  Contract
                </button>
              </div>
            </form>
            <h4>Product Details</h4>
            <span>
              {product?.description}
              <br />
              <strong>Material: </strong> {product?.material} <br />
              <strong>Rating: </strong> {product?.rating} <br />
              <strong>Color: </strong> {product?.color}
            </span>
          </div>
        </section>
        <Youmaylike />
        <Footer />
      </div>
    </>
  );
};

export default SingleProductDetailPage;
