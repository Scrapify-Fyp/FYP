import React, { useEffect } from "react";
import "./signin.css";
import Login from "../Components/SigninForm";
import imge1 from "../img/signinimge2.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../hooks/auth";
// export let abc = false;
export default function Signin() {
  const user = auth();
  // const navigate = useNavigate();
  if (user) {
    // navigate("/");
    return <Navigate to={"/"} />;
  }
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
