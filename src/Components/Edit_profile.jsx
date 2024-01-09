import React from 'react';
import profileCSS from '../pages/Profile.module.css';
import Sidebar from "../Components/sidebar";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";



export default function Edit_profile() {
  // const [showpassword, setShowPassword] = useState(false);
  // const handleCheckbox = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  return (
    <>  
    <div classNameName="container">
        <Sidebar activeprofile={'active'} />
        <main style={{ marginTop: '' }}>
          {/* <div classNameName={`container pt-4`}>
            <div classNameName={profileCSS.heading}>Edit Profile</div>
          </div>
          <div classNameName={`${profileCSS.profileinputTags} form`}>
                <form classNameName="row g-3">
                        <div classNameName="col-md-6">
                          <label for="inputfname" classNameName="form-label ">First Name</label>
                          <input type="text" classNameName={`${profileCSS.formcontrol} ${profileCSS.profileinput}`} id="firstname" placeholder='John' p/>
                        </div>
                        <div classNameName="col-md-6">
                          <label for="inputlname" classNameName="form-label">Last Name</label>
                          <input type="text" classNameName={`${profileCSS.formcontrol} ${profileCSS.profileinput}`} id="lastname" placeholder='Smith'/>
                        </div>
                        <div classNameName="col-12">
                          <label for="inputemail" classNameName="form-label">Email</label>
                          <input type="email" classNameName={`${profileCSS.formcontrol} ${profileCSS.profileinput}`} id="email" placeholder="abc123@gmail.com"/>
                        </div>
                        <div className="col-12">
                          <label for="inputcontact" classNameName="form-label">Contact Number</label>
                          <input type="tel" classNameName={`${profileCSS.formcontrol} ${profileCSS.profileinput}`} id="phone" pattern="[0-9]{4}[0-9]{7}" placeholder="03124567890" required/>
                        </div>
                        <div className="col-12">
                          <label for="inputAddress" classNameName="form-label">Address</label>
                          <input type="text" classNameName={`${profileCSS.formcontrol} ${profileCSS.profileinput}`} id="inputAddress" placeholder="Apartment, studio, or floor"/>
                        </div>
                       
                        <div classNameName="col-12">
                <label htmlFor="inputAddress" classNameName={profileCSS.formLabel}>New Password</label>
                <div classNameName={`mb-3 ${profileCSS.inputPasseye} ${profileCSS.formControl} ${profileCSS.profileinput}`}>
                  <input
                    type={showpassword ? "text" : "password"}
                    classNameName={`${profileCSS.formControl}`}
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  <div classNameName="" onClick={handleCheckbox}>
                    {showpassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        classNameName="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708" />
                                      </svg>
                                     ) : (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-eye"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                      </svg>
                                    )}
                                  </div>
                                    </div>
                                </div>
                                <div className="col-12">
                          <label for="inputAddress" className="form-label">Retry New Password</label>
                          <div classNameName="mb-3 input-passeye formcontrol profileinput">
                                  <input
                                    type={showpassword ? "text" : "password"}
                                    classNameName="formcontrol"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                  />
                                  <div classNameName="" onClick={handleCheckbox}>
                                    {showpassword ? (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-eye-slash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708" />
                                      </svg>
                                    ) : (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-eye"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                      </svg>
                                    )}
                                  </div>
                                    </div>
                                </div>
                                <label classNameName={profileCSS.formLabel} htmlFor="textAreaExample">Description</label>
              <div classNameName={`form-outline ${profileCSS.formControl}`} data-mdb-input-init>
                <textarea classNameName={profileCSS.formControl} id="textAreaExample" rows="4"></textarea>
              </div>
              <div classNameName="col-12 save-bttn">
                <div>
                  <NavLink to="/profile"><button type="button" classNameName={`btn btn-outline-danger ${profileCSS.rippleInit}`} data-mdb-ripple-color="dark">Cancel</button></NavLink>
                </div>
                <div>
                  <button type="button" classNameName={`btn btn-outline-success ${profileCSS.rippleInit}`} data-mdb-ripple-color="dark">Save</button>
                </div>
                         </div>
                      </form>
                    </div> */}
    <div className={`${profileCSS.editprofilepage}`}>
      <div className="col mb-3">
            <div className="e-profile">
              <div className="row">
                <div className="col-12 col-sm-auto mb-3">
                  <div className="mx-auto" style={{width: "140px"}}>
                    <div className="d-flex justify-content-center align-items-center rounded" style={{height: "140px", backgroundColor: "rgb(233, 236, 239)"}}>
                      <span style={{color: "rgb(166, 168, 170)", font: "bold 8pt Arial"}}>140x140</span>
                    </div>
                  </div>
                </div>
                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                    <div className="mt-2" >
                      <button style={{marginTop:"90px"}} className="btn btn-primary" type="button">
                        <span>Change Photo</span>
                      </button>
                    </div>
                </div>
              </div>
              <div className="tab-content pt-3">
                <div className="tab-pane active">
                  <form className="form" novalidate="">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>First Name</label>
                              <input className={`form-control ${profileCSS.inputtags}`} type="text" name="name" placeholder="John " />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label>Last name</label>
                              <input className={`form-control ${profileCSS.inputtags}`} type="text" name="username" placeholder="Smith" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Email</label>
                              <input className={`form-control ${profileCSS.inputtags}`} type="text" placeholder="user@example.com"/>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label>Phone Number</label>
                              <input type="tel" className={`form-control ${profileCSS.inputtags}`} id="phone" pattern="[0-9]{4}[0-9]{7}" placeholder="03124567890" required/>                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Address</label>
                              <input type="text" className={`form-control ${profileCSS.inputtags}`} id="inputAddress" placeholder="Apartment, studio, or floor"/>                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mb-3">
                            <div className="form-group">
                              <label>About</label>
                              <textarea className={`form-control ${profileCSS.inputtags}`} rows="5" placeholder="My Bio"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">Save Changes</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
        </div>
</div>
                </main>
        </div>             
    </>
  )
}