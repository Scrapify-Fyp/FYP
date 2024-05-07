import React from "react";
// import jwt from 'jsonwebtoken'
import { jwtDecode } from "jwt-decode";


export const auth = () => {
  // const dispath = useDispatch();

  const cookieObject = Object.fromEntries(
    document.cookie.split("; ").map((cookie) => {
      const [key, value] = cookie.split("=");
      return [key, value];
    })
  );

  const token = cookieObject["token"];

  // const token = jst.get('token');
  console.log("🚀 ~ auth ~ token:", token);

  const { user } = jwtDecode(token);
  console.log("🚀 ~ auth ~ user:", user);

  // dispath(setUser(user));

  return user;
};
