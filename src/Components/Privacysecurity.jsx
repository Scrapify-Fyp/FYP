import React from 'react'
import { NavLink } from 'react-router-dom'
import "../pages/shop.css"
import Sidebar from "./sidebar"
export default function Privacysecurity() {
  return (
  
    <div className="" style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
<Sidebar activeprofile={"active"} />  
          <main style={{margintop: '58px'}}>
                <div className="container pt-4">
                  <div className="settings">
                    <NavLink className="liii" to={"/Changepassword"}><li>Change Password</li></NavLink>                 
                    <NavLink className="liii" to={"/Privacynpolices"}><li>Privacy and Polics</li></NavLink>
                  </div>    
                </div>
            </main>
    </div>            
  )
}
