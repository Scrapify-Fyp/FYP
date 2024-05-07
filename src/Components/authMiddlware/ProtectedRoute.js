import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSlice";
import { useNavigate , Navigate } from "react-router-dom";
import { auth } from "../../hooks/auth";

const ProtectedRoute = ({ children }) => {
  // const user = useSelector(selectUser);
  const user = auth();
  const navigate = useNavigate();

  if (!user) {
    // return <Navigate to={'/Signin'} />
    return <div>
      Not found
    </div>
  } else {
    return children;
  }
};

export default ProtectedRoute;
