// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
// import useAxiosRetry from "../../hooks/RetryHook";
// import "./productlisting.css";
// import { toast } from "react-toastify";
// import { auth } from "../../hooks/auth";

// const Latest = (props) => {
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(8);
//   const navigate = useNavigate();
//   const axios = useAxiosRetry();
//   const user = auth();

//   const redirectToProductDetail = async (product, interactionType) => {
//     if (!user) {
//       console.log("User Not FOund!");
//       toast.error("You're not logged in!", {
//         position: "top-center",
//         autoClose: 500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//       });
//     }
//     if (user?._id === product.vendorId) {
//       console.log("the click of your own product cannot be counted!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/updateInteraction`,
//         {
//           userId: user?._id,
//           productId: product?._id,
//           interactionType,
//           incrementValue: 1,
//         }
//       );
//       console.log("🚀 ~ redirectToProductDetail ~ response:", response);
//     } catch (error) {
//       console.error(error);
//     }
//     navigate("/ProductDetail", { state: product });
//   };

//   const loadMoreProducts = () => {
//     setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
//   };
//   const handleLikeClick = () => {};

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3002/products");
//       console.log("Response:", response.data);
//       // Sort products in ascending order based on name
//       const sortedProducts = response.data.sort((a, b) =>
//         a.name.localeCompare(b.name)
//       );
//       setLatestProducts(sortedProducts);
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

//   const handleViewAll = () => {
//     navigate("/LatestProduct");
//   };

//   return (
//     <section id="product1" className="section-p1">
//       {props.allproduct ? (
//         <div></div>
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: "20px",
//             alignItems: "center",
//           }}
//         >
//           <h1>Latest Products</h1>
//           <button
//             style={{
//               marginTop: "30px",
//               width: "130px",
//               height: "40px",
//               lineHeight: "40px",
//               borderRadius: "50px",
//               backgroundColor: "#e8f6ea",
//               fontWeight: "500",
//               color: "#088178",
//               border: "1px solid #cce7d0",
//               textAlign: "center",
//               cursor: "pointer",
//             }}
//             onClick={handleViewAll}
//           >
//             View All
//           </button>
//         </div>
//       )}
//       <div className="pro-container">
//         {/* Map over visible products and render each product */}
//         {latestProducts.slice(0, visibleProducts).map((product) => (
//           <div
//             className="pro"
//             key={product._id}
//             onMouseEnter={() => handleImpressions(product)}
//           >
//             <img
//               onClick={() => {
//                 redirectToProductDetail(product, "clicks");
//               }}
//               src={product.imageURL[0]}
//               alt=""
//               style={{ cursor: "pointer" }}
//             />
//             <div
//               onClick={() => {
//                 redirectToProductDetail(product);
//               }}
//               className="des"
//               style={{ cursor: "pointer" }}
//             >
//               <span>{product.brand}</span>
//               <h5>{product.name}</h5>
//               <div className="star">
//                 {/* Render star icons based on rating */}
//                 {Array.from({ length: product.rating }, (_, index) => (
//                   <FontAwesomeIcon key={index} icon={faStar} />
//                 ))}
//               </div>
//               <h4>${product.price}</h4>
//             </div>
//             <div className="cart">
//               <a href="#" style={{ color: "#088178", marginLeft: "10px" }}>
//                 <FontAwesomeIcon
//                   icon={faHeart}
//                   onClick={() => handleLikeClick(product)}
//                 />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {props.allproduct ? (
//         latestProducts.length > visibleProducts && (
//           <div>
//             <button className="load-more" onClick={loadMoreProducts}>
//               Load More
//             </button>
//           </div>
//         )
//       ) : (
//         <div></div>
//       )}
//     </section>
//   );
// };

// export default Latest;

// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
// import useAxiosRetry from "../../hooks/RetryHook";
// import "./productlisting.css";
// import { toast } from "react-toastify";
// import { auth } from "../../hooks/auth";

// const Latest = (props) => {
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(8);
//   const navigate = useNavigate();
//   const axios = useAxiosRetry();
//   const user = auth();
//   const observer = useRef();

//   const updateInteraction = async (productId, interactionType) => {
//     if (!user) {
//       console.log("User Not Found!");
//       toast.error("You're not logged in!", {
//         position: "top-center",
//         autoClose: 500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//       });
//       return;
//     }
//     if (user._id === productId) {
//       console.log("The click of your own product cannot be counted!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/updateInteraction`,
//         {
//           userId: user._id,
//           productId: productId,
//           interactionType: interactionType,
//           incrementValue: 1,
//         }
//       );
//       console.log("🚀 ~ updateInteraction ~ response:", response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const redirectToProductDetail = async (product) => {
//     await updateInteraction(product._id, "clicks");
//     navigate("/ProductDetail", { state: product });
//   };

//   const handleLikeClick = async (product) => {
//     await updateInteraction(product._id, "likes");
//   };

//   const handleShareClick = async (product) => {
//     // Here you can implement the share functionality as per your requirement.
//     // For example, opening a share dialog or copying the product link to clipboard.
//     const shareUrl = `${window.location.origin}/product/${product._id}`;
//     navigator.clipboard.writeText(shareUrl);
//     toast.success("Product link copied to clipboard!");
//   };

//   const handleImpressions = (product) => {
//     updateInteraction(product._id, "impressions");
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3002/products");
//       console.log("Response:", response.data);
//       // Sort products in ascending order based on name
//       const sortedProducts = response.data.sort((a, b) =>
//         a.name.localeCompare(b.name)
//       );
//       setLatestProducts(sortedProducts);
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

//   useEffect(() => {
//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const productId = entry.target.dataset.productId;
//           handleImpressions({ _id: productId });
//           observer.current.unobserve(entry.target);
//         }
//       });
//     };

//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     observer.current = new IntersectionObserver(handleIntersection, options);

//     const elements = document.querySelectorAll(".pro");
//     elements.forEach((element) => {
//       observer.current.observe(element);
//     });

//     return () => {
//       if (observer.current) {
//         elements.forEach((element) => {
//           observer.current.unobserve(element);
//         });
//       }
//     };
//   }, [latestProducts]);

//   const handleViewAll = () => {
//     navigate("/LatestProduct");
//   };

//   return (
//     <section id="product1" className="section-p1">
//       {props.allproduct ? (
//         <div></div>
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: "20px",
//             alignItems: "center",
//           }}
//         >
//           <h1>Latest Products</h1>
//           <button
//             style={{
//               marginTop: "30px",
//               width: "130px",
//               height: "40px",
//               lineHeight: "40px",
//               borderRadius: "50px",
//               backgroundColor: "#e8f6ea",
//               fontWeight: "500",
//               color: "#088178",
//               border: "1px solid #cce7d0",
//               textAlign: "center",
//               cursor: "pointer",
//             }}
//             onClick={handleViewAll}
//           >
//             View All
//           </button>
//         </div>
//       )}
//       <div className="pro-container">
//         {/* Map over visible products and render each product */}
//         {latestProducts.slice(0, visibleProducts).map((product) => (
//           <div
//             className="pro"
//             key={product._id}
//             data-product-id={product._id}
//           >
//             <img
//               onClick={() => redirectToProductDetail(product)}
//               src={product.imageURL[0]}
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
//                 {Array.from({ length: product.rating }, (_, index) => (
//                   <FontAwesomeIcon key={index} icon={faStar} />
//                 ))}
//               </div>
//               <h4>${product.price}</h4>
//             </div>
//             <div className="cart">
//               <a href="#" style={{ color: "#088178", marginLeft: "10px" }}>
//                 <FontAwesomeIcon
//                   icon={faHeart}
//                   onClick={() => handleLikeClick(product)}
//                 />
//               </a>
//               <a href="#" style={{ color: "#088178", marginLeft: "10px" }}>
//                 <FontAwesomeIcon
//                   icon={faShare}
//                   onClick={() => handleShareClick(product)}
//                 />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Uncomment the code below if you want to add a "Load More" button */}
//       {/* {props.allproduct && latestProducts.length > visibleProducts && (
//         <div>
//           <button className="load-more" onClick={loadMoreProducts}>
//             Load More
//           </button>
//         </div>
//       )} */}
//     </section>
//   );
// };

// export default Latest;

// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
// import useAxiosRetry from "../../hooks/RetryHook";
// import "./productlisting.css";
// import { toast } from "react-toastify";
// import { auth } from "../../hooks/auth";
// import ShareDialog from "./ShareDialogue"; // Import the ShareDialog component

// const Latest = (props) => {
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(8);
//   const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
//   const [selectedProductUrl, setSelectedProductUrl] = useState('');
//   const [selectedProductId, setSelectedProductId] = useState('');
//   const navigate = useNavigate();
//   const axios = useAxiosRetry();
//   const user = auth();
//   const observer = useRef();

//   const updateInteraction = async (product, interactionType) => {
//     if (!user) {
//       console.log("User Not Found!");
//       toast.error("You're not logged in!", {
//         position: "top-center",
//         autoClose: 500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//       });
//       return;
//     }

//     if (user._id === product.vendorId) {
//       console.log("The interaction of your own product cannot be counted!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/updateInteraction`,
//         {
//           userId: user._id,
//           productId: product._id,
//           interactionType: interactionType,
//           incrementValue: 1,
//         }
//       );
//       console.log("🚀 ~ updateInteraction ~ response:", response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const redirectToProductDetail = async (product) => {
//     await updateInteraction(product, "clicks");
//     navigate("/ProductDetail", { state: product });
//   };

//   const handleLikeClick = async (product) => {
//     await updateInteraction(product, "likes");
//   };

//   const handleImpressions = (product) => {
//     updateInteraction(product, "impressions");
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3002/products");
//       console.log("Response:", response.data);
//       const sortedProducts = response.data.sort((a, b) =>
//         a.name.localeCompare(b.name)
//       );
//       setLatestProducts(sortedProducts);
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

//   useEffect(() => {
//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const productId = entry.target.dataset.productId;
//           handleImpressions({ _id: productId });
//           observer.current.unobserve(entry.target);
//         }
//       });
//     };

//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };

//     observer.current = new IntersectionObserver(handleIntersection, options);

//     const elements = document.querySelectorAll(".pro");
//     elements.forEach((element) => {
//       observer.current.observe(element);
//     });

//     return () => {
//       if (observer.current) {
//         elements.forEach((element) => {
//           observer.current.unobserve(element);
//         });
//       }
//     };
//   }, [latestProducts]);

//   const handleViewAll = () => {
//     navigate("/LatestProduct");
//   };

//   const openShareDialog = async (product) => {
//     await updateInteraction(product, "shares");
//     setSelectedProductId(product._id);
//     setSelectedProductUrl(window.location.href);
//     setIsShareDialogOpen(true);
//   };

//   const closeShareDialog = () => {
//     setIsShareDialogOpen(false);
//   };

//   return (
//     <section id="product1" className="section-p1">
//       {props.allproduct ? (
//         <div></div>
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: "20px",
//             alignItems: "center",
//           }}
//         >
//           <h1>Latest Products</h1>
//           <button
//             style={{
//               marginTop: "30px",
//               width: "130px",
//               height: "40px",
//               lineHeight: "40px",
//               borderRadius: "50px",
//               backgroundColor: "#e8f6ea",
//               fontWeight: "500",
//               color: "#088178",
//               border: "1px solid #cce7d0",
//               textAlign: "center",
//               cursor: "pointer",
//             }}
//             onClick={handleViewAll}
//           >
//             View All
//           </button>
//         </div>
//       )}
//       <div className="pro-container">
//         {/* Map over visible products and render each product */}
//         {latestProducts.slice(0, visibleProducts).map((product) => (
//           <div
//             className="pro"
//             key={product._id}
//             data-product-id={product._id}
//           >
//             <img
//               onClick={() => redirectToProductDetail(product)}
//               src={product.imageURL[0]}
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
//                 {Array.from({ length: product.rating }, (_, index) => (
//                   <FontAwesomeIcon key={index} icon={faStar} />
//                 ))}
//               </div>
//               <h4>${product.price}</h4>
//             </div>
//             <div className="cart">
//               <a href="#" style={{ color: "#088178", marginLeft: "10px" }}>
//                 <FontAwesomeIcon
//                   icon={faHeart}
//                   onClick={() => handleLikeClick(product)}
//                 />
//               </a>
//               <a href="#" style={{ color: "#088178", marginLeft: "10px" }}>
//                 <FontAwesomeIcon
//                   icon={faShare}
//                   onClick={() => openShareDialog(product)}
//                 />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Share Dialog */}
//       <ShareDialog
//         isOpen={isShareDialogOpen}
//         onRequestClose={closeShareDialog}
//         productUrl={selectedProductUrl} // Pass the selected product URL
//       />
//     </section>
//   );
// };

// export default Latest;

// import React, { useEffect, useState, useRef } from "react";
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

const Latest = (props) => {
  const [latestProducts, setLatestProducts] = useState([]);
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
      console.log("Response:", response.data);
      const sortedProducts = response.data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setLatestProducts(sortedProducts);
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
  }, [latestProducts]);

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
            justifyContent: "center",
            flexDirection: "row",
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
            <h1>Latest Products</h1>
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
              <h1>Latest Products</h1>
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
            {latestProducts.slice(0, visibleProducts).map((product) => (
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
                    fontFamily:"sans-serif"
                  }}
                  >${product.price}</h4>
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

export default Latest;
