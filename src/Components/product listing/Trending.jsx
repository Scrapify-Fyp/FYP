// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import useAxiosRetry from "../../hooks/RetryHook";
// import "./productlisting.css";
// import { toast } from "react-toastify";

// const Trending = () => {
//   const [trendingProducts, setTrendingProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(8); // Start with 4 products visible
//   const navigate = useNavigate();
//   const axios = useAxiosRetry();

//   const redirectToProductDetail = (product) => {
//     navigate("/ProductDetail", { state: product });
//   };

//   const loadMoreProducts = () => {
//     setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3002/products");
//       console.log("Response:", response.data);
//       // Sort products in descending order based on rating
//       const sortedProducts = response.data.sort((a, b) => b.rating - a.rating);
//       setTrendingProducts(sortedProducts);
//     } catch (error) {
//       console.log("Error fetching products:", error);
//       toast.error(
//         "Failed to fetch data after multiple attempts. Please refresh the page.",
//         {
//           autoClose: 3000,
//         }
//       );
//     }
//   };

//   useEffect(() => {
//     console.log("Component mounted, fetching data...");
//     fetchData();
//   }, []);

//   return (
//     <section id="product1" className="section-p1">
//       <div
//         style={{
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: "20px",
//         }}
//       >
//         <h1>Trending Products</h1>
//       </div>
//       <div className="pro-container">
//         {/* Map over visible products and render each product */}
//         {trendingProducts.slice(0, visibleProducts).map((product) => (
//           <div className="pro" key={product._id}>
//             <img
//               onClick={() => redirectToProductDetail(product)}
//               src={product.imageURL[0]} // Ensure correct path for image
//               alt=""
//               style={{ cursor: "pointer" }}
//             />
//             <div
//               onClick={() => redirectToProductDetail(product)}
//               className="des"
//               style={{ cursor: "pointer" }}
//             >
//               <span>{product.brand}</span>
//               <h5>{product.name}</h5>
//               <div className="star">
//                 {/* Render star icons based on rating */}
//                 {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
//                   <FontAwesomeIcon key={index} icon={faStar} />
//                 ))}
//               </div>
//               <h4>${product.price}</h4>
//             </div>
//             <div className="cart">
//               <a href="#" style={{ color: "#007bff" }}>
//                 <FontAwesomeIcon icon={faCartPlus} onClick={() => redirectToProductDetail(product)} />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Conditional Load More button */}
//       {/* {trendingProducts.length > 4 && visibleProducts < trendingProducts.length && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button className="load-more" onClick={loadMoreProducts}>
//             Load More
//           </button>
//         </div>
//       )} */}
//     </section>
//   );
// };

// export default Trending;

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import useAxiosRetry from "../../hooks/RetryHook";
import "./productlisting.css";
import { toast } from "react-toastify";
import { auth } from "../../hooks/auth";
import ShareDialog from "./ShareDialogue"; // Ensure this import is correct
import { Puff } from "react-loader-spinner"; // Import the specific spinner
import { useEffect, useRef, useState } from "react";

const Trending = (props) => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [selectedProductUrl, setSelectedProductUrl] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const navigate = useNavigate();
  const axios = useAxiosRetry();
  const user = auth();
  const observer = useRef();

  // Timer state to track time on product page
  const [startTime, setStartTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateInteraction = async (
    product,
    interactionType,
    additionalData = {}
  ) => {
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

    if (user._id === product.vendorId) {
      console.log("The interaction of your own product cannot be counted!");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/updateInteraction`,
        {
          userId: user._id,
          productId: product._id,
          interactionType: interactionType,
          incrementValue: 1,
          ...additionalData,
        }
      );
      console.log("🚀 ~ updateInteraction ~ response:", response);
    } catch (error) {
      console.error(error);
    }
  };

  const redirectToProductDetail = async (product) => {
    const startTime = new Date();
    navigate("/ProductDetail", { state: { product, startTime } });
  };

  const handleLikeClick = async (product) => {
    await updateInteraction(product, "likes");
  };

  const handleImpressions = (product) => {
    updateInteraction(product, "impressions");
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3002/products");
      // console.log("Response:", response.data);
      const sortedProducts = response.data.sort((a, b) => b.rating - a.rating);
      setTrendingProducts(sortedProducts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error fetching products:", error);
      toast.error(
        "Failed to fetch data after multiple attempts. Please refresh the page.",
        {
          autoClose: 3000,
        }
      );
    }
  };

  useEffect(() => {
    console.log("Component mounted, fetching data...");
    fetchData();
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const productId = entry.target.dataset.productId;
          handleImpressions({ _id: productId });
          observer.current.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    observer.current = new IntersectionObserver(handleIntersection, options);

    const elements = document.querySelectorAll(".pro");
    elements.forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      if (observer.current) {
        elements.forEach((element) => {
          observer.current.unobserve(element);
        });
      }
    };
  }, [trendingProducts]);

  const handleViewAll = () => {
    navigate("/LatestProduct");
  };

  const openShareDialog = async (product) => {
    await updateInteraction(product, "shares");
    setSelectedProductId(product._id);
    setSelectedProductUrl(window.location.href);
    setIsShareDialogOpen(true);
  };

  const closeShareDialog = () => {
    setIsShareDialogOpen(false);
  };

  return (
    <>
      {loading && (
        <div
          className="spinner-container"
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center" 
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              alignItems: "center",
            }}
          >
            <h1>Trending Products</h1>
          </div>
          <Puff
            height={100}
            width={100}
            radius={1}
            color="grey"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {!loading && (
        <section id="product1" className="section-p1">
          {props.allproduct ? (
            <div></div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
                alignItems: "center",
              }}
            >
              <h1>Trending Products</h1>
              <button
                style={{
                  marginTop: "30px",
                  width: "130px",
                  height: "40px",
                  lineHeight: "40px",
                  borderRadius: "50px",
                  backgroundColor: "#e8f6ea",
                  fontWeight: "500",
                  color: "#088178",
                  border: "1px solid #cce7d0",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={handleViewAll}
              >
                View All
              </button>
            </div>
          )}
          <div className="pro-container">
            {trendingProducts.slice(0, visibleProducts).map((product) => (
              <div
                className="pro"
                key={product._id}
                data-product-id={product._id}
              >
                <img
                  onClick={() => redirectToProductDetail(product)}
                  src={product.imageURL[0]}
                  alt=""
                  style={{ cursor: "pointer" }}
                />
                <div
                  onClick={() => redirectToProductDetail(product)}
                  className="des"
                  style={{ cursor: "pointer" }}
                >
                  <span>{product.brand}</span>
                  <h5>{product.name}</h5>
                  <div className="star">
                    {Array.from({ length: product.rating }, (_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} />
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h4
                    style={{
                      color: "#088178",
                      fontFamily: "sans-serif",
                    }}
                  >
                    ${product.price}
                  </h4>
                  <div className="LATESTcart">
                    <FontAwesomeIcon
                      icon={faHeart}
                      onClick={() => handleLikeClick(product)}
                    />

                    <FontAwesomeIcon
                      icon={faShare}
                      onClick={() => openShareDialog(product)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Share Dialog */}
          <ShareDialog
            isOpen={isShareDialogOpen}
            onRequestClose={closeShareDialog}
          />
        </section>
      )}
    </>
  );
};

export default Trending;
