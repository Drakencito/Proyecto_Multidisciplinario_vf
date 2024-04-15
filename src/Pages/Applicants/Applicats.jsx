import React, { useState } from "react";
import will from '../../assets/will.jpg'
import eliminar from '../../assets/borrar.png'
import editar from '../../assets/editar.png'
import '../Applicants/Applicants.css'
import { input } from "@nextui-org/react";

function Modal(props) {
  return (
    <div className="modal" style={{ display: props.show ? "block" : "none" }}>
        <div>
      <div className="modal-content">
        <div className="x">
        <span className="close" onClick={props.onClose}>&times;</span>
        </div>
        {}
        <input type="text" placeholder="Nombre" className="inputModal" />
        <input type="text" placeholder="Edad" className="inputModal"/>
        <input type="text" placeholder="Genero" className="inputModal"/>
        <input type="text" placeholder="Numero" className="inputModal"/>
        <input type="text" placeholder="Correo" className="inputModal"/>
        
      </div>
      </div>
    </div>
  );
}

function ApplicantsX(props) {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
    // Aquí podrías agregar lógica adicional para cargar los datos del usuario en el modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="ApplicantsX">
      <img className="ImgApplicants" src={will} alt="" />
      <div className="info">
        <div className="Name">
          <p>{props.name}</p>
          <p className="eage">{props.eage}</p>
        </div>
        <p className="genero">Genero: {props.gener}</p>
      </div>
      <div className="info">
        <p>Numero: {props.tell}</p>
        <p className="correo">Correo: {props.mail}</p>
      </div>

      <div className="boxBotonAplicants">
        <button className="botonAplicants"><img className="botonAplicants" src={eliminar} alt="Eliminar" /></button>
        <button className="botonAplicants" onClick={handleEditClick}><img className="botonAplicants" src={editar} alt="Editar" /></button>
      </div>

      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default ApplicantsX;