import React, { useEffect, useState, useRef } from "react";
import "./productlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Puff } from "react-loader-spinner";
import { toast } from "react-toastify";
import ShareDialog from "./ShareDialogue";
import { auth } from "../../hooks/auth";
import useAxiosRetry from "../../hooks/RetryHook";

export default function ScrapProducts() {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [scrapProducts, setScrapProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [selectedProductUrl, setSelectedProductUrl] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const navigate = useNavigate();
  const user = auth();
  const axios = useAxiosRetry();
  const observer = useRef();

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };

  const redirectToProductDetail = (product) => {
    const startTime = new Date();
    navigate("/ScrapProductDetail", { state: { product, startTime } });
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

      // Make the API call to fetch all products
      const response = await axios.get("http://localhost:3002/products");
      const products = response.data;
      console.log("🚀 ~ getScrapProducts ~ Wholeproducts:", products);
      console.log(
        "🚀 ~ getScrapProducts ~ Cateogiryproducts:",
        products[0].categories[0].category
      );

      // Check if the response contains products
      // if (Array.isArray(products)) {
      if (products && Array.isArray(products)) {
        const filteredScrapProducts = products.filter(
          (product) =>
            product.categories &&
            Array.isArray(product.categories) &&
            product.categories.length > 0 &&
            product.categories[0].category === "Scrap"
        );

        console.log(filteredScrapProducts);

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

  const fetchScrapProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
      const products = response.data;

      if (products && Array.isArray(products)) {
        const filteredScrapProducts = products.filter(
          (product) =>
            product.categories &&
            Array.isArray(product.categories) &&
            product.categories.length > 0 &&
            product.categories[0].category === "Scrap"
        );
        setScrapProducts(filteredScrapProducts);
      } else {
        console.error("Invalid response format");
      }
    } catch (error) {
      toast.error("Failed to fetch data after multiple attempts. Please refresh the page.", {
        autoClose: 3000,
      });
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchScrapProducts();
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
  }, [scrapProducts]);

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
            <h1>Scrap Products</h1>
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
          <div className="pro-container">
            {scrapProducts.slice(0, visibleProducts).map((product) => (
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

          {scrapProducts.length > visibleProducts && (
            <div>
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
}
