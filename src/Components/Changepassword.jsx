import React from 'react'
import { NavLink } from 'react-router-dom'
import "../pages/shop.css"
import Sidebar from "./sidebar"
export default function Changepassword() {
  return (
  
    <div className="" style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
<Sidebar activeprofile={"active"} />
            <main style={{margintop: '58px'}}>
                <div className="container pt-4">
                  <div className="settings">
                  <h2 style={{ textAlign: 'center' }}>Change Password</h2>
      <form style={{ paddingRight: '50px'}}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="prevPassword" style={{ display: 'block', marginBottom: '5px' }}>Previous Password:</label>
          <input type="password" id="prevPassword" name="prevPassword" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="newPassword" style={{ display: 'block', marginBottom: '5px' }}>New Password:</label>
          <input type="password" id="newPassword" name="newPassword" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm New Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Change Password</button>
      </form>
                  </div>    
                </div>
            </main>
    </div>            
  )
}
