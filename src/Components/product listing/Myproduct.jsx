import React, { useEffect, useState } from "react";
import "./productlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartPlus,
  faDeleteLeft,
  faRemove,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import img1 from "../../img/prod-10.jpg";
import img2 from "../../img/prod-13.jpg";
import img3 from "../../img/prod-6.jpg";
import img4 from "../../img/prod-12.jpg";
import img5 from "../../img/prod-9.jpg";
import img6 from "../../img/prod-8.jpg";
import img7 from "../../img/prod-1.jpg";
import img8 from "../../img/prod-5.jpg";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSlice";
import { auth } from "../../hooks/auth";

export default function Myproduct({ refresh }) {
  const [Foryouproducts, setForyouproducts] = useState([]);
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState(12);

  const user = auth();
  //   console.log("🚀 ~ Myproduct ~ user:", user.id);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };
  const redirectToProductDetail = (Singleproduct) => {
    // navigate("/ProductDetail");
    // console.log("SingleProduct", Singleproduct);
    navigate("/ProductDetail", { state: Singleproduct });
  };

  const handleRemoveItem = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmed) {
      return;
    }

    console.log("🚀 ~ handleRemoveItem ~ id:", id);
    try {
      const response = await axios.delete(
        `http://localhost:3002/products/${id}`,
        {
          data: { vendorId: user._id },
        }
      );

      console.log("Item deleted successfully:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3002/user/${user._id}/shop/products`
      );
      // console.log("Response:", res.data);
      setForyouproducts(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [refresh]);
  return (
    <>
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {Foryouproducts?.slice(0, visibleProducts).map((product, index) => (
            <div className="pro" key={index}>
              <img
                // onClick={redirectToProductDetail}
                onClick={() => {
                  // {console.log("SingleProductMap" , product)}

                  redirectToProductDetail(product);
                }}
                src={product?.imageURL}
                alt={`Product Img Not Available`}
              />
              <div
                onClick={() => {
                  // {console.log("SingleProductMap" , product)}

                  redirectToProductDetail(product);
                }}
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
              <div className="cart">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => {
                    handleRemoveItem(product?._id);
                  }}
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
