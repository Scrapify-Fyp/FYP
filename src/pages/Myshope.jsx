import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import profilecss from "./Profile.module.css";
import Sidebar from "../Components/sidebar";
import Shopepage from "../Components/Shopepage";
import axios from "axios";
import { toast } from "react-toastify";
import { auth } from "../hooks/auth";
import { Modal, Button, Form, Row, Col, Container, ProgressBar } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaEdit } from "react-icons/fa";
import { storage } from "../Config/Firbase"; // Corrected Firebase import
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Corrected Firebase methods

export default function Myshope() {
  const user = auth();
  const userId = user._id;
  const [shop, setShop] = useState(null);
  const [isShop, setIsShop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [formData, setFormData] = useState({
    shopName: "",
    shopNameError: "",
    description: "",
    address: "",
    openingHours: {
      start: null,
      end: null,
    },
    email: "",
    phone: "",
    imageUrl: "",
    imageFile: null,
  });

  useEffect(() => {
    const fetchUsershop = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/user/${userId}/shop`
        );
        console.log("🚀 ~ fetchUsershop ~ response:", response)
        
        if (response.data.length > 0) {
          setIsShop(true);
          setShop(response.data[0]);
          setFormData({
            shopName: response.data[0].name,
            description: response.data[0].description,
            address: response.data[0].address,
            openingHours: {
              start: new Date(response.data[0].openingHours?.start),
              end: new Date(response.data[0].openingHours?.end),
            },
            email: response.data[0].email,
            phone: response.data[0].phone,
            imageUrl: response.data[0].imageUrl,
            imageFile: null,
          });
        }
      } catch (error) {
        console.error("Error fetching user's shop:", error);
        toast.error("Error fetching shop. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUsershop();
    }
  }, [userId, showModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      openingHours: {
        ...prevFormData.openingHours,
        [name]: date,
      },
    }));
  };

  const handleCreateOrUpdateShop = async () => {
    const {
      shopName,
      description,
      address,
      openingHours,
      email,
      phone,
      imageFile,
    } = formData;

    try {
      if (!shopName) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          shopNameError: "Shop name is required",
        }));
        return;
      }

      let uploadedImageUrl = formData.imageUrl;

      if (imageFile) {
        // Upload image to Firebase Storage
        setUploading(true);
        const storageRef = ref(storage, `shops/${userId}/${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        // Convert upload task to a promise
        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Handle progress updates
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(progress);
            },
            (error) => {
              // Handle unsuccessful uploads
              console.error("Upload failed:", error);
              toast.error("Image upload failed.");
              setUploading(false);
              reject(error);
            },
            async () => {
              // Handle successful uploads on complete
              try {
                uploadedImageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                setUploading(false);
                setUploadSuccess(true);
                console.log("uploadedImageUrl", uploadedImageUrl);
                resolve();
              } catch (error) {
                console.error("Error getting download URL:", error);
                toast.error("Error retrieving image URL.");
                setUploading(false);
                reject(error);
              }
            }
          );
        });
      }

      const shopData = {
        name: shopName,
        description,
        userId,
        address,
        openingHours: {
          start: openingHours.start.toISOString(),
          end: openingHours.end.toISOString(),
        },
        email,
        phone,
        imageUrl: uploadedImageUrl,
      };

      if (isEditMode) {
        // Update shop
        await axios.put(`${process.env.REACT_APP_BASE_URL}/shop/${shop._id}`, shopData);
        toast.success("Shop updated successfully!");
      } else {
        // Create new shop
        await axios.post(`${process.env.REACT_APP_BASE_URL}/shop`, shopData);
        toast.success("Shop created successfully!");
      }

      setIsShop(true);
      setShowModal(false);
    } catch (error) {
      console.error(
        isEditMode ? "Error updating shop:" : "Error creating shop:",
        error
      );
      toast.error(
        isEditMode
          ? "Error updating shop. Please try again later."
          : "Error creating shop. Please try again later."
      );
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <TailSpin height="80" width="80" color="#4fa94d" ariaLabel="loading" />
        <h4
          style={{
            padding: "30px",
          }}
        >
          Loading....
        </h4>
      </div>
    );
  }

  return (
    <div className={profilecss.container}>
      <div className={`${profilecss.bgWhite}`}>
        <Sidebar />
        <main style={{ marginTop: "58px" }}>
          {isShop ? (
            <div>
              <Shopepage
                shop={shop}
                onEditClick={handleEditClick} // Pass the edit button handler
              />
            </div>
          ) : (
            <div>
              <h2 style={{ color: "#980f0f", textAlign: "center" }}>
                No shop found
              </h2>
              <p style={{ textAlign: "center" }}>
                You don't have any shop. Please create a new shop to start
                selling.
              </p>
              <button
                style={{
                  margin: "auto",
                  display: "block",
                  padding: "10px 20px",
                  background: "#980f0f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsEditMode(false);
                  setShowModal(true);
                }}
              >
                Create New Shop
              </button>
            </div>
          )}
        </main>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditMode ? "Edit Shop" : "Create New Shop"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="shopName">
                    <Form.Label>Shop Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter shop name"
                      name="shopName"
                      value={formData.shopName}
                      onChange={(e) => {
                        handleChange(e);
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          shopNameError: "",
                        }));
                      }}
                      isInvalid={!!formData.shopNameError}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formData.shopNameError}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter shop description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="openingHours">
                    <Form.Label>Opening Hours</Form.Label>
                    <Row>
                      <Col>
                        <Form.Label>Start</Form.Label>
                        <DatePicker
                          selected={formData.openingHours.start}
                          onChange={(date) => handleDateChange("start", date)}
                          showTimeSelect
                          dateFormat="Pp"
                          className="form-control"
                        />
                      </Col>
                      <Col>
                        <Form.Label>End</Form.Label>
                        <DatePicker
                          selected={formData.openingHours.end}
                          onChange={(date) => handleDateChange("end", date)}
                          showTimeSelect
                          dateFormat="Pp"
                          className="form-control"
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="image">
                    <Form.Label>Shop Image</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => {
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          imageFile: e.target.files[0],
                        }));
                      }}
                    />
                    {uploading && (
                      <ProgressBar
                        animated
                        now={uploadProgress}
                        label={`${Math.round(uploadProgress)}%`}
                        className="mt-2"
                      />
                    )}
                    {uploadSuccess && (
                      <div className="text-success mt-2">Upload successful!</div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Button
                variant="primary"
                onClick={handleCreateOrUpdateShop}
                disabled={uploading}
              >
                {loading ? "Saving..." : "Save"}
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
