import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, selectUser } from "../redux/user/userSlice";
import NavbarCSS from "./Navbar.module.css";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import axios from "axios";
import { auth } from "../hooks/auth";
import { emptyCart, selectCartItems } from "../redux/cart/cartSlice";

const Navbar = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsSize = cartItems.length;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = auth();
  const [cartCount, setCartCount] = useState(cartItems.length);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screensize, setScreensize] = useState(window.innerWidth);
  const comparison = 900;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  useEffect(() => {
    fetchCartCount();
    const handleResize = () => {
      setScreensize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cartItemsSize]);

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (user && user.id) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/users/${user.id}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user]);

  const fetchCartCount = () => {
    setCartCount(cartItemsSize);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(emptyCart());
    Cookies.remove("token");
    navigate("/");
    toast.success("Logged out successfully!", {
      autoClose: 1000,
    });
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
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
      <NavDropdown.Item as={NavLink} to={user ? "/Myshope" : "/Signin"}>
        MyShop
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
    <>
      {screensize >= comparison ? (
        <div className={NavbarCSS.navbar}>
          <nav className={`w-100 navbar-expand-lg navbar-light`}>
            <NavLink className="navbar-brand" to="/">
              <h4>
                <span className="home-h4">Scrapify</span>
              </h4>
            </NavLink>
            <div className={NavbarCSS.searchroutes}>
              <div className={NavbarCSS.navbarsearch}>
                <form className="form-inline" onSubmit={handleSearchSubmit}>
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
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
            <div
              className="navbar-buttons"
              style={{ display: "flex", gap: "9px" }}
            >
              <NavLink to="/Cart" className="btn btn-outline-secondary">
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
                  className="feather feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </NavLink>
              {cartCount >= 0 && (
                <div className={NavbarCSS.cartCount}>{cartCount}</div>
              )}
              <NavLink
                to={user ? "/Profile" : "/Signin"}
                className="btn btn-outline-secondary my-2 my-sm-0 ml-2"
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "7px" }}
                >
                  <div>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={
                        userData?.imageUrl ||
                        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      }
                      alt="avatar"
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div style={{ paddingTop: "7px" }}>
                    {screenWidth >= 900 && <ProfileDropdown />}
                  </div>
                </div>
              </NavLink>
            </div>
          </nav>
        </div>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <NavLink className="navbar-brand" to="/">
        <h4>
          <strong>Scrapify</strong>
        </h4>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <div className="d-flex flex-column flex-lg-row align-items-left w-100">
          <form className="form-inline my-2 my-lg-0 mx-lg-auto " onSubmit={handleSearchSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
              </div>
            </div>
          </form>
          
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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
          <div className="navbar-buttons my-2 my-lg-0 d-flex flex-row">
            <NavLink to="/Cart" className="btn btn-outline-secondary mx-2" type="button">
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
            <NavLink to="/Profile" className="btn btn-outline-secondary mx-2" type="button">
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
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
      )}
    </>
  );
};

export default Navbar;
