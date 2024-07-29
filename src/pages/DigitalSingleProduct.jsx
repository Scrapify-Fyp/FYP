import React, { useEffect, useState } from "react";
import Youmaylike from "../Components/product listing/Youmaylike";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DigitalSingleProduct = (props) => {
  const location = useLocation();
  const data = location.state;

  const [product, setProduct] = useState(data);

  const handleContract = () => {};

  const getThisProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/products/${product?._id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getThisProduct();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setProduct(data);
  }, [data]);

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
              <div
                style={{ width: "700px", height: "400px", objectFit: "cover" }}
                id="mainImgContainer"
              >
                <img
                  src={
                    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220731171335/5-Project-Ideas-For-Final-Year-Students.jpg"
                  }
                  alt={product?.name ?? "Product Image"}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="single-pro-details" style={{ marginLeft: "40px"}}>
            <h6>{product?.brand ?? "Unknown Brand"}</h6>
            <h4>{product?.name ?? "Unknown Product"}</h4>
            <div>
              {/* <h2>Rs. {product?.price ?? "N/A"}</h2> */}
              <div className="star">
                {Array.from({ length: product?.rating || 0 }, (_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
            </div>
            <form>
              <div className="quantity-wrapper">
                <button style={{ marginTop: "120px"}}
                  type="button"
                  onClick={handleContract}
                  className="normal"
                >
                  Contract
                </button>
              </div>
            </form>
            <h4 style={{ marginTop: "20px" }}>Product Details</h4>
            <span>{product?.description ?? "No description available."}</span>
          </div>
        </section>
        <Youmaylike />
        <Footer />
      </div>
    </>
  );
};

export default DigitalSingleProduct;
