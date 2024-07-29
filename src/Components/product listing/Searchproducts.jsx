import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import useAxiosRetry from "../../hooks/RetryHook";
import { Puff } from "react-loader-spinner";
import { toast } from "react-toastify";
import ShareDialog from "./ShareDialogue";
import { auth } from "../../hooks/auth";
import "./productlisting.css";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [selectedProductUrl, setSelectedProductUrl] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const observer = useRef();
  const user = auth();
  const axios = useAxiosRetry();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || '';
  const sort = queryParams.get("sort") || '';
  const price = queryParams.get("price") || '';
  const category = queryParams.get("category") || '';
  const rating = queryParams.get("rating") || '';

  const redirectToProductDetail = (product) => {
    const startTime = new Date();
    navigate("/ProductDetail", { state: { product, startTime } });
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
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

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      console.log('Fetching with parameters:', { query, sort, price, category, rating });
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/search`, {
        params: { query, sort, price, category, rating }
      });
      setError("");
      setSearchResults(response.data);
    } catch (error) {
      setError("Failed to fetch search results");
      toast.error("Failed to fetch search results. Please try again later.", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [location.search]);

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
  }, [searchResults]);

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
            <h6>Search Results for "{query}"</h6>
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h6>Search Results for "{query}"</h6>
          </div>
          <div className="pro-container">
            {error && <p>{error}</p>}
            {!error && searchResults.length === 0 && <p>No results found.</p>}

            {searchResults.slice(0, visibleProducts).map((product) => (
              <div className="pro" key={product._id} data-product-id={product._id}>
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
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ color: "#088178", fontFamily: "sans-serif" }}>
                    ${product.price}
                  </h4>
                  <div className="LATESTcart">
                    <FontAwesomeIcon icon={faHeart} onClick={() => handleLikeClick(product)} />
                    <FontAwesomeIcon icon={faShare} onClick={() => openShareDialog(product)} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {searchResults.length > visibleProducts && (
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
};

export default SearchPage;
