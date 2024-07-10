import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import useAxiosRetry from "../../hooks/RetryHook";
import "./productlisting.css";
import { toast } from "react-toastify";

const Latest = (props) => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8); 
  const navigate = useNavigate();
  const axios = useAxiosRetry();

  const redirectToProductDetail = (product) => {
    navigate("/ProductDetail", { state: product });
  };
  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/products");
      console.log("Response:", response.data);
      setLatestProducts(response.data);
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

  const handleViewAll = () => {
    navigate("/LatestProduct");
  };

  return (
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
              padding: "10px 20px",
              fontSize: "16px",
              border: "1px solid #007bff",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
            onClick={handleViewAll}
          >
            View All
          </button>
        </div>
      )}
      <div className="pro-container">
        {/* Map over visible products and render each product */}
        {latestProducts.slice(0, visibleProducts).map((product) => (
           
          <div className="pro" key={product._id}>
            <img
              onClick={() => {
                redirectToProductDetail(product);
              }}
              // src={product.imageURL[0]}
              src = {
                // async ()=>{
                // const res = await axios.get(product.imageURL[0]);
                // return res;
                product.imageURL[0]
              }
            // }
              alt=""
              style={{ cursor: "pointer" }}
            />
            <div
              onClick={() => {
                redirectToProductDetail(product);
              }}
              className="des"
              style={{ cursor: "pointer" }}
            >
              <span>{product.brand}</span>
              <h5>{product.name}</h5>
              <div className="star">
                {/* Render star icons based on rating */}
                {Array.from({ length: product.rating }, (_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
              <h4>${product.price}</h4>
            </div>
            <div className="cart" >
              <a  href="#" style={{ color: "#007bff" }}>
                <FontAwesomeIcon icon={faCartPlus} onClick={() => {
                redirectToProductDetail(product);
              }}/>
              </a>
            </div>
          </div>
        ))}
      </div>

      {props.allproduct ? (
        latestProducts.length > visibleProducts && (
          <div>
            <button className="load-more" onClick={loadMoreProducts}>
              Load More
            </button>
          </div>
          
        )
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Latest;