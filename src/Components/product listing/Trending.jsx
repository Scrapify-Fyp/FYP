import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import useAxiosRetry from "../../hooks/RetryHook";
import "./productlisting.css";
import { toast } from "react-toastify";

const Trending = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8); // Start with 4 products visible
  const navigate = useNavigate();
  const axios = useAxiosRetry();

  const redirectToProductDetail = (product) => {
    navigate("/ProductDetail", { state: product });
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/products");
      console.log("Response:", response.data);
      // Sort products in descending order based on rating
      const sortedProducts = response.data.sort((a, b) => b.rating - a.rating);
      setTrendingProducts(sortedProducts);
    } catch (error) {
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

  return (
    <section id="product1" className="section-p1">
      <div
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 className="LTS-PRO">Trending Products</h1>
      </div>
      <div className="pro-container">
        {/* Map over visible products and render each product */}
        {trendingProducts.slice(0, visibleProducts).map((product) => (
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
            <div className="cart">
              <a href="#" style={{ color: "#007bff" }}>
                <FontAwesomeIcon icon={faCartPlus} onClick={() => redirectToProductDetail(product)} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Conditional Load More button */}
      {/* {trendingProducts.length > 4 && visibleProducts < trendingProducts.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="load-more" onClick={loadMoreProducts}>
            Load More
          </button>
        </div>
      )} */}
    </section>
  );
};

export default Trending;
