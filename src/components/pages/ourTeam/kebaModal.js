import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles/modal.scss";
import imgProfile from "../../../assets/shared/young.webp";
function ModalKeba() {
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
            <div className="divBorder"></div>
            <Button variant="secondary" className="xbtn" onClick={handleClose}>
              X
            </Button>
            <img src={imgProfile} className="pic" />
            <div className="modalNames">
            <Modal.Title className='name'>Kebir Cesko</Modal.Title>              
            <Modal.Title className="name2">Software Engineer</Modal.Title>
            </div>
            <Modal.Body className="skills">.skills</Modal.Body>
            <div className="divSkills">
              <Modal.Body className="skills01">#ceo</Modal.Body>
              <Modal.Body className="skills01">#entrepreneur</Modal.Body>
              <Modal.Body className="skills01">#leadership</Modal.Body>
              <Modal.Body className="skills01">#founder</Modal.Body>
              <Modal.Body className="skills01">#friendly</Modal.Body>
              <Modal.Body className="skills01">#creative</Modal.Body>
              <Modal.Body className="skills01">#coding</Modal.Body>
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default ModalKeba;
