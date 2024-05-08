import React from "react";
import "./signin.css";
import Login from "../Components/SigninForm";
import imge1 from "../img/signinimge2.jpg";
export let abc = false;
export default function Signin() {
  return (
    <>
      <div className="container">
        <div className="signinpage">
          <div>
            <img id="signin-imge" src={imge1} className="img-fluid" alt="..." />
          </div>
          <div className="inputform">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
