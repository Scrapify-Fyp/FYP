import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import profileCSS from "../pages/Profile.module.css";
import Sidebar from "./sidebar";
import { selectUser } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom/dist";

export default function EditProfile() {
  const navigate = useNavigate();
  const currentUser = useSelector(selectUser); // Retrieve user data (contains at least name and ID) from Redux store
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
    imageUrl: "",
    imageFile: null,
  });

  useEffect(() => {
    if (currentUser) {
      // Fetch full user data from backend using user ID
      axios
        .get(`http://localhost:3002/users/${currentUser._id}`)
        .then((response) => {
          const userData = response.data; // Assuming response.data contains user's full information
          const { firstName, lastName, email, phone, address, bio, imageUrl } =
            userData;
          setFormData({
            firstName,
            lastName,
            email,
            phone,
            address,
            bio,
            imageUrl,
            imageFile: null,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, imageFile: file, imageUrl: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      bio,
      imageUrl,
      imageFile,
    } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", firstName);
    formDataToSend.append("lastName", lastName);
    formDataToSend.append("email", email);
    formDataToSend.append("phone", phone);
    formDataToSend.append("address", address);
    formDataToSend.append("bio", bio);

    if (imageUrl) {
      formDataToSend.append("imageUrl", imageUrl);
    } else if (imageFile) {
      formDataToSend.append("imageFile", imageFile);
    }

    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/users/${currentUser._id}`, formData)
      .then((response) => {
        console.log("Profile updated successfully:", response.data);
        navigate('/profile')
        // setFormData({
        //   firstName: "",
        //   lastName: "",
        //   email: "",
        //   phone: "",
        //   address: "",
        //   bio: "",
        //   imageUrl: "",
        //   imageFile: null,
        // });
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container"   style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
      <Sidebar activeprofile={"active"} />
      <main className="mt-4">
        <div className={`p-4 ${profileCSS.editProfilePage}`}>
          <h2 className="mb-4">Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{4}[0-9]{7}"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                About
              </label>
              <textarea
                className="form-control"
                id="bio"
                name="bio"
                rows="5"
                value={formData.bio}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Profile Image
              </label>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="imageFile"
                  name="imageFile"
                  onChange={handleImageChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Image URL"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  name="imageUrl"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setFormData({ ...formData, imageUrl: "" })}
                >
                  Clear
                </button>
              </div>
              {formData.imageUrl && (
                <div className="mt-3">
                  <h5 className="mb-2">Uploaded Image Preview:</h5>
                  <img
                    src={formData.imageUrl}
                    alt="Uploaded"
                    className="img-thumbnail"
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
