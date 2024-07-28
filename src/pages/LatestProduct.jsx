import React from 'react'
import Navbar from '../Components/Navbar'
import Latest from '../Components/product listing/Latest'
import Footer from '../Components/Footer'
import Trending from '../Components/product listing/Trending';

export default function LatestProduct() {
    const allproducts = true;
  return (
    <>
       <div className="container" style={{width: "100%",margin:"0",padding:"0px",maxWidth:"100%"}} >
        <Navbar/>
        <Trending allproduct={allproducts}/>
        <Footer/>
       </div>
    </>
  )
}
