import React from 'react'
import Shopepage from '../Components/Shopepage'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Singleshope() {
  return (
    <>  
    <div className="container" style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
         <Navbar/>
        <Shopepage/>
        <Footer/>
    </div>            
</>
  )
}
