import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import ScrapProducts from '../Components/product listing/ScrapProducts';
export default function Scrapyard() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <ScrapProducts/>
      <Footer/>
    </>
  )
}
