import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
    <div className="Main_Container container-fluid" style={{width: "auto",margin:"0",padding:"0px",display:"flex",flexDirection:"column",gap:"10px"}}>
    <div><Navbar/></div>
    <div><HeroSection/></div>
    <div><Footer/></div>
    </div>
    </>
  )
}
