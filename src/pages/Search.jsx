import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Searchproducts from '../Components/product listing/Searchproducts'

export default function Search() {
  return (
    <>
    <div className="container" style={{width: "100%",margin:"0",padding:"0px",maxWidth:"100%"}}>
      <Navbar/>
      <Searchproducts/>
      <Footer/>
      </div>
    </>
  )
}
