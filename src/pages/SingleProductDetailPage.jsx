// import React, { useEffect, useState } from "react";
// import Youmaylike from "../Components/product listing/Youmaylike";
// import "./shop.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/cart/cartSlice";
// import { selectUser } from "../redux/user/userSlice";
// import { toast } from "react-toastify";
// import { auth } from "../hooks/auth";
// import CommentSection from "../Components/CommentSection";

// const SingleProductDetailPage = (props) => {
//   const dispatch = useDispatch();
//   const user = auth();

//   const location = useLocation();
//   const data = location.state;
//   console.log("Data from SingleProductPage: ", data , user);

//   const [product, setProduct] = useState(data);
//   const maxQuantity = product?.stockQuantity;
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("");

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
//       userId: user?._id,
//     };
//     if (user?._id === product.vendorId) {
//       toast.error("You can't add your own product to cart", {
//         autoClose: 1500,
//       });
//       return;
//     }
//     if (!user) {
//       toast.error("You're not logged in!", {
//         autoClose: 1500,
//       });
//       return;
//     }
//     dispatch(addToCart(cartData));
//     toast.success("Added to cart!", {
//       autoClose: 1500,
//     });
//   };

//   const handleContract = () => {
//     console.log("contract");
//   };

//   // const productImages = product?.images?.length > 0 ? product.images : [product?.imageURL];
//   const productImages = product?.imageURL;
//   console.log("Product Images: ", productImages);

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
//                 {productImages.map((imgSrc, index) => (
//                   <div className="small-img-col" key={index}>
//                     <img
//                       src={imgSrc}
//                       width="100%"
//                       className="small-img"
//                       alt={`Thumbnail ${index + 1}`}
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
//                   src={productImages[0] || ""}
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
//             <div>
//               <h2>Rs. {product?.price}</h2>
//               <div className="star">
//                 {Array.from({ length: product.rating }, (_, index) => (
//                   <FontAwesomeIcon key={index} icon={faStar} />
//                 ))}
//               </div>
//             </div>
//             <form onSubmit={handleFormSubmit}>
//               <div className="siz-options">
//                 {["S", "M", "L", "XL"].map((size) => (
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
//                 <button type="submit" className="normal">
//                   Add to Cart
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleContract}
//                   className="normal"
//                 >
//                   Contract
//                 </button>
//               </div>
//             </form>
//             <h4>Product Details</h4>
//             <span>
//               {product?.description}
//               <br />
//               <strong>Material: </strong> {product?.material} <br />
//               <strong>Texture: </strong> {product?.rating} <br />
//               <strong>Color: </strong> {product?.color}
//             </span>
//           </div>
//         </section>
//         <Youmaylike />
//         <section className="comment-section-wrapper">
//           <CommentSection productId={product?.id} />
//         </section>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default SingleProductDetailPage;

import React, { useEffect, useRef, useState } from "react";
import Youmaylike from "../Components/product listing/Youmaylike";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { toast } from "react-toastify";
import { auth } from "../hooks/auth";
import useAxiosRetry from "../hooks/RetryHook";
import CommentSection from "../Components/CommentSection";

const SingleProductDetailPage = (props) => {
  const dispatch = useDispatch();
  const user = auth();
  const axios = useAxiosRetry();

  const navigate = useNavigate();
  const location = useLocation();
  // console.log("🚀 ~ SingleProductDetailPage ~ location:", location);

  const data = location?.state?.product;
  // console.log("Data from SingleProductPage: ", data, user);

  const [product, setProduct] = useState(data);
  const maxQuantity = product?.stockQuantity;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  // const [startTime, setStartTime] = useState(null);
  const startTime = useRef(null);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    // console.log("🚀 ~ SingleProductDetailPage ~ commentCount:", commentCount)

    // Set start time when component mounts
    startTime.current = new Date();

    return () => {
      if (startTime.current) {
        const endTime = new Date(); // End the timer
        const timeInSeconds = (endTime - startTime.current) / 1000; // Calculate time in seconds
        const timeInMinutes = timeInSeconds / 60; // Convert time to minutes

        // Optionally, round to a certain number of decimal places
        const roundedTimeInMinutes = Math.round(timeInMinutes * 100) / 100; // Rounding to 2 decimal places

        updateTimeOnPageInteraction(product._id, roundedTimeInMinutes); // Send time spent to the backend
      }
    };
  }, [product._id, axios, user]); // Dependencies

  const updateTimeOnPageInteraction = async (productId, timeOnPage) => {
    if (!user) {
      console.log("User Not Found!");
      toast.error("You're not logged in!", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/updateInteraction`,
        {
          userId: user._id,
          productId: productId,
          interactionType: "timeOnPage",
          timeOnPage: timeOnPage,
        }
      );
      // console.log("🚀 ~ updateTimeOnPageInteraction ~ response:", response);
    } catch (error) {
      console.error(error);
    }
  };

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
      userId: user?._id,
    };
    if (user?._id === product.vendorId) {
      toast.error("You can't add your own product to cart", {
        autoClose: 1500,
      });
      return;
    }
    if (!user) {
      toast.error("You're not logged in!", {
        autoClose: 1500,
      });
      return;
    }
    dispatch(addToCart(cartData));
    toast.success("Added to cart!", {
      autoClose: 1500,
    });
  };

  const handleContract = () => {
    if (user._id === product.vendorId) {
      toast.error("You cannot contract your own product!", {
        autoClose: 1000,
      });
      return;
    }
    navigate("/contract", { state: product });
  };

  // const productImages = product?.images?.length > 0 ? product.images : [product?.imageURL];
  const productImages = product?.imageURL;
  // console.log("Product Images: ", productImages);

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
                {productImages.map((imgSrc, index) => (
                  <div className="small-img-col" key={index}>
                    <img
                      src={imgSrc}
                      width="100%"
                      className="small-img"
                      alt={`Thumbnail ${index + 1}`}
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
                  src={productImages[0] || ""}
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
            <div>
              <h2>Rs. {product?.price}</h2>
              <div className="star">
                {Array.from({ length: product.rating }, (_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
            </div>
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
              <strong>Texture: </strong> {product?.rating} <br />
              <strong>Color: </strong> {product?.color}
            </span>
          </div>
        </section>
        {/* <Youmaylike /> */}
        <section className="comment-section-wrapper">
          <CommentSection
            productId={product?._id}
            setCommentCount={setCommentCount}
            commentCount={commentCount}
          />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default SingleProductDetailPage;
