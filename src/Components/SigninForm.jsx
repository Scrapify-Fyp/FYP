// import React from "react";
// import "../pages/signin.css";
// import imge2 from "../img/Google-Icon-PNG_rwscww.png.svg";
// import imge3 from "../img/Splash_Facebook_Lite_Icon_PNG_ykgl9v.png";
// import imge4 from "../img/Splash_Instagram_Icon_PNG_pppfmu.png";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// export default function Login() {
//   const [showpassword, setShowPassword] = useState(false);
//   const handleCheckbox = () => {
//   setShowPassword((showPassword) => !showPassword);

//   };
//   return (
//       <>

//     <form className="form-group  signin-form ">
//           <p className="text-center ">
//             <welcometag className="welcometag fw-medium">WELCOME TO</welcometag>
//             <br />
//             <webname className="webname fw-medium">SCRAPIFY</webname>
//             <br />
//             <formtext1 className="formtext1 fw-light">
//               Log in to get in the moment updates on the things <br />
//               that interest you
//             </formtext1>
//           </p>
//           <div class="mb-3">
//             <input
//               type="email"
//               className="form-control input-with-svg "
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Username or Email"
//             />
//           </div>

//           <div className="mb-3 input-passEye from-control">
//             <input
//               type={showpassword ? "text" : "password"}
//               className="form-control input-with-svg2"
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//             <div className="" onClick={handleCheckbox} >
//               {showpassword ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
//               <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z"/>
//               <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
//               <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708"/>
//             </svg>
//               :
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-eye"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
//                 <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
//               </svg> }

//             </div>
//           </div>

//           <div class="d-grid gap-2 ">
//             <button className="btn btn-danger " type="button">
//               Log In
//             </button>
//           </div>
//           <div>
//             <p className="text-for-signup fw-light">
//               Don't have an account?{" "}
//               <NavLink to="/Signup" class="signup-link">
//                 Register Now
//               </NavLink>{" "}
//             </p>
//           </div>
//           <div className="or-div">-OR-</div>
//           <div className="or-div">continue with</div>
//           <div className="logo">
//             <div>
//               <img type="button" className="input-with-png1" src={imge2} alt="jkhih" />
//             </div>
//             <div>
//              <img type="button" className="input-with-png1" src={imge3} alt="niok" />
//             </div>
//             <div>
//               <img type="button" className="input-with-png1" src={imge4} alt="ioh" />
//             </div>
//           </div>
//         </form>
//       </>
//   );
// }

import React, { useState } from "react";
import { NavLink , useNavigate} from "react-router-dom";
import imge2 from "../img/Google-Icon-PNG_rwscww.png.svg";
import imge3 from "../img/Splash_Facebook_Lite_Icon_PNG_ykgl9v.png";
import imge4 from "../img/Splash_Instagram_Icon_PNG_pppfmu.png";

export default function Login() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Use the form data for further processing like API call
    // Example: make API call to login endpoint with formData
    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User registered successfully:", data);

        navigate("/Home");
        
      } else {
        const errorData = await response.json();
        console.log("Error registering user:", errorData);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <form className="form-group  signin-form" onSubmit={handleSubmit}>
        <p className="text-center">
          <welcometag className="welcometag fw-medium">WELCOME TO</welcometag>
          <br />
          <webname className="webname fw-medium">SCRAPIFY</webname>
          <br />
          <formtext1 className="formtext1 fw-light">
            Log in to get in the moment updates on the things <br />
            that interest you
          </formtext1>
        </p>
        <div className="mb-3">
          <input
            type="email"
            className="form-control input-with-svg"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Username or Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 input-passEye from-control">
          <input
            type="password"
            className="form-control input-with-svg2"
            id="exampleInputPassword1"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="d-grid gap-2 ">
          <button className="btn btn-danger" type="submit">
            Log In
          </button>
        </div>
        <div>
          <p className="text-for-signup fw-light">
            Don't have an account?{" "}
            <NavLink to="/Signup" className="signup-link">
              Register Now
            </NavLink>{" "}
          </p>
        </div>
        <div className="or-div">-OR-</div>
        <div className="or-div">continue with</div>
        <div className="logo">
          <div>
            <img
              type="button"
              className="input-with-png1"
              src={imge2}
              alt="Google Icon"
            />
          </div>
          <div>
            <img
              type="button"
              className="input-with-png1"
              src={imge3}
              alt="Facebook Icon"
            />
          </div>
          <div>
            <img
              type="button"
              className="input-with-png1"
              src={imge4}
              alt="Instagram Icon"
            />
          </div>
        </div>
      </form>
    </>
  );
}
