import React from "react";
import { useState } from "react";
import profilecss from "../pages/Profile.module.css";
import img from "../img/mandp.jpg";
import Myproduct from "./product listing/Myproduct";
import { Modal, Button } from "react-bootstrap";
import AddNewProduct from "./AddNewProduct";
export default function Shopepage() {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleViewAllClick = () => setShowModal(true);
  return (
    <>
      <div className={`${profilecss.container}`}>
        <header className={`${profilecss.myshopheader}`}>
          <div className={`${profilecss.backgroundpic}`}></div>
          <div className={`${profilecss.flex} ${profilecss.itemsCenter}`}>
            <img src={img} alt="Shop Logo" className={`${profilecss.dp}`} />
            <div className={`${profilecss.ml2}`}>
              <h1 className={`${profilecss.textLg}`}>Luxe Living</h1>
              <p className={`${profilecss.textSm}`}>
                Luxe Living brings you a curated collection of sophisticated
                home decor and furnishings, designed to elevate your living
                space with timeless elegance and modern flair. From luxurious
                furniture pieces to exquisite decor accents, our selection is
                crafted to inspire and transform your home into a sanctuary of
                style and comfort. Discover the epitome of refined living with
                Luxe Living.
              </p>
            </div>
          </div>
          <div className={`${profilecss.description}`}>
            <p>
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p>
              <strong>Opening Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
            </p>
            <p>
              <strong>Email:</strong> example@example.com
            </p>
            <p>
              <strong>Phone:</strong> 123-456-7890
            </p>
          </div>
        </header>
        <div className={`${profilecss.myproduct}`}>
          <button
            style={{ marginLeft: "30px" }}
            onClick={handleViewAllClick}
            class="btn btn-success"
          >
            Add New Product
          </button>
          <Myproduct refresh={handleModalClose}/>

        </div>

        <Modal show={showModal} onHide={handleModalClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Add new Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <AddNewProduct close={handleModalClose}/>

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
