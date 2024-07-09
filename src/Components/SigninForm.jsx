import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckbox = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3002/login",
        formData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        dispatch(setUser(response.data.user));
        navigate("/Profile");
        toast.success("User Login successfully", {
          autoClose: 1000,
          closeOnClick: true,
          pauseOnHover: false,
        });
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async (response) => {
    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3002/google-login",
        { token: response.credential },
        { withCredentials: true }
      );

      if (res.status === 200) {
        dispatch(setUser(res.data.user));
        navigate("/Profile");
        toast.success("Google Login successfully", {
          autoClose: 1000,
          closeOnClick: true,
          pauseOnHover: false,
        });
      } else {
        toast.error(res.data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId="185186529737-qukt6b84cgp203jvk0f7ugt7ombktuak.apps.googleusercontent.com">
      <p className="text-center ">
        <welcometag className="welcometag fw-medium">WELCOME TO</welcometag>
        <br />
        <webname className="webname fw-medium">SCRAPIFY</webname>
        <br />
        <formtext1 className="formtext1 fw-light">
          Log in to get in the moment updates on the things <br />
          that interest you
        </formtext1>
      </p>
      <form className="form-group signin-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control input-with-svg"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Username or Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 input-passEye from-control">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control input-with-svg2"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="" onClick={handleCheckbox}>
            {showPassword ? (
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
            ) : (
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
            )}
          </div>
        </div>

        <div className="d-grid gap-2">
          <Button
            variant="danger"
            size="md"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Spinner animation="border" size="sm" /> : "Login"}
          </Button>
        </div>

        <p className="text-center mt-3 signuptext">
          <NavLink to="/forgot-password" className="anchor">
            Forgot password?
          </NavLink>
        </p>

        <div className="or-section mt-3 d-flex align-items-center">
          <div className="line flex-grow-1"></div>
          <span className="px-3 text-muted">OR</span>
          <div className="line flex-grow-1"></div>
        </div>

        <p className="text-center mt-3 signuptext">
          Don't have an account?{" "}
          <NavLink to="/signup" className="anchor">
            Sign up
          </NavLink>
        </p>
        <div className="googlebtn mt-3 d-flex justify-content-center">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onFailure={() => {
              console.log("Login Failed");
              toast.error("Google Login failed");
            }}
            width="200"
          />
        </div>
      </form>
    </GoogleOAuthProvider>
  );
}
