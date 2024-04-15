import React from "react";
import profileCSS from "../pages/Profile.module.css";
import Sidebar from "../Components/sidebar";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

export default function Edit_profile() {

  return (
    <>
      <div classNameName="container" style={{}}>
        <Sidebar activeprofile={"active"} />
        <main style={{ marginTop: "" }}>
          <div className={`${profileCSS.editprofilepage}`}>
            <div className="col mb-3">
              <div className="e-profile">
                <div className="row">
                  <div className="col-12 col-sm-auto mb-3">
                    <div className="mx-auto" style={{ width: "140px" }}>
                      <div
                        className="d-flex justify-content-center align-items-center rounded"
                        style={{
                          height: "140px",
                          backgroundColor: "rgb(233, 236, 239)",
                        }}
                      >
                        <span
                          style={{
                            color: "rgb(166, 168, 170)",
                            font: "bold 8pt Arial",
                          }}
                        >
                          140x140
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                    <div className="mt-2">
                      <button
                        style={{ marginTop: "90px" }}
                        className="btn btn-primary"
                        type="button"
                      >
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
                                <input
                                  className={`form-control ${profileCSS.inputtags}`}
                                  type="text"
                                  name="name"
                                  placeholder="John"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label>Last name</label>
                                <input
                                  className={`form-control ${profileCSS.inputtags}`}
                                  type="text"
                                  name="name"
                                  placeholder="Smith"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label>Email</label>
                                <input
                                  className={`form-control ${profileCSS.inputtags}`}
                                  type="text"
                                  placeholder="user@example.com"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                  type="tel"
                                  className={`form-control ${profileCSS.inputtags}`}
                                  id="phone"
                                  pattern="[0-9]{4}[0-9]{7}"
                                  placeholder="03124567890"
                                  required
                                />{" "}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label>Address</label>
                                <input
                                  type="text"
                                  className={`form-control ${profileCSS.inputtags}`}
                                  id="inputAddress"
                                  placeholder="Apartment, studio, or floor"
                                />{" "}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col mb-3">
                              <div className="form-group">
                                <label>About</label>
                                <textarea
                                  className={`form-control ${profileCSS.inputtags}`}
                                  rows="5"
                                  placeholder="My Bio"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col d-flex justify-content-end">
                          <button className="btn btn-primary" type="submit">
                            Save Changes
                          </button>
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
  );
}
