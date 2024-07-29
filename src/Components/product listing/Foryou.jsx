import React, { useEffect, useState, useRef } from "react";
import "./productlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import { toast } from "react-toastify";
import ShareDialog from "./ShareDialogue";
import { auth } from "../../hooks/auth";
import useAxiosRetry from "../../hooks/RetryHook";

const Foryou = () => {
  const [foryouProducts, setForyouProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(true);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [selectedProductUrl, setSelectedProductUrl] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const navigate = useNavigate();
  const user = auth();
  const axios = useAxiosRetry();
  const observer = useRef();

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  const redirectToProductDetail = (product) => {
    const startTime = new Date();
    navigate("/ProductDetail", { state: { product, startTime } });
  };

  const updateInteraction = async (product, interactionType, additionalData = {}) => {
    if (!user) {
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
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/updateInteraction`, {
        userId: user._id,
        productId: product._id,
        interactionType,
        incrementValue: 1,
        ...additionalData,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLikeClick = async (product) => {
    await updateInteraction(product, "likes");
  };

  const handleImpressions = (product) => {
    updateInteraction(product, "impressions");
  };

  const fetchForyouProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
      setForyouProducts(response.data);
    } catch (error) {
      toast.error("Failed to fetch data after multiple attempts. Please refresh the page.", {
        autoClose: 3000,
      });
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchForyouProducts();
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
  }, [foryouProducts]);

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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h1 className="LTS-PRO">For You</h1>
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
          <div
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h1 className="LTS-PRO">For You</h1>
          </div>
      <div className="pro-container">
        {/* Map over visible products and render each product */}
        {foryouProducts.slice(0, visibleProducts).map((product) => (
          <div className="pro" key={product._id}>
            <img
              onClick={() => redirectToProductDetail(product)}
              src={product.imageURL[0]} // Ensure correct path for image
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
                {/* Render star icons based on rating */}
                {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
              <h4>${product.price}</h4>
            </div>
                  <div className="LATESTcart">
                    <FontAwesomeIcon icon={faHeart} onClick={() => handleLikeClick(product)} />
                    <FontAwesomeIcon icon={faShare} onClick={() => openShareDialog(product)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {foryouProducts.length > visibleProducts && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button className="load-more" onClick={loadMoreProducts}>
                Load More
              </button>
            </div>
          )}
        </section>
      )}

      <ShareDialog
        isOpen={isShareDialogOpen}
        onRequestClose={closeShareDialog}
      />
    </>
  );
};

export default Foryou;
