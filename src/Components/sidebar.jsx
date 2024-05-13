// import React, { useEffect } from "react";
// import "./sidebar.css";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import imge1 from "../img/edit.png";
// import Navbar from "./Navbar";
// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/user/userSlice";
// import axios from "axios";
// import { auth } from "../hooks/auth";

// export default function Sidebar(props) {
//   // const user = useSelector(selectUser);
//   const user = auth();

//   const [userData, setUserData] = useState();
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [description, setDescription] = useState("");
//   const [isEditing, setEditing] = useState(false);
//   const maxCharacterLimit = 40;
//   const toggleSidebar = () => {
//     setSidebarCollapsed(!sidebarCollapsed);
//   };
//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };
//   const handleEditClick = () => {
//     setEditing(true);
//   };

//   const handleSaveClick = () => {
//     setEditing(false);
//   };
//   const isDescriptionEmpty = description.trim() === "";

//   const fetchData = () => {
//     axios
//       .get(`http://localhost:3002/users/${user.id}`)
//       .then((response) => {
//         const userDataFromDb = response.data;
//         const { firstName, lastName, email, phone, address, bio, imageUrl } =
//           userDataFromDb;
//         setUserData({
//           firstName,
//           lastName,
//           email,
//           phone,
//           address,
//           bio,
//           imageUrl,
//           imageFile: null,
//         });
//         setDescription(userData.bio);
//         // setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//         // setLoading(false);
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
//               <div class=" mb-4">
//                 <div class="text-center">
//                   <img
//                     src={
//                       userData
//                         ? userData.imageUrl
//                         : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
//                     }
//                     alt="avatar"
//                     class="rounded-circle img-fluid"
//                     style={{ width: "110px" }}
//                   />
//                   <h6 style={{ fontSize: "18px" }} class="my-3">
//                     {user?.firstName.toUpperCase()}
//                   </h6>
//                   {userData && isEditing ? (
//                     <div className="description-edit">
//                       <textarea
//                         className="description-textarea"
//                         placeholder="Description (0-20)"
//                         value={description}
//                         onChange={handleDescriptionChange}
//                         maxLength={maxCharacterLimit}
//                       ></textarea>
//                       <button className="save-button" onClick={handleSaveClick}>
//                         Save
//                       </button>
//                     </div>
//                   ) : isDescriptionEmpty ? (
//                     <div className="add-description">
//                       <button
//                         className="add-description-button"
//                         onClick={handleEditClick}
//                       >
//                         Add Description{" "}
//                         <img className="des-img" src={imge1} alt="" />
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="description-display">
//                       <div className="description-lines">
//                         {truncateText(description, 2)}
//                       </div>
//                       <button className="edit-button" onClick={handleEditClick}>
//                         Edit <img className="des-img" src={imge1} alt="" />
//                       </button>
//                     </div>
//                   )}

//                   <div class="d-flex justify-content-center mb-2"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="">
//               <div className="list-group list-group-flush mx-3 mt-4">
//                 <NavLink
//                   to="/Profile"
//                   className={` text-center list-group-item list-group-item-action py-2 ripple`}
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
import { faBars } from "@fortawesome/free-solid-svg-icons";
import imge1 from "../img/edit.png";
import Navbar from "./Navbar";
import { auth } from "../hooks/auth";
import axios from "axios";
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
      .get(`http://localhost:3002/users/${user.id}`)
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
      <div className="container">
        <header>
          <nav
            id="sidebarMenu"
            className={`collapse d-lg-block sidebar collapse bg-white ${
              sidebarCollapsed ? "show" : ""
            }`}
          >
            <div className="profile-dp">
              <div className="mb-4">
                <div className="text-center">
                  <img
                  style={{width:"150px",height:"150px"}}
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
            </div>
            <div className="">
              <div className="list-group list-group-flush mx-3 mt-4">
                <NavLink
                  to="/Profile"
                  className={`text-center list-group-item list-group-item-action py-2 ripple`}
                >
                  <span>Profile</span>
                </NavLink>
                <NavLink
                  to="/Analytics"
                  className="text-center list-group-item list-group-item-action py-2 ripple"
                >
                  <span>Analytics</span>
                </NavLink>
                <NavLink
                  to="/Myshope"
                  className="text-center list-group-item list-group-item-action py-2 ripple"
                >
                  <span>My Shop</span>
                </NavLink>
                <NavLink
                  to="/Order_history"
                  className="text-center list-group-item list-group-item-action py-2 ripple"
                >
                  <span>Order History</span>
                </NavLink>
                <NavLink
                  to="/Wallet"
                  className="text-center list-group-item list-group-item-action py-2 ripple"
                >
                  <span>Payments</span>
                </NavLink>
                <NavLink
                  to="/Settings"
                  className={` ${props.activeprofile} text-center list-group-item list-group-item-action py-2 ripple`}
                >
                  <span>Settings</span>
                </NavLink>
              </div>
            </div>
          </nav>

          <nav id="" className="navbar navbar-expand-lg navbar-light toglr">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleSidebar}
                aria-controls="sidebarMenu"
                aria-expanded={sidebarCollapsed ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <i>
                  <FontAwesomeIcon icon={faBars} />
                </i>
              </button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
