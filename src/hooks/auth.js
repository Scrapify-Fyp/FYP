// import React from "react";
// // import jwt from 'jsonwebtoken'
// import { jwtDecode } from "jwt-decode";

// export const auth = () => {
//   // const dispath = useDispatch();

//   const cookieObject = Object.fromEntries(
//     document.cookie.split("; ").map((cookie) => {
//       const [key, value] = cookie.split("=");
//       return [key, value];
//     })
//   );

//   const token = cookieObject["token"];

//   // const token = jst.get('token');
//   console.log("🚀 ~ auth ~ token:", token);

//   const { user } = jwtDecode(token);
//   console.log("🚀 ~ auth ~ user:", user);

//   // dispath(setUser(user));

//   return user;
// };

// auth.js

import React from "react";
import { useDispatch } from "react-redux";
import {jwtDecode} from "jwt-decode";
import { setUser } from "../redux/user/userSlice"; // Assuming you have actions defined for setting user

export const auth = () => {
  try {
    const cookieObject = Object.fromEntries(
      document.cookie.split("; ").map((cookie) => {
        const [key, value] = cookie.split("=");
        return [key, value];
      })
    );

    const token = cookieObject["token"];
    if (!token) {
      throw new Error("No token found in cookies");
    }

    const decodedToken = jwtDecode(token);
    const { user } = decodedToken;

    // // Dispatch action to set authenticated user in Redux state
    // const dispatch = useDispatch();
    // dispatch(setUser(user));

    return user;
  } catch (error) {
    console.error("Authentication error:", error.message);
    return null; // Return null or handle error as needed
  }
};

// export default auth;
