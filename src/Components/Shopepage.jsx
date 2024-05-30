import React from "react";
import { useState } from "react";
import profilecss from "../pages/Profile.module.css";
import img from "../img/mandp.jpg";
import Myproduct from "./product listing/Myproduct";
import { Modal, Button } from "react-bootstrap";
import AddNewProduct from "./AddNewProduct";
export default function Shopepage({ shop }) {
  // console.log("🚀 ~ Shopepage ~ shop:", shop);
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleViewAllClick = () => setShowModal(true);

  const extractTimeWithAMPM = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    const hour12 = hours % 12 || 12; // Convert to 12-hour format

    const formattedHours = hour12.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const start = extractTimeWithAMPM(shop?.openingHours?.start);
  const end = extractTimeWithAMPM(shop?.openingHours?.end);
  // console.log("Time:", timeString);

  return (
    <>
      <div className={`${profilecss.container}`}>
        <header className={`${profilecss.myshopheader}`}>
          <div className={`${profilecss.backgroundpic}`}></div>
          <div className={`${profilecss.flex} ${profilecss.itemsCenter}`}>
            <img
              src={shop?.imageUrl ? shop?.imageUrl : img}
              alt="Shop Logo"
              className={`${profilecss.dp}`}
            />
            <div className={`${profilecss.ml2}`}>
              <h1 className={`${profilecss.textLg}`}>{shop?.name}</h1>
              <p className={`${profilecss.textSm}`}>
                {shop?.description
                  ? shop.description
                  : "Luxe Living brings you a curated collection of sophisticated home decor and furnishings, designed to elevate your living space with timeless elegance and modern flair. From luxurious furniture pieces to exquisite decor accents, our selection is crafted to inspire and transform your home into a sanctuary of style and comfort. Discover the epitome of refined living with Luxe Living."}
              </p>
            </div>
          </div>
          <div className={`${profilecss.description}`}>
            <p>
              <strong>Address:</strong>{" "}
              {shop?.address ? shop.address : "123 Main Street, City, Country"}
            </p>
            <p>
              <strong>Opening Hours: </strong>{" "}
              {shop?.openingHours
                ? "Monday - Friday, " + start + " - " + end
                : "Monday - Friday, 9:00 AM - 6:00 PM"}
              {/* {console.log(
                "🚀 ~ Shopepage ~ shop.openingHours.start:",
                shop.openingHours.start
              )} */}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {shop?.email ? shop.email : "example@example.com"}
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              {shop?.phone ? shop.phone : "123-456-7890"}
            </p>
          </div>
        </header>
        <div className={`${profilecss.myproduct}`}>
          <button
            style={{ marginLeft: "30px" }}
            onClick={handleViewAllClick}
            className="btn btn-success"
          >
            Add New Product
          </button>
          <Myproduct refresh={handleModalClose} />
        </div>

        <Modal show={showModal} onHide={handleModalClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Add new Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewProduct close={handleModalClose} />
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
