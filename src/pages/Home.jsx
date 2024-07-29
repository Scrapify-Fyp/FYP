// import React, { useEffect } from "react";
// import Navbar from "../Components/Navbar";
// import HeroSection from "../Components/HeroSection";
// import Footer from "../Components/Footer";
// import Latest from "../Components/product listing/Latest";
// import Trending from "../Components/product listing/Trending";
// import Foryou from "../Components/product listing/Foryou";
// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/user/userSlice";

// export default function Home() {
  
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
//   return (
//     <>
//       <div
//         className="Main_Container container-fluid"
//         style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}
//       >
//         <Navbar />

//         <HeroSection />

//         <Latest />

//         <Trending />

//         <Foryou />

//         <Footer />
//       </div>
//     </>
//   );
// }



import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import Latest from "../Components/product listing/Latest";
import Trending from "../Components/product listing/Trending";
import Foryou from "../Components/product listing/Foryou";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import "../pages/home.module.css";

export default function Home() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <>
      <div className="Main_Container container-fluid">
        <Navbar />
        <HeroSection />
        <Latest />
        <Trending />
        <Foryou />
        <Footer />
      </div>
    </>
  );
}
