import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles/modal.scss";
import imgProfile from "../../../assets/shared/young.webp";

function ModalAnesa() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" classname="btnRead" onClick={handleShow}>
        Read More
      </Button>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
        <div className="alldiv">
          <div className="divModal11"></div>           
          <div className="alldi2v">
            <Button variant="secondary" className="xbtn" onClick={handleClose}>
              X
            </Button>
            <img src={imgProfile} className="pic" />
            <div className="modalNames">
              <Modal.Title className="name">Anesa Salhiu</Modal.Title>
              <Modal.Title className="name2">Admin</Modal.Title>
            </div>
            <Modal.Body className="skills">.skills</Modal.Body>
            <div className="divSkills">
              <Modal.Body className="skills01">#admin</Modal.Body>
              <Modal.Body className="skills01">#friendly</Modal.Body>
            </div>
          </div></div>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default ModalAnesa;
