// import React, { useEffect } from "react";
// import "./productlisting.css";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
// import img1 from "../../img/prod-10.jpg";
// import img2 from "../../img/prod-13.jpg";
// import img3 from "../../img/prod-6.jpg";
// import img4 from "../../img/prod-12.jpg";
// import img5 from "../../img/prod-9.jpg";
// import img6 from "../../img/prod-8.jpg";
// import img7 from "../../img/prod-1.jpg";
// import img8 from "../../img/prod-5.jpg";
// const latestproducts = [
//   {
//     id: 1,
//     imgSrc: img1,
//     brand: "Khaadi",
//     name: "Basic Winter Clothes",
//     rating: 4,
//     price: 50,
//   },
//   {
//     id: 2,
//     imgSrc: img2,
//     brand: "Handicrafts",
//     name: "Pure Craft Hand Bag",
//     rating: 5,
//     price: 20,
//   },
//   {
//     id: 3,
//     imgSrc: img3,
//     brand: "Wall Hangings",
//     name: "Eye Mandala Set",
//     rating: 4,
//     price: 60,
//   },
//   {
//     id: 4,
//     imgSrc: img4,
//     brand: "ROLEX",
//     name: "Luxury Men Watch",
//     rating: 5,
//     price: 435,
//   },
//   {
//     id: 5,
//     imgSrc: img5,
//     brand: "Embroided",
//     name: "Coral Block Silver Print - Coat",
//     rating: 4,
//     price: 66.76,
//   },
//   {
//     id: 6,
//     imgSrc: img6,
//     brand: "Candle Holders",
//     name: "Candle Holder Candlestick",
//     rating: 4.5,
//     price: 134,
//   },
//   {
//     id: 7,
//     imgSrc: img7,
//     brand: "Tealight Candle Holders",
//     name: "Decorative Light Glass",
//     rating: 4,
//     price: 140,
//   },
//   {
//     id: 8,
//     imgSrc: img8,
//     brand: "Handicrafts",
//     name: "Crystal Handicrafted Royal Cart",
//     rating: 5,
//     price: 1330,
//   },
// ];
// export default function Latest() {
//   const navigate = useNavigate();

//   const redirectToProductDetail = () => {
//     // window.location.href = '/ProductDetail';
//     navigate("/ProductDetail");
//   };

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   },[]);

//   return (
//     <>
//       <section id="product1" className="section-p1">
//         <h1>Latest Products</h1>
//         <div className="pro-container">
//           {/* Map over products and render each product */}
//           {latestproducts.map((product) => (
//             <div className="pro" key={product.id}>
//               <img
//                 onClick={redirectToProductDetail}
//                 src={product.imgSrc}
//                 alt=""
//               />
//               <div onClick={redirectToProductDetail} className="des">
//                 <span>{product.brand}</span>
//                 <h5>{product.name}</h5>
//                 <div className="star">
//                   {/* Render star icons based on rating */}
//                   {Array.from({ length: product.rating }, (_, index) => (
//                     <FontAwesomeIcon key={index} icon={faStar} />
//                   ))}
//                 </div>
//                 <h4>${product.price}</h4>
//               </div>
//               <div className="cart">
//                 <a href="#">
//                   <FontAwesomeIcon icon={faCartPlus} />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useEffect } from "react";
import "./productlisting.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../img/prod-10.jpg";
import img2 from "../../img/prod-13.jpg";
import img3 from "../../img/prod-6.jpg";
import img4 from "../../img/prod-12.jpg";
import img5 from "../../img/prod-9.jpg";
import img6 from "../../img/prod-8.jpg";
import img7 from "../../img/prod-1.jpg";
import img8 from "../../img/prod-5.jpg";

const latestProducts = [
  {
    id: 1,
    imgSrc: img1,
    brand: "Khaadi",
    name: "Basic Winter Clothes",
    rating: 4,
    price: 50,
  },
  {
    id: 2,
    imgSrc: img2,
    brand: "Handicrafts",
    name: "Pure Craft Hand Bag",
    rating: 5,
    price: 20,
  },
  {
    id: 3,
    imgSrc: img3,
    brand: "Wall Hangings",
    name: "Eye Mandala Set",
    rating: 4,
    price: 60,
  },
  {
    id: 4,
    imgSrc: img4,
    brand: "ROLEX",
    name: "Luxury Men Watch",
    rating: 5,
    price: 435,
  },
  {
    id: 5,
    imgSrc: img5,
    brand: "Embroided",
    name: "Coral Block Silver Print - Coat",
    rating: 4,
    price: 66.76,
  },
  {
    id: 6,
    imgSrc: img6,
    brand: "Candle Holders",
    name: "Candle Holder Candlestick",
    rating: 4.5,
    price: 134,
  },
  {
    id: 7,
    imgSrc: img7,
    brand: "Tealight Candle Holders",
    name: "Decorative Light Glass",
    rating: 4,
    price: 140,
  },
  {
    id: 8,
    imgSrc: img8,
    brand: "Handicrafts",
    name: "Crystal Handicrafted Royal Cart",
    rating: 5,
    price: 1330,
  },
];

const Latest = () => {
  const navigate = useNavigate();

  const redirectToProductDetail = () => {
    navigate("/ProductDetail");
  };

  useEffect(() => {
    console.log("Component mounted, scrolling to top...");
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="product1" className="section-p1">
      <h1>Latest Products</h1>
      <div className="pro-container">
        {/* Map over products and render each product */}
        {latestProducts.map((product) => (
          <div className="pro" key={product.id}>
            <img
              onClick={redirectToProductDetail}
              src={product.imgSrc}
              alt=""
            />
            <div onClick={redirectToProductDetail} className="des">
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
              <a href="#">
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
