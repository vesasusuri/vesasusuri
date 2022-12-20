import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./styles/modal.scss"
import imgProfile from "../../../assets/shared/young.webp"
function SpringModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Read More
      </Button>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <div className='borderDiv'></div>
          <img src={imgProfile} className="pic"/>
          <Modal.Title className='name'>Arianit Tershnjaku</Modal.Title>
        </Modal.Header>
        <Modal.Body className='name'>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            X
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SpringModal