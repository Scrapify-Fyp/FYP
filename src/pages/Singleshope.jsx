// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { useLocation } from 'react-router-dom';
// import profilecss from "../pages/Profile.module.css";
// import img from "../img/mandp.jpg";
// import axios from 'axios';
// import ShopProducts from '../Components/product listing/ShopProducts';

// export default function Singleshope() {
//   const location = useLocation();
//   const data = location.state;
//   const [shop, setShop] = useState(data);
//   const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   if (shop?.userId) {
//   //     axios.get(`/shop/${shop.userId}/products`)
//   //       .then((response) => {
//   //         setProducts(response.data);
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error fetching products:", error);
//   //       });
//   //   }
//   // }, [shop?.userId]);

//   const extractTimeWithAMPM = (dateString) => {
//     const date = new Date(dateString);
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const ampm = hours >= 12 ? "PM" : "AM";
//     const hour12 = hours % 12 || 12; // Convert to 12-hour format
//     const formattedHours = hour12.toString().padStart(2, "0");
//     const formattedMinutes = minutes.toString().padStart(2, "0");
//     return `${formattedHours}:${formattedMinutes} ${ampm}`;
//   };

//   const start = extractTimeWithAMPM(shop?.openingHours?.start);
//   const end = extractTimeWithAMPM(shop?.openingHours?.end);

//   return (
//     <>
//       <div className="container" style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}>
//         <Navbar />
//         <div className={profilecss.container}>
//           <header className={profilecss.myshopheader}>
//             <div className={profilecss.backgroundpic}></div>
//             <div className={`${profilecss.flex} ${profilecss.itemsCenter}`}>
//               <img
//                 src={shop?.imageUrl ? shop?.imageUrl : img}
//                 alt="Shop Logo"
//                 className={profilecss.dp}
//               />
//               <div className={profilecss.ml2}>
//                 <h1 className={profilecss.textLg}>{shop?.name}</h1>
//                 <p className={profilecss.textSm}>
//                   {shop?.description
//                     ? shop.description
//                     : "Luxe Living brings you a curated collection of sophisticated home decor and furnishings, designed to elevate your living space with timeless elegance and modern flair. From luxurious furniture pieces to exquisite decor accents, our selection is crafted to inspire and transform your home into a sanctuary of style and comfort. Discover the epitome of refined living with Luxe Living."}
//                 </p>
//               </div>
//             </div>
//             <div className={profilecss.description}>
//               <p>
//                 <strong>Address:</strong>{" "}
//                 {shop?.address ? shop.address : "123 Main Street, City, Country"}
//               </p>
//               <p>
//                 <strong>Opening Hours: </strong>{" "}
//                 {shop?.openingHours
//                   ? "Monday - Friday, " + start + " - " + end
//                   : "Monday - Friday, 9:00 AM - 6:00 PM"}
//               </p>
//               <p>
//                 <strong>Email:</strong>{" "}
//                 {shop?.email ? shop.email : "example@example.com"}
//               </p>
//               <p>
//                 <strong>Phone:</strong>{" "}
//                 {shop?.phone ? shop.phone : "123-456-7890"}
//               </p>
//             </div>
//           </header>
//           <div className={profilecss.myproduct}>
//             <ShopProducts/>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }
// Single shop page
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import profilecss from "../pages/Profile.module.css";
import img from "../img/mandp.jpg";
import axios from 'axios';
import ShopProducts from '../Components/product listing/ShopProducts';

export default function Singleshope() {
  const location = useLocation();
  const data = location.state;
  const [shop, setShop] = useState(data);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (shop?.userId) {
      axios.get(`http://localhost:3002/user/${shop.userId}/shop/products`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [shop?.userId]);

  const extractTimeWithAMPM = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12; // Convert to 12-hour format
    const formattedHours = hour12.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const start = extractTimeWithAMPM(shop?.openingHours?.start);
  const end = extractTimeWithAMPM(shop?.openingHours?.end);

  return (
    <>
      <div className="container" style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}>
        <Navbar />
        <div className={profilecss.container}>
          <header className={profilecss.myshopheader}>
            <div className={profilecss.backgroundpic}></div>
            <div className={`${profilecss.flex} ${profilecss.itemsCenter}`}>
              <img
                src={shop?.imageUrl ? shop?.imageUrl : img}
                alt="Shop Logo"
                className={profilecss.dp}
              />
              <div className={profilecss.ml2}>
                <h1 className={profilecss.textLg}>{shop?.name}</h1>
                <p className={profilecss.textSm}>
                  {shop?.description
                    ? shop.description
                    : "Luxe Living brings you a curated collection of sophisticated home decor and furnishings, designed to elevate your living space with timeless elegance and modern flair. From luxurious furniture pieces to exquisite decor accents, our selection is crafted to inspire and transform your home into a sanctuary of style and comfort. Discover the epitome of refined living with Luxe Living."}
                </p>
              </div>
            </div>
            <div className={profilecss.description}>
              <p>
                <strong>Address:</strong>{" "}
                {shop?.address ? shop.address : "123 Main Street, City, Country"}
              </p>
              <p>
                <strong>Opening Hours: </strong>{" "}
                {shop?.openingHours
                  ? "Monday - Friday, " + start + " - " + end
                  : "Monday - Friday, 9:00 AM - 6:00 PM"}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {shop?.email ? shop.email : "example@example.com"}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                {shop?.phone ? shop.phone : "123-456-7890"}
              </p>
            </div>
          </header>
          <div className={profilecss.myproduct}>
            <ShopProducts products={products} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
