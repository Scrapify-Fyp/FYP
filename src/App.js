// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Signin from "./pages/Signin";
// import Signup from "./pages/signup";
// import Profile from "./pages/Profile";
// import Analytics from "./pages/Analytics";
// import Edit_profile from "./Components/Edit_profile";
// import Myshope from "./pages/Myshope";
// import Order_history from "./pages/Order_history";
// import Settings from "./pages/Settings";
// import Wallet from "./pages/Wallet";
// import Contact_us from "./pages/Contact_us";
// import Cart from "./pages/Cart";
// import HeroSection from "./Components/HeroSection";
// import Home from "./pages/Home";
// import Footer from "./Components/Footer";
// import Shops from "./pages/Shops";
// import SingleProductDetailPage from "./pages/SingleProductDetailPage";
// import Search from "./pages/Search";
// import Scrapyard from "./pages/Scrapyard";
// import Digitalassets from "./pages/Digitalassets";
// import Privacysecurity from "./Components/Privacysecurity";
// import Privacynpolices from "./Components/Privacynpolices";
// import Changepassword from "./Components/Changepassword";
// import Helpnsupport from "./Components/Helpnsupport";
// import Singleshope from "./pages/Singleshope";
// import { useSelector } from "react-redux";
// import { selectUser } from "./redux/user/userSlice";
// function App() {
//   const user = useSelector(selectUser);
//   const PrivateRoute = ({ path, element }) => {
//     const user = useSelector(selectUser);

//     // Check if user is authenticated
//     const isAuthenticated = !!user;

//     return isAuthenticated ? (
//       <Route path={path} element={element} />
//     ) : (
//       <Navigate to="/" replace />
//     );
//   };
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/Signin" element={<Signin />} />
//           <PrivateRoute
//             path={user ? "/Profile" : "/"}
//             element={user ? <Profile /> : <Home />}
//           />
//           <Route path="/Analytics" element={<Analytics />} />
//           <Route path="/Edit_profile" element={<Edit_profile />} />
//           <Route path="/Order_history" element={<Order_history />} />
//           <Route path="/Settings" element={<Settings />} />
//           <Route path="/Wallet" element={<Wallet />} />
//           <Route path="/Myshope" element={<Myshope />} />
//           <Route path="/Contact_us" element={<Contact_us />} />
//           <Route path="/Cart" element={<Cart />} />
//           <Route path="/HeroSection" element={<HeroSection />} />
//           <Route path="/Footer" element={<Footer />} />
//           <Route path="/Shops" element={<Shops />} />
//           <Route path="/ProductDetail" element={<SingleProductDetailPage />} />
//           <Route path="/Search" element={<Search />} />
//           <Route path="/Digitalassets" element={<Digitalassets />} />
//           <Route path="/Scrapyard" element={<Scrapyard />} />
//           <Route path="/Privacysecurity" element={<Privacysecurity />} />
//           <Route path="/Privacynpolices" element={<Privacynpolices />} />
//           <Route path="/Changepassword" element={<Changepassword />} />
//           <Route path="/Helpnsupport" element={<Helpnsupport />} />
//           <Route path="/Singleshope" element={<Singleshope />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import Edit_profile from "./Components/Edit_profile";
import Myshope from "./pages/Myshope";
import Order_history from "./pages/Order_history";
import Settings from "./pages/Settings";
import Wallet from "./pages/Wallet";
import Contact_us from "./pages/Contact_us";
import Cart from "./pages/Cart";
import HeroSection from "./Components/HeroSection";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Shops from "./pages/Shops";
import SingleProductDetailPage from "./pages/SingleProductDetailPage";
import Search from "./pages/Search";
import Scrapyard from "./pages/Scrapyard";
import Digitalassets from "./pages/Digitalassets";
import Privacysecurity from "./Components/Privacysecurity";
import Privacynpolices from "./Components/Privacynpolices";
import Changepassword from "./Components/Changepassword";
import Helpnsupport from "./Components/Helpnsupport";
import Singleshope from "./pages/Singleshope";
import { useSelector } from "react-redux";
import { selectUser, setUser } from "./redux/user/userSlice";
import { auth } from "./hooks/auth";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./Components/authMiddlware/ProtectedRoute";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = () => {
      try {
        const user = auth();
        dispatch(setUser(user));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();

    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        {/* Use PrivateRoute to protect Profile route */}

        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Edit_profile" element={<Edit_profile />} />
        <Route path="/Order_history" element={<Order_history />} />
        <Route
          path="/Settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/Myshope" element={<Myshope />} />
        <Route path="/Contact_us" element={<Contact_us />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Shops" element={<Shops />} />
        <Route path="/ProductDetail" element={<SingleProductDetailPage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Digitalassets" element={<Digitalassets />} />
        <Route path="/Scrapyard" element={<Scrapyard />} />
        <Route path="/Privacysecurity" element={<Privacysecurity />} />
        <Route path="/Privacynpolices" element={<Privacynpolices />} />
        <Route path="/Changepassword" element={<Changepassword />} />
        <Route path="/Helpnsupport" element={<Helpnsupport />} />
        <Route path="/Singleshope" element={<Singleshope />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
