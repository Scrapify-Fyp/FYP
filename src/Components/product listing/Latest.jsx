// import React, { useEffect, useState } from "react";
// import "./productlisting.css";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import img1 from "../../img/prod-10.jpg";
// import img2 from "../../img/prod-13.jpg";
// import img3 from "../../img/prod-6.jpg";
// import img4 from "../../img/prod-12.jpg";
// import img5 from "../../img/prod-9.jpg";
// import img6 from "../../img/prod-8.jpg";
// import img7 from "../../img/prod-1.jpg";
// import img8 from "../../img/prod-5.jpg";
// import axios from "axios";

// const Latest = () => {
//   const [latestProducts, setLatestProducts] = useState([]);
//   const navigate = useNavigate();

//   const redirectToProductDetail = () => {
//     navigate("/ProductDetail");
//   };
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3002/products");
//       console.log("🚀 ~ fetchData ~ response:", response);
//       setLatestProducts(response.data);
//     } catch (error) {
//       console.log("🚀 ~ fetchData ~ error:", error);
//     }
//   };

//   useEffect(() => {
//     console.log("Component mounted, scrolling to top...");
//     window.scrollTo(0, 0);
//     fetchData();
//   }, []);

//   return (
//     <section id="product1" className="section-p1">
//       <h1>Latest Products</h1>
//       <div className="pro-container">
//         {/* Map over products and render each product */}
//         {latestProducts.map((product) => (
//           <div className="pro" key={product._id}>
//             <img
//               onClick={redirectToProductDetail}
//               src={product.imageURL}
//               alt=""
//             />
//             <div onClick={redirectToProductDetail} className="des">
//               <span>{product.brand}</span>
//               <h5>{product.name}</h5>
//               <div className="star">
//                 {/* Render star icons based on rating */}
//                 {Array.from({ length: product.rating }, (_, index) => (
//                   <FontAwesomeIcon key={index} icon={faStar} />
//                 ))}
//               </div>
//               <h4>${product.price}</h4>
//             </div>
//             <div className="cart">
//               {/* Placeholder for adding functionality to add to cart */}
//               <a href="#">
//                 <FontAwesomeIcon icon={faCartPlus} />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Latest;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Latest = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4); // Number of products to display initially
  const navigate = useNavigate();

  const redirectToProductDetail = () => {
    navigate("/ProductDetail");
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/products");
      console.log("Response:", response.data);
      setLatestProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    console.log("Component mounted, fetching data...");
    fetchData();
  }, []);

  const handleViewAll = () => {
    navigate("/AllProducts"); 
  };

  return (
    <section id="product1" className="section-p1">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>Latest Products</h1>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            border: "1px solid #007bff",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer"
          }}
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>
      <div className="pro-container">
        {/* Map over visible products and render each product */}
        {latestProducts.slice(0, visibleProducts).map((product) => (
          <div className="pro" key={product._id}>
            <img
              onClick={redirectToProductDetail}
              src={product.imageURL}
              alt=""
              style={{ cursor: "pointer" }}
            />
            <div onClick={redirectToProductDetail} className="des" style={{ cursor: "pointer" }}>
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
            <div className="cart">
              {/* Placeholder for adding functionality to add to cart */}
              <a href="#" style={{ color: "#007bff" }}>
                <FontAwesomeIcon icon={faCartPlus} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;
