import React, { useEffect, useState } from "react";
import Youmaylike from "../Components/product listing/Youmaylike";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { selectUser } from "../redux/user/userSlice";
import { toast } from "react-toastify";

const ScrapyardSingleProduct = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const location = useLocation();
  const data = location.state;
  console.log("Data from SingleProductPage: ", data);

  const [product, setProduct] = useState(data);
  const maxQuantity = product?.stockQuantity;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Data from SingleProductPage: ", data); // Debug log
    setProduct(data);
  }, [data]);

  const handleIncreaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSmallImageClick = (src) => {
    document.getElementById("mainImg").src = src;
  };

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const magnifier = document.getElementById("magnifier");
    const mainImg = document.getElementById("mainImg");

    magnifier.style.left = `${event.clientX - magnifier.offsetWidth / 2}px`;
    magnifier.style.top = `${event.clientY - magnifier.offsetHeight / 2}px`;

    const scale = 3;
    const transformOriginX = (offsetX / rect.width) * 100 + "%";
    const transformOriginY = (offsetY / rect.height) * 100 + "%";
    mainImg.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
    mainImg.style.transform = `scale(${scale})`;

    magnifier.style.display = "block";
  };

  const handleMouseLeave = () => {
    const magnifier = document.getElementById("magnifier");
    const mainImg = document.getElementById("mainImg");

    magnifier.style.display = "none";
    mainImg.style.transform = "scale(1)";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cartData = {
      product,
      quantity,
      selectedSize,
      userId: user?.id,
    };
    if (user?.id === product.vendorId) {
      toast.error("You can't add your own product to cart", {
        autoClose: 1500,
      });
      return;
    }
    if (!user) {
      toast.error("You're not logged in!", {
        autoClose: 1500,
      });
      return;
    }
    dispatch(addToCart(cartData));
    toast.success("Added to cart!", {
      autoClose: 1500,
    });
  };

  const handleContract = () => {
    console.log("contract");
  };

  // Ensure product.images is an array
  const productImages = Array.isArray(product?.images) && product?.images.length > 0 ? product.images : [product?.imageURL];

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
              <div className="small-img-grp">
                {productImages.map((imgSrc, index) => (
                  <div className="small-img-col" key={index}>
                    <img
                      src={imgSrc}
                      width="100%"
                      className="small-img"
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => handleSmallImageClick(imgSrc)}
                    />
                  </div>
                ))}
              </div>
              <div
                id="mainImgContainer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={productImages[0] || ""}
                  width="100%"
                  height="auto"
                  id="mainImg"
                  alt="Main Image"
                />
              </div>
              <div id="magnifier"></div>
            </div>
          </div>

          <div className="single-pro-details">
            <h6>{product?.brand ?? "Unknown Brand"}</h6>
            <h4>{product?.name ?? "Unknown Product"}</h4>
            <div>
              <h2>Rs. {product?.price ?? "N/A"}</h2>
              <div className="star">
                {Array.from({ length: product.rating || 0 }, (_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
            </div>
            <form onSubmit={handleFormSubmit}>
              {/* Size selection (commented out for now) */}
              <div className="quantity-wrapper">
                <button type="button" className="quantity-button" onClick={handleDecreaseQuantity}>-</button>
                <input className="quantity" value={quantity} readOnly />
                <button type="button" className="quantity-button" onClick={handleIncreaseQuantity}>+</button>
                <button type="submit" className="normal">Add to Cart</button>
                <button type="button" onClick={handleContract} className="normal">Contract</button>
              </div>
            </form>
            <h4>Product Details</h4>
            <span>
              {product?.description ?? "No description available."}
              <br />
              <strong>Material: </strong> {product?.material ?? "N/A"} <br />
              <strong>Texture: </strong> {product?.texture ?? "N/A"} <br />
              <strong>Color: </strong> {product?.color ?? "N/A"}
            </span>
          </div>
        </section>
        <Youmaylike />
        <Footer />
      </div>
    </>
  );
};

export default ScrapyardSingleProduct;