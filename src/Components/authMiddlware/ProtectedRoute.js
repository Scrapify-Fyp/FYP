import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSlice";
import { useNavigate , Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to={'/Signin'} />
  } else {
    return children;
  }
};

export default ProtectedRoute;
