import React from 'react'
import "./sidebar.css"
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import imge1 from "../img/edit.png"; 
import Navbar from './Navbar';

export default function Sidebar(props) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [description, setDescription] = useState('');
    const [isEditing, setEditing] = useState(false);
    const maxCharacterLimit = 40;
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);                    
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Add logic to save the description (e.g., send it to the server)
  };
  const isDescriptionEmpty = description.trim() === '';
  return (
      <>
      <Navbar/>   
  <div className="container">
 
  <header>
  <nav id="sidebarMenu" className={`collapse d-lg-block sidebar collapse bg-white ${sidebarCollapsed ? 'show' : ''}`}>
  <div className="profile-dp">
       <div class=" mb-4">
          <div class="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style={{width: '110px'}}/>
            <h6 class="my-3">John Smith</h6>
            {isEditing ? (
                    <div>
                      <textarea
                        placeholder='Description (0-20)'
                        value={description}
                        onChange={handleDescriptionChange}
                        maxLength={maxCharacterLimit}
                      ></textarea>
                      <text className='profile-description' onClick={handleSaveClick}>Save</text>
                    </div>
                  ) : (isDescriptionEmpty?(
                    <div>
                      <text className='add-description' onClick={handleEditClick}>Add Description <img className="des-img" src={imge1} alt="" /> </text>
                    </div>
                  ):(
                     <div >
                     <div style={{width:'170px'}}>
                     {description}</div> 
                      <text className='profile-description' onClick={handleEditClick}>Edit<img className="des-img" src={imge1} alt="" /></text>
                    </div>
                  )
                  )}
              <div class="d-flex justify-content-center mb-2">
            </div>
          </div>
        </div>
    </div>
    <div className="">
      <div className="list-group list-group-flush mx-3 mt-4">
        <NavLink to="/Profile"  className={` ${props.activeprofile} text-center list-group-item list-group-item-action py-2 ripple`}>
        <span>Profile</span></NavLink>
        <NavLink to="/Analytics" className="text-center list-group-item list-group-item-action py-2 ripple">
        <span>Analytics</span></NavLink>
        <NavLink to="/Myshope" className="text-center list-group-item list-group-item-action py-2 ripple">
        <span>My Shop</span></NavLink>
        <NavLink to="/Order_history" className="text-center list-group-item list-group-item-action py-2 ripple">
        <span>Order History</span></NavLink>
        <NavLink to="/Wallet" className="text-center list-group-item list-group-item-action py-2 ripple">
        <span>Payments</span></NavLink>
        <NavLink to="/Settings" className="text-center list-group-item list-group-item-action py-2 ripple">
        <span>Settings</span></NavLink>
        
      </div>
    </div>
  </nav>

  <nav id="" className="navbar navbar-expand-lg navbar-light toglr">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebar}
              aria-controls="sidebarMenu"
              aria-expanded={sidebarCollapsed ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <i><FontAwesomeIcon icon={faBars} /></i>
            </button>
          </div>
        </nav>
 
</header>
      </div>
      
      </>
  )
}