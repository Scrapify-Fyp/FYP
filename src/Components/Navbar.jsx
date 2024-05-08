// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import NavbarCSS from "./Navbar.module.css";
// import { NavDropdown } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/user/userSlice";

// export default function Navbar() {
//   const user = useSelector(selectUser);
//   console.log("user", user);
//   const [cartCount, setCartCount] = useState(4);
//   const [screensize, setScreensize] = useState(window.innerWidth);
//   const comparison = 900;

//   useEffect(() => {
//     const handleResize = () => {
//       setScreensize(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   const redirectToSearchpage = () => {
//     window.location.to = "/Search";
//   };

//   const ProfileDropdown = () => {
//     return (
//       <NavDropdown id="profile-dropdown">
//         {user && <NavDropdown.Item>{user.firstName}</NavDropdown.Item>}
//         <NavDropdown.Item as={NavLink} to="/Profile">
//           Profile
//         </NavDropdown.Item>
//         <NavDropdown.Item as={NavLink} to="/Settings">
//           Settings
//         </NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item as={NavLink} to="/Logout">
//           Logout
//         </NavDropdown.Item>
//       </NavDropdown>
//     );
//   };

//   return (
//     <>
//       {screensize >= comparison ? (
//         <div className={NavbarCSS.navbar}>
//           <nav className={`navbar-expand-lg navbar-light`}>
//             <Link className="navbar-brand" to="/Home">
//               <h4>
//                 <span className="home-h4">Scrapify</span>
//               </h4>
//             </Link>
//             <div className={NavbarCSS.searchroutes}>
//               <div className={NavbarCSS.navbarsearch}>
//                 <form className="form-inline">
//                   <input
//                     className="form-control mr-sm-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                   />
//                   <NavLink to="/Search">
//                     <button type="submit">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         className="feather feather-search"
//                       >
//                         <circle cx="11" cy="11" r="8"></circle>
//                         <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                       </svg>
//                     </button>
//                   </NavLink>
//                 </form>
//               </div>
//               <div className={NavbarCSS.routes}>
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="/Home">
//                       Home
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/Shops">
//                       Shops
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/Scrapyard">
//                       Scrapyard
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/Digitalassets">
//                       Digital assets
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/Contact_us">
//                       Contact Us
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="navbar-buttons" style={{ display: "flex" }}>
//               <NavLink
//                 to="/Cart"
//                 className="btn btn-outline-secondary m-2"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   className="feather feather-shopping-cart"
//                 >
//                   <circle cx="9" cy="21" r="1"></circle>
//                   <circle cx="20" cy="21" r="1"></circle>
//                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                 </svg>
//               </NavLink>
//               {cartCount > 0 && (
//                 <div className={NavbarCSS.cartCount}>{cartCount}</div>
//               )}

//               <NavLink
//                 // to="/Profile"
//                 className="btn btn-outline-secondary my-2 my-sm-0 ml-2"
//                 // type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="26"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   className="feather feather-user"
//                 >
//                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="12" cy="7" r="4"></circle>
//                 </svg>
//                 <ProfileDropdown />
//               </NavLink>
//             </div>
//           </nav>
//         </div>
//       ) : (
//         <nav className="navbar navbar-expand-lg navbar-light">
//           <Link className="navbar-brand" to="/">
//             <h4>
//               <strong>Scrapify</strong>
//             </h4>
//           </Link>
//           <button
//             to="/Profile"
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse mobile-route-buttons"
//             id="navbarNav"
//           >
//             <div className="search-routes">
//               <div className="navbar-search">
//                 <form className="form-inline">
//                   <input
//                     className="form-control mr-sm-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                   />
//                   <button type="submit">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       className="feather feather-search"
//                     >
//                       <circle cx="11" cy="11" r="8"></circle>
//                       <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                     </svg>
//                   </button>
//                 </form>
//               </div>
//               <div className="routes">
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="/Home">
//                       Home
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="#">
//                       Shops
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="#">
//                       About Us
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/Contact_us">
//                       Contact Us
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="navbar-buttons">
//                 <NavLink
//                   to="/Profile"
//                   className="btn btn-outline-secondary m-2"
//                   type="button"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="28"
//                     height="28"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     className="feather feather-shopping-cart"
//                   >
//                     <circle cx="9" cy="21" r="1"></circle>
//                     <circle cx="20" cy="21" r="1"></circle>
//                     <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//                   </svg>
//                 </NavLink>
//                 <div className="nav-link-container">
//                   {/* <NavLink
//                     // to="/Profile"
//                     className="btn btn-outline-secondary my-2 my-sm-0 ml-2"
//                     type="button"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="28"
//                       height="28"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       className="feather feather-user"
//                     >
//                       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                       <circle cx="12" cy="7" r="4"></circle>
//                     </svg>
//                     <div className="dropdown-container">
//                       <ProfileDropdown />
//                     </div>
//                   </NavLink> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { clearUser, selectUser } from "../redux/user/userSlice";
import NavbarCSS from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const Navbar = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Simulated function to fetch cart count (replace with actual logic)
  const fetchCartCount = () => {
    // Assume this function fetches the cart count from backend
    // For demonstration, setting a static count
    setCartCount(4); // Replace with actual cart count
  };

  useEffect(() => {
    // Fetch cart count on component mount
    fetchCartCount();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleLogout = () => {
    dispatch(clearUser());
    Cookies.remove("token");
    navigate("/");
  };
  const ProfileDropdown = () => (
    <NavDropdown id="profile-dropdown">
      {user && (
        <h6
          style={{ fontSize: "18px", textAlign: "center" }}
        >{`Welcome! ${user.firstName}`}</h6>
      )}
      <NavDropdown.Item as={NavLink} to={user ? "/Profile" : "/Signin"}>
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to={user ? "/Settings" : "/Signin"}>
        Settings
      </NavDropdown.Item>
      <NavDropdown.Divider />
      {user ? (
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
      ) : (
        <NavDropdown.Item as={NavLink} to="/Signin">
          Login
        </NavDropdown.Item>
      )}
    </NavDropdown>
  );

  return (
    <div className={NavbarCSS.navbar}>
      <nav className={`navbar-expand-lg navbar-light`}>
        <NavLink className="navbar-brand" to="/">
          <h4>
            <span className="home-h4">Scrapify</span>
          </h4>
        </NavLink>
        <div className={NavbarCSS.searchroutes}>
          <div className={NavbarCSS.navbarsearch}>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <NavLink to="/Search">
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </NavLink>
            </form>
          </div>
          <div className={NavbarCSS.routes}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Shops">
                  Shops
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Scrapyard">
                  Scrapyard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Digitalassets">
                  Digital assets
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact_us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-buttons" style={{ display: "flex" }}>
          <NavLink to="/Cart" className=" btn btn-outline-secondary m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </NavLink>
          {cartCount > 0 && (
            <div className={NavbarCSS.cartCount}>{cartCount}</div>
          )}

          {
            <NavLink
              to={user ? "/Profile" : "/Signin"}
              className="btn btn-outline-secondary my-2 my-sm-0 ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              {screenWidth >= 900 && <ProfileDropdown />}
            </NavLink>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
