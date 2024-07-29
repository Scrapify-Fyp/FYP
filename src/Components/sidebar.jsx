// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import imge1 from "../img/edit.png";
// import Navbar from "./Navbar";
// import { auth } from "../hooks/auth";
// import axios from "axios";
// import "./sidebar.css";

// export default function Sidebar(props) {
//   const user = auth();
//   // console.log("🚀 ~ Sidebar ~ user:", user)
  
//   const [userData, setUserData] = useState(null);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarCollapsed(!sidebarCollapsed);
//   };

//   const fetchData = () => {
//     axios
//       .get(`http://localhost:3002/users/${user?._id}`)
//       .then((response) => {
//         const userDataFromDb = response.data;
//         setUserData(userDataFromDb);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <header>
//           <nav
//             id="sidebarMenu"
//             className={`collapse d-lg-block sidebar collapse bg-white ${
//               sidebarCollapsed ? "show" : ""
//             }`}
//           >
//             <div className="profile-dp">
//               <div className="mb-4">
//                 <div className="text-center">
//                   <img
//                   style={{width:"150px",height:"150px"}}
//                     src={
//                       userData?.imageUrl ||
//                       "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
//                     }
//                     alt="avatar"
//                     className="rounded-circle img-fluid"
//                   />
//                   <h6 style={{ fontSize: "18px" }} className="my-3">
//                     {user?.firstName.toUpperCase()}
//                   </h6>
//                 </div>
//               </div>
//             </div>
//             <div className="">
//               <div className="list-group list-group-flush mx-3 mt-4">
//                 <NavLink
//                   to="/Profile"
//                   className={`text-center list-group-item list-group-item-action py-2 ripple`}
//                 >
//                   <span>Profile</span>
//                 </NavLink>
//                 <NavLink
//                   to="/Analytics"
//                   className="text-center list-group-item list-group-item-action py-2 ripple"
//                 >
//                   <span>Analytics</span>
//                 </NavLink>
//                 <NavLink
//                   to="/Myshope"
//                   className="text-center list-group-item list-group-item-action py-2 ripple"
//                 >
//                   <span>My Shop</span>
//                 </NavLink>
//                 <NavLink
//                   to="/Order_history"
//                   className="text-center list-group-item list-group-item-action py-2 ripple"
//                 >
//                   <span>Order History</span>
//                 </NavLink>
//                 <NavLink
//                   to="/Wallet"
//                   className="text-center list-group-item list-group-item-action py-2 ripple"
//                 >
//                   <span>Payments</span>
//                 </NavLink>
//                 <NavLink
//                   to="/Settings"
//                   className={` ${props.activeprofile} text-center list-group-item list-group-item-action py-2 ripple`}
//                 >
//                   <span>Settings</span>
//                 </NavLink>
//               </div>
//             </div>
//           </nav>

//           <nav id="" className="navbar navbar-expand-lg navbar-light toglr">
//             <div className="container-fluid">
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 onClick={toggleSidebar}
//                 aria-controls="sidebarMenu"
//                 aria-expanded={sidebarCollapsed ? "true" : "false"}
//                 aria-label="Toggle navigation"
//               >
//                 <i>
//                   <FontAwesomeIcon icon={faBars} />
//                 </i>
//               </button>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }








import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartLine, faStore, faHistory, faWallet, faCog } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Navbar from "./Navbar";
import { auth } from "../hooks/auth";
import "./sidebar.css";

export default function Sidebar(props) {
  const user = auth();
  const [userData, setUserData] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const fetchData = () => {
    axios
      .get(`http://localhost:3002/users/${user?._id}`)
      .then((response) => {
        const userDataFromDb = response.data;
        setUserData(userDataFromDb);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <header>
          <nav id="sidebarMenu" className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
            <div className="profile-dp text-center">
              <div className="mb-4">
                <img
                  style={{ width: "150px", height: "150px" }}
                  src={
                    userData?.imageUrl ||
                    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  }
                  alt="avatar"
                  className="rounded-circle img-fluid"
                />
                <h6 style={{ fontSize: "18px" }} className="my-3">
                  {user?.firstName.toUpperCase()}
                </h6>
              </div>
            </div>
            <div className="list-group list-group-flush mx-3 mt-4">
              <NavLink to="/Profile" className="text-center list-group-item list-group-item-action py-2 ripple">
                <FontAwesomeIcon icon={faUser} className="side-icon" />
                <span className="icon-label">Profile</span>
              </NavLink>
              <NavLink to="/Analytics" className="text-center list-group-item list-group-item-action py-2 ripple">
                <FontAwesomeIcon icon={faChartLine} className="side-icon" />
                <span className="icon-label">Analytics</span>
              </NavLink>
              <NavLink to="/Myshope" className="text-center list-group-item list-group-item-action py-2 ripple">
                <FontAwesomeIcon icon={faStore} className="side-icon" />
                <span className="icon-label">My Shop</span>
              </NavLink>
              <NavLink to="/Order_history" className="text-center list-group-item list-group-item-action py-2 ripple">
                <FontAwesomeIcon icon={faHistory} className="side-icon" />
                <span className="icon-label">Order History</span>
              </NavLink>
              <NavLink to="/Wallet" className="text-center list-group-item list-group-item-action py-2 ripple">
                <FontAwesomeIcon icon={faWallet} className="side-icon" />
                <span className="icon-label">Payments</span>
              </NavLink>
              <NavLink to="/Settings" className={`${props.activeprofile} text-center list-group-item list-group-item-action py-2 ripple`}>
                <FontAwesomeIcon icon={faCog} className="side-icon" />
                <span className="icon-label">Settings</span>
              </NavLink>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
