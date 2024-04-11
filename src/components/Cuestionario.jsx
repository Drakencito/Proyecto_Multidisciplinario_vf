import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SignupFormDemo } from "./Form"; // Assuming SignupFormDemo is in the ./Form directory
import "../components/Cuestionario.css"; // Assuming the CSS file is in the ./components directory

function CuestionarioX() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Cuestionario">
      <button className="btn-register" variant="primary" onClick={handleShow}>
        Registrarse aquí
      </button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupFormDemo />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <button className="btn-sendr" onClick={() => alert("Se ha enviado tu solicitud")}>
            Enviar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CuestionarioX;
