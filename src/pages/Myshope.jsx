import React from 'react';
import profilecss from "./Profile.module.css";
import Sidebar from "../Components/sidebar";
import img from "../img/mandp.jpg";
import Shopepage from '../Components/Shopepage';

export default function Myshope() {
  return (
    <>
      <div className={`${profilecss.bgWhite}`}>
        <Sidebar/>
        <main style={{ marginTop: '58px' }}>
          <Shopepage/>
        </main>
      </div>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import profilecss from "./Profile.module.css";
// import Sidebar from "../Components/sidebar";
// import Shopepage from "../Components/Shopepage";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { selectUser } from "../redux/user/userSlice";
// import { auth } from "../hooks/auth";

// export default function Myshope() {
//   const user = auth();
//   const userId = user.id;
//   // console.log("🚀 ~ Myshope ~ userId:", userId)
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserProducts = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3002/products/user/${userId}`
//         );
//         setProducts(response.data);
//         console.log("🚀 ~ fetchUserProducts ~ response.data:", response.data);
//       } catch (error) {
//         console.error("Error fetching user's products:", error);
//         toast.error("Error fetching products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchUserProducts();
//     }
//   }, [userId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className={`${profilecss.bgWhite}`}>
//         <Sidebar />
//         <main style={{ marginTop: "58px" }}>
//           {products.length > 0 ? (
//             <Shopepage products={products} />
//           ) : (
//             <div>
//               <h2>No products found</h2>
//               <p>
//                 You don't have any products. Please create a new shop to start
//                 selling.
//               </p>
//               <button
//                 onClick={() => {
//                   /* Navigate to create shop page */
//                 }}
//               >
//                 Create New Shop
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </>
//   );
// }
