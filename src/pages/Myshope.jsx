import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import profilecss from "./Profile.module.css";
import Sidebar from "../Components/sidebar";
import Shopepage from "../Components/Shopepage";
import axios from "axios";
import { toast } from "react-toastify";
import { auth } from "../hooks/auth";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Myshope() {
  const user = auth();
  const userId = user._id;
  const [shop, setShop] = useState(null);
  const [isShop, setIsShop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
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
          `http://localhost:3002/user/${userId}/shop`
        );
        console.log("🚀 ~ fetchUsershop ~ response:", response);

        if (response.data.length > 0) {
          setIsShop(true);
        }
        // setIsShop(response.data.length > 0);
        setShop(response.data[0]);
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

  const handleCreateShop = async () => {
    const {
      shopName,
      description,
      address,
      openingHours,
      email,
      phone,
      imageUrl,
      imageFile,
    } = formData;
    console.log("🚀 ~ handleCreateShop ~ formData:", formData);

    try {
      if (!shopName) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          shopNameError: "Shop name is required",
        }));
        return;
      }

      let shopData = {
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
        imageUrl,
      };

      if (imageFile) {
        const formDataToSend = new FormData();
        formDataToSend.append("name", shopName);
        formDataToSend.append("description", description);
        formDataToSend.append("userId", userId);
        formDataToSend.append("address", address);
        formDataToSend.append(
          "openingHours",
          JSON.stringify({
            start: openingHours.start.toISOString(),
            end: openingHours.end.toISOString(),
          })
        );
        formDataToSend.append("email", email);
        formDataToSend.append("phone", phone);
        formDataToSend.append("image", imageFile);

        const response = await axios.post(
          "http://localhost:3002/shop",
          formDataToSend
        );
        setShop(response.data);
      } else {
        const response = await axios.post(
          "http://localhost:3002/shop",
          shopData
        );
        setShop(response.data);
      }

      setIsShop(true);
      setShowModal(false);
    } catch (error) {
      console.error("Error creating shop:", error);
      toast.error("Error creating shop. Please try again later.");
    }
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

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
            <Shopepage shop={shop} />
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
                onClick={() => setShowModal(true)}
              >
                Create New Shop
              </button>
            </div>
          )}
        </main>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create New Shop</Modal.Title>
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
                    <div style={{ display: "flex", gap: "10px" }}>
                      <DatePicker
                        selected={formData.openingHours.start}
                        onChange={(date) => handleDateChange("start", date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Start Time"
                        dateFormat="h:mm aa"
                        className="form-control"
                      />
                      <DatePicker
                        selected={formData.openingHours.end}
                        onChange={(date) => handleDateChange("end", date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="End Time"
                        dateFormat="h:mm aa"
                        className="form-control"
                      />
                    </div>
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
                      type="text"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="imageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter image URL"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="imageFile">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="imageFile"
                      onChange={(e) =>
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          imageFile: e.target.files[0],
                        }))
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateShop}>
            Create Shop
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
