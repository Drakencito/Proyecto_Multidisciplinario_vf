import React, { useState, useEffect } from "react";
import eliminar from '../../assets/borrar.png';
import editar from '../../assets/editar.png';
import '../Applicants/Applicants.css';
import axios from 'axios';

function Modal(props) {
  const [formData, setFormData] = useState({
    name: props.name || '',
    career: props.career || '',
    position: props.position || '',
    description: props.description || ''
  });

  useEffect(() => {
    setFormData({
      name: props.name || '',
      career: props.career || '',
      position: props.position || '',
      description: props.description || ''
    });
  }, [props.name, props.career, props.position, props.description]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/v1/applications/${props.id}`, formData, { withCredentials: true });
      props.onSave(formData);
      props.onClose();
    } catch (error) {
      console.error("Error al actualizar la aplicación:", error);
    }
  };
  return (
    <div className="modal" style={{ display: props.show ? "block" : "none" }}>
      <div>
        <div className="modal-content">
          <div className="x">
            <span className="close" onClick={props.onClose}>&times;</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" name="name" value={formData.name} onChange={handleInputChange} className="inputModal" />
            <input type="text" placeholder="Carrera" name="career" value={formData.career} onChange={handleInputChange} className="inputModal" />
            <input type="text" placeholder="Posición" name="position" value={formData.position} onChange={handleInputChange} className="inputModal" />
            <input type="text" placeholder="Descripción" name="description" value={formData.description} onChange={handleInputChange} className="inputModal" />
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
function ApplicantsX(props) {
  const [showModal, setShowModal] = useState(false);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/applications', { withCredentials: true });
        setApplications(response.data);
      } catch (error) {
        console.error("Error al obtener las aplicaciones:", error);
      }
    };
    fetchApplications();
  }, []);

  const handleEditClick = (id) => {
    setShowModal(true);
    setEditId(id); // Añade esta línea para guardar el ID de la aplicación que se está editando
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    // Aquí podrías realizar alguna acción después de actualizar la aplicación, como refrescar la lista de aplicaciones
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/applications/${id}`, { withCredentials: true });
      const updatedApplications = applications.filter(app => app._id !== id);
      setApplications(updatedApplications);
    } catch (error) {
      console.error("Error al eliminar la aplicación:", error);
    }
  };

  return (
    <div>
        {applications.map((app) => (
            <div key={app._id} className="ApplicantsX">
                <div className="info">
                    <div>
                        <p className="letra">Nombre: {app.name}</p>
                    </div>
                    <div>
                        <p className="letra">Carrera: {app.career}</p>
                    </div>
                    <div>
                        <p className="letra">Posición: {app.position}</p>
                    </div>
                    <div>
                        <p className="letra">Descripción: {app.description}</p>
                    </div>
                </div>

                <div className="boxBotonAplicants">
                    <button className="botonAplicants" onClick={() => handleDelete(app._id)}>
                        <img className="botonAplicants" src={eliminar} alt="Eliminar" />
                    </button>
                    <button className="botonAplicants" onClick={() => handleEditClick(app._id)}>
                        <img className="botonAplicants" src={editar} alt="Editar" />
                    </button>
                </div>
                <Modal show={showModal} onClose={handleCloseModal} onSave={handleSave} id={app._id} />
            </div>
        ))}
    </div>
);

}

export default ApplicantsX;