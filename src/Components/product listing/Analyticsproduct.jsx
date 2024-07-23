// import React, { useEffect, useState } from "react";
// import "./productlisting.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import { auth } from "../../hooks/auth";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export default function AnalyticsProduct() {
//   const user = auth();
//   const navigate = useNavigate();
//   const [visibleProducts, setVisibleProducts] = useState(12);
//   const [products, setProducts] = useState([]);
//   const [isShop, setIsShop] = useState();

//   const loadMoreProducts = () => {
//     setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12); // Increase visible products by 12
//   };

//   const redirectToProductDetail = () => {
//     navigate("/Analytics");
//   };

//   useEffect(() => {
//     const fetchUserShop = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3002/user/${user._id}/shop/products`
//         );
//         console.log("🚀 ~ fetchUserShop ~ response:", response);

//         if (response) {
//           setProducts(response.data);
//           setIsShop(true);
//         } else {
//           setIsShop(false);
//           toast.error("Shop or product not found!");

//           return;
//         }
//       } catch (error) {
//         console.error("Error fetching user's shop:", error);
//         toast.error("Error fetching shop. Please try again later.");
//       }
//     };

//     if (user._id) {
//       fetchUserShop();
//     }
//   }, [user._id]);

//   const getPredictions = () => {

//   };

//   return (
//     <>
//       <section id="product1" className="section-p1">
//         <h1>{isShop ? "Select Product" : "Shop or product not found!"}</h1>
//         <div className="pro-container">
//           {/* Map over products and render each product */}
//           {products.map((product) => (
//             <div className="pro" key={product._id} onClick={getPredictions}>
//               <img
//                 onClick={redirectToProductDetail}
//                 src={product.imgSrc}
//                 alt={`Product ${product.id}`}
//               />
//               <div onClick={redirectToProductDetail} className="des">
//                 <span>{product.brand}</span>
//                 <h5>{product.name}</h5>
//                 <div className="star"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {products.length > visibleProducts && (
//           <div>
//             <button className="load-more" onClick={loadMoreProducts}>
//               Load More
//             </button>
//           </div>
//         )}
//       </section>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import "./productlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../hooks/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AnalyticsProduct(props) {
  const user = auth();
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [products, setProducts] = useState([]);
  const [isShop, setIsShop] = useState(false);
  const [prediction, setPrediction] = useState(null); // Use null for better handling

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };

  const redirectToProductDetail = () => {
    navigate("/Analytics");
  };

  useEffect(() => {
    const fetchUserShop = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/user/${user._id}/shop/products`
        );
        console.log("🚀 ~ fetchUserShop ~ response:", response);

        if (response.data.length > 0) {
          setProducts(response.data);
          setIsShop(true);
        } else {
          setIsShop(false);
          toast.error("Shop or product not found!");
        }
      } catch (error) {
        console.error("Error fetching user's shop:", error);
        toast.error("Error fetching shop. Please try again later.");
      }
    };

    if (user._id) {
      fetchUserShop();
    }
  }, [user._id]);

  const getPredictions = async (product) => {
    const shares = 10;
    const time_on_page = 4;
    const inputData = {
      input: [
        product.review.impressions,
        product.review.clicks,
        product.review.likes,
        shares,
        product.review.comments.length,
        product.review.favorites,
        product.rating,
        time_on_page,
      ],
    };
    console.log("🚀 ~ getPredictions ~ inputData:", inputData);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        inputData
      );
      setPrediction(response.data.prediction);
      console.log("Prediction:", response.data.prediction);
      console.log("predictions Producst: " , products , " single" , product);

      // Only show alert after prediction is set
    //   if (response.data.prediction) {
    //     alert("Based on the given product, the price should Decrease!");
    //   } else {
    //     alert("Based on the given product, the price should Increase!");
    //   }

      // Update parent component with new data

      props.setAnalyticsData({
        product: product,
        prediction: response.data.prediction,
      });
      props.onHide();
    } catch (error) {
      console.error("Error getting prediction:", error);
      toast.error("Error getting prediction. Please try again later.");
    }
  };

  return (
    <>
      <section id="product1" className="section-p1">
        <h1>{isShop ? "Select Product" : "Shop or product not found!"}</h1>
        <div className="pro-container">
          {products.slice(0, visibleProducts).map((product) => (
            <div className="pro" key={product._id}>
              <img
                onClick={() => getPredictions(product)}
                src={product.imgSrc}
                alt={`Product ${product.id}`}
              />
              <div onClick={() => getPredictions(product)} className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star"></div>
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
      </section>
    </>
  );
}
