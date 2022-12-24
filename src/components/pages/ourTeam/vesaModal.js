import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles/modal.scss";
import imgProfile from "../../../assets/shared/young.webp";
function ModalVesa() {
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
          <div className="alldiv">
            <div className="divBorder"></div>
            <Button variant="secondary" className="xbtn" onClick={handleClose}>
              X
            </Button>
            <img src={imgProfile} className="pic" />
            <div className="modalNames">
              <Modal.Title className="name">Vesa Susuri</Modal.Title>
              <Modal.Title className="name2">Full Stack Developer / UI x Ux Designer</Modal.Title>
            </div>
            <Modal.Body className="skills">.skills</Modal.Body>
            <div className="divSkills">
              <Modal.Body className="skills01">#fullStackDev</Modal.Body>
              <Modal.Body className="skills01">#javaScript</Modal.Body>
              <Modal.Body className="skills01">#Html5</Modal.Body>
              <Modal.Body className="skills01">#Css3</Modal.Body>
              <Modal.Body className="skills01">#React</Modal.Body>
              <Modal.Body className="skills01">#webDevelopment</Modal.Body>
              <Modal.Body className="skills01">#laravel</Modal.Body>
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default ModalVesa;
