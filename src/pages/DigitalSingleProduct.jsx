import React, { useEffect, useState } from "react";
import Youmaylike from "../Components/product listing/Youmaylike";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const DigitalSingleProduct = (props) => {
  const location = useLocation();
  const data = location.state;

  const navigate = useNavigate();
  const [product, setProduct] = useState(data?.product);
  console.log(data);
  console.log(product);

  const handleContract = () => {
    navigate("/contract", { state: product });
  };

  // const getThisProduct = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/products/${product?._id}`
  //     );
  //     console.log("respojnse:", response.data);
  //     // setProduct(response.data);
  //   } catch (error) {
  //     console.error("Error fetching product:", error);
  //   }
  // };

  const handleWhatsAppContact = () => {
    const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number
    const message = `Hello, I am interested in the product: ${product?.name}. Can you please provide more details?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    // console.log(product);
    // getThisProduct();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setProduct(data.product);
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
                  src={product?.imageURL}
                  alt={product?.name ?? "Product Image"}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="single-pro-details" style={{ marginLeft: "40px" }}>
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
                <button
                  style={{ marginTop: "120px" }}
                  type="button"
                  onClick={handleContract}
                  className="normal"
                >
                  Contract
                </button>
                <button
                  style={{ marginTop: "20px" }}
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="normal"
                >
                  Contact on WhatsApp
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
