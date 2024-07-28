import React, { useState } from "react";
import profilecss from "../pages/Profile.module.css";
import img from "../img/mandp.jpg";
import Myproduct from "./product listing/Myproduct";
import { Modal, Button } from "react-bootstrap";
import AddNewProduct from "./AddNewProduct";
import { FaEdit } from "react-icons/fa";

export default function Shopepage({ shop, onEditClick }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  // Toggle modal visibility
  const handleModalClose = () => setShowAddModal(false);
  const handleModalOpen = () => setShowAddModal(true);

  // Handle product edit click
  const handleEditClick = (product) => {
    setProductToEdit(product);
    handleModalOpen(); // Open modal for editing
  };

  // Format time to 12-hour format with AM/PM
  const formatTimeWithAMPM = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  // Extract and format opening hours
  const start = shop?.openingHours?.start ? formatTimeWithAMPM(shop.openingHours.start) : "9:00 AM";
  const end = shop?.openingHours?.end ? formatTimeWithAMPM(shop.openingHours.end) : "6:00 PM";

  return (
    <>
      <div className={profilecss.container}>
        <header className={profilecss.myshopheader}>
          <div className={profilecss.backgroundpic}></div>
          <div className={`${profilecss.flex} ${profilecss.itemsCenter}`}>
            <img
              src={shop?.imageUrl || img}
              alt="Shop Logo"
              className={profilecss.dp}
            />
            <div className={profilecss.ml2}>
              <h1 className={profilecss.textLg}>{shop?.name || "Shop Name"}</h1>
              <p className={profilecss.textSm}>
                {shop?.description || 
                  "Luxe Living brings you a curated collection of sophisticated home decor and furnishings, designed to elevate your living space with timeless elegance and modern flair. From luxurious furniture pieces to exquisite decor accents, our selection is crafted to inspire and transform your home into a sanctuary of style and comfort. Discover the epitome of refined living with Luxe Living."
                }
              </p>
            </div>
          </div>
          <div className={profilecss.description}>
            <p><strong>Address:</strong> {shop?.address || "123 Main Street, City, Country"}</p>
            <p><strong>Opening Hours:</strong> {`Monday - Friday, ${start} - ${end}`}</p>
            <p><strong>Email:</strong> {shop?.email || "example@example.com"}</p>
            <p><strong>Phone:</strong> {shop?.phone || "123-456-7890"}</p>
          </div>
        </header>
        <div className={profilecss.myproduct}>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                marginLeft: "30px",
                padding: "10px 20px",
                background: "#4fa94d",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={onEditClick}
            >
              <FaEdit style={{ marginRight: "8px" }} />
              Edit Shop
            </button>
            <button
              style={{
                padding: "10px 20px",
                background: "#4fa94d",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleModalOpen}
            >
              Add New Product
            </button>
          </div>
          <Myproduct onEditClick={handleEditClick} />
        </div>

        <Modal show={showAddModal} onHide={handleModalClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{productToEdit ? "Edit Product" : "Add New Product"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewProduct close={handleModalClose} product={productToEdit} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
