import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faShare, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ShareDialog from "./ShareDialogue"; // Ensure this import is correct
import "./productlisting.css";

const Latest = ({ products }) => {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [selectedProductUrl, setSelectedProductUrl] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const navigate = useNavigate();

  const redirectToProductDetail = (product) => {
    navigate("/ProductDetail", { state: { product } });
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };

  const openShareDialog = (product) => {
    setSelectedProductId(product._id);
    setSelectedProductUrl(window.location.href); // This can be customized if needed
    setIsShareDialogOpen(true);
  };

  const closeShareDialog = () => {
    setIsShareDialogOpen(false);
  };

  return (
    <section id="product1" className="section-p1">
      <div className="pro-container">
        {products.slice(0, visibleProducts).map((product) => (
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
              <h4 style={{ color: "#088178", fontFamily: "sans-serif" }}>${product.price}</h4>
              <div className="LATESTcart">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShare} onClick={() => openShareDialog(product)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length > visibleProducts && (
        <div>
          <button className="load-more" onClick={loadMoreProducts}>
            Load More
          </button>
        </div>
      )}

      {/* Share Dialog */}
      {isShareDialogOpen && (
        <ShareDialog
          isOpen={isShareDialogOpen}
          onRequestClose={closeShareDialog}
          productUrl={selectedProductUrl}
          productId={selectedProductId}
        />
      )}
    </section>
  );
};

export default Latest;
