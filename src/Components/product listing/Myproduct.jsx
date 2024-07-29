import React, { useEffect, useState } from "react";
import "./productlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../../hooks/auth";

export default function Myproduct({ onEditClick }) {
  const [Foryouproducts, setForyouproducts] = useState([]);
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState(12);

  const user = auth();

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };

  const redirectToProductDetail = (product) => {

    navigate("/ProductDetail", { state: {product} });

  };

  const handleRemoveItem = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/products/${id}`,
        {
          data: { vendorId: user._id },
        }
      );
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/${user._id}/shop/products`
      );
      setForyouproducts(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [onEditClick]);

  return (
    <>
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {Foryouproducts?.slice(0, visibleProducts).map((product, index) => (
            <div className="pro" key={index}>
              <img
                onClick={() => redirectToProductDetail(product)}
                src={product?.imageURL}
                alt={`Product Img Not Available`}
              />
              <div
                onClick={() => redirectToProductDetail(product)}
                className="des"
              >
                <span>{product?.brand}</span>
                <h5>{product?.name}</h5>
                <div className="star">
                  {Array?.from({ length: product?.rating }, (_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  ))}
                </div>
                <h4>${product?.price}</h4>
              </div>
              <div className="cart" style={{right:"60px"}}>              
              <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => onEditClick(product)} // Pass the product to be edited
                />
              </div>
              <div className="cart">              
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleRemoveItem(product?._id)}
                />
              </div>
              
            </div>
          ))}
        </div>
        {Foryouproducts.length > visibleProducts && (
          <div>
            <button className="load-more" onClick={loadMoreProducts}>
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
}
