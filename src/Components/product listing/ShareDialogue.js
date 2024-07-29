import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ShareDialog = ({ isOpen, onRequestClose }) => {
  const copyToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const openWhatsApp = () => {
    const currentUrl = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const openEmail = () => {
    const currentUrl = window.location.href;
    window.open(`mailto:?subject=Check out this product&body=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  return (
    <Modal show={isOpen} onHide={onRequestClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Share this product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <Button variant="outline-success" className="mb-2" onClick={openWhatsApp}>
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </Button>
          <Button variant="outline-primary" className="mb-2" onClick={copyToClipboard}>
            <FontAwesomeIcon icon={faLink} /> Copy Link
          </Button>
          <Button variant="outline-danger" onClick={openEmail}>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShareDialog;
