import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import Latest from '../Components/product listing/Latest'
import Trending from '../Components/product listing/Trending'
import Foryou from '../Components/product listing/Foryou'

export default function Home() {
  return (
    <>
    <div className="Main_Container container-fluid" style={{width: "100%",margin:"0",padding:"0px",maxWidth:"100%"}}>
    <div><Navbar/></div>
    <div><HeroSection/></div>
    <div><Latest/></div>
    <div><Trending/></div>
    <div><Foryou/></div>
    <div><Footer/></div>
    </div>
    </>
  )
}
