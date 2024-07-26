import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./productlisting.css";
import { toast } from "react-toastify";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || '';
  const sort = queryParams.get("sort") || '';
  const price = queryParams.get("price") || '';
  const category = queryParams.get("category") || '';
  const rating = queryParams.get("rating") || '';

  const redirectToProductDetail = (product) => {
    navigate("/ProductDetail", { state: product });
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        console.log('Fetching with parameters:', { query, sort, price, category, rating }); // Debugging line
        const response = await axios.get(`http://localhost:3002/search`, {
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

    fetchSearchResults();
  }, [location.search]); // Make sure this dependency is correct

  return (
    <section id="product1" className="section-p1">
      <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h6>Search Results for "{query}"</h6>
      </div>

      <div className="pro-container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && searchResults.length === 0 && <p>No results found.</p>}

        {searchResults.slice(0, visibleProducts).map((product) => (
          <div className="pro" key={product._id}>
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

      {searchResults.length > visibleProducts && (
        <div>
          <button className="load-more" onClick={loadMoreProducts}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default SearchPage;
