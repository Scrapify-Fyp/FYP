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
// import axios from "axios";

// const ScrapyardSingleProduct = (props) => {
//   const dispatch = useDispatch();
//   // const user = useSelector(selectUser);
//   const user = auth();

//   const location = useLocation();
//   const data = location.state;
//   console.log("Data from SingleProductPage: ", data);

//   const [product, setProduct] = useState(data);
//   const maxQuantity = product?.stockQuantity;
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("");

//   // const getThisProduct = async () => {
//   //   try {
//   //     const response = await axios.get(
//   //       `http://localhost:3002/products/${product?._id}`
//   //     );

//   //     console.log("Item deleted successfully:", response.data);
//   //     console.log("Item deleted successfully:", product);

//   //     // fetchData();
//   //   } catch (error) {
//   //     console.error("Error deleting item:", error);
//   //   }
//   // };
//   useEffect(() => {
//     // getThisProduct();

//     window.scrollTo({ top: 0, behavior: "smooth" });
//     console.log("Data from SingleProductPage: ", data);
//     setProduct(data);
//   }, [data]);

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

//   const handleRecomendations = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/scrap-recommendations",
//         {
//           // Include any required data here
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Handle the data received from the API
//       console.log(response.data);
//       // Update your component state or perform other actions with the data
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//     }
//   };

//   // Ensure product.images is an array
//   const productImages =
//     Array.isArray(product?.images) && product?.images.length > 0
//       ? product.images
//       : [product?.imageURL];

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
//             <h6>{product?.brand ?? "Unknown Brand"}</h6>
//             <h4>{product?.name ?? "Unknown Product"}</h4>
//             <div>
//               <h2>Rs. {product?.price ?? "N/A"}</h2>
//               <div className="star">
//                 {Array.from({ length: product.rating || 0 }, (_, index) => (
//                   <FontAwesomeIcon key={index} icon={faStar} />
//                 ))}
//               </div>
//             </div>
//             <form onSubmit={handleFormSubmit}>
//               {/* Size selection (commented out for now) */}
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
//                 <button
//                   type="button"
//                   onClick={handleRecomendations}
//                   className="normal"
//                 >
//                   Recomend
//                 </button>
//               </div>
//             </form>
//             <h4>Product Details</h4>
//             <span>
//               {product?.description ?? "No description available."}
//               <br />
//               <strong>Material: </strong> {product?.material ?? "N/A"} <br />
//               <strong>Texture: </strong> {product?.texture ?? "N/A"} <br />
//               <strong>Color: </strong> {product?.color ?? "N/A"}
//             </span>
//           </div>
//         </section>
//         <Youmaylike />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default ScrapyardSingleProduct;

import React, { useEffect, useState } from "react";
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
// In your main JS/CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../hooks/auth";
import axios from "axios";

import ThreeScene from "../Components/3d view/ThreeScene";

const ScrapyardSingleProduct = (props) => {
  const dispatch = useDispatch();
  const user = auth();

  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  // console.log("🚀 ~ ScrapyardSingleProduct ~ data:", data)

  const [scrapData, setScrapData] = useState(null);

  // Toy car default values
  // const product = {
  //   brand: "Hot Wheels",
  //   name: "Speed Racer Toy Car",
  //   price: 299.99,
  //   rating: 4,
  //   stockQuantity: 10,
  //   description: "A sleek and speedy toy car perfect for kids.",
  //   material: "Die-cast metal",
  //   texture: "Smooth",
  //   color: "Red",
  //   imageURL: "/images/toy-car.jpg", // Ensure this path is correct
  //   images: ["/images/toy-car-1.jpg", "/images/toy-car-2.jpg"],
  //   vendorId: "12345" // Example vendor ID
  // };

  const [product, setProduct] = useState(data);
  const maxQuantity = product?.stockQuantity;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [predictions, setPredictions] = useState(null);

  const handleContract = () => {
    if (user._id === product.vendorId) {
      toast.error("You cannot contract your own product!",{
        autoClose:1000
      });
      return;
    }
    navigate("/contract", { state: product });
  };

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   console.log("Data from SingleProductPage: ", data);
  //   setProduct(data);
  // }, [data]);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   setProduct(data || defaultToyCar);
  // }, [data]);

  const getThisProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/products/${product?._id}`
      );

      // console.log("Item deleted successfully:", response.data);
      // console.log("Item deleted successfully:", product);
      setProduct(response.data);

      // fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  useEffect(() => {
    getThisProduct();
    // setProduct(response.data);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // console.log("Data from SingleProductPage: ", data);
    setProduct(data);
  }, [data]);

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
    document.getElementById("mainImgContainer").src = src;
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

  const handleRecomendations = async () => {
    console.log(product, "in thie single scrap");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/scrap-data/product/${product?._id}`
      );

      console.log("Rsponse: ", response);
      setScrapData(response.data[0]);
      // console.log("Response: " , scrapData);

      // setScrapData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Response: ", scrapData);
    }

    const features = {
      density: scrapData?.density || 0,
      melting_point: scrapData?.melting_point || 0,
      flexibility_High: scrapData?.flexibility === "High" ? 1 : 0,
      flexibility_Low: scrapData?.flexibility === "Low" ? 1 : 0,
      flexibility_Medium: scrapData?.flexibility === "Medium" ? 1 : 0,
      flexibility_nan: !scrapData?.flexibility ? 1 : 0,
      durability_High: scrapData?.durability === "High" ? 1 : 0,
      durability_Low: scrapData?.durability === "Low" ? 1 : 0,
      durability_Medium: scrapData?.durability === "Medium" ? 1 : 0,
      durability_nan: !scrapData?.durability ? 1 : 0,
      recyclability_High: scrapData?.recyclability === "High" ? 1 : 0,
      recyclability_Low: scrapData?.recyclability === "Low" ? 1 : 0,
      recyclability_Medium: scrapData?.recyclability === "Medium" ? 1 : 0,
      recyclability_nan: !scrapData?.recyclability ? 1 : 0,
    };

    console.log("features", features);

    try {
      const response = await axios.post(
        "http://localhost:8080/scrap-recommendations",
        { input: [features] },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Access the prediction data
      const prediction = response.data.prediction[0];

      // Update the component state or perform actions with the data
      setPredictions(prediction);

      // Log the prediction and state for debugging
      console.log("Prediction:", prediction);
      console.log("Predictions State:", prediction);
      alert(JSON.stringify(prediction)); // Convert to string for alert

      // Update your component state or perform other actions with the data
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      // setPredictions(response?.data?.prediction[0]);
      console.log("finally", predictions);
    }
  };

  const render = () => {
    return <ThreeScene />;
  };

  // Ensure product.images is an array
  const productImages =
    Array.isArray(product?.images) && product?.images.length > 0
      ? product.images
      : [product?.imageURL];

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
                style={{ width: "560px", height: "400px" }}
                id="mainImgContainer"
                // onMouseMove={handleMouseMove}
                // onMouseLeave={handleMouseLeave}
              >
                {/* {render()} */}
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
            <h6>{product?.brand ?? "Unknown Brand"}</h6>
            <h4>{product?.name ?? "Unknown Product"}</h4>
            <div>
              <h2>Rs. {product?.price ?? "N/A"}</h2>
              <div className="star">
                {Array.from({ length: product.rating || 0 }, (_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
            </div>
            <form onSubmit={handleFormSubmit}>
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
                <button
                  type="button"
                  onClick={handleRecomendations}
                  className="normal"
                >
                  Recommend
                </button>
              </div>
            </form>
            <h4>Product Details</h4>
            <span>
              {product?.description ?? "No description available."}
              <br />
              <strong>Material: </strong> {product?.material ?? "N/A"} <br />
              <strong>Texture: </strong> {product?.texture ?? "N/A"} <br />
              <strong>Color: </strong> {product?.color ?? "N/A"}
            </span>
          </div>
        </section>
        <Youmaylike />
        <Footer />
      </div>
    </>
  );
};

export default ScrapyardSingleProduct;
