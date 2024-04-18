import axios from 'axios';
import React, { useState } from "react";
import basurero from "../../../assets/borrar.png";

import "./ProgramacionEventos.css"
function ProgramacionEventos(props) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: props.Titulo,
    description: props.Descripcion,
    date: props.FechayHora.split(',')[0],
    time: props.FechayHora.split(',')[1].trim(),
  });

  const handleChange = (e) => {
    if (e.target.name === 'time') {
      const formattedTime = e.target.value.split(':').map((part, index) => {
        return index === 0 ? part.padStart(2, '0') : part.padEnd(2, '0');
      }).join(':');
      setFormData({ ...formData, [e.target.name]: formattedTime });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdate = async () => {
    try {
      // Formatear la fecha y la hora antes de enviar la solicitud PUT
      const formattedDate = new Date(formData.date);
      const formattedTime = formData.time.split(':');
      const hours = parseInt(formattedTime[0], 10);
      const minutes = formattedTime[1];
      const isAM = hours < 12;

      // Add one day if PM and not already the next day
      if (!isAM && formattedDate.getHours() < 12) {
        formattedDate.setDate(formattedDate.getDate() + 1);
      }

      // Add 6 hours (handle overflow)
      let newHours = hours + 6;
      if (newHours >= 24) {
        newHours = newHours % 24; // Wrap around to next day if overflow
      }

      const adjustedTime = `${newHours.toString().padStart(2, '0')}:${minutes}`;

      const dateTime = `${formattedDate.toISOString().split('T')[0]}T${adjustedTime}:00.000Z`;

      await axios.put(`http://localhost:3000/api/v1/events/${props.id}`, { ...formData, date: dateTime }, { withCredentials: true });
      props.onUpdate();
      setEditMode(false);
    } catch (error) {
      console.error('Error al actualizar el evento:', error);
    }
  };

  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    
    <div className="ProgramacionEventos">
      
      {!editMode && (
        
        <>
          <div className='titulo'>
            <p className="pooading">{props.Titulo}</p>
          </div>
          <div className='description'>
            <p className="pooading">{props.Descripcion}</p>  
          </div>
          <div className='dat'>
            <p className="pooading">{props.FechayHora}</p>
          </div>
          <div className='botones'>
            <button className="EliminarButon" onClick={handleDelete}>
            <img className="Basurero" src={basurero} alt="Eliminar" />
          </button>
          <button className="AñadirButon" onClick={handleEdit}>
            Editar
          </button>
          </div>
          
        </>
      )}
      {editMode && (
        <>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
      
            <textarea  name="description" value={formData.description} onChange={handleChange} />
         
        
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
          <button onClick={handleUpdate}>Guardar</button>
        </>
      )}
    </div>
  );
}

export default ProgramacionEventos;



