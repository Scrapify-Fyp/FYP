import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Shops"
import Sidebar from "../Components/sidebar"
export default function Settings() {
  return (
  
    <div className="" style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
            <Sidebar/>
            <main style={{margintop: '58px'}}>
                <div className="container pt-4">
                  <div className="settings">
                    <NavLink className="liii" to={"/Edit_profile"}><li>Account Information</li></NavLink>                 
                    <NavLink className="liii" to={"/Privacysecurity"}><li>Privacy and Security</li></NavLink>
                    <NavLink className="liii" to={""}><li>Notifications</li></NavLink>
                    <NavLink className="liii" to={"/Helpnsupport"}><li>Help and Support</li></NavLink>   
                  </div>    
                </div>
            </main>
    </div>            
  )
}
